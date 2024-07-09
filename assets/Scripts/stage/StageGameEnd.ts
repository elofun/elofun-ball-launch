import SoundMgr from "../common/SoundMgr";
import GameDefine from "../game/GameDefine";

import LevelManager from "../gameplay/LevelManager";
import { PeerActionType, PeerPhase } from "../PeerComponent/PeerDefine";
import PeerManager, { IDataReceived } from "../PeerComponent/PeerManager";
import Stage from "./Stage";
import StageInGame from "./StageInGame";
import StageMgr, { Stages } from "./StageMgr";

const { ccclass, property } = cc._decorator;

@ccclass
export default class StageGameEnd extends Stage {
  @property(cc.Button) btnPlay: cc.Button = null;
  @property(cc.Button) btnBack: cc.Button = null;
  @property(cc.Label) score: cc.Label = null;
  @property(cc.Label) highScoreTxt: cc.Label = null;
  private highScore: number = 0;

  static Instance: StageGameEnd = null;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    StageGameEnd.Instance = this;
  }

  start() {
    this.btnPlay.interactable = true;
    this.btnBack.interactable = false;
  }

  setScore(score: number) {
    this.score.string = score.toString();
    if (this.highScore <= 0 || score > this.highScore) {
      this.highScore = score;
      this.highScoreTxt.string = "Điểm cao: " + this.highScore.toString();
    }
  }

  showEndGame() {
    StageMgr.show(Stages.StageGameEnd);

    SoundMgr.playSfx(SoundMgr.Instance.SFX_ENDSCREEN);
  }
  nextStage() {
    SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
    this.btnPlay.interactable = true;
    this.btnBack.interactable = false;

    cc.tween(this.btnPlay.node)
      .to(0.1, { scale: 0.65 })
      .to(0.1, { scale: 1 })
      .call(() => {
        StageMgr.show(Stages.StageStartGame);
      })
      .start();
  }

  previousStage() {
    SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
    this.btnPlay.interactable = false;
    this.btnBack.interactable = true;

    cc.tween(this.btnBack.node)
      .to(0.1, { scale: 0.65 })
      .to(0.1, { scale: 1 })
      .call(() => {
        StageMgr.show(Stages.StageStartGame);
      })
      .start();
    return;
  }

  chooseButton(isBtnNext: boolean) {
    SoundMgr.playSfx(SoundMgr.Instance.SFX_SELECT);
    this.btnBack.interactable = !isBtnNext;
    this.btnPlay.interactable = isBtnNext;
  }
  public init(): void {
    this.setScore(LevelManager.Instance.getCurLevel() + 1);
  }
}
