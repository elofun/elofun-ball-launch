// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class HigherBallDetect extends cc.Component {
  public HigherBall: cc.Node[] = [];
  // update (dt) {}
  protected onDisable(): void {
    this.HigherBall.length = 0;
  }
  onCollisionEnter(other: cc.Collider, self: cc.Collider) {
    if (other != self) {
      this.HigherBall.push(other.node.parent);
    }
  }
  //   onCollisionExit(other: cc.Collider, self: cc.Collider) {
  //     if (other != self && this.HigherBall.length < 1) {
  //       this.HigherBall.push(other.node.parent);
  //     }
  //   }
}
