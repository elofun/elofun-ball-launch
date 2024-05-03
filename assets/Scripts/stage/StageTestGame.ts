// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Stage from "./Stage";

const { ccclass, property } = cc._decorator;

@ccclass
export default class StageTestGame extends Stage {
  @property(cc.Node) ballHolder: cc.Node = null;
  protected start(): void {
    

    this.ballHolder.active = true;
  }
  // update (dt) {}
}
