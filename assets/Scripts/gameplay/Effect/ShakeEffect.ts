const { ccclass, property } = cc._decorator;

@ccclass
export default class ShakeEffect extends cc.Component {
  @property({
    type: cc.Integer,
    tooltip: "Duration of the shake effect in seconds",
  })
  duration: number = 0.5;

  @property({ type: cc.Integer, tooltip: "Intensity of the shake effect" })
  intensity: number = 5;

  start() {
    // Example of using the shake effect on a node
    
  }

  shakeNode(node: cc.Node) {
    const startPosition = node.position;
    const duration = this.duration;

    // Define the shake tween
    const shakeTween = cc
      .tween()
      .sequence(
        cc
          .tween()
          .to(duration / 10, {
            position: cc.v2(startPosition.x + this.intensity, startPosition.y),
          }),
        cc
          .tween()
          .to(duration / 5, {
            position: cc.v2(startPosition.x - this.intensity, startPosition.y),
          }),
        cc
          .tween()
          .to(duration / 10, {
            position: cc.v2(startPosition.x + this.intensity, startPosition.y),
          }),
        cc
          .tween()
          .to(duration / 5, {
            position: cc.v2(startPosition.x - this.intensity, startPosition.y),
          }),
        cc.tween().to(duration / 10, { position: startPosition })
      );

    // Run the shake tween
    cc.tween(node).then(shakeTween).start();
  }
}
