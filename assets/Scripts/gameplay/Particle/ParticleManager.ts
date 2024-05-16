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
export default class ParticleManager extends Spawn {
  public static Instance: ParticleManager = null;
  public _particleName = {
    PrefectDropParticle: "PrefectDropParticle",
  };
  protected start(): void {
    ParticleManager.Instance = this;
  }
  SpawnParticleForPerfectDrop() {
    console.log("SPAWN");

    let tempTopBlock: cc.Node = GameManager.Instance.topBlock;

    tempTopBlock
      .getChildByName("ParticleSpawnPlace")
      .children.forEach((element) => {
        let worldSpacePos: cc.Vec2 = this.node.convertToNodeSpace(
          tempTopBlock.convertToWorldSpaceAR(element.getPosition())
        );
        this.SpawnThing(worldSpacePos, this._particleName.PrefectDropParticle);
      });
  }

  ConvertToWorld(local): cc.Vec3 {
    return;
  }
}
