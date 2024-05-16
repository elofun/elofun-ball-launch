// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import LiveUI from "./LiveUI";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIManager extends cc.Component {
  @property(LiveUI) remainLiveUI: LiveUI = null;
  @property(cc.Node) gameOverPanel: cc.Node = null;

  startPos: cc.Vec3 = new cc.Vec3(-480, -270, 0);
  public static Instance: UIManager = null;
  protected onLoad(): void {
    UIManager.Instance = this;
  }
  MoveUIDown(BlockDropNum: number) {
    cc.tween(this.node)
      .to(0.3, {
        position: new cc.Vec3(
          this.node.getPosition().x,
          this.node.getPosition().y - 51 * BlockDropNum,
          0
        ),
      })
      .start();
  }
  Reset() {
    this.gameOverPanel.setPosition(
      this.gameOverPanel.x,
      this.gameOverPanel.y + 800
    );
    cc.tween(this.node)
      .to(0.3, {
        position: this.startPos,
      })
      .start();
  }
  GameOverPopup() {
    this.gameOverPanel.active = true;
    cc.tween(this.gameOverPanel)
      .to(0.3, {
        position: new cc.Vec3(480, 300, 0),
      })
      .start();
  }
  MoveUIUp() {
    cc.tween(this.node)
      .to(0.5, {
        position: new cc.Vec3(
          this.node.getPosition().x,
          this.node.getPosition().y + 51,
          0
        ),
      })
      .start();
  }
}
