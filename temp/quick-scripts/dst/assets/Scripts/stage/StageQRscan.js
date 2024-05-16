
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/stage/StageQRscan.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3RhZ2VcXFN0YWdlUVJzY2FuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLDJDQUFzQztBQUN0QywrQ0FBMEM7QUFDMUMsNERBQXVEO0FBQ3ZELHdEQUFtRDtBQUNuRCxpQ0FBNEI7QUFDNUIsMkNBQXNDO0FBQ3RDLHVDQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBSztJQUE5QztRQUFBLHFFQTRDQztRQTNDc0IsWUFBTSxHQUFjLElBQUksQ0FBQzs7SUEyQ2hELENBQUM7b0JBNUNvQixXQUFXO0lBSTlCLHdCQUF3QjtJQUV4Qiw0QkFBTSxHQUFOO1FBQ0UsYUFBVyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUVELDJCQUFLLEdBQUw7UUFBQSxpQkFzQkM7UUFyQkMsa0JBQVEsQ0FBQyxTQUFTLENBQUMsa0JBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFMUMsSUFBSSxTQUFTLEdBQUcsSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1RCxJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQztRQUM3RCxnQkFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLFdBQVcsQ0FBQztRQUV2RCxPQUFPO1FBQ1AsSUFBSSxRQUFRLEdBQUcsV0FBVyxDQUFDO1lBQ3pCLElBQUkscUJBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLHFCQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRTtnQkFDekQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDdkIsb0JBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN0QyxvQkFBVSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTTtvQkFDcEMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7Z0JBQzFELGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDeEIsT0FBTzthQUNSO1lBQ0QsSUFBSSxnQkFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRTtnQkFDaEQsa0JBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMzQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDekI7UUFDSCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsaUJBQWlCO0lBRWpCLCtCQUFTLEdBQVQsVUFBVSxRQUF5QjtRQUF6Qix5QkFBQSxFQUFBLGdCQUF5QjtRQUNqQyxJQUFJLFFBQVEsRUFBRTtZQUNaLGtCQUFRLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQy9DLGtCQUFRLENBQUMsSUFBSSxDQUFDLGlCQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDdEM7YUFBTTtZQUNMLGtCQUFRLENBQUMsSUFBSSxDQUFDLGlCQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDOztJQXhDTSxvQkFBUSxHQUFnQixJQUFJLENBQUM7SUFGZjtRQUFwQixRQUFRLENBQUMsbUJBQVMsQ0FBQzsrQ0FBMEI7SUFEM0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQTRDL0I7SUFBRCxrQkFBQztDQTVDRCxBQTRDQyxDQTVDd0MsZUFBSyxHQTRDN0M7a0JBNUNvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vY29tbW9uL0dsb2JhbFwiO1xyXG5pbXBvcnQgU291bmRNZ3IgZnJvbSBcIi4uL2NvbW1vbi9Tb3VuZE1nclwiO1xyXG5pbXBvcnQgUGVlck1hbmFnZXIgZnJvbSBcIi4uL1BlZXJDb21wb25lbnQvUGVlck1hbmFnZXJcIjtcclxuaW1wb3J0IFFSQ29kZUdlbiBmcm9tIFwiLi4vUGVlckNvbXBvbmVudC9RUkNvZGVHZW5cIjtcclxuaW1wb3J0IFN0YWdlIGZyb20gXCIuL1N0YWdlXCI7XHJcbmltcG9ydCBTdGFnZUxvYmJ5IGZyb20gXCIuL1N0YWdlTG9iYnlcIjtcclxuaW1wb3J0IFN0YWdlTWdyLCB7IFN0YWdlcyB9IGZyb20gXCIuL1N0YWdlTWdyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhZ2VRUnNjYW4gZXh0ZW5kcyBTdGFnZSB7XHJcbiAgQHByb3BlcnR5KFFSQ29kZUdlbikgcXJDb2RlOiBRUkNvZGVHZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgSW5zdGFuY2U6IFN0YWdlUVJzY2FuID0gbnVsbDtcclxuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgU3RhZ2VRUnNjYW4uSW5zdGFuY2UgPSB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICBTb3VuZE1nci5wbGF5TXVzaWMoU291bmRNZ3IuSW5zdGFuY2UuQkdNKTtcclxuXHJcbiAgICBsZXQgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuICAgIGxldCB0aW1lckdvQmFjayA9IE51bWJlcih1cmxQYXJhbXMuZ2V0KFwidGltZXJfcXJcIikpIHx8IDMwMDAwO1xyXG4gICAgR2xvYmFsLkluc3RhbmNlLmJhY2tBcHBUaW1lID0gRGF0ZS5ub3coKSArIHRpbWVyR29CYWNrO1xyXG5cclxuICAgIHJldHVybjtcclxuICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgaWYgKFBlZXJNYW5hZ2VyLkluc3RhbmNlLnBlZXIgJiYgUGVlck1hbmFnZXIuSW5zdGFuY2Uuc2lwKSB7XHJcbiAgICAgICAgdGhpcy5xckNvZGUuY3JlYXRlUVIoKTtcclxuICAgICAgICBTdGFnZUxvYmJ5Lkluc3RhbmNlLnFyQ29kZS5jcmVhdGVRUigpO1xyXG4gICAgICAgIFN0YWdlTG9iYnkuSW5zdGFuY2UubGJsUm9vbUNvZGUuc3RyaW5nID1cclxuICAgICAgICAgIFwiXCIgKyB3aW5kb3cuY29udHJvbGxlclByZWZpeCArIFBlZXJNYW5hZ2VyLkluc3RhbmNlLnNpcDtcclxuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKEdsb2JhbC5JbnN0YW5jZS5iYWNrQXBwVGltZSAtIERhdGUubm93KCkgPCAwKSB7XHJcbiAgICAgICAgU3RhZ2VNZ3IuSW5zdGFuY2Uuc2VuZE1lc3NhZ2UoXCJiYWNrVG9BcHBcIik7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgIH1cclxuICAgIH0sIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgLy8gdXBkYXRlIChkdCkge31cclxuXHJcbiAgbmV4dFN0YWdlKGlzUmVtb3RlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIGlmIChpc1JlbW90ZSkge1xyXG4gICAgICBTb3VuZE1nci5wbGF5U2Z4KFNvdW5kTWdyLkluc3RhbmNlLlNGWF9CVVRUT04pO1xyXG4gICAgICBTdGFnZU1nci5zaG93KFN0YWdlcy5TdGFnZVN0YXJ0R2FtZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBTdGFnZU1nci5zaG93KFN0YWdlcy5TdGFnZVN0YXJ0R2FtZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==