"use strict";
cc._RF.push(module, '1bcb2GEmxRB1458fn5Fjmnu', 'cuboid');
// Scripts/cuboid.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Cuboid = /** @class */ (function (_super) {
    __extends(Cuboid, _super);
    function Cuboid() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.player = null;
        _this.diamond = null;
        _this.thresHold = 9999;
        _this.thresHoldActive = 9999;
        return _this;
    }
    Cuboid.prototype.onLoad = function () {
        var _this = this;
        this.schedule(function () {
            var y = _this.player.position.y - _this.node.position.y;
            if (y < 200 && y > -200) {
                if (_this.thresHold === 0)
                    return;
                _this.thresHold = 0;
                _this.node.children.forEach(function (child) {
                    if (child.childrenCount === 1) {
                        child.children[0].getComponent(cc.BoxCollider) && (child.children[0].getComponent(cc.BoxCollider).enabled = true);
                    }
                });
                _this.getComponent(cc.BoxCollider).enabled = true;
            }
            else {
                if (_this.thresHold === 200)
                    return;
                _this.thresHold = 200;
                _this.node.children.forEach(function (child) {
                    if (child.childrenCount === 1) {
                        child.children[0].getComponent(cc.BoxCollider) && (child.children[0].getComponent(cc.BoxCollider).enabled = false);
                    }
                });
            }
            if (y < -500) {
                _this.getComponent(cc.BoxCollider).enabled = false;
            }
        }, 0.1);
        this.schedule(function () {
            if (_this.player.position.y - _this.node.position.y < 720 && _this.player.position.y - _this.node.position.y > -720) {
                if (_this.thresHoldActive === 0)
                    return;
                _this.thresHoldActive = 0;
                _this.node.children.forEach(function (child) {
                    child.getComponent(cc.Sprite) && (child.getComponent(cc.Sprite).enabled = true);
                });
            }
            else {
                if (_this.thresHoldActive === 720)
                    return;
                _this.thresHoldActive = 720;
                _this.node.children.forEach(function (child) {
                    child.getComponent(cc.Sprite) && (child.getComponent(cc.Sprite).enabled = false);
                });
            }
        }, 0.2);
    };
    __decorate([
        property(cc.Node)
    ], Cuboid.prototype, "player", void 0);
    Cuboid = __decorate([
        ccclass
    ], Cuboid);
    return Cuboid;
}(cc.Component));
exports.default = Cuboid;

cc._RF.pop();