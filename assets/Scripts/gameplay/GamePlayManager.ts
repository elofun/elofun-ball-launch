// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

// import Singleton from "../utils/Singleton";

import SingletonNode from "../utils/SingletonNode";
import FadeWall from "./FadeWall";
import TimeNeedToTouch from "./TimeNeedTouch";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GamePlayManager extends SingletonNode<GamePlayManager>() {
  @property(TimeNeedToTouch) public timeNeedToTouch: TimeNeedToTouch = null;
  @property(FadeWall) public fadeWall: FadeWall = null;

  public static Instance: GamePlayManager = null;

  protected onEnable(): void {
    GamePlayManager.Instance = this;

    cc.director.getPhysicsManager().enabled = true;
    cc.director.getCollisionManager().enabled = true;
  }

  Win() {}
  Lose() {
    console.log("You Lose");
  }
}
