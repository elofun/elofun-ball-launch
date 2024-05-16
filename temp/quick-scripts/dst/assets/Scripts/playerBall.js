
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/playerBall.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9a52dKv1yRLFb9DOGF+w6r+', 'playerBall');
// Scripts/playerBall.ts

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
var playGround_1 = require("./playGround");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerBall = /** @class */ (function (_super) {
    __extends(PlayerBall, _super);
    function PlayerBall() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PlayGround = null;
        _this.enterCount = 1;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    PlayerBall.prototype.start = function () {
    };
    // update (dt) {}
    PlayerBall.prototype.onCollisionEnter = function (other, self) {
        if (this.PlayGround.isPlayerDead || other.tag !== 2 || !this.PlayGround.isReady)
            return;
        this.PlayGround.isPlayerDead = true;
    };
    __decorate([
        property(playGround_1.default)
    ], PlayerBall.prototype, "PlayGround", void 0);
    PlayerBall = __decorate([
        ccclass
    ], PlayerBall);
    return PlayerBall;
}(cc.Component));
exports.default = PlayerBall;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xccGxheWVyQmFsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlsRiwyQ0FBc0M7QUFFaEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFvQkM7UUFsQnlCLGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBRTVDLGdCQUFVLEdBQUcsQ0FBQyxDQUFDOztJQWdCM0IsQ0FBQztJQWRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsMEJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxpQkFBaUI7SUFDakIscUNBQWdCLEdBQWhCLFVBQWlCLEtBQWtCLEVBQUUsSUFBaUI7UUFDbEQsSUFBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTztZQUFFLE9BQU87UUFFdkYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQ3hDLENBQUM7SUFqQnFCO1FBQXJCLFFBQVEsQ0FBQyxvQkFBVSxDQUFDO2tEQUErQjtJQUZuQyxVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBb0I5QjtJQUFELGlCQUFDO0NBcEJELEFBb0JDLENBcEJ1QyxFQUFFLENBQUMsU0FBUyxHQW9CbkQ7a0JBcEJvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEN1Ym9pZCBmcm9tIFwiLi9jdWJvaWRcIjtcclxuaW1wb3J0IERpYW1vbmQgZnJvbSBcIi4vZGlhbW9uZFwiO1xyXG5pbXBvcnQgcGxheUdyb3VuZCBmcm9tIFwiLi9wbGF5R3JvdW5kXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckJhbGwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShwbGF5R3JvdW5kKSBQbGF5R3JvdW5kOiBwbGF5R3JvdW5kID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGVudGVyQ291bnQgPSAxO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXI6IGNjLkNvbGxpZGVyLCBzZWxmOiBjYy5Db2xsaWRlcikge1xyXG4gICAgICAgIGlmKHRoaXMuUGxheUdyb3VuZC5pc1BsYXllckRlYWQgfHwgb3RoZXIudGFnICE9PSAyIHx8ICF0aGlzLlBsYXlHcm91bmQuaXNSZWFkeSkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuUGxheUdyb3VuZC5pc1BsYXllckRlYWQgPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==