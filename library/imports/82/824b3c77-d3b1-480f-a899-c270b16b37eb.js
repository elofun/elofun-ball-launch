"use strict";
cc._RF.push(module, '824b3x307FID6iZwnCxazfr', 'StageQRscan');
// Scripts/stage/StageQRscan.ts

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
var Global_1 = require("../common/Global");
var SoundMgr_1 = require("../common/SoundMgr");
var PeerManager_1 = require("../PeerComponent/PeerManager");
var QRCodeGen_1 = require("../PeerComponent/QRCodeGen");
var Stage_1 = require("./Stage");
var StageLobby_1 = require("./StageLobby");
var StageMgr_1 = require("./StageMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StageQRscan = /** @class */ (function (_super) {
    __extends(StageQRscan, _super);
    function StageQRscan() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.qrCode = null;
        return _this;
    }
    StageQRscan_1 = StageQRscan;
    // LIFE-CYCLE CALLBACKS:
    StageQRscan.prototype.onLoad = function () {
        StageQRscan_1.Instance = this;
    };
    StageQRscan.prototype.start = function () {
        var _this = this;
        SoundMgr_1.default.playMusic(SoundMgr_1.default.Instance.BGM);
        var urlParams = new URLSearchParams(window.location.search);
        var timerGoBack = Number(urlParams.get("timer_qr")) || 30000;
        Global_1.default.Instance.backAppTime = Date.now() + timerGoBack;
        return;
        var interval = setInterval(function () {
            if (PeerManager_1.default.Instance.peer && PeerManager_1.default.Instance.sip) {
                _this.qrCode.createQR();
                StageLobby_1.default.Instance.qrCode.createQR();
                StageLobby_1.default.Instance.lblRoomCode.string =
                    "" + window.controllerPrefix + PeerManager_1.default.Instance.sip;
                clearInterval(interval);
                return;
            }
            if (Global_1.default.Instance.backAppTime - Date.now() < 0) {
                StageMgr_1.default.Instance.sendMessage("backToApp");
                clearInterval(interval);
            }
        }, 1000);
    };
    // update (dt) {}
    StageQRscan.prototype.nextStage = function (isRemote) {
        if (isRemote === void 0) { isRemote = false; }
        if (isRemote) {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            StageMgr_1.default.show(StageMgr_1.Stages.StageStartGame);
        }
        else {
            StageMgr_1.default.show(StageMgr_1.Stages.StageStartGame);
        }
    };
    var StageQRscan_1;
    StageQRscan.Instance = null;
    __decorate([
        property(QRCodeGen_1.default)
    ], StageQRscan.prototype, "qrCode", void 0);
    StageQRscan = StageQRscan_1 = __decorate([
        ccclass
    ], StageQRscan);
    return StageQRscan;
}(Stage_1.default));
exports.default = StageQRscan;

cc._RF.pop();