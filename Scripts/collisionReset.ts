import Cuboid from "./cuboid";
import playGround from "./playGround";


const { ccclass, property } = cc._decorator;

@ccclass
export default class CollisionReset extends cc.Component {

    @property(playGround) PlayGround: playGround = null;

    onCollisionExit(other: cc.Collider, self: cc.Collider) {
        if (this.PlayGround.isPlayerDead || other.tag !== 5 || !this.PlayGround.isReady) return;

        if (other.node.name == "ExtraCuboid") {
            this.PlayGround.extraCuboidPool.put(other.node);
        } else if (other.node == this.PlayGround.cuboidBase) {
            // other.node.destroy();
        } else {
            if (other.node.getComponent(Cuboid).diamond) {
                this.PlayGround.diamondPool.put(other.node.getComponent(Cuboid).diamond);
            }
            this.PlayGround.createCuboid(other.node);
        }
    }
}
