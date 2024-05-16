
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/utils/LocalizedFrame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8ba3d+Bn6NI76jJhS1uJSSp', 'LocalizedFrame');
// Scripts/utils/LocalizedFrame.ts

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
var LocalizedFrame = /** @class */ (function (_super) {
    __extends(LocalizedFrame, _super);
    function LocalizedFrame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.EN = null;
        _this.VI = null;
        return _this;
    }
    LocalizedFrame.prototype.start = function () {
        var sprite = this.node.getComponent(cc.Sprite);
        var defaultSpriteFrame = sprite.spriteFrame;
        sprite.spriteFrame = this[window.language.toUpperCase()] || defaultSpriteFrame;
    };
    __decorate([
        property(cc.SpriteFrame)
    ], LocalizedFrame.prototype, "EN", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], LocalizedFrame.prototype, "VI", void 0);
    LocalizedFrame = __decorate([
        ccclass
    ], LocalizedFrame);
    return LocalizedFrame;
}(cc.Component));
exports.default = LocalizedFrame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcdXRpbHNcXExvY2FsaXplZEZyYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBVUM7UUFSNkIsUUFBRSxHQUFtQixJQUFJLENBQUM7UUFDMUIsUUFBRSxHQUFtQixJQUFJLENBQUM7O0lBT3hELENBQUM7SUFMRyw4QkFBSyxHQUFMO1FBQ0ksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLElBQUksa0JBQWtCLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUM1QyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksa0JBQWtCLENBQUM7SUFDbkYsQ0FBQztJQVB5QjtRQUF6QixRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs4Q0FBMkI7SUFDMUI7UUFBekIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7OENBQTJCO0lBSG5DLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FVbEM7SUFBRCxxQkFBQztDQVZELEFBVUMsQ0FWMkMsRUFBRSxDQUFDLFNBQVMsR0FVdkQ7a0JBVm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYWxpemVkRnJhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQgXHJcbntcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSkgRU46IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSkgVkk6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBsZXQgc3ByaXRlID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIGxldCBkZWZhdWx0U3ByaXRlRnJhbWUgPSBzcHJpdGUuc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpc1t3aW5kb3cubGFuZ3VhZ2UudG9VcHBlckNhc2UoKV0gfHwgZGVmYXVsdFNwcml0ZUZyYW1lO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==