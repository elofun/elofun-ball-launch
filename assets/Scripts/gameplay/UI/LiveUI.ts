// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameManager from "../GameManager/GameManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ScoreUI extends cc.Component {
  @property(cc.Label) live: cc.Label = null;
  protected start(): void {
    this.setScore(GameManager.Instance.maxLive);
  }
  setScore(currentLive: number) {
    this.live.string = "Live: " + currentLive.toString();
  }
  moveUI() {}
}
