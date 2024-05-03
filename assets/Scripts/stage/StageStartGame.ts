// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SoundMgr from "../common/SoundMgr";
import Stage from "./Stage";
import StageMgr, { Stages } from "./StageMgr";

const { ccclass, property } = cc._decorator;

@ccclass
export default class StageStartGame extends Stage {
  @property(cc.Node) startButton: cc.Node = null;

  static Instance: StageStartGame = null;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    StageStartGame.Instance = this;
  }

  nextStage(isRemote: boolean = false) {
    if (isRemote) {
      SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
      cc.tween(this.startButton)
        .to(0.1, { scale: 0.65 })
        .to(0.1, { scale: 0.5 })
        .call(() => {
          StageMgr.show(Stages.StageTestGame);
        })
        .start();
    } else {
      StageMgr.show(Stages.StageTestGame);
    }
  }
}
