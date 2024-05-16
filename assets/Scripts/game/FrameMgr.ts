// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SingletonNode from "../utils/SingletonNode";

const {ccclass, property} = cc._decorator;

@ccclass
export default class FrameMgr extends SingletonNode<FrameMgr>() {

    @property(cc.SpriteFrame) frameHouse: Array<cc.SpriteFrame> = []
    @property(cc.SpriteFrame) frameBuilding: Array<cc.SpriteFrame> = []

    // update (dt) {}
}
