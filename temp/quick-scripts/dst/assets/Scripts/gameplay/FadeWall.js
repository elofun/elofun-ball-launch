
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gameplay/FadeWall.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bbc84lQ+TNPhogR2CwFzPYR', 'FadeWall');
// Scripts/gameplay/FadeWall.ts

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
var FadeWall = /** @class */ (function (_super) {
    __extends(FadeWall, _super);
    function FadeWall() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.winWall = null;
        return _this;
    }
    FadeWall.prototype.FadeWall = function () {
        cc.tween(this.node)
            .to(0.3, {
            scale: 0,
        }, { easing: "fade" })
            .start();
        // update (dt) {}
    };
    FadeWall.prototype.Reset = function () {
        console.log("RESET FADE WALL");
        this.node.scale = 1;
    };
    __decorate([
        property(cc.Node)
    ], FadeWall.prototype, "winWall", void 0);
    FadeWall = __decorate([
        ccclass
    ], FadeWall);
    return FadeWall;
}(cc.Component));
exports.default = FadeWall;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZXBsYXlcXEZhZGVXYWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBbUJDO1FBbEJvQixhQUFPLEdBQVksSUFBSSxDQUFDOztJQWtCN0MsQ0FBQztJQWpCQywyQkFBUSxHQUFSO1FBQ0UsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2hCLEVBQUUsQ0FDRCxHQUFHLEVBQ0g7WUFDRSxLQUFLLEVBQUUsQ0FBQztTQUNULEVBQ0QsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQ25CO2FBQ0EsS0FBSyxFQUFFLENBQUM7UUFDWCxpQkFBaUI7SUFDbkIsQ0FBQztJQUNELHdCQUFLLEdBQUw7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFqQmtCO1FBQWxCLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUF5QjtJQUR4QixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBbUI1QjtJQUFELGVBQUM7Q0FuQkQsQUFtQkMsQ0FuQnFDLEVBQUUsQ0FBQyxTQUFTLEdBbUJqRDtrQkFuQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFkZVdhbGwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKSB3aW5XYWxsOiBjYy5Ob2RlID0gbnVsbDtcclxuICBGYWRlV2FsbCgpIHtcclxuICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgLnRvKFxyXG4gICAgICAgIDAuMyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzY2FsZTogMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgZWFzaW5nOiBcImZhZGVcIiB9XHJcbiAgICAgIClcclxuICAgICAgLnN0YXJ0KCk7XHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG4gIH1cclxuICBSZXNldCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiUkVTRVQgRkFERSBXQUxMXCIpO1xyXG5cclxuICAgIHRoaXMubm9kZS5zY2FsZSA9IDE7XHJcbiAgfVxyXG59XHJcbiJdfQ==