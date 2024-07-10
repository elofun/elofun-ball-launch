// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

// import Singleton from "../utils/Singleton";

import StageMgr, { Stages } from "../stage/StageMgr";
import StageTestGame from "../stage/StageTestGame";
import SingletonNode from "../utils/SingletonNode";
import Ball from "./Ball";

import LevelManager from "./LevelManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GamePlayManager extends SingletonNode<GamePlayManager>() {
  // @property(FadeWall) public fadeWall: FadeWall = null;

  // @property(Number) timeToTouch: Number = null;

  @property(cc.Node) bottleNap: cc.Node = null;
  @property(cc.Label) timeToTouchLbl: cc.Label = null;
  @property(cc.Node) glassModel: cc.Node = null;

  public isOpenDoor: boolean = false;
  public isStopTouching: boolean = false;
  public timeToTouch: number = 0;

  // public currentLevel: number = null;
  public isLost: boolean = false;
  // label: any;

  init() {
    this.ResetPlayGround();
    LevelManager.Instance.SetUpLevel(0);
  }
  ResetPlayGround() {
    LevelManager.Instance.DisableHolder();
    this.bottleNap.parent.active = false;
    this.bottleNap.scale = 1;
    this.isOpenDoor = false;
    this.isStopTouching = false;
  }

  Win() {
    console.log("win");
    if (this.isLost == true) return;
    StageTestGame.Instance.setStartGame(false);

    this.init();
    this.ResetPlayGround();

    LevelManager.Instance.NextLevel();
    StageTestGame.Instance.showTimeNeedToTouch();
    this.isLost = false;
  }
  Replay() {
    // this.GameOver();

    StageTestGame.Instance.setStartGame(false);
    this.ResetPlayGround();
    LevelManager.Instance.SetUpLevel(LevelManager.Instance.getCurLevel());
    StageTestGame.Instance.showTimeNeedToTouch();
    this.isLost = false;
  }
  setBounce(timeBounce: number) {
    this.timeToTouch = timeBounce;
    this.timeToTouchLbl.string = this.timeToTouch.toString();
  }
  ReduceTimeTouch() {
    this.setBounce(--this.timeToTouch);
  }
  FadeWall() {
    console.log("WTF");
    cc.tween(this.bottleNap)
      .to(
        0.1,
        {
          scale: 0,
        },
        { easing: "fade" }
      )
      .start();
  }
  GameOver() {
    StageMgr.show(Stages.StageGameEnd);
  }
  Touching() {
    if (this.isStopTouching == true) return;
    if (this.timeToTouch > 1) {
      GamePlayManager.Instance.ReduceTimeTouch();

      console.log("this.timeToTouch", this.timeToTouch);
    } else if (this.timeToTouch == 1 && this.isOpenDoor == false) {
      //open door
      GamePlayManager.Instance.ReduceTimeTouch();
      this.isOpenDoor = true;
      GamePlayManager.Instance.FadeWall();
    } else if (this.isOpenDoor == true) {
      GamePlayManager.Instance.isLost = true;
      this.timeToTouchLbl.string = "LOSE";
      // LOST TODO: change lbl color
      this.isStopTouching = true;
      StageTestGame.Instance.ballHolder.getComponent(Ball).loseAnimation();
      this.scheduleOnce(() => {
        this.Replay();
      }, 2);
    }
  }
}
