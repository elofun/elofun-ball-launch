// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import SingletonNode from "../utils/SingletonNode";
import * as levelDesign from "../gameplay/Level/GameplayLevelDesgin.js";
import ObstaclesWallSpawner from "./Wall/ObstaclesWallSpawner";
import TimeNeedToTouch from "./TimeNeedTouch";
import GamePlayManager from "./GamePlayManager";
import Ball from "./Ball";
import FadeWall from "./FadeWall";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LevelManager extends SingletonNode<LevelManager>() {
  @property(cc.Node) public wall: cc.Node = null;
  @property(cc.Node) public fadeWallHolder: cc.Node = null;
  @property(cc.Node) public timeToBounceHolder: cc.Node = null;

  @property(cc.Node) public ballHolder: cc.Node = null;
  private _levelDesignKey = {
    wall: "wall",
    ballStartPos: "ballStartPos",
    fadeWallHolder: "fadeWall",
    obstaclesWall: "obstaclesWall",
    timeToBounce: "timeToBounce",
  };
  SetUpLevel(levelIndex: number) {
    const currentLevel = levelDesign[levelIndex];
    // console.log(currentLevel["wall"]);

    this.wall.children.forEach((eachWall) => {
      let tempWall = this.GetValueByKey(currentLevel["wall"], eachWall.name);

      eachWall.setPosition(tempWall.pos.x, tempWall.pos.y);
      eachWall.width = tempWall.size.w;
      eachWall.height = tempWall.size.h;
      eachWall.getComponent(cc.PhysicsBoxCollider).size.height =
        tempWall.size.h;
      eachWall.getComponent(cc.PhysicsBoxCollider).size.width = tempWall.size.w;
    });

    this.ballHolder.setPosition(
      currentLevel[this._levelDesignKey.ballStartPos].x,
      currentLevel[this._levelDesignKey.ballStartPos].y
    );

    this.fadeWallHolder.setPosition(
      currentLevel[this._levelDesignKey.fadeWallHolder].pos.x,
      currentLevel[this._levelDesignKey.fadeWallHolder].pos.y
    );
    if (currentLevel[this._levelDesignKey.obstaclesWall].length > 0) {
      //   console.log(currentLevel[this._levelDesignKey.obstaclesWall]);

      for (
        let index = 0;
        index < currentLevel[this._levelDesignKey.obstaclesWall].length;
        index++
      ) {
        let obstaclesWallPos: cc.Vec2 = new cc.Vec2(
          currentLevel[this._levelDesignKey.obstaclesWall][index].pos.x,
          currentLevel[this._levelDesignKey.obstaclesWall][index].pos.y
        );
        let obsWall: cc.Node = ObstaclesWallSpawner.Instance.SpawnThing(
          obstaclesWallPos,
          ObstaclesWallSpawner.Instance._wallPrefabName
        );
        obsWall.active = false;
        obsWall.rotation =
          currentLevel[this._levelDesignKey.obstaclesWall][index].rotation;
        obsWall.width =
          currentLevel[this._levelDesignKey.obstaclesWall][index].size.w;
        obsWall.height =
          currentLevel[this._levelDesignKey.obstaclesWall][index].size.h;
        obsWall.getComponent(cc.PhysicsBoxCollider).size.width =
          currentLevel[this._levelDesignKey.obstaclesWall][index].size.w;
        obsWall.getComponent(cc.PhysicsBoxCollider).size.height =
          currentLevel[this._levelDesignKey.obstaclesWall][index].size.h;
        obsWall.active = true;
      }
    }
    this.timeToBounceHolder
      .getComponent(TimeNeedToTouch)
      .setBounce(currentLevel[this._levelDesignKey.timeToBounce]);
    this.fadeWallHolder.active = true;
    this.ballHolder.active = true;
    console.log(
      "this.ballHolder.getPosition()",
      this.ballHolder.getPosition().x,
      this.ballHolder.getPosition().y
    );
  }
  DisableHolder() {
    // this.fadeWallHolder.active = false;
    // this.ballHolder.active = false;

    ObstaclesWallSpawner.Instance.ClearHolder();
    this.ballHolder.getComponent(Ball).Reset();
    this.fadeWallHolder.getComponentInChildren(FadeWall).Reset();
    this.ballHolder.active = false;
  }
  
  NextLevel() {
    this.SetUpLevel(++GamePlayManager.Instance.currentLevel);
  }
  GetValueByKey(objectInput, keyToFind: string) {
    for (const key in objectInput) {
      if (Object.prototype.hasOwnProperty.call(objectInput, key)) {
        const element = objectInput[key];
        if (keyToFind.toLowerCase() == key.toLowerCase()) {
          return element;
        }
      }
    }
  }
}
