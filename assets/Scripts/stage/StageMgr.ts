import Stage from "./Stage";
import SingletonNode from "../utils/SingletonNode";
import GameMgr from "../game/GameManager";
import Helper from "../utils/Helper";
import GameDefine from "../game/GameDefine";
import PeerManager, { IDataReceived } from "../PeerComponent/PeerManager";
import StageQRscan from "./StageQRscan";
import StageLobby from "./StageLobby";
import StageGameEnd from "./StageGameEnd";
import StageInGame from "./StageInGame";
import {
  PeerActionType,
  PeerPhase,
  PeerStage,
} from "../PeerComponent/PeerDefine";
import StageStartGame from "./StageStartGame";

const { ccclass, property } = cc._decorator;

export enum Stages {
  StageQRscan,
  StageLobby,
  StageInGame,
  StageGameEnd,
  StageStartGame,
  StageTestGame,
}

@ccclass
export default class StageMgr extends SingletonNode<StageMgr>() {
  @property(cc.Prefab) private StagePrefabs: Array<cc.Prefab> = [];
  private StageCover: cc.Node = null;
  private isTweening: boolean = false;

  get CurrentStage(): cc.Node {
    return this.mCurrentStage;
  }

  private mPreviousStage: cc.Node = null;
  private mCurrentStage: cc.Node = null;
  private inputCode: number[] = [];

  static show(stageName: Stages, duration: number = 0.5) {
    if (StageMgr.Instance.isTweening) {
      return;
    }
    const instance = this.Instance;
    instance.mPreviousStage = instance.mCurrentStage;

    for (let stage of instance.node.children) {
      const isActive = stage.name == Stages[stageName];

      if (isActive) {
        instance.mCurrentStage = stage;
      }

      if (stage.active != isActive) {
        stage.active = isActive;
      }
    }

    if (
      instance.mPreviousStage &&
      instance.mCurrentStage &&
      instance.mPreviousStage != instance.mCurrentStage
    ) {
      instance.animate(duration);
    } else {
      instance.mCurrentStage.getComponent(Stage).init();
    }

    let msg: IDataReceived = {
      phase: PeerPhase.NONE,
      action: PeerActionType.SHOW,
      customParam: "",
    };
    return;
    PeerManager.Instance.PlayGame(false);

    switch (stageName) {
      case Stages.StageInGame:
        StageInGame.Instance.initial();
        PeerManager.Instance.PlayGame();
        msg.phase = PeerPhase.INGAME;
        break;
      case Stages.StageLobby:
        msg.phase = PeerPhase.WAITING;
        break;
      case Stages.StageGameEnd:
        msg.phase = PeerPhase.GAMEOVER;
        break;
    }

    PeerManager.Instance.sendMessageToAll(msg);
  }

  static nextStage(isNext: boolean = true, duration: number = 0.5) {
    const instance = this.Instance;
    let index = instance.node.children.indexOf(instance.mCurrentStage);

    if (!isNext && index == 0) {
      // window.location = GameDefine.DEEP_LINK_BACK;
    } else if (
      index != -1 &&
      ((isNext && index < instance.node.childrenCount - 1) ||
        (!isNext && index > 0))
    ) {
      index = isNext ? index + 1 : index - 1;
      StageMgr.show(
        Helper.GetIndexEnum(Stages, instance.node.children[index].name),
        duration
      );
    }
  }

  onLoad() {
    super.onLoad();
    for (let i = 0; i < this.StagePrefabs.length; i++) {
      const node = cc.instantiate(this.StagePrefabs[i]);
      this.node.addChild(node);
      node.active = false;
    }

    cc.systemEvent.on(
      cc.SystemEvent.EventType.KEY_DOWN,
      (event: cc.Event.EventKeyboard) => {
        this.inputCode.push(event.keyCode);
        if (this.inputCode.length >= 4) {
          if (this.inputCode.toString() == [54, 55, 56, 57].toString()) {
            cc.debug.setDisplayStats(true);
          }
          this.inputCode.shift();
        }
        if (PeerManager.Instance.isPlayWithRemote) {
          switch (StageMgr.Instance.CurrentStage.name) {
            case Stages[Stages.StageQRscan]:
              if (event.keyCode == 13) {
                StageQRscan.Instance.nextStage(true);
                PeerManager.Instance.setRemoteMode(true);
              }
              break;
            case Stages[Stages.StageStartGame]:
              if (event.keyCode == 13) {
                StageStartGame.Instance.nextStage(true);
              }
              break;
            case Stages[Stages.StageLobby]:
              if (event.keyCode == 13) {
                StageLobby.Instance.nextStage();
              }
              break;
            case Stages[Stages.StageGameEnd]:
              if (event.keyCode == 37) {
                StageGameEnd.Instance.chooseButton(false);
              } else if (event.keyCode == 39) {
                StageGameEnd.Instance.chooseButton(true);
              } else if (event.keyCode == 13) {
                if (StageGameEnd.Instance.btnPlay.interactable) {
                  StageGameEnd.Instance.nextStage();
                } else {
                  StageGameEnd.Instance.previousStage();
                }
              }
              break;
          }
        }
      }
    );

    window.addEventListener("message", this.onReciveMessage.bind(this), false);

    this.sendMessage("getControllerURL"); // có thể thêm customParam nếu muốn
    this.sendMessage("getPrefix");
    this.sendMessage("getControllerOrigin");
  }

  onReciveMessage(e) {
    if (e.data && e.data.action) {
      let msg = e.data;
      switch (msg.action) {
        case "getPrefix": {
          window.controllerPrefix = msg.message;
          break;
        }
        case "getControllerURL": {
          window.controllerURL = msg.message;
          break;
        }
        case "getControllerOrigin": {
          window.controllerOrigin = msg.message;
          break;
        }
      }
    }
  }

  sendMessage(action: string, customParam: any = null) {
    let msg = {
      action: action,
      game: "zig-zag", // game nào thì đặt tên đó (giống tên folder chứa game)
      customParam: customParam,
    };
    (window as any).parent.postMessage(msg, "*");
  }

  start() {
    this.StageCover = cc.find("Canvas").getChildByName("Stage Cover");
    this.StageCover.active = false;

    StageMgr.show(Stages.StageQRscan);
  }

  private animate(duration: number) {
    this.mPreviousStage.active = true;
    this.mCurrentStage.active = false;
    this.isTweening = true;

    this.StageCover.active = true;
    cc.tween(this.mPreviousStage)
      .to(
        duration,
        { scale: this.mPreviousStage.scaleX },
        {
          progress: (start, end, current, ratio) => {
            // this.mPreviousStage.opacity = (1 - ratio) * 255;
            this.StageCover.opacity = ratio * 255;
            return start + (end - start) * ratio;
          },
        }
      )
      .call(() => {
        this.mPreviousStage.active = false;
        this.mCurrentStage.active = true;
        this.mCurrentStage.getComponent(Stage).init();
      })
      .start();
    cc.tween(this.mCurrentStage)
      .delay(duration)
      .to(
        duration,
        { scale: this.mCurrentStage.scaleX },
        {
          progress: (start, end, current, ratio) => {
            // this.mCurrentStage.opacity = ratio * 255;
            this.StageCover.opacity = (1 - ratio) * 255;
            return start + (end - start) * ratio;
          },
        }
      )
      .call(() => {
        this.StageCover.active = false;
        this.isTweening = false;
      })
      .start();
  }
}
