
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/game/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4e4edq/h0FGmYOarVkTPs/6', 'GameManager');
// Scripts/game/GameManager.ts

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
var AudioController_1 = require("../AudioController");
var SingletonNode_1 = require("../utils/SingletonNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        _this.STATE = {
            TUTORIAL: 0,
            INGAME: 1,
            GAMEOVER: 2
        };
        _this.state = 0;
        _this.isPause = false;
        return _this;
        // update (dt) {}
    }
    GameManager.prototype.start = function () {
    };
    GameManager.prototype.startGame = function () {
    };
    GameManager.prototype.endGame = function () {
    };
    GameManager.prototype.setMute = function () {
        AudioController_1.default.Instance.setMute();
    };
    GameManager.prototype.onGamePause = function () {
        this.isPause = true;
    };
    GameManager.prototype.onGameResume = function () {
        this.isPause = false;
    };
    GameManager.prototype.IsPause = function () {
        return this.isPause;
    };
    GameManager = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(SingletonNode_1.default()));
exports.default = GameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZVxcR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQWlEO0FBQ2pELHdEQUFtRDtBQUU3QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF5QywrQkFBNEI7SUFBckU7UUFFSSx3QkFBd0I7UUFGNUIscUVBMENDO1FBdENHLGVBQWU7UUFDUCxXQUFLLEdBQ2I7WUFDSSxRQUFRLEVBQUUsQ0FBQztZQUNYLE1BQU0sRUFBRSxDQUFDO1lBQ1QsUUFBUSxFQUFFLENBQUM7U0FDZCxDQUFBO1FBQ08sV0FBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGFBQU8sR0FBYSxLQUFLLENBQUM7O1FBNkJsQyxpQkFBaUI7SUFDckIsQ0FBQztJQTVCRywyQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUNELCtCQUFTLEdBQVQ7SUFHQSxDQUFDO0lBQ0QsNkJBQU8sR0FBUDtJQUdBLENBQUM7SUFDRCw2QkFBTyxHQUFQO1FBRUkseUJBQWUsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDdEMsQ0FBQztJQUNELGlDQUFXLEdBQVg7UUFFSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBQ0Qsa0NBQVksR0FBWjtRQUVJLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFDRCw2QkFBTyxHQUFQO1FBRUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFBO0lBQ3ZCLENBQUM7SUF4Q2dCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0EwQy9CO0lBQUQsa0JBQUM7Q0ExQ0QsQUEwQ0MsQ0ExQ3dDLHVCQUFhLEVBQWUsR0EwQ3BFO2tCQTFDb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdWRpb0NvbnRyb2xsZXIgZnJvbSBcIi4uL0F1ZGlvQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgU2luZ2xldG9uTm9kZSBmcm9tIFwiLi4vdXRpbHMvU2luZ2xldG9uTm9kZVwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFuYWdlciBleHRlbmRzIFNpbmdsZXRvbk5vZGU8R2FtZU1hbmFnZXI+KCkge1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG4gICAgcHJpdmF0ZSBTVEFURSA9XHJcbiAgICB7XHJcbiAgICAgICAgVFVUT1JJQUw6IDAsXHJcbiAgICAgICAgSU5HQU1FOiAxLFxyXG4gICAgICAgIEdBTUVPVkVSOiAyXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHN0YXRlID0gMDtcclxuICAgIHByaXZhdGUgaXNQYXVzZSA6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgc3RhcnRHYW1lKClcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGVuZEdhbWUoKVxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgc2V0TXV0ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgQXVkaW9Db250cm9sbGVyLkluc3RhbmNlLnNldE11dGUoKVxyXG4gICAgfVxyXG4gICAgb25HYW1lUGF1c2UoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaXNQYXVzZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBvbkdhbWVSZXN1bWUoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaXNQYXVzZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgSXNQYXVzZSgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNQYXVzZVxyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=