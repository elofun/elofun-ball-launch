"use strict";
cc._RF.push(module, 'a9ec7Y1hx1KB5gy4Z0CyAdY', 'AudioController');
// Scripts/AudioController.ts

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
exports.Audios = void 0;
var SingletonNode_1 = require("./utils/SingletonNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Audios;
(function (Audios) {
    Audios[Audios["Booster"] = 0] = "Booster";
    Audios[Audios["BtnClick"] = 1] = "BtnClick";
    Audios[Audios["MCDie"] = 2] = "MCDie";
    Audios[Audios["EnemiesComing"] = 3] = "EnemiesComing";
    Audios[Audios["EnemyDie"] = 4] = "EnemyDie";
    Audios[Audios["FreezeSkill"] = 5] = "FreezeSkill";
    Audios[Audios["GameOver"] = 6] = "GameOver";
    Audios[Audios["GamePlayLoop"] = 7] = "GamePlayLoop";
    Audios[Audios["HomeLoop"] = 8] = "HomeLoop";
    Audios[Audios["InvisibleSkill"] = 9] = "InvisibleSkill";
    Audios[Audios["Jump"] = 10] = "Jump";
    Audios[Audios["MCHit"] = 11] = "MCHit";
    Audios[Audios["RageSkill"] = 12] = "RageSkill";
    Audios[Audios["Roarr"] = 13] = "Roarr";
    Audios[Audios["SlowSkill"] = 14] = "SlowSkill";
    Audios[Audios["SwipeOnEnemy"] = 15] = "SwipeOnEnemy";
    Audios[Audios["WaterComming"] = 16] = "WaterComming";
})(Audios = exports.Audios || (exports.Audios = {}));
var AudioController = /** @class */ (function (_super) {
    __extends(AudioController, _super);
    function AudioController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // LIFE-CYCLE CALLBACKS:
        _this.AudioList = [];
        _this.volume = 1;
        return _this;
    }
    AudioController.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    AudioController.prototype.start = function () {
    };
    AudioController.prototype.playAudioEffect = function (audioClip, loop) {
        if (loop === void 0) { loop = false; }
        var audio = this.AudioList[audioClip];
        return cc.audioEngine.playEffect(audio, loop);
    };
    AudioController.prototype.stopAudioEffect = function (id) {
        cc.audioEngine.stopEffect(id);
    };
    AudioController.prototype.stopAllAudioEffect = function () {
        cc.audioEngine.stopAllEffects();
    };
    AudioController.prototype.playButtonSound = function () {
        this.playAudioEffect(Audios.BtnClick);
    };
    AudioController.prototype.setMute = function () {
        if (this.volume == 1) {
            this.volume = 0;
            cc.audioEngine.setEffectsVolume(0);
        }
        else {
            this.volume = 1;
            cc.audioEngine.setEffectsVolume(1);
        }
    };
    __decorate([
        property(cc.AudioClip)
    ], AudioController.prototype, "AudioList", void 0);
    AudioController = __decorate([
        ccclass
    ], AudioController);
    return AudioController;
}(SingletonNode_1.default()));
exports.default = AudioController;

cc._RF.pop();