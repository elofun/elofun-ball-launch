// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameManager from "../GameManager/GameManager";
import ParticleManager from "../Particle/ParticleManager";
import OtherBlockHitBox from "./OtherBlockHitBox";

export enum successDropState {
  perfect,
  semiPerfect,
}

const { ccclass, property } = cc._decorator;
@ccclass
export default class Block extends cc.Component {
  @property(cc.Node) model: cc.Node = null;
  private width: number = 0;
  // public topHouseConnector: cc.Node = null;
  public beginMove: boolean = false;
  public moveSpeed: number = 1;
  public moveDir: cc.Vec2 = cc.Vec2.RIGHT;
  @property(Number) public rangeMove: number = 0;
  @property(Number) public timeMove: number = 0;
  public successDropState = {
    perfect: "perfect",
    notPerfect: "notPerfect",
  };
  public currentState: successDropState = null;
  protected onEnable(): void {
    this.width = this.node.getContentSize().width;
  }
  Rotate(isRotateRight: boolean) {
    let tempAngle: number = 30;
    if (isRotateRight == true) {
      tempAngle *= -1;
    }
    cc.tween(this.model)
      .to(0.1, { angle: tempAngle })
      .to(0.3, { angle: 0 })

      .start();
  }
  Drop(isDropRight) {
    this.node.group = "noContact";

    this.node.getComponent(cc.RigidBody).type = cc.RigidBodyType.Static;
    this.node.getComponent(cc.PhysicsBoxCollider).enabled = false;

    this.node.getComponent(cc.RigidBody).enabled = false;

    this.node.getComponent(cc.RigidBody).fixedRotation = false;
    this.node.getChildByName("OtherBlockHitBox").active = false;
    this.node.getChildByName("BlockHitBox").active = false;
    let dir = 1;
    if (isDropRight == false) {
      dir = -1;
    } else {
      dir = 1;
    }
    let tempAngle = 60;
    let temPos = this.node.position;
    cc.tween(this.node)
      .call(() => {
        this.node.getComponent(cc.RigidBody).enabled = false;
      })
      .to(0.3, {
        angle: tempAngle * -dir,
        position: new cc.Vec3(temPos.x + 90 * dir, temPos.y - 100, 0),
      })
      .call(() => {
        this.node.active = false;
      })

      .start();
  }
  MoveSideToSide(movingDir: cc.Vec2, moveSpeed: number) {
    // let tempPos:cc.Vec2 = new cc.Vec2(this.node.position.x,)
    let movePos: number = moveSpeed * movingDir.x;
    let lerp = new cc.Vec2(0, 0);
    let t = cc.Vec2.lerp<cc.Vec2>(
      lerp,
      this.node.getPosition(),
      new cc.Vec2(this.node.position.x + movePos, this.node.position.y),
      moveSpeed
    );
    this.node.setPosition(t);
    return;
  }
  MoveToAline(offSet: number) {
    let thisNodePos: cc.Vec3 = this.node.position.clone();
    if (offSet > 0) {
      thisNodePos = new cc.Vec3(thisNodePos.x - offSet, thisNodePos.y, 0);
    } else if (offSet < 0) {
      thisNodePos = new cc.Vec3(
        thisNodePos.x + Math.abs(offSet),
        thisNodePos.y,
        0
      );
    }
    cc.tween(this.node)
      .to(0.05, {
        position: thisNodePos,
      })
      .start();
  }
  CalculateRotateAngle(distantToCenter: number, isRotateRight: boolean) {
    let perCentDistant: number = (Math.abs(distantToCenter) * 100) / this.width;

    if (Math.abs(perCentDistant) <= 10 && Math.abs(perCentDistant) >= 0) {
      GameManager.Instance.AddBlock(this.node);
      this.MoveToAline(distantToCenter);
      this.node.getComponent(cc.RigidBody).type = cc.RigidBodyType.Static;
      GameManager.Instance.topBlock = this.node;
      //perfect drop
      this.currentState = successDropState.perfect;
      ParticleManager.Instance.SpawnParticleForPerfectDrop();
      console.log("PERFECT DROP");
    } else if (
      Math.abs(perCentDistant) > 10 &&
      Math.abs(perCentDistant) <= 60
    ) {
      if (Math.abs(perCentDistant) >= 35) this.Rotate(isRotateRight);
      this.currentState = successDropState.semiPerfect;

      GameManager.Instance.AddBlock(this.node);
      this.node.getComponent(cc.RigidBody).type = cc.RigidBodyType.Static;
      GameManager.Instance.topBlock = this.node;
      console.log("SEMI PERFECT DROP");
    } else {
      this.node.getChildByName("OtherBlockHitBox").active = false;
      this.node.getChildByName("BlockHitBox").active = false;
      GameManager.Instance.LoseLive();
      this.Drop(isRotateRight);
      console.log("Fail DROP");

      this.scheduleOnce(() => {
        this.node.active = false;
      }, 0.5);
    }
  }
  protected update(dt: number): void {
    if (this.beginMove == true)
      this.MoveSideToSide(this.moveDir, this.moveSpeed);
  }
}
