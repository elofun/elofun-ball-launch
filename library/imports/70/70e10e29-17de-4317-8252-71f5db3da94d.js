"use strict";
cc._RF.push(module, '70e104pF95DF4JScfXbPalN', 'TrajectoryLine');
// Scripts/gameplay/TrajectoryLine/TrajectoryLine.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TrajectoryLine = /** @class */ (function (_super) {
    __extends(TrajectoryLine, _super);
    function TrajectoryLine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.graphics = null;
        return _this;
    }
    TrajectoryLine.prototype.onEnable = function () {
        this.graphics = this.node.getComponent(cc.Graphics);
    };
    TrajectoryLine.prototype.start = function () {
        // this.node.on(cc.Node.EventType.MOUSE_MOVE, this.onMouseDown, this);
        // this.clearLineOverTime();
    };
    TrajectoryLine.prototype.drawLine = function (start, endPoint, mag) {
        this.graphics.clear();
        this.graphics.strokeColor = cc.Color.ORANGE; // Set line color
        this.graphics.lineWidth = 3; // Set line width
        this.graphics.moveTo(start.x, start.y);
        var end = endPoint.mul(mag).add(start);
        this.graphics.lineTo(end.x, end.y);
        this.graphics.stroke();
    };
    TrajectoryLine.prototype.drawCircle = function (start, endPoint, mag) {
        var gap = 14;
        var radius = 4;
        this.graphics.lineWidth = 2; // Set line width
        var pointCount = 0;
        var newCurrentPosMag = 0;
        var newCurrentPos = cc.Vec2.ZERO;
        var end = endPoint.normalize().clone();
        var dir = end.clone().normalizeSelf();
        pointCount = 0;
        var currentPos = start.clone();
        currentPos.x = start.x + end.normalizeSelf().x;
        currentPos.y = start.y + end.normalizeSelf().y;
        // currentPos.x = start.x + this.offSet * end.normalizeSelf().x;
        // currentPos.y = start.y + this.offSet * end.normalizeSelf().y;
        this.graphics.moveTo(start.x, start.y);
        this.graphics.circle(currentPos.x, currentPos.y, radius);
        while (newCurrentPosMag < mag - 50) {
            newCurrentPosMag = dir
                .clone()
                .mul(pointCount * gap)
                .mag();
            newCurrentPos = dir
                .clone()
                .mul(pointCount * gap)
                .add(currentPos);
            this.graphics.circle(newCurrentPos.x, newCurrentPos.y, radius);
            pointCount++;
        }
        this.graphics.fill();
        this.graphics.stroke();
    };
    TrajectoryLine.prototype.update = function (dt) { };
    TrajectoryLine = __decorate([
        ccclass
    ], TrajectoryLine);
    return TrajectoryLine;
}(cc.Component));
exports.default = TrajectoryLine;

cc._RF.pop();