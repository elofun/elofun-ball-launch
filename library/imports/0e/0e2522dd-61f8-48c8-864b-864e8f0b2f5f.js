"use strict";
cc._RF.push(module, '0e252LdYfhIyIZLhk6PCy9f', 'StageStartGame');
// Scripts/stage/StageStartGame.ts

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
var Stage_1 = require("./Stage");
var StageMgr_1 = require("./StageMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StageStartGame = /** @class */ (function (_super) {
    __extends(StageStartGame, _super);
    function StageStartGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startButton = null;
        return _this;
    }
    StageStartGame_1 = StageStartGame;
    // LIFE-CYCLE CALLBACKS:
    StageStartGame.prototype.onLoad = function () {
        StageStartGame_1.Instance = this;
    };
    StageStartGame.prototype.nextStage = function (isRemote) {
        if (isRemote === void 0) { isRemote = false; }
        if (isRemote) {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            cc.tween(this.startButton)
                .to(0.1, { scale: 0.65 })
                .to(0.1, { scale: 0.5 })
                .call(function () {
                StageMgr_1.default.show(StageMgr_1.Stages.StageTestGame);
            })
                .start();
        }
        else {
            StageMgr_1.default.show(StageMgr_1.Stages.StageTestGame);
        }
    };
    var StageStartGame_1;
    StageStartGame.Instance = null;
    __decorate([
        property(cc.Node)
    ], StageStartGame.prototype, "startButton", void 0);
    StageStartGame = StageStartGame_1 = __decorate([
        ccclass
    ], StageStartGame);
    return StageStartGame;
}(Stage_1.default));
exports.default = StageStartGame;

cc._RF.pop();