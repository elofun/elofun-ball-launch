"use strict";
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