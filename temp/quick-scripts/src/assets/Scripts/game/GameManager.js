"use strict";
cc._RF.push(module, '4e4edq/h0FGmYOarVkTPs/6', 'GameManager');
// Scripts/game/GameManager.ts

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
var AudioController_1 = require("../AudioController");
var SingletonNode_1 = require("../utils/SingletonNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        _this.STATE = {
            TUTORIAL: 0,
            INGAME: 1,
            GAMEOVER: 2
        };
        _this.state = 0;
        _this.isPause = false;
        return _this;
        // update (dt) {}
    }
    GameManager.prototype.start = function () {
    };
    GameManager.prototype.startGame = function () {
    };
    GameManager.prototype.endGame = function () {
    };
    GameManager.prototype.setMute = function () {
        AudioController_1.default.Instance.setMute();
    };
    GameManager.prototype.onGamePause = function () {
        this.isPause = true;
    };
    GameManager.prototype.onGameResume = function () {
        this.isPause = false;
    };
    GameManager.prototype.IsPause = function () {
        return this.isPause;
    };
    GameManager = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(SingletonNode_1.default()));
exports.default = GameManager;

cc._RF.pop();