
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/common/SoundMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2fbc04KsHtO9rOLJqTjEbZu', 'SoundMgr');
// Scripts/common/SoundMgr.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var SingletonNode_1 = require("../utils/SingletonNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SoundMgr = /** @class */ (function (_super) {
    __extends(SoundMgr, _super);
    function SoundMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.BGM = null;
        _this.SFX_BUTTON = null;
        _this.SFX_SELECT = null;
        _this.SFX_ENDSCREEN = null;
        _this.SFX_EXPLODE = null;
        _this.SFX_CRYSTAL = null;
        return _this;
    }
    Object.defineProperty(SoundMgr, "IsMute", {
        get: function () { return cc.audioEngine.getMusicVolume() == 0; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SoundMgr, "IsMusicPlaying", {
        get: function () { return cc.audioEngine.isMusicPlaying(); },
        enumerable: false,
        configurable: true
    });
    SoundMgr.playMusic = function (clip, loop) {
        if (loop === void 0) { loop = true; }
        cc.audioEngine.playMusic(clip, loop);
    };
    SoundMgr.playSfx = function (clip, loop) {
        if (loop === void 0) { loop = false; }
        cc.audioEngine.playEffect(clip, loop);
    };
    SoundMgr.pauseMusic = function () {
        cc.audioEngine.pauseMusic();
    };
    SoundMgr.pauseAll = function () {
        cc.audioEngine.pauseAll();
    };
    SoundMgr.stopMusic = function () {
        cc.audioEngine.stopMusic();
    };
    SoundMgr.stopAll = function () {
        cc.audioEngine.stopAll();
    };
    SoundMgr.setMute = function (value) {
        if (value === void 0) { value = true; }
        var volume = Number(!value);
        this.setMusicVolume(volume);
        this.setSfxVolume(volume);
    };
    SoundMgr.setMusicVolume = function (value) {
        cc.audioEngine.setMusicVolume(value);
    };
    SoundMgr.setSfxVolume = function (value) {
        cc.audioEngine.setEffectsVolume(value);
    };
    SoundMgr.toggleSound = function () {
        this.setMute(!this.IsMute);
    };
    __decorate([
        property({ type: cc.AudioClip })
    ], SoundMgr.prototype, "BGM", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], SoundMgr.prototype, "SFX_BUTTON", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], SoundMgr.prototype, "SFX_SELECT", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], SoundMgr.prototype, "SFX_ENDSCREEN", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], SoundMgr.prototype, "SFX_EXPLODE", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], SoundMgr.prototype, "SFX_CRYSTAL", void 0);
    SoundMgr = __decorate([
        ccclass
    ], SoundMgr);
    return SoundMgr;
}(SingletonNode_1.default()));
exports.default = SoundMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcY29tbW9uXFxTb3VuZE1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBbUQ7QUFFN0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQXlCO0lBQS9EO1FBQUEscUVBcURDO1FBbkRtQyxTQUFHLEdBQWlCLElBQUksQ0FBQztRQUN6QixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFDaEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBQ2hDLG1CQUFhLEdBQWlCLElBQUksQ0FBQztRQUNuQyxpQkFBVyxHQUFpQixJQUFJLENBQUM7UUFDakMsaUJBQVcsR0FBaUIsSUFBSSxDQUFDOztJQThDckUsQ0FBQztJQTVDQyxzQkFBVyxrQkFBTTthQUFqQixjQUFxQixPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDbkUsc0JBQVcsMEJBQWM7YUFBekIsY0FBNkIsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFFL0Qsa0JBQVMsR0FBaEIsVUFBaUIsSUFBa0IsRUFBRSxJQUFvQjtRQUFwQixxQkFBQSxFQUFBLFdBQW9CO1FBQ3ZELEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sZ0JBQU8sR0FBZCxVQUFlLElBQWtCLEVBQUUsSUFBcUI7UUFBckIscUJBQUEsRUFBQSxZQUFxQjtRQUN0RCxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVNLG1CQUFVLEdBQWpCO1FBQ0UsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU0saUJBQVEsR0FBZjtRQUNFLEVBQUUsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVNLGtCQUFTLEdBQWhCO1FBQ0UsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRU0sZ0JBQU8sR0FBZDtRQUNFLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVNLGdCQUFPLEdBQWQsVUFBZSxLQUFxQjtRQUFyQixzQkFBQSxFQUFBLFlBQXFCO1FBQ2xDLElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRU0sdUJBQWMsR0FBckIsVUFBc0IsS0FBSztRQUN6QixFQUFFLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0scUJBQVksR0FBbkIsVUFBb0IsS0FBSztRQUN2QixFQUFFLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFSyxvQkFBVyxHQUFsQjtRQUNDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQWxEa0M7UUFBakMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzt5Q0FBMEI7SUFDekI7UUFBakMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnREFBaUM7SUFDaEM7UUFBakMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnREFBaUM7SUFDaEM7UUFBakMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzttREFBb0M7SUFDbkM7UUFBakMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztpREFBa0M7SUFDakM7UUFBakMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztpREFBa0M7SUFQaEQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXFENUI7SUFBRCxlQUFDO0NBckRELEFBcURDLENBckRxQyx1QkFBYSxFQUFZLEdBcUQ5RDtrQkFyRG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2luZ2xldG9uTm9kZSBmcm9tIFwiLi4vdXRpbHMvU2luZ2xldG9uTm9kZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kTWdyIGV4dGVuZHMgU2luZ2xldG9uTm9kZTxTb3VuZE1ncj4oKVxyXG57XHJcbiAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pIEJHTTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSkgU0ZYX0JVVFRPTjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSkgU0ZYX1NFTEVDVDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSkgU0ZYX0VORFNDUkVFTjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSkgU0ZYX0VYUExPREU6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pIFNGWF9DUllTVEFMOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICBzdGF0aWMgZ2V0IElzTXV0ZSgpeyByZXR1cm4gY2MuYXVkaW9FbmdpbmUuZ2V0TXVzaWNWb2x1bWUoKSA9PSAwOyB9XHJcbiAgc3RhdGljIGdldCBJc011c2ljUGxheWluZygpeyByZXR1cm4gY2MuYXVkaW9FbmdpbmUuaXNNdXNpY1BsYXlpbmcoKTsgfVxyXG5cclxuICBzdGF0aWMgcGxheU11c2ljKGNsaXA6IGNjLkF1ZGlvQ2xpcCwgbG9vcDogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyhjbGlwLCBsb29wKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBwbGF5U2Z4KGNsaXA6IGNjLkF1ZGlvQ2xpcCwgbG9vcDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGNsaXAsIGxvb3ApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHBhdXNlTXVzaWMoKSB7XHJcbiAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZU11c2ljKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcGF1c2VBbGwoKSB7XHJcbiAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZUFsbCgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHN0b3BNdXNpYygpIHtcclxuICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHN0b3BBbGwoKSB7XHJcbiAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2V0TXV0ZSh2YWx1ZTogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgIGNvbnN0IHZvbHVtZSA9IE51bWJlcighdmFsdWUpO1xyXG4gICAgdGhpcy5zZXRNdXNpY1ZvbHVtZSh2b2x1bWUpO1xyXG4gICAgdGhpcy5zZXRTZnhWb2x1bWUodm9sdW1lKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzZXRNdXNpY1ZvbHVtZSh2YWx1ZSkge1xyXG4gICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNldFNmeFZvbHVtZSh2YWx1ZSkge1xyXG4gICAgY2MuYXVkaW9FbmdpbmUuc2V0RWZmZWN0c1ZvbHVtZSh2YWx1ZSk7XHJcbiAgfVxyXG5cdFxyXG5cdHN0YXRpYyB0b2dnbGVTb3VuZCgpe1xyXG5cdFx0dGhpcy5zZXRNdXRlKCF0aGlzLklzTXV0ZSk7XHJcblx0fVxyXG59XHJcbiJdfQ==