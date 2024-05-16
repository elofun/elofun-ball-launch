// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameManager from "../GameManager/GameManager";
import Spawn from "../Spawn";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BlockSpawner extends Spawn {
  public _prefabsName = { Block: "Block" };
  // @property(cc.Node) SuccesDropHolder: cc.Node = null;
  public static Instance: BlockSpawner = null;
  protected onLoad(): void {
    BlockSpawner.Instance = this;
  }
  public SpawnThing(spawnPos: cc.Vec2, prefabName: string): cc.Node {
    let newOjb: cc.Node = super.SpawnThing(spawnPos, prefabName);
    // newOjb.parent = null;
    // GameManager.Instance.AddBlock(newOjb);
    // newOjb.group = "default";

    return newOjb;
  }
  Reset() {
    this.holder.removeAllChildren();
  }
  // update (dt) {}
}
