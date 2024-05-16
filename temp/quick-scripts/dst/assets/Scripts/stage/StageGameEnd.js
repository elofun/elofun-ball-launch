
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/stage/StageGameEnd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3RhZ2VcXFN0YWdlR2FtZUVuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBMEM7QUFDMUMsaURBQTRDO0FBQzVDLDBEQUF3RTtBQUN4RSw0REFBMEU7QUFDMUUsaUNBQTRCO0FBRTVCLHVDQUE4QztBQUd4QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEwQyxnQ0FBSztJQUEvQztRQUFBLHFFQXFIQztRQW5Id0IsYUFBTyxHQUFjLElBQUksQ0FBQztRQUMxQixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBQzVCLHFCQUFlLEdBQWMsRUFBRSxDQUFDO1FBQzNCLGVBQVMsR0FBbUIsRUFBRSxDQUFDO1FBQ3BDLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBSXpDLGdCQUFVLEdBQVksQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDOztJQTBHOUQsQ0FBQztxQkFySG9CLFlBQVk7SUFhN0Isd0JBQXdCO0lBRXhCLDZCQUFNLEdBQU47UUFDSSxjQUFZLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUNqQyxDQUFDO0lBRUQsNEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDdEMsQ0FBQztJQUVELGlCQUFpQjtJQUVqQixpQ0FBVSxHQUFWLFVBQVcsSUFBSTtRQUNYLElBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFB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LEVBQUUsQ0FBQyxNQUFNLENBQUM7aURBQTJCO0lBQzVCO1FBQWxCLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUFpQztJQUMzQjtRQUF2QixRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzttREFBZ0M7SUFDcEM7UUFBbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQThCO0lBQzdCO1FBQWxCLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUErQjtJQVBoQyxZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBcUhoQztJQUFELG1CQUFDO0NBckhELEFBcUhDLENBckh5QyxlQUFLLEdBcUg5QztrQkFySG9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU291bmRNZ3IgZnJvbSBcIi4uL2NvbW1vbi9Tb3VuZE1nclwiO1xyXG5pbXBvcnQgR2FtZURlZmluZSBmcm9tIFwiLi4vZ2FtZS9HYW1lRGVmaW5lXCI7XHJcbmltcG9ydCB7IFBlZXJBY3Rpb25UeXBlLCBQZWVyUGhhc2UgfSBmcm9tIFwiLi4vUGVlckNvbXBvbmVudC9QZWVyRGVmaW5lXCI7XHJcbmltcG9ydCBQZWVyTWFuYWdlciwgeyBJRGF0YVJlY2VpdmVkIH0gZnJvbSBcIi4uL1BlZXJDb21wb25lbnQvUGVlck1hbmFnZXJcIjtcclxuaW1wb3J0IFN0YWdlIGZyb20gXCIuL1N0YWdlXCI7XHJcbmltcG9ydCBTdGFnZUluR2FtZSBmcm9tIFwiLi9TdGFnZUluR2FtZVwiO1xyXG5pbXBvcnQgU3RhZ2VNZ3IsIHsgU3RhZ2VzIH0gZnJvbSBcIi4vU3RhZ2VNZ3JcIjtcclxuXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YWdlR2FtZUVuZCBleHRlbmRzIFN0YWdlIHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKSBidG5QbGF5OiBjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbikgYnRuQmFjazogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBwbGF5ZXJSYW5rQmFzZXM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbikgZmlyZVdvcmtzOiBjYy5BbmltYXRpb25bXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIGVuZEdhbWVNdWx0aTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgZW5kR2FtZVNpbmdsZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgc3RhdGljIEluc3RhbmNlOiBTdGFnZUdhbWVFbmQgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgZHJhZ29uU2tpbjogc3RyaW5nW10gPVtcIkNoYXIzXCIsIFwiQ2hhcjJcIiwgXCJDaGFyMVwiXTtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIFN0YWdlR2FtZUVuZC5JbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuYnRuUGxheS5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYnRuQmFjay5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG5cclxuICAgIHNob3dSZXN1bHQocmFuaykge1xyXG4gICAgICAgIGlmKHJhbmsubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZEdhbWVNdWx0aS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmVuZEdhbWVTaW5nbGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZihpIDwgcmFuay5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbXNnOiBJRGF0YVJlY2VpdmVkID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaGFzZTogUGVlclBoYXNlLkdBTUVPVkVSLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFBlZXJBY3Rpb25UeXBlLkVOREdBTUUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbVBhcmFtOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5rOiBpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZTogcmFua1tpXS5zY29yZSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBQZWVyTWFuYWdlci5JbnN0YW5jZS5zZW5kTWVzc2FnZShyYW5rW2ldLnBsYXllckluZGV4LCBtc2cpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJSYW5rQmFzZXNbaV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclJhbmtCYXNlc1tpXS5nZXRDaGlsZEJ5TmFtZShcInBsYXllclNwcml0ZVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRTa2luKHRoaXMuZHJhZ29uU2tpbltyYW5rW2ldLnBsYXllckluZGV4XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJSYW5rQmFzZXNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJwbGF5ZXJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHtHYW1lRGVmaW5lLnBsYXllcn0gJHtyYW5rW2ldLnBsYXllckluZGV4ICsgMX1gO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyUmFua0Jhc2VzW2ldLmdldENoaWxkQnlOYW1lKFwibGJsU2NvcmVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFua1tpXS5zY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclJhbmtCYXNlc1tpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kR2FtZU11bHRpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmVuZEdhbWVTaW5nbGUuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBoaWdoU2NvcmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlnaFNjb3JlWmlnWmFnJyk7XHJcbiAgICAgICAgICAgIGlmKCFoaWdoU2NvcmUgfHwgaGlnaFNjb3JlIDwgcmFua1swXS5zY29yZSkge1xyXG4gICAgICAgICAgICAgICAgaGlnaFNjb3JlID0gcmFua1swXS5zY29yZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGlnaFNjb3JlWmlnWmFnJywgaGlnaFNjb3JlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZW5kR2FtZVNpbmdsZS5nZXRDaGlsZEJ5TmFtZShcInBsYXllclwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9XHJcbiAgICAgICAgICAgICAgICBgJHtHYW1lRGVmaW5lLnBsYXllcn0gJHtyYW5rWzBdLnBsYXllckluZGV4ICsgMX1gO1xyXG4gICAgICAgICAgICB0aGlzLmVuZEdhbWVTaW5nbGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxTY29yZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFxyXG4gICAgICAgICAgICAgICAgcmFua1swXS5zY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZEdhbWVTaW5nbGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxIaWdoU2NvcmVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcclxuICAgICAgICAgICAgICAgIGhpZ2hTY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZEdhbWVTaW5nbGUuZ2V0Q2hpbGRCeU5hbWUoXCJwbGF5ZXJTcHJpdGVcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgICAgICAgLnNldFNraW4odGhpcy5kcmFnb25Ta2luW3JhbmtbMF0ucGxheWVySW5kZXhdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFN0YWdlTWdyLnNob3coU3RhZ2VzLlN0YWdlR2FtZUVuZCk7XHJcbiAgICAgICAgU291bmRNZ3IucGxheVNmeChTb3VuZE1nci5JbnN0YW5jZS5TRlhfRU5EU0NSRUVOKTtcclxuICAgICAgICAvLyBmb3IobGV0IGkgPSAwOyBpPHRoaXMuZmlyZVdvcmtzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuZmlyZVdvcmtzW2ldLnBsYXkoKTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuZmlyZVdvcmtzW2ldLmdldEFuaW1hdGlvblN0YXRlKFwiRmlyZVdvcmtcIikucmVwZWF0Q291bnQgPSAyO1xyXG4gICAgICAgIC8vICAgICB9LCA4MDAgKyA2MDAgKiBpKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dFN0YWdlKCkge1xyXG4gICAgICAgIFNvdW5kTWdyLnBsYXlTZngoU291bmRNZ3IuSW5zdGFuY2UuU0ZYX0JVVFRPTik7XHJcbiAgICAgICAgdGhpcy5idG5QbGF5LmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5idG5CYWNrLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLmJ0blBsYXkubm9kZSkudG8oMC4xLCB7c2NhbGU6IDAuNjV9KS50bygwLjEsIHtzY2FsZTogMC41fSlcclxuICAgICAgICAuY2FsbCgoKT0+e1xyXG4gICAgICAgICAgICBTdGFnZU1nci5zaG93KFN0YWdlcy5TdGFnZUxvYmJ5KTtcclxuICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByZXZpb3VzU3RhZ2UoKSB7XHJcbiAgICAgICAgbGV0IG1zZzogSURhdGFSZWNlaXZlZCA9IHtcclxuICAgICAgICAgICAgcGhhc2U6IFBlZXJQaGFzZS5HQU1FT1ZFUixcclxuICAgICAgICAgICAgYWN0aW9uOiBQZWVyQWN0aW9uVHlwZS5CQUNLLFxyXG4gICAgICAgICAgICBjdXN0b21QYXJhbTogXCJcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBQZWVyTWFuYWdlci5JbnN0YW5jZS5zZW5kTWVzc2FnZVRvQWxsKG1zZyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgU291bmRNZ3IucGxheVNmeChTb3VuZE1nci5JbnN0YW5jZS5TRlhfQlVUVE9OKTtcclxuICAgICAgICB0aGlzLmJ0blBsYXkuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5idG5CYWNrLmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICAgICBcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmJ0bkJhY2subm9kZSkudG8oMC4xLCB7c2NhbGU6IDAuNjV9KS50bygwLjEsIHtzY2FsZTogMC41fSlcclxuICAgICAgICAuY2FsbCgoKT0+e1xyXG4gICAgICAgICAgICBTdGFnZU1nci5JbnN0YW5jZS5zZW5kTWVzc2FnZShcImdvQmFja1wiKTsgXHJcbiAgICAgICAgfSkuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjaG9vc2VCdXR0b24oaXNCdG5OZXh0OiBib29sZWFuKSB7XHJcbiAgICAgICAgU291bmRNZ3IucGxheVNmeChTb3VuZE1nci5JbnN0YW5jZS5TRlhfU0VMRUNUKTtcclxuICAgICAgICB0aGlzLmJ0bkJhY2suaW50ZXJhY3RhYmxlID0gIWlzQnRuTmV4dDtcclxuICAgICAgICB0aGlzLmJ0blBsYXkuaW50ZXJhY3RhYmxlID0gaXNCdG5OZXh0O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==