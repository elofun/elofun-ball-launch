
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/common/Global.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd20a0HD4J5Lx6vX5OXcGy4+', 'Global');
// Scripts/common/Global.ts

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
var Global = /** @class */ (function (_super) {
    __extends(Global, _super);
    function Global() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.backAppTime = null;
        return _this;
    }
    Global_1 = Global;
    Global.prototype.onLoad = function () {
        Global_1.Instance = this;
    };
    var Global_1;
    Global.Instance = null;
    Global = Global_1 = __decorate([
        ccclass
    ], Global);
    return Global;
}(cc.Component));
exports.default = Global;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcY29tbW9uXFxHbG9iYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUFRQztRQU5VLGlCQUFXLEdBQVcsSUFBSSxDQUFDOztJQU10QyxDQUFDO2VBUm9CLE1BQU07SUFLdkIsdUJBQU0sR0FBTjtRQUNJLFFBQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7O0lBSk0sZUFBUSxHQUFXLElBQUksQ0FBQztJQUhkLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FRMUI7SUFBRCxhQUFDO0NBUkQsQUFRQyxDQVJtQyxFQUFFLENBQUMsU0FBUyxHQVEvQztrQkFSb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgICBpbnRlcmZhY2UgV2luZG93IHtcclxuICAgICAgICBsYW5ndWFnZTogc3RyaW5nO1xyXG4gICAgICAgIGlzUmVsZWFzZTogYm9vbGVhbjtcclxuICAgICAgICBjb250cm9sbGVyUHJlZml4O1xyXG4gICAgICAgIGNvbnRyb2xsZXJVUkw7XHJcbiAgICAgICAgY29udHJvbGxlck9yaWdpbjtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdsb2JhbCBleHRlbmRzIGNjLkNvbXBvbmVudFxyXG57XHJcbiAgICBwdWJsaWMgYmFja0FwcFRpbWU6IG51bWJlciA9IG51bGw7XHJcbiAgICBzdGF0aWMgSW5zdGFuY2U6IEdsb2JhbCA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIEdsb2JhbC5JbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB9XHJcbn0iXX0=