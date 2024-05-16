
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/stage/StageInGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3RhZ2VcXFN0YWdlSW5HYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUE0QjtBQUM1QiwrQ0FBMEM7QUFDMUMsNENBQXVDO0FBQ3ZDLDREQUEwRTtBQUMxRSwwREFBcUQ7QUFHL0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQUs7SUFBOUM7UUFBQSxxRUF3SkM7UUF0SndCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBQy9CLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsa0JBQVksR0FBYyxFQUFFLENBQUM7UUFDdEIsNEJBQXNCLEdBQXFCLEVBQUUsQ0FBQztRQUNqRCxrQkFBWSxHQUFnQixJQUFJLENBQUM7UUFDakMsZ0JBQVUsR0FBZ0IsSUFBSSxDQUFDO1FBQ25DLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBQzdCLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFDcEIsb0JBQWMsR0FBcUIsRUFBRSxDQUFDO1FBQ3RDLHNCQUFnQixHQUFxQixFQUFFLENBQUM7UUFDeEMseUJBQW1CLEdBQXFCLEVBQUUsQ0FBQztRQUMzQyx5QkFBbUIsR0FBcUIsRUFBRSxDQUFDO1FBQzNDLHlCQUFtQixHQUFxQixFQUFFLENBQUM7UUFJOUQsWUFBTSxHQUFjLEVBQUUsQ0FBQztRQUN2QixnQkFBVSxHQUFjLEVBQUUsQ0FBQztRQUMzQixpQkFBVyxHQUFhLEVBQUUsQ0FBQztRQUMxQixxQkFBZSxHQUFhLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0MsMEJBQW9CLEdBQWEsRUFBRSxDQUFDO1FBQ3BDLHdCQUFrQixHQUFHLElBQUksQ0FBQzs7SUFpSXRDLENBQUM7b0JBeEpvQixXQUFXO0lBd0I1Qix3QkFBd0I7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eEpELEFBd0pDLENBeEp3QyxlQUFLLEdBd0o3QztrQkF4Sm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RhZ2UgZnJvbSBcIi4vU3RhZ2VcIjtcclxuaW1wb3J0IFN0YWdlR2FtZUVuZCBmcm9tIFwiLi9TdGFnZUdhbWVFbmRcIjtcclxuaW1wb3J0IHBsYXlHcm91bmQgZnJvbSBcIi4uL3BsYXlHcm91bmRcIjtcclxuaW1wb3J0IFBlZXJNYW5hZ2VyLCB7IElEYXRhUmVjZWl2ZWQgfSBmcm9tIFwiLi4vUGVlckNvbXBvbmVudC9QZWVyTWFuYWdlclwiO1xyXG5pbXBvcnQgUGVlckFjdGlvbiBmcm9tIFwiLi4vUGVlckNvbXBvbmVudC9QZWVyQWN0aW9uXCI7XHJcbmltcG9ydCB7IFBlZXJBY3Rpb25UeXBlLCBQZWVyUGhhc2UgfSBmcm9tIFwiLi4vUGVlckNvbXBvbmVudC9QZWVyRGVmaW5lXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhZ2VJbkdhbWUgZXh0ZW5kcyBTdGFnZSB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYikgcGxheUdyb3VuZDogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBjb250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIHBsYXllckF2YXRhcjogY2MuTm9kZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpIHBsYXllclJhbmtTcHJpdGVGcmFtZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5NYXRlcmlhbCkgbm9ybWFsU3ByaXRlOiBjYy5NYXRlcmlhbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTWF0ZXJpYWwpIGdyYXlTcHJpdGU6IGNjLk1hdGVyaWFsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSB0dXRvcmlhbFBvcHVwOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbCkgbGJsVGltZXI6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSkgYmdTcHJpdGVGcmFtZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSkgcm9hZFNwcml0ZUZyYW1lczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKSBvYmplY3RzU3ByaXRlRnJhbWUxOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpIG9iamVjdHNTcHJpdGVGcmFtZTI6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSkgb2JqZWN0c1Nwcml0ZUZyYW1lMzogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICAgIHN0YXRpYyBJbnN0YW5jZTogU3RhZ2VJbkdhbWUgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBpc0RlYWQ6IGJvb2xlYW5bXSA9IFtdO1xyXG4gICAgcHVibGljIGlzR2FtZU92ZXI6IGJvb2xlYW5bXSA9IFtdO1xyXG4gICAgcHVibGljIHBsYXllclNjb3JlOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBhdmF0YXJQb3NpdGlvblk6IG51bWJlcltdID0gWzUwLCAtMTI1LCAtMzAwXTtcclxuICAgIHByaXZhdGUgY29ubmVjdGVkUGxheWVySW5kZXg6IG51bWJlcltdID0gW107XHJcbiAgICBwcml2YXRlIHJhbmtVcGRhdGVJbnRlcnZhbCA9IG51bGw7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgU3RhZ2VJbkdhbWUuSW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIHZhciBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbCgpIHtcclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmNvbnRhaW5lci5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBpZiAoY2hpbGQuZ2V0Q29tcG9uZW50KFBlZXJBY3Rpb24pKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoUGVlckFjdGlvbikucGxheWVyU0lQID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb25uZWN0ZWRQbGF5ZXJJbmRleCA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgYmdJbmRleEFyciA9IFswLCAxLCAyXTtcclxuICAgICAgICB0aGlzLnNodWZmbGVBcnJheShiZ0luZGV4QXJyKTtcclxuXHJcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckF2YXRhcltpXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zZXRNYXRlcmlhbCgwLCB0aGlzLm5vcm1hbFNwcml0ZSk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyQXZhdGFyW2ldLmFjdGl2ZSA9IFBlZXJNYW5hZ2VyLkluc3RhbmNlLmNsaWVudENvbm5lY3RlZFtpXSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKFBlZXJNYW5hZ2VyLkluc3RhbmNlLmNsaWVudENvbm5lY3RlZFtpXSkge1xyXG4gICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgICAgIGxldCBwbGF5Z3JvdW5kID0gY2MuaW5zdGFudGlhdGUodGhpcy5wbGF5R3JvdW5kKTtcclxuICAgICAgICAgICAgICAgIHBsYXlncm91bmQuZ2V0Q29tcG9uZW50KHBsYXlHcm91bmQpLnBsYXllckluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgIHBsYXlncm91bmQuZ2V0Q29tcG9uZW50KFBlZXJBY3Rpb24pLnBsYXllclNJUCA9IFBlZXJNYW5hZ2VyLkluc3RhbmNlLmNsaWVudENvbm5lY3RlZFtpXS5yZW1vdGVTSVA7XHJcbiAgICAgICAgICAgICAgICBwbGF5Z3JvdW5kLmdldENvbXBvbmVudChwbGF5R3JvdW5kKS5iZ1Nwcml0ZUZyYW1lID0gdGhpcy5iZ1Nwcml0ZUZyYW1lc1tiZ0luZGV4QXJyW2ldXTtcclxuICAgICAgICAgICAgICAgIHBsYXlncm91bmQuZ2V0Q29tcG9uZW50KHBsYXlHcm91bmQpLnJvYWRTcHJpdGVGcmFtZSA9IHRoaXMucm9hZFNwcml0ZUZyYW1lc1tiZ0luZGV4QXJyW2ldXTtcclxuICAgICAgICAgICAgICAgIHBsYXlncm91bmQuZ2V0Q29tcG9uZW50KHBsYXlHcm91bmQpLm9iamVjdHNTcHJpdGVGcmFtZSA9IGJnSW5kZXhBcnJbaV0gPT0gMFxyXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5vYmplY3RzU3ByaXRlRnJhbWUxIDogYmdJbmRleEFycltpXSA9PSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5vYmplY3RzU3ByaXRlRnJhbWUyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5vYmplY3RzU3ByaXRlRnJhbWUzO1xyXG4gICAgICAgICAgICAgICAgcGxheWdyb3VuZC5wYXJlbnQgPSB0aGlzLmNvbnRhaW5lcjtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNHYW1lT3ZlcltpXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0RlYWRbaV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU2NvcmVbaV0gPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0ZWRQbGF5ZXJJbmRleC5wdXNoKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJhbmtVcGRhdGVJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVSYW5rKCk7XHJcbiAgICAgICAgfSwgMjAwMClcclxuXHJcbiAgICAgICAgdGhpcy5sYmxUaW1lci5zdHJpbmcgPSBcIjVcIjtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy50dXRvcmlhbFBvcHVwKS50bygwLjMsIHsgc2NhbGU6IDAuNSwgfSwgeyBlYXNpbmc6IFwicXVhZE91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIGxldCB0aW1lID0gNTtcclxuICAgICAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYmxUaW1lci5zdHJpbmcgPSAoLS10aW1lKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5sYmxUaW1lci5ub2RlKS50bygwLjEsIHsgc2NhbGU6IDEuNSB9KS50bygwLjEsIHsgc2NhbGU6IDEgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aW1lIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLnR1dG9yaWFsUG9wdXApLnRvKDAuMywgeyBzY2FsZTogMCwgfSwgeyBlYXNpbmc6IFwicXVhZEluXCIgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmNoaWxkcmVuLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuZ2V0Q29tcG9uZW50KHBsYXlHcm91bmQpLnN0YXJ0TW92ZUJhbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAxMDAwKVxyXG4gICAgICAgIH0sIDUwMClcclxuICAgIH1cclxuXHJcbiAgICBzaHVmZmxlQXJyYXkoYXJyYXkpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XHJcbiAgICAgICAgICAgIFthcnJheVtpXSwgYXJyYXlbal1dID0gW2FycmF5W2pdLCBhcnJheVtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dDb25uZWN0TWVzc2FnZShpbmRleDogbnVtYmVyLCBkaXNjb25uZWN0TWVzc2FnZTogc3RyaW5nID0gbnVsbCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jb250YWluZXIuY2hpbGRyZW5baW5kZXhdKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2hpbGRyZW5baW5kZXhdLmdldENvbXBvbmVudChwbGF5R3JvdW5kKS5zaG93TWVzc2FnZVBsYXllckRpc2Nvbm5lY3QoZGlzY29ubmVjdE1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEdhbWVPdmVyKGluZGV4OiBudW1iZXIsIGlzRGVhZDogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgICAgICB0aGlzLmlzR2FtZU92ZXJbaW5kZXhdID0gdHJ1ZTtcclxuICAgICAgICBpZiAoaXNEZWFkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEZWFkW2luZGV4XSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyQXZhdGFyW2luZGV4XS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zZXRNYXRlcmlhbCgwLCB0aGlzLmdyYXlTcHJpdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNHYW1lT3Zlci5ldmVyeSgoZSkgPT4geyByZXR1cm4gZSA9PSB0cnVlIH0pKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5yYW5rVXBkYXRlSW50ZXJ2YWwpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5jb250YWluZXIuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5nZXRDb21wb25lbnQoUGVlckFjdGlvbikpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoUGVlckFjdGlvbikucGxheWVyU0lQID0gLTE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuXHJcbiAgICAgICAgICAgIGxldCByYW5rID0gdGhpcy5nZXRQbGF5ZXJSYW5rKCk7XHJcbiAgICAgICAgICAgIGlmIChQZWVyTWFuYWdlci5JbnN0YW5jZS5nZXRDbGllbnRDb25uZXRlZCgpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIFN0YWdlR2FtZUVuZC5JbnN0YW5jZS5zaG93UmVzdWx0KHJhbmspO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVJhbmsoKSB7XHJcbiAgICAgICAgbGV0IHJhbmsgPSB0aGlzLmdldFBsYXllclJhbmsoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5rLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMucGxheWVyQXZhdGFyW3JhbmtbaV0ucGxheWVySW5kZXhdKS50bygwLjUsIHsgeTogdGhpcy5hdmF0YXJQb3NpdGlvbllbaV0gfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXJbcmFua1tpXS5wbGF5ZXJJbmRleF0uZ2V0Q2hpbGRCeU5hbWUoXCJyYW5rXCIpXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnBsYXllclJhbmtTcHJpdGVGcmFtZXNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFBsYXllclJhbmsoKSB7XHJcbiAgICAgICAgbGV0IHJhbmsgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29ubmVjdGVkUGxheWVySW5kZXgubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgcmFua1tpXSA9IHtcclxuICAgICAgICAgICAgICAgIHNjb3JlOiB0aGlzLnBsYXllclNjb3JlW3RoaXMuY29ubmVjdGVkUGxheWVySW5kZXhbaV1dLFxyXG4gICAgICAgICAgICAgICAgcGxheWVySW5kZXg6IHRoaXMuY29ubmVjdGVkUGxheWVySW5kZXhbaV0sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJhbmsuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYi5zY29yZSAtIGEuc2NvcmU7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHJhbms7XHJcbiAgICB9XHJcbn1cclxuIl19