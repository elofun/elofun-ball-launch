
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gameplay/TimeNeedTouch.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '84042I9KIdEGo233ywZTGud', 'TimeNeedTouch');
// Scripts/gameplay/TimeNeedTouch.ts

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
var GamePlayManager_1 = require("./GamePlayManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TimeNeedToTouch = /** @class */ (function (_super) {
    __extends(TimeNeedToTouch, _super);
    function TimeNeedToTouch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.TimeNeedToTouch = 0;
        _this.isOpenDoor = false;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    // start() {}
    TimeNeedToTouch.prototype.setBounce = function (timeBounce) {
        this.TimeNeedToTouch = timeBounce;
        this.label.string = this.TimeNeedToTouch.toString();
        this.isOpenDoor = false;
    };
    TimeNeedToTouch.prototype.Touching = function () {
        if (this.TimeNeedToTouch > 0) {
            this.TimeNeedToTouch--;
            this.label.string = this.TimeNeedToTouch.toString();
            if (this.TimeNeedToTouch == 0 && this.isOpenDoor == false) {
                GamePlayManager_1.default.Instance.fadeWall.FadeWall();
                this.label.string = this.TimeNeedToTouch.toString();
                this.isOpenDoor = true;
            }
        }
        else if (this.TimeNeedToTouch == 0) {
            this.isOpenDoor = true;
            GamePlayManager_1.default.Instance.isLost = true;
            this.label.string = "Lost";
            this.scheduleOnce(function () {
                GamePlayManager_1.default.Instance.Lose();
            }, 0.4);
        }
    };
    __decorate([
        property(cc.Label)
    ], TimeNeedToTouch.prototype, "label", void 0);
    __decorate([
        property
    ], TimeNeedToTouch.prototype, "TimeNeedToTouch", void 0);
    TimeNeedToTouch = __decorate([
        ccclass
    ], TimeNeedToTouch);
    return TimeNeedToTouch;
}(cc.Component));
exports.default = TimeNeedToTouch;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZXBsYXlcXFRpbWVOZWVkVG91Y2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEYscURBQWdEO0FBRTFDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBc0NDO1FBcENDLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHaEIscUJBQWUsR0FBVyxDQUFDLENBQUM7UUFDNUIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7O1FBK0JuQyxpQkFBaUI7SUFDbkIsQ0FBQztJQTlCQyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLGFBQWE7SUFDYixtQ0FBUyxHQUFULFVBQVUsVUFBa0I7UUFDMUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxVQUFVLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0Qsa0NBQVEsR0FBUjtRQUNFLElBQUksSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLEVBQUU7WUFDNUIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDcEQsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLEtBQUssRUFBRTtnQkFDekQseUJBQWUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUM3QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNwRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzthQUN4QjtTQUNGO2FBQU0sSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2Qix5QkFBZSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNoQix5QkFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNsQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDVDtJQUNILENBQUM7SUFqQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDSTtJQUd2QjtRQURDLFFBQVE7NERBQzBCO0lBTGhCLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0FzQ25DO0lBQUQsc0JBQUM7Q0F0Q0QsQUFzQ0MsQ0F0QzRDLEVBQUUsQ0FBQyxTQUFTLEdBc0N4RDtrQkF0Q29CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4vR2FtZU1hbmFnZXJcIjtcclxuaW1wb3J0IEdhbWVQbGF5TWFuYWdlciBmcm9tIFwiLi9HYW1lUGxheU1hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lTmVlZFRvVG91Y2ggZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHlcclxuICBwdWJsaWMgVGltZU5lZWRUb1RvdWNoOiBudW1iZXIgPSAwO1xyXG4gIHB1YmxpYyBpc09wZW5Eb29yOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgLy8gc3RhcnQoKSB7fVxyXG4gIHNldEJvdW5jZSh0aW1lQm91bmNlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuVGltZU5lZWRUb1RvdWNoID0gdGltZUJvdW5jZTtcclxuICAgIHRoaXMubGFiZWwuc3RyaW5nID0gdGhpcy5UaW1lTmVlZFRvVG91Y2gudG9TdHJpbmcoKTtcclxuICAgIHRoaXMuaXNPcGVuRG9vciA9IGZhbHNlO1xyXG4gIH1cclxuICBUb3VjaGluZygpIHtcclxuICAgIGlmICh0aGlzLlRpbWVOZWVkVG9Ub3VjaCA+IDApIHtcclxuICAgICAgdGhpcy5UaW1lTmVlZFRvVG91Y2gtLTtcclxuICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSB0aGlzLlRpbWVOZWVkVG9Ub3VjaC50b1N0cmluZygpO1xyXG4gICAgICBpZiAodGhpcy5UaW1lTmVlZFRvVG91Y2ggPT0gMCAmJiB0aGlzLmlzT3BlbkRvb3IgPT0gZmFsc2UpIHtcclxuICAgICAgICBHYW1lUGxheU1hbmFnZXIuSW5zdGFuY2UuZmFkZVdhbGwuRmFkZVdhbGwoKTtcclxuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IHRoaXMuVGltZU5lZWRUb1RvdWNoLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5pc09wZW5Eb29yID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLlRpbWVOZWVkVG9Ub3VjaCA9PSAwKSB7XHJcbiAgICAgIHRoaXMuaXNPcGVuRG9vciA9IHRydWU7XHJcbiAgICAgIEdhbWVQbGF5TWFuYWdlci5JbnN0YW5jZS5pc0xvc3QgPSB0cnVlO1xyXG4gICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IFwiTG9zdFwiO1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgR2FtZVBsYXlNYW5hZ2VyLkluc3RhbmNlLkxvc2UoKTtcclxuICAgICAgfSwgMC40KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19