
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gameplay/GamePlayManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1589dfnk4VMIp1dekOxl3G2', 'GamePlayManager');
// Scripts/gameplay/GamePlayManager.ts

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
// import Singleton from "../utils/Singleton";
var SingletonNode_1 = require("../utils/SingletonNode");
var FadeWall_1 = require("./FadeWall");
var LevelManager_js_1 = require("./LevelManager.js");
var TimeNeedTouch_1 = require("./TimeNeedTouch");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlayManager = /** @class */ (function (_super) {
    __extends(GamePlayManager, _super);
    function GamePlayManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timeNeedToTouch = null;
        _this.fadeWall = null;
        // public static Instance: GamePlayManager = null;
        _this.currentLevel = null;
        _this.isLost = false;
        return _this;
    }
    GamePlayManager.prototype.onEnable = function () {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true;
        // cc.director.getPhysicsManager().debugDrawFlags =
        //   cc.PhysicsManager.DrawBits.e_aabbBit |
        //   cc.PhysicsManager.DrawBits.e_pairBit |
        //   cc.PhysicsManager.DrawBits.e_centerOfMassBit |
        //   cc.PhysicsManager.DrawBits.e_jointBit |
        //   cc.PhysicsManager.DrawBits.e_shapeBit;
    };
    GamePlayManager.prototype.start = function () {
        if (this.currentLevel == null) {
            this.currentLevel = 0;
            LevelManager_js_1.default.Instance.SetUpLevel(this.currentLevel); // set level to 0
            // this.ballHolder.active = true;
        }
    };
    GamePlayManager.prototype.Win = function () {
        // console.log("win");
        if (this.isLost == true)
            return;
        LevelManager_js_1.default.Instance.DisableHolder();
        LevelManager_js_1.default.Instance.NextLevel();
    };
    GamePlayManager.prototype.Lose = function () {
        // console.log("lose");
        LevelManager_js_1.default.Instance.DisableHolder();
        LevelManager_js_1.default.Instance.SetUpLevel(this.currentLevel);
        this.isLost = false;
    };
    __decorate([
        property(TimeNeedTouch_1.default)
    ], GamePlayManager.prototype, "timeNeedToTouch", void 0);
    __decorate([
        property(FadeWall_1.default)
    ], GamePlayManager.prototype, "fadeWall", void 0);
    GamePlayManager = __decorate([
        ccclass
    ], GamePlayManager);
    return GamePlayManager;
}(SingletonNode_1.default()));
exports.default = GamePlayManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZXBsYXlcXEdhbWVQbGF5TWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiw4Q0FBOEM7QUFFOUMsd0RBQW1EO0FBQ25ELHVDQUFrQztBQUNsQyxxREFBNkM7QUFDN0MsaURBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFnQztJQUE3RTtRQUFBLHFFQXlDQztRQXhDbUMscUJBQWUsR0FBb0IsSUFBSSxDQUFDO1FBQy9DLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFFckQsa0RBQWtEO1FBRTNDLGtCQUFZLEdBQVcsSUFBSSxDQUFDO1FBQzVCLFlBQU0sR0FBWSxLQUFLLENBQUM7O0lBa0NqQyxDQUFDO0lBaENXLGtDQUFRLEdBQWxCO1FBQ0UsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDL0MsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDakQsbURBQW1EO1FBQ25ELDJDQUEyQztRQUMzQywyQ0FBMkM7UUFDM0MsbURBQW1EO1FBQ25ELDRDQUE0QztRQUM1QywyQ0FBMkM7SUFDN0MsQ0FBQztJQUNTLCtCQUFLLEdBQWY7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxFQUFFO1lBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1lBQ3RCLHlCQUFZLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxpQkFBaUI7WUFDdEUsaUNBQWlDO1NBQ2xDO0lBQ0gsQ0FBQztJQUVELDZCQUFHLEdBQUg7UUFDRSxzQkFBc0I7UUFFdEIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUk7WUFBRSxPQUFPO1FBQ2hDLHlCQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3RDLHlCQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFDRCw4QkFBSSxHQUFKO1FBQ0UsdUJBQXVCO1FBRXZCLHlCQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3RDLHlCQUFZLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQXZDMEI7UUFBMUIsUUFBUSxDQUFDLHVCQUFlLENBQUM7NERBQWdEO0lBQ3REO1FBQW5CLFFBQVEsQ0FBQyxrQkFBUSxDQUFDO3FEQUFrQztJQUZsQyxlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBeUNuQztJQUFELHNCQUFDO0NBekNELEFBeUNDLENBekM0Qyx1QkFBYSxFQUFtQixHQXlDNUU7a0JBekNvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuLy8gaW1wb3J0IFNpbmdsZXRvbiBmcm9tIFwiLi4vdXRpbHMvU2luZ2xldG9uXCI7XHJcblxyXG5pbXBvcnQgU2luZ2xldG9uTm9kZSBmcm9tIFwiLi4vdXRpbHMvU2luZ2xldG9uTm9kZVwiO1xyXG5pbXBvcnQgRmFkZVdhbGwgZnJvbSBcIi4vRmFkZVdhbGxcIjtcclxuaW1wb3J0IExldmVsTWFuYWdlciBmcm9tIFwiLi9MZXZlbE1hbmFnZXIuanNcIjtcclxuaW1wb3J0IFRpbWVOZWVkVG9Ub3VjaCBmcm9tIFwiLi9UaW1lTmVlZFRvdWNoXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVBsYXlNYW5hZ2VyIGV4dGVuZHMgU2luZ2xldG9uTm9kZTxHYW1lUGxheU1hbmFnZXI+KCkge1xyXG4gIEBwcm9wZXJ0eShUaW1lTmVlZFRvVG91Y2gpIHB1YmxpYyB0aW1lTmVlZFRvVG91Y2g6IFRpbWVOZWVkVG9Ub3VjaCA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEZhZGVXYWxsKSBwdWJsaWMgZmFkZVdhbGw6IEZhZGVXYWxsID0gbnVsbDtcclxuXHJcbiAgLy8gcHVibGljIHN0YXRpYyBJbnN0YW5jZTogR2FtZVBsYXlNYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgcHVibGljIGN1cnJlbnRMZXZlbDogbnVtYmVyID0gbnVsbDtcclxuICBwdWJsaWMgaXNMb3N0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAvLyBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmRlYnVnRHJhd0ZsYWdzID1cclxuICAgIC8vICAgY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9hYWJiQml0IHxcclxuICAgIC8vICAgY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9wYWlyQml0IHxcclxuICAgIC8vICAgY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9jZW50ZXJPZk1hc3NCaXQgfFxyXG4gICAgLy8gICBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX2pvaW50Qml0IHxcclxuICAgIC8vICAgY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9zaGFwZUJpdDtcclxuICB9XHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudExldmVsID09IG51bGwpIHtcclxuICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgPSAwO1xyXG4gICAgICBMZXZlbE1hbmFnZXIuSW5zdGFuY2UuU2V0VXBMZXZlbCh0aGlzLmN1cnJlbnRMZXZlbCk7IC8vIHNldCBsZXZlbCB0byAwXHJcbiAgICAgIC8vIHRoaXMuYmFsbEhvbGRlci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgV2luKCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJ3aW5cIik7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNMb3N0ID09IHRydWUpIHJldHVybjtcclxuICAgIExldmVsTWFuYWdlci5JbnN0YW5jZS5EaXNhYmxlSG9sZGVyKCk7XHJcbiAgICBMZXZlbE1hbmFnZXIuSW5zdGFuY2UuTmV4dExldmVsKCk7XHJcbiAgfVxyXG4gIExvc2UoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImxvc2VcIik7XHJcblxyXG4gICAgTGV2ZWxNYW5hZ2VyLkluc3RhbmNlLkRpc2FibGVIb2xkZXIoKTtcclxuICAgIExldmVsTWFuYWdlci5JbnN0YW5jZS5TZXRVcExldmVsKHRoaXMuY3VycmVudExldmVsKTtcclxuICAgIHRoaXMuaXNMb3N0ID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdfQ==