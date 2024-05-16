import GameDefine from "./game/GameDefine";
import playGround from "./playGround";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Diamond extends cc.Component {
    @property(cc.Node)
    private player: cc.Node = null;

    @property(cc.Sprite) diamondSprite: cc.Sprite = null;
    @property(cc.ParticleSystem) diamondParticle: cc.ParticleSystem = null;
    @property(cc.Label) lblScorePlus: cc.Label = null;

    private thresHold = 9999;

    onLoad() {
        this.schedule(() => {
            const y = this.player.position.y - this.node.position.y;
            if (y < 200 && y > -200) {
                if (this.thresHold === 0) return;
                this.thresHold = 0;
                this.getComponent(cc.CircleCollider).enabled = true;
            } else {
                if (this.thresHold === 200) return;
                this.thresHold = 200;
                this.getComponent(cc.CircleCollider).enabled = false;
            }
        }, 0.1)

    }
}