"use strict";
cc._RF.push(module, '085b587D41NjKlGgaQmpnmJ', 'diamond');
// Scripts/diamond.ts

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
var Diamond = /** @class */ (function (_super) {
    __extends(Diamond, _super);
    function Diamond() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.player = null;
        _this.diamondSprite = null;
        _this.diamondParticle = null;
        _this.lblScorePlus = null;
        _this.thresHold = 9999;
        return _this;
    }
    Diamond.prototype.onLoad = function () {
        var _this = this;
        this.schedule(function () {
            var y = _this.player.position.y - _this.node.position.y;
            if (y < 200 && y > -200) {
                if (_this.thresHold === 0)
                    return;
                _this.thresHold = 0;
                _this.getComponent(cc.CircleCollider).enabled = true;
            }
            else {
                if (_this.thresHold === 200)
                    return;
                _this.thresHold = 200;
                _this.getComponent(cc.CircleCollider).enabled = false;
            }
        }, 0.1);
    };
    __decorate([
        property(cc.Node)
    ], Diamond.prototype, "player", void 0);
    __decorate([
        property(cc.Sprite)
    ], Diamond.prototype, "diamondSprite", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], Diamond.prototype, "diamondParticle", void 0);
    __decorate([
        property(cc.Label)
    ], Diamond.prototype, "lblScorePlus", void 0);
    Diamond = __decorate([
        ccclass
    ], Diamond);
    return Diamond;
}(cc.Component));
exports.default = Diamond;

cc._RF.pop();