
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/playGround.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xccGxheUdyb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFDM0MsMkRBQXNEO0FBRXRELG1EQUE4QztBQUM5QywrQ0FBZ0Q7QUFDaEQsOENBQXlDO0FBQ3pDLG1DQUE4QjtBQUM5QixxQ0FBZ0M7QUFFMUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFtVkM7UUFqVnNCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixxQkFBZSxHQUFZLElBQUksQ0FBQztRQUNoQyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUMxQixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBQzNCLFFBQUUsR0FBWSxJQUFJLENBQUM7UUFDWixjQUFRLEdBQXFCLEVBQUUsQ0FBQztRQUN2QyxzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFDakMsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFDNUIsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFDN0IsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFekMsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDdkIsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFDL0IsY0FBUSxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsRyxxQkFBZSxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2RyxnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUM3QixrQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM3QixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLGlCQUFXLEdBQWdCLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzdDLHFCQUFlLEdBQWdCLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pELGFBQU8sR0FBWSxLQUFLLENBQUM7UUFDeEIsaUJBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0Isa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIseUJBQW1CLEdBQVksS0FBSyxDQUFDO1FBQ3JDLGlCQUFXLEdBQWdCLElBQUksQ0FBQztRQUNoQyxnQkFBVSxHQUFhLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNwRCxtQkFBYSxHQUFtQixJQUFJLENBQUM7UUFDckMscUJBQWUsR0FBbUIsSUFBSSxDQUFDO1FBQ3ZDLHdCQUFrQixHQUFxQixJQUFJLENBQUM7UUFFM0MsZUFBUyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7O0lBZ1QxQyxDQUFDO0lBOVNHLDJCQUFNLEdBQU47UUFBQSxpQkFzQkM7UUFyQkcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFVBQUMsS0FBSztZQUN2RCxJQUFJLHFCQUFXLENBQUMsUUFBUSxDQUFDLGdCQUFnQixJQUFJLEtBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxFQUFFO2dCQUNoRSxJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksRUFBRSxFQUFFO29CQUNyQixLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7aUJBQzFCO2FBQ0o7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ2hDLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxjQUFjLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDckMsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDekM7UUFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUVELDBCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRTNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUU1RCxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDakUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXO1lBQzNFLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDN0IsQ0FBQztJQUVELG9DQUFlLEdBQWY7UUFBQSxpQkFXQztRQVZHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDakUsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDbkMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQztZQUNoQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFO2dCQUMvQixLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDcEMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDSixLQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ1gsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQztJQUVELGlDQUFZLEdBQVosVUFBYSxTQUFnRDtRQUE3RCxpQkFnSkM7UUFoSlksMEJBQUEsRUFBQSxZQUFxQixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDekQsU0FBUyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVc7WUFDckUsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUV6QixJQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLFNBQVMsRUFBRTtZQUNYLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxJQUFJLFNBQVMsQ0FBQyxVQUFVLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN2QjtTQUNKO1FBRUQsSUFBTSxZQUFZLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVwRCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDckIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzNCLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztZQUNuQixJQUFJLE1BQU0sR0FBRyxZQUFZLENBQUMsY0FBYyxFQUFFO2dCQUN0QyxVQUFVLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFO29CQUM3RCxVQUFVLEdBQUcsQ0FBQyxDQUFDO2lCQUNsQjtxQkFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtvQkFDbEUsVUFBVSxHQUFHLENBQUMsQ0FBQztpQkFDbEI7YUFDSjtpQkFBTSxJQUFJLE1BQU0sR0FBRyxZQUFZLENBQUMsY0FBYyxHQUFHLFlBQVksQ0FBQyxjQUFjLEVBQUU7Z0JBQzNFLFVBQVUsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUU7b0JBQzdELFVBQVUsR0FBRyxDQUFDLENBQUM7aUJBQ2xCO2FBQ0o7aUJBQU07Z0JBQ0gsVUFBVSxHQUFHLENBQUMsQ0FBQzthQUNsQjtZQUVELFFBQVEsVUFBVSxFQUFFO2dCQUNoQixLQUFLLENBQUM7b0JBQ0YsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsWUFBWSxDQUFDLG1CQUFtQixFQUFFO3dCQUNsRCxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztxQkFDeEM7b0JBQ0QsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTt3QkFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7cUJBQzVCO3lCQUFNLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFO3dCQUNwQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztxQkFDM0I7b0JBRUQsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7b0JBQzlGLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBRXRELFNBQVMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUM3RSxTQUFTLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztvQkFDN0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO29CQUN2RixJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ3ZGLFNBQVMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUN2SCxTQUFTLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztvQkFDdkgsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO29CQUNqSSxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBRWpJLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsRUFBRTt3QkFDckIsSUFBSSxZQUFZLEdBQUcsU0FBUyxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7d0JBQzNGLFNBQVMsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzt3QkFDdkQsWUFBWSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVzs0QkFDNUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUN4RixZQUFZLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO3FCQUNqRDt5QkFBTTt3QkFDSCxTQUFTLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7cUJBQzNEO29CQUNELE1BQU07Z0JBQ1YsS0FBSyxDQUFDO29CQUNGLElBQUksT0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO29CQUNsQyxJQUFJLE9BQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFDbEMsVUFBVSxDQUFDO3dCQUNQLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLE9BQUssRUFBRSxPQUFLLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUMxRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7b0JBQ04sVUFBVSxDQUFDO3dCQUNQLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxPQUFLLEVBQUUsT0FBSyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDekcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO29CQUNQLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUUxRCxTQUFTLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQ25ELFNBQVMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDbkQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDN0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDN0QsU0FBUyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUM3RixTQUFTLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQzdGLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQ3ZHLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQ3ZHLE1BQU07Z0JBQ1YsS0FBSyxDQUFDO29CQUNGLElBQUksV0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO29CQUN0QyxJQUFJLFdBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFDdEMsVUFBVSxDQUFDO3dCQUNQLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFdBQVMsRUFBRSxXQUFTLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNsSCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQ1AsVUFBVSxDQUFDO3dCQUNQLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxXQUFTLEVBQUUsV0FBUyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDakgsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUNSLFVBQVUsQ0FBQzt3QkFDUCxLQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsV0FBUyxFQUFFLFdBQVMsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUMxSCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ1IsVUFBVSxDQUFDO3dCQUNQLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsV0FBUyxFQUFFLFdBQVMsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUN6SCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ1IsVUFBVSxDQUFDO3dCQUNQLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFdBQVMsRUFBRSxXQUFTLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDdEgsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUNSLFVBQVUsQ0FBQzt3QkFDUCxLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsV0FBUyxFQUFFLFdBQVMsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNySCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ1IsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFDcEMsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBRTFELFNBQVMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDbkQsU0FBUyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUNuRCxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUM3RCxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUM3RCxTQUFTLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQzdGLFNBQVMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztvQkFDN0YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztvQkFDdkcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztvQkFDdkcsTUFBTTthQUNiO1NBQ0o7YUFBTTtZQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDbEYsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUNyQyxTQUFTLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUM3RSxTQUFTLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUM3RSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDbkYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ25GLFNBQVMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3ZILFNBQVMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3ZILElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUM3SCxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7U0FDaEk7UUFDRCxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDckMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO1FBRWhDLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxZQUFZLENBQUMsZ0JBQWdCLENBQUM7UUFDcEUsSUFBSSxlQUFlLEVBQUU7WUFDakIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDbkUsU0FBUyxDQUFDLFlBQVksQ0FBQyxnQkFBTSxDQUFDLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztTQUN2RDthQUFNO1lBQ0gsU0FBUyxDQUFDLFlBQVksQ0FBQyxnQkFBTSxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUNqRDtJQUNMLENBQUM7SUFFRCxrQ0FBYSxHQUFiLFVBQWMsQ0FBQyxFQUFFLENBQUM7UUFDZCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRTtZQUM3QixVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUN2QzthQUFNO1lBQ0gsVUFBVSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDMUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxpQkFBTyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2xFLFVBQVUsQ0FBQyxZQUFZLENBQUMsaUJBQU8sQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNyRSxVQUFVLENBQUMsWUFBWSxDQUFDLGlCQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFFbEUsT0FBTyxVQUFVLENBQUM7SUFDdEIsQ0FBQztJQUVELHNDQUFpQixHQUFqQixVQUFrQixDQUFDLEVBQUUsQ0FBQyxFQUFFLFdBQWlEO1FBQWpELDRCQUFBLEVBQUEsZUFBMEIsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1FBQ3JFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQ2pDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ3ZDO2FBQU07WUFDSCxNQUFNLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDeEM7UUFDRCxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNiLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsTUFBTSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzthQUNyRCxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUN4QyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDckMsTUFBTSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUM7UUFDNUIsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRS9CLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLGdCQUFnQixDQUFDO1FBQ3RGLElBQUksZUFBZSxFQUFFO1lBQ2pCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUMvQyxNQUFNLENBQUMsWUFBWSxDQUFDLGdCQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO1NBQ3BEO2FBQU07WUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLGdCQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQzlDO1FBRUQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXpELE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRyxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25HLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVuRyxNQUFNLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDekQsQ0FBQztJQUVELHNDQUFpQixHQUFqQixVQUFrQixFQUFFO1FBQXBCLGlCQXdCQztRQXZCRyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbkIsa0JBQVEsQ0FBQyxPQUFPLENBQUMsa0JBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUM7Z0JBQ2pDLHFCQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN6RCxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDeEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDekIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNqQyxDQUFDLENBQUMsQ0FBQTtTQUNMO1FBRUQsSUFBSSxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqTSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQzNCLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUM7WUFDeEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxHQUFHLENBQUM7WUFDL0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQztJQUVELHFDQUFnQixHQUFoQjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNoQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQU0sb0JBQVUsQ0FBQyxNQUFNLFVBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLFVBQUksb0JBQVUsQ0FBQyxJQUFNLENBQUM7UUFDM0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsb0JBQVUsQ0FBQyxRQUFRLENBQUM7SUFDbEQsQ0FBQztJQUVELGdEQUEyQixHQUEzQixVQUE0QixpQkFBeUI7UUFDakQsSUFBSSxDQUFDLGlCQUFpQjtZQUFFLE9BQU87UUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsaUJBQWlCLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsb0JBQVUsQ0FBQyxVQUFVLENBQUM7SUFDcEQsQ0FBQztJQUVELGtDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFFRCxnQ0FBVyxHQUFYLFVBQVksUUFBb0I7UUFBcEIseUJBQUEsRUFBQSxZQUFvQjtRQUM1QixJQUFJLENBQUMsS0FBSyxJQUFJLFFBQVEsQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzdDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25GLHFCQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwRSxDQUFDO0lBaFZrQjtRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FBd0I7SUFDdkI7UUFBbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQXlCO0lBQ3hCO1FBQWxCLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUFpQztJQUNoQztRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFBNEI7SUFDM0I7UUFBbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQTRCO0lBQzFCO1FBQW5CLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUEyQjtJQUMzQjtRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FBb0I7SUFDWjtRQUF6QixRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztnREFBaUM7SUFDdkM7UUFBbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQWtDO0lBQ2pDO1FBQWxCLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUE4QjtJQUM1QjtRQUFuQixRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFBOEI7SUFDN0I7UUFBbkIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQTZCO0lBYi9CLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FtVjlCO0lBQUQsaUJBQUM7Q0FuVkQsQUFtVkMsQ0FuVnVDLEVBQUUsQ0FBQyxTQUFTLEdBbVZuRDtrQkFuVm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZURlZmluZSBmcm9tIFwiLi9nYW1lL0dhbWVEZWZpbmVcIjtcclxuaW1wb3J0IFBlZXJNYW5hZ2VyIGZyb20gXCIuL1BlZXJDb21wb25lbnQvUGVlck1hbmFnZXJcIjtcclxuaW1wb3J0IFN0YWdlR2FtZUVuZCBmcm9tIFwiLi9zdGFnZS9TdGFnZUdhbWVFbmRcIjtcclxuaW1wb3J0IFN0YWdlSW5HYW1lIGZyb20gXCIuL3N0YWdlL1N0YWdlSW5HYW1lXCI7XHJcbmltcG9ydCAqIGFzIGxldmVsRGVzaWduIGZyb20gJy4uL2xldmVsRGVzaWduLmpzJ1xyXG5pbXBvcnQgU291bmRNZ3IgZnJvbSBcIi4vY29tbW9uL1NvdW5kTWdyXCI7XHJcbmltcG9ydCBDdWJvaWQgZnJvbSBcIi4vY3Vib2lkXCI7XHJcbmltcG9ydCBEaWFtb25kIGZyb20gXCIuL2RpYW1vbmRcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwbGF5R3JvdW5kIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgY3Vib2lkOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBkaWFtb25kOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBjdWJvaWRDb250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIGN1Ym9pZEJhc2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIHBsYXllckJhbGw6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKSBsYmxTY29yZTogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIGJnOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSkgZHJhZ29uU1A6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBkaWFtb25kQ29udGFpbmVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBlbmRHYW1lUG9wdXA6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKSBiYW5uZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKSBwb3B1cExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHBsYXllckluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBwcmV2aW91c0N1Ym9pZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGRpc3RhbmNlOiBjYy5WZWMyID0gY2MudjIoMTAwICogTWF0aC5jb3MoNDUgKiBNYXRoLlBJIC8gMTgwKSwgMTAwICogTWF0aC5jb3MoNDUgKiBNYXRoLlBJIC8gMTgwKSk7XHJcbiAgICBwcml2YXRlIGluaXRpYWxEaXN0YW5jZTogY2MuVmVjMiA9IGNjLnYyKDEwMCAqIE1hdGguY29zKDQ1ICogTWF0aC5QSSAvIDE4MCksIDAgKiBNYXRoLmNvcyg0NSAqIE1hdGguUEkgLyAxODApKTtcclxuICAgIHByaXZhdGUgaXNNb3ZlTGVmdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGlzUGxheWVyRGVhZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBzY29yZTogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBkaWFtb25kUG9vbDogY2MuTm9kZVBvb2wgPSBuZXcgY2MuTm9kZVBvb2woKTtcclxuICAgIHB1YmxpYyBleHRyYUN1Ym9pZFBvb2w6IGNjLk5vZGVQb29sID0gbmV3IGNjLk5vZGVQb29sKCk7XHJcbiAgICBwdWJsaWMgaXNSZWFkeTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc1NwYXduTGVmdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50TGV2ZWw6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGN1YmlvZENvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBpc0NoYW5naW5nRGlyZWN0aW9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGRyYWdvblNwaW5lOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIGRyYWdvblNraW46IHN0cmluZ1tdID0gW1wiQ2hhcjNcIiwgXCJDaGFyMlwiLCBcIkNoYXIxXCJdO1xyXG4gICAgcHVibGljIGJnU3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIHB1YmxpYyByb2FkU3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIHB1YmxpYyBvYmplY3RzU3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lW10gPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgcGxheWVyUG9zID0gbmV3IGNjLlZlYzIoMCwgMCk7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChQZWVyTWFuYWdlci5JbnN0YW5jZS5pc1BsYXlXaXRoUmVtb3RlICYmIHRoaXMucGxheWVySW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMTMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbGV0IGluaXRDb3VudCA9IDEwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5pdENvdW50OyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IGRpYW1vbmQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmRpYW1vbmQpO1xyXG4gICAgICAgICAgICB0aGlzLmRpYW1vbmRQb29sLnB1dChkaWFtb25kKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpbml0RXh0cmFDb3VudCA9IDMwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5pdEV4dHJhQ291bnQ7ICsraSkge1xyXG4gICAgICAgICAgICBsZXQgZXh0cmFDdWJvaWQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmN1Ym9pZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZXh0cmFDdWJvaWRQb29sLnB1dChleHRyYUN1Ym9pZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRyYWdvblNwaW5lID0gdGhpcy5wbGF5ZXJCYWxsLmdldENoaWxkQnlOYW1lKFwicGxheWVyQ2hhclwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyQmFsbC56SW5kZXggPSA5OTk7XHJcbiAgICAgICAgdGhpcy5jdWJvaWRCYXNlLnpJbmRleCA9IDA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTU7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUN1Ym9pZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kcmFnb25TcGluZS5zZXRTa2luKHRoaXMuZHJhZ29uU2tpblt0aGlzLnBsYXllckluZGV4XSk7XHJcblxyXG4gICAgICAgIHRoaXMuYmcuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmJnU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgdGhpcy5jdWJvaWRCYXNlLmdldENoaWxkQnlOYW1lKFwiZnJvbnRGYWNlXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cclxuICAgICAgICAgICAgdGhpcy5yb2FkU3ByaXRlRnJhbWU7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlRGlyZWN0aW9uKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1BsYXllckRlYWQgJiYgdGhpcy5pc1JlYWR5ICYmICF0aGlzLmlzQ2hhbmdpbmdEaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5pc01vdmVMZWZ0ID0gIXRoaXMuaXNNb3ZlTGVmdDtcclxuICAgICAgICAgICAgdGhpcy5pc0NoYW5naW5nRGlyZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5wbGF5ZXJCYWxsKS50bygwLjE1LCB7XHJcbiAgICAgICAgICAgICAgICBhbmdsZTogdGhpcy5pc01vdmVMZWZ0ID8gNDUgOiAtNDUsXHJcbiAgICAgICAgICAgIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0NoYW5naW5nRGlyZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmVVcGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQ3Vib2lkKG5ld0N1Ym9pZDogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY3Vib2lkKSkge1xyXG4gICAgICAgIG5ld0N1Ym9pZC5nZXRDaGlsZEJ5TmFtZShcImZyb250RmFjZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9XHJcbiAgICAgICAgICAgIHRoaXMucm9hZFNwcml0ZUZyYW1lO1xyXG5cclxuICAgICAgICBjb25zdCBuZXh0TGV2ZWwgPSBsZXZlbERlc2lnblt0aGlzLmN1cnJlbnRMZXZlbCArIDFdO1xyXG4gICAgICAgIGlmIChuZXh0TGV2ZWwpIHtcclxuICAgICAgICAgICAgaWYgKCsrdGhpcy5jdWJpb2RDb3VudCA+PSBuZXh0TGV2ZWwuc3RhcnRJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWwrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudExldmVsID0gbGV2ZWxEZXNpZ25bdGhpcy5jdXJyZW50TGV2ZWxdO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcmV2aW91c0N1Ym9pZCkge1xyXG4gICAgICAgICAgICBsZXQgcmFuZG9tID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgbGV0IHNwbGl0VmFsdWUgPSAwO1xyXG4gICAgICAgICAgICBpZiAocmFuZG9tIDwgY3VycmVudExldmVsLmRvdWJsZVdheTJSYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBzcGxpdFZhbHVlID0gMjtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByZXZpb3VzQ3Vib2lkLnggPCAtMTA1IHx8IHRoaXMucHJldmlvdXNDdWJvaWQueCA+IDEwNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwbGl0VmFsdWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXZpb3VzQ3Vib2lkLnggPCAtNzAgfHwgdGhpcy5wcmV2aW91c0N1Ym9pZC54ID4gNzApIHtcclxuICAgICAgICAgICAgICAgICAgICBzcGxpdFZhbHVlID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyYW5kb20gPCBjdXJyZW50TGV2ZWwuZG91YmxlV2F5MlJhdGUgKyBjdXJyZW50TGV2ZWwuZG91YmxlV2F5MVJhdGUpIHtcclxuICAgICAgICAgICAgICAgIHNwbGl0VmFsdWUgPSAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJldmlvdXNDdWJvaWQueCA8IC0xMDUgfHwgdGhpcy5wcmV2aW91c0N1Ym9pZC54ID4gMTA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BsaXRWYWx1ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzcGxpdFZhbHVlID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3dpdGNoIChzcGxpdFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCBjdXJyZW50TGV2ZWwuZGlyZWN0aW9uQ2hhbmdlUmF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU3Bhd25MZWZ0ID0gIXRoaXMuaXNTcGF3bkxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByZXZpb3VzQ3Vib2lkLnggPCAtMTQwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTcGF3bkxlZnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldmlvdXNDdWJvaWQueCA+IDE0MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU3Bhd25MZWZ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0N1Ym9pZC54ID0gKHRoaXMuaXNTcGF3bkxlZnQgPyAtdGhpcy5kaXN0YW5jZS54IDogdGhpcy5kaXN0YW5jZS54KSArIHRoaXMucHJldmlvdXNDdWJvaWQueDtcclxuICAgICAgICAgICAgICAgICAgICBuZXdDdWJvaWQueSA9IHRoaXMucHJldmlvdXNDdWJvaWQueSArIHRoaXMuZGlzdGFuY2UueTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q3Vib2lkLmdldENoaWxkQnlOYW1lKFwiZmVuY2UtMVwiKS5hY3RpdmUgPSB0aGlzLmlzU3Bhd25MZWZ0ID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0N1Ym9pZC5nZXRDaGlsZEJ5TmFtZShcImZlbmNlLTJcIikuYWN0aXZlID0gdGhpcy5pc1NwYXduTGVmdCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzQ3Vib2lkLmdldENoaWxkQnlOYW1lKFwiZmVuY2UtM1wiKS5hY3RpdmUgPSB0aGlzLmlzU3Bhd25MZWZ0ID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNDdWJvaWQuZ2V0Q2hpbGRCeU5hbWUoXCJmZW5jZS00XCIpLmFjdGl2ZSA9IHRoaXMuaXNTcGF3bkxlZnQgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q3Vib2lkLmdldENoaWxkQnlOYW1lKFwiZmVuY2UtMVwiKS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpLmVuYWJsZWQgPSB0aGlzLmlzU3Bhd25MZWZ0ID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0N1Ym9pZC5nZXRDaGlsZEJ5TmFtZShcImZlbmNlLTJcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKS5lbmFibGVkID0gdGhpcy5pc1NwYXduTGVmdCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzQ3Vib2lkLmdldENoaWxkQnlOYW1lKFwiZmVuY2UtM1wiKS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpLmVuYWJsZWQgPSB0aGlzLmlzU3Bhd25MZWZ0ID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNDdWJvaWQuZ2V0Q2hpbGRCeU5hbWUoXCJmZW5jZS00XCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikuZW5hYmxlZCA9IHRoaXMuaXNTcGF3bkxlZnQgPyBmYWxzZSA6IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC41KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvYmplY3RTcHJpdGUgPSBuZXdDdWJvaWQuZ2V0Q2hpbGRCeU5hbWUoXCJvYmplY3RSYW5kb21cIikuZ2V0Q2hpbGRCeU5hbWUoXCJvYmplY3RTcHJpdGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0N1Ym9pZC5nZXRDaGlsZEJ5TmFtZShcIm9iamVjdFJhbmRvbVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RTcHJpdGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmplY3RzU3ByaXRlRnJhbWVbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5vYmplY3RzU3ByaXRlRnJhbWUubGVuZ3RoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFNwcml0ZS54ID0gbmV3Q3Vib2lkLnggPiAwID8gLTQwMCA6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdDdWJvaWQuZ2V0Q2hpbGRCeU5hbWUoXCJvYmplY3RSYW5kb21cIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcmV2WCA9IHRoaXMucHJldmlvdXNDdWJvaWQueDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJldlkgPSB0aGlzLnByZXZpb3VzQ3Vib2lkLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRXh0cmFDdWJvaWQoLXRoaXMuZGlzdGFuY2UueCArIHByZXZYLCBwcmV2WSArIHRoaXMuZGlzdGFuY2UueSwgW2ZhbHNlLCB0cnVlLCBmYWxzZSwgdHJ1ZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUV4dHJhQ3Vib2lkKHRoaXMuZGlzdGFuY2UueCArIHByZXZYLCBwcmV2WSArIHRoaXMuZGlzdGFuY2UueSwgW3RydWUsIGZhbHNlLCB0cnVlLCBmYWxzZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMClcclxuICAgICAgICAgICAgICAgICAgICBuZXdDdWJvaWQueCA9IHRoaXMucHJldmlvdXNDdWJvaWQueDtcclxuICAgICAgICAgICAgICAgICAgICBuZXdDdWJvaWQueSA9IHRoaXMucHJldmlvdXNDdWJvaWQueSArIHRoaXMuZGlzdGFuY2UueSAqIDI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0N1Ym9pZC5nZXRDaGlsZEJ5TmFtZShcImZlbmNlLTFcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q3Vib2lkLmdldENoaWxkQnlOYW1lKFwiZmVuY2UtMlwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzQ3Vib2lkLmdldENoaWxkQnlOYW1lKFwiZmVuY2UtM1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzQ3Vib2lkLmdldENoaWxkQnlOYW1lKFwiZmVuY2UtNFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdDdWJvaWQuZ2V0Q2hpbGRCeU5hbWUoXCJmZW5jZS0xXCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0N1Ym9pZC5nZXRDaGlsZEJ5TmFtZShcImZlbmNlLTJcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c0N1Ym9pZC5nZXRDaGlsZEJ5TmFtZShcImZlbmNlLTNcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c0N1Ym9pZC5nZXRDaGlsZEJ5TmFtZShcImZlbmNlLTRcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByZXZpb3VzWCA9IHRoaXMucHJldmlvdXNDdWJvaWQueDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJldmlvdXNZID0gdGhpcy5wcmV2aW91c0N1Ym9pZC55O1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUV4dHJhQ3Vib2lkKC10aGlzLmRpc3RhbmNlLnggKyBwcmV2aW91c1gsIHByZXZpb3VzWSArIHRoaXMuZGlzdGFuY2UueSwgW2ZhbHNlLCB0cnVlLCB0cnVlLCBmYWxzZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVFeHRyYUN1Ym9pZCh0aGlzLmRpc3RhbmNlLnggKyBwcmV2aW91c1gsIHByZXZpb3VzWSArIHRoaXMuZGlzdGFuY2UueSwgW3RydWUsIGZhbHNlLCBmYWxzZSwgdHJ1ZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRXh0cmFDdWJvaWQoLXRoaXMuZGlzdGFuY2UueCAqIDIgKyBwcmV2aW91c1gsIHByZXZpb3VzWSArIHRoaXMuZGlzdGFuY2UueSAqIDIsIFtmYWxzZSwgdHJ1ZSwgZmFsc2UsIHRydWVdKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxNTApO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUV4dHJhQ3Vib2lkKHRoaXMuZGlzdGFuY2UueCAqIDIgKyBwcmV2aW91c1gsIHByZXZpb3VzWSArIHRoaXMuZGlzdGFuY2UueSAqIDIsIFt0cnVlLCBmYWxzZSwgdHJ1ZSwgZmFsc2VdKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAyMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUV4dHJhQ3Vib2lkKC10aGlzLmRpc3RhbmNlLnggKyBwcmV2aW91c1gsIHByZXZpb3VzWSArIHRoaXMuZGlzdGFuY2UueSAqIDMsIFt0cnVlLCBmYWxzZSwgZmFsc2UsIHRydWVdKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAyNTApO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUV4dHJhQ3Vib2lkKHRoaXMuZGlzdGFuY2UueCArIHByZXZpb3VzWCwgcHJldmlvdXNZICsgdGhpcy5kaXN0YW5jZS55ICogMywgW2ZhbHNlLCB0cnVlLCB0cnVlLCBmYWxzZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q3Vib2lkLnggPSB0aGlzLnByZXZpb3VzQ3Vib2lkLng7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q3Vib2lkLnkgPSB0aGlzLnByZXZpb3VzQ3Vib2lkLnkgKyB0aGlzLmRpc3RhbmNlLnkgKiA0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBuZXdDdWJvaWQuZ2V0Q2hpbGRCeU5hbWUoXCJmZW5jZS0xXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0N1Ym9pZC5nZXRDaGlsZEJ5TmFtZShcImZlbmNlLTJcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c0N1Ym9pZC5nZXRDaGlsZEJ5TmFtZShcImZlbmNlLTNcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c0N1Ym9pZC5nZXRDaGlsZEJ5TmFtZShcImZlbmNlLTRcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q3Vib2lkLmdldENoaWxkQnlOYW1lKFwiZmVuY2UtMVwiKS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdDdWJvaWQuZ2V0Q2hpbGRCeU5hbWUoXCJmZW5jZS0yXCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNDdWJvaWQuZ2V0Q2hpbGRCeU5hbWUoXCJmZW5jZS0zXCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNDdWJvaWQuZ2V0Q2hpbGRCeU5hbWUoXCJmZW5jZS00XCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pc1NwYXduTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBuZXdDdWJvaWQueCA9IHRoaXMuaXNTcGF3bkxlZnQgPyAtdGhpcy5pbml0aWFsRGlzdGFuY2UueCA6IHRoaXMuaW5pdGlhbERpc3RhbmNlLng7XHJcbiAgICAgICAgICAgIG5ld0N1Ym9pZC55ID0gdGhpcy5pbml0aWFsRGlzdGFuY2UueTtcclxuICAgICAgICAgICAgbmV3Q3Vib2lkLmdldENoaWxkQnlOYW1lKFwiZmVuY2UtMVwiKS5hY3RpdmUgPSB0aGlzLmlzU3Bhd25MZWZ0ID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgICAgICBuZXdDdWJvaWQuZ2V0Q2hpbGRCeU5hbWUoXCJmZW5jZS0yXCIpLmFjdGl2ZSA9IHRoaXMuaXNTcGF3bkxlZnQgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY3Vib2lkQmFzZS5nZXRDaGlsZEJ5TmFtZShcImZlbmNlLTdcIikuYWN0aXZlID0gdGhpcy5pc1NwYXduTGVmdCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jdWJvaWRCYXNlLmdldENoaWxkQnlOYW1lKFwiZmVuY2UtOFwiKS5hY3RpdmUgPSB0aGlzLmlzU3Bhd25MZWZ0ID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgICAgICBuZXdDdWJvaWQuZ2V0Q2hpbGRCeU5hbWUoXCJmZW5jZS0xXCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikuZW5hYmxlZCA9IHRoaXMuaXNTcGF3bkxlZnQgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgICAgIG5ld0N1Ym9pZC5nZXRDaGlsZEJ5TmFtZShcImZlbmNlLTJcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKS5lbmFibGVkID0gdGhpcy5pc1NwYXduTGVmdCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jdWJvaWRCYXNlLmdldENoaWxkQnlOYW1lKFwiZmVuY2UtN1wiKS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpLmVuYWJsZWQgPSB0aGlzLmlzU3Bhd25MZWZ0ID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmN1Ym9pZEJhc2UuZ2V0Q2hpbGRCeU5hbWUoXCJmZW5jZS04XCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikuZW5hYmxlZCA9IHRoaXMuaXNTcGF3bkxlZnQgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld0N1Ym9pZC56SW5kZXggPSAtbmV3Q3Vib2lkLnkgLyA3MDtcclxuICAgICAgICBuZXdDdWJvaWQucGFyZW50ID0gdGhpcy5jdWJvaWRDb250YWluZXI7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c0N1Ym9pZCA9IG5ld0N1Ym9pZDtcclxuXHJcbiAgICAgICAgbGV0IGlzRGlhbW9uZEFjdGl2ZSA9IE1hdGgucmFuZG9tKCkgPCBjdXJyZW50TGV2ZWwuZGlhbW9uZFNwYXduUmF0ZTtcclxuICAgICAgICBpZiAoaXNEaWFtb25kQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdEaWFtb25kID0gdGhpcy5jcmVhdGVEaWFtb25kKG5ld0N1Ym9pZC54LCBuZXdDdWJvaWQueSArIDg1KTtcclxuICAgICAgICAgICAgbmV3Q3Vib2lkLmdldENvbXBvbmVudChDdWJvaWQpLmRpYW1vbmQgPSBuZXdEaWFtb25kO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld0N1Ym9pZC5nZXRDb21wb25lbnQoQ3Vib2lkKS5kaWFtb25kID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRGlhbW9uZCh4LCB5KSB7XHJcbiAgICAgICAgbGV0IG5ld0RpYW1vbmQgPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLmRpYW1vbmRQb29sLnNpemUoKSA+IDApIHtcclxuICAgICAgICAgICAgbmV3RGlhbW9uZCA9IHRoaXMuZGlhbW9uZFBvb2wuZ2V0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3RGlhbW9uZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGlhbW9uZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld0RpYW1vbmQueCA9IHg7XHJcbiAgICAgICAgbmV3RGlhbW9uZC55ID0geTtcclxuICAgICAgICBuZXdEaWFtb25kLnBhcmVudCA9IHRoaXMuZGlhbW9uZENvbnRhaW5lcjtcclxuICAgICAgICBuZXdEaWFtb25kLmdldENvbXBvbmVudChEaWFtb25kKS5kaWFtb25kU3ByaXRlLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBuZXdEaWFtb25kLmdldENvbXBvbmVudChEaWFtb25kKS5kaWFtb25kUGFydGljbGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBuZXdEaWFtb25kLmdldENvbXBvbmVudChEaWFtb25kKS5sYmxTY29yZVBsdXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld0RpYW1vbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRXh0cmFDdWJvaWQoeCwgeSwgaXNBY3RpdmVBcnI6IGJvb2xlYW5bXSA9IFt0cnVlLCB0cnVlLCB0cnVlLCB0cnVlXSkge1xyXG4gICAgICAgIGxldCBjdWJvaWQgPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLmV4dHJhQ3Vib2lkUG9vbC5zaXplKCkgPiAwKSB7XHJcbiAgICAgICAgICAgIGN1Ym9pZCA9IHRoaXMuZXh0cmFDdWJvaWRQb29sLmdldCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGN1Ym9pZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY3Vib2lkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3Vib2lkLnggPSB4O1xyXG4gICAgICAgIGN1Ym9pZC55ID0geTtcclxuICAgICAgICBjdWJvaWQuZ2V0Q2hpbGRCeU5hbWUoXCJmcm9udEZhY2VcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuICAgICAgICAgICAgLnNwcml0ZUZyYW1lID0gdGhpcy5yb2FkU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgY3Vib2lkLnBhcmVudCA9IHRoaXMuY3Vib2lkQ29udGFpbmVyO1xyXG4gICAgICAgIGN1Ym9pZC5uYW1lID0gXCJFeHRyYUN1Ym9pZFwiO1xyXG4gICAgICAgIGN1Ym9pZC56SW5kZXggPSAtY3Vib2lkLnkgLyA3MDtcclxuXHJcbiAgICAgICAgbGV0IGlzRGlhbW9uZEFjdGl2ZSA9IE1hdGgucmFuZG9tKCkgPCBsZXZlbERlc2lnblt0aGlzLmN1cnJlbnRMZXZlbF0uZGlhbW9uZFNwYXduUmF0ZTtcclxuICAgICAgICBpZiAoaXNEaWFtb25kQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdEaWFtb25kID0gdGhpcy5jcmVhdGVEaWFtb25kKHgsIHkgKyA4NSk7XHJcbiAgICAgICAgICAgIGN1Ym9pZC5nZXRDb21wb25lbnQoQ3Vib2lkKS5kaWFtb25kID0gbmV3RGlhbW9uZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjdWJvaWQuZ2V0Q29tcG9uZW50KEN1Ym9pZCkuZGlhbW9uZCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjdWJvaWQuZ2V0Q2hpbGRCeU5hbWUoXCJmZW5jZS0xXCIpLmFjdGl2ZSA9IGlzQWN0aXZlQXJyWzBdO1xyXG4gICAgICAgIGN1Ym9pZC5nZXRDaGlsZEJ5TmFtZShcImZlbmNlLTJcIikuYWN0aXZlID0gaXNBY3RpdmVBcnJbMV07XHJcbiAgICAgICAgY3Vib2lkLmdldENoaWxkQnlOYW1lKFwiZmVuY2UtM1wiKS5hY3RpdmUgPSBpc0FjdGl2ZUFyclsyXTtcclxuICAgICAgICBjdWJvaWQuZ2V0Q2hpbGRCeU5hbWUoXCJmZW5jZS00XCIpLmFjdGl2ZSA9IGlzQWN0aXZlQXJyWzNdO1xyXG5cclxuICAgICAgICBjdWJvaWQuZ2V0Q2hpbGRCeU5hbWUoXCJmZW5jZS0xXCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikuZW5hYmxlZCA9IGlzQWN0aXZlQXJyWzBdO1xyXG4gICAgICAgIGN1Ym9pZC5nZXRDaGlsZEJ5TmFtZShcImZlbmNlLTJcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKS5lbmFibGVkID0gaXNBY3RpdmVBcnJbMV07XHJcbiAgICAgICAgY3Vib2lkLmdldENoaWxkQnlOYW1lKFwiZmVuY2UtM1wiKS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpLmVuYWJsZWQgPSBpc0FjdGl2ZUFyclsyXTtcclxuICAgICAgICBjdWJvaWQuZ2V0Q2hpbGRCeU5hbWUoXCJmZW5jZS00XCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikuZW5hYmxlZCA9IGlzQWN0aXZlQXJyWzNdO1xyXG5cclxuICAgICAgICBjdWJvaWQuZ2V0Q2hpbGRCeU5hbWUoXCJvYmplY3RSYW5kb21cIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYmFsbE1vdmVTY2hlZHVsZXIoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1BsYXllckRlYWQpIHtcclxuICAgICAgICAgICAgU291bmRNZ3IucGxheVNmeChTb3VuZE1nci5JbnN0YW5jZS5TRlhfRVhQTE9ERSk7XHJcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmJhbGxNb3ZlU2NoZWR1bGVyKTtcclxuICAgICAgICAgICAgdGhpcy5kcmFnb25TcGluZS50aW1lU2NhbGUgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLmRyYWdvblNwaW5lLnNldEFuaW1hdGlvbigwLCBcIkNyYXNoX0FuaW1hdGlvblwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ29uU3BpbmUuc2V0Q29tcGxldGVMaXN0ZW5lcigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBTdGFnZUluR2FtZS5JbnN0YW5jZS5zZXRHYW1lT3Zlcih0aGlzLnBsYXllckluZGV4LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BvcHVwRW5kR2FtZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFtb25kUG9vbC5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leHRyYUN1Ym9pZFBvb2wuY2xlYXIoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB2ZWMgPSBuZXcgY2MuVmVjMigwLCAwKTtcclxuICAgICAgICBjYy5WZWMyLmxlcnAodmVjLCB0aGlzLnBsYXllckJhbGwuZ2V0UG9zaXRpb24oKSwgdGhpcy5wbGF5ZXJCYWxsLmdldFBvc2l0aW9uKCkuY2xvbmUoKS5hZGQobmV3IGNjLlZlYzIoKHRoaXMuaXNNb3ZlTGVmdCA/IC0xIDogMSkgKiBkdCAqIHRoaXMuZGlzdGFuY2UueCAqIDIuNSwgZHQgKiB0aGlzLmRpc3RhbmNlLnkgKiAyLjUpKSwgMSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJCYWxsLnNldFBvc2l0aW9uKHZlYyk7XHJcbiAgICAgICAgY2MuVmVjMi5sZXJwKHZlYywgdGhpcy5iZy5wYXJlbnQuZ2V0UG9zaXRpb24oKSwgdGhpcy5iZy5wYXJlbnQuZ2V0UG9zaXRpb24oKS5jbG9uZSgpLmFkZChuZXcgY2MuVmVjMigwLCAtKGR0ICogdGhpcy5kaXN0YW5jZS55ICogMi41KSkpLCAxKTtcclxuICAgICAgICB0aGlzLmJnLnBhcmVudC5zZXRQb3NpdGlvbih2ZWMpO1xyXG4gICAgICAgIGlmICh0aGlzLmJnLnBhcmVudC55IDw9IC0xMDgwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmcucGFyZW50LnkgKz0gNzIwO1xyXG4gICAgICAgICAgICB0aGlzLmRpYW1vbmRDb250YWluZXIueSAtPSA3MjA7XHJcbiAgICAgICAgICAgIHRoaXMuY3Vib2lkQ29udGFpbmVyLnkgLT0gNzIwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93UG9wdXBFbmRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuZW5kR2FtZVBvcHVwLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5lbmRHYW1lUG9wdXApLnRvKDAuMywgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogJ2JvdW5jZU91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLnBvcHVwTGFiZWwuc3RyaW5nID0gYCR7R2FtZURlZmluZS5wbGF5ZXJ9ICR7dGhpcy5wbGF5ZXJJbmRleCArIDF9ICR7R2FtZURlZmluZS5kaWVkfWA7XHJcbiAgICAgICAgdGhpcy5iYW5uZXJMYWJlbC5zdHJpbmcgPSBHYW1lRGVmaW5lLmdhbWVvdmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dNZXNzYWdlUGxheWVyRGlzY29ubmVjdChkaXNjb25uZWN0TWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCFkaXNjb25uZWN0TWVzc2FnZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucG9wdXBMYWJlbC5zdHJpbmcgPSBkaXNjb25uZWN0TWVzc2FnZTtcclxuICAgICAgICB0aGlzLmJhbm5lckxhYmVsLnN0cmluZyA9IEdhbWVEZWZpbmUuZGlzY29ubmVjdDtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydE1vdmVCYWxsKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5iYWxsTW92ZVNjaGVkdWxlcik7XHJcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzUGxheWVyRGVhZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNjb3JlVXBkYXRlKHNjb3JlQWRkOiBudW1iZXIgPSAxKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZSArPSBzY29yZUFkZDtcclxuICAgICAgICB0aGlzLmxibFNjb3JlLnN0cmluZyA9IHRoaXMuc2NvcmUudG9TdHJpbmcoKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmxibFNjb3JlLm5vZGUpLnRvKDAuMSwgeyBzY2FsZTogMS4yIH0pLnRvKDAuMSwgeyBzY2FsZTogMSB9KS5zdGFydCgpO1xyXG4gICAgICAgIFN0YWdlSW5HYW1lLkluc3RhbmNlLnBsYXllclNjb3JlW3RoaXMucGxheWVySW5kZXhdID0gdGhpcy5zY29yZTtcclxuICAgIH1cclxufVxyXG4iXX0=