// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameManager from "./GameManager";
import ParticleManager from "./Particle/ParticleManager";
import TrajectoryLine from "./TrajectoryLine/TrajectoryLine";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Ball extends cc.Component {
  public static Instance: Ball = null;
  public rigidBody: cc.RigidBody = null;
  public trajectoryLineDir: cc.Vec2 = new cc.Vec2(0, 1);
  @property(cc.Node) public SFX: cc.Node = null;

  @property(cc.Node) public ball: cc.Node = null;
  @property(TrajectoryLine) public trajectoryLine: TrajectoryLine = null;

  @property(Number) public moveSpeed: number = 0;
  public isBallMoving: boolean = false;
  public mouseHold: boolean = false;

  protected onLoad(): void {
    Ball.Instance = this;
    this.rigidBody = this.ball.getComponent(cc.RigidBody);
    this.rigidBody.gravityScale = 0;

    // this.node.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyPress, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyPress, this);
    cc.systemEvent.on(
      cc.SystemEvent.EventType.KEY_DOWN,
      this.onKeyPressEnter,
      this
    );
  }
  protected start(): void {
    this.trajectoryLine.drawCircle(
      this.ball.getPosition(),
      this.trajectoryLineDir,
      100
    );
  }
  SetDirOfBallWithMouse(trajectoryLineDir: cc.Vec2) {
    let dir: cc.Vec2 = trajectoryLineDir
      .sub(this.ball.getPosition())
      .normalize()
      .mul(this.moveSpeed);
    console.log(dir.x, dir.y);
    this.rigidBody.linearVelocity = dir;
  }
  onKeyPress(event: cc.Event.EventKeyboard) {
    // console.log("CC");
    if (this.node.active == false) return;

    switch (event.keyCode) {
      case cc.macro.KEY.a:
        if (this.isBallMoving == true) return;
        console.log("Press a key");
        this.RotateTrajectoryLine();
        break;
    }
  }
  onKeyPressEnter(event: cc.Event.EventKeyboard) {
    console.log(this.node.active);
    if (this.node.active == false) return;
    switch (event.keyCode) {
      case cc.macro.KEY.enter:
        if (this.isBallMoving == true) return;

        console.log("Press enter key");
        this.SetDirOfBallWithMouse(this.trajectoryLineDir);
        this.trajectoryLine.graphics.clear();
        this.isBallMoving = true;
        break;
    }
  }
  RotateTrajectoryLine() {
    this.trajectoryLineDir = this.trajectoryLineDir.rotate(0.017453 * 2);
    this.trajectoryLine.graphics.clear();

    this.trajectoryLine.drawCircle(
      this.ball.getPosition(),
      this.trajectoryLineDir,
      100
    );
  }

  protected update(dt: number): void {
    // this.trajectoryLine.graphics.clear();
    // if (this.mouseHold == false) return;
    // if (this.isBallMoving == false) {
    //   let dirFormBallToMouse = this.mousePosDir
    //     .sub(this.ball.getPosition())
    //     .normalize();
    //   this.trajectoryLine.drawCircle(
    //     this.ball.getPosition(),
    //     dirFormBallToMouse,
    //     100
    //   );
    // }
  }
}
