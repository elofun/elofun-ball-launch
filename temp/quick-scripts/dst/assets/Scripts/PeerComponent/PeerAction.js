
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/PeerComponent/PeerAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1c65drFRtpG/LO3xlybZ0cn', 'PeerAction');
// Scripts/PeerComponent/PeerAction.ts

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
exports.PeerType = void 0;
var PeerClientManager_1 = require("./PeerClientManager");
var PeerDefine_1 = require("./PeerDefine");
var PeerManager_1 = require("./PeerManager");
var PeerType;
(function (PeerType) {
    PeerType[PeerType["NONE"] = 0] = "NONE";
    PeerType[PeerType["SEND"] = 1] = "SEND";
    PeerType[PeerType["RECEIVE"] = 2] = "RECEIVE";
})(PeerType = exports.PeerType || (exports.PeerType = {}));
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PeerHandler = /** @class */ (function () {
    function PeerHandler() {
        this.actionName = PeerDefine_1.PeerActionType.NONE;
        this.eventHandler = [];
        this.customMessage = "";
    }
    __decorate([
        property({ type: cc.Enum(PeerDefine_1.PeerActionType) })
    ], PeerHandler.prototype, "actionName", void 0);
    __decorate([
        property(cc.Component.EventHandler)
    ], PeerHandler.prototype, "eventHandler", void 0);
    __decorate([
        property()
    ], PeerHandler.prototype, "customMessage", void 0);
    PeerHandler = __decorate([
        ccclass("PeerHandler")
    ], PeerHandler);
    return PeerHandler;
}());
var PeerAction = /** @class */ (function (_super) {
    __extends(PeerAction, _super);
    function PeerAction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = PeerType.NONE;
        _this.actionPhase = PeerDefine_1.PeerPhase.NONE;
        _this.actionHandler = [];
        _this.actionName = PeerDefine_1.PeerActionType.NONE;
        _this.eventHandler = [];
        _this.customMessage = "";
        _this.playerSIP = null;
        return _this;
    }
    PeerAction.prototype.onLoad = function () {
        // try
        // {
        switch (this.type) {
            case PeerType.NONE:
                break;
            case PeerType.SEND:
                this.node.on(cc.Node.EventType.TOUCH_END, this.hanleSubmit.bind(this));
                break;
            case PeerType.RECEIVE:
                return;
                PeerManager_1.default.registerEvent(PeerManager_1.default.EventReceivedMessage, this.handleMessage.bind(this));
                break;
        }
        // } catch (e) { }
    };
    PeerAction.prototype.hanleSubmit = function () {
        if (!this.node.active)
            return;
        for (var _i = 0, _a = this.eventHandler; _i < _a.length; _i++) {
            var event = _a[_i];
            event && event.emit([]);
        }
        var msg = {
            action: this.actionName,
            phase: this.actionPhase,
            customParam: this.customMessage,
        };
        console.log(this.customMessage);
        if (PeerClientManager_1.default.Instance)
            PeerClientManager_1.default.Instance.sendMessage(msg);
        else if (PeerManager_1.default.Instance)
            PeerManager_1.default.Instance.sendMessageToAll(msg);
    };
    PeerAction.prototype.handleMessage = function (e, client) {
        if (!this.node.active)
            return;
        if (this.playerSIP == null || this.playerSIP == client.remoteSIP) {
            console.log(e);
            if (e.phase == this.actionPhase) {
                for (var _i = 0, _a = this.actionHandler; _i < _a.length; _i++) {
                    var handler = _a[_i];
                    if (handler.actionName == e.action) {
                        for (var _b = 0, _c = handler.eventHandler; _b < _c.length; _b++) {
                            var evt = _c[_b];
                            evt && evt.emit([e]);
                        }
                    }
                }
            }
        }
    };
    __decorate([
        property({ type: cc.Enum(PeerType) })
    ], PeerAction.prototype, "type", void 0);
    __decorate([
        property({ type: cc.Enum(PeerDefine_1.PeerPhase) })
    ], PeerAction.prototype, "actionPhase", void 0);
    __decorate([
        property({
            type: PeerHandler,
            visible: function () {
                return this.type == PeerType.RECEIVE;
            },
        })
    ], PeerAction.prototype, "actionHandler", void 0);
    __decorate([
        property({
            type: cc.Enum(PeerDefine_1.PeerActionType),
            visible: function () {
                return this.type == PeerType.SEND;
            },
        })
    ], PeerAction.prototype, "actionName", void 0);
    __decorate([
        property({
            type: cc.Component.EventHandler,
            visible: function () {
                return this.type == PeerType.SEND;
            },
        })
    ], PeerAction.prototype, "eventHandler", void 0);
    __decorate([
        property({
            visible: function () {
                return this.type == PeerType.SEND;
            },
            type: cc.String,
        })
    ], PeerAction.prototype, "customMessage", void 0);
    PeerAction = __decorate([
        ccclass
    ], PeerAction);
    return PeerAction;
}(cc.Component));
exports.default = PeerAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGVlckNvbXBvbmVudFxcUGVlckFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYseURBQW9EO0FBQ3BELDJDQUF5RDtBQUN6RCw2Q0FBMkQ7QUFFM0QsSUFBWSxRQUlYO0FBSkQsV0FBWSxRQUFRO0lBQ2xCLHVDQUFJLENBQUE7SUFDSix1Q0FBSSxDQUFBO0lBQ0osNkNBQU8sQ0FBQTtBQUNULENBQUMsRUFKVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQUluQjtBQUVLLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQUE7UUFDK0MsZUFBVSxHQUNyRCwyQkFBYyxDQUFDLElBQUksQ0FBQztRQUV0QixpQkFBWSxHQUFxQyxFQUFFLENBQUM7UUFFcEQsa0JBQWEsR0FBVyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQU44QztRQUE1QyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQywyQkFBYyxDQUFDLEVBQUUsQ0FBQzttREFDdEI7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7cURBQ2dCO0lBRXBEO1FBREMsUUFBUSxFQUFFO3NEQUNnQjtJQU52QixXQUFXO1FBRGhCLE9BQU8sQ0FBQyxhQUFhLENBQUM7T0FDakIsV0FBVyxDQU9oQjtJQUFELGtCQUFDO0NBUEQsQUFPQyxJQUFBO0FBRUQ7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFtRkM7UUFsRndDLFVBQUksR0FBYSxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQzlCLGlCQUFXLEdBQ2pE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b3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgUGVlckNsaWVudE1hbmFnZXIgZnJvbSBcIi4vUGVlckNsaWVudE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgUGVlckFjdGlvblR5cGUsIFBlZXJQaGFzZSB9IGZyb20gXCIuL1BlZXJEZWZpbmVcIjtcclxuaW1wb3J0IFBlZXJNYW5hZ2VyLCB7IElEYXRhUmVjZWl2ZWQgfSBmcm9tIFwiLi9QZWVyTWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IGVudW0gUGVlclR5cGUge1xyXG4gIE5PTkUsXHJcbiAgU0VORCxcclxuICBSRUNFSVZFLFxyXG59XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzcyhcIlBlZXJIYW5kbGVyXCIpXHJcbmNsYXNzIFBlZXJIYW5kbGVyIHtcclxuICBAcHJvcGVydHkoeyB0eXBlOiBjYy5FbnVtKFBlZXJBY3Rpb25UeXBlKSB9KSBhY3Rpb25OYW1lOiBQZWVyQWN0aW9uVHlwZSA9XHJcbiAgICBQZWVyQWN0aW9uVHlwZS5OT05FO1xyXG4gIEBwcm9wZXJ0eShjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKVxyXG4gIGV2ZW50SGFuZGxlcjogQXJyYXk8Y2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcj4gPSBbXTtcclxuICBAcHJvcGVydHkoKVxyXG4gIGN1c3RvbU1lc3NhZ2U6IHN0cmluZyA9IFwiXCI7XHJcbn1cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVlckFjdGlvbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KHsgdHlwZTogY2MuRW51bShQZWVyVHlwZSkgfSkgdHlwZTogUGVlclR5cGUgPSBQZWVyVHlwZS5OT05FO1xyXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkVudW0oUGVlclBoYXNlKSB9KSBhY3Rpb25QaGFzZTogUGVlclBoYXNlID1cclxuICAgIFBlZXJQaGFzZS5OT05FO1xyXG4gIEBwcm9wZXJ0eSh7XHJcbiAgICB0eXBlOiBQZWVySGFuZGxlcixcclxuICAgIHZpc2libGU6IGZ1bmN0aW9uICh0aGlzOiBQZWVyQWN0aW9uKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnR5cGUgPT0gUGVlclR5cGUuUkVDRUlWRTtcclxuICAgIH0sXHJcbiAgfSlcclxuICBhY3Rpb25IYW5kbGVyOiBBcnJheTxQZWVySGFuZGxlcj4gPSBbXTtcclxuICBAcHJvcGVydHkoe1xyXG4gICAgdHlwZTogY2MuRW51bShQZWVyQWN0aW9uVHlwZSksXHJcbiAgICB2aXNpYmxlOiBmdW5jdGlvbiAodGhpczogUGVlckFjdGlvbikge1xyXG4gICAgICByZXR1cm4gdGhpcy50eXBlID09IFBlZXJUeXBlLlNFTkQ7XHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgYWN0aW9uTmFtZTogUGVlckFjdGlvblR5cGUgPSBQZWVyQWN0aW9uVHlwZS5OT05FO1xyXG4gIEBwcm9wZXJ0eSh7XHJcbiAgICB0eXBlOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLFxyXG4gICAgdmlzaWJsZTogZnVuY3Rpb24gKHRoaXM6IFBlZXJBY3Rpb24pIHtcclxuICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PSBQZWVyVHlwZS5TRU5EO1xyXG4gICAgfSxcclxuICB9KVxyXG4gIGV2ZW50SGFuZGxlcjogQXJyYXk8Y2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcj4gPSBbXTtcclxuICBAcHJvcGVydHkoe1xyXG4gICAgdmlzaWJsZTogZnVuY3Rpb24gKHRoaXM6IFBlZXJBY3Rpb24pIHtcclxuICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PSBQZWVyVHlwZS5TRU5EO1xyXG4gICAgfSxcclxuICAgIHR5cGU6IGNjLlN0cmluZyxcclxuICB9KVxyXG4gIGN1c3RvbU1lc3NhZ2U6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gIHB1YmxpYyBwbGF5ZXJTSVA6IG51bWJlciA9IG51bGw7XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIC8vIHRyeVxyXG4gICAgLy8ge1xyXG4gICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcclxuICAgICAgY2FzZSBQZWVyVHlwZS5OT05FOlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFBlZXJUeXBlLlNFTkQ6XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5oYW5sZVN1Ym1pdC5iaW5kKHRoaXMpKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBQZWVyVHlwZS5SRUNFSVZFOlxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgICBQZWVyTWFuYWdlci5yZWdpc3RlckV2ZW50KFxyXG4gICAgICAgICAgUGVlck1hbmFnZXIuRXZlbnRSZWNlaXZlZE1lc3NhZ2UsXHJcbiAgICAgICAgICB0aGlzLmhhbmRsZU1lc3NhZ2UuYmluZCh0aGlzKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICAvLyB9IGNhdGNoIChlKSB7IH1cclxuICB9XHJcbiAgaGFubGVTdWJtaXQoKSB7XHJcbiAgICBpZiAoIXRoaXMubm9kZS5hY3RpdmUpIHJldHVybjtcclxuICAgIGZvciAobGV0IGV2ZW50IG9mIHRoaXMuZXZlbnRIYW5kbGVyKSB7XHJcbiAgICAgIGV2ZW50ICYmIGV2ZW50LmVtaXQoW10pO1xyXG4gICAgfVxyXG4gICAgbGV0IG1zZzogSURhdGFSZWNlaXZlZCA9IHtcclxuICAgICAgYWN0aW9uOiB0aGlzLmFjdGlvbk5hbWUsXHJcbiAgICAgIHBoYXNlOiB0aGlzLmFjdGlvblBoYXNlLFxyXG4gICAgICBjdXN0b21QYXJhbTogdGhpcy5jdXN0b21NZXNzYWdlLFxyXG4gICAgfTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuY3VzdG9tTWVzc2FnZSk7XHJcbiAgICBpZiAoUGVlckNsaWVudE1hbmFnZXIuSW5zdGFuY2UpIFBlZXJDbGllbnRNYW5hZ2VyLkluc3RhbmNlLnNlbmRNZXNzYWdlKG1zZyk7XHJcbiAgICBlbHNlIGlmIChQZWVyTWFuYWdlci5JbnN0YW5jZSkgUGVlck1hbmFnZXIuSW5zdGFuY2Uuc2VuZE1lc3NhZ2VUb0FsbChtc2cpO1xyXG4gIH1cclxuICBoYW5kbGVNZXNzYWdlKGU6IElEYXRhUmVjZWl2ZWQsIGNsaWVudCkge1xyXG4gICAgaWYgKCF0aGlzLm5vZGUuYWN0aXZlKSByZXR1cm47XHJcbiAgICBpZiAodGhpcy5wbGF5ZXJTSVAgPT0gbnVsbCB8fCB0aGlzLnBsYXllclNJUCA9PSBjbGllbnQucmVtb3RlU0lQKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICBpZiAoZS5waGFzZSA9PSB0aGlzLmFjdGlvblBoYXNlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaGFuZGxlciBvZiB0aGlzLmFjdGlvbkhhbmRsZXIpIHtcclxuICAgICAgICAgIGlmIChoYW5kbGVyLmFjdGlvbk5hbWUgPT0gZS5hY3Rpb24pIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgZXZ0IG9mIGhhbmRsZXIuZXZlbnRIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgICAgZXZ0ICYmIGV2dC5lbWl0KFtlXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19