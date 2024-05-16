// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameManager from "../GameManager/GameManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Ground extends cc.Component {
  // update (dt) {}
  public static Instance: Ground = null;
  protected onLoad(): void {
    Ground.Instance = this;
  }

  onBeginContact(
    contact: cc.PhysicsContact,
    self: cc.PhysicsBoxCollider,
    other: cc.PhysicsCircleCollider
  ) {
    if (GameManager.Instance.haveFirstBlock == false) {
      GameManager.Instance.haveFirstBlock = true;
      console.log(GameManager.Instance.haveFirstBlock);
    } else {
      other.node.active = false;
      GameManager.Instance.LoseLive();
    }
  }
}
