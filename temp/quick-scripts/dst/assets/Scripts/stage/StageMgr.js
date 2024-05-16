
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/stage/StageMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3RhZ2VcXFN0YWdlTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBNEI7QUFDNUIsd0RBQW1EO0FBRW5ELDBDQUFxQztBQUVyQyw0REFBMEU7QUFDMUUsNkNBQXdDO0FBQ3hDLDJDQUFzQztBQUN0QywrQ0FBMEM7QUFDMUMsNkNBQXdDO0FBQ3hDLDBEQUlxQztBQUNyQyxtREFBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBWSxNQU9YO0FBUEQsV0FBWSxNQUFNO0lBQ2hCLGlEQUFXLENBQUE7SUFDWCwrQ0FBVSxDQUFBO0lBQ1YsaURBQVcsQ0FBQTtJQUNYLG1EQUFZLENBQUE7SUFDWix1REFBYyxDQUFBO0lBQ2QscURBQWEsQ0FBQTtBQUNmLENBQUMsRUFQVyxNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUFPakI7QUFHRDtJQUFzQyw0QkFBeUI7SUFBL0Q7UUFBQSxxRUFrT0M7UUFqTzhCLGtCQUFZLEdBQXFCLEVBQUUsQ0FBQztRQUN6RCxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQU01QixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUMvQixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUM5QixlQUFTLEdBQWEsRUFBRSxDQUFDOztJQXVObkMsQ0FBQztpQkFsT29CLFFBQVE7SUFLM0Isc0JBQUksa0NBQVk7YUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFNTSxhQUFJLEdBQVgsVUFBWSxTQUFpQixFQUFFLFFBQXNCO1FBQXRCLHlCQUFBLEVBQUEsY0FBc0I7UUFDbkQsSUFBSSxVQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRTtZQUNoQyxPQUFPO1NBQ1I7UUFDRCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9CLFFBQVEsQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQztRQUVqRCxLQUFrQixVQUFzQixFQUF0QixLQUFBLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUF0QixjQUFzQixFQUF0QixJQUFzQixFQUFFO1lBQXJDLElBQUksS0FBSyxTQUFBO1lBQ1osSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFakQsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osUUFBUSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7YUFDaEM7WUFFRCxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksUUFBUSxFQUFFO2dCQUM1QixLQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQzthQUN6QjtTQUNGO1FBRUQsSUFDRSxRQUFRLENBQUMsY0FBYztZQUN2QixRQUFRLENBQUMsYUFBYTtZQUN0QixRQUFRLENBQUMsY0FBYyxJQUFJLFFBQVEsQ0FBQyxhQUFhLEVBQ2pEO1lBQ0EsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM1QjthQUFNO1lBQ0wsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsZUFBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDbkQ7UUFFRCxJQUFJLEdBQUcsR0FBa0I7WUFDdkIsS0FBSyxFQUFFLHNCQUFTLENBQUMsSUFBSTtZQUNyQixNQUFNLEVBQUUsMkJBQWMsQ0FBQyxJQUFJO1lBQzNCLFdBQVcsRUFBRSxFQUFFO1NBQ2hCLENBQUM7UUFDRixPQUFPO1FBQ1AscUJBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXJDLFFBQVEsU0FBUyxFQUFFO1lBQ2pCLEtBQUssTUFBTSxDQUFDLFdBQVc7Z0JBQ3JCLHFCQUFXLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUMvQixxQkFBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDaEMsR0FBRyxDQUFDLEtBQUssR0FBRyxzQkFBUyxDQUFDLE1BQU0sQ0FBQztnQkFDN0IsTUFBTTtZQUNSLEtBQUssTUFBTSxDQUFDLFVBQVU7Z0JBQ3BCLEdBQUcsQ0FBQyxLQUFLLEdBQUcsc0JBQVMsQ0FBQyxPQUFPLENBQUM7Z0JBQzlCLE1BQU07WUFDUixLQUFLLE1BQU0sQ0FBQyxZQUFZO2dCQUN0QixHQUFHLENBQUMsS0FBSyxHQUFHLHNCQUFTLENBQUMsUUFBUSxDQUFDO2dCQUMvQixNQUFNO1NBQ1Q7UUFFRCxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU0sa0JBQVMsR0FBaEIsVUFBaUIsTUFBc0IsRUFBRSxRQUFzQjtRQUE5Qyx1QkFBQSxFQUFBLGFBQXNCO1FBQUUseUJBQUEsRUFBQSxjQUFzQjtRQUM3RCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFbkUsSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO1lBQ3pCLCtDQUErQztTQUNoRDthQUFNLElBQ0wsS0FBSyxJQUFJLENBQUMsQ0FBQztZQUNYLENBQUMsQ0FBQyxNQUFNLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztnQkFDbEQsQ0FBQyxDQUFDLE1BQU0sSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFDekI7WUFDQSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZDLFVBQVEsQ0FBQyxJQUFJLENBQ1gsZ0JBQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUMvRCxRQUFRLENBQ1QsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVELHlCQUFNLEdBQU47UUFBQSxpQkEyREM7UUExREMsaUJBQU0sTUFBTSxXQUFFLENBQUM7UUFDZixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakQsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckI7UUFFRCxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FDZixFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQ2pDLFVBQUMsS0FBNkI7WUFDNUIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ25DLElBQUksS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUM5QixJQUFJLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtvQkFDNUQsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2hDO2dCQUNELEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDeEI7WUFDRCxJQUFJLHFCQUFXLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFO2dCQUN6QyxRQUFRLFVBQVEsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRTtvQkFDM0MsS0FBSyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQzt3QkFDN0IsSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsRUFBRTs0QkFDdkIscUJBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNyQyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQzFDO3dCQUNELE1BQU07b0JBQ1IsS0FBSyxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQzt3QkFDaEMsSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsRUFBRTs0QkFDdkIsd0JBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUN6Qzt3QkFDRCxNQUFNO29CQUNSLEtBQUssTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7d0JBQzVCLElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxFQUFFLEVBQUU7NEJBQ3ZCLG9CQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDO3lCQUNqQzt3QkFDRCxNQUFNO29CQUNSLEtBQUssTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7d0JBQzlCLElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxFQUFFLEVBQUU7NEJBQ3ZCLHNCQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzt5QkFDM0M7NkJBQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsRUFBRTs0QkFDOUIsc0JBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUMxQzs2QkFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksRUFBRSxFQUFFOzRCQUM5QixJQUFJLHNCQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUU7Z0NBQzlDLHNCQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDOzZCQUNuQztpQ0FBTTtnQ0FDTCxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQzs2QkFDdkM7eUJBQ0Y7d0JBQ0QsTUFBTTtpQkFDVDthQUNGO1FBQ0gsQ0FBQyxDQUNGLENBQUM7UUFFRixNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRTNFLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLG1DQUFtQztRQUN6RSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsa0NBQWUsR0FBZixVQUFnQixDQUFDO1FBQ2YsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzNCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDakIsUUFBUSxHQUFHLENBQUMsTUFBTSxFQUFFO2dCQUNsQixLQUFLLFdBQVcsQ0FBQyxDQUFDO29CQUNoQixNQUFNLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztvQkFDdEMsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLGtCQUFrQixDQUFDLENBQUM7b0JBQ3ZCLE1BQU0sQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztvQkFDbkMsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLHFCQUFxQixDQUFDLENBQUM7b0JBQzFCLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFFRCw4QkFBVyxHQUFYLFVBQVksTUFBYyxFQUFFLFdBQXVCO1FBQXZCLDRCQUFBLEVBQUEsa0JBQXVCO1FBQ2pELElBQUksR0FBRyxHQUFHO1lBQ1IsTUFBTSxFQUFFLE1BQU07WUFDZCxJQUFJLEVBQUUsU0FBUztZQUNmLFdBQVcsRUFBRSxXQUFXO1NBQ3pCLENBQUM7UUFDRCxNQUFjLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUUvQixVQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU8sMEJBQU8sR0FBZixVQUFnQixRQUFnQjtRQUFoQyxpQkEwQ0M7UUF6Q0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUV2QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDOUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO2FBQzFCLEVBQUUsQ0FDRCxRQUFRLEVBQ1IsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsRUFDckM7WUFDRSxRQUFRLEVBQUUsVUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxLQUFLO2dCQUNuQyxtREFBbUQ7Z0JBQ25ELEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBQ3RDLE9BQU8sS0FBSyxHQUFHLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUN2QyxDQUFDO1NBQ0YsQ0FDRjthQUNBLElBQUksQ0FBQztZQUNKLEtBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNuQyxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDakMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsZUFBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEQsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7UUFDWCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7YUFDekIsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUNmLEVBQUUsQ0FDRCxRQUFRLEVBQ1IsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsRUFDcEM7WUFDRSxRQUFRLEVBQUUsVUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxLQUFLO2dCQUNuQyw0Q0FBNEM7Z0JBQzVDLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQztnQkFDNUMsT0FBTyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQ3ZDLENBQUM7U0FDRixDQUNGO2FBQ0EsSUFBSSxDQUFDO1lBQ0osS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQy9CLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQzs7SUFoT29CO1FBQXBCLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2tEQUE2QztJQUQ5QyxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBa081QjtJQUFELGVBQUM7Q0FsT0QsQUFrT0MsQ0FsT3FDLHVCQUFhLEVBQVksR0FrTzlEO2tCQWxPb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdGFnZSBmcm9tIFwiLi9TdGFnZVwiO1xyXG5pbXBvcnQgU2luZ2xldG9uTm9kZSBmcm9tIFwiLi4vdXRpbHMvU2luZ2xldG9uTm9kZVwiO1xyXG5pbXBvcnQgR2FtZU1nciBmcm9tIFwiLi4vZ2FtZS9HYW1lTWFuYWdlclwiO1xyXG5pbXBvcnQgSGVscGVyIGZyb20gXCIuLi91dGlscy9IZWxwZXJcIjtcclxuaW1wb3J0IEdhbWVEZWZpbmUgZnJvbSBcIi4uL2dhbWUvR2FtZURlZmluZVwiO1xyXG5pbXBvcnQgUGVlck1hbmFnZXIsIHsgSURhdGFSZWNlaXZlZCB9IGZyb20gXCIuLi9QZWVyQ29tcG9uZW50L1BlZXJNYW5hZ2VyXCI7XHJcbmltcG9ydCBTdGFnZVFSc2NhbiBmcm9tIFwiLi9TdGFnZVFSc2NhblwiO1xyXG5pbXBvcnQgU3RhZ2VMb2JieSBmcm9tIFwiLi9TdGFnZUxvYmJ5XCI7XHJcbmltcG9ydCBTdGFnZUdhbWVFbmQgZnJvbSBcIi4vU3RhZ2VHYW1lRW5kXCI7XHJcbmltcG9ydCBTdGFnZUluR2FtZSBmcm9tIFwiLi9TdGFnZUluR2FtZVwiO1xyXG5pbXBvcnQge1xyXG4gIFBlZXJBY3Rpb25UeXBlLFxyXG4gIFBlZXJQaGFzZSxcclxuICBQZWVyU3RhZ2UsXHJcbn0gZnJvbSBcIi4uL1BlZXJDb21wb25lbnQvUGVlckRlZmluZVwiO1xyXG5pbXBvcnQgU3RhZ2VTdGFydEdhbWUgZnJvbSBcIi4vU3RhZ2VTdGFydEdhbWVcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5leHBvcnQgZW51bSBTdGFnZXMge1xyXG4gIFN0YWdlUVJzY2FuLFxyXG4gIFN0YWdlTG9iYnksXHJcbiAgU3RhZ2VJbkdhbWUsXHJcbiAgU3RhZ2VHYW1lRW5kLFxyXG4gIFN0YWdlU3RhcnRHYW1lLFxyXG4gIFN0YWdlVGVzdEdhbWUsXHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YWdlTWdyIGV4dGVuZHMgU2luZ2xldG9uTm9kZTxTdGFnZU1ncj4oKSB7XHJcbiAgQHByb3BlcnR5KGNjLlByZWZhYikgcHJpdmF0ZSBTdGFnZVByZWZhYnM6IEFycmF5PGNjLlByZWZhYj4gPSBbXTtcclxuICBwcml2YXRlIFN0YWdlQ292ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gIHByaXZhdGUgaXNUd2VlbmluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBnZXQgQ3VycmVudFN0YWdlKCk6IGNjLk5vZGUge1xyXG4gICAgcmV0dXJuIHRoaXMubUN1cnJlbnRTdGFnZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbVByZXZpb3VzU3RhZ2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gIHByaXZhdGUgbUN1cnJlbnRTdGFnZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgcHJpdmF0ZSBpbnB1dENvZGU6IG51bWJlcltdID0gW107XHJcblxyXG4gIHN0YXRpYyBzaG93KHN0YWdlTmFtZTogU3RhZ2VzLCBkdXJhdGlvbjogbnVtYmVyID0gMC41KSB7XHJcbiAgICBpZiAoU3RhZ2VNZ3IuSW5zdGFuY2UuaXNUd2VlbmluZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuSW5zdGFuY2U7XHJcbiAgICBpbnN0YW5jZS5tUHJldmlvdXNTdGFnZSA9IGluc3RhbmNlLm1DdXJyZW50U3RhZ2U7XHJcblxyXG4gICAgZm9yIChsZXQgc3RhZ2Ugb2YgaW5zdGFuY2Uubm9kZS5jaGlsZHJlbikge1xyXG4gICAgICBjb25zdCBpc0FjdGl2ZSA9IHN0YWdlLm5hbWUgPT0gU3RhZ2VzW3N0YWdlTmFtZV07XHJcblxyXG4gICAgICBpZiAoaXNBY3RpdmUpIHtcclxuICAgICAgICBpbnN0YW5jZS5tQ3VycmVudFN0YWdlID0gc3RhZ2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChzdGFnZS5hY3RpdmUgIT0gaXNBY3RpdmUpIHtcclxuICAgICAgICBzdGFnZS5hY3RpdmUgPSBpc0FjdGl2ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChcclxuICAgICAgaW5zdGFuY2UubVByZXZpb3VzU3RhZ2UgJiZcclxuICAgICAgaW5zdGFuY2UubUN1cnJlbnRTdGFnZSAmJlxyXG4gICAgICBpbnN0YW5jZS5tUHJldmlvdXNTdGFnZSAhPSBpbnN0YW5jZS5tQ3VycmVudFN0YWdlXHJcbiAgICApIHtcclxuICAgICAgaW5zdGFuY2UuYW5pbWF0ZShkdXJhdGlvbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbnN0YW5jZS5tQ3VycmVudFN0YWdlLmdldENvbXBvbmVudChTdGFnZSkuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBtc2c6IElEYXRhUmVjZWl2ZWQgPSB7XHJcbiAgICAgIHBoYXNlOiBQZWVyUGhhc2UuTk9ORSxcclxuICAgICAgYWN0aW9uOiBQZWVyQWN0aW9uVHlwZS5TSE9XLFxyXG4gICAgICBjdXN0b21QYXJhbTogXCJcIixcclxuICAgIH07XHJcbiAgICByZXR1cm47XHJcbiAgICBQZWVyTWFuYWdlci5JbnN0YW5jZS5QbGF5R2FtZShmYWxzZSk7XHJcblxyXG4gICAgc3dpdGNoIChzdGFnZU5hbWUpIHtcclxuICAgICAgY2FzZSBTdGFnZXMuU3RhZ2VJbkdhbWU6XHJcbiAgICAgICAgU3RhZ2VJbkdhbWUuSW5zdGFuY2UuaW5pdGlhbCgpO1xyXG4gICAgICAgIFBlZXJNYW5hZ2VyLkluc3RhbmNlLlBsYXlHYW1lKCk7XHJcbiAgICAgICAgbXNnLnBoYXNlID0gUGVlclBoYXNlLklOR0FNRTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTdGFnZXMuU3RhZ2VMb2JieTpcclxuICAgICAgICBtc2cucGhhc2UgPSBQZWVyUGhhc2UuV0FJVElORztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTdGFnZXMuU3RhZ2VHYW1lRW5kOlxyXG4gICAgICAgIG1zZy5waGFzZSA9IFBlZXJQaGFzZS5HQU1FT1ZFUjtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBQZWVyTWFuYWdlci5JbnN0YW5jZS5zZW5kTWVzc2FnZVRvQWxsKG1zZyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgbmV4dFN0YWdlKGlzTmV4dDogYm9vbGVhbiA9IHRydWUsIGR1cmF0aW9uOiBudW1iZXIgPSAwLjUpIHtcclxuICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5JbnN0YW5jZTtcclxuICAgIGxldCBpbmRleCA9IGluc3RhbmNlLm5vZGUuY2hpbGRyZW4uaW5kZXhPZihpbnN0YW5jZS5tQ3VycmVudFN0YWdlKTtcclxuXHJcbiAgICBpZiAoIWlzTmV4dCAmJiBpbmRleCA9PSAwKSB7XHJcbiAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbiA9IEdhbWVEZWZpbmUuREVFUF9MSU5LX0JBQ0s7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBpbmRleCAhPSAtMSAmJlxyXG4gICAgICAoKGlzTmV4dCAmJiBpbmRleCA8IGluc3RhbmNlLm5vZGUuY2hpbGRyZW5Db3VudCAtIDEpIHx8XHJcbiAgICAgICAgKCFpc05leHQgJiYgaW5kZXggPiAwKSlcclxuICAgICkge1xyXG4gICAgICBpbmRleCA9IGlzTmV4dCA/IGluZGV4ICsgMSA6IGluZGV4IC0gMTtcclxuICAgICAgU3RhZ2VNZ3Iuc2hvdyhcclxuICAgICAgICBIZWxwZXIuR2V0SW5kZXhFbnVtKFN0YWdlcywgaW5zdGFuY2Uubm9kZS5jaGlsZHJlbltpbmRleF0ubmFtZSksXHJcbiAgICAgICAgZHVyYXRpb25cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIHN1cGVyLm9uTG9hZCgpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLlN0YWdlUHJlZmFicy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5TdGFnZVByZWZhYnNbaV0pO1xyXG4gICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY2Muc3lzdGVtRXZlbnQub24oXHJcbiAgICAgIGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTixcclxuICAgICAgKGV2ZW50OiBjYy5FdmVudC5FdmVudEtleWJvYXJkKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbnB1dENvZGUucHVzaChldmVudC5rZXlDb2RlKTtcclxuICAgICAgICBpZiAodGhpcy5pbnB1dENvZGUubGVuZ3RoID49IDQpIHtcclxuICAgICAgICAgIGlmICh0aGlzLmlucHV0Q29kZS50b1N0cmluZygpID09IFs1NCwgNTUsIDU2LCA1N10udG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgICBjYy5kZWJ1Zy5zZXREaXNwbGF5U3RhdHModHJ1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmlucHV0Q29kZS5zaGlmdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoUGVlck1hbmFnZXIuSW5zdGFuY2UuaXNQbGF5V2l0aFJlbW90ZSkge1xyXG4gICAgICAgICAgc3dpdGNoIChTdGFnZU1nci5JbnN0YW5jZS5DdXJyZW50U3RhZ2UubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFN0YWdlc1tTdGFnZXMuU3RhZ2VRUnNjYW5dOlxyXG4gICAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09IDEzKSB7XHJcbiAgICAgICAgICAgICAgICBTdGFnZVFSc2Nhbi5JbnN0YW5jZS5uZXh0U3RhZ2UodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBQZWVyTWFuYWdlci5JbnN0YW5jZS5zZXRSZW1vdGVNb2RlKHRydWUpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTdGFnZXNbU3RhZ2VzLlN0YWdlU3RhcnRHYW1lXTpcclxuICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAxMykge1xyXG4gICAgICAgICAgICAgICAgU3RhZ2VTdGFydEdhbWUuSW5zdGFuY2UubmV4dFN0YWdlKHRydWUpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTdGFnZXNbU3RhZ2VzLlN0YWdlTG9iYnldOlxyXG4gICAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09IDEzKSB7XHJcbiAgICAgICAgICAgICAgICBTdGFnZUxvYmJ5Lkluc3RhbmNlLm5leHRTdGFnZSgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTdGFnZXNbU3RhZ2VzLlN0YWdlR2FtZUVuZF06XHJcbiAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMzcpIHtcclxuICAgICAgICAgICAgICAgIFN0YWdlR2FtZUVuZC5JbnN0YW5jZS5jaG9vc2VCdXR0b24oZmFsc2UpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PSAzOSkge1xyXG4gICAgICAgICAgICAgICAgU3RhZ2VHYW1lRW5kLkluc3RhbmNlLmNob29zZUJ1dHRvbih0cnVlKTtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT0gMTMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChTdGFnZUdhbWVFbmQuSW5zdGFuY2UuYnRuUGxheS5pbnRlcmFjdGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgU3RhZ2VHYW1lRW5kLkluc3RhbmNlLm5leHRTdGFnZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgU3RhZ2VHYW1lRW5kLkluc3RhbmNlLnByZXZpb3VzU3RhZ2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCB0aGlzLm9uUmVjaXZlTWVzc2FnZS5iaW5kKHRoaXMpLCBmYWxzZSk7XHJcblxyXG4gICAgdGhpcy5zZW5kTWVzc2FnZShcImdldENvbnRyb2xsZXJVUkxcIik7IC8vIGPDsyB0aOG7gyB0aMOqbSBjdXN0b21QYXJhbSBu4bq/dSBtdeG7kW5cclxuICAgIHRoaXMuc2VuZE1lc3NhZ2UoXCJnZXRQcmVmaXhcIik7XHJcbiAgICB0aGlzLnNlbmRNZXNzYWdlKFwiZ2V0Q29udHJvbGxlck9yaWdpblwiKTtcclxuICB9XHJcblxyXG4gIG9uUmVjaXZlTWVzc2FnZShlKSB7XHJcbiAgICBpZiAoZS5kYXRhICYmIGUuZGF0YS5hY3Rpb24pIHtcclxuICAgICAgbGV0IG1zZyA9IGUuZGF0YTtcclxuICAgICAgc3dpdGNoIChtc2cuYWN0aW9uKSB7XHJcbiAgICAgICAgY2FzZSBcImdldFByZWZpeFwiOiB7XHJcbiAgICAgICAgICB3aW5kb3cuY29udHJvbGxlclByZWZpeCA9IG1zZy5tZXNzYWdlO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCJnZXRDb250cm9sbGVyVVJMXCI6IHtcclxuICAgICAgICAgIHdpbmRvdy5jb250cm9sbGVyVVJMID0gbXNnLm1lc3NhZ2U7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcImdldENvbnRyb2xsZXJPcmlnaW5cIjoge1xyXG4gICAgICAgICAgd2luZG93LmNvbnRyb2xsZXJPcmlnaW4gPSBtc2cubWVzc2FnZTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VuZE1lc3NhZ2UoYWN0aW9uOiBzdHJpbmcsIGN1c3RvbVBhcmFtOiBhbnkgPSBudWxsKSB7XHJcbiAgICBsZXQgbXNnID0ge1xyXG4gICAgICBhY3Rpb246IGFjdGlvbixcclxuICAgICAgZ2FtZTogXCJ6aWctemFnXCIsIC8vIGdhbWUgbsOgbyB0aMOsIMSR4bq3dCB0w6puIMSRw7MgKGdp4buRbmcgdMOqbiBmb2xkZXIgY2jhu6lhIGdhbWUpXHJcbiAgICAgIGN1c3RvbVBhcmFtOiBjdXN0b21QYXJhbSxcclxuICAgIH07XHJcbiAgICAod2luZG93IGFzIGFueSkucGFyZW50LnBvc3RNZXNzYWdlKG1zZywgXCIqXCIpO1xyXG4gIH1cclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICB0aGlzLlN0YWdlQ292ZXIgPSBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENoaWxkQnlOYW1lKFwiU3RhZ2UgQ292ZXJcIik7XHJcbiAgICB0aGlzLlN0YWdlQ292ZXIuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgU3RhZ2VNZ3Iuc2hvdyhTdGFnZXMuU3RhZ2VRUnNjYW4pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhbmltYXRlKGR1cmF0aW9uOiBudW1iZXIpIHtcclxuICAgIHRoaXMubVByZXZpb3VzU3RhZ2UuYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMubUN1cnJlbnRTdGFnZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNUd2VlbmluZyA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5TdGFnZUNvdmVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICBjYy50d2Vlbih0aGlzLm1QcmV2aW91c1N0YWdlKVxyXG4gICAgICAudG8oXHJcbiAgICAgICAgZHVyYXRpb24sXHJcbiAgICAgICAgeyBzY2FsZTogdGhpcy5tUHJldmlvdXNTdGFnZS5zY2FsZVggfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm9ncmVzczogKHN0YXJ0LCBlbmQsIGN1cnJlbnQsIHJhdGlvKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubVByZXZpb3VzU3RhZ2Uub3BhY2l0eSA9ICgxIC0gcmF0aW8pICogMjU1O1xyXG4gICAgICAgICAgICB0aGlzLlN0YWdlQ292ZXIub3BhY2l0eSA9IHJhdGlvICogMjU1O1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhcnQgKyAoZW5kIC0gc3RhcnQpICogcmF0aW87XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5tUHJldmlvdXNTdGFnZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm1DdXJyZW50U3RhZ2UuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm1DdXJyZW50U3RhZ2UuZ2V0Q29tcG9uZW50KFN0YWdlKS5pbml0KCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gICAgY2MudHdlZW4odGhpcy5tQ3VycmVudFN0YWdlKVxyXG4gICAgICAuZGVsYXkoZHVyYXRpb24pXHJcbiAgICAgIC50byhcclxuICAgICAgICBkdXJhdGlvbixcclxuICAgICAgICB7IHNjYWxlOiB0aGlzLm1DdXJyZW50U3RhZ2Uuc2NhbGVYIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvZ3Jlc3M6IChzdGFydCwgZW5kLCBjdXJyZW50LCByYXRpbykgPT4ge1xyXG4gICAgICAgICAgICAvLyB0aGlzLm1DdXJyZW50U3RhZ2Uub3BhY2l0eSA9IHJhdGlvICogMjU1O1xyXG4gICAgICAgICAgICB0aGlzLlN0YWdlQ292ZXIub3BhY2l0eSA9ICgxIC0gcmF0aW8pICogMjU1O1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhcnQgKyAoZW5kIC0gc3RhcnQpICogcmF0aW87XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5TdGFnZUNvdmVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNUd2VlbmluZyA9IGZhbHNlO1xyXG4gICAgICB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuICB9XHJcbn1cclxuIl19