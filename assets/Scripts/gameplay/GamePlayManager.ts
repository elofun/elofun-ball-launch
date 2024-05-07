// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

// import Singleton from "../utils/Singleton";

import SingletonNode from "../utils/SingletonNode";
import FadeWall from "./FadeWall";
import LevelManager from "./LevelManager.js";
import TimeNeedToTouch from "./TimeNeedTouch";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GamePlayManager extends SingletonNode<GamePlayManager>() {
  @property(TimeNeedToTouch) public timeNeedToTouch: TimeNeedToTouch = null;
  @property(FadeWall) public fadeWall: FadeWall = null;

  // public static Instance: GamePlayManager = null;

  public currentLevel: number = null;
  public isLost: boolean = false;

  protected onEnable(): void {
    cc.director.getPhysicsManager().enabled = true;
    cc.director.getCollisionManager().enabled = true;
    // cc.director.getPhysicsManager().debugDrawFlags =
    //   cc.PhysicsManager.DrawBits.e_aabbBit |
    //   cc.PhysicsManager.DrawBits.e_pairBit |
    //   cc.PhysicsManager.DrawBits.e_centerOfMassBit |
    //   cc.PhysicsManager.DrawBits.e_jointBit |
    //   cc.PhysicsManager.DrawBits.e_shapeBit;
  }
  protected start(): void {
    if (this.currentLevel == null) {
      this.currentLevel = 0;
      LevelManager.Instance.SetUpLevel(this.currentLevel); // set level to 0
      // this.ballHolder.active = true;
    }
  }

  Win() {
    if (this.isLost == true) return;
    LevelManager.Instance.DisableHolder();
    LevelManager.Instance.NextLevel();
  }
  Lose() {
    LevelManager.Instance.DisableHolder();
    LevelManager.Instance.SetUpLevel(this.currentLevel);
    this.isLost = false;
  }
}
