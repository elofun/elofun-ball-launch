// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SoundMgr from "../common/SoundMgr";
import GameDefine from "../game/GameDefine";
import PeerManager from "../PeerComponent/PeerManager";
import QRCodeGen from "../PeerComponent/QRCodeGen";
import Stage from "./Stage";
import StageMgr, { Stages } from "./StageMgr";

const { ccclass, property } = cc._decorator;

@ccclass
export default class StageLobby extends Stage {
  @property(QRCodeGen) qrCode: QRCodeGen = null;
  @property(cc.Button) btnNext: cc.Button = null;
  @property(cc.Label) lblRoomCode: cc.Label = null;
  @property(cc.Node) players: cc.Node[] = [];
  @property(cc.Material) normalSpine: cc.Material = null;
  @property(cc.Material) graySpine: cc.Material = null;
  @property(cc.Label) msg: cc.RichText = null;

  static Instance: StageLobby = null;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    StageLobby.Instance = this;
  }

  start() {
    this.msg.string = `${window.controllerOrigin}`;
  }

  onEnable() {
    return;
    for (let i = 0; i < 3; i++) {
      this.setUI(PeerManager.Instance.clientConnected[i] ? true : false, i);
    }
  }

  // update (dt) {}

  nextStage() {
    SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
    cc.tween(this.btnNext.node)
      .to(0.1, { scale: 0.65 })
      .to(0.1, { scale: 0.5 })
      .call(() => {
        StageMgr.show(Stages.StageInGame);
      })
      .start();
  }

  setUI(isConnected: boolean, index: number) {
    this.players[index].getChildByName("playerReady").active = isConnected;
    this.players[index].getChildByName("playerNotReady").active = !isConnected;
    this.players[index]
      .getChildByName("playerSprite")
      .getComponent(sp.Skeleton)
      .setMaterial(0, isConnected ? this.normalSpine : this.graySpine);
  }
}
