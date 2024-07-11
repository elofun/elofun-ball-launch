// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import SingletonNode from "../utils/SingletonNode";
import * as levelDesign2 from "../gameplay/Level/GameplayLevelDesgin.js";
import ObstaclesWallSpawner from "./Wall/ObstaclesWallSpawner";
import GamePlayManager from "./GamePlayManager";
import Ball from "./Ball";
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
  get currentLevel() {
    return this._currentLevel;
  }
  set currentLevel(value: number) {
    console.log(value);
    this._currentLevel = value;
  }
  SetUpLevel(levelIndex: number) {
    const urlParams = new URLSearchParams(window.location.search);
    const levelUrlParams = parseInt(urlParams.get("level"));
    console.log("levelUrlParams", levelUrlParams);
    if (levelUrlParams) {
      this.currentLevel = levelUrlParams;
    } else {
      this.currentLevel = levelIndex;
    }

    const currentLevelData = levelDesign2[this.currentLevel];
    this.levelShowlbl.string = `Level ${this.currentLevel + 1}`;
    this.wall.children.forEach((eachWall) => {
      let tempWall = this.GetValueByKey(
        currentLevelData["wall"],
        eachWall.name
      );
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
      currentLevelData[this._levelDesignKey.ballStartPos].x,
      currentLevelData[this._levelDesignKey.ballStartPos].y
    );

    this.fadeWallHolder.setPosition(
      currentLevelData[this._levelDesignKey.fadeWallHolder].pos.x,
      currentLevelData[this._levelDesignKey.fadeWallHolder].pos.y
    );

    if (
      currentLevelData[this._levelDesignKey.obstaclesWall] &&
      currentLevelData[this._levelDesignKey.obstaclesWall].length > 0
    ) {
      for (
        let index = 0;
        index < currentLevelData[this._levelDesignKey.obstaclesWall].length;
        index++
      ) {
        let obstaclesWallPos: cc.Vec2 = new cc.Vec2(
          currentLevelData[this._levelDesignKey.obstaclesWall][index].pos.x,
          currentLevelData[this._levelDesignKey.obstaclesWall][index].pos.y
        );
        let obsWall: cc.Node = ObstaclesWallSpawner.Instance.SpawnThing(
          obstaclesWallPos,
          ObstaclesWallSpawner.Instance._wallPrefabName
        );
        obsWall.active = false;
        obsWall.rotation =
          currentLevelData[this._levelDesignKey.obstaclesWall][index].rotation;
        obsWall.width =
          currentLevelData[this._levelDesignKey.obstaclesWall][index].size.w *
          GameDefine.ObstaclesWall.width;
        obsWall.height =
          currentLevelData[this._levelDesignKey.obstaclesWall][index].size.h *
          GameDefine.ObstaclesWall.hight;
        obsWall.getComponent(cc.PhysicsBoxCollider).size.width =
          currentLevelData[this._levelDesignKey.obstaclesWall][index].size.w *
          GameDefine.ObstaclesWall.width;
        obsWall.getComponent(cc.PhysicsBoxCollider).size.height =
          currentLevelData[this._levelDesignKey.obstaclesWall][index].size.h *
          GameDefine.ObstaclesWall.hight;
        obsWall.active = true;
      }
    }
    GamePlayManager.Instance.setBounce(
      currentLevelData[this._levelDesignKey.timeToBounce]
    );
    // this.timeToBounceHolder
    //   .getComponent(TimeNeedToTouch)
    //   .setBounce();
    this.timeToBouncePop.string =
      currentLevelData[this._levelDesignKey.timeToBounce];
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
    if (this.currentLevel == levelDesign2.length - 1) {
      GamePlayManager.Instance.GameOver();
      return;
    }
    this.SetUpLevel(++this.currentLevel);
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
