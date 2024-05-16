// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Block, { successDropState } from "./Block/Block";
import GameManager from "./GameManager/GameManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class OutOfBoundLine extends cc.Component {
  onCollisionEnter(other: cc.Collider, self: cc.Collider) {
    const block: Block = other.node.parent.getComponent(Block);
    if (block.currentState == null) {
      other.node.parent.active = false;
      GameManager.Instance.LoseLive();
      console.log("OUT DELE");
    } else if (
      block.currentState == successDropState.perfect &&
      GameManager.Instance.allBlock.length == 1
    ) {
      GameManager.Instance.GameOver();
    }
  }
  // update (dt) {}
}
