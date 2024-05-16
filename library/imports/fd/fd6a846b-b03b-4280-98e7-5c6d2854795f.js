"use strict";
cc._RF.push(module, 'fd6a8RrsDtCgJjnXG0oVHlf', 'StageMgr');
// Scripts/stage/StageMgr.ts

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
exports.Stages = void 0;
var Stage_1 = require("./Stage");
var SingletonNode_1 = require("../utils/SingletonNode");
var Helper_1 = require("../utils/Helper");
var PeerManager_1 = require("../PeerComponent/PeerManager");
var StageQRscan_1 = require("./StageQRscan");
var StageLobby_1 = require("./StageLobby");
var StageGameEnd_1 = require("./StageGameEnd");
var StageInGame_1 = require("./StageInGame");
var PeerDefine_1 = require("../PeerComponent/PeerDefine");
var StageStartGame_1 = require("./StageStartGame");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Stages;
(function (Stages) {
    Stages[Stages["StageQRscan"] = 0] = "StageQRscan";
    Stages[Stages["StageLobby"] = 1] = "StageLobby";
    Stages[Stages["StageInGame"] = 2] = "StageInGame";
    Stages[Stages["StageGameEnd"] = 3] = "StageGameEnd";
    Stages[Stages["StageStartGame"] = 4] = "StageStartGame";
    Stages[Stages["StageTestGame"] = 5] = "StageTestGame";
})(Stages = exports.Stages || (exports.Stages = {}));
var StageMgr = /** @class */ (function (_super) {
    __extends(StageMgr, _super);
    function StageMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.StagePrefabs = [];
        _this.StageCover = null;
        _this.isTweening = false;
        _this.mPreviousStage = null;
        _this.mCurrentStage = null;
        _this.inputCode = [];
        return _this;
    }
    StageMgr_1 = StageMgr;
    Object.defineProperty(StageMgr.prototype, "CurrentStage", {
        get: function () {
            return this.mCurrentStage;
        },
        enumerable: false,
        configurable: true
    });
    StageMgr.show = function (stageName, duration) {
        if (duration === void 0) { duration = 0.5; }
        if (StageMgr_1.Instance.isTweening) {
            return;
        }
        var instance = this.Instance;
        instance.mPreviousStage = instance.mCurrentStage;
        for (var _i = 0, _a = instance.node.children; _i < _a.length; _i++) {
            var stage = _a[_i];
            var isActive = stage.name == Stages[stageName];
            if (isActive) {
                instance.mCurrentStage = stage;
            }
            if (stage.active != isActive) {
                stage.active = isActive;
            }
        }
        if (instance.mPreviousStage &&
            instance.mCurrentStage &&
            instance.mPreviousStage != instance.mCurrentStage) {
            instance.animate(duration);
        }
        else {
            instance.mCurrentStage.getComponent(Stage_1.default).init();
        }
        var msg = {
            phase: PeerDefine_1.PeerPhase.NONE,
            action: PeerDefine_1.PeerActionType.SHOW,
            customParam: "",
        };
        return;
        PeerManager_1.default.Instance.PlayGame(false);
        switch (stageName) {
            case Stages.StageInGame:
                StageInGame_1.default.Instance.initial();
                PeerManager_1.default.Instance.PlayGame();
                msg.phase = PeerDefine_1.PeerPhase.INGAME;
                break;
            case Stages.StageLobby:
                msg.phase = PeerDefine_1.PeerPhase.WAITING;
                break;
            case Stages.StageGameEnd:
                msg.phase = PeerDefine_1.PeerPhase.GAMEOVER;
                break;
        }
        PeerManager_1.default.Instance.sendMessageToAll(msg);
    };
    StageMgr.nextStage = function (isNext, duration) {
        if (isNext === void 0) { isNext = true; }
        if (duration === void 0) { duration = 0.5; }
        var instance = this.Instance;
        var index = instance.node.children.indexOf(instance.mCurrentStage);
        if (!isNext && index == 0) {
            // window.location = GameDefine.DEEP_LINK_BACK;
        }
        else if (index != -1 &&
            ((isNext && index < instance.node.childrenCount - 1) ||
                (!isNext && index > 0))) {
            index = isNext ? index + 1 : index - 1;
            StageMgr_1.show(Helper_1.default.GetIndexEnum(Stages, instance.node.children[index].name), duration);
        }
    };
    StageMgr.prototype.onLoad = function () {
        var _this = this;
        _super.prototype.onLoad.call(this);
        for (var i = 0; i < this.StagePrefabs.length; i++) {
            var node = cc.instantiate(this.StagePrefabs[i]);
            this.node.addChild(node);
            node.active = false;
        }
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function (event) {
            _this.inputCode.push(event.keyCode);
            if (_this.inputCode.length >= 4) {
                if (_this.inputCode.toString() == [54, 55, 56, 57].toString()) {
                    cc.debug.setDisplayStats(true);
                }
                _this.inputCode.shift();
            }
            if (PeerManager_1.default.Instance.isPlayWithRemote) {
                switch (StageMgr_1.Instance.CurrentStage.name) {
                    case Stages[Stages.StageQRscan]:
                        if (event.keyCode == 13) {
                            StageQRscan_1.default.Instance.nextStage(true);
                            PeerManager_1.default.Instance.setRemoteMode(true);
                        }
                        break;
                    case Stages[Stages.StageStartGame]:
                        if (event.keyCode == 13) {
                            StageStartGame_1.default.Instance.nextStage(true);
                        }
                        break;
                    case Stages[Stages.StageLobby]:
                        if (event.keyCode == 13) {
                            StageLobby_1.default.Instance.nextStage();
                        }
                        break;
                    case Stages[Stages.StageGameEnd]:
                        if (event.keyCode == 37) {
                            StageGameEnd_1.default.Instance.chooseButton(false);
                        }
                        else if (event.keyCode == 39) {
                            StageGameEnd_1.default.Instance.chooseButton(true);
                        }
                        else if (event.keyCode == 13) {
                            if (StageGameEnd_1.default.Instance.btnPlay.interactable) {
                                StageGameEnd_1.default.Instance.nextStage();
                            }
                            else {
                                StageGameEnd_1.default.Instance.previousStage();
                            }
                        }
                        break;
                }
            }
        });
        window.addEventListener("message", this.onReciveMessage.bind(this), false);
        this.sendMessage("getControllerURL"); // có thể thêm customParam nếu muốn
        this.sendMessage("getPrefix");
        this.sendMessage("getControllerOrigin");
    };
    StageMgr.prototype.onReciveMessage = function (e) {
        if (e.data && e.data.action) {
            var msg = e.data;
            switch (msg.action) {
                case "getPrefix": {
                    window.controllerPrefix = msg.message;
                    break;
                }
                case "getControllerURL": {
                    window.controllerURL = msg.message;
                    break;
                }
                case "getControllerOrigin": {
                    window.controllerOrigin = msg.message;
                    break;
                }
            }
        }
    };
    StageMgr.prototype.sendMessage = function (action, customParam) {
        if (customParam === void 0) { customParam = null; }
        var msg = {
            action: action,
            game: "zig-zag",
            customParam: customParam,
        };
        window.parent.postMessage(msg, "*");
    };
    StageMgr.prototype.start = function () {
        this.StageCover = cc.find("Canvas").getChildByName("Stage Cover");
        this.StageCover.active = false;
        StageMgr_1.show(Stages.StageQRscan);
    };
    StageMgr.prototype.animate = function (duration) {
        var _this = this;
        this.mPreviousStage.active = true;
        this.mCurrentStage.active = false;
        this.isTweening = true;
        this.StageCover.active = true;
        cc.tween(this.mPreviousStage)
            .to(duration, { scale: this.mPreviousStage.scaleX }, {
            progress: function (start, end, current, ratio) {
                // this.mPreviousStage.opacity = (1 - ratio) * 255;
                _this.StageCover.opacity = ratio * 255;
                return start + (end - start) * ratio;
            },
        })
            .call(function () {
            _this.mPreviousStage.active = false;
            _this.mCurrentStage.active = true;
            _this.mCurrentStage.getComponent(Stage_1.default).init();
        })
            .start();
        cc.tween(this.mCurrentStage)
            .delay(duration)
            .to(duration, { scale: this.mCurrentStage.scaleX }, {
            progress: function (start, end, current, ratio) {
                // this.mCurrentStage.opacity = ratio * 255;
                _this.StageCover.opacity = (1 - ratio) * 255;
                return start + (end - start) * ratio;
            },
        })
            .call(function () {
            _this.StageCover.active = false;
            _this.isTweening = false;
        })
            .start();
    };
    var StageMgr_1;
    __decorate([
        property(cc.Prefab)
    ], StageMgr.prototype, "StagePrefabs", void 0);
    StageMgr = StageMgr_1 = __decorate([
        ccclass
    ], StageMgr);
    return StageMgr;
}(SingletonNode_1.default()));
exports.default = StageMgr;

cc._RF.pop();