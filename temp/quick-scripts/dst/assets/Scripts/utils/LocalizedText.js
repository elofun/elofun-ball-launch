
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/utils/LocalizedText.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd9adbSs7VdIeaPiYGmWgXvR', 'LocalizedText');
// Scripts/utils/LocalizedText.ts

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
var LocalizedText = /** @class */ (function (_super) {
    __extends(LocalizedText, _super);
    function LocalizedText() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.EN = "";
        _this.VI = "";
        return _this;
    }
    LocalizedText.prototype.start = function () {
        var text = this.node.getComponent(cc.Label);
        var defaultText = text.string;
        text.string = this[window.language.toUpperCase()] || defaultText;
    };
    __decorate([
        property({ type: String, multiline: true, })
    ], LocalizedText.prototype, "EN", void 0);
    __decorate([
        property({ type: String, multiline: true, })
    ], LocalizedText.prototype, "VI", void 0);
    LocalizedText = __decorate([
        ccclass
    ], LocalizedText);
    return LocalizedText;
}(cc.Component));
exports.default = LocalizedText;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcdXRpbHNcXExvY2FsaXplZFRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUFTQztRQVJpRCxRQUFFLEdBQVcsRUFBRSxDQUFDO1FBQ2hCLFFBQUUsR0FBVyxFQUFFLENBQUM7O0lBT2xFLENBQUM7SUFMRyw2QkFBSyxHQUFMO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQztJQUNyRSxDQUFDO0lBUDZDO1FBQTdDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksR0FBRyxDQUFDOzZDQUFpQjtJQUNoQjtRQUE3QyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLEdBQUcsQ0FBQzs2Q0FBaUI7SUFGN0MsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQVNqQztJQUFELG9CQUFDO0NBVEQsQUFTQyxDQVQwQyxFQUFFLENBQUMsU0FBUyxHQVN0RDtrQkFUb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhbGl6ZWRUZXh0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZywgbXVsdGlsaW5lOiB0cnVlLCB9KSBFTjogc3RyaW5nID0gXCJcIjtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZywgbXVsdGlsaW5lOiB0cnVlLCB9KSBWSTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBsZXQgdGV4dCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIGxldCBkZWZhdWx0VGV4dCA9IHRleHQuc3RyaW5nO1xyXG4gICAgICAgIHRleHQuc3RyaW5nID0gdGhpc1t3aW5kb3cubGFuZ3VhZ2UudG9VcHBlckNhc2UoKV0gfHwgZGVmYXVsdFRleHQ7XHJcbiAgICB9XHJcbn0iXX0=