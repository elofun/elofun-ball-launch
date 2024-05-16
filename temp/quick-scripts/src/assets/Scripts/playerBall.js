"use strict";
cc._RF.push(module, '9a52dKv1yRLFb9DOGF+w6r+', 'playerBall');
// Scripts/playerBall.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var playGround_1 = require("./playGround");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerBall = /** @class */ (function (_super) {
    __extends(PlayerBall, _super);
    function PlayerBall() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PlayGround = null;
        _this.enterCount = 1;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    PlayerBall.prototype.start = function () {
    };
    // update (dt) {}
    PlayerBall.prototype.onCollisionEnter = function (other, self) {
        if (this.PlayGround.isPlayerDead || other.tag !== 2 || !this.PlayGround.isReady)
            return;
        this.PlayGround.isPlayerDead = true;
    };
    __decorate([
        property(playGround_1.default)
    ], PlayerBall.prototype, "PlayGround", void 0);
    PlayerBall = __decorate([
        ccclass
    ], PlayerBall);
    return PlayerBall;
}(cc.Component));
exports.default = PlayerBall;

cc._RF.pop();