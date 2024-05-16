"use strict";
cc._RF.push(module, '1589dfnk4VMIp1dekOxl3G2', 'GamePlayManager');
// Scripts/gameplay/GamePlayManager.ts

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
// import Singleton from "../utils/Singleton";
var SingletonNode_1 = require("../utils/SingletonNode");
var FadeWall_1 = require("./FadeWall");
var LevelManager_js_1 = require("./LevelManager.js");
var TimeNeedTouch_1 = require("./TimeNeedTouch");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlayManager = /** @class */ (function (_super) {
    __extends(GamePlayManager, _super);
    function GamePlayManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timeNeedToTouch = null;
        _this.fadeWall = null;
        // public static Instance: GamePlayManager = null;
        _this.currentLevel = null;
        _this.isLost = false;
        return _this;
    }
    GamePlayManager.prototype.onEnable = function () {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true;
        // cc.director.getPhysicsManager().debugDrawFlags =
        //   cc.PhysicsManager.DrawBits.e_aabbBit |
        //   cc.PhysicsManager.DrawBits.e_pairBit |
        //   cc.PhysicsManager.DrawBits.e_centerOfMassBit |
        //   cc.PhysicsManager.DrawBits.e_jointBit |
        //   cc.PhysicsManager.DrawBits.e_shapeBit;
    };
    GamePlayManager.prototype.start = function () {
        if (this.currentLevel == null) {
            this.currentLevel = 0;
            LevelManager_js_1.default.Instance.SetUpLevel(this.currentLevel); // set level to 0
            // this.ballHolder.active = true;
        }
    };
    GamePlayManager.prototype.Win = function () {
        // console.log("win");
        if (this.isLost == true)
            return;
        LevelManager_js_1.default.Instance.DisableHolder();
        LevelManager_js_1.default.Instance.NextLevel();
    };
    GamePlayManager.prototype.Lose = function () {
        // console.log("lose");
        LevelManager_js_1.default.Instance.DisableHolder();
        LevelManager_js_1.default.Instance.SetUpLevel(this.currentLevel);
        this.isLost = false;
    };
    __decorate([
        property(TimeNeedTouch_1.default)
    ], GamePlayManager.prototype, "timeNeedToTouch", void 0);
    __decorate([
        property(FadeWall_1.default)
    ], GamePlayManager.prototype, "fadeWall", void 0);
    GamePlayManager = __decorate([
        ccclass
    ], GamePlayManager);
    return GamePlayManager;
}(SingletonNode_1.default()));
exports.default = GamePlayManager;

cc._RF.pop();