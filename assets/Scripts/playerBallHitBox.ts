import SoundMgr from "./common/SoundMgr";
import Diamond from "./diamond";
import GameDefine from "./game/GameDefine";
import playGround from "./playGround";

const {ccclass, property} = cc._decorator;

@ccclass
export default class playerBallHitBox extends cc.Component {

    @property(playGround) PlayGround: playGround = null;

    onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        if(other.tag !== 3) return;

        let diamond = other.node.getComponent(Diamond);
        if(!diamond.diamondSprite.node.active) return;

        SoundMgr.playSfx(SoundMgr.Instance.SFX_CRYSTAL);

        diamond.diamondSprite.node.active = false;
        diamond.diamondParticle.node.active = true;
        diamond.diamondParticle.resetSystem();
        diamond.lblScorePlus.node.active = true;
        cc.tween(diamond.lblScorePlus.node).to(0.5, {y: 175}).call(()=>{
            diamond.lblScorePlus.node.active = false;
            diamond.lblScorePlus.node.y = 75;
        }).start();
        this.PlayGround.scoreUpdate(GameDefine.DiamondScore);
        diamond.lblScorePlus.string = "+" + GameDefine.DiamondScore;
    }
}
