// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import SingletonNode from "../utils/SingletonNode";
import * as levelDesign2 from "../gameplay/Level/GameplayLevelDesgin.js";
import ObstaclesWallSpawner from "./Wall/ObstaclesWallSpawner";
import TimeNeedToTouch from "./TimeNeedTouch";
import GamePlayManager from "./GamePlayManager";
import Ball from "./Ball";

import FadeWall from "./FadeWall";
import GameDefine from "../game/GameDefine";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LevelManager extends SingletonNode<LevelManager>() {
  @property(cc.Node) public wall: cc.Node = null;
  @property(cc.Node) public fadeWallHolder: cc.Node = null;
  // @property(cc.Node) public timeToBounceHolder: cc.Node = null;
  @property(cc.Label) public levelShowlbl: cc.Label = null;
  @property(cc.Label) public timeToBouncePop: cc.Label = null;

  @property(cc.Node) public ballHolder: cc.Node = null;
  private _currentLevel: number = 0;

  private _levelDesignKey = {
    wall: "wall",
    ballStartPos: "ballStartPos",
    fadeWallHolder: "fadeWall",
    obstaclesWall: "obstaclesWall",
    timeToBounce: "timeToBounce",
  };
  getCurLevel() {
    return this._currentLevel;
  }
  SetUpLevel(levelIndex: number) {
    if (levelIndex > levelDesign2.length - 1) {
      GamePlayManager.Instance.GameOver();
      return;
    }

    this._currentLevel = levelIndex;
    const currentLevel = levelDesign2[levelIndex];
    this.levelShowlbl.string = `Level ${levelIndex + 1}`;
    this.wall.children.forEach((eachWall) => {
      let tempWall = this.GetValueByKey(currentLevel["wall"], eachWall.name);
      if (tempWall == null) return;

      eachWall.setPosition(tempWall.pos.x, tempWall.pos.y);
      eachWall.width = tempWall.size.w;
      eachWall.height = tempWall.size.h;
      eachWall.getComponent(cc.PhysicsBoxCollider).size.height =
        tempWall.size.h;
      eachWall.getComponent(cc.PhysicsBoxCollider).size.width = tempWall.size.w;
      eachWall.active = true;
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
          currentLevel[this._levelDesignKey.obstaclesWall][index].size.w *
          GameDefine.ObstaclesWall.width;
        obsWall.height =
          currentLevel[this._levelDesignKey.obstaclesWall][index].size.h *
          GameDefine.ObstaclesWall.hight;
        obsWall.getComponent(cc.PhysicsBoxCollider).size.width =
          currentLevel[this._levelDesignKey.obstaclesWall][index].size.w *
          GameDefine.ObstaclesWall.width;
        obsWall.getComponent(cc.PhysicsBoxCollider).size.height =
          currentLevel[this._levelDesignKey.obstaclesWall][index].size.h *
          GameDefine.ObstaclesWall.hight;
        obsWall.active = true;
      }
    }
    GamePlayManager.Instance.setBounce(
      currentLevel[this._levelDesignKey.timeToBounce]
    );
    // this.timeToBounceHolder
    //   .getComponent(TimeNeedToTouch)
    //   .setBounce();
    this.timeToBouncePop.string =
      currentLevel[this._levelDesignKey.timeToBounce];
    this.fadeWallHolder.active = true;
    this.ballHolder.active = true;
  }
  DisableHolder() {
    console.log("INIT");
    this.wall.children.forEach((eachWall) => {
      eachWall.active = false;
    });

    ObstaclesWallSpawner.Instance.ClearHolder();
    this.ballHolder.getComponent(Ball).init();
    this.ballHolder.active = false;
  }
  NextLevel() {
    this.SetUpLevel(++this._currentLevel);
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
