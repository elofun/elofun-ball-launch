const { ccclass, property } = cc._decorator;

@ccclass
export default class LocalizedFrame extends cc.Component 
{
    @property(cc.SpriteFrame) EN: cc.SpriteFrame = null;
    @property(cc.SpriteFrame) VI: cc.SpriteFrame = null;

    start() {
        let sprite = this.node.getComponent(cc.Sprite);
        let defaultSpriteFrame = sprite.spriteFrame;
        sprite.spriteFrame = this[window.language.toUpperCase()] || defaultSpriteFrame;
    }
}
