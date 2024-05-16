"use strict";
cc._RF.push(module, 'd0df7MrCDxIOqiQAqLISxA9', 'StageGameEnd');
// Scripts/stage/StageGameEnd.ts

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
var SoundMgr_1 = require("../common/SoundMgr");
var GameDefine_1 = require("../game/GameDefine");
var PeerDefine_1 = require("../PeerComponent/PeerDefine");
var PeerManager_1 = require("../PeerComponent/PeerManager");
var Stage_1 = require("./Stage");
var StageMgr_1 = require("./StageMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StageGameEnd = /** @class */ (function (_super) {
    __extends(StageGameEnd, _super);
    function StageGameEnd() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnPlay = null;
        _this.btnBack = null;
        _this.playerRankBases = [];
        _this.fireWorks = [];
        _this.endGameMulti = null;
        _this.endGameSingle = null;
        _this.dragonSkin = ["Char3", "Char2", "Char1"];
        return _this;
    }
    StageGameEnd_1 = StageGameEnd;
    // LIFE-CYCLE CALLBACKS:
    StageGameEnd.prototype.onLoad = function () {
        StageGameEnd_1.Instance = this;
    };
    StageGameEnd.prototype.start = function () {
        this.btnPlay.interactable = true;
        this.btnBack.interactable = false;
    };
    // update (dt) {}
    StageGameEnd.prototype.showResult = function (rank) {
        if (rank.length > 1) {
            this.endGameMulti.active = true;
            this.endGameSingle.active = false;
            for (var i = 0; i < 3; i++) {
                if (i < rank.length) {
                    var msg = {
                        phase: PeerDefine_1.PeerPhase.GAMEOVER,
                        action: PeerDefine_1.PeerActionType.ENDGAME,
                        customParam: "",
                        rank: i,
                        score: rank[i].score,
                    };
                    PeerManager_1.default.Instance.sendMessage(rank[i].playerIndex, msg);
                    this.playerRankBases[i].active = true;
                    this.playerRankBases[i].getChildByName("playerSprite").getComponent(sp.Skeleton)
                        .setSkin(this.dragonSkin[rank[i].playerIndex]);
                    this.playerRankBases[i].getChildByName("player").getComponent(cc.Label).string =
                        GameDefine_1.default.player + " " + (rank[i].playerIndex + 1);
                    this.playerRankBases[i].getChildByName("lblScore").getComponent(cc.Label).string =
                        rank[i].score.toString();
                }
                else {
                    this.playerRankBases[i].active = false;
                }
            }
        }
        else {
            this.endGameMulti.active = false;
            this.endGameSingle.active = true;
            var highScore = localStorage.getItem('highScoreZigZag');
            if (!highScore || highScore < rank[0].score) {
                highScore = rank[0].score;
            }
            localStorage.setItem('highScoreZigZag', highScore);
            this.endGameSingle.getChildByName("player").getComponent(cc.Label).string =
                GameDefine_1.default.player + " " + (rank[0].playerIndex + 1);
            this.endGameSingle.getChildByName("lblScore").getComponent(cc.Label).string =
                rank[0].score.toString();
            this.endGameSingle.getChildByName("lblHighScore").getComponent(cc.Label).string =
                highScore.toString();
            this.endGameSingle.getChildByName("playerSprite").getComponent(sp.Skeleton)
                .setSkin(this.dragonSkin[rank[0].playerIndex]);
        }
        StageMgr_1.default.show(StageMgr_1.Stages.StageGameEnd);
        SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_ENDSCREEN);
        // for(let i = 0; i<this.fireWorks.length; i++) {
        //     setTimeout(()=>{
        //         this.fireWorks[i].play();
        //         this.fireWorks[i].getAnimationState("FireWork").repeatCount = 2;
        //     }, 800 + 600 * i);
        // }
    };
    StageGameEnd.prototype.nextStage = function () {
        SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
        this.btnPlay.interactable = true;
        this.btnBack.interactable = false;
        cc.tween(this.btnPlay.node).to(0.1, { scale: 0.65 }).to(0.1, { scale: 0.5 })
            .call(function () {
            StageMgr_1.default.show(StageMgr_1.Stages.StageLobby);
        }).start();
    };
    StageGameEnd.prototype.previousStage = function () {
        var msg = {
            phase: PeerDefine_1.PeerPhase.GAMEOVER,
            action: PeerDefine_1.PeerActionType.BACK,
            customParam: ""
        };
        PeerManager_1.default.Instance.sendMessageToAll(msg);
        SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
        this.btnPlay.interactable = false;
        this.btnBack.interactable = true;
        cc.tween(this.btnBack.node).to(0.1, { scale: 0.65 }).to(0.1, { scale: 0.5 })
            .call(function () {
            StageMgr_1.default.Instance.sendMessage("goBack");
        }).start();
    };
    StageGameEnd.prototype.chooseButton = function (isBtnNext) {
        SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_SELECT);
        this.btnBack.interactable = !isBtnNext;
        this.btnPlay.interactable = isBtnNext;
    };
    var StageGameEnd_1;
    StageGameEnd.Instance = null;
    __decorate([
        property(cc.Button)
    ], StageGameEnd.prototype, "btnPlay", void 0);
    __decorate([
        property(cc.Button)
    ], StageGameEnd.prototype, "btnBack", void 0);
    __decorate([
        property(cc.Node)
    ], StageGameEnd.prototype, "playerRankBases", void 0);
    __decorate([
        property(cc.Animation)
    ], StageGameEnd.prototype, "fireWorks", void 0);
    __decorate([
        property(cc.Node)
    ], StageGameEnd.prototype, "endGameMulti", void 0);
    __decorate([
        property(cc.Node)
    ], StageGameEnd.prototype, "endGameSingle", void 0);
    StageGameEnd = StageGameEnd_1 = __decorate([
        ccclass
    ], StageGameEnd);
    return StageGameEnd;
}(Stage_1.default));
exports.default = StageGameEnd;

cc._RF.pop();