// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import StageTestGame from "../stage/StageTestGame";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Tuto extends cc.Component {
  @property(cc.Label) count: cc.Label = null;
  @property(cc.Node) guide: cc.Node = null;
  @property(cc.Node) stageCover: cc.Node = null;
  @property(cc.Node) tutoDes1: cc.Node = null;
  @property(cc.Node) tutoDes2: cc.Node = null;

  init() {
    this.node.active = true;
    console.log("START TUTORIAL");
    this.guide.scale = 0.5;
    this.stageCover.opacity = 70;
    this.count.node.active = true;
    this.tutoDes1.scale = 0.5;
    this.tutoDes2.scale = 0;
    let time = 5;
    this.count.string = time.toString();
    setTimeout(() => {
      let interval = setInterval(() => {
        this.count.string = (--time).toString();
        cc.tween(this.count.node)
          .to(0.1, { scale: 0.75 })
          .to(0.1, { scale: 1 })
          .start();
        if (time <= 3 && time > 0) {
          cc.tween(this.tutoDes1)
            .to(0.3, { scale: 0 }, { easing: "quadIn" }) //hide tuto1
            .call(() => {
              cc.tween(this.tutoDes2)
                .to(0.3, { scale: 0.5 }, { easing: "quadIn" })
                .start(); //show tuto2
            })
            .start();
        } else if (time <= 0) {
          clearInterval(interval); //stop count
          cc.tween(this.tutoDes2)
            .to(0.3, { scale: 0 }, { easing: "quadOut" }) //hide tuto2
            .call(() => {
              this.count.node.active = false;
              cc.tween(this.stageCover)
                .to(0.3, { opacity: 0 }, { easing: "quadOut" })
                .call(() => {
                  StageTestGame.Instance.showTimeNeedToTouch(); //start game
                })
                .start();
            })
            .start();
        }
      }, 1000);
    }, 0);
  }
  // update (dt) {}
}
