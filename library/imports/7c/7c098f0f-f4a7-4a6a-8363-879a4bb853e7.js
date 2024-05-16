"use strict";
cc._RF.push(module, '7c0988P9KdKaoNjh5pLuFPn', 'playGround');
// Scripts/playGround.ts

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
var GameDefine_1 = require("./game/GameDefine");
var PeerManager_1 = require("./PeerComponent/PeerManager");
var StageInGame_1 = require("./stage/StageInGame");
var levelDesign = require("../levelDesign.js");
var SoundMgr_1 = require("./common/SoundMgr");
var cuboid_1 = require("./cuboid");
var diamond_1 = require("./diamond");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var playGround = /** @class */ (function (_super) {
    __extends(playGround, _super);
    function playGround() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cuboid = null;
        _this.diamond = null;
        _this.cuboidContainer = null;
        _this.cuboidBase = null;
        _this.playerBall = null;
        _this.lblScore = null;
        _this.bg = null;
        _this.dragonSP = [];
        _this.diamondContainer = null;
        _this.endGamePopup = null;
        _this.bannerLabel = null;
        _this.popupLabel = null;
        _this.playerIndex = 0;
        _this.previousCuboid = null;
        _this.distance = cc.v2(100 * Math.cos(45 * Math.PI / 180), 100 * Math.cos(45 * Math.PI / 180));
        _this.initialDistance = cc.v2(100 * Math.cos(45 * Math.PI / 180), 0 * Math.cos(45 * Math.PI / 180));
        _this.isMoveLeft = false;
        _this.isPlayerDead = false;
        _this.score = 0;
        _this.diamondPool = new cc.NodePool();
        _this.extraCuboidPool = new cc.NodePool();
        _this.isReady = false;
        _this.isSpawnLeft = false;
        _this.currentLevel = 0;
        _this.cubiodCount = 0;
        _this.isChangingDirection = false;
        _this.dragonSpine = null;
        _this.dragonSkin = ["Char3", "Char2", "Char1"];
        _this.bgSpriteFrame = null;
        _this.roadSpriteFrame = null;
        _this.objectsSpriteFrame = null;
        _this.playerPos = new cc.Vec2(0, 0);
        return _this;
    }
    playGround.prototype.onLoad = function () {
        var _this = this;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function (event) {
            if (PeerManager_1.default.Instance.isPlayWithRemote && _this.playerIndex == 0) {
                if (event.keyCode == 13) {
                    _this.changeDirection();
                }
            }
        });
        var initCount = 10;
        for (var i = 0; i < initCount; ++i) {
            var diamond = cc.instantiate(this.diamond);
            this.diamondPool.put(diamond);
        }
        var initExtraCount = 30;
        for (var i = 0; i < initExtraCount; ++i) {
            var extraCuboid = cc.instantiate(this.cuboid);
            this.extraCuboidPool.put(extraCuboid);
        }
        this.dragonSpine = this.playerBall.getChildByName("playerChar").getComponent(sp.Skeleton);
    };
    playGround.prototype.start = function () {
        this.playerBall.zIndex = 999;
        this.cuboidBase.zIndex = 0;
        for (var i = 0; i < 15; i++) {
            this.createCuboid();
        }
        this.dragonSpine.setSkin(this.dragonSkin[this.playerIndex]);
        this.bg.getComponent(cc.Sprite).spriteFrame = this.bgSpriteFrame;
        this.cuboidBase.getChildByName("frontFace").getComponent(cc.Sprite).spriteFrame =
            this.roadSpriteFrame;
    };
    playGround.prototype.changeDirection = function () {
        var _this = this;
        if (!this.isPlayerDead && this.isReady && !this.isChangingDirection) {
            this.isMoveLeft = !this.isMoveLeft;
            this.isChangingDirection = true;
            cc.tween(this.playerBall).to(0.15, {
                angle: this.isMoveLeft ? 45 : -45,
            }).call(function () {
                _this.isChangingDirection = false;
            }).start();
            this.scoreUpdate();
        }
    };
    playGround.prototype.createCuboid = function (newCuboid) {
        var _this = this;
        if (newCuboid === void 0) { newCuboid = cc.instantiate(this.cuboid); }
        newCuboid.getChildByName("frontFace").getComponent(cc.Sprite).spriteFrame =
            this.roadSpriteFrame;
        var nextLevel = levelDesign[this.currentLevel + 1];
        if (nextLevel) {
            if (++this.cubiodCount >= nextLevel.startIndex) {
                this.currentLevel++;
            }
        }
        var currentLevel = levelDesign[this.currentLevel];
        if (this.previousCuboid) {
            var random = Math.random();
            var splitValue = 0;
            if (random < currentLevel.doubleWay2Rate) {
                splitValue = 2;
                if (this.previousCuboid.x < -105 || this.previousCuboid.x > 105) {
                    splitValue = 0;
                }
                else if (this.previousCuboid.x < -70 || this.previousCuboid.x > 70) {
                    splitValue = 1;
                }
            }
            else if (random < currentLevel.doubleWay2Rate + currentLevel.doubleWay1Rate) {
                splitValue = 1;
                if (this.previousCuboid.x < -105 || this.previousCuboid.x > 105) {
                    splitValue = 0;
                }
            }
            else {
                splitValue = 0;
            }
            switch (splitValue) {
                case 0:
                    if (Math.random() < currentLevel.directionChangeRate) {
                        this.isSpawnLeft = !this.isSpawnLeft;
                    }
                    if (this.previousCuboid.x < -140) {
                        this.isSpawnLeft = false;
                    }
                    else if (this.previousCuboid.x > 140) {
                        this.isSpawnLeft = true;
                    }
                    newCuboid.x = (this.isSpawnLeft ? -this.distance.x : this.distance.x) + this.previousCuboid.x;
                    newCuboid.y = this.previousCuboid.y + this.distance.y;
                    newCuboid.getChildByName("fence-1").active = this.isSpawnLeft ? false : true;
                    newCuboid.getChildByName("fence-2").active = this.isSpawnLeft ? true : false;
                    this.previousCuboid.getChildByName("fence-3").active = this.isSpawnLeft ? true : false;
                    this.previousCuboid.getChildByName("fence-4").active = this.isSpawnLeft ? false : true;
                    newCuboid.getChildByName("fence-1").children[0].getComponent(cc.BoxCollider).enabled = this.isSpawnLeft ? false : true;
                    newCuboid.getChildByName("fence-2").children[0].getComponent(cc.BoxCollider).enabled = this.isSpawnLeft ? true : false;
                    this.previousCuboid.getChildByName("fence-3").children[0].getComponent(cc.BoxCollider).enabled = this.isSpawnLeft ? true : false;
                    this.previousCuboid.getChildByName("fence-4").children[0].getComponent(cc.BoxCollider).enabled = this.isSpawnLeft ? false : true;
                    if (Math.random() < 0.5) {
                        var objectSprite = newCuboid.getChildByName("objectRandom").getChildByName("objectSprite");
                        newCuboid.getChildByName("objectRandom").active = true;
                        objectSprite.getComponent(cc.Sprite).spriteFrame =
                            this.objectsSpriteFrame[Math.floor(Math.random() * this.objectsSpriteFrame.length)];
                        objectSprite.x = newCuboid.x > 0 ? -400 : 400;
                    }
                    else {
                        newCuboid.getChildByName("objectRandom").active = false;
                    }
                    break;
                case 1:
                    var prevX_1 = this.previousCuboid.x;
                    var prevY_1 = this.previousCuboid.y;
                    setTimeout(function () {
                        _this.createExtraCuboid(-_this.distance.x + prevX_1, prevY_1 + _this.distance.y, [false, true, false, true]);
                    }, 50);
                    setTimeout(function () {
                        _this.createExtraCuboid(_this.distance.x + prevX_1, prevY_1 + _this.distance.y, [true, false, true, false]);
                    }, 100);
                    newCuboid.x = this.previousCuboid.x;
                    newCuboid.y = this.previousCuboid.y + this.distance.y * 2;
                    newCuboid.getChildByName("fence-1").active = false;
                    newCuboid.getChildByName("fence-2").active = false;
                    this.previousCuboid.getChildByName("fence-3").active = false;
                    this.previousCuboid.getChildByName("fence-4").active = false;
                    newCuboid.getChildByName("fence-1").children[0].getComponent(cc.BoxCollider).enabled = false;
                    newCuboid.getChildByName("fence-2").children[0].getComponent(cc.BoxCollider).enabled = false;
                    this.previousCuboid.getChildByName("fence-3").children[0].getComponent(cc.BoxCollider).enabled = false;
                    this.previousCuboid.getChildByName("fence-4").children[0].getComponent(cc.BoxCollider).enabled = false;
                    break;
                case 2:
                    var previousX_1 = this.previousCuboid.x;
                    var previousY_1 = this.previousCuboid.y;
                    setTimeout(function () {
                        _this.createExtraCuboid(-_this.distance.x + previousX_1, previousY_1 + _this.distance.y, [false, true, true, false]);
                    }, 50);
                    setTimeout(function () {
                        _this.createExtraCuboid(_this.distance.x + previousX_1, previousY_1 + _this.distance.y, [true, false, false, true]);
                    }, 100);
                    setTimeout(function () {
                        _this.createExtraCuboid(-_this.distance.x * 2 + previousX_1, previousY_1 + _this.distance.y * 2, [false, true, false, true]);
                    }, 150);
                    setTimeout(function () {
                        _this.createExtraCuboid(_this.distance.x * 2 + previousX_1, previousY_1 + _this.distance.y * 2, [true, false, true, false]);
                    }, 200);
                    setTimeout(function () {
                        _this.createExtraCuboid(-_this.distance.x + previousX_1, previousY_1 + _this.distance.y * 3, [true, false, false, true]);
                    }, 250);
                    setTimeout(function () {
                        _this.createExtraCuboid(_this.distance.x + previousX_1, previousY_1 + _this.distance.y * 3, [false, true, true, false]);
                    }, 300);
                    newCuboid.x = this.previousCuboid.x;
                    newCuboid.y = this.previousCuboid.y + this.distance.y * 4;
                    newCuboid.getChildByName("fence-1").active = false;
                    newCuboid.getChildByName("fence-2").active = false;
                    this.previousCuboid.getChildByName("fence-3").active = false;
                    this.previousCuboid.getChildByName("fence-4").active = false;
                    newCuboid.getChildByName("fence-1").children[0].getComponent(cc.BoxCollider).enabled = false;
                    newCuboid.getChildByName("fence-2").children[0].getComponent(cc.BoxCollider).enabled = false;
                    this.previousCuboid.getChildByName("fence-3").children[0].getComponent(cc.BoxCollider).enabled = false;
                    this.previousCuboid.getChildByName("fence-4").children[0].getComponent(cc.BoxCollider).enabled = false;
                    break;
            }
        }
        else {
            this.isSpawnLeft = false;
            newCuboid.x = this.isSpawnLeft ? -this.initialDistance.x : this.initialDistance.x;
            newCuboid.y = this.initialDistance.y;
            newCuboid.getChildByName("fence-1").active = this.isSpawnLeft ? false : true;
            newCuboid.getChildByName("fence-2").active = this.isSpawnLeft ? true : false;
            this.cuboidBase.getChildByName("fence-7").active = this.isSpawnLeft ? true : false;
            this.cuboidBase.getChildByName("fence-8").active = this.isSpawnLeft ? false : true;
            newCuboid.getChildByName("fence-1").children[0].getComponent(cc.BoxCollider).enabled = this.isSpawnLeft ? false : true;
            newCuboid.getChildByName("fence-2").children[0].getComponent(cc.BoxCollider).enabled = this.isSpawnLeft ? true : false;
            this.cuboidBase.getChildByName("fence-7").children[0].getComponent(cc.BoxCollider).enabled = this.isSpawnLeft ? true : false;
            this.cuboidBase.getChildByName("fence-8").children[0].getComponent(cc.BoxCollider).enabled = this.isSpawnLeft ? false : true;
        }
        newCuboid.zIndex = -newCuboid.y / 70;
        newCuboid.parent = this.cuboidContainer;
        this.previousCuboid = newCuboid;
        var isDiamondActive = Math.random() < currentLevel.diamondSpawnRate;
        if (isDiamondActive) {
            var newDiamond = this.createDiamond(newCuboid.x, newCuboid.y + 85);
            newCuboid.getComponent(cuboid_1.default).diamond = newDiamond;
        }
        else {
            newCuboid.getComponent(cuboid_1.default).diamond = null;
        }
    };
    playGround.prototype.createDiamond = function (x, y) {
        var newDiamond = null;
        if (this.diamondPool.size() > 0) {
            newDiamond = this.diamondPool.get();
        }
        else {
            newDiamond = cc.instantiate(this.diamond);
        }
        newDiamond.x = x;
        newDiamond.y = y;
        newDiamond.parent = this.diamondContainer;
        newDiamond.getComponent(diamond_1.default).diamondSprite.node.active = true;
        newDiamond.getComponent(diamond_1.default).diamondParticle.node.active = false;
        newDiamond.getComponent(diamond_1.default).lblScorePlus.node.active = false;
        return newDiamond;
    };
    playGround.prototype.createExtraCuboid = function (x, y, isActiveArr) {
        if (isActiveArr === void 0) { isActiveArr = [true, true, true, true]; }
        var cuboid = null;
        if (this.extraCuboidPool.size() > 0) {
            cuboid = this.extraCuboidPool.get();
        }
        else {
            cuboid = cc.instantiate(this.cuboid);
        }
        cuboid.x = x;
        cuboid.y = y;
        cuboid.getChildByName("frontFace").getComponent(cc.Sprite)
            .spriteFrame = this.roadSpriteFrame;
        cuboid.parent = this.cuboidContainer;
        cuboid.name = "ExtraCuboid";
        cuboid.zIndex = -cuboid.y / 70;
        var isDiamondActive = Math.random() < levelDesign[this.currentLevel].diamondSpawnRate;
        if (isDiamondActive) {
            var newDiamond = this.createDiamond(x, y + 85);
            cuboid.getComponent(cuboid_1.default).diamond = newDiamond;
        }
        else {
            cuboid.getComponent(cuboid_1.default).diamond = null;
        }
        cuboid.getChildByName("fence-1").active = isActiveArr[0];
        cuboid.getChildByName("fence-2").active = isActiveArr[1];
        cuboid.getChildByName("fence-3").active = isActiveArr[2];
        cuboid.getChildByName("fence-4").active = isActiveArr[3];
        cuboid.getChildByName("fence-1").children[0].getComponent(cc.BoxCollider).enabled = isActiveArr[0];
        cuboid.getChildByName("fence-2").children[0].getComponent(cc.BoxCollider).enabled = isActiveArr[1];
        cuboid.getChildByName("fence-3").children[0].getComponent(cc.BoxCollider).enabled = isActiveArr[2];
        cuboid.getChildByName("fence-4").children[0].getComponent(cc.BoxCollider).enabled = isActiveArr[3];
        cuboid.getChildByName("objectRandom").active = false;
    };
    playGround.prototype.ballMoveScheduler = function (dt) {
        var _this = this;
        if (this.isPlayerDead) {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_EXPLODE);
            this.unschedule(this.ballMoveScheduler);
            this.dragonSpine.timeScale = 1;
            this.dragonSpine.setAnimation(0, "Crash_Animation", false);
            this.dragonSpine.setCompleteListener(function () {
                StageInGame_1.default.Instance.setGameOver(_this.playerIndex, true);
                _this.showPopupEndGame();
                _this.diamondPool.clear();
                _this.extraCuboidPool.clear();
            });
        }
        var vec = new cc.Vec2(0, 0);
        cc.Vec2.lerp(vec, this.playerBall.getPosition(), this.playerBall.getPosition().clone().add(new cc.Vec2((this.isMoveLeft ? -1 : 1) * dt * this.distance.x * 2.5, dt * this.distance.y * 2.5)), 1);
        this.playerBall.setPosition(vec);
        cc.Vec2.lerp(vec, this.bg.parent.getPosition(), this.bg.parent.getPosition().clone().add(new cc.Vec2(0, -(dt * this.distance.y * 2.5))), 1);
        this.bg.parent.setPosition(vec);
        if (this.bg.parent.y <= -1080) {
            this.bg.parent.y += 720;
            this.diamondContainer.y -= 720;
            this.cuboidContainer.y -= 720;
        }
    };
    playGround.prototype.showPopupEndGame = function () {
        this.endGamePopup.active = true;
        cc.tween(this.endGamePopup).to(0.3, { scale: 1 }, { easing: 'bounceOut' }).start();
        this.popupLabel.string = GameDefine_1.default.player + " " + (this.playerIndex + 1) + " " + GameDefine_1.default.died;
        this.bannerLabel.string = GameDefine_1.default.gameover;
    };
    playGround.prototype.showMessagePlayerDisconnect = function (disconnectMessage) {
        if (!disconnectMessage)
            return;
        this.popupLabel.string = disconnectMessage;
        this.bannerLabel.string = GameDefine_1.default.disconnect;
    };
    playGround.prototype.startMoveBall = function () {
        this.schedule(this.ballMoveScheduler);
        this.isReady = true;
        this.isPlayerDead = false;
    };
    playGround.prototype.scoreUpdate = function (scoreAdd) {
        if (scoreAdd === void 0) { scoreAdd = 1; }
        this.score += scoreAdd;
        this.lblScore.string = this.score.toString();
        cc.tween(this.lblScore.node).to(0.1, { scale: 1.2 }).to(0.1, { scale: 1 }).start();
        StageInGame_1.default.Instance.playerScore[this.playerIndex] = this.score;
    };
    __decorate([
        property(cc.Node)
    ], playGround.prototype, "cuboid", void 0);
    __decorate([
        property(cc.Node)
    ], playGround.prototype, "diamond", void 0);
    __decorate([
        property(cc.Node)
    ], playGround.prototype, "cuboidContainer", void 0);
    __decorate([
        property(cc.Node)
    ], playGround.prototype, "cuboidBase", void 0);
    __decorate([
        property(cc.Node)
    ], playGround.prototype, "playerBall", void 0);
    __decorate([
        property(cc.Label)
    ], playGround.prototype, "lblScore", void 0);
    __decorate([
        property(cc.Node)
    ], playGround.prototype, "bg", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], playGround.prototype, "dragonSP", void 0);
    __decorate([
        property(cc.Node)
    ], playGround.prototype, "diamondContainer", void 0);
    __decorate([
        property(cc.Node)
    ], playGround.prototype, "endGamePopup", void 0);
    __decorate([
        property(cc.Label)
    ], playGround.prototype, "bannerLabel", void 0);
    __decorate([
        property(cc.Label)
    ], playGround.prototype, "popupLabel", void 0);
    playGround = __decorate([
        ccclass
    ], playGround);
    return playGround;
}(cc.Component));
exports.default = playGround;

cc._RF.pop();