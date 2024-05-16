"use strict";
cc._RF.push(module, 'bdaffaF72hHi4PuAcpqk95k', 'Trail');
// Scripts/gameplay/Ball/Trail.ts

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
var Trail = /** @class */ (function (_super) {
    __extends(Trail, _super);
    function Trail() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.color = cc.Color.WHITE;
        _this.target = null;
        _this.width = 10;
        _this.trailLength = 40;
        _this.trailPoints = [];
        _this.graphics = null;
        return _this;
        // update (dt) {}
    }
    Trail.prototype.start = function () {
        // Create a graphics node
        this.graphics = this.node.getComponent(cc.Graphics);
        console.log(this.graphics);
        // this.scheduleUpdate();
    };
    Trail.prototype.update = function (dt) {
        // Add current position to the trail points
        this.trailPoints.push(this.target.getPosition());
        // Remove old points if trail length is exceeded
        while (this.trailPoints.length > this.trailLength) {
            this.trailPoints.shift();
            //   console.log("this.trailPoints.shift();", this.trailPoints.shift());
        }
        // Clear graphics
        this.graphics.clear();
        // Draw the trail
        this.graphics.lineWidth = this.width;
        this.graphics.strokeColor = this.color;
        for (var i = this.trailPoints.length - 2; i >= 0; --i) {
            this.graphics.moveTo(this.trailPoints[i].x, this.trailPoints[i].y);
            this.graphics.lineTo(this.trailPoints[i + 1].x, this.trailPoints[i + 1].y);
            this.graphics.stroke();
            this.graphics.lineWidth = this.graphics.lineWidth - 1;
        }
    };
    __decorate([
        property(cc.Color)
    ], Trail.prototype, "color", void 0);
    __decorate([
        property(cc.Node)
    ], Trail.prototype, "target", void 0);
    __decorate([
        property(cc.Float)
    ], Trail.prototype, "width", void 0);
    __decorate([
        property(cc.Float)
    ], Trail.prototype, "trailLength", void 0);
    Trail = __decorate([
        ccclass
    ], Trail);
    return Trail;
}(cc.Component));
exports.default = Trail;

cc._RF.pop();