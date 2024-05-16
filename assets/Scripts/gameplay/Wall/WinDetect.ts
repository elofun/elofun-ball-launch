// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GamePlayManager from "../GamePlayManager";
import LevelManager from "../LevelManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class WinDetect extends cc.Component {
  onCollisionEnter(other: cc.Collider, self: cc.Collider) {
    if (other != self && GamePlayManager.Instance.isLost == false) {
      // LevelManager.Instance.NextLevel();
      GamePlayManager.Instance.Win();
    }
  }

  // update (dt) {}
}
