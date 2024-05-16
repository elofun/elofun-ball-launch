
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/AudioController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQXVkaW9Db250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBa0Q7QUFDNUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsSUFBWSxNQW1CWDtBQW5CRCxXQUFZLE1BQU07SUFFZCx5Q0FBVyxDQUFBO0lBQ1gsMkNBQVksQ0FBQTtJQUNaLHFDQUFTLENBQUE7SUFDVCxxREFBaUIsQ0FBQTtJQUNqQiwyQ0FBWSxDQUFBO0lBQ1osaURBQWUsQ0FBQTtJQUNmLDJDQUFZLENBQUE7SUFDWixtREFBZ0IsQ0FBQTtJQUNoQiwyQ0FBWSxDQUFBO0lBQ1osdURBQWtCLENBQUE7SUFDbEIsb0NBQVMsQ0FBQTtJQUNULHNDQUFVLENBQUE7SUFDViw4Q0FBYyxDQUFBO0lBQ2Qsc0NBQVUsQ0FBQTtJQUNWLDhDQUFjLENBQUE7SUFDZCxvREFBaUIsQ0FBQTtJQUNqQixvREFBaUIsQ0FBQTtBQUNyQixDQUFDLEVBbkJXLE1BQU0sR0FBTixjQUFNLEtBQU4sY0FBTSxRQW1CakI7QUFFRDtJQUE2QyxtQ0FBZ0M7SUFBN0U7UUFBQSxxRUE4Q0M7UUEzQ0csd0JBQXdCO1FBQ0EsZUFBUyxHQUF5QixFQUFFLENBQUM7UUFFdEQsWUFBTSxHQUFhLENBQUMsQ0FBQzs7SUF3Q2hDLENBQUM7SUF0Q0csZ0NBQU0sR0FBTjtRQUVJLGlCQUFNLE1BQU0sV0FBRSxDQUFBO0lBQ2xCLENBQUM7SUFDRCwrQkFBSyxHQUFMO0lBR0EsQ0FBQztJQUNELHlDQUFlLEdBQWYsVUFBZ0IsU0FBa0IsRUFBRSxJQUFzQjtRQUF0QixxQkFBQSxFQUFBLFlBQXNCO1FBRXRELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDckMsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDakQsQ0FBQztJQUNELHlDQUFlLEdBQWYsVUFBZ0IsRUFBVztRQUV2QixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBQ0QsNENBQWtCLEdBQWxCO1FBRUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtJQUNuQyxDQUFDO0lBQ0QseUNBQWUsR0FBZjtRQUVJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFDRCxpQ0FBTyxHQUFQO1FBRUksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFDcEI7WUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoQixFQUFFLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQ3JDO2FBQ0Q7WUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoQixFQUFFLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQ3JDO0lBQ0wsQ0FBQztJQXhDdUI7UUFBdkIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7c0RBQXNDO0lBSjVDLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0E4Q25DO0lBQUQsc0JBQUM7Q0E5Q0QsQUE4Q0MsQ0E5QzRDLHVCQUFhLEVBQW1CLEdBOEM1RTtrQkE5Q29CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2luZ2xldG9uTm9kZSBmcm9tIFwiLi91dGlscy9TaW5nbGV0b25Ob2RlXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmV4cG9ydCBlbnVtIEF1ZGlvc1xyXG57XHJcbiAgICBCb29zdGVyID0gMCxcclxuICAgIEJ0bkNsaWNrID0gMSxcclxuICAgIE1DRGllID0gMixcclxuICAgIEVuZW1pZXNDb21pbmcgPSAzLFxyXG4gICAgRW5lbXlEaWUgPSA0LFxyXG4gICAgRnJlZXplU2tpbGwgPSA1LFxyXG4gICAgR2FtZU92ZXIgPSA2LFxyXG4gICAgR2FtZVBsYXlMb29wID0gNyxcclxuICAgIEhvbWVMb29wID0gOCxcclxuICAgIEludmlzaWJsZVNraWxsID0gOSxcclxuICAgIEp1bXAgPSAxMCxcclxuICAgIE1DSGl0ID0gMTEsXHJcbiAgICBSYWdlU2tpbGwgPSAxMixcclxuICAgIFJvYXJyID0gMTMsXHJcbiAgICBTbG93U2tpbGwgPSAxNCxcclxuICAgIFN3aXBlT25FbmVteSA9IDE1LFxyXG4gICAgV2F0ZXJDb21taW5nID0gMTYsXHJcbn1cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW9Db250cm9sbGVyIGV4dGVuZHMgU2luZ2xldG9uTm9kZTxBdWRpb0NvbnRyb2xsZXI+KCkge1xyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApIEF1ZGlvTGlzdCA6IEFycmF5PGNjLkF1ZGlvQ2xpcD4gPSBbXTtcclxuXHJcbiAgICBwdWJsaWMgdm9sdW1lIDogbnVtYmVyICA9IDE7XHJcbiAgICBcclxuICAgIG9uTG9hZCgpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIub25Mb2FkKClcclxuICAgIH1cclxuICAgIHN0YXJ0KClcclxuICAgIHtcclxuXHJcbiAgICB9XHJcbiAgICBwbGF5QXVkaW9FZmZlY3QoYXVkaW9DbGlwIDogQXVkaW9zLCBsb29wIDogYm9vbGVhbiA9IGZhbHNlKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBhdWRpbyA9IHRoaXMuQXVkaW9MaXN0W2F1ZGlvQ2xpcF1cclxuICAgICAgICByZXR1cm4gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChhdWRpbywgbG9vcClcclxuICAgIH1cclxuICAgIHN0b3BBdWRpb0VmZmVjdChpZCA6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wRWZmZWN0KGlkKVxyXG4gICAgfVxyXG4gICAgc3RvcEFsbEF1ZGlvRWZmZWN0KClcclxuICAgIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpXHJcbiAgICB9XHJcbiAgICBwbGF5QnV0dG9uU291bmQoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucGxheUF1ZGlvRWZmZWN0KEF1ZGlvcy5CdG5DbGljaylcclxuICAgIH1cclxuICAgIHNldE11dGUoKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLnZvbHVtZSA9PSAxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy52b2x1bWUgPSAwO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRFZmZlY3RzVm9sdW1lKDApXHJcbiAgICAgICAgfSBlbHNlIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy52b2x1bWUgPSAxO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRFZmZlY3RzVm9sdW1lKDEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=