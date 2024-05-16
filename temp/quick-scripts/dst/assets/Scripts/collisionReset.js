
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/collisionReset.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a17f9LZSlxJWIxURW1Pdn8u', 'collisionReset');
// Scripts/collisionReset.ts

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
var cuboid_1 = require("./cuboid");
var playGround_1 = require("./playGround");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CollisionReset = /** @class */ (function (_super) {
    __extends(CollisionReset, _super);
    function CollisionReset() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PlayGround = null;
        return _this;
    }
    CollisionReset.prototype.onCollisionExit = function (other, self) {
        if (this.PlayGround.isPlayerDead || other.tag !== 5 || !this.PlayGround.isReady)
            return;
        if (other.node.name == "ExtraCuboid") {
            this.PlayGround.extraCuboidPool.put(other.node);
        }
        else if (other.node == this.PlayGround.cuboidBase) {
            // other.node.destroy();
        }
        else {
            if (other.node.getComponent(cuboid_1.default).diamond) {
                this.PlayGround.diamondPool.put(other.node.getComponent(cuboid_1.default).diamond);
            }
            this.PlayGround.createCuboid(other.node);
        }
    };
    __decorate([
        property(playGround_1.default)
    ], CollisionReset.prototype, "PlayGround", void 0);
    CollisionReset = __decorate([
        ccclass
    ], CollisionReset);
    return CollisionReset;
}(cc.Component));
exports.default = CollisionReset;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcY29sbGlzaW9uUmVzZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQThCO0FBQzlCLDJDQUFzQztBQUdoQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQWtCQztRQWhCeUIsZ0JBQVUsR0FBZSxJQUFJLENBQUM7O0lBZ0J4RCxDQUFDO0lBZEcsd0NBQWUsR0FBZixVQUFnQixLQUFrQixFQUFFLElBQWlCO1FBQ2pELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBRXhGLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksYUFBYSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkQ7YUFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7WUFDakQsd0JBQXdCO1NBQzNCO2FBQU07WUFDSCxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDNUU7WUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUM7SUFDTCxDQUFDO0lBZnFCO1FBQXJCLFFBQVEsQ0FBQyxvQkFBVSxDQUFDO3NEQUErQjtJQUZuQyxjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBa0JsQztJQUFELHFCQUFDO0NBbEJELEFBa0JDLENBbEIyQyxFQUFFLENBQUMsU0FBUyxHQWtCdkQ7a0JBbEJvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEN1Ym9pZCBmcm9tIFwiLi9jdWJvaWRcIjtcclxuaW1wb3J0IHBsYXlHcm91bmQgZnJvbSBcIi4vcGxheUdyb3VuZFwiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsaXNpb25SZXNldCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHBsYXlHcm91bmQpIFBsYXlHcm91bmQ6IHBsYXlHcm91bmQgPSBudWxsO1xyXG5cclxuICAgIG9uQ29sbGlzaW9uRXhpdChvdGhlcjogY2MuQ29sbGlkZXIsIHNlbGY6IGNjLkNvbGxpZGVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuUGxheUdyb3VuZC5pc1BsYXllckRlYWQgfHwgb3RoZXIudGFnICE9PSA1IHx8ICF0aGlzLlBsYXlHcm91bmQuaXNSZWFkeSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAob3RoZXIubm9kZS5uYW1lID09IFwiRXh0cmFDdWJvaWRcIikge1xyXG4gICAgICAgICAgICB0aGlzLlBsYXlHcm91bmQuZXh0cmFDdWJvaWRQb29sLnB1dChvdGhlci5ub2RlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyLm5vZGUgPT0gdGhpcy5QbGF5R3JvdW5kLmN1Ym9pZEJhc2UpIHtcclxuICAgICAgICAgICAgLy8gb3RoZXIubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KEN1Ym9pZCkuZGlhbW9uZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5R3JvdW5kLmRpYW1vbmRQb29sLnB1dChvdGhlci5ub2RlLmdldENvbXBvbmVudChDdWJvaWQpLmRpYW1vbmQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuUGxheUdyb3VuZC5jcmVhdGVDdWJvaWQob3RoZXIubm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==