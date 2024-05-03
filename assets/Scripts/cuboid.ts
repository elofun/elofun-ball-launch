import playGround from "./playGround";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Cuboid extends cc.Component {
    @property(cc.Node)
    private player: cc.Node = null;

    public diamond: cc.Node = null;

    private thresHold = 9999;
    private thresHoldActive = 9999;

    onLoad() {
        this.schedule(() => {
            const y = this.player.position.y - this.node.position.y;
            if (y < 200 && y > -200) {
                if (this.thresHold === 0) return;
                this.thresHold = 0;
                this.node.children.forEach((child) => {
                    if (child.childrenCount === 1) {
                        child.children[0].getComponent(cc.BoxCollider) && (child.children[0].getComponent(cc.BoxCollider).enabled = true);
                    }
                })
                this.getComponent(cc.BoxCollider).enabled = true;
            } else {
                if (this.thresHold === 200) return;
                this.thresHold = 200;
                this.node.children.forEach((child) => {
                    if (child.childrenCount === 1) {
                        child.children[0].getComponent(cc.BoxCollider) && (child.children[0].getComponent(cc.BoxCollider).enabled = false);
                    }
                })
            }

            if (y < -500) {
                this.getComponent(cc.BoxCollider).enabled = false;
            }
        }, 0.1)

        this.schedule(() => {
            if (this.player.position.y - this.node.position.y < 720 && this.player.position.y - this.node.position.y > -720) {
                if (this.thresHoldActive === 0) return;
                this.thresHoldActive = 0;
                this.node.children.forEach((child) => {
                    child.getComponent(cc.Sprite) && (child.getComponent(cc.Sprite).enabled = true);
                })
            } else {
                if (this.thresHoldActive === 720) return;
                this.thresHoldActive = 720;
                this.node.children.forEach((child) => {
                    child.getComponent(cc.Sprite) && (child.getComponent(cc.Sprite).enabled = false);
                })
            }
        }, 0.2)
    }
}
