
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/stage/StageLobby.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cd1c1/ESEpLhb7U8uTj4hYv', 'StageLobby');
// Scripts/stage/StageLobby.ts

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
var SoundMgr_1 = require("../common/SoundMgr");
var PeerManager_1 = require("../PeerComponent/PeerManager");
var QRCodeGen_1 = require("../PeerComponent/QRCodeGen");
var Stage_1 = require("./Stage");
var StageMgr_1 = require("./StageMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StageLobby = /** @class */ (function (_super) {
    __extends(StageLobby, _super);
    function StageLobby() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.qrCode = null;
        _this.btnNext = null;
        _this.lblRoomCode = null;
        _this.players = [];
        _this.normalSpine = null;
        _this.graySpine = null;
        _this.msg = null;
        return _this;
    }
    StageLobby_1 = StageLobby;
    // LIFE-CYCLE CALLBACKS:
    StageLobby.prototype.onLoad = function () {
        StageLobby_1.Instance = this;
    };
    StageLobby.prototype.start = function () {
        this.msg.string = "" + window.controllerOrigin;
    };
    StageLobby.prototype.onEnable = function () {
        return;
        for (var i = 0; i < 3; i++) {
            this.setUI(PeerManager_1.default.Instance.clientConnected[i] ? true : false, i);
        }
    };
    // update (dt) {}
    StageLobby.prototype.nextStage = function () {
        SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
        cc.tween(this.btnNext.node)
            .to(0.1, { scale: 0.65 })
            .to(0.1, { scale: 0.5 })
            .call(function () {
            StageMgr_1.default.show(StageMgr_1.Stages.StageInGame);
        })
            .start();
    };
    StageLobby.prototype.setUI = function (isConnected, index) {
        this.players[index].getChildByName("playerReady").active = isConnected;
        this.players[index].getChildByName("playerNotReady").active = !isConnected;
        this.players[index]
            .getChildByName("playerSprite")
            .getComponent(sp.Skeleton)
            .setMaterial(0, isConnected ? this.normalSpine : this.graySpine);
    };
    var StageLobby_1;
    StageLobby.Instance = null;
    __decorate([
        property(QRCodeGen_1.default)
    ], StageLobby.prototype, "qrCode", void 0);
    __decorate([
        property(cc.Button)
    ], StageLobby.prototype, "btnNext", void 0);
    __decorate([
        property(cc.Label)
    ], StageLobby.prototype, "lblRoomCode", void 0);
    __decorate([
        property(cc.Node)
    ], StageLobby.prototype, "players", void 0);
    __decorate([
        property(cc.Material)
    ], StageLobby.prototype, "normalSpine", void 0);
    __decorate([
        property(cc.Material)
    ], StageLobby.prototype, "graySpine", void 0);
    __decorate([
        property(cc.Label)
    ], StageLobby.prototype, "msg", void 0);
    StageLobby = StageLobby_1 = __decorate([
        ccclass
    ], StageLobby);
    return StageLobby;
}(Stage_1.default));
exports.default = StageLobby;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3RhZ2VcXFN0YWdlTG9iYnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsK0NBQTBDO0FBRTFDLDREQUF1RDtBQUN2RCx3REFBbUQ7QUFDbkQsaUNBQTRCO0FBQzVCLHVDQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBSztJQUE3QztRQUFBLHFFQWlEQztRQWhEc0IsWUFBTSxHQUFjLElBQUksQ0FBQztRQUN6QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBQzNCLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBQzlCLGFBQU8sR0FBYyxFQUFFLENBQUM7UUFDcEIsaUJBQVcsR0FBZ0IsSUFBSSxDQUFDO1FBQ2hDLGVBQVMsR0FBZ0IsSUFBSSxDQUFDO1FBQ2pDLFNBQUcsR0FBZ0IsSUFBSSxDQUFDOztJQTBDOUMsQ0FBQzttQkFqRG9CLFVBQVU7SUFXN0Isd0JBQXdCO0lBRXhCLDJCQUFNLEdBQU47UUFDRSxZQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUM3QixDQUFDO0lBRUQsMEJBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEtBQUcsTUFBTSxDQUFDLGdCQUFrQixDQUFDO0lBQ2pELENBQUM7SUFFRCw2QkFBUSxHQUFSO1FBQ0UsT0FBTztRQUNQLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3ZFO0lBQ0gsQ0FBQztJQUVELGlCQUFpQjtJQUVqQiw4QkFBUyxHQUFUO1FBQ0Usa0JBQVEsQ0FBQyxPQUFPLENBQUMsa0JBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzthQUN4QixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO2FBQ3hCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUM7YUFDdkIsSUFBSSxDQUFDO1lBQ0osa0JBQVEsQ0FBQyxJQUFJLENBQUMsaUJBQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFRCwwQkFBSyxHQUFMLFVBQU0sV0FBb0IsRUFBRSxLQUFhO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUM7UUFDdkUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFDM0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7YUFDaEIsY0FBYyxDQUFDLGNBQWMsQ0FBQzthQUM5QixZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzthQUN6QixXQUFXLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7O0lBdkNNLG1CQUFRLEdBQWUsSUFBSSxDQUFDO0lBUmQ7UUFBcEIsUUFBUSxDQUFDLG1CQUFTLENBQUM7OENBQTBCO0lBQ3pCO1FBQXBCLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUEyQjtJQUMzQjtRQUFuQixRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFBOEI7SUFDOUI7UUFBbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQXlCO0lBQ3BCO1FBQXRCLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO21EQUFpQztJQUNoQztRQUF0QixRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztpREFBK0I7SUFDakM7UUFBbkIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQXlCO0lBUHpCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FpRDlCO0lBQUQsaUJBQUM7Q0FqREQsQUFpREMsQ0FqRHVDLGVBQUssR0FpRDVDO2tCQWpEb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBTb3VuZE1nciBmcm9tIFwiLi4vY29tbW9uL1NvdW5kTWdyXCI7XHJcbmltcG9ydCBHYW1lRGVmaW5lIGZyb20gXCIuLi9nYW1lL0dhbWVEZWZpbmVcIjtcclxuaW1wb3J0IFBlZXJNYW5hZ2VyIGZyb20gXCIuLi9QZWVyQ29tcG9uZW50L1BlZXJNYW5hZ2VyXCI7XHJcbmltcG9ydCBRUkNvZGVHZW4gZnJvbSBcIi4uL1BlZXJDb21wb25lbnQvUVJDb2RlR2VuXCI7XHJcbmltcG9ydCBTdGFnZSBmcm9tIFwiLi9TdGFnZVwiO1xyXG5pbXBvcnQgU3RhZ2VNZ3IsIHsgU3RhZ2VzIH0gZnJvbSBcIi4vU3RhZ2VNZ3JcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFnZUxvYmJ5IGV4dGVuZHMgU3RhZ2Uge1xyXG4gIEBwcm9wZXJ0eShRUkNvZGVHZW4pIHFyQ29kZTogUVJDb2RlR2VuID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuQnV0dG9uKSBidG5OZXh0OiBjYy5CdXR0b24gPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5MYWJlbCkgbGJsUm9vbUNvZGU6IGNjLkxhYmVsID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSkgcGxheWVyczogY2MuTm9kZVtdID0gW107XHJcbiAgQHByb3BlcnR5KGNjLk1hdGVyaWFsKSBub3JtYWxTcGluZTogY2MuTWF0ZXJpYWwgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5NYXRlcmlhbCkgZ3JheVNwaW5lOiBjYy5NYXRlcmlhbCA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLkxhYmVsKSBtc2c6IGNjLlJpY2hUZXh0ID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIEluc3RhbmNlOiBTdGFnZUxvYmJ5ID0gbnVsbDtcclxuXHJcbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIFN0YWdlTG9iYnkuSW5zdGFuY2UgPSB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICB0aGlzLm1zZy5zdHJpbmcgPSBgJHt3aW5kb3cuY29udHJvbGxlck9yaWdpbn1gO1xyXG4gIH1cclxuXHJcbiAgb25FbmFibGUoKSB7XHJcbiAgICByZXR1cm47XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICB0aGlzLnNldFVJKFBlZXJNYW5hZ2VyLkluc3RhbmNlLmNsaWVudENvbm5lY3RlZFtpXSA/IHRydWUgOiBmYWxzZSwgaSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyB1cGRhdGUgKGR0KSB7fVxyXG5cclxuICBuZXh0U3RhZ2UoKSB7XHJcbiAgICBTb3VuZE1nci5wbGF5U2Z4KFNvdW5kTWdyLkluc3RhbmNlLlNGWF9CVVRUT04pO1xyXG4gICAgY2MudHdlZW4odGhpcy5idG5OZXh0Lm5vZGUpXHJcbiAgICAgIC50bygwLjEsIHsgc2NhbGU6IDAuNjUgfSlcclxuICAgICAgLnRvKDAuMSwgeyBzY2FsZTogMC41IH0pXHJcbiAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICBTdGFnZU1nci5zaG93KFN0YWdlcy5TdGFnZUluR2FtZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgc2V0VUkoaXNDb25uZWN0ZWQ6IGJvb2xlYW4sIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMucGxheWVyc1tpbmRleF0uZ2V0Q2hpbGRCeU5hbWUoXCJwbGF5ZXJSZWFkeVwiKS5hY3RpdmUgPSBpc0Nvbm5lY3RlZDtcclxuICAgIHRoaXMucGxheWVyc1tpbmRleF0uZ2V0Q2hpbGRCeU5hbWUoXCJwbGF5ZXJOb3RSZWFkeVwiKS5hY3RpdmUgPSAhaXNDb25uZWN0ZWQ7XHJcbiAgICB0aGlzLnBsYXllcnNbaW5kZXhdXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInBsYXllclNwcml0ZVwiKVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAuc2V0TWF0ZXJpYWwoMCwgaXNDb25uZWN0ZWQgPyB0aGlzLm5vcm1hbFNwaW5lIDogdGhpcy5ncmF5U3BpbmUpO1xyXG4gIH1cclxufVxyXG4iXX0=