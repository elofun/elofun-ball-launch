"use strict";
cc._RF.push(module, '055aeKjXC5P5JH+PuFhm8cO', 'playerBallHitBox');
// Scripts/playerBallHitBox.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var SoundMgr_1 = require("./common/SoundMgr");
var diamond_1 = require("./diamond");
var GameDefine_1 = require("./game/GameDefine");
var playGround_1 = require("./playGround");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var playerBallHitBox = /** @class */ (function (_super) {
    __extends(playerBallHitBox, _super);
    function playerBallHitBox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PlayGround = null;
        return _this;
    }
    playerBallHitBox.prototype.onCollisionEnter = function (other, self) {
        if (other.tag !== 3)
            return;
        var diamond = other.node.getComponent(diamond_1.default);
        if (!diamond.diamondSprite.node.active)
            return;
        SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_CRYSTAL);
        diamond.diamondSprite.node.active = false;
        diamond.diamondParticle.node.active = true;
        diamond.diamondParticle.resetSystem();
        diamond.lblScorePlus.node.active = true;
        cc.tween(diamond.lblScorePlus.node).to(0.5, { y: 175 }).call(function () {
            diamond.lblScorePlus.node.active = false;
            diamond.lblScorePlus.node.y = 75;
        }).start();
        this.PlayGround.scoreUpdate(GameDefine_1.default.DiamondScore);
        diamond.lblScorePlus.string = "+" + GameDefine_1.default.DiamondScore;
    };
    __decorate([
        property(playGround_1.default)
    ], playerBallHitBox.prototype, "PlayGround", void 0);
    playerBallHitBox = __decorate([
        ccclass
    ], playerBallHitBox);
    return playerBallHitBox;
}(cc.Component));
exports.default = playerBallHitBox;

cc._RF.pop();