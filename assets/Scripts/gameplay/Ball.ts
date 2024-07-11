// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

// import GameManager from "./GameManager";
import GameDefine from "../game/GameDefine";
import StageTestGame from "../stage/StageTestGame";
import Helper from "../utils/Helper";
import GamePlayManager from "./GamePlayManager";
import ParticleManager from "./Particle/ParticleManager";
import TrajectoryLine from "./TrajectoryLine/TrajectoryLine";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Ball extends cc.Component {
  public static Instance: Ball = null;
  public rigidBody: cc.RigidBody = null;
  public trajectoryLineDir: cc.Vec2 = new cc.Vec2(0, 1);

  @property(cc.Node) public model: cc.Node = null;
  @property(cc.Node) public ball: cc.Node = null;
  @property(TrajectoryLine) public trajectoryLine: TrajectoryLine = null;
  @property(cc.Node) public particle: cc.Node = null;
  @property(cc.PhysicsCircleCollider)
  ballPhyCollider: cc.PhysicsCircleCollider = null;

  public isBallMoving: boolean = false;
  public mouseHold: boolean = false;

  protected onLoad(): void {
    Ball.Instance = this;
    this.rigidBody = this.ball.getComponent(cc.RigidBody);
  }
  protected onEnable(): void {
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyPress, this);
  }
  init() {
    console.log("BALL INIT _______________________---");

    this.Reset();
    this.trajectoryLine.drawCircle(
      this.ball.getPosition(),
      this.trajectoryLineDir,
      100
    );
    this.node.active = true;

    this.model.angle = 0;
  }

  SetDirOfBall(trajectoryLineDir: cc.Vec2) {
    let dir: cc.Vec2 = trajectoryLineDir
      .sub(this.ball.getPosition())
      .normalize()
      .mul(GameDefine.BallMoveSpeed);
    this.rigidBody.linearVelocity = dir;
  }
  onKeyPress(event: cc.Event.EventKeyboard) {
    if (StageTestGame.Instance.getStartGame() == false) return;

    switch (event.keyCode) {
      case cc.macro.KEY.right: //keycode right arrow
        if (this.isBallMoving == true) return;

        this.RotateTrajectoryLine(1);
        break;
      case cc.macro.KEY.left: //keycode left arrow
        if (this.isBallMoving == true) return;

        this.RotateTrajectoryLine(-1);
        break;
      case cc.macro.KEY.enter:
        if (this.isBallMoving == true) return;
        console.log("ENTER");
        this.ballPhyCollider.enabled = true;
        this.SetDirOfBall(this.trajectoryLineDir);
        this.trajectoryLine.graphics.clear();
        this.isBallMoving = true;
        break;
    }
  }

  RotateTrajectoryLine(dir: number) {
    this.trajectoryLineDir = this.trajectoryLineDir.rotate(
      0.017453 * GameDefine.degree * dir
    );
    this.rotateModel(dir);
    this.trajectoryLine.graphics.clear();
    this.trajectoryLine.drawCircle(
      this.ball.getPosition(),
      this.trajectoryLineDir,
      100
    );
  }
  rotateModel(dir: number) {
    this.node.active = true;
    this.model.angle += Helper.ToAngle(0.017453 * GameDefine.degree * dir);
  }
  Reset() {
    this.ballPhyCollider.enabled = false;
    this.particle.active = false;
    this.node.active = false;
    this.rigidBody.linearVelocity = cc.Vec2.ZERO;
    this.isBallMoving = false;
    this.trajectoryLineDir = new cc.Vec2(0, 1);
    this.ball.setPosition(0, 0);
    cc.tween(this.model)
      .to(0.3, { scaleY: 0.8 })
      .to(0.3, { scaleY: 1 })
      .repeatForever()
      .start();
  }

  ballAngle() {
    //change model angle  cal when hit wall
    if (this.isBallMoving == false) return;
    cc.tween(this.model)
      .to(0.3, { angle: this.AngleCal() }, { easing: "linear" })
      .start();
  }
  loseAnimation() {
    console.log("CC");

    cc.Tween.stopAllByTarget(this.node);

    cc.tween(this.rigidBody)
      // .delay(0.)
      .to(0.25, { linearVelocity: cc.Vec2.ZERO }, { easing: "expoOut" })
      .call(() => {
        {
          this.ballPhyCollider.enabled = false;
          this.particle.active = true;
        }
      })
      .start();
    cc.tween(this.model)
      .to(0.05, { scaleY: 0.6 })
      .to(1, { scaleY: 1 }, { easing: "bounceIn" })
      .union()
      .start();
  }
  slow() {
    this.rigidBody.linearVelocity = this.rigidBody.linearVelocity
      .normalize()
      .mul(100);
  }
  onHitWall() {
    this.ballAngle();
    this.rigidBody.linearVelocity = this.rigidBody.linearVelocity.mul(1.3);
    console.log(
      this.rigidBody.linearVelocity.x,
      this.rigidBody.linearVelocity.y
    );
  }
  AngleCal(): number {
    const tan =
      this.rigidBody.linearVelocity.y / this.rigidBody.linearVelocity.x;
    let t = 0;
    if (this.rigidBody.linearVelocity.x < 0) t = 1;

    return Helper.ToAngle(Math.atan(tan)) - 90 + 180 * t;
  }
}
