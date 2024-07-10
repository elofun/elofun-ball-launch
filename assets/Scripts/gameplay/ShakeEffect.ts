// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class ShakeEffect extends cc.Component {
  @property({
    type: Number,
    tooltip: "Duration of the shake effect in seconds",
  })
  duration: number = 0.5;
  isTweening: Boolean = false;

  @property({ type: cc.Integer, tooltip: "Intensity of the shake effect" })
  intensity: number = 5;

  start() {
    // Example of using the shake effect on a node
  }

  shakeNode(node: cc.Node) {
    const startPosition = node.position;
    const duration = this.duration;

    // Define the shake tween
    const shakeTween = cc.tween().sequence(
      cc.tween().to(duration / 10, {
        position: cc.v2(startPosition.x + this.intensity, startPosition.y),
      }),
      cc.tween().to(duration / 5, {
        position: cc.v2(startPosition.x - this.intensity, startPosition.y),
      }),
      cc.tween().to(duration / 10, {
        position: cc.v2(startPosition.x + this.intensity, startPosition.y),
      }),
      cc.tween().to(duration / 5, {
        position: cc.v2(startPosition.x - this.intensity, startPosition.y),
      }),
      cc.tween().to(duration / 10, { position: startPosition })
    );

    // Run the shake tween
    if (this.isTweening == true) return;
    this.isTweening = true;
    cc.tween(node)
      .then(shakeTween)
      .call(() => {
        this.isTweening = false;
      })
      .start();
  }
}
