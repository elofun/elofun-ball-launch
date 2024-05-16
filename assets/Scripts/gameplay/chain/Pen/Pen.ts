// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  //   @property(Number) RotTime: number = 0;
  //   @property(Number) RotaAngle: number = 40;
  //   @property(Number) RotSpeed: number = 2;
  //   protected update(dt: number): void {
  //     this.node.angle = cc.Quat.fromEuler(
  //       0,
  //       0,
  //       this.RotaAngle * Math.sin(this.RotTime * this.RotSpeed)
  //     ).;
  //   }
  // update (dt) {}
}
