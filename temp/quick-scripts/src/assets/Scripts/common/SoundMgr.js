"use strict";
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