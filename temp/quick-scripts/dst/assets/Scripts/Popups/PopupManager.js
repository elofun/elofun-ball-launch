
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Popups/PopupManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUG9wdXBzXFxQb3B1cE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBDQUFxQztBQUNyQyx3REFBbUQ7QUFFN0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsSUFBWSxNQUdYO0FBSEQsV0FBWSxNQUFNO0FBR2xCLENBQUMsRUFIVyxNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUFHakI7QUFFRDtJQUEwQyxnQ0FBNkI7SUFBdkU7UUFBQSxxRUF1R0M7UUFyRzhCLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBQ2hDLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBQy9CLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzFCLGtCQUFZLEdBQXFCLEVBQUUsQ0FBQzs7SUFrR3JFLENBQUM7SUE5RlUsaUJBQUksR0FBWCxVQUFZLFNBQWlCLEVBQUUsS0FBWTtRQUFaLHNCQUFBLEVBQUEsWUFBWTtRQUV2QyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksS0FBSyxFQUNUO1lBQ0ksUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM5QixRQUFRLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDM0M7SUFDTCxDQUFDO0lBRU0sZ0JBQUcsR0FBVjtRQUVJLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBSSxRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUM1QztZQUNJLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN0RixRQUFRLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMvRSxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNsQztJQUNMLENBQUM7SUFFTSxpQkFBSSxHQUFYLFVBQVksU0FBaUI7UUFFekIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNyRSxJQUFJLEtBQUssRUFDVDtZQUNJLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQztJQUVNLHFCQUFRLEdBQWYsVUFBZ0IsU0FBaUI7UUFFN0IsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN0RSxJQUFJLEtBQUssRUFDVDtZQUNJLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsT0FBTyxRQUFRLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBQ08sOEJBQU8sR0FBZixVQUFnQixNQUFlLEVBQUUsS0FBYztRQUEvQyxpQkF1QkM7UUFyQkcsSUFBSSxDQUFDLE1BQU0sRUFDWDtZQUNJLElBQUksWUFBWSxHQUFHLENBQUMsV0FBVyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQTtZQUN0RCxJQUFJLE1BQU0sR0FBRyxZQUFZLENBQUMsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNyRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztpQkFDVixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDO2lCQUM1QyxJQUFJLENBQUM7Z0JBRUYsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDeEIsc0VBQXNFO1lBQzFFLENBQUMsQ0FBQztpQkFDRCxLQUFLLEVBQUUsQ0FBQTtTQUNmO2FBQ0Q7WUFDSSxJQUFJLFlBQVksR0FBRyxDQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUE7WUFDdEQsSUFBSSxNQUFNLEdBQUcsWUFBWSxDQUFDLGdCQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDckUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNqQixFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztpQkFDVixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDO2lCQUMxQyxLQUFLLEVBQUUsQ0FBQTtTQUNmO0lBQ0wsQ0FBQztJQUVPLCtCQUFRLEdBQWhCLFVBQWlCLEtBQWM7UUFFM0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTyxrQ0FBVyxHQUFuQixVQUFvQixLQUFjO1FBRTlCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsNkJBQU0sR0FBTjtRQUVJLGlCQUFNLE1BQU0sV0FBRSxDQUFDO1FBQ2YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUNqRDtZQUNJLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEU7SUFDTCxDQUFDO0lBRUQsNEJBQUssR0FBTDtJQUdBLENBQUM7SUFuR2tCO1FBQWxCLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUF5QztJQUN4QztRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3REFBd0M7SUFDdkM7UUFBbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQXFDO0lBQ2xDO1FBQXBCLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUE2QztJQUxoRCxZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBdUdoQztJQUFELG1CQUFDO0NBdkdELEFBdUdDLENBdkd5Qyx1QkFBYSxFQUFnQixHQXVHdEU7a0JBdkdvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlbHBlciBmcm9tIFwiLi4vdXRpbHMvSGVscGVyXCI7XHJcbmltcG9ydCBTaW5nbGV0b25Ob2RlIGZyb20gXCIuLi91dGlscy9TaW5nbGV0b25Ob2RlXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5leHBvcnQgZW51bSBQb3B1cHNcclxue1xyXG4gICAgXHJcbn1cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBNYW5hZ2VyIGV4dGVuZHMgU2luZ2xldG9uTm9kZTxQb3B1cE1hbmFnZXI+KCkge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBwcml2YXRlIFBvcHVwQmFja2dyb3VuZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgcHJpdmF0ZSBQb3B1cENvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgcHJpdmF0ZSBTaG93blBvcHVwczogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKSBwcml2YXRlIFBvcHVwUHJlZmFiczogQXJyYXk8Y2MuUHJlZmFiPiA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgbVNob3dDYWxsYmFjaztcclxuICAgIHByaXZhdGUgbUhpZGVDYWxsYmFjaztcclxuICAgIHN0YXRpYyBwdXNoKHBvcHVwTmFtZTogUG9wdXBzLCB1c2VCZyA9IHRydWUpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLkluc3RhbmNlO1xyXG4gICAgICAgIGNvbnN0IHBvcHVwID0gaW5zdGFuY2UuUG9wdXBDb250YWluZXIuZ2V0Q2hpbGRCeU5hbWUoUG9wdXBzW3BvcHVwTmFtZV0pO1xyXG4gICAgICAgIGlmIChwb3B1cClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLnVzZVBvcHVwKHBvcHVwKTtcclxuICAgICAgICAgICAgaW5zdGFuY2UuYW5pbWF0ZSh0cnVlLCBwb3B1cCk7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLlBvcHVwQmFja2dyb3VuZC5hY3RpdmUgPSB1c2VCZztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHBvcCgpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLkluc3RhbmNlO1xyXG4gICAgICAgIGlmIChpbnN0YW5jZS5TaG93blBvcHVwcy5jaGlsZHJlbi5sZW5ndGggPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgcG9wdXAgPSBpbnN0YW5jZS5TaG93blBvcHVwcy5jaGlsZHJlbltpbnN0YW5jZS5TaG93blBvcHVwcy5jaGlsZHJlbi5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgaW5zdGFuY2UuUG9wdXBCYWNrZ3JvdW5kLmFjdGl2ZSA9IGluc3RhbmNlLlNob3duUG9wdXBzLmNoaWxkcmVuLmxlbmd0aCAtIDEgPiAwO1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5hbmltYXRlKGZhbHNlLCBwb3B1cCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoaWRlKHBvcHVwTmFtZTogUG9wdXBzKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5JbnN0YW5jZTtcclxuICAgICAgICBjb25zdCBwb3B1cCA9IGluc3RhbmNlLlNob3duUG9wdXBzLmdldENoaWxkQnlOYW1lKFBvcHVwc1twb3B1cE5hbWVdKTtcclxuICAgICAgICBpZiAocG9wdXApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5hbmltYXRlKGZhbHNlLCBwb3B1cCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRQb3B1cChwb3B1cE5hbWU6IFBvcHVwcylcclxuICAgIHtcclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuSW5zdGFuY2U7XHJcbiAgICAgICAgbGV0IHBvcHVwID0gaW5zdGFuY2UuUG9wdXBDb250YWluZXIuZ2V0Q2hpbGRCeU5hbWUoUG9wdXBzW3BvcHVwTmFtZV0pO1xyXG4gICAgICAgIGlmIChwb3B1cClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBwb3B1cDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLlNob3duUG9wdXBzLmdldENoaWxkQnlOYW1lKFBvcHVwc1twb3B1cE5hbWVdKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgYW5pbWF0ZShpc1Nob3c6IGJvb2xlYW4sIHBvcHVwOiBjYy5Ob2RlKVxyXG4gICAge1xyXG4gICAgICAgIGlmICghaXNTaG93KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJhbmRvbUVhc2luZyA9IFsnYm91bmNlT3V0JywgJ3F1YWRPdXQnLCAnYmFja091dCddXHJcbiAgICAgICAgICAgIGxldCBlYXNpbmcgPSByYW5kb21FYXNpbmdbSGVscGVyLlJhbmRJbnQoMCwgcmFuZG9tRWFzaW5nLmxlbmd0aCAtIDEpXVxyXG4gICAgICAgICAgICBjYy50d2Vlbihwb3B1cClcclxuICAgICAgICAgICAgICAgIC50bygwLjMsIHsgc2NhbGU6IDAsIH0sIHsgZWFzaW5nOiAncXVhZEluJyB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJldHVyblBvcHVwKHBvcHVwKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLlBvcHVwQmFja2dyb3VuZC5hY3RpdmUgPSB0aGlzLlNob3duUG9wdXBzLmNoaWxkcmVuLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICB9IGVsc2UgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmFuZG9tRWFzaW5nID0gWydib3VuY2VPdXQnLCAncXVhZE91dCcsICdiYWNrT3V0J11cclxuICAgICAgICAgICAgbGV0IGVhc2luZyA9IHJhbmRvbUVhc2luZ1tIZWxwZXIuUmFuZEludCgwLCByYW5kb21FYXNpbmcubGVuZ3RoIC0gMSldXHJcbiAgICAgICAgICAgIHBvcHVwLnNldFNjYWxlKDApXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHBvcHVwKVxyXG4gICAgICAgICAgICAgICAgLmJ5KDAuMywgeyBzY2FsZTogMSwgfSwgeyBlYXNpbmc6IGVhc2luZyB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1c2VQb3B1cChwb3B1cDogY2MuTm9kZSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLlBvcHVwQ29udGFpbmVyLnJlbW92ZUNoaWxkKHBvcHVwLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5TaG93blBvcHVwcy5hZGRDaGlsZChwb3B1cCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXR1cm5Qb3B1cChwb3B1cDogY2MuTm9kZSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLlNob3duUG9wdXBzLnJlbW92ZUNoaWxkKHBvcHVwLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5Qb3B1cENvbnRhaW5lci5hZGRDaGlsZChwb3B1cCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKClcclxuICAgIHtcclxuICAgICAgICBzdXBlci5vbkxvYWQoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuUG9wdXBQcmVmYWJzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5Qb3B1cENvbnRhaW5lci5hZGRDaGlsZChjYy5pbnN0YW50aWF0ZSh0aGlzLlBvcHVwUHJlZmFic1tpXSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhcnQoKVxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuIl19