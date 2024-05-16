"use strict";
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