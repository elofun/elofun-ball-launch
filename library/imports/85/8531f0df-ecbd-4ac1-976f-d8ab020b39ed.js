"use strict";
cc._RF.push(module, '8531fDf7L1KwZdv2KsCCznt', 'StageInGame');
// Scripts/stage/StageInGame.ts

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
var Stage_1 = require("./Stage");
var StageGameEnd_1 = require("./StageGameEnd");
var playGround_1 = require("../playGround");
var PeerManager_1 = require("../PeerComponent/PeerManager");
var PeerAction_1 = require("../PeerComponent/PeerAction");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StageInGame = /** @class */ (function (_super) {
    __extends(StageInGame, _super);
    function StageInGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.playGround = null;
        _this.container = null;
        _this.playerAvatar = [];
        _this.playerRankSpriteFrames = [];
        _this.normalSprite = null;
        _this.graySprite = null;
        _this.tutorialPopup = null;
        _this.lblTimer = null;
        _this.bgSpriteFrames = [];
        _this.roadSpriteFrames = [];
        _this.objectsSpriteFrame1 = [];
        _this.objectsSpriteFrame2 = [];
        _this.objectsSpriteFrame3 = [];
        _this.isDead = [];
        _this.isGameOver = [];
        _this.playerScore = [];
        _this.avatarPositionY = [50, -125, -300];
        _this.connectedPlayerIndex = [];
        _this.rankUpdateInterval = null;
        return _this;
    }
    StageInGame_1 = StageInGame;
    // LIFE-CYCLE CALLBACKS:
    StageInGame.prototype.onLoad = function () {
        StageInGame_1.Instance = this;
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    };
    StageInGame.prototype.initial = function () {
        var _this = this;
        for (var _i = 0, _a = this.container.children; _i < _a.length; _i++) {
            var child = _a[_i];
            if (child.getComponent(PeerAction_1.default)) {
                child.getComponent(PeerAction_1.default).playerSIP = -1;
            }
        }
        this.container.removeAllChildren();
        this.connectedPlayerIndex = [];
        var bgIndexArr = [0, 1, 2];
        this.shuffleArray(bgIndexArr);
        var count = 0;
        for (var i = 0; i < 3; i++) {
            this.playerAvatar[i].getComponent(cc.Sprite).setMaterial(0, this.normalSprite);
            this.playerAvatar[i].active = PeerManager_1.default.Instance.clientConnected[i] ? true : false;
            if (PeerManager_1.default.Instance.clientConnected[i]) {
                count++;
                var playground = cc.instantiate(this.playGround);
                playground.getComponent(playGround_1.default).playerIndex = i;
                playground.getComponent(PeerAction_1.default).playerSIP = PeerManager_1.default.Instance.clientConnected[i].remoteSIP;
                playground.getComponent(playGround_1.default).bgSpriteFrame = this.bgSpriteFrames[bgIndexArr[i]];
                playground.getComponent(playGround_1.default).roadSpriteFrame = this.roadSpriteFrames[bgIndexArr[i]];
                playground.getComponent(playGround_1.default).objectsSpriteFrame = bgIndexArr[i] == 0
                    ? this.objectsSpriteFrame1 : bgIndexArr[i] == 1
                    ? this.objectsSpriteFrame2
                    : this.objectsSpriteFrame3;
                playground.parent = this.container;
                this.isGameOver[i] = false;
                this.isDead[i] = false;
                this.playerScore[i] = 0;
                this.connectedPlayerIndex.push(i);
            }
        }
        this.rankUpdateInterval = setInterval(function () {
            _this.updateRank();
        }, 2000);
        this.lblTimer.string = "5";
        setTimeout(function () {
            cc.tween(_this.tutorialPopup).to(0.3, { scale: 0.5, }, { easing: "quadOut" }).start();
            var time = 5;
            var interval = setInterval(function () {
                _this.lblTimer.string = (--time).toString();
                cc.tween(_this.lblTimer.node).to(0.1, { scale: 1.5 }).to(0.1, { scale: 1 }).start();
                if (time <= 0) {
                    clearInterval(interval);
                    cc.tween(_this.tutorialPopup).to(0.3, { scale: 0, }, { easing: "quadIn" }).call(function () {
                        _this.container.children.forEach(function (e) {
                            e.getComponent(playGround_1.default).startMoveBall();
                        });
                    }).start();
                }
            }, 1000);
        }, 500);
    };
    StageInGame.prototype.shuffleArray = function (array) {
        var _a;
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
        }
    };
    StageInGame.prototype.showConnectMessage = function (index, disconnectMessage) {
        if (disconnectMessage === void 0) { disconnectMessage = null; }
        if (!this.container.children[index])
            return;
        this.container.children[index].getComponent(playGround_1.default).showMessagePlayerDisconnect(disconnectMessage);
    };
    StageInGame.prototype.setGameOver = function (index, isDead) {
        if (isDead === void 0) { isDead = true; }
        this.isGameOver[index] = true;
        if (isDead) {
            this.isDead[index] = true;
            this.playerAvatar[index].getComponent(cc.Sprite).setMaterial(0, this.graySprite);
        }
        if (this.isGameOver.every(function (e) { return e == true; })) {
            clearInterval(this.rankUpdateInterval);
            for (var _i = 0, _a = this.container.children; _i < _a.length; _i++) {
                var child = _a[_i];
                if (child.getComponent(PeerAction_1.default)) {
                    child.getComponent(PeerAction_1.default).playerSIP = -1;
                }
            }
            this.container.removeAllChildren();
            var rank = this.getPlayerRank();
            if (PeerManager_1.default.Instance.getClientConneted().length > 0) {
                StageGameEnd_1.default.Instance.showResult(rank);
            }
        }
    };
    StageInGame.prototype.updateRank = function () {
        var rank = this.getPlayerRank();
        for (var i = 0; i < rank.length; i++) {
            cc.tween(this.playerAvatar[rank[i].playerIndex]).to(0.5, { y: this.avatarPositionY[i] }).start();
            this.playerAvatar[rank[i].playerIndex].getChildByName("rank")
                .getComponent(cc.Sprite).spriteFrame = this.playerRankSpriteFrames[i];
        }
    };
    StageInGame.prototype.getPlayerRank = function () {
        var rank = [];
        for (var i = 0; i < this.connectedPlayerIndex.length; i++) {
            rank[i] = {
                score: this.playerScore[this.connectedPlayerIndex[i]],
                playerIndex: this.connectedPlayerIndex[i],
            };
        }
        rank.sort(function (a, b) {
            return b.score - a.score;
        });
        return rank;
    };
    var StageInGame_1;
    StageInGame.Instance = null;
    __decorate([
        property(cc.Prefab)
    ], StageInGame.prototype, "playGround", void 0);
    __decorate([
        property(cc.Node)
    ], StageInGame.prototype, "container", void 0);
    __decorate([
        property(cc.Node)
    ], StageInGame.prototype, "playerAvatar", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], StageInGame.prototype, "playerRankSpriteFrames", void 0);
    __decorate([
        property(cc.Material)
    ], StageInGame.prototype, "normalSprite", void 0);
    __decorate([
        property(cc.Material)
    ], StageInGame.prototype, "graySprite", void 0);
    __decorate([
        property(cc.Node)
    ], StageInGame.prototype, "tutorialPopup", void 0);
    __decorate([
        property(cc.Label)
    ], StageInGame.prototype, "lblTimer", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], StageInGame.prototype, "bgSpriteFrames", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], StageInGame.prototype, "roadSpriteFrames", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], StageInGame.prototype, "objectsSpriteFrame1", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], StageInGame.prototype, "objectsSpriteFrame2", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], StageInGame.prototype, "objectsSpriteFrame3", void 0);
    StageInGame = StageInGame_1 = __decorate([
        ccclass
    ], StageInGame);
    return StageInGame;
}(Stage_1.default));
exports.default = StageInGame;

cc._RF.pop();