// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Timer from "../../utils/Timer";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Pendulum extends cc.Component {
  public speed: number = 400;
  public limit: number = 10;
  public randomStart: boolean = false;
  random: number = 0;
  protected onLoad(): void {
    if (this.randomStart) {
      this.random = this.randomInRange(0, 1);
    }
  }
  randomInRange(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
  // update (dt) {}
  protected update(dt: number): void {
    let angle: number = this.limit * Math.sin(tim+this.random * this.speed);
    this.node.angle = angle;
    console.log(angle);
  }
}
