
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gameplay/Ball.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ad4efPsBOtAZqP0kazbwXDn', 'Ball');
// Scripts/gameplay/Ball.ts

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
var TrajectoryLine_1 = require("./TrajectoryLine/TrajectoryLine");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Ball = /** @class */ (function (_super) {
    __extends(Ball, _super);
    function Ball() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rigidBody = null;
        _this.trajectoryLineDir = new cc.Vec2(0, 1);
        _this.SFX = null;
        _this.ball = null;
        _this.trajectoryLine = null;
        _this.moveSpeed = 0;
        _this.isBallMoving = false;
        _this.mouseHold = false;
        return _this;
    }
    Ball_1 = Ball;
    Ball.prototype.onEnable = function () {
        Ball_1.Instance = this;
        this.rigidBody = this.ball.getComponent(cc.RigidBody);
        this.rigidBody.gravityScale = 0;
        // this.node.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyPress, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyPress, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyPressEnter, this);
    };
    Ball.prototype.start = function () {
        this.trajectoryLine.drawCircle(this.ball.getPosition(), this.trajectoryLineDir, 100);
    };
    Ball.prototype.SetDirOfBall = function (trajectoryLineDir) {
        var dir = trajectoryLineDir
            .sub(this.ball.getPosition())
            .normalize()
            .mul(this.moveSpeed);
        this.rigidBody.linearVelocity = dir;
    };
    Ball.prototype.onKeyPress = function (event) {
        if (this.node.active == false)
            return;
        switch (event.keyCode) {
            case cc.macro.KEY.d: //keycode right arrow
                if (this.isBallMoving == true)
                    return;
                this.RotateTrajectoryLine(1);
                break;
            case 39: //keycode left arrow
                if (this.isBallMoving == true)
                    return;
                this.RotateTrajectoryLine(-1);
                break;
        }
    };
    Ball.prototype.onKeyPressEnter = function (event) {
        if (this.node.active == false)
            return;
        switch (event.keyCode) {
            case 13: //enter keyCode
                if (this.isBallMoving == true)
                    return;
                this.SetDirOfBall(this.trajectoryLineDir);
                this.trajectoryLine.graphics.clear();
                this.isBallMoving = true;
                break;
        }
    };
    Ball.prototype.RotateTrajectoryLine = function (dir) {
        this.trajectoryLineDir = this.trajectoryLineDir.rotate(0.017453 * 2 * dir);
        this.trajectoryLine.graphics.clear();
        this.trajectoryLine.drawCircle(this.ball.getPosition(), this.trajectoryLineDir, 100);
    };
    Ball.prototype.Reset = function () {
        this.rigidBody.linearVelocity = cc.Vec2.ZERO;
        this.isBallMoving = false;
        this.trajectoryLineDir = new cc.Vec2(0, 1);
        this.ball.setPosition(0, 0);
    };
    Ball.prototype.update = function (dt) { };
    var Ball_1;
    Ball.Instance = null;
    __decorate([
        property(cc.Node)
    ], Ball.prototype, "SFX", void 0);
    __decorate([
        property(cc.Node)
    ], Ball.prototype, "ball", void 0);
    __decorate([
        property(TrajectoryLine_1.default)
    ], Ball.prototype, "trajectoryLine", void 0);
    __decorate([
        property(Number)
    ], Ball.prototype, "moveSpeed", void 0);
    Ball = Ball_1 = __decorate([
        ccclass
    ], Ball);
    return Ball;
}(cc.Component));
exports.default = Ball;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZXBsYXlcXEJhbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbEYsa0VBQTZEO0FBRXZELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBc0ZDO1FBcEZRLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBQy9CLHVCQUFpQixHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUIsU0FBRyxHQUFZLElBQUksQ0FBQztRQUVwQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBQ2Qsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBRTlDLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDeEMsa0JBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsZUFBUyxHQUFZLEtBQUssQ0FBQzs7SUEyRXBDLENBQUM7YUF0Rm9CLElBQUk7SUFhYix1QkFBUSxHQUFsQjtRQUNFLE1BQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUVoQywwRUFBMEU7UUFDMUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFD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QUFDLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ1MscUJBQU0sR0FBaEIsVUFBaUIsRUFBVSxJQUFTLENBQUM7O0lBcEZ2QixhQUFRLEdBQVMsSUFBSSxDQUFDO0lBR2pCO1FBQWxCLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FDQUE0QjtJQUUzQjtRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzQ0FBNkI7SUFDckI7UUFBekIsUUFBUSxDQUFDLHdCQUFjLENBQUM7Z0RBQThDO0lBRXJEO1FBQWpCLFFBQVEsQ0FBQyxNQUFNLENBQUM7MkNBQThCO0lBVDVCLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FzRnhCO0lBQUQsV0FBQztDQXRGRCxBQXNGQyxDQXRGaUMsRUFBRSxDQUFDLFNBQVMsR0FzRjdDO2tCQXRGb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tIFwiLi9HYW1lTWFuYWdlclwiO1xyXG5pbXBvcnQgUGFydGljbGVNYW5hZ2VyIGZyb20gXCIuL1BhcnRpY2xlL1BhcnRpY2xlTWFuYWdlclwiO1xyXG5pbXBvcnQgVHJhamVjdG9yeUxpbmUgZnJvbSBcIi4vVHJhamVjdG9yeUxpbmUvVHJhamVjdG9yeUxpbmVcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWxsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBwdWJsaWMgc3RhdGljIEluc3RhbmNlOiBCYWxsID0gbnVsbDtcclxuICBwdWJsaWMgcmlnaWRCb2R5OiBjYy5SaWdpZEJvZHkgPSBudWxsO1xyXG4gIHB1YmxpYyB0cmFqZWN0b3J5TGluZURpcjogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKDAsIDEpO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKSBwdWJsaWMgU0ZYOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpIHB1YmxpYyBiYWxsOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoVHJhamVjdG9yeUxpbmUpIHB1YmxpYyB0cmFqZWN0b3J5TGluZTogVHJhamVjdG9yeUxpbmUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoTnVtYmVyKSBwdWJsaWMgbW92ZVNwZWVkOiBudW1iZXIgPSAwO1xyXG4gIHB1YmxpYyBpc0JhbGxNb3Zpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgbW91c2VIb2xkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgIEJhbGwuSW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgdGhpcy5yaWdpZEJvZHkgPSB0aGlzLmJhbGwuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICB0aGlzLnJpZ2lkQm9keS5ncmF2aXR5U2NhbGUgPSAwO1xyXG5cclxuICAgIC8vIHRoaXMubm9kZS5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlQcmVzcywgdGhpcyk7XHJcbiAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlQcmVzcywgdGhpcyk7XHJcbiAgICBjYy5zeXN0ZW1FdmVudC5vbihcclxuICAgICAgY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLFxyXG4gICAgICB0aGlzLm9uS2V5UHJlc3NFbnRlcixcclxuICAgICAgdGhpc1xyXG4gICAgKTtcclxuICB9XHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy50cmFqZWN0b3J5TGluZS5kcmF3Q2lyY2xlKFxyXG4gICAgICB0aGlzLmJhbGwuZ2V0UG9zaXRpb24oKSxcclxuICAgICAgdGhpcy50cmFqZWN0b3J5TGluZURpcixcclxuICAgICAgMTAwXHJcbiAgICApO1xyXG4gIH1cclxuICBTZXREaXJPZkJhbGwodHJhamVjdG9yeUxpbmVEaXI6IGNjLlZlYzIpIHtcclxuICAgIGxldCBkaXI6IGNjLlZlYzIgPSB0cmFqZWN0b3J5TGluZURpclxyXG4gICAgICAuc3ViKHRoaXMuYmFsbC5nZXRQb3NpdGlvbigpKVxyXG4gICAgICAubm9ybWFsaXplKClcclxuICAgICAgLm11bCh0aGlzLm1vdmVTcGVlZCk7XHJcblxyXG4gICAgdGhpcy5yaWdpZEJvZHkubGluZWFyVmVsb2NpdHkgPSBkaXI7XHJcbiAgfVxyXG4gIG9uS2V5UHJlc3MoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50S2V5Ym9hcmQpIHtcclxuICAgIGlmICh0aGlzLm5vZGUuYWN0aXZlID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6IC8va2V5Y29kZSByaWdodCBhcnJvd1xyXG4gICAgICAgIGlmICh0aGlzLmlzQmFsbE1vdmluZyA9PSB0cnVlKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuUm90YXRlVHJhamVjdG9yeUxpbmUoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMzk6IC8va2V5Y29kZSBsZWZ0IGFycm93XHJcbiAgICAgICAgaWYgKHRoaXMuaXNCYWxsTW92aW5nID09IHRydWUpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5Sb3RhdGVUcmFqZWN0b3J5TGluZSgtMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG9uS2V5UHJlc3NFbnRlcihldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xyXG4gICAgaWYgKHRoaXMubm9kZS5hY3RpdmUgPT0gZmFsc2UpIHJldHVybjtcclxuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICBjYXNlIDEzOiAvL2VudGVyIGtleUNvZGVcclxuICAgICAgICBpZiAodGhpcy5pc0JhbGxNb3ZpbmcgPT0gdHJ1ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLlNldERpck9mQmFsbCh0aGlzLnRyYWplY3RvcnlMaW5lRGlyKTtcclxuICAgICAgICB0aGlzLnRyYWplY3RvcnlMaW5lLmdyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5pc0JhbGxNb3ZpbmcgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuICBSb3RhdGVUcmFqZWN0b3J5TGluZShkaXI6IG51bWJlcikge1xyXG4gICAgdGhpcy50cmFqZWN0b3J5TGluZURpciA9IHRoaXMudHJhamVjdG9yeUxpbmVEaXIucm90YXRlKDAuMDE3NDUzICogMiAqIGRpcik7XHJcbiAgICB0aGlzLnRyYWplY3RvcnlMaW5lLmdyYXBoaWNzLmNsZWFyKCk7XHJcblxyXG4gICAgdGhpcy50cmFqZWN0b3J5TGluZS5kcmF3Q2lyY2xlKFxyXG4gICAgICB0aGlzLmJhbGwuZ2V0UG9zaXRpb24oKSxcclxuICAgICAgdGhpcy50cmFqZWN0b3J5TGluZURpcixcclxuICAgICAgMTAwXHJcbiAgICApO1xyXG4gIH1cclxuICBSZXNldCgpIHtcclxuICAgIHRoaXMucmlnaWRCb2R5LmxpbmVhclZlbG9jaXR5ID0gY2MuVmVjMi5aRVJPO1xyXG4gICAgdGhpcy5pc0JhbGxNb3ZpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMudHJhamVjdG9yeUxpbmVEaXIgPSBuZXcgY2MuVmVjMigwLCAxKTtcclxuICAgIHRoaXMuYmFsbC5zZXRQb3NpdGlvbigwLCAwKTtcclxuICB9XHJcbiAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7fVxyXG59XHJcbiJdfQ==