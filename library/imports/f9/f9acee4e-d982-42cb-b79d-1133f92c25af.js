"use strict";
cc._RF.push(module, 'f9ace5O2YJCy7edETP5LCWv', 'PeerManager');
// Scripts/PeerComponent/PeerManager.ts

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
var GameDefine_1 = require("../game/GameDefine");
var StageInGame_1 = require("../stage/StageInGame");
var StageLobby_1 = require("../stage/StageLobby");
var StageMgr_1 = require("../stage/StageMgr");
var PeerDefine_1 = require("./PeerDefine");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PeerManager = /** @class */ (function (_super) {
    __extends(PeerManager, _super);
    function PeerManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.peer = null;
        _this.sip = 0;
        _this.clientConnected = new Array(PeerDefine_1.default.MAX_CLIENT);
        _this.arrDisconnectCB = new Array(PeerDefine_1.default.MAX_CLIENT);
        _this.arrConnectedCB = new Array(PeerDefine_1.default.MAX_CLIENT);
        _this.onmessage = null;
        _this.isPlayWithRemote = true;
        _this.isInitalized = false;
        _this.isScriptLoaded = false;
        _this.timeoutPingPong = [];
        _this.currentMainPlayer = -1;
        _this.isPlayingGame = false;
        return _this;
    }
    PeerManager_1 = PeerManager;
    PeerManager.registerEvent = function (name, callback) {
        this.Instance.node.on(name, callback);
    };
    PeerManager.emit = function (name) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (_a = this.Instance.node).emit.apply(_a, __spreadArrays([name], args));
    };
    PeerManager.prototype.loadScript = function (moduleName, cb) {
        function scriptLoaded() {
            document.body.removeChild(domScript);
            domScript.removeEventListener("load", scriptLoaded, false);
            cb && cb();
        }
        var domScript = document.createElement("script");
        domScript.async = true;
        domScript.src = moduleName;
        domScript.addEventListener("load", scriptLoaded, false);
        document.body.appendChild(domScript);
    };
    PeerManager.prototype.onLoad = function () {
        var _this = this;
        PeerManager_1.Instance = this;
        return;
        if (!window.isRelease) {
            this.loadScript("https://fpt.eloplay.vn/peer/peerclient.js", function () {
                _this.isScriptLoaded = true;
            });
        }
        else {
            this.isScriptLoaded = true;
        }
        var getPeerInterval = setInterval(function () {
            if (_this.isInitalized || !_this.isScriptLoaded)
                return;
            if (!_this.peer && window.getPeerClient) {
                _this.peer = window.getPeerClient();
                console.log(_this.peer);
            }
            else if (_this.peer && !_this.sip) {
                _this.sip = _this.peer.getSIP();
            }
            else if (_this.peer && _this.sip && !_this.isInitalized) {
                _this.init();
                clearInterval(getPeerInterval);
            }
        }, 1000);
    };
    PeerManager.prototype.start = function () {
        return;
        this.clientConnected = new Array(PeerDefine_1.default.MAX_CLIENT);
        this.veryfiSIPs = new Array(PeerDefine_1.default.MAX_CLIENT);
    };
    PeerManager.prototype.getSIP = function () {
        return this.sip;
    };
    PeerManager.prototype.update = function (dt) { };
    PeerManager.prototype.getClients = function () {
        return this.clientConnected;
    };
    PeerManager.prototype.setRemoteMode = function (val) {
        if (val === void 0) { val = false; }
        if (val) {
            this.clientConnected[0] = { remoteSIP: 0 };
        }
        else {
            this.clientConnected[0] = null;
        }
        this.isPlayWithRemote = val;
    };
    PeerManager.prototype.getClientConneted = function () {
        var arr = [];
        for (var _i = 0, _a = this.clientConnected; _i < _a.length; _i++) {
            var client = _a[_i];
            if (client || (this.isPlayWithRemote && client == true)) {
                arr.push(client);
            }
        }
        return arr;
    };
    PeerManager.prototype.setConnectedCB = function (clientId, cb // client ID will be from 0
    ) {
        if (clientId < PeerDefine_1.default.MAX_CLIENT) {
            this.arrConnectedCB[clientId] = cb;
        }
    };
    PeerManager.prototype.setDisConnectCB = function (clientId, cb) {
        if (clientId < PeerDefine_1.default.MAX_CLIENT) {
            this.arrDisconnectCB[clientId] = cb;
        }
    };
    PeerManager.prototype.PlayGame = function (value) {
        if (value === void 0) { value = true; }
        this.isPlayingGame = value;
    };
    PeerManager.prototype.init = function () {
        this.isInitalized = true;
        this.peer.on("message", this.onRecievedMessage.bind(this));
        console.log(this.sip);
    };
    PeerManager.prototype.setMessageRecivedCB = function (cb) {
        this.onmessage = cb;
    };
    PeerManager.prototype.connecting = function (client) {
        var indexAvl = this.getSlotAvailble();
        if (indexAvl < 0) {
            var msgFail = {
                action: PeerDefine_1.PeerActionConnect.CONNECT_FAILED,
                phase: PeerDefine_1.PeerPhase.CONNECT,
                customParam: "Connection failed - full slot",
            };
            client.send(JSON.stringify(msgFail));
            return;
        }
        if (this.isPlayingGame) {
            var msgFail = {
                action: PeerDefine_1.PeerActionConnect.CONNECT_FAILED,
                phase: PeerDefine_1.PeerPhase.CONNECT,
                customParam: "game is playing",
            };
            client.send(JSON.stringify(msgFail));
            return;
        }
        if (this.currentMainPlayer == -1) {
            this.currentMainPlayer = indexAvl;
        }
        if (this.isPlayWithRemote)
            this.currentMainPlayer = 0;
        var msgConnected = {
            action: PeerDefine_1.PeerActionConnect.CONNECTED,
            phase: PeerDefine_1.PeerPhase.CONNECT,
            customParam: indexAvl == this.currentMainPlayer
                ? !this.isPlayWithRemote
                    ? "mainPlayer"
                    : "Connection success"
                : "Connection success",
            currentID: indexAvl,
            currentMainPlayerID: this.currentMainPlayer,
        };
        if (this.getClientConneted().length == 0) {
            StageMgr_1.default.show(StageMgr_1.Stages.StageStartGame);
            this.setRemoteMode(false);
            var msg = {
                phase: PeerDefine_1.PeerPhase.START_SCREEN,
                action: PeerDefine_1.PeerActionType.SHOW,
                customParam: "",
            };
            client.send(JSON.stringify(msg));
        }
        this.arrConnectedCB[indexAvl] && this.arrConnectedCB[indexAvl]();
        client.send(JSON.stringify(msgConnected));
        this.clientConnected[indexAvl] = client;
        this.veryfiSIPs[indexAvl] = client.remoteSIP;
        StageLobby_1.default.Instance.setUI(true, indexAvl);
    };
    PeerManager.prototype.onRecievedMessage = function (msg, client) {
        //need to verfify client here
        var args = JSON.parse(msg);
        if (args.phase != PeerDefine_1.PeerPhase.CONNECT) {
            console.log(msg);
        }
        if (args.phase == PeerDefine_1.PeerPhase.CONNECT) {
            switch (args.action) {
                case PeerDefine_1.PeerActionConnect.CONNECTING: {
                    this.connecting(client);
                    return;
                }
                case PeerDefine_1.PeerActionConnect.PING_PONG: {
                    this.updatePingPong(client, args);
                    return;
                }
                case PeerDefine_1.PeerActionConnect.CONNECT_RETRY: {
                    if (this.isPlayingGame) {
                        console.log("reconnect :" + client.remoteSIP);
                        var veryfiSIP = client.remoteSIP;
                        var check = this.veryfiSIPs.includes(veryfiSIP);
                        console.log(check, veryfiSIP, this.veryfiSIPs);
                        if (check) {
                            var indexAvl = this.veryfiSIPs.indexOf(veryfiSIP);
                            this.arrConnectedCB[indexAvl] && this.arrConnectedCB[indexAvl]();
                            this.clientConnected[indexAvl] = client;
                            this.veryfiSIPs[indexAvl] = client.remoteSIP;
                            var msgSuccess = {
                                action: PeerDefine_1.PeerActionConnect.CONNECT_RETRY_SUCCESS,
                                phase: PeerDefine_1.PeerPhase.CONNECT,
                                currentID: indexAvl,
                                currentMainPlayerID: this.currentMainPlayer,
                                customParam: "reconnect success",
                                currentStage: PeerDefine_1.PeerStage.PLAYING,
                            };
                            client.send(JSON.stringify(msgSuccess));
                            StageInGame_1.default.Instance.isGameOver[indexAvl] =
                                StageInGame_1.default.Instance.isDead[indexAvl];
                        }
                        else {
                            var msgFail = {
                                action: PeerDefine_1.PeerActionConnect.CONNECT_FAILED,
                                phase: PeerDefine_1.PeerPhase.CONNECT,
                                customParam: "cannot connect, not current player",
                            };
                            client.send(JSON.stringify(msgFail));
                        }
                    }
                    else {
                        this.connecting(client);
                    }
                    return;
                }
            }
        }
        PeerManager_1.emit(PeerManager_1.EventReceivedMessage, args, client);
        this.onmessage && this.onmessage(msg);
    };
    PeerManager.prototype.getSlotAvailble = function () {
        for (var i = 0; i < this.clientConnected.length; i++) {
            if (!this.clientConnected[i])
                return i;
        }
        return -1;
    };
    PeerManager.prototype.getRemoteSIPAvailable = function (remoteSIP) {
        for (var i = 0; i < this.clientConnected.length; i++) {
            if (this.clientConnected[i] &&
                this.clientConnected[i].remoteSIP == remoteSIP)
                return i;
        }
        return -1;
    };
    PeerManager.prototype.updatePingPong = function (client, msg) {
        var _this = this;
        var id = this.getRemoteSIPAvailable(client.remoteSIP);
        if (id < 0)
            return;
        if (this.timeoutPingPong[id])
            clearTimeout(this.timeoutPingPong[id]);
        this.sendMessage(id, msg);
        this.timeoutPingPong[id] = setTimeout(function () {
            _this.arrDisconnectCB[id] && _this.arrDisconnectCB[id]();
            clearTimeout(_this.timeoutPingPong[id]);
            _this.clientConnected[id] = null;
            StageLobby_1.default.Instance.setUI(false, id);
            if (StageInGame_1.default.Instance.node.active) {
                setTimeout(function () {
                    if (!_this.clientConnected[id]) {
                        var str = "Ng\u01B0\u1EDDi ch\u01A1i " + (id + 1) + " \u0111\u00E3 m\u1EA5t k\u1EBFt n\u1ED1i";
                        StageInGame_1.default.Instance.showConnectMessage(id, str);
                    }
                }, PeerDefine_1.default.TIMEOUT_RETRY);
                if (id != _this.currentMainPlayer) {
                }
            }
            if (_this.isPlayWithRemote)
                return;
            if (id == _this.currentMainPlayer) {
                _this.currentMainPlayer = -1;
                if (_this.getClientConneted().length > 0) {
                    //set Main player here
                    var e = _this.switchMainPlayer(id);
                    if (e) {
                    }
                    else {
                    }
                }
                else {
                    StageMgr_1.default.show(StageMgr_1.Stages.StageQRscan);
                    _this.isPlayWithRemote = true;
                    _this.isPlayingGame = false;
                }
            }
        }, PeerDefine_1.default.TIMEOUT_DISCONNECT);
    };
    PeerManager.prototype.switchMainPlayer = function (previousMainPlayer) {
        for (var _i = 0, _a = this.clientConnected; _i < _a.length; _i++) {
            var client = _a[_i];
            if (client) {
                this.currentMainPlayer = this.clientConnected.indexOf(client);
                var msgConnected = {
                    action: PeerDefine_1.PeerActionConnect.SWITCH_MAINPLAYER,
                    phase: PeerDefine_1.PeerPhase.CONNECT,
                    customParam: "mainPlayer",
                    currentMainPlayerID: this.currentMainPlayer,
                };
                this.sendMessageToAll(msgConnected);
                var str = GameDefine_1.default.player + " " + (previousMainPlayer + 1) + " " + GameDefine_1.default.hasdisconnect + " \n" + GameDefine_1.default.player + " " + (this.currentMainPlayer + 1) + " " + GameDefine_1.default.hosting;
                StageInGame_1.default.Instance.showConnectMessage(previousMainPlayer, str);
                return true;
            }
        }
        return false;
    };
    PeerManager.prototype.sendMessage = function (clientIndex, msg) {
        if (!this.peer)
            return;
        var client = this.clientConnected[clientIndex];
        if (client) {
            this.peer.sendTo(client.remoteSIP, JSON.stringify(msg));
        }
    };
    PeerManager.prototype.sendMessageToAll = function (msg) {
        if (!this.peer)
            return;
        for (var _i = 0, _a = this.clientConnected; _i < _a.length; _i++) {
            var client = _a[_i];
            if (client)
                this.peer.sendTo(client.remoteSIP, JSON.stringify(msg));
        }
    };
    var PeerManager_1;
    PeerManager.Instance = null;
    PeerManager.EventReceivedMessage = "ReceivedMessage";
    PeerManager.EventSwitchMainPlayer = "SwitchMainPlayer";
    PeerManager = PeerManager_1 = __decorate([
        ccclass
    ], PeerManager);
    return PeerManager;
}(cc.Component));
exports.default = PeerManager;

cc._RF.pop();