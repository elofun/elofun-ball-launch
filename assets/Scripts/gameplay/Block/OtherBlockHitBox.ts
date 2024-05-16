// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameManager from "../GameManager/GameManager";
import Block, { successDropState } from "./Block";

const { ccclass, property } = cc._decorator;

@ccclass
export default class OtherBlockHitBox extends cc.Component {
  private thisBlock: Block = null;
  protected start(): void {
    this.thisBlock = this.node.parent.getComponent(Block);
  }
  onCollisionEnter(other: cc.Collider, self: cc.Collider) {
    if (other.node.parent != self.node.parent) {
      let bottomBlock: Block = other.node.parent.getComponent(Block);

      let topNodePos: cc.Vec2 = other.node.parent.convertToNodeSpaceAR(
        this.node.parent.convertToWorldSpaceAR(this.node.getPosition())
      );
      if (other.node.parent == GameManager.Instance.topBlock) {
        let botNodePos: cc.Vec2 = other.node.getPosition();
        if (topNodePos.x >= 0) {
          this.thisBlock.CalculateRotateAngle(topNodePos.x, true);
        } else {
          this.thisBlock.CalculateRotateAngle(topNodePos.x, false);
        }
      } else if (
        GameManager.Instance.allBlock.includes(other.node.parent) == true
      ) {
        if (topNodePos.x >= 0) {
          this.thisBlock.Drop(true);
          this.thisBlock.Rotate(true);
        } else {
          this.thisBlock.Drop(false);
          this.thisBlock.Rotate(false);
        }

        this.enabled = false;
        this.node.active = false;
        GameManager.Instance.DropMulBlock(other.node.parent);
      }
    
    }
  }
  // update (dt) {}
}
