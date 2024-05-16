// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Block from "../Block/Block";
import BlockSpawner from "../Block/BlockSpawner";
import Camera from "../Cam/Camera";
import ShakeEffect from "../Effect/ShakeEffect";

import ScoreUI from "../UI/LiveUI";
import UIManager from "../UI/UIManager";

import Rope from "../chain/Rope";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameManager extends cc.Component {
  public allBlock: cc.Node[] = [];
  public static Instance: GameManager = null;
  public cam: cc.Node = null;
  @property(cc.Node) public rope: cc.Node = null;
  @property(Number) public numberOfBlockBeginToShake: number = 0;
  @property(Number) public movingDistance: number = 90;
  @property(Number) public moveSpeed: number = 1;
  @property(Number) public maxLive: number = 3;
  public haveFirstBlock: boolean = false;
  public isAlive: boolean = true;
  public blockMoveDir: cc.Vec2 = new cc.Vec2(1, 0);
  public isBlockMoving = false;
  public topBlock: cc.Node = null;
  public timeNeedToMoveCam: number = 0;
  public currentLive: number = 0;
  protected onLoad(): void {
    GameManager.Instance = this;
    cc.director.getPhysicsManager().enabled = true;
    cc.director.getCollisionManager().enabled = true;
  }
  protected start(): void {
    this.currentLive = this.maxLive;
    this.cam = cc.Camera.findCamera(this.node.parent).node;
    console.log(this.cam);
  }
  AddBlock(block: cc.Node) {
    this.allBlock.push(block);
    this.timeNeedToMoveCam++;
    console.log(this.timeNeedToMoveCam);

    if (this.timeNeedToMoveCam > 3) {
      this.rope.getComponent(Rope).MoveUp();
      this.MoveCam();
    }
    if (this.allBlock.length > this.numberOfBlockBeginToShake) {
      this.isBlockMoving = true;
      this.SetTowerMove();

      this.MoveTheTower();
    } else {
      if (this.isBlockMoving == true) {
        this.SetTowerMove();

        this.MoveTheTower();
      }
    }
  }
  MoveTheTower() {
    for (let index = this.allBlock.length - 1; index >= 0; --index) {
      let tempBlock: cc.Node = this.allBlock[index];
      let blockScript: Block = tempBlock.getComponent(Block);
      blockScript.beginMove = true;
      blockScript.moveDir = this.blockMoveDir;
      blockScript.moveSpeed = this.moveSpeed;
    }
  }
  SetTowerMove() {
    if (this.allBlock.length > 12) {
      this.moveSpeed += 0.05;
      this.movingDistance += 5;
      this.clamp(this.moveSpeed, 2, 0);
      this.clamp(this.movingDistance, 100, -100);
    }
  }
  clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
  }

  DropMulBlock(block: cc.Node) {
    const blockIndex = this.allBlock.indexOf(block);
    let tempBlock: cc.Node = null;
    let count: number = 0;
    for (let index = this.allBlock.length - 1; index >= blockIndex; --index) {
      if (this.allBlock.length == 1) {
        break;
      }
      tempBlock = this.allBlock.pop();
      let blockScript: Block = tempBlock.getComponent(Block);
      blockScript.Drop(true);
      blockScript.Rotate(true);
      if (this.allBlock.length >= 3) count++;
      if (count == 3)
        //number of block break
        break;
    }
    if (this.allBlock.length >= 1) {
      this.topBlock = this.allBlock[this.allBlock.length - 1];
      if (this.allBlock.length == 1) {
        this.timeNeedToMoveCam = 1;
      } else {
        this.timeNeedToMoveCam = this.allBlock.length;
      }
    } else {
      this.haveFirstBlock = false;
      this.topBlock = null;
    }
    this.rope.getComponent(Rope).MoveDown(count);
    this.MoveCamDown(count);
    this.LoseLive();
  }
  MoveCam() {
    UIManager.Instance.MoveUIUp();
    cc.tween(this.cam)
      .to(0.5, {
        position: new cc.Vec3(
          this.cam.getPosition().x,
          this.cam.getPosition().y + 51,
          0
        ),
      })
      .start();
  }
  CheckTopBlockReachTarget(): boolean {
    const topBlockPos: cc.Vec2 = this.node.convertToNodeSpaceAR(
      this.topBlock.parent.convertToWorldSpaceAR(this.topBlock.getPosition())
    );
    if (
      topBlockPos.x >= this.movingDistance ||
      topBlockPos.x <= -this.movingDistance
    ) {
      if (topBlockPos.x >= this.movingDistance) {
        this.blockMoveDir.x = -1;
      } else if (topBlockPos.x <= -this.movingDistance) {
        this.blockMoveDir.x = 1;
      }
      return true;
    } else {
      return false;
    }
  }
  MoveCamDown(BlockDropNum: number) {
    UIManager.Instance.MoveUIDown(BlockDropNum);

    cc.tween(this.cam)
      .to(0.3, {
        position: new cc.Vec3(
          this.cam.getPosition().x,
          this.cam.getPosition().y - Math.abs(51 * BlockDropNum),
          0
        ),
      })
      .call(() => {
        console.log(this.node.getComponent(ShakeEffect));

        this.node.getComponent(ShakeEffect).shakeNode(this.cam);
      })
      .start();
  }
  LoseLive() {
    if (this.isAlive == true) {
      let scoreText: ScoreUI = UIManager.Instance.remainLiveUI;
      scoreText.setScore(--this.currentLive);
      if (this.currentLive <= 0) {
        this.GameOver();
        this.isAlive = false;
      }
    }
  }
  GameOver() {
    console.log("Lose");
    this.isAlive = false;
    UIManager.Instance.GameOverPopup();
  }
  ResetGame() {
    this.isAlive = true;
    this.currentLive = this.maxLive;
    this.topBlock = null;
    this.timeNeedToMoveCam = 1;
    this.haveFirstBlock = false;
    this.allBlock.length = 0;
    this.moveSpeed = 0;
    this.movingDistance = 0;
    this.isBlockMoving = false;
    let scoreText: ScoreUI = UIManager.Instance.remainLiveUI;
    scoreText.setScore(this.currentLive);
    UIManager.Instance.Reset();
    BlockSpawner.Instance.Reset();
    this.ResetCamera();
    this.rope.getComponent(Rope).Reset();
  }
  ResetCamera() {
    cc.tween(this.cam)
      .to(0.3, {
        position: new cc.Vec3(0, 0, 0),
      })

      .start();
  }
  update(dt) {
    if (this.isBlockMoving == true) {
      if (this.CheckTopBlockReachTarget()) {
        console.log(
          "this.CheckTopBlockReachTarget()",
          this.CheckTopBlockReachTarget()
        );
        this.MoveTheTower();
      }
    }
  }
}
