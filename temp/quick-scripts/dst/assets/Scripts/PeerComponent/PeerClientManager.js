
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/PeerComponent/PeerClientManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGVlckNvbXBvbmVudFxcUGVlckNsaWVudE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsMkNBQW1HO0FBQ25HLDZDQUEyRDtBQUNyRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUErQyxxQ0FBVztJQUExRDtRQUFBLHFFQTBOQztRQXROVSxlQUFTLEdBQVcsQ0FBQyxDQUFBO1FBQ3JCLGVBQVMsR0FBVyxDQUFDLENBQUE7UUFDckIseUJBQW1CLEdBQVcsQ0FBQyxDQUFBO1FBRTlCLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGlCQUFXLEdBQVksS0FBSyxDQUFBOztJQWlOeEMsQ0FBQzswQkExTm9CLGlCQUFpQjtJQWVsQyxrQ0FBTSxHQUFOO1FBRUksaUJBQU0sTUFBTSxXQUFFLENBQUM7UUFDZixtQkFBaUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO1FBQ2pDLElBQU0sU0FBUyxHQUFHLElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7UUFFM0MsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUM1QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7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O2dCQUNuQyxLQUFLLEVBQUUsc0JBQVMsQ0FBQyxPQUFPO2dCQUN4QixXQUFXLEVBQUUsTUFBTTthQUN0QixDQUFBO1lBQ0QsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUM3QixDQUFDLEVBQUUsb0JBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0QsZ0RBQW9CLEdBQXBCO1FBQUEsaUJBV0M7UUFURyxJQUFJLElBQUksQ0FBQyxxQkFBcUI7WUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUE7UUFDeEUsSUFBSSxDQUFDLHFCQUFxQixHQUFHLFVBQVUsQ0FBQztZQUVwQyxLQUFJLENBQUMsWUFBWSxJQUFJLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtZQUN4QyxZQUFZLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLENBQUE7WUFDeEMsYUFBYSxDQUFDLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1lBQ3RDLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFBO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDN0IsQ0FBQyxFQUFFLG9CQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUN0QyxDQUFDOztJQXZOYSwwQkFBUSxHQUFzQixJQUFJLENBQUM7SUFGaEMsaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0EwTnJDO0lBQUQsd0JBQUM7Q0ExTkQsQUEwTkMsQ0ExTjhDLHFCQUFXLEdBME56RDtrQkExTm9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBQZWVyRGVmaW5lLCB7IFBlZXJBY3Rpb25Db25uZWN0LCBQZWVyQWN0aW9uVHlwZSwgUGVlclBoYXNlLCBQZWVyU3RhZ2UgfSBmcm9tIFwiLi9QZWVyRGVmaW5lXCI7XHJcbmltcG9ydCBQZWVyTWFuYWdlciwgeyBJRGF0YVJlY2VpdmVkIH0gZnJvbSBcIi4vUGVlck1hbmFnZXJcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlZXJDbGllbnRNYW5hZ2VyIGV4dGVuZHMgUGVlck1hbmFnZXJcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBJbnN0YW5jZTogUGVlckNsaWVudE1hbmFnZXIgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBtYXN0ZXJTSVA6IG51bWJlciA9IDBcclxuICAgIHB1YmxpYyBjdXJyZW50SUQ6IG51bWJlciA9IDBcclxuICAgIHB1YmxpYyBjdXJyZW50TWFpblBsYXllcklEOiBudW1iZXIgPSAwXHJcblxyXG4gICAgcHJpdmF0ZSBpc01haW5QbGF5ZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaXNDb25uZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBkaXNjb25uZWN0Q0I6IEZ1bmN0aW9uXHJcbiAgICBwcml2YXRlIGNvbm5lY3RlZENCOiBGdW5jdGlvblxyXG4gICAgcHJpdmF0ZSByZWNvbm5lY3RDQjogRnVuY3Rpb25cclxuICAgIHByaXZhdGUgY2xpZW50VGltZW91dFBpbmdQb25nOiBhbnk7XHJcbiAgICBwcml2YXRlIGNsaWVudEludGVydmFsUGluZzogYW55O1xyXG4gICAgb25Mb2FkKClcclxuICAgIHtcclxuICAgICAgICBzdXBlci5vbkxvYWQoKTtcclxuICAgICAgICBQZWVyQ2xpZW50TWFuYWdlci5JbnN0YW5jZSA9IHRoaXNcclxuICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgICAgIHRoaXMubWFzdGVyU0lQID0gcGFyc2VJbnQodXJsUGFyYW1zLmdldCgnc2lwJykpIHx8IDA7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJtYXN0ZXJTSVA6IFwiICsgdGhpcy5tYXN0ZXJTSVApXHJcblxyXG4gICAgICAgIGRlbGV0ZSB0aGlzLnNldENvbm5lY3RlZENCO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLnNldERpc0Nvbm5lY3RDQjtcclxuICAgICAgICBkZWxldGUgdGhpcy5nZXRDbGllbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENsaWVudENvbm5lY3RlZENCKGNiOiBGdW5jdGlvbilcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNvbm5lY3RlZENCID0gY2JcclxuICAgIH1cclxuICAgIHNldENsaWVudERpc2Nvbm5lY3RDQihjYjogRnVuY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0Q0IgPSBjYlxyXG4gICAgfVxyXG4gICAgSXNDb25uZWN0ZWQoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzQ29ubmVjdGVkXHJcbiAgICB9XHJcbiAgICBJc01haW5QbGF5ZXIoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzTWFpblBsYXllclxyXG4gICAgfVxyXG4gICAgdXBkYXRlKGR0KVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZShkdCk7XHJcbiAgICB9XHJcbiAgICBpbml0KClcclxuICAgIHtcclxuICAgICAgICBzdXBlci5pbml0KClcclxuICAgICAgICAvLyB0aGlzLmNvbm5lY3QoKVxyXG4gICAgfVxyXG4gICAgY29ubmVjdCgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW5pdGFsaXplZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbG9jYWxNYXN0ZXJTSVAgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtYXN0ZXJTSVBcIilcclxuICAgICAgICAgICAgICAgIGlmIChsb2NhbE1hc3RlclNJUCAmJiBsb2NhbE1hc3RlclNJUCA9PSB0aGlzLm1hc3RlclNJUCAmJiAhdGhpcy5pc0Nvbm5lY3RlZClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY29ubmVjdCgoYXJncykgPT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsU0lQXCIsIHRoaXMuc2lwKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChhcmdzLmN1cnJlbnRTdGFnZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBQZWVyU3RhZ2UuUExBWUlORzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1RPIERPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFBlZXJTdGFnZS5XQUlUSU5HOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vVE8gRE9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzQ29ubmVjdGVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc2Nvbm5lY3RDQiAmJiB0aGlzLmRpc2Nvbm5lY3RDQigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWVudFRpbWVvdXRQaW5nUG9uZyAmJiBjbGVhclRpbWVvdXQodGhpcy5jbGllbnRUaW1lb3V0UGluZ1BvbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWVudEludGVydmFsUGluZyAmJiBjbGVhckludGVydmFsKHRoaXMuY2xpZW50SW50ZXJ2YWxQaW5nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCBQZWVyRGVmaW5lLlRJTUVPVVRfUkVUUlkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbFNJUFwiLCB0aGlzLnNpcClcclxuICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm1hc3RlclNJUFwiLCB0aGlzLm1hc3RlclNJUClcclxuICAgICAgICAgICAgICAgIGxldCBjb25uZWN0TWVzc2FnZTogSURhdGFSZWNlaXZlZCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBwaGFzZTogUGVlclBoYXNlLkNPTk5FQ1QsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBQZWVyQWN0aW9uQ29ubmVjdC5DT05ORUNUSU5HLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbVBhcmFtOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRNZXNzYWdlKGNvbm5lY3RNZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0Nvbm5lY3RlZClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzY29ubmVjdENCICYmIHRoaXMuZGlzY29ubmVjdENCKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGllbnRUaW1lb3V0UGluZ1BvbmcgJiYgY2xlYXJUaW1lb3V0KHRoaXMuY2xpZW50VGltZW91dFBpbmdQb25nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWVudEludGVydmFsUGluZyAmJiBjbGVhckludGVydmFsKHRoaXMuY2xpZW50SW50ZXJ2YWxQaW5nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCBQZWVyRGVmaW5lLlRJTUVPVVRfUkVUUlkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwMClcclxuICAgIH1cclxuICAgIHJlY29ubmVjdChjYjogRnVuY3Rpb24gPSBudWxsKVxyXG4gICAge1xyXG4gICAgICAgIGNjLmxvZyhcInJlY29ubmVjdFwiKVxyXG4gICAgICAgIHRoaXMucmVjb25uZWN0Q0IgPSBjYjtcclxuICAgICAgICBsZXQgbG9jYWxTSVAgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbFNJUFwiKSB8IDBcclxuICAgICAgICBsZXQgY29ubmVjdE1lc3NhZ2U6IElEYXRhUmVjZWl2ZWQgPSB7XHJcbiAgICAgICAgICAgIHBoYXNlOiBQZWVyUGhhc2UuQ09OTkVDVCxcclxuICAgICAgICAgICAgYWN0aW9uOiBQZWVyQWN0aW9uQ29ubmVjdC5DT05ORUNUX1JFVFJZLFxyXG4gICAgICAgICAgICBjdXN0b21QYXJhbTogXCJcIiArIGxvY2FsU0lQXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UoY29ubmVjdE1lc3NhZ2UpXHJcbiAgICB9XHJcbiAgICBzZW5kTWVzc2FnZShtc2c6IElEYXRhUmVjZWl2ZWQpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMubWFzdGVyU0lQKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5wZWVyLnNlbmRUbyh0aGlzLm1hc3RlclNJUCwgSlNPTi5zdHJpbmdpZnkobXNnKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvblJlY2lldmVkTWVzc2FnZShtc2csIGNsaWVudClcclxuICAgIHtcclxuICAgICAgICBsZXQgYXJncyA9IEpTT04ucGFyc2UobXNnKVxyXG4gICAgICAgIGlmIChhcmdzLnBoYXNlICE9IFBlZXJQaGFzZS5DT05ORUNUKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobXNnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXJncy5waGFzZSA9PSBQZWVyUGhhc2UuQ09OTkVDVClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoYXJncy5hY3Rpb24pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgUGVlckFjdGlvbkNvbm5lY3QuQ09OTkVDVEVEOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc01haW5QbGF5ZXIgPSBhcmdzLmN1c3RvbVBhcmFtID09IFwibWFpblBsYXllclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudElEID0gYXJncy5jdXJyZW50SUQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1haW5QbGF5ZXJJRCA9IGFyZ3MuY3VycmVudE1haW5QbGF5ZXJJRDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0ZWRDQiAmJiB0aGlzLmNvbm5lY3RlZENCKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDbGllbnRQaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBlZXJNYW5hZ2VyLmVtaXQoUGVlck1hbmFnZXIuRXZlbnRTd2l0Y2hNYWluUGxheWVyLCB0aGlzLmlzTWFpblBsYXllcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIFBlZXJBY3Rpb25Db25uZWN0LkNPTk5FQ1RfRkFJTEVEOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzY29ubmVjdENCICYmIHRoaXMuZGlzY29ubmVjdENCKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSBQZWVyQWN0aW9uQ29ubmVjdC5TV0lUQ0hfTUFJTlBMQVlFUjpcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNNYWluUGxheWVyID0gdGhpcy5jdXJyZW50SUQgPT0gYXJncy5jdXJyZW50TWFpblBsYXllcklEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1haW5QbGF5ZXJJRCA9IGFyZ3MuY3VycmVudE1haW5QbGF5ZXJJRDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUGVlck1hbmFnZXIuZW1pdChQZWVyTWFuYWdlci5FdmVudFN3aXRjaE1haW5QbGF5ZXIsIHRoaXMuaXNNYWluUGxheWVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIFBlZXJBY3Rpb25Db25uZWN0LlBJTkdfUE9ORzpcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50VXBkYXRlUGluZ1BvbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIFBlZXJBY3Rpb25Db25uZWN0LkNPTk5FQ1RfUkVUUllfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNNYWluUGxheWVyID0gYXJncy5jdXN0b21QYXJhbSA9PSBcIm1haW5QbGF5ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRJRCA9IGFyZ3MuY3VycmVudElEO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNYWluUGxheWVySUQgPSBhcmdzLmN1cnJlbnRNYWluUGxheWVySUQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY29ubmVjdENCICYmIHRoaXMucmVjb25uZWN0Q0IoYXJncylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVjb25uZWN0Q0IgPSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2xpZW50UGluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBQZWVyTWFuYWdlci5lbWl0KFBlZXJNYW5hZ2VyLkV2ZW50U3dpdGNoTWFpblBsYXllciwgdGhpcy5pc01haW5QbGF5ZXIpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCJyZWNvbm5lY3Qgc3VjY2Vzc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBQZWVyTWFuYWdlci5lbWl0KFBlZXJNYW5hZ2VyLkV2ZW50UmVjZWl2ZWRNZXNzYWdlLCBhcmdzKVxyXG4gICAgICAgIHRoaXMub25tZXNzYWdlICYmIHRoaXMub25tZXNzYWdlKG1zZyk7XHJcbiAgICB9XHJcbiAgICBzZXRDbGllbnRQaW5nKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNsaWVudEludGVydmFsUGluZyA9IHNldEludGVydmFsKCgpID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcGluZ01zZzogSURhdGFSZWNlaXZlZCA9IHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbjogUGVlckFjdGlvbkNvbm5lY3QuUElOR19QT05HLFxyXG4gICAgICAgICAgICAgICAgcGhhc2U6IFBlZXJQaGFzZS5DT05ORUNULFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tUGFyYW06IFwiUGluZ1wiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZW5kTWVzc2FnZShwaW5nTXNnKVxyXG4gICAgICAgIH0sIFBlZXJEZWZpbmUuUElOR19USU1FUik7XHJcbiAgICB9XHJcbiAgICBjbGllbnRVcGRhdGVQaW5nUG9uZygpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2xpZW50VGltZW91dFBpbmdQb25nKSBjbGVhclRpbWVvdXQodGhpcy5jbGllbnRUaW1lb3V0UGluZ1BvbmcpXHJcbiAgICAgICAgdGhpcy5jbGllbnRUaW1lb3V0UGluZ1BvbmcgPSBzZXRUaW1lb3V0KCgpID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2Nvbm5lY3RDQiAmJiB0aGlzLmRpc2Nvbm5lY3RDQigpXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNsaWVudFRpbWVvdXRQaW5nUG9uZylcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmNsaWVudEludGVydmFsUGluZylcclxuICAgICAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGlzY29ubmVjdFwiKVxyXG4gICAgICAgIH0sIFBlZXJEZWZpbmUuVElNRU9VVF9ESVNDT05ORUNUKTtcclxuICAgIH1cclxufVxyXG4iXX0=