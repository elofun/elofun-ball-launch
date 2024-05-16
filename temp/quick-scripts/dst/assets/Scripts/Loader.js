
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Loader.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1b8496GkHdFirfeeZ/dlzhB', 'Loader');
// Scripts/Loader.ts

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
var urlParams = new URLSearchParams(window.location.search);
window.language = urlParams.get('language') || 'vi';
cc.assetManager.force = true;
cc.assetManager.loadBundle(window.language, null, function (err, bundle) {
    console.log(bundle);
});
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.SystemPrefabs = [];
        _this.PlaceHolderPrefabs = [];
        return _this;
    }
    Loader.prototype.onLoad = function () {
        for (var i = 0; i < this.SystemPrefabs.length; i++) {
            this.node.addChild(cc.instantiate(this.SystemPrefabs[i]));
        }
        for (var i = 0; i < this.PlaceHolderPrefabs.length; i++) {
            this.node.addChild(cc.instantiate(this.PlaceHolderPrefabs[i]));
        }
    };
    __decorate([
        property(cc.Prefab)
    ], Loader.prototype, "SystemPrefabs", void 0);
    __decorate([
        property(cc.Prefab)
    ], Loader.prototype, "PlaceHolderPrefabs", void 0);
    Loader = __decorate([
        ccclass
    ], Loader);
    return Loader;
}(cc.Component));
exports.default = Loader;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU0sU0FBUyxHQUFHLElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDOUQsTUFBTSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQztBQUNwRCxFQUFFLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDN0IsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsVUFBQyxHQUFHLEVBQUUsTUFBTTtJQUUxRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3hCLENBQUMsQ0FBQyxDQUFBO0FBRUksSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUFZQztRQVhnQyxtQkFBYSxHQUFxQixFQUFFLENBQUM7UUFDckMsd0JBQWtCLEdBQXFCLEVBQUUsQ0FBQzs7SUFVM0UsQ0FBQztJQVJHLHVCQUFNLEdBQU47UUFDSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM3RDtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3JELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsRTtJQUNMLENBQUM7SUFWb0I7UUFBcEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aURBQThDO0lBQzdDO1FBQXBCLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUFtRDtJQUZ0RCxNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBWTFCO0lBQUQsYUFBQztDQVpELEFBWUMsQ0FabUMsRUFBRSxDQUFDLFNBQVMsR0FZL0M7a0JBWm9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG53aW5kb3cubGFuZ3VhZ2UgPSB1cmxQYXJhbXMuZ2V0KCdsYW5ndWFnZScpIHx8ICd2aSc7XHJcbmNjLmFzc2V0TWFuYWdlci5mb3JjZSA9IHRydWU7XHJcbmNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKHdpbmRvdy5sYW5ndWFnZSwgbnVsbCwgKGVyciwgYnVuZGxlKSA9PiBcclxue1xyXG4gICAgY29uc29sZS5sb2coYnVuZGxlKTtcclxufSlcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYikgcHJpdmF0ZSBTeXN0ZW1QcmVmYWJzOiBBcnJheTxjYy5QcmVmYWI+ID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKSBwcml2YXRlIFBsYWNlSG9sZGVyUHJlZmFiczogQXJyYXk8Y2MuUHJlZmFiPiA9IFtdO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuU3lzdGVtUHJlZmFicy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoY2MuaW5zdGFudGlhdGUodGhpcy5TeXN0ZW1QcmVmYWJzW2ldKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5QbGFjZUhvbGRlclByZWZhYnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGNjLmluc3RhbnRpYXRlKHRoaXMuUGxhY2VIb2xkZXJQcmVmYWJzW2ldKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19