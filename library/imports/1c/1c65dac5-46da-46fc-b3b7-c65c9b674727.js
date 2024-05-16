"use strict";
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