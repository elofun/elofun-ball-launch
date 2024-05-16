
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/stage/StageStartGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0e252LdYfhIyIZLhk6PCy9f', 'StageStartGame');
// Scripts/stage/StageStartGame.ts

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
var SoundMgr_1 = require("../common/SoundMgr");
var Stage_1 = require("./Stage");
var StageMgr_1 = require("./StageMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StageStartGame = /** @class */ (function (_super) {
    __extends(StageStartGame, _super);
    function StageStartGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startButton = null;
        return _this;
    }
    StageStartGame_1 = StageStartGame;
    // LIFE-CYCLE CALLBACKS:
    StageStartGame.prototype.onLoad = function () {
        StageStartGame_1.Instance = this;
    };
    StageStartGame.prototype.nextStage = function (isRemote) {
        if (isRemote === void 0) { isRemote = false; }
        if (isRemote) {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            cc.tween(this.startButton)
                .to(0.1, { scale: 0.65 })
                .to(0.1, { scale: 0.5 })
                .call(function () {
                StageMgr_1.default.show(StageMgr_1.Stages.StageTestGame);
            })
                .start();
        }
        else {
            StageMgr_1.default.show(StageMgr_1.Stages.StageTestGame);
        }
    };
    var StageStartGame_1;
    StageStartGame.Instance = null;
    __decorate([
        property(cc.Node)
    ], StageStartGame.prototype, "startButton", void 0);
    StageStartGame = StageStartGame_1 = __decorate([
        ccclass
    ], StageStartGame);
    return StageStartGame;
}(Stage_1.default));
exports.default = StageStartGame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3RhZ2VcXFN0YWdlU3RhcnRHYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLCtDQUEwQztBQUMxQyxpQ0FBNEI7QUFDNUIsdUNBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTRDLGtDQUFLO0lBQWpEO1FBQUEscUVBeUJDO1FBeEJvQixpQkFBVyxHQUFZLElBQUksQ0FBQzs7SUF3QmpELENBQUM7dUJBekJvQixjQUFjO0lBS2pDLHdCQUF3QjtJQUV4QiwrQkFBTSxHQUFOO1FBQ0UsZ0JBQWMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxrQ0FBUyxHQUFULFVBQVUsUUFBeUI7UUFBekIseUJBQUEsRUFBQSxnQkFBeUI7UUFDakMsSUFBSSxRQUFRLEVBQUU7WUFDWixrQkFBUSxDQUFDLE9BQU8sQ0FBQyxrQkFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMvQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7aUJBQ3ZCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7aUJBQ3hCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUM7aUJBQ3ZCLElBQUksQ0FBQztnQkFDSixrQkFBUSxDQUFDLElBQUksQ0FBQyxpQkFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQztpQkFDRCxLQUFLLEVBQUUsQ0FBQztTQUNaO2FBQU07WUFDTCxrQkFBUSxDQUFDLElBQUksQ0FBQyxpQkFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7SUFyQk0sdUJBQVEsR0FBbUIsSUFBSSxDQUFDO0lBRnBCO1FBQWxCLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUE2QjtJQUQ1QixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBeUJsQztJQUFELHFCQUFDO0NBekJELEFBeUJDLENBekIyQyxlQUFLLEdBeUJoRDtrQkF6Qm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgU291bmRNZ3IgZnJvbSBcIi4uL2NvbW1vbi9Tb3VuZE1nclwiO1xyXG5pbXBvcnQgU3RhZ2UgZnJvbSBcIi4vU3RhZ2VcIjtcclxuaW1wb3J0IFN0YWdlTWdyLCB7IFN0YWdlcyB9IGZyb20gXCIuL1N0YWdlTWdyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhZ2VTdGFydEdhbWUgZXh0ZW5kcyBTdGFnZSB7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpIHN0YXJ0QnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIEluc3RhbmNlOiBTdGFnZVN0YXJ0R2FtZSA9IG51bGw7XHJcblxyXG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICBTdGFnZVN0YXJ0R2FtZS5JbnN0YW5jZSA9IHRoaXM7XHJcbiAgfVxyXG5cclxuICBuZXh0U3RhZ2UoaXNSZW1vdGU6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgaWYgKGlzUmVtb3RlKSB7XHJcbiAgICAgIFNvdW5kTWdyLnBsYXlTZngoU291bmRNZ3IuSW5zdGFuY2UuU0ZYX0JVVFRPTik7XHJcbiAgICAgIGNjLnR3ZWVuKHRoaXMuc3RhcnRCdXR0b24pXHJcbiAgICAgICAgLnRvKDAuMSwgeyBzY2FsZTogMC42NSB9KVxyXG4gICAgICAgIC50bygwLjEsIHsgc2NhbGU6IDAuNSB9KVxyXG4gICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgIFN0YWdlTWdyLnNob3coU3RhZ2VzLlN0YWdlVGVzdEdhbWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBTdGFnZU1nci5zaG93KFN0YWdlcy5TdGFnZVRlc3RHYW1lKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19