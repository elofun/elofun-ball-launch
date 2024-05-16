
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ui/UIMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8e195aDavdHDKGbdlAqNUxo', 'UIMgr');
// Scripts/ui/UIMgr.ts

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
exports.UI_MOVE_DIRECTION = exports.UI_SHOW_EFFECT = exports.UIs = void 0;
// import GameMgr from "../game/GameMgr";
var Helper_1 = require("../utils/Helper");
var SingletonNode_1 = require("../utils/SingletonNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIs;
(function (UIs) {
    UIs[UIs["UIInterstitial"] = 0] = "UIInterstitial";
    UIs[UIs["UIWaiting"] = 1] = "UIWaiting";
    UIs[UIs["UIGame"] = 2] = "UIGame";
    UIs[UIs["UIScan"] = 3] = "UIScan";
    UIs[UIs["UIGuide"] = 4] = "UIGuide";
})(UIs = exports.UIs || (exports.UIs = {}));
var UI_SHOW_EFFECT;
(function (UI_SHOW_EFFECT) {
    UI_SHOW_EFFECT[UI_SHOW_EFFECT["APPEAR"] = 0] = "APPEAR";
    UI_SHOW_EFFECT[UI_SHOW_EFFECT["MOVE"] = 1] = "MOVE";
    UI_SHOW_EFFECT[UI_SHOW_EFFECT["SCALE"] = 2] = "SCALE";
    UI_SHOW_EFFECT[UI_SHOW_EFFECT["FADE"] = 3] = "FADE";
})(UI_SHOW_EFFECT = exports.UI_SHOW_EFFECT || (exports.UI_SHOW_EFFECT = {}));
var UI_MOVE_DIRECTION;
(function (UI_MOVE_DIRECTION) {
    UI_MOVE_DIRECTION[UI_MOVE_DIRECTION["UP"] = 0] = "UP";
    UI_MOVE_DIRECTION[UI_MOVE_DIRECTION["DOWN"] = 1] = "DOWN";
    UI_MOVE_DIRECTION[UI_MOVE_DIRECTION["LEFT"] = 2] = "LEFT";
    UI_MOVE_DIRECTION[UI_MOVE_DIRECTION["RIGHT"] = 3] = "RIGHT";
})(UI_MOVE_DIRECTION = exports.UI_MOVE_DIRECTION || (exports.UI_MOVE_DIRECTION = {}));
var UIMgr = /** @class */ (function (_super) {
    __extends(UIMgr, _super);
    function UIMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.UIPrefabs = [];
        _this.Canvas = null;
        _this.mMoveDirection = UI_MOVE_DIRECTION.LEFT;
        _this.mPreviousView = null;
        _this.mCurrentView = null;
        return _this;
    }
    Object.defineProperty(UIMgr.prototype, "MoveDirection", {
        set: function (value) {
            this.mMoveDirection = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UIMgr.prototype, "CurrentView", {
        get: function () {
            return this.mCurrentView;
        },
        enumerable: false,
        configurable: true
    });
    UIMgr.show = function (viewName, effectType, easing, duration) {
        if (effectType === void 0) { effectType = UI_SHOW_EFFECT.APPEAR; }
        if (easing === void 0) { easing = "smooth"; }
        if (duration === void 0) { duration = 0.5; }
        var instance = this.Instance;
        instance.mPreviousView = instance.mCurrentView;
        for (var _i = 0, _a = instance.node.children; _i < _a.length; _i++) {
            var view = _a[_i];
            var isActive = view.name == UIs[viewName];
            if (isActive) {
                instance.mCurrentView = view;
            }
            if (view.active != isActive) {
                view.active = isActive;
            }
        }
        if (instance.mPreviousView && instance.mCurrentView && instance.mPreviousView != instance.mCurrentView) {
            instance.animate(effectType, easing, duration);
        }
    };
    UIMgr.hide = function () {
        var instance = this.Instance;
        for (var _i = 0, _a = instance.node.children; _i < _a.length; _i++) {
            var view = _a[_i];
            view.active = false;
        }
    };
    UIMgr.nextView = function (isNext, effectType, easing, duration) {
        if (isNext === void 0) { isNext = true; }
        var instance = this.Instance;
        var index = instance.node.children.indexOf(instance.mCurrentView);
        if (index != -1 && ((isNext && index < instance.node.childrenCount - 1) || (!isNext && index > 0))) {
            index = isNext ? (index + 1) : (index - 1);
            this.show(Helper_1.default.GetIndexEnum(UIs, instance.node.children[index].name), effectType, easing, duration);
        }
    };
    UIMgr.getUI = function (viewName) {
        return this.Instance.node.getChildByName(UIs[viewName]).getComponent(UIs[viewName]);
    };
    UIMgr.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        for (var i = 0; i < this.UIPrefabs.length; i++) {
            var node = cc.instantiate(this.UIPrefabs[i]);
            node.active = false;
            this.node.addChild(node);
        }
        this.Canvas = cc.find("Canvas");
    };
    UIMgr.prototype.start = function () {
    };
    UIMgr.prototype.animate = function (effectType, easing, duration) {
        var _this = this;
        this.mPreviousView.active = true;
        switch (effectType) {
            case UI_SHOW_EFFECT.APPEAR:
                {
                    this.mPreviousView.active = false;
                    break;
                }
            case UI_SHOW_EFFECT.MOVE:
                {
                    var previousViewPosition = void 0;
                    var currentViewPosition = void 0;
                    switch (this.mMoveDirection) {
                        case UI_MOVE_DIRECTION.UP:
                            {
                                currentViewPosition = cc.v2(0, -this.Canvas.height * 1.5);
                                previousViewPosition = cc.v2(0, this.Canvas.height * 1.5);
                                break;
                            }
                        case UI_MOVE_DIRECTION.DOWN:
                            {
                                currentViewPosition = cc.v2(0, this.Canvas.height * 1.5);
                                previousViewPosition = cc.v2(0, -this.Canvas.height * 1.5);
                                break;
                            }
                        case UI_MOVE_DIRECTION.LEFT:
                            {
                                currentViewPosition = cc.v2(this.Canvas.width * 1.5, 0);
                                previousViewPosition = cc.v2(-this.Canvas.width * 1.5, 0);
                                break;
                            }
                        case UI_MOVE_DIRECTION.RIGHT:
                            {
                                currentViewPosition = cc.v2(-this.Canvas.width * 1.5, 0);
                                previousViewPosition = cc.v2(this.Canvas.width * 1.5, 0);
                                break;
                            }
                    }
                    cc.tween(this.mPreviousView)
                        .to(duration, { position: previousViewPosition }, { easing: easing })
                        .call(function () { return _this.mPreviousView.active = false; })
                        .start();
                    cc.tween(this.mCurrentView)
                        .set({ opacity: 0 })
                        .delay(0)
                        .set({ position: currentViewPosition, opacity: 255 })
                        .to(duration, { position: cc.Vec3.ZERO }, { easing: easing })
                        .start();
                    break;
                }
            case UI_SHOW_EFFECT.SCALE:
                {
                    this.mCurrentView.setScale(cc.Vec2.ZERO);
                    cc.tween(this.mPreviousView)
                        .to(duration, { scale: 0 }, { easing: easing })
                        .call(function () { return _this.mPreviousView.active = false; })
                        .start();
                    cc.tween(this.mCurrentView)
                        .delay(duration)
                        .to(duration, { scale: 1 }, { easing: easing })
                        .start();
                    break;
                }
            case UI_SHOW_EFFECT.FADE:
                {
                    cc.tween(this.mPreviousView)
                        .to(duration, { scale: this.mPreviousView.scaleX }, { progress: function (start, end, current, ratio) {
                            _this.mPreviousView.opacity = (1 - ratio) * 255;
                            return start + (end - start) * ratio;
                        } })
                        .call(function () { return _this.mPreviousView.active = false; })
                        .start();
                    cc.tween(this.mCurrentView)
                        .delay(duration)
                        .to(duration, { scale: this.mCurrentView.scaleX }, { progress: function (start, end, current, ratio) {
                            _this.mCurrentView.opacity = ratio * 255;
                            return start + (end - start) * ratio;
                        } })
                        .start();
                    break;
                }
        }
        this.mCurrentView.active = true;
    };
    __decorate([
        property(cc.Prefab)
    ], UIMgr.prototype, "UIPrefabs", void 0);
    UIMgr = __decorate([
        ccclass
    ], UIMgr);
    return UIMgr;
}(SingletonNode_1.default()));
exports.default = UIMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcdWlcXFVJTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBeUM7QUFDekMsMENBQXFDO0FBQ3JDLHdEQUFtRDtBQUU3QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFZLEdBT1g7QUFQRCxXQUFZLEdBQUc7SUFFWCxpREFBYyxDQUFBO0lBQ2QsdUNBQVMsQ0FBQTtJQUNULGlDQUFNLENBQUE7SUFDTixpQ0FBTSxDQUFBO0lBQ04sbUNBQU8sQ0FBQTtBQUNYLENBQUMsRUFQVyxHQUFHLEdBQUgsV0FBRyxLQUFILFdBQUcsUUFPZDtBQUVELElBQVksY0FNWDtBQU5ELFdBQVksY0FBYztJQUV0Qix1REFBTSxDQUFBO0lBQ04sbURBQUksQ0FBQTtJQUNKLHFEQUFLLENBQUE7SUFDTCxtREFBSSxDQUFBO0FBQ1IsQ0FBQyxFQU5XLGNBQWMsR0FBZCxzQkFBYyxLQUFkLHNCQUFjLFFBTXpCO0FBRUQsSUFBWSxpQkFNWDtBQU5ELFdBQVksaUJBQWlCO0lBRXpCLHFEQUFFLENBQUE7SUFDRix5REFBSSxDQUFBO0lBQ0oseURBQUksQ0FBQTtJQUNKLDJEQUFLLENBQUE7QUFDVCxDQUFDLEVBTlcsaUJBQWlCLEdBQWpCLHlCQUFpQixLQUFqQix5QkFBaUIsUUFNNUI7QUFHRDtJQUFtQyx5QkFBc0I7SUFBekQ7UUFBQSxxRUFzTEM7UUExS2dDLGVBQVMsR0FBcUIsRUFBRSxDQUFDO1FBRXRELFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsb0JBQWMsR0FBc0IsaUJBQWlCLENBQUMsSUFBSSxDQUFDO1FBQzNELG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLGtCQUFZLEdBQVksSUFBSSxDQUFDOztJQXFLekMsQ0FBQztJQXBMRyxzQkFBSSxnQ0FBYTthQUFqQixVQUFr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S0FBSyxHQUFHLEdBQUcsQ0FBQzs0QkFDeEMsT0FBTyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO3dCQUN6QyxDQUFDLEVBQUMsQ0FBQzt5QkFDRixLQUFLLEVBQUUsQ0FBQztvQkFFYixNQUFNO2lCQUNUO1NBQ0o7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDcEMsQ0FBQztJQXpLb0I7UUFBcEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQTBDO0lBWjdDLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0FzTHpCO0lBQUQsWUFBQztDQXRMRCxBQXNMQyxDQXRMa0MsdUJBQWEsRUFBUyxHQXNMeEQ7a0JBdExvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEdhbWVNZ3IgZnJvbSBcIi4uL2dhbWUvR2FtZU1nclwiO1xyXG5pbXBvcnQgSGVscGVyIGZyb20gXCIuLi91dGlscy9IZWxwZXJcIjtcclxuaW1wb3J0IFNpbmdsZXRvbk5vZGUgZnJvbSBcIi4uL3V0aWxzL1NpbmdsZXRvbk5vZGVcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5leHBvcnQgZW51bSBVSXNcclxue1xyXG4gICAgVUlJbnRlcnN0aXRpYWwsXHJcbiAgICBVSVdhaXRpbmcsXHJcbiAgICBVSUdhbWUsXHJcbiAgICBVSVNjYW4sXHJcbiAgICBVSUd1aWRlXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFVJX1NIT1dfRUZGRUNUXHJcbntcclxuICAgIEFQUEVBUixcclxuICAgIE1PVkUsXHJcbiAgICBTQ0FMRSxcclxuICAgIEZBREVcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVUlfTU9WRV9ESVJFQ1RJT05cclxue1xyXG4gICAgVVAsXHJcbiAgICBET1dOLFxyXG4gICAgTEVGVCxcclxuICAgIFJJR0hUXHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJTWdyIGV4dGVuZHMgU2luZ2xldG9uTm9kZTxVSU1ncj4oKVxyXG57XHJcbiAgICBzZXQgTW92ZURpcmVjdGlvbih2YWx1ZTogVUlfTU9WRV9ESVJFQ1RJT04pXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tTW92ZURpcmVjdGlvbiA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgQ3VycmVudFZpZXcoKTogY2MuTm9kZSBcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tQ3VycmVudFZpZXc7XHJcbiAgICB9XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYikgcHJpdmF0ZSBVSVByZWZhYnM6IEFycmF5PGNjLlByZWZhYj4gPSBbXTtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBDYW52YXM6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBtTW92ZURpcmVjdGlvbjogVUlfTU9WRV9ESVJFQ1RJT04gPSBVSV9NT1ZFX0RJUkVDVElPTi5MRUZUO1xyXG4gICAgcHJpdmF0ZSBtUHJldmlvdXNWaWV3OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgbUN1cnJlbnRWaWV3OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBzdGF0aWMgc2hvdyh2aWV3TmFtZTogVUlzLCBcclxuICAgICAgICBlZmZlY3RUeXBlOiBVSV9TSE9XX0VGRkVDVCA9IFVJX1NIT1dfRUZGRUNULkFQUEVBUiwgXHJcbiAgICAgICAgZWFzaW5nOiBzdHJpbmcgPSBcInNtb290aFwiLCBcclxuICAgICAgICBkdXJhdGlvbjogbnVtYmVyID0gMC41KVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5JbnN0YW5jZTtcclxuICAgICAgICBpbnN0YW5jZS5tUHJldmlvdXNWaWV3ID0gaW5zdGFuY2UubUN1cnJlbnRWaWV3O1xyXG5cclxuICAgICAgICBmb3IobGV0IHZpZXcgb2YgaW5zdGFuY2Uubm9kZS5jaGlsZHJlbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gdmlldy5uYW1lID09IFVJc1t2aWV3TmFtZV07XHJcbiAgICAgICAgICAgIGlmKGlzQWN0aXZlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5tQ3VycmVudFZpZXcgPSB2aWV3O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZih2aWV3LmFjdGl2ZSAhPSBpc0FjdGl2ZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmlldy5hY3RpdmUgPSBpc0FjdGl2ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoaW5zdGFuY2UubVByZXZpb3VzVmlldyAmJiBpbnN0YW5jZS5tQ3VycmVudFZpZXcgJiYgaW5zdGFuY2UubVByZXZpb3VzVmlldyAhPSBpbnN0YW5jZS5tQ3VycmVudFZpZXcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5hbmltYXRlKGVmZmVjdFR5cGUsIGVhc2luZywgZHVyYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXRpYyBoaWRlKClcclxuICAgIHtcclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuSW5zdGFuY2U7XHJcbiAgICAgICAgZm9yKGxldCB2aWV3IG9mIGluc3RhbmNlLm5vZGUuY2hpbGRyZW4pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2aWV3LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbmV4dFZpZXcoaXNOZXh0OiBib29sZWFuID0gdHJ1ZSxcclxuICAgICAgICBlZmZlY3RUeXBlOiBVSV9TSE9XX0VGRkVDVCwgXHJcbiAgICAgICAgZWFzaW5nOiBzdHJpbmcsIFxyXG4gICAgICAgIGR1cmF0aW9uOiBudW1iZXJcclxuICAgICkgXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLkluc3RhbmNlO1xyXG4gICAgICAgIGxldCBpbmRleCA9IGluc3RhbmNlLm5vZGUuY2hpbGRyZW4uaW5kZXhPZihpbnN0YW5jZS5tQ3VycmVudFZpZXcpO1xyXG5cclxuICAgICAgICBpZihpbmRleCAhPSAtMSAmJiAoKGlzTmV4dCAmJiBpbmRleCA8IGluc3RhbmNlLm5vZGUuY2hpbGRyZW5Db3VudCAtIDEpIHx8ICghaXNOZXh0ICYmIGluZGV4ID4gMCkpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW5kZXggPSBpc05leHQgPyAoaW5kZXggKyAxKSA6IChpbmRleCAtIDEpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3coSGVscGVyLkdldEluZGV4RW51bShVSXMsIGluc3RhbmNlLm5vZGUuY2hpbGRyZW5baW5kZXhdLm5hbWUpLCBlZmZlY3RUeXBlLCBlYXNpbmcsIGR1cmF0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFVJPFQ+KHZpZXdOYW1lOiBVSXMpOiBUIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFVJc1t2aWV3TmFtZV0pLmdldENvbXBvbmVudChVSXNbdmlld05hbWVdKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgICBzdXBlci5vbkxvYWQoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuVUlQcmVmYWJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLlVJUHJlZmFic1tpXSk7XHJcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuQ2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYW5pbWF0ZShlZmZlY3RUeXBlOiBVSV9TSE9XX0VGRkVDVCwgZWFzaW5nOiBzdHJpbmcsIGR1cmF0aW9uOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tUHJldmlvdXNWaWV3LmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHN3aXRjaChlZmZlY3RUeXBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FzZSBVSV9TSE9XX0VGRkVDVC5BUFBFQVI6XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubVByZXZpb3VzVmlldy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVUlfU0hPV19FRkZFQ1QuTU9WRTpcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IHByZXZpb3VzVmlld1Bvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRWaWV3UG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2godGhpcy5tTW92ZURpcmVjdGlvbilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFVJX01PVkVfRElSRUNUSU9OLlVQOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFZpZXdQb3NpdGlvbiA9IGNjLnYyKDAsIC0gdGhpcy5DYW52YXMuaGVpZ2h0ICogMS41KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNWaWV3UG9zaXRpb24gPSBjYy52MigwLCB0aGlzLkNhbnZhcy5oZWlnaHQqIDEuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFVJX01PVkVfRElSRUNUSU9OLkRPV046XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Vmlld1Bvc2l0aW9uID0gY2MudjIoMCwgdGhpcy5DYW52YXMuaGVpZ2h0KiAxLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1ZpZXdQb3NpdGlvbiA9IGNjLnYyKDAsIC0gdGhpcy5DYW52YXMuaGVpZ2h0KiAxLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBVSV9NT1ZFX0RJUkVDVElPTi5MRUZUOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFZpZXdQb3NpdGlvbiA9IGNjLnYyKHRoaXMuQ2FudmFzLndpZHRoICogMS41LCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNWaWV3UG9zaXRpb24gPSBjYy52MigtIHRoaXMuQ2FudmFzLndpZHRoICogMS41LCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgVUlfTU9WRV9ESVJFQ1RJT04uUklHSFQ6XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Vmlld1Bvc2l0aW9uID0gY2MudjIoLSB0aGlzLkNhbnZhcy53aWR0aCAqIDEuNSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzVmlld1Bvc2l0aW9uID0gY2MudjIodGhpcy5DYW52YXMud2lkdGggKiAxLjUsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tUHJldmlvdXNWaWV3KVxyXG4gICAgICAgICAgICAgICAgICAgIC50byhkdXJhdGlvbiwge3Bvc2l0aW9uOiBwcmV2aW91c1ZpZXdQb3NpdGlvbn0sIHtlYXNpbmd9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMubVByZXZpb3VzVmlldy5hY3RpdmUgPSBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubUN1cnJlbnRWaWV3KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXQoe29wYWNpdHkgOjB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5kZWxheSgwKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXQoe3Bvc2l0aW9uIDogY3VycmVudFZpZXdQb3NpdGlvbiwgb3BhY2l0eSA6IDI1NX0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKGR1cmF0aW9uLCB7cG9zaXRpb246IGNjLlZlYzMuWkVST30sIHtlYXNpbmd9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhazsgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFVJX1NIT1dfRUZGRUNULlNDQUxFOlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1DdXJyZW50Vmlldy5zZXRTY2FsZShjYy5WZWMyLlpFUk8pO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tUHJldmlvdXNWaWV3KVxyXG4gICAgICAgICAgICAgICAgICAgIC50byhkdXJhdGlvbiwge3NjYWxlOiAwfSwge2Vhc2luZ30pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5tUHJldmlvdXNWaWV3LmFjdGl2ZSA9IGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tQ3VycmVudFZpZXcpXHJcbiAgICAgICAgICAgICAgICAgICAgLmRlbGF5KGR1cmF0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgIC50byhkdXJhdGlvbiwge3NjYWxlOiAxfSwge2Vhc2luZ30pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhazsgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFVJX1NIT1dfRUZGRUNULkZBREU6XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubVByZXZpb3VzVmlldylcclxuICAgICAgICAgICAgICAgICAgICAudG8oZHVyYXRpb24sIHtzY2FsZTogdGhpcy5tUHJldmlvdXNWaWV3LnNjYWxlWH0sIHtwcm9ncmVzczogKHN0YXJ0LCBlbmQsIGN1cnJlbnQsIHJhdGlvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVByZXZpb3VzVmlldy5vcGFjaXR5ID0gKDEgLSByYXRpbykgKiAyNTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGFydCArIChlbmQgLSBzdGFydCkgKiByYXRpbztcclxuICAgICAgICAgICAgICAgICAgICB9fSlcclxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLm1QcmV2aW91c1ZpZXcuYWN0aXZlID0gZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1DdXJyZW50VmlldylcclxuICAgICAgICAgICAgICAgICAgICAuZGVsYXkoZHVyYXRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKGR1cmF0aW9uLCB7c2NhbGU6IHRoaXMubUN1cnJlbnRWaWV3LnNjYWxlWH0sIHtwcm9ncmVzczogKHN0YXJ0LCBlbmQsIGN1cnJlbnQsIHJhdGlvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubUN1cnJlbnRWaWV3Lm9wYWNpdHkgPSByYXRpbyAqIDI1NTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXJ0ICsgKGVuZCAtIHN0YXJ0KSAqIHJhdGlvO1xyXG4gICAgICAgICAgICAgICAgICAgIH19KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7ICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICAgIFxyXG4gICAgICAgIHRoaXMubUN1cnJlbnRWaWV3LmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcbn1cclxuIl19