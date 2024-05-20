// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Spawn from "../Spawn";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ObstaclesWallSpawner extends Spawn {
  public _wallPrefabName = "wall";
  public static Instance: ObstaclesWallSpawner = null;

  protected onLoad(): void {
    ObstaclesWallSpawner.Instance = this;
  }
  ClearHolder() {
    if (this.holder.children.length <= 0) return;
    this.holder.removeAllChildren();

  }
  // update (dt) {}
}
