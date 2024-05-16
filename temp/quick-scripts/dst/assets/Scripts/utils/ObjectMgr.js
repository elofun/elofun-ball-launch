
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/utils/ObjectMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dbc77ws+sxPlY9zPANdJYTf', 'ObjectMgr');
// Scripts/utils/ObjectMgr.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ObjectMgr = /** @class */ (function (_super) {
    __extends(ObjectMgr, _super);
    function ObjectMgr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObjectMgr.prototype.load = function (prefab, poolSize) {
        // for (let i = 0; i < poolSize; i++) {
        //     const node = cc.instantiate(prefab);
        //     // node.getComponent(GameObject).load();
        //     node.active = false;
        //     this.node.addChild(node);
        // }
        // this.hide();
    };
    ObjectMgr.prototype.init = function () {
        this.hide();
    };
    ObjectMgr.prototype.hide = function () {
        for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
            var item = _a[_i];
            item.active = false;
        }
    };
    ObjectMgr.prototype.spawn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    ObjectMgr.prototype.getAvailable = function () {
        for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
            var item = _a[_i];
            if (!item.active) {
                return item;
            }
        }
        return null;
    };
    ObjectMgr = __decorate([
        ccclass
    ], ObjectMgr);
    return ObjectMgr;
}(cc.Component));
exports.default = ObjectMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcdXRpbHNcXE9iamVjdE1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQUFuRDs7SUFrQ0EsQ0FBQztJQWpDRyx3QkFBSSxHQUFKLFVBQUssTUFBaUIsRUFBRSxRQUFnQjtRQUNwQyx1Q0FBdUM7UUFDdkMsMkNBQTJDO1FBQzNDLCtDQUErQztRQUMvQywyQkFBMkI7UUFDM0IsZ0NBQWdDO1FBQ2hDLElBQUk7UUFDSixlQUFlO0lBQ25CLENBQUM7SUFFRCx3QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCx3QkFBSSxHQUFKO1FBQ0ksS0FBaUIsVUFBa0IsRUFBbEIsS0FBQSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBbEIsY0FBa0IsRUFBbEIsSUFBa0IsRUFBRTtZQUFoQyxJQUFJLElBQUksU0FBQTtZQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQUVELHlCQUFLLEdBQUw7UUFBTSxjQUFPO2FBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztZQUFQLHlCQUFPOztJQUViLENBQUM7SUFFRCxnQ0FBWSxHQUFaO1FBQ0ksS0FBaUIsVUFBa0IsRUFBbEIsS0FBQSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBbEIsY0FBa0IsRUFBbEIsSUFBa0IsRUFBRTtZQUFoQyxJQUFJLElBQUksU0FBQTtZQUNULElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNkLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7U0FDSjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFqQ2dCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FrQzdCO0lBQUQsZ0JBQUM7Q0FsQ0QsQUFrQ0MsQ0FsQ3NDLEVBQUUsQ0FBQyxTQUFTLEdBa0NsRDtrQkFsQ29CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0TWdyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIGxvYWQocHJlZmFiOiBjYy5QcmVmYWIsIHBvb2xTaXplOiBudW1iZXIpIHtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHBvb2xTaXplOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgY29uc3Qgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgLy8gICAgIC8vIG5vZGUuZ2V0Q29tcG9uZW50KEdhbWVPYmplY3QpLmxvYWQoKTtcclxuICAgICAgICAvLyAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLm5vZGUuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3Bhd24oLi4uYXJncykge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRBdmFpbGFibGUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLm5vZGUuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgaWYgKCFpdGVtLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==