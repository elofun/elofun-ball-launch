
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/PeerComponent/PeerManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGVlckNvbXBvbmVudFxcUGVlck1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUE0QztBQUM1QyxvREFBK0M7QUFDL0Msa0RBQTZDO0FBQzdDLDhDQUFxRDtBQUVyRCwyQ0FLc0I7QUFhaEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUEwVUM7UUE3VFEsVUFBSSxHQUFRLElBQUksQ0FBQztRQUNqQixTQUFHLEdBQVcsQ0FBQyxDQUFDO1FBQ2hCLHFCQUFlLEdBQVEsSUFBSSxLQUFLLENBQUMsb0JBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4RCxxQkFBZSxHQUFvQixJQUFJLEtBQUssQ0FBQyxvQkFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BFLG9CQUFjLEdBQW9CLElBQUksS0FBSyxDQUFDLG9CQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkUsZUFBUyxHQUFhLElBQUksQ0FBQztRQUMzQixzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFFakMsa0JBQVksR0FBRyxLQUFLLENBQUM7UUFDcEIsb0JBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIscUJBQWUsR0FBUSxFQUFFLENBQUM7UUFDM0IsdUJBQWlCLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDOUIsbUJBQWEsR0FBWSxLQUFLLENBQUM7O0lBaVR6QyxDQUFDO29CQTFVb0IsV0FBVztJQUt2Qix5QkFBYSxHQUFwQixVQUFxQixJQUFZLEVBQUUsUUFBa0I7UUFDbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU0sZ0JBQUksR0FBWCxVQUFZ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SUFKL0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQTBVL0I7SUFBRCxrQkFBQztDQTFVRCxBQTBVQyxDQTFVd0MsRUFBRSxDQUFDLFNBQVMsR0EwVXBEO2tCQTFVb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lRGVmaW5lIGZyb20gXCIuLi9nYW1lL0dhbWVEZWZpbmVcIjtcclxuaW1wb3J0IFN0YWdlSW5HYW1lIGZyb20gXCIuLi9zdGFnZS9TdGFnZUluR2FtZVwiO1xyXG5pbXBvcnQgU3RhZ2VMb2JieSBmcm9tIFwiLi4vc3RhZ2UvU3RhZ2VMb2JieVwiO1xyXG5pbXBvcnQgU3RhZ2VNZ3IsIHsgU3RhZ2VzIH0gZnJvbSBcIi4uL3N0YWdlL1N0YWdlTWdyXCI7XHJcbmltcG9ydCBTdGFnZVFSc2NhbiBmcm9tIFwiLi4vc3RhZ2UvU3RhZ2VRUnNjYW5cIjtcclxuaW1wb3J0IFBlZXJEZWZpbmUsIHtcclxuICBQZWVyQWN0aW9uQ29ubmVjdCxcclxuICBQZWVyQWN0aW9uVHlwZSxcclxuICBQZWVyUGhhc2UsXHJcbiAgUGVlclN0YWdlLFxyXG59IGZyb20gXCIuL1BlZXJEZWZpbmVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFSZWNlaXZlZCB7XHJcbiAgcGhhc2U6IFBlZXJQaGFzZTtcclxuICBhY3Rpb246IFBlZXJBY3Rpb25UeXBlIHwgUGVlckFjdGlvbkNvbm5lY3Q7XHJcbiAgY3VzdG9tUGFyYW06IHN0cmluZztcclxuICBjdXJyZW50SUQ/OiBudW1iZXI7XHJcbiAgY3VycmVudENsaWVudElEPzogbnVtYmVyO1xyXG4gIGN1cnJlbnRNYWluUGxheWVySUQ/OiBudW1iZXI7XHJcbiAgY3VycmVudFN0YWdlPzogUGVlclN0YWdlO1xyXG4gIHJhbms/OiBudW1iZXI7XHJcbiAgc2NvcmU/OiBudW1iZXI7XHJcbn1cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlZXJNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBwdWJsaWMgc3RhdGljIEluc3RhbmNlOiBQZWVyTWFuYWdlciA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBFdmVudFJlY2VpdmVkTWVzc2FnZSA9IFwiUmVjZWl2ZWRNZXNzYWdlXCI7XHJcbiAgc3RhdGljIEV2ZW50U3dpdGNoTWFpblBsYXllciA9IFwiU3dpdGNoTWFpblBsYXllclwiO1xyXG4gIHN0YXRpYyByZWdpc3RlckV2ZW50KG5hbWU6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XHJcbiAgICB0aGlzLkluc3RhbmNlLm5vZGUub24obmFtZSwgY2FsbGJhY2spO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGVtaXQobmFtZTogc3RyaW5nLCAuLi5hcmdzKSB7XHJcbiAgICB0aGlzLkluc3RhbmNlLm5vZGUuZW1pdChuYW1lLCAuLi5hcmdzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwZWVyOiBhbnkgPSBudWxsO1xyXG4gIHB1YmxpYyBzaXA6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIGNsaWVudENvbm5lY3RlZDogYW55ID0gbmV3IEFycmF5KFBlZXJEZWZpbmUuTUFYX0NMSUVOVCk7XHJcbiAgcHVibGljIGFyckRpc2Nvbm5lY3RDQjogQXJyYXk8RnVuY3Rpb24+ID0gbmV3IEFycmF5KFBlZXJEZWZpbmUuTUFYX0NMSUVOVCk7XHJcbiAgcHVibGljIGFyckNvbm5lY3RlZENCOiBBcnJheTxGdW5jdGlvbj4gPSBuZXcgQXJyYXkoUGVlckRlZmluZS5NQVhfQ0xJRU5UKTtcclxuICBwdWJsaWMgb25tZXNzYWdlOiBGdW5jdGlvbiA9IG51bGw7XHJcbiAgcHVibGljIGlzUGxheVdpdGhSZW1vdGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBwdWJsaWMgaXNJbml0YWxpemVkID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBpc1NjcmlwdExvYWRlZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgdGltZW91dFBpbmdQb25nOiBhbnkgPSBbXTtcclxuICBwdWJsaWMgY3VycmVudE1haW5QbGF5ZXI6IG51bWJlciA9IC0xO1xyXG4gIHByaXZhdGUgaXNQbGF5aW5nR2FtZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIHZlcnlmaVNJUHM6IG51bWJlcltdO1xyXG5cclxuICBsb2FkU2NyaXB0KG1vZHVsZU5hbWUsIGNiKSB7XHJcbiAgICBmdW5jdGlvbiBzY3JpcHRMb2FkZWQoKSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9tU2NyaXB0KTtcclxuICAgICAgZG9tU2NyaXB0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHNjcmlwdExvYWRlZCwgZmFsc2UpO1xyXG4gICAgICBjYiAmJiBjYigpO1xyXG4gICAgfVxyXG4gICAgdmFyIGRvbVNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcbiAgICBkb21TY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG4gICAgZG9tU2NyaXB0LnNyYyA9IG1vZHVsZU5hbWU7XHJcbiAgICBkb21TY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgc2NyaXB0TG9hZGVkLCBmYWxzZSk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvbVNjcmlwdCk7XHJcbiAgfVxyXG4gIG9uTG9hZCgpIHtcclxuICAgIFBlZXJNYW5hZ2VyLkluc3RhbmNlID0gdGhpcztcclxuXHJcbiAgICByZXR1cm47XHJcbiAgICBpZiAoIXdpbmRvdy5pc1JlbGVhc2UpIHtcclxuICAgICAgdGhpcy5sb2FkU2NyaXB0KFwiaHR0cHM6Ly9mcHQuZWxvcGxheS52bi9wZWVyL3BlZXJjbGllbnQuanNcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNTY3JpcHRMb2FkZWQgPSB0cnVlO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXNTY3JpcHRMb2FkZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBnZXRQZWVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmlzSW5pdGFsaXplZCB8fCAhdGhpcy5pc1NjcmlwdExvYWRlZCkgcmV0dXJuO1xyXG4gICAgICBpZiAoIXRoaXMucGVlciAmJiAod2luZG93IGFzIGFueSkuZ2V0UGVlckNsaWVudCkge1xyXG4gICAgICAgIHRoaXMucGVlciA9ICh3aW5kb3cgYXMgYW55KS5nZXRQZWVyQ2xpZW50KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wZWVyKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZXIgJiYgIXRoaXMuc2lwKSB7XHJcbiAgICAgICAgdGhpcy5zaXAgPSB0aGlzLnBlZXIuZ2V0U0lQKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wZWVyICYmIHRoaXMuc2lwICYmICF0aGlzLmlzSW5pdGFsaXplZCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoZ2V0UGVlckludGVydmFsKTtcclxuICAgICAgfVxyXG4gICAgfSwgMTAwMCk7XHJcbiAgfVxyXG4gIHN0YXJ0KCkge1xyXG4gICAgcmV0dXJuO1xyXG4gICAgdGhpcy5jbGllbnRDb25uZWN0ZWQgPSBuZXcgQXJyYXkoUGVlckRlZmluZS5NQVhfQ0xJRU5UKTtcclxuICAgIHRoaXMudmVyeWZpU0lQcyA9IG5ldyBBcnJheShQZWVyRGVmaW5lLk1BWF9DTElFTlQpO1xyXG4gIH1cclxuICBnZXRTSVAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zaXA7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoZHQpIHt9XHJcbiAgZ2V0Q2xpZW50cygpIHtcclxuICAgIHJldHVybiB0aGlzLmNsaWVudENvbm5lY3RlZDtcclxuICB9XHJcbiAgc2V0UmVtb3RlTW9kZSh2YWw6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgaWYgKHZhbCkge1xyXG4gICAgICB0aGlzLmNsaWVudENvbm5lY3RlZFswXSA9IHsgcmVtb3RlU0lQOiAwIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNsaWVudENvbm5lY3RlZFswXSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICB0aGlzLmlzUGxheVdpdGhSZW1vdGUgPSB2YWw7XHJcbiAgfVxyXG4gIGdldENsaWVudENvbm5ldGVkKCkge1xyXG4gICAgbGV0IGFyciA9IFtdO1xyXG4gICAgZm9yIChsZXQgY2xpZW50IG9mIHRoaXMuY2xpZW50Q29ubmVjdGVkKSB7XHJcbiAgICAgIGlmIChjbGllbnQgfHwgKHRoaXMuaXNQbGF5V2l0aFJlbW90ZSAmJiBjbGllbnQgPT0gdHJ1ZSkpIHtcclxuICAgICAgICBhcnIucHVzaChjbGllbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyO1xyXG4gIH1cclxuICBzZXRDb25uZWN0ZWRDQihcclxuICAgIGNsaWVudElkOiBudW1iZXIsXHJcbiAgICBjYjogRnVuY3Rpb24gLy8gY2xpZW50IElEIHdpbGwgYmUgZnJvbSAwXHJcbiAgKSB7XHJcbiAgICBpZiAoY2xpZW50SWQgPCBQZWVyRGVmaW5lLk1BWF9DTElFTlQpIHtcclxuICAgICAgdGhpcy5hcnJDb25uZWN0ZWRDQltjbGllbnRJZF0gPSBjYjtcclxuICAgIH1cclxuICB9XHJcbiAgc2V0RGlzQ29ubmVjdENCKGNsaWVudElkOiBudW1iZXIsIGNiOiBGdW5jdGlvbikge1xyXG4gICAgaWYgKGNsaWVudElkIDwgUGVlckRlZmluZS5NQVhfQ0xJRU5UKSB7XHJcbiAgICAgIHRoaXMuYXJyRGlzY29ubmVjdENCW2NsaWVudElkXSA9IGNiO1xyXG4gICAgfVxyXG4gIH1cclxuICBQbGF5R2FtZSh2YWx1ZSA9IHRydWUpIHtcclxuICAgIHRoaXMuaXNQbGF5aW5nR2FtZSA9IHZhbHVlO1xyXG4gIH1cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5pc0luaXRhbGl6ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5wZWVyLm9uKFwibWVzc2FnZVwiLCB0aGlzLm9uUmVjaWV2ZWRNZXNzYWdlLmJpbmQodGhpcykpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zaXApO1xyXG4gIH1cclxuICBzZXRNZXNzYWdlUmVjaXZlZENCKGNiOiBGdW5jdGlvbikge1xyXG4gICAgdGhpcy5vbm1lc3NhZ2UgPSBjYjtcclxuICB9XHJcbiAgY29ubmVjdGluZyhjbGllbnQpIHtcclxuICAgIGxldCBpbmRleEF2bCA9IHRoaXMuZ2V0U2xvdEF2YWlsYmxlKCk7XHJcbiAgICBpZiAoaW5kZXhBdmwgPCAwKSB7XHJcbiAgICAgIGxldCBtc2dGYWlsOiBJRGF0YVJlY2VpdmVkID0ge1xyXG4gICAgICAgIGFjdGlvbjogUGVlckFjdGlvbkNvbm5lY3QuQ09OTkVDVF9GQUlMRUQsXHJcbiAgICAgICAgcGhhc2U6IFBlZXJQaGFzZS5DT05ORUNULFxyXG4gICAgICAgIGN1c3RvbVBhcmFtOiBcIkNvbm5lY3Rpb24gZmFpbGVkIC0gZnVsbCBzbG90XCIsXHJcbiAgICAgIH07XHJcbiAgICAgIGNsaWVudC5zZW5kKEpTT04uc3RyaW5naWZ5KG1zZ0ZhaWwpKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaXNQbGF5aW5nR2FtZSkge1xyXG4gICAgICBsZXQgbXNnRmFpbDogSURhdGFSZWNlaXZlZCA9IHtcclxuICAgICAgICBhY3Rpb246IFBlZXJBY3Rpb25Db25uZWN0LkNPTk5FQ1RfRkFJTEVELFxyXG4gICAgICAgIHBoYXNlOiBQZWVyUGhhc2UuQ09OTkVDVCxcclxuICAgICAgICBjdXN0b21QYXJhbTogXCJnYW1lIGlzIHBsYXlpbmdcIixcclxuICAgICAgfTtcclxuICAgICAgY2xpZW50LnNlbmQoSlNPTi5zdHJpbmdpZnkobXNnRmFpbCkpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jdXJyZW50TWFpblBsYXllciA9PSAtMSkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRNYWluUGxheWVyID0gaW5kZXhBdmw7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pc1BsYXlXaXRoUmVtb3RlKSB0aGlzLmN1cnJlbnRNYWluUGxheWVyID0gMDtcclxuICAgIGxldCBtc2dDb25uZWN0ZWQ6IElEYXRhUmVjZWl2ZWQgPSB7XHJcbiAgICAgIGFjdGlvbjogUGVlckFjdGlvbkNvbm5lY3QuQ09OTkVDVEVELFxyXG4gICAgICBwaGFzZTogUGVlclBoYXNlLkNPTk5FQ1QsXHJcbiAgICAgIGN1c3RvbVBhcmFtOlxyXG4gICAgICAgIGluZGV4QXZsID09IHRoaXMuY3VycmVudE1haW5QbGF5ZXJcclxuICAgICAgICAgID8gIXRoaXMuaXNQbGF5V2l0aFJlbW90ZVxyXG4gICAgICAgICAgICA/IFwibWFpblBsYXllclwiXHJcbiAgICAgICAgICAgIDogXCJDb25uZWN0aW9uIHN1Y2Nlc3NcIlxyXG4gICAgICAgICAgOiBcIkNvbm5lY3Rpb24gc3VjY2Vzc1wiLFxyXG4gICAgICBjdXJyZW50SUQ6IGluZGV4QXZsLFxyXG4gICAgICBjdXJyZW50TWFpblBsYXllcklEOiB0aGlzLmN1cnJlbnRNYWluUGxheWVyLFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy5nZXRDbGllbnRDb25uZXRlZCgpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIFN0YWdlTWdyLnNob3coU3RhZ2VzLlN0YWdlU3RhcnRHYW1lKTtcclxuICAgICAgdGhpcy5zZXRSZW1vdGVNb2RlKGZhbHNlKTtcclxuXHJcbiAgICAgIGxldCBtc2c6IElEYXRhUmVjZWl2ZWQgPSB7XHJcbiAgICAgICAgcGhhc2U6IFBlZXJQaGFzZS5TVEFSVF9TQ1JFRU4sXHJcbiAgICAgICAgYWN0aW9uOiBQZWVyQWN0aW9uVHlwZS5TSE9XLFxyXG4gICAgICAgIGN1c3RvbVBhcmFtOiBcIlwiLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY2xpZW50LnNlbmQoSlNPTi5zdHJpbmdpZnkobXNnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hcnJDb25uZWN0ZWRDQltpbmRleEF2bF0gJiYgdGhpcy5hcnJDb25uZWN0ZWRDQltpbmRleEF2bF0oKTtcclxuICAgIGNsaWVudC5zZW5kKEpTT04uc3RyaW5naWZ5KG1zZ0Nvbm5lY3RlZCkpO1xyXG4gICAgdGhpcy5jbGllbnRDb25uZWN0ZWRbaW5kZXhBdmxdID0gY2xpZW50O1xyXG4gICAgdGhpcy52ZXJ5ZmlTSVBzW2luZGV4QXZsXSA9IGNsaWVudC5yZW1vdGVTSVA7XHJcblxyXG4gICAgU3RhZ2VMb2JieS5JbnN0YW5jZS5zZXRVSSh0cnVlLCBpbmRleEF2bCk7XHJcbiAgfVxyXG4gIG9uUmVjaWV2ZWRNZXNzYWdlKG1zZywgY2xpZW50KSB7XHJcbiAgICAvL25lZWQgdG8gdmVyZmlmeSBjbGllbnQgaGVyZVxyXG4gICAgbGV0IGFyZ3MgPSBKU09OLnBhcnNlKG1zZyk7XHJcbiAgICBpZiAoYXJncy5waGFzZSAhPSBQZWVyUGhhc2UuQ09OTkVDVCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhtc2cpO1xyXG4gICAgfVxyXG4gICAgaWYgKGFyZ3MucGhhc2UgPT0gUGVlclBoYXNlLkNPTk5FQ1QpIHtcclxuICAgICAgc3dpdGNoIChhcmdzLmFjdGlvbikge1xyXG4gICAgICAgIGNhc2UgUGVlckFjdGlvbkNvbm5lY3QuQ09OTkVDVElORzoge1xyXG4gICAgICAgICAgdGhpcy5jb25uZWN0aW5nKGNsaWVudCk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgUGVlckFjdGlvbkNvbm5lY3QuUElOR19QT05HOiB7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZVBpbmdQb25nKGNsaWVudCwgYXJncyk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgUGVlckFjdGlvbkNvbm5lY3QuQ09OTkVDVF9SRVRSWToge1xyXG4gICAgICAgICAgaWYgKHRoaXMuaXNQbGF5aW5nR2FtZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlY29ubmVjdCA6XCIgKyBjbGllbnQucmVtb3RlU0lQKTtcclxuICAgICAgICAgICAgbGV0IHZlcnlmaVNJUCA9IGNsaWVudC5yZW1vdGVTSVA7XHJcbiAgICAgICAgICAgIGxldCBjaGVjayA9IHRoaXMudmVyeWZpU0lQcy5pbmNsdWRlcyh2ZXJ5ZmlTSVApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjaGVjaywgdmVyeWZpU0lQLCB0aGlzLnZlcnlmaVNJUHMpO1xyXG4gICAgICAgICAgICBpZiAoY2hlY2spIHtcclxuICAgICAgICAgICAgICBsZXQgaW5kZXhBdmwgPSB0aGlzLnZlcnlmaVNJUHMuaW5kZXhPZih2ZXJ5ZmlTSVApO1xyXG5cclxuICAgICAgICAgICAgICB0aGlzLmFyckNvbm5lY3RlZENCW2luZGV4QXZsXSAmJiB0aGlzLmFyckNvbm5lY3RlZENCW2luZGV4QXZsXSgpO1xyXG4gICAgICAgICAgICAgIHRoaXMuY2xpZW50Q29ubmVjdGVkW2luZGV4QXZsXSA9IGNsaWVudDtcclxuICAgICAgICAgICAgICB0aGlzLnZlcnlmaVNJUHNbaW5kZXhBdmxdID0gY2xpZW50LnJlbW90ZVNJUDtcclxuXHJcbiAgICAgICAgICAgICAgbGV0IG1zZ1N1Y2Nlc3M6IElEYXRhUmVjZWl2ZWQgPSB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb246IFBlZXJBY3Rpb25Db25uZWN0LkNPTk5FQ1RfUkVUUllfU1VDQ0VTUyxcclxuICAgICAgICAgICAgICAgIHBoYXNlOiBQZWVyUGhhc2UuQ09OTkVDVCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRJRDogaW5kZXhBdmwsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50TWFpblBsYXllcklEOiB0aGlzLmN1cnJlbnRNYWluUGxheWVyLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tUGFyYW06IFwicmVjb25uZWN0IHN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGFnZTogUGVlclN0YWdlLlBMQVlJTkcsXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICBjbGllbnQuc2VuZChKU09OLnN0cmluZ2lmeShtc2dTdWNjZXNzKSk7XHJcblxyXG4gICAgICAgICAgICAgIFN0YWdlSW5HYW1lLkluc3RhbmNlLmlzR2FtZU92ZXJbaW5kZXhBdmxdID1cclxuICAgICAgICAgICAgICAgIFN0YWdlSW5HYW1lLkluc3RhbmNlLmlzRGVhZFtpbmRleEF2bF07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgbGV0IG1zZ0ZhaWw6IElEYXRhUmVjZWl2ZWQgPSB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb246IFBlZXJBY3Rpb25Db25uZWN0LkNPTk5FQ1RfRkFJTEVELFxyXG4gICAgICAgICAgICAgICAgcGhhc2U6IFBlZXJQaGFzZS5DT05ORUNULFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tUGFyYW06IFwiY2Fubm90IGNvbm5lY3QsIG5vdCBjdXJyZW50IHBsYXllclwiLFxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgY2xpZW50LnNlbmQoSlNPTi5zdHJpbmdpZnkobXNnRmFpbCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbm5lY3RpbmcoY2xpZW50KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFBlZXJNYW5hZ2VyLmVtaXQoUGVlck1hbmFnZXIuRXZlbnRSZWNlaXZlZE1lc3NhZ2UsIGFyZ3MsIGNsaWVudCk7XHJcbiAgICB0aGlzLm9ubWVzc2FnZSAmJiB0aGlzLm9ubWVzc2FnZShtc2cpO1xyXG4gIH1cclxuICBnZXRTbG90QXZhaWxibGUoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2xpZW50Q29ubmVjdGVkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICghdGhpcy5jbGllbnRDb25uZWN0ZWRbaV0pIHJldHVybiBpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIC0xO1xyXG4gIH1cclxuICBnZXRSZW1vdGVTSVBBdmFpbGFibGUocmVtb3RlU0lQOiBudW1iZXIpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jbGllbnRDb25uZWN0ZWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuY2xpZW50Q29ubmVjdGVkW2ldICYmXHJcbiAgICAgICAgdGhpcy5jbGllbnRDb25uZWN0ZWRbaV0ucmVtb3RlU0lQID09IHJlbW90ZVNJUFxyXG4gICAgICApXHJcbiAgICAgICAgcmV0dXJuIGk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLTE7XHJcbiAgfVxyXG4gIHVwZGF0ZVBpbmdQb25nKGNsaWVudCwgbXNnKSB7XHJcbiAgICBsZXQgaWQgPSB0aGlzLmdldFJlbW90ZVNJUEF2YWlsYWJsZShjbGllbnQucmVtb3RlU0lQKTtcclxuICAgIGlmIChpZCA8IDApIHJldHVybjtcclxuICAgIGlmICh0aGlzLnRpbWVvdXRQaW5nUG9uZ1tpZF0pIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRQaW5nUG9uZ1tpZF0pO1xyXG5cclxuICAgIHRoaXMuc2VuZE1lc3NhZ2UoaWQsIG1zZyk7XHJcblxyXG4gICAgdGhpcy50aW1lb3V0UGluZ1BvbmdbaWRdID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuYXJyRGlzY29ubmVjdENCW2lkXSAmJiB0aGlzLmFyckRpc2Nvbm5lY3RDQltpZF0oKTtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dFBpbmdQb25nW2lkXSk7XHJcbiAgICAgIHRoaXMuY2xpZW50Q29ubmVjdGVkW2lkXSA9IG51bGw7XHJcblxyXG4gICAgICBTdGFnZUxvYmJ5Lkluc3RhbmNlLnNldFVJKGZhbHNlLCBpZCk7XHJcbiAgICAgIGlmIChTdGFnZUluR2FtZS5JbnN0YW5jZS5ub2RlLmFjdGl2ZSkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKCF0aGlzLmNsaWVudENvbm5lY3RlZFtpZF0pIHtcclxuICAgICAgICAgICAgbGV0IHN0ciA9IGBOZ8aw4budaSBjaMahaSAke2lkICsgMX0gxJHDoyBt4bqldCBr4bq/dCBu4buRaWA7XHJcbiAgICAgICAgICAgIFN0YWdlSW5HYW1lLkluc3RhbmNlLnNob3dDb25uZWN0TWVzc2FnZShpZCwgc3RyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCBQZWVyRGVmaW5lLlRJTUVPVVRfUkVUUlkpO1xyXG4gICAgICAgIGlmIChpZCAhPSB0aGlzLmN1cnJlbnRNYWluUGxheWVyKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5pc1BsYXlXaXRoUmVtb3RlKSByZXR1cm47XHJcbiAgICAgIGlmIChpZCA9PSB0aGlzLmN1cnJlbnRNYWluUGxheWVyKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TWFpblBsYXllciA9IC0xO1xyXG4gICAgICAgIGlmICh0aGlzLmdldENsaWVudENvbm5ldGVkKCkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgLy9zZXQgTWFpbiBwbGF5ZXIgaGVyZVxyXG4gICAgICAgICAgbGV0IGUgPSB0aGlzLnN3aXRjaE1haW5QbGF5ZXIoaWQpO1xyXG4gICAgICAgICAgaWYgKGUpIHtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIFN0YWdlTWdyLnNob3coU3RhZ2VzLlN0YWdlUVJzY2FuKTtcclxuICAgICAgICAgIHRoaXMuaXNQbGF5V2l0aFJlbW90ZSA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLmlzUGxheWluZ0dhbWUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sIFBlZXJEZWZpbmUuVElNRU9VVF9ESVNDT05ORUNUKTtcclxuICB9XHJcbiAgc3dpdGNoTWFpblBsYXllcihwcmV2aW91c01haW5QbGF5ZXIpIHtcclxuICAgIGZvciAobGV0IGNsaWVudCBvZiB0aGlzLmNsaWVudENvbm5lY3RlZCkge1xyXG4gICAgICBpZiAoY2xpZW50KSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TWFpblBsYXllciA9IHRoaXMuY2xpZW50Q29ubmVjdGVkLmluZGV4T2YoY2xpZW50KTtcclxuICAgICAgICBsZXQgbXNnQ29ubmVjdGVkOiBJRGF0YVJlY2VpdmVkID0ge1xyXG4gICAgICAgICAgYWN0aW9uOiBQZWVyQWN0aW9uQ29ubmVjdC5TV0lUQ0hfTUFJTlBMQVlFUixcclxuICAgICAgICAgIHBoYXNlOiBQZWVyUGhhc2UuQ09OTkVDVCxcclxuICAgICAgICAgIGN1c3RvbVBhcmFtOiBcIm1haW5QbGF5ZXJcIixcclxuICAgICAgICAgIGN1cnJlbnRNYWluUGxheWVySUQ6IHRoaXMuY3VycmVudE1haW5QbGF5ZXIsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlVG9BbGwobXNnQ29ubmVjdGVkKTtcclxuXHJcbiAgICAgICAgbGV0IHN0ciA9IGAke0dhbWVEZWZpbmUucGxheWVyfSAke3ByZXZpb3VzTWFpblBsYXllciArIDF9ICR7XHJcbiAgICAgICAgICBHYW1lRGVmaW5lLmhhc2Rpc2Nvbm5lY3RcclxuICAgICAgICB9IFxcbiR7R2FtZURlZmluZS5wbGF5ZXJ9ICR7dGhpcy5jdXJyZW50TWFpblBsYXllciArIDF9ICR7XHJcbiAgICAgICAgICBHYW1lRGVmaW5lLmhvc3RpbmdcclxuICAgICAgICB9YDtcclxuICAgICAgICBTdGFnZUluR2FtZS5JbnN0YW5jZS5zaG93Q29ubmVjdE1lc3NhZ2UocHJldmlvdXNNYWluUGxheWVyLCBzdHIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBzZW5kTWVzc2FnZShjbGllbnRJbmRleCwgbXNnOiBJRGF0YVJlY2VpdmVkKSB7XHJcbiAgICBpZiAoIXRoaXMucGVlcikgcmV0dXJuO1xyXG4gICAgbGV0IGNsaWVudCA9IHRoaXMuY2xpZW50Q29ubmVjdGVkW2NsaWVudEluZGV4XTtcclxuICAgIGlmIChjbGllbnQpIHtcclxuICAgICAgdGhpcy5wZWVyLnNlbmRUbyhjbGllbnQucmVtb3RlU0lQLCBKU09OLnN0cmluZ2lmeShtc2cpKTtcclxuICAgIH1cclxuICB9XHJcbiAgc2VuZE1lc3NhZ2VUb0FsbChtc2c6IElEYXRhUmVjZWl2ZWQpIHtcclxuICAgIGlmICghdGhpcy5wZWVyKSByZXR1cm47XHJcbiAgICBmb3IgKGxldCBjbGllbnQgb2YgdGhpcy5jbGllbnRDb25uZWN0ZWQpIHtcclxuICAgICAgaWYgKGNsaWVudCkgdGhpcy5wZWVyLnNlbmRUbyhjbGllbnQucmVtb3RlU0lQLCBKU09OLnN0cmluZ2lmeShtc2cpKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19