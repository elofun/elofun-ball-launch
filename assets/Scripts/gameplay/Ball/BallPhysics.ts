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
import ShakeEffect from "../ShakeEffect";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BallPhysics extends cc.Component {
  onBeginContact(
    contact: cc.PhysicsContact,
    self: cc.PhysicsBoxCollider,
    other: cc.PhysicsCircleCollider
  ) {
    GamePlayManager.Instance.Touching();
    this.getComponent(ShakeEffect).shakeNode(
      GamePlayManager.Instance.glassModel
    );
    this.scheduleOnce(() => {
      this.node.parent.getComponent(Ball).onHitWall();
    }, 1 / 60);
  }

  // update (dt) {}
}
