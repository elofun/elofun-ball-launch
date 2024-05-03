// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Cuboid from "./cuboid";
import Diamond from "./diamond";
import playGround from "./playGround";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PlayerBall extends cc.Component {

    @property(playGround) PlayGround: playGround = null;

    private enterCount = 1;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}
    onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        if(this.PlayGround.isPlayerDead || other.tag !== 2 || !this.PlayGround.isReady) return;
        
        this.PlayGround.isPlayerDead = true;
    }
}
