"use strict";
cc._RF.push(module, '30835F+tMxLu4+MZ1zfvBzu', 'PopupManager');
// Scripts/Popups/PopupManager.ts

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
exports.Popups = void 0;
var Helper_1 = require("../utils/Helper");
var SingletonNode_1 = require("../utils/SingletonNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Popups;
(function (Popups) {
})(Popups = exports.Popups || (exports.Popups = {}));
var PopupManager = /** @class */ (function (_super) {
    __extends(PopupManager, _super);
    function PopupManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PopupBackground = null;
        _this.PopupContainer = null;
        _this.ShownPopups = null;
        _this.PopupPrefabs = [];
        return _this;
    }
    PopupManager.push = function (popupName, useBg) {
        if (useBg === void 0) { useBg = true; }
        var instance = this.Instance;
        var popup = instance.PopupContainer.getChildByName(Popups[popupName]);
        if (popup) {
            instance.usePopup(popup);
            instance.animate(true, popup);
            instance.PopupBackground.active = useBg;
        }
    };
    PopupManager.pop = function () {
        var instance = this.Instance;
        if (instance.ShownPopups.children.length > 0) {
            var popup = instance.ShownPopups.children[instance.ShownPopups.children.length - 1];
            instance.PopupBackground.active = instance.ShownPopups.children.length - 1 > 0;
            instance.animate(false, popup);
        }
    };
    PopupManager.hide = function (popupName) {
        var instance = this.Instance;
        var popup = instance.ShownPopups.getChildByName(Popups[popupName]);
        if (popup) {
            instance.animate(false, popup);
        }
    };
    PopupManager.getPopup = function (popupName) {
        var instance = this.Instance;
        var popup = instance.PopupContainer.getChildByName(Popups[popupName]);
        if (popup) {
            return popup;
        }
        return instance.ShownPopups.getChildByName(Popups[popupName]);
    };
    PopupManager.prototype.animate = function (isShow, popup) {
        var _this = this;
        if (!isShow) {
            var randomEasing = ['bounceOut', 'quadOut', 'backOut'];
            var easing = randomEasing[Helper_1.default.RandInt(0, randomEasing.length - 1)];
            cc.tween(popup)
                .to(0.3, { scale: 0, }, { easing: 'quadIn' })
                .call(function () {
                _this.returnPopup(popup);
                // this.PopupBackground.active = this.ShownPopups.children.length > 0;
            })
                .start();
        }
        else {
            var randomEasing = ['bounceOut', 'quadOut', 'backOut'];
            var easing = randomEasing[Helper_1.default.RandInt(0, randomEasing.length - 1)];
            popup.setScale(0);
            cc.tween(popup)
                .by(0.3, { scale: 1, }, { easing: easing })
                .start();
        }
    };
    PopupManager.prototype.usePopup = function (popup) {
        this.PopupContainer.removeChild(popup, false);
        this.ShownPopups.addChild(popup);
    };
    PopupManager.prototype.returnPopup = function (popup) {
        this.ShownPopups.removeChild(popup, false);
        this.PopupContainer.addChild(popup);
    };
    PopupManager.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        for (var i = 0; i < this.PopupPrefabs.length; i++) {
            this.PopupContainer.addChild(cc.instantiate(this.PopupPrefabs[i]));
        }
    };
    PopupManager.prototype.start = function () {
    };
    __decorate([
        property(cc.Node)
    ], PopupManager.prototype, "PopupBackground", void 0);
    __decorate([
        property(cc.Node)
    ], PopupManager.prototype, "PopupContainer", void 0);
    __decorate([
        property(cc.Node)
    ], PopupManager.prototype, "ShownPopups", void 0);
    __decorate([
        property(cc.Prefab)
    ], PopupManager.prototype, "PopupPrefabs", void 0);
    PopupManager = __decorate([
        ccclass
    ], PopupManager);
    return PopupManager;
}(SingletonNode_1.default()));
exports.default = PopupManager;

cc._RF.pop();