// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GamePlayManager from "../gameplay/GamePlayManager";
import Tuto from "../gameplay/Tuto";
import Stage from "./Stage";

const { ccclass, property } = cc._decorator;

@ccclass
export default class StageTestGame extends Stage {
  @property(cc.Node) ballHolder: cc.Node = null;
  @property(Tuto) tuto: Tuto = null;
  @property(cc.Node) timeNeedToTouch: cc.Node = null;

  _istartGame: Boolean = false;
  static Instance: StageTestGame = null;
  protected onLoad(): void {
    cc.director.getPhysicsManager().enabled = true;

    cc.director.getCollisionManager().enabled = true;
    StageTestGame.Instance = this;
  }

  init() {
    this.setStartGame(false);
    GamePlayManager.Instance.init();
    this.tuto.init();
  }
  showTimeNeedToTouch() {
    //this need to show every time go into a new level
    this.timeNeedToTouch.scale = 0;
    this.timeNeedToTouch.active = true;
    // const bgCover = this.timeNeedToTouch.getChildByName("bgCover");

    this.timeNeedToTouch.opacity = 255;
    cc.tween(this.timeNeedToTouch)
      .to(0.5, { scale: 1 })
      .delay(1)
      // .to(0.5, { scale: 0 })
      .call(() => {
        cc.tween(this.timeNeedToTouch)
          .to(0.5, { opacity: 0 })
          .call(() => {
            this.timeNeedToTouch.active = false;
            this.setStartGame(true);
          })
          .start();
      })
      .start();
  }

  setStartGame(startGame: boolean) {
    this._istartGame = startGame;
  }
  getStartGame() {
    return this._istartGame;
  }
}
