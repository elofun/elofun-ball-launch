
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/playerBallHitBox.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '055aeKjXC5P5JH+PuFhm8cO', 'playerBallHitBox');
// Scripts/playerBallHitBox.ts

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
var SoundMgr_1 = require("./common/SoundMgr");
var diamond_1 = require("./diamond");
var GameDefine_1 = require("./game/GameDefine");
var playGround_1 = require("./playGround");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var playerBallHitBox = /** @class */ (function (_super) {
    __extends(playerBallHitBox, _super);
    function playerBallHitBox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PlayGround = null;
        return _this;
    }
    playerBallHitBox.prototype.onCollisionEnter = function (other, self) {
        if (other.tag !== 3)
            return;
        var diamond = other.node.getComponent(diamond_1.default);
        if (!diamond.diamondSprite.node.active)
            return;
        SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_CRYSTAL);
        diamond.diamondSprite.node.active = false;
        diamond.diamondParticle.node.active = true;
        diamond.diamondParticle.resetSystem();
        diamond.lblScorePlus.node.active = true;
        cc.tween(diamond.lblScorePlus.node).to(0.5, { y: 175 }).call(function () {
            diamond.lblScorePlus.node.active = false;
            diamond.lblScorePlus.node.y = 75;
        }).start();
        this.PlayGround.scoreUpdate(GameDefine_1.default.DiamondScore);
        diamond.lblScorePlus.string = "+" + GameDefine_1.default.DiamondScore;
    };
    __decorate([
        property(playGround_1.default)
    ], playerBallHitBox.prototype, "PlayGround", void 0);
    playerBallHitBox = __decorate([
        ccclass
    ], playerBallHitBox);
    return playerBallHitBox;
}(cc.Component));
exports.default = playerBallHitBox;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xccGxheWVyQmFsbEhpdEJveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBeUM7QUFDekMscUNBQWdDO0FBQ2hDLGdEQUEyQztBQUMzQywyQ0FBc0M7QUFFaEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUF1QkM7UUFyQnlCLGdCQUFVLEdBQWUsSUFBSSxDQUFDOztJQXFCeEQsQ0FBQztJQW5CRywyQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBa0IsRUFBRSxJQUFpQjtRQUNsRCxJQUFHLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUFFLE9BQU87UUFFM0IsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQU8sQ0FBQyxDQUFDO1FBQy9DLElBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUU5QyxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxrQkFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVoRCxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDM0MsT0FBTyxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN0QyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3hDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3ZELE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDekMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNYLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLG9CQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckQsT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLG9CQUFVLENBQUMsWUFBWSxDQUFDO0lBQ2hFLENBQUM7SUFwQnFCO1FBQXJCLFFBQVEsQ0FBQyxvQkFBVSxDQUFDO3dEQUErQjtJQUZuQyxnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQXVCcEM7SUFBRCx1QkFBQztDQXZCRCxBQXVCQyxDQXZCNkMsRUFBRSxDQUFDLFNBQVMsR0F1QnpEO2tCQXZCb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNvdW5kTWdyIGZyb20gXCIuL2NvbW1vbi9Tb3VuZE1nclwiO1xyXG5pbXBvcnQgRGlhbW9uZCBmcm9tIFwiLi9kaWFtb25kXCI7XHJcbmltcG9ydCBHYW1lRGVmaW5lIGZyb20gXCIuL2dhbWUvR2FtZURlZmluZVwiO1xyXG5pbXBvcnQgcGxheUdyb3VuZCBmcm9tIFwiLi9wbGF5R3JvdW5kXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHBsYXllckJhbGxIaXRCb3ggZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShwbGF5R3JvdW5kKSBQbGF5R3JvdW5kOiBwbGF5R3JvdW5kID0gbnVsbDtcclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyOiBjYy5Db2xsaWRlciwgc2VsZjogY2MuQ29sbGlkZXIpIHtcclxuICAgICAgICBpZihvdGhlci50YWcgIT09IDMpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGRpYW1vbmQgPSBvdGhlci5ub2RlLmdldENvbXBvbmVudChEaWFtb25kKTtcclxuICAgICAgICBpZighZGlhbW9uZC5kaWFtb25kU3ByaXRlLm5vZGUuYWN0aXZlKSByZXR1cm47XHJcblxyXG4gICAgICAgIFNvdW5kTWdyLnBsYXlTZngoU291bmRNZ3IuSW5zdGFuY2UuU0ZYX0NSWVNUQUwpO1xyXG5cclxuICAgICAgICBkaWFtb25kLmRpYW1vbmRTcHJpdGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBkaWFtb25kLmRpYW1vbmRQYXJ0aWNsZS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgZGlhbW9uZC5kaWFtb25kUGFydGljbGUucmVzZXRTeXN0ZW0oKTtcclxuICAgICAgICBkaWFtb25kLmxibFNjb3JlUGx1cy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgY2MudHdlZW4oZGlhbW9uZC5sYmxTY29yZVBsdXMubm9kZSkudG8oMC41LCB7eTogMTc1fSkuY2FsbCgoKT0+e1xyXG4gICAgICAgICAgICBkaWFtb25kLmxibFNjb3JlUGx1cy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkaWFtb25kLmxibFNjb3JlUGx1cy5ub2RlLnkgPSA3NTtcclxuICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMuUGxheUdyb3VuZC5zY29yZVVwZGF0ZShHYW1lRGVmaW5lLkRpYW1vbmRTY29yZSk7XHJcbiAgICAgICAgZGlhbW9uZC5sYmxTY29yZVBsdXMuc3RyaW5nID0gXCIrXCIgKyBHYW1lRGVmaW5lLkRpYW1vbmRTY29yZTtcclxuICAgIH1cclxufVxyXG4iXX0=