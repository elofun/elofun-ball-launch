// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Ball from "../Ball";
// import GameManager from "../GameManager";
import GamePlayManager from "../GamePlayManager";
import ParticleManager from "../Particle/ParticleManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BallPhysics extends cc.Component {
  onBeginContact(
    contact: cc.PhysicsContact,
    self: cc.PhysicsBoxCollider,
    other: cc.PhysicsCircleCollider
  ) {
    GamePlayManager.Instance.Touching();
    this.scheduleOnce(() => {
      this.node.parent.getComponent(Ball).ballAngle();
    }, 1 / 60);
  }

  // update (dt) {}
}
