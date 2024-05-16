// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class Chain extends cc.Component {
  // update (dt) {}
  @property(cc.RevoluteJoint) private revoJoint: cc.RevoluteJoint = null;
  private rigi: cc.RigidBody = null;
  // public MaxAngleDeflection = 30;
  // public SpeedOfPendulum = 100;
  @property(Number) swingSpeed: number = 0;
  @property(Number) maxAngle: number = 0;
  @property(Number) minAngle: number = 0;
  public isDisableSwing: boolean = false;
  public actualSpeedDir: number = 0;
  protected start(): void {
    this.rigi = this.node.getComponent(cc.RigidBody);
    this.actualSpeedDir = this.swingSpeed;
  }
  protected update(dt: number): void {
    // if (this.isDisableSwing == true) {
    // } else {
    this.ChangeDir(dt);
    // }
  }
  clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
  }
  ChangeDir(dt: number) {
    // this.actualSpeedDir = 0;
    // let dir: number = 1;
    // if (
    //   (this.node.angle > this.maxAngle && this.node.angle < 120) ||
    //   (this.node.angle < this.minAngle && this.node.angle > -120)
    // ) {
    //   this.swingSpeed *= -1;
    //   console.log("Change Dir");
    // }
    // this.rigi.linearVelocity = new cc.Vec2(this.swingSpeed, 0);

    if (this.node.angle > this.maxAngle && this.node.angle < 140) {
      this.actualSpeedDir = -this.swingSpeed;
    } else if (this.node.angle < this.minAngle && this.node.angle > -140) {
      this.actualSpeedDir = this.swingSpeed;
    }

    this.rigi.linearVelocity = new cc.Vec2(this.actualSpeedDir, 0);
    this.clamp(this.node.angle, -90, 90);
  }
}
