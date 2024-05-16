
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/common/Events.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ea18dqOuq1Cx7O+U51FB9JD', 'Events');
// Scripts/common/Events.ts

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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var SingletonNode_1 = require("../utils/SingletonNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Events.registerEvent = function (name, callback) {
        this.Instance.node.on(name, callback);
    };
    Events.emit = function (name) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (_a = this.Instance.node).emit.apply(_a, __spreadArrays([name], args));
    };
    Events.EventLanguageChanged = 'EventLanguageChanged';
    Events = __decorate([
        ccclass
    ], Events);
    return Events;
}(SingletonNode_1.default()));
exports.default = Events;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcY29tbW9uXFxFdmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUFtRDtBQUU3QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQywwQkFBdUI7SUFBM0Q7O0lBV0EsQ0FBQztJQVBVLG9CQUFhLEdBQXBCLFVBQXFCLElBQVksRUFBRSxRQUFrQjtRQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTSxXQUFJLEdBQVgsVUFBWSxJQUFZOztRQUFFLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAsNkJBQU87O1FBQzdCLENBQUEsS0FBQSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQSxDQUFDLElBQUksMkJBQUMsSUFBSSxHQUFLLElBQUksR0FBRTtJQUMzQyxDQUFDO0lBUk0sMkJBQW9CLEdBQVcsc0JBQXNCLENBQUM7SUFGNUMsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQVcxQjtJQUFELGFBQUM7Q0FYRCxBQVdDLENBWG1DLHVCQUFhLEVBQVUsR0FXMUQ7a0JBWG9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2luZ2xldG9uTm9kZSBmcm9tIFwiLi4vdXRpbHMvU2luZ2xldG9uTm9kZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50cyBleHRlbmRzIFNpbmdsZXRvbk5vZGU8RXZlbnRzPigpXHJcbntcclxuICAgIHN0YXRpYyBFdmVudExhbmd1YWdlQ2hhbmdlZDogc3RyaW5nID0gJ0V2ZW50TGFuZ3VhZ2VDaGFuZ2VkJztcclxuXHJcbiAgICBzdGF0aWMgcmVnaXN0ZXJFdmVudChuYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbil7XHJcbiAgICAgICAgdGhpcy5JbnN0YW5jZS5ub2RlLm9uKG5hbWUsIGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZW1pdChuYW1lOiBzdHJpbmcsIC4uLmFyZ3Mpe1xyXG4gICAgICAgIHRoaXMuSW5zdGFuY2Uubm9kZS5lbWl0KG5hbWUsIC4uLmFyZ3MpO1xyXG4gICAgfVxyXG59Il19