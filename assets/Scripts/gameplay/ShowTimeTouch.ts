// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameManager from "../game/GameManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ShowTimeTouch extends cc.Component {
  protected onEnable(): void {
    // this.node.active = false;
  }
  @property(cc.Label)
  timeToTouch: cc.Label = null;
  setTimeToTouch(time: number) {
    this.timeToTouch.string = time.toString();
  }
}
