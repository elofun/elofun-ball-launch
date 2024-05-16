// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class Camera extends cc.Component {
  protected update(dt: number): void {
    // this.node
    //   .getChildByName("Rope")
    //   .getComponent(cc.RigidBody)
    //   .syncPosition(true);
  }
}
