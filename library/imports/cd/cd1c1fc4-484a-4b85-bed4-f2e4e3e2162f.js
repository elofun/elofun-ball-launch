"use strict";
cc._RF.push(module, 'cd1c1/ESEpLhb7U8uTj4hYv', 'StageLobby');
// Scripts/stage/StageLobby.ts

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
var SoundMgr_1 = require("../common/SoundMgr");
var PeerManager_1 = require("../PeerComponent/PeerManager");
var QRCodeGen_1 = require("../PeerComponent/QRCodeGen");
var Stage_1 = require("./Stage");
var StageMgr_1 = require("./StageMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StageLobby = /** @class */ (function (_super) {
    __extends(StageLobby, _super);
    function StageLobby() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.qrCode = null;
        _this.btnNext = null;
        _this.lblRoomCode = null;
        _this.players = [];
        _this.normalSpine = null;
        _this.graySpine = null;
        _this.msg = null;
        return _this;
    }
    StageLobby_1 = StageLobby;
    // LIFE-CYCLE CALLBACKS:
    StageLobby.prototype.onLoad = function () {
        StageLobby_1.Instance = this;
    };
    StageLobby.prototype.start = function () {
        this.msg.string = "" + window.controllerOrigin;
    };
    StageLobby.prototype.onEnable = function () {
        return;
        for (var i = 0; i < 3; i++) {
            this.setUI(PeerManager_1.default.Instance.clientConnected[i] ? true : false, i);
        }
    };
    // update (dt) {}
    StageLobby.prototype.nextStage = function () {
        SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
        cc.tween(this.btnNext.node)
            .to(0.1, { scale: 0.65 })
            .to(0.1, { scale: 0.5 })
            .call(function () {
            StageMgr_1.default.show(StageMgr_1.Stages.StageInGame);
        })
            .start();
    };
    StageLobby.prototype.setUI = function (isConnected, index) {
        this.players[index].getChildByName("playerReady").active = isConnected;
        this.players[index].getChildByName("playerNotReady").active = !isConnected;
        this.players[index]
            .getChildByName("playerSprite")
            .getComponent(sp.Skeleton)
            .setMaterial(0, isConnected ? this.normalSpine : this.graySpine);
    };
    var StageLobby_1;
    StageLobby.Instance = null;
    __decorate([
        property(QRCodeGen_1.default)
    ], StageLobby.prototype, "qrCode", void 0);
    __decorate([
        property(cc.Button)
    ], StageLobby.prototype, "btnNext", void 0);
    __decorate([
        property(cc.Label)
    ], StageLobby.prototype, "lblRoomCode", void 0);
    __decorate([
        property(cc.Node)
    ], StageLobby.prototype, "players", void 0);
    __decorate([
        property(cc.Material)
    ], StageLobby.prototype, "normalSpine", void 0);
    __decorate([
        property(cc.Material)
    ], StageLobby.prototype, "graySpine", void 0);
    __decorate([
        property(cc.Label)
    ], StageLobby.prototype, "msg", void 0);
    StageLobby = StageLobby_1 = __decorate([
        ccclass
    ], StageLobby);
    return StageLobby;
}(Stage_1.default));
exports.default = StageLobby;

cc._RF.pop();