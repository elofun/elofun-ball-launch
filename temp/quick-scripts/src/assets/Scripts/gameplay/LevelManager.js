"use strict";
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