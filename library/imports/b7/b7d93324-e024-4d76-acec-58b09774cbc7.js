"use strict";
cc._RF.push(module, 'b7d93Mk4CRNdqzsWLCXdMvH', 'PeerClientManager');
// Scripts/PeerComponent/PeerClientManager.ts

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
var PeerDefine_1 = require("./PeerDefine");
var PeerManager_1 = require("./PeerManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PeerClientManager = /** @class */ (function (_super) {
    __extends(PeerClientManager, _super);
    function PeerClientManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.masterSIP = 0;
        _this.currentID = 0;
        _this.currentMainPlayerID = 0;
        _this.isMainPlayer = false;
        _this.isConnected = false;
        return _this;
    }
    PeerClientManager_1 = PeerClientManager;
    PeerClientManager.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        PeerClientManager_1.Instance = this;
        var urlParams = new URLSearchParams(window.location.search);
        this.masterSIP = parseInt(urlParams.get('sip')) || 0;
        console.log("masterSIP: " + this.masterSIP);
        delete this.setConnectedCB;
        delete this.setDisConnectCB;
        delete this.getClients;
    };
    PeerClientManager.prototype.setClientConnectedCB = function (cb) {
        this.connectedCB = cb;
    };
    PeerClientManager.prototype.setClientDisconnectCB = function (cb) {
        this.disconnectCB = cb;
    };
    PeerClientManager.prototype.IsConnected = function () {
        return this.isConnected;
    };
    PeerClientManager.prototype.IsMainPlayer = function () {
        return this.isMainPlayer;
    };
    PeerClientManager.prototype.update = function (dt) {
        _super.prototype.update.call(this, dt);
    };
    PeerClientManager.prototype.init = function () {
        _super.prototype.init.call(this);
        // this.connect()
    };
    PeerClientManager.prototype.connect = function () {
        var _this = this;
        var interval = setInterval(function () {
            if (_this.isInitalized) {
                clearInterval(interval);
                var localMasterSIP = cc.sys.localStorage.getItem("masterSIP");
                if (localMasterSIP && localMasterSIP == _this.masterSIP && !_this.isConnected) {
                    _this.reconnect(function (args) {
                        cc.sys.localStorage.setItem("localSIP", _this.sip);
                        switch (args.currentStage) {
                            case PeerDefine_1.PeerStage.PLAYING:
                                //TO DO
                                break;
                            case PeerDefine_1.PeerStage.WAITING:
                                //TO DO
                                break;
                        }
                    });
                    setTimeout(function () {
                        if (!_this.isConnected) {
                            _this.disconnectCB && _this.disconnectCB();
                            _this.clientTimeoutPingPong && clearTimeout(_this.clientTimeoutPingPong);
                            _this.clientIntervalPing && clearInterval(_this.clientIntervalPing);
                            _this.isConnected = false;
                        }
                    }, PeerDefine_1.default.TIMEOUT_RETRY);
                    return;
                }
                cc.sys.localStorage.setItem("localSIP", _this.sip);
                cc.sys.localStorage.setItem("masterSIP", _this.masterSIP);
                var connectMessage = {
                    phase: PeerDefine_1.PeerPhase.CONNECT,
                    action: PeerDefine_1.PeerActionConnect.CONNECTING,
                    customParam: ""
                };
                _this.sendMessage(connectMessage);
                setTimeout(function () {
                    if (!_this.isConnected) {
                        _this.disconnectCB && _this.disconnectCB();
                        _this.clientTimeoutPingPong && clearTimeout(_this.clientTimeoutPingPong);
                        _this.clientIntervalPing && clearInterval(_this.clientIntervalPing);
                        _this.isConnected = false;
                    }
                }, PeerDefine_1.default.TIMEOUT_RETRY);
            }
        }, 1000);
    };
    PeerClientManager.prototype.reconnect = function (cb) {
        if (cb === void 0) { cb = null; }
        cc.log("reconnect");
        this.reconnectCB = cb;
        var localSIP = cc.sys.localStorage.getItem("localSIP") | 0;
        var connectMessage = {
            phase: PeerDefine_1.PeerPhase.CONNECT,
            action: PeerDefine_1.PeerActionConnect.CONNECT_RETRY,
            customParam: "" + localSIP
        };
        this.sendMessage(connectMessage);
    };
    PeerClientManager.prototype.sendMessage = function (msg) {
        if (this.masterSIP) {
            this.peer.sendTo(this.masterSIP, JSON.stringify(msg));
        }
    };
    PeerClientManager.prototype.onRecievedMessage = function (msg, client) {
        var args = JSON.parse(msg);
        if (args.phase != PeerDefine_1.PeerPhase.CONNECT) {
            console.log(msg);
        }
        if (args.phase == PeerDefine_1.PeerPhase.CONNECT) {
            switch (args.action) {
                case PeerDefine_1.PeerActionConnect.CONNECTED:
                    {
                        this.isMainPlayer = args.customParam == "mainPlayer";
                        this.isConnected = true;
                        this.currentID = args.currentID;
                        this.currentMainPlayerID = args.currentMainPlayerID;
                        this.connectedCB && this.connectedCB();
                        this.setClientPing();
                        PeerManager_1.default.emit(PeerManager_1.default.EventSwitchMainPlayer, this.isMainPlayer);
                        break;
                    }
                case PeerDefine_1.PeerActionConnect.CONNECT_FAILED:
                    {
                        this.isConnected = false;
                        this.disconnectCB && this.disconnectCB();
                        break;
                    }
                case PeerDefine_1.PeerActionConnect.SWITCH_MAINPLAYER:
                    {
                        this.isMainPlayer = this.currentID == args.currentMainPlayerID;
                        this.currentMainPlayerID = args.currentMainPlayerID;
                        PeerManager_1.default.emit(PeerManager_1.default.EventSwitchMainPlayer, this.isMainPlayer);
                        break;
                    }
                case PeerDefine_1.PeerActionConnect.PING_PONG:
                    {
                        this.clientUpdatePingPong();
                        break;
                    }
                case PeerDefine_1.PeerActionConnect.CONNECT_RETRY_SUCCESS:
                    {
                        this.isMainPlayer = args.customParam == "mainPlayer";
                        this.isConnected = true;
                        this.currentID = args.currentID;
                        this.currentMainPlayerID = args.currentMainPlayerID;
                        this.reconnectCB && this.reconnectCB(args);
                        this.reconnectCB = null;
                        this.setClientPing();
                        PeerManager_1.default.emit(PeerManager_1.default.EventSwitchMainPlayer, this.isMainPlayer);
                        cc.log("reconnect success");
                        break;
                    }
            }
            return;
        }
        PeerManager_1.default.emit(PeerManager_1.default.EventReceivedMessage, args);
        this.onmessage && this.onmessage(msg);
    };
    PeerClientManager.prototype.setClientPing = function () {
        var _this = this;
        this.clientIntervalPing = setInterval(function () {
            var pingMsg = {
                action: PeerDefine_1.PeerActionConnect.PING_PONG,
                phase: PeerDefine_1.PeerPhase.CONNECT,
                customParam: "Ping"
            };
            _this.sendMessage(pingMsg);
        }, PeerDefine_1.default.PING_TIMER);
    };
    PeerClientManager.prototype.clientUpdatePingPong = function () {
        var _this = this;
        if (this.clientTimeoutPingPong)
            clearTimeout(this.clientTimeoutPingPong);
        this.clientTimeoutPingPong = setTimeout(function () {
            _this.disconnectCB && _this.disconnectCB();
            clearTimeout(_this.clientTimeoutPingPong);
            clearInterval(_this.clientIntervalPing);
            _this.isConnected = false;
            console.log("disconnect");
        }, PeerDefine_1.default.TIMEOUT_DISCONNECT);
    };
    var PeerClientManager_1;
    PeerClientManager.Instance = null;
    PeerClientManager = PeerClientManager_1 = __decorate([
        ccclass
    ], PeerClientManager);
    return PeerClientManager;
}(PeerManager_1.default));
exports.default = PeerClientManager;

cc._RF.pop();