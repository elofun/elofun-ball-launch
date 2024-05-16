
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gameplay/LevelManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '250d1eyNKNE8YBb3TY+ZhBo', 'LevelManager');
// Scripts/gameplay/LevelManager.ts

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
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var SingletonNode_1 = require("../utils/SingletonNode");
var levelDesign = require("../gameplay/Level/GameplayLevelDesgin.js");
var ObstaclesWallSpawner_1 = require("./Wall/ObstaclesWallSpawner");
var TimeNeedTouch_1 = require("./TimeNeedTouch");
var GamePlayManager_1 = require("./GamePlayManager");
var Ball_1 = require("./Ball");
var FadeWall_1 = require("./FadeWall");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LevelManager = /** @class */ (function (_super) {
    __extends(LevelManager, _super);
    function LevelManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wall = null;
        _this.fadeWallHolder = null;
        _this.timeToBounceHolder = null;
        _this.ballHolder = null;
        _this._levelDesignKey = {
            wall: "wall",
            ballStartPos: "ballStartPos",
            fadeWallHolder: "fadeWall",
            obstaclesWall: "obstaclesWall",
            timeToBounce: "timeToBounce",
        };
        return _this;
    }
    LevelManager.prototype.SetUpLevel = function (levelIndex) {
        var _this = this;
        var currentLevel = levelDesign[levelIndex];
        console.log("levelIndex", levelIndex);
        console.log("currentLevel.level", currentLevel.level);
        this.wall.children.forEach(function (eachWall) {
            var tempWall = _this.GetValueByKey(currentLevel["wall"], eachWall.name);
            eachWall.setPosition(tempWall.pos.x, tempWall.pos.y);
            eachWall.width = tempWall.size.w;
            eachWall.height = tempWall.size.h;
            eachWall.getComponent(cc.PhysicsBoxCollider).size.height =
                tempWall.size.h;
            eachWall.getComponent(cc.PhysicsBoxCollider).size.width = tempWall.size.w;
        });
        this.ballHolder.setPosition(currentLevel[this._levelDesignKey.ballStartPos].x, currentLevel[this._levelDesignKey.ballStartPos].y);
        this.fadeWallHolder.setPosition(currentLevel[this._levelDesignKey.fadeWallHolder].pos.x, currentLevel[this._levelDesignKey.fadeWallHolder].pos.y);
        if (currentLevel[this._levelDesignKey.obstaclesWall].length > 0) {
            for (var index = 0; index < currentLevel[this._levelDesignKey.obstaclesWall].length; index++) {
                var obstaclesWallPos = new cc.Vec2(currentLevel[this._levelDesignKey.obstaclesWall][index].pos.x, currentLevel[this._levelDesignKey.obstaclesWall][index].pos.y);
                var obsWall = ObstaclesWallSpawner_1.default.Instance.SpawnThing(obstaclesWallPos, ObstaclesWallSpawner_1.default.Instance._wallPrefabName);
                obsWall.active = false;
                obsWall.rotation =
                    currentLevel[this._levelDesignKey.obstaclesWall][index].rotation;
                obsWall.width =
                    currentLevel[this._levelDesignKey.obstaclesWall][index].size.w;
                obsWall.height =
                    currentLevel[this._levelDesignKey.obstaclesWall][index].size.h;
                obsWall.getComponent(cc.PhysicsBoxCollider).size.width =
                    currentLevel[this._levelDesignKey.obstaclesWall][index].size.w;
                obsWall.getComponent(cc.PhysicsBoxCollider).size.height =
                    currentLevel[this._levelDesignKey.obstaclesWall][index].size.h;
                obsWall.active = true;
            }
        }
        this.timeToBounceHolder
            .getComponent(TimeNeedTouch_1.default)
            .setBounce(currentLevel[this._levelDesignKey.timeToBounce]);
        this.fadeWallHolder.active = true;
        this.ballHolder.active = true;
        console.log("this.fadeWallHolder", this.fadeWallHolder, 
        // this.fadeWallHolder.getPosition().x,
        // this.fadeWallHolder.getPosition().y,
        this.fadeWallHolder.getChildByName("FadeAbleWall").scale, this.fadeWallHolder.getChildByName("FadeAbleWall").getPosition().x, this.fadeWallHolder.getChildByName("FadeAbleWall").getPosition().y);
    };
    LevelManager.prototype.DisableHolder = function () {
        console.log("RESET");
        ObstaclesWallSpawner_1.default.Instance.ClearHolder();
        this.ballHolder.getComponent(Ball_1.default).Reset();
        this.fadeWallHolder.getComponentInChildren(FadeWall_1.default).Reset();
        this.ballHolder.active = false;
    };
    LevelManager.prototype.NextLevel = function () {
        GamePlayManager_1.default.Instance.currentLevel =
            GamePlayManager_1.default.Instance.currentLevel + 1;
        this.SetUpLevel(GamePlayManager_1.default.Instance.currentLevel);
    };
    LevelManager.prototype.GetValueByKey = function (objectInput, keyToFind) {
        for (var key in objectInput) {
            if (Object.prototype.hasOwnProperty.call(objectInput, key)) {
                var element = objectInput[key];
                if (keyToFind.toLowerCase() == key.toLowerCase()) {
                    return element;
                }
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], LevelManager.prototype, "wall", void 0);
    __decorate([
        property(cc.Node)
    ], LevelManager.prototype, "fadeWallHolder", void 0);
    __decorate([
        property(cc.Node)
    ], LevelManager.prototype, "timeToBounceHolder", void 0);
    __decorate([
        property(cc.Node)
    ], LevelManager.prototype, "ballHolder", void 0);
    LevelManager = __decorate([
        ccclass
    ], LevelManager);
    return LevelManager;
}(SingletonNode_1.default()));
exports.default = LevelManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZXBsYXlcXExldmVsTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjtBQUNsRix3REFBbUQ7QUFDbkQsc0VBQXdFO0FBQ3hFLG9FQUErRDtBQUMvRCxpREFBOEM7QUFDOUMscURBQWdEO0FBQ2hELCtCQUEwQjtBQUMxQix1Q0FBa0M7QUFFNUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQTZCO0lBQXZFO1FBQUEscUVBcUdDO1FBcEcyQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBQ3JCLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBQy9CLHdCQUFrQixHQUFZLElBQUksQ0FBQztRQUVuQyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUM3QyxxQkFBZSxHQUFHO1lBQ3hCLElBQUksRUFBRSxNQUFNO1lBQ1osWUFBWSxFQUFFLGNBQWM7WUFDNUIsY0FBYyxFQUFFLFVBQVU7WUFDMUIsYUFBYSxFQUFFLGVBQWU7WUFDOUIsWUFBWSxFQUFFLGNBQWM7U0FDN0IsQ0FBQzs7SUF5RkosQ0FBQztJQXhGQyxpQ0FBVSxHQUFWLFVBQVcsVUFBa0I7UUFBN0IsaUJBaUVDO1FBaEVDLElBQU0sWUFBWSxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztRQUV0QyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV0RCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRO1lBQ2xDLElBQUksUUFBUSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2RSxRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckQsUUFBUSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNqQyxRQUFRLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU07Z0JBQ3RELFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM1RSxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUN6QixZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQ2pELFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FDbEQsQ0FBQztRQUNGLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUM3QixZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUN2RCxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUN4RCxDQUFDO1FBQ0YsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQy9ELEtBQ0UsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUNiLEtBQUssR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLEVBQy9ELEtBQUssRUFBRSxFQUNQO2dCQUNBLElBQUksZ0JBQWdCLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUN6QyxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUM3RCxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUM5RCxDQUFDO2dCQUNGLElBQUksT0FBTyxHQUFZLDhCQUFvQixDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQzdELGdCQUFnQixFQUNoQiw4QkFBb0IsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUM5QyxDQUFDO2dCQUNGLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixPQUFPLENBQUMsUUFBUTtvQkFDZCxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUM7Z0JBQ25FLE9BQU8sQ0FBQyxLQUFLO29CQUNYLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2pFLE9BQU8sQ0FBQyxNQUFNO29CQUNaLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2pFLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUs7b0JBQ3BELFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2pFLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU07b0JBQ3JELFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2pFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ3ZCO1NBQ0Y7UUFDRCxJQUFJLENBQUMsa0JBQWtCO2FBQ3BCLFlBQVksQ0FBQyx1QkFBZSxDQUFDO2FBQzdCLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FDVCxxQkFBcUIsRUFDckIsSUFBSSxDQUFDLGNBQWM7UUFDbkIsdUNBQXVDO1FBQ3ZDLHVDQUF1QztRQUN2QyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxLQUFLLEVBQ3hELElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFDbEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUNuRSxDQUFDO0lBQ0osQ0FBQztJQUNELG9DQUFhLEdBQWI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLDhCQUFvQixDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsY0FBYyxDQUFDLHNCQUFzQixDQUFDLGtCQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3RCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQUNELGdDQUFTLEdBQVQ7UUFDRSx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZO1lBQ25DLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBQ0Qsb0NBQWEsR0FBYixVQUFjLFdBQVcsRUFBRSxTQUFpQjtRQUMxQyxLQUFLLElBQU0sR0FBRyxJQUFJLFdBQVcsRUFBRTtZQUM3QixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLEVBQUU7Z0JBQzFELElBQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakMsSUFBSSxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFFO29CQUNoRCxPQUFPLE9BQU8sQ0FBQztpQkFDaEI7YUFDRjtTQUNGO0lBQ0gsQ0FBQztJQW5Ha0I7UUFBbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQTZCO0lBQzVCO1FBQWxCLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUF1QztJQUN0QztRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0REFBMkM7SUFFMUM7UUFBbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQW1DO0lBTGxDLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FxR2hDO0lBQUQsbUJBQUM7Q0FyR0QsQUFxR0MsQ0FyR3lDLHVCQUFhLEVBQWdCLEdBcUd0RTtrQkFyR29CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbmltcG9ydCBTaW5nbGV0b25Ob2RlIGZyb20gXCIuLi91dGlscy9TaW5nbGV0b25Ob2RlXCI7XHJcbmltcG9ydCAqIGFzIGxldmVsRGVzaWduIGZyb20gXCIuLi9nYW1lcGxheS9MZXZlbC9HYW1lcGxheUxldmVsRGVzZ2luLmpzXCI7XHJcbmltcG9ydCBPYnN0YWNsZXNXYWxsU3Bhd25lciBmcm9tIFwiLi9XYWxsL09ic3RhY2xlc1dhbGxTcGF3bmVyXCI7XHJcbmltcG9ydCBUaW1lTmVlZFRvVG91Y2ggZnJvbSBcIi4vVGltZU5lZWRUb3VjaFwiO1xyXG5pbXBvcnQgR2FtZVBsYXlNYW5hZ2VyIGZyb20gXCIuL0dhbWVQbGF5TWFuYWdlclwiO1xyXG5pbXBvcnQgQmFsbCBmcm9tIFwiLi9CYWxsXCI7XHJcbmltcG9ydCBGYWRlV2FsbCBmcm9tIFwiLi9GYWRlV2FsbFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsTWFuYWdlciBleHRlbmRzIFNpbmdsZXRvbk5vZGU8TGV2ZWxNYW5hZ2VyPigpIHtcclxuICBAcHJvcGVydHkoY2MuTm9kZSkgcHVibGljIHdhbGw6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKSBwdWJsaWMgZmFkZVdhbGxIb2xkZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKSBwdWJsaWMgdGltZVRvQm91bmNlSG9sZGVyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpIHB1YmxpYyBiYWxsSG9sZGVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICBwcml2YXRlIF9sZXZlbERlc2lnbktleSA9IHtcclxuICAgIHdhbGw6IFwid2FsbFwiLFxyXG4gICAgYmFsbFN0YXJ0UG9zOiBcImJhbGxTdGFydFBvc1wiLFxyXG4gICAgZmFkZVdhbGxIb2xkZXI6IFwiZmFkZVdhbGxcIixcclxuICAgIG9ic3RhY2xlc1dhbGw6IFwib2JzdGFjbGVzV2FsbFwiLFxyXG4gICAgdGltZVRvQm91bmNlOiBcInRpbWVUb0JvdW5jZVwiLFxyXG4gIH07XHJcbiAgU2V0VXBMZXZlbChsZXZlbEluZGV4OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRMZXZlbCA9IGxldmVsRGVzaWduW2xldmVsSW5kZXhdO1xyXG4gICAgY29uc29sZS5sb2coXCJsZXZlbEluZGV4XCIsIGxldmVsSW5kZXgpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiY3VycmVudExldmVsLmxldmVsXCIsIGN1cnJlbnRMZXZlbC5sZXZlbCk7XHJcblxyXG4gICAgdGhpcy53YWxsLmNoaWxkcmVuLmZvckVhY2goKGVhY2hXYWxsKSA9PiB7XHJcbiAgICAgIGxldCB0ZW1wV2FsbCA9IHRoaXMuR2V0VmFsdWVCeUtleShjdXJyZW50TGV2ZWxbXCJ3YWxsXCJdLCBlYWNoV2FsbC5uYW1lKTtcclxuICAgICAgZWFjaFdhbGwuc2V0UG9zaXRpb24odGVtcFdhbGwucG9zLngsIHRlbXBXYWxsLnBvcy55KTtcclxuICAgICAgZWFjaFdhbGwud2lkdGggPSB0ZW1wV2FsbC5zaXplLnc7XHJcbiAgICAgIGVhY2hXYWxsLmhlaWdodCA9IHRlbXBXYWxsLnNpemUuaDtcclxuICAgICAgZWFjaFdhbGwuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcikuc2l6ZS5oZWlnaHQgPVxyXG4gICAgICAgIHRlbXBXYWxsLnNpemUuaDtcclxuICAgICAgZWFjaFdhbGwuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcikuc2l6ZS53aWR0aCA9IHRlbXBXYWxsLnNpemUudztcclxuICAgIH0pO1xyXG4gICAgdGhpcy5iYWxsSG9sZGVyLnNldFBvc2l0aW9uKFxyXG4gICAgICBjdXJyZW50TGV2ZWxbdGhpcy5fbGV2ZWxEZXNpZ25LZXkuYmFsbFN0YXJ0UG9zXS54LFxyXG4gICAgICBjdXJyZW50TGV2ZWxbdGhpcy5fbGV2ZWxEZXNpZ25LZXkuYmFsbFN0YXJ0UG9zXS55XHJcbiAgICApO1xyXG4gICAgdGhpcy5mYWRlV2FsbEhvbGRlci5zZXRQb3NpdGlvbihcclxuICAgICAgY3VycmVudExldmVsW3RoaXMuX2xldmVsRGVzaWduS2V5LmZhZGVXYWxsSG9sZGVyXS5wb3MueCxcclxuICAgICAgY3VycmVudExldmVsW3RoaXMuX2xldmVsRGVzaWduS2V5LmZhZGVXYWxsSG9sZGVyXS5wb3MueVxyXG4gICAgKTtcclxuICAgIGlmIChjdXJyZW50TGV2ZWxbdGhpcy5fbGV2ZWxEZXNpZ25LZXkub2JzdGFjbGVzV2FsbF0ubGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IgKFxyXG4gICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgaW5kZXggPCBjdXJyZW50TGV2ZWxbdGhpcy5fbGV2ZWxEZXNpZ25LZXkub2JzdGFjbGVzV2FsbF0ubGVuZ3RoO1xyXG4gICAgICAgIGluZGV4KytcclxuICAgICAgKSB7XHJcbiAgICAgICAgbGV0IG9ic3RhY2xlc1dhbGxQb3M6IGNjLlZlYzIgPSBuZXcgY2MuVmVjMihcclxuICAgICAgICAgIGN1cnJlbnRMZXZlbFt0aGlzLl9sZXZlbERlc2lnbktleS5vYnN0YWNsZXNXYWxsXVtpbmRleF0ucG9zLngsXHJcbiAgICAgICAgICBjdXJyZW50TGV2ZWxbdGhpcy5fbGV2ZWxEZXNpZ25LZXkub2JzdGFjbGVzV2FsbF1baW5kZXhdLnBvcy55XHJcbiAgICAgICAgKTtcclxuICAgICAgICBsZXQgb2JzV2FsbDogY2MuTm9kZSA9IE9ic3RhY2xlc1dhbGxTcGF3bmVyLkluc3RhbmNlLlNwYXduVGhpbmcoXHJcbiAgICAgICAgICBvYnN0YWNsZXNXYWxsUG9zLFxyXG4gICAgICAgICAgT2JzdGFjbGVzV2FsbFNwYXduZXIuSW5zdGFuY2UuX3dhbGxQcmVmYWJOYW1lXHJcbiAgICAgICAgKTtcclxuICAgICAgICBvYnNXYWxsLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIG9ic1dhbGwucm90YXRpb24gPVxyXG4gICAgICAgICAgY3VycmVudExldmVsW3RoaXMuX2xldmVsRGVzaWduS2V5Lm9ic3RhY2xlc1dhbGxdW2luZGV4XS5yb3RhdGlvbjtcclxuICAgICAgICBvYnNXYWxsLndpZHRoID1cclxuICAgICAgICAgIGN1cnJlbnRMZXZlbFt0aGlzLl9sZXZlbERlc2lnbktleS5vYnN0YWNsZXNXYWxsXVtpbmRleF0uc2l6ZS53O1xyXG4gICAgICAgIG9ic1dhbGwuaGVpZ2h0ID1cclxuICAgICAgICAgIGN1cnJlbnRMZXZlbFt0aGlzLl9sZXZlbERlc2lnbktleS5vYnN0YWNsZXNXYWxsXVtpbmRleF0uc2l6ZS5oO1xyXG4gICAgICAgIG9ic1dhbGwuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcikuc2l6ZS53aWR0aCA9XHJcbiAgICAgICAgICBjdXJyZW50TGV2ZWxbdGhpcy5fbGV2ZWxEZXNpZ25LZXkub2JzdGFjbGVzV2FsbF1baW5kZXhdLnNpemUudztcclxuICAgICAgICBvYnNXYWxsLmdldENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpLnNpemUuaGVpZ2h0ID1cclxuICAgICAgICAgIGN1cnJlbnRMZXZlbFt0aGlzLl9sZXZlbERlc2lnbktleS5vYnN0YWNsZXNXYWxsXVtpbmRleF0uc2l6ZS5oO1xyXG4gICAgICAgIG9ic1dhbGwuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy50aW1lVG9Cb3VuY2VIb2xkZXJcclxuICAgICAgLmdldENvbXBvbmVudChUaW1lTmVlZFRvVG91Y2gpXHJcbiAgICAgIC5zZXRCb3VuY2UoY3VycmVudExldmVsW3RoaXMuX2xldmVsRGVzaWduS2V5LnRpbWVUb0JvdW5jZV0pO1xyXG4gICAgdGhpcy5mYWRlV2FsbEhvbGRlci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5iYWxsSG9sZGVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgXCJ0aGlzLmZhZGVXYWxsSG9sZGVyXCIsXHJcbiAgICAgIHRoaXMuZmFkZVdhbGxIb2xkZXIsXHJcbiAgICAgIC8vIHRoaXMuZmFkZVdhbGxIb2xkZXIuZ2V0UG9zaXRpb24oKS54LFxyXG4gICAgICAvLyB0aGlzLmZhZGVXYWxsSG9sZGVyLmdldFBvc2l0aW9uKCkueSxcclxuICAgICAgdGhpcy5mYWRlV2FsbEhvbGRlci5nZXRDaGlsZEJ5TmFtZShcIkZhZGVBYmxlV2FsbFwiKS5zY2FsZSxcclxuICAgICAgdGhpcy5mYWRlV2FsbEhvbGRlci5nZXRDaGlsZEJ5TmFtZShcIkZhZGVBYmxlV2FsbFwiKS5nZXRQb3NpdGlvbigpLngsXHJcbiAgICAgIHRoaXMuZmFkZVdhbGxIb2xkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJGYWRlQWJsZVdhbGxcIikuZ2V0UG9zaXRpb24oKS55XHJcbiAgICApO1xyXG4gIH1cclxuICBEaXNhYmxlSG9sZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJSRVNFVFwiKTtcclxuICAgIE9ic3RhY2xlc1dhbGxTcGF3bmVyLkluc3RhbmNlLkNsZWFySG9sZGVyKCk7XHJcbiAgICB0aGlzLmJhbGxIb2xkZXIuZ2V0Q29tcG9uZW50KEJhbGwpLlJlc2V0KCk7XHJcbiAgICB0aGlzLmZhZGVXYWxsSG9sZGVyLmdldENvbXBvbmVudEluQ2hpbGRyZW4oRmFkZVdhbGwpLlJlc2V0KCk7XHJcbiAgICB0aGlzLmJhbGxIb2xkZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgfVxyXG4gIE5leHRMZXZlbCgpIHtcclxuICAgIEdhbWVQbGF5TWFuYWdlci5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPVxyXG4gICAgICBHYW1lUGxheU1hbmFnZXIuSW5zdGFuY2UuY3VycmVudExldmVsICsgMTtcclxuICAgIHRoaXMuU2V0VXBMZXZlbChHYW1lUGxheU1hbmFnZXIuSW5zdGFuY2UuY3VycmVudExldmVsKTtcclxuICB9XHJcbiAgR2V0VmFsdWVCeUtleShvYmplY3RJbnB1dCwga2V5VG9GaW5kOiBzdHJpbmcpIHtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIG9iamVjdElucHV0KSB7XHJcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0SW5wdXQsIGtleSkpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gb2JqZWN0SW5wdXRba2V5XTtcclxuICAgICAgICBpZiAoa2V5VG9GaW5kLnRvTG93ZXJDYXNlKCkgPT0ga2V5LnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=