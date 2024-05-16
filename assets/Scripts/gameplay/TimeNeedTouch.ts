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

  // start() {}
  setBounce(timeBounce: number) {
    this.TimeNeedToTouch = timeBounce;
    this.label.string = this.TimeNeedToTouch.toString();
    this.isOpenDoor = false;
  }
  Touching() {
    if (this.TimeNeedToTouch > 0) {
      this.TimeNeedToTouch--;
      this.label.string = this.TimeNeedToTouch.toString();
      if (this.TimeNeedToTouch == 0 && this.isOpenDoor == false) {
        GamePlayManager.Instance.fadeWall.FadeWall();
        this.label.string = this.TimeNeedToTouch.toString();
        this.isOpenDoor = true;
      }
    } else if (this.TimeNeedToTouch == 0) {
      this.isOpenDoor = true;
      GamePlayManager.Instance.isLost = true;
      this.label.string = "Lost";
      this.scheduleOnce(() => {
        GamePlayManager.Instance.Lose();
      }, 0.4);
    }
  }

  // update (dt) {}
}
