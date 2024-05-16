"use strict";
cc._RF.push(module, '6d3cf1QRs9NY4n4TNnuAi/J', 'PeerDefine');
// Scripts/PeerComponent/PeerDefine.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeerActionType = exports.PeerActionConnect = exports.PeerStage = exports.PeerPhase = void 0;
exports.default = new (/** @class */ (function () {
    function PeerDefine() {
        this.MAX_CLIENT = 3;
        this.TIMEOUT_DISCONNECT = 3000;
        this.PING_TIMER = 1000;
        this.TIMEOUT_RETRY = 5000;
    }
    return PeerDefine;
}()));
var PeerPhase;
(function (PeerPhase) {
    PeerPhase[PeerPhase["NONE"] = 0] = "NONE";
    PeerPhase[PeerPhase["CONNECT"] = 1] = "CONNECT";
    PeerPhase[PeerPhase["START_SCREEN"] = 2] = "START_SCREEN";
    PeerPhase[PeerPhase["WAITING"] = 3] = "WAITING";
    PeerPhase[PeerPhase["SCAN_QR"] = 4] = "SCAN_QR";
    PeerPhase[PeerPhase["INGAME"] = 5] = "INGAME";
    PeerPhase[PeerPhase["GAMEOVER"] = 6] = "GAMEOVER";
})(PeerPhase = exports.PeerPhase || (exports.PeerPhase = {}));
var PeerStage;
(function (PeerStage) {
    PeerStage[PeerStage["PLAYING"] = 0] = "PLAYING";
    PeerStage[PeerStage["WAITING"] = 1] = "WAITING";
})(PeerStage = exports.PeerStage || (exports.PeerStage = {}));
var PeerActionConnect;
(function (PeerActionConnect) {
    PeerActionConnect[PeerActionConnect["CONNECTING"] = 0] = "CONNECTING";
    PeerActionConnect[PeerActionConnect["CONNECTED"] = 1] = "CONNECTED";
    PeerActionConnect[PeerActionConnect["CONNECT_FAILED"] = 2] = "CONNECT_FAILED";
    PeerActionConnect[PeerActionConnect["CONNECT_RETRY"] = 3] = "CONNECT_RETRY";
    PeerActionConnect[PeerActionConnect["CONNECT_RETRY_SUCCESS"] = 4] = "CONNECT_RETRY_SUCCESS";
    PeerActionConnect[PeerActionConnect["SWITCH_MAINPLAYER"] = 5] = "SWITCH_MAINPLAYER";
    PeerActionConnect[PeerActionConnect["PING_PONG"] = 6] = "PING_PONG";
})(PeerActionConnect = exports.PeerActionConnect || (exports.PeerActionConnect = {}));
var PeerActionType;
(function (PeerActionType) {
    PeerActionType[PeerActionType["NONE"] = 0] = "NONE";
    PeerActionType[PeerActionType["UP"] = 1] = "UP";
    PeerActionType[PeerActionType["DOWN"] = 2] = "DOWN";
    PeerActionType[PeerActionType["LEFT"] = 3] = "LEFT";
    PeerActionType[PeerActionType["RIGHT"] = 4] = "RIGHT";
    PeerActionType[PeerActionType["ENTER"] = 5] = "ENTER";
    PeerActionType[PeerActionType["NEXT"] = 6] = "NEXT";
    PeerActionType[PeerActionType["BACK"] = 7] = "BACK";
    PeerActionType[PeerActionType["CUSTOM"] = 8] = "CUSTOM";
    PeerActionType[PeerActionType["JUMP"] = 9] = "JUMP";
    PeerActionType[PeerActionType["ENDGAME"] = 10] = "ENDGAME";
    PeerActionType[PeerActionType["REPLAY"] = 11] = "REPLAY";
    PeerActionType[PeerActionType["HOME"] = 12] = "HOME";
    PeerActionType[PeerActionType["HOLD"] = 13] = "HOLD";
    PeerActionType[PeerActionType["RELEASE"] = 14] = "RELEASE";
    PeerActionType[PeerActionType["ROTATE"] = 15] = "ROTATE";
    PeerActionType[PeerActionType["SHOW"] = 16] = "SHOW";
})(PeerActionType = exports.PeerActionType || (exports.PeerActionType = {}));

cc._RF.pop();