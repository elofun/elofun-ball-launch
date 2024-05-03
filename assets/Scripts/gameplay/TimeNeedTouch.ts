// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameManager from "./GameManager";
import GamePlayManager from "./GamePlayManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TimeNeedToTouch extends cc.Component {
  @property(cc.Label)
  label: cc.Label = null;

  @property
  public TimeNeedToTouch: number = 0;
  public isOpenDoor: boolean = false;

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  start() {
    this.label.string = this.TimeNeedToTouch.toString();
  }
  SetTimeNeedToTouch() {
    if (this.TimeNeedToTouch == 0 && this.isOpenDoor == false) {
      GamePlayManager.Instance.fadeWall.FadeWall();
      this.label.string = this.TimeNeedToTouch.toString();

      this.isOpenDoor = true;
    } else if (this.TimeNeedToTouch > 0) {
      this.TimeNeedToTouch--;
      this.label.string = this.TimeNeedToTouch.toString();
    } else if (this.TimeNeedToTouch == 0) {
      GamePlayManager.Instance.Lose();
      this.label.string = "Lost";
    }
  }

  // update (dt) {}
}
