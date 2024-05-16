
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/PeerComponent/PeerDefine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGVlckNvbXBvbmVudFxcUGVlckRlZmluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrQkFBZSxJQUFJO0lBQUM7UUFFTCxlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsdUJBQWtCLEdBQUcsSUFBSSxDQUFBO1FBQ3pCLGVBQVUsR0FBRyxJQUFJLENBQUE7UUFDakIsa0JBQWEsR0FBRyxJQUFJLENBQUE7SUFDL0IsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FOZ0IsQUFNZixJQUFDLENBQUE7QUFDRixJQUFZLFNBU1g7QUFURCxXQUFZLFNBQVM7SUFFakIseUNBQVEsQ0FBQTtJQUNSLCtDQUFPLENBQUE7SUFDUCx5REFBWSxDQUFBO0lBQ1osK0NBQU8sQ0FBQTtJQUNQLCtDQUFPLENBQUE7SUFDUCw2Q0FBTSxDQUFBO0lBQ04saURBQVEsQ0FBQTtBQUNaLENBQUMsRUFUVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQVNwQjtBQUNELElBQVksU0FJWDtBQUpELFdBQVksU0FBUztJQUVqQiwrQ0FBTyxDQUFBO0lBQ1AsK0NBQU8sQ0FBQTtBQUNYLENBQUMsRUFKVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUlwQjtBQUNELElBQVksaUJBU1g7QUFURCxXQUFZLGlCQUFpQjtJQUV6QixxRUFBVSxDQUFBO0lBQ1YsbUVBQVMsQ0FBQTtJQUNULDZFQUFjLENBQUE7SUFDZCwyRUFBYSxDQUFBO0lBQ2IsMkZBQXFCLENBQUE7SUFDckIsbUZBQWlCLENBQUE7SUFDakIsbUVBQVMsQ0FBQTtBQUNiLENBQUMsRUFUVyxpQkFBaUIsR0FBakIseUJBQWlCLEtBQWpCLHlCQUFpQixRQVM1QjtBQUNELElBQVksY0FtQlg7QUFuQkQsV0FBWSxjQUFjO0lBRXRCLG1EQUFRLENBQUE7SUFDUiwrQ0FBRSxDQUFBO0lBQ0YsbURBQUksQ0FBQTtJQUNKLG1EQUFJLENBQUE7SUFDSixxREFBSyxDQUFBO0lBQ0wscURBQUssQ0FBQTtJQUNMLG1EQUFJLENBQUE7SUFDSixtREFBSSxDQUFBO0lBQ0osdURBQU0sQ0FBQTtJQUNOLG1EQUFJLENBQUE7SUFDSiwwREFBTyxDQUFBO0lBQ1Asd0RBQU0sQ0FBQTtJQUNOLG9EQUFJLENBQUE7SUFDSixvREFBSSxDQUFBO0lBQ0osMERBQU8sQ0FBQTtJQUNQLHdEQUFNLENBQUE7SUFDTixvREFBSSxDQUFBO0FBQ1IsQ0FBQyxFQW5CVyxjQUFjLEdBQWQsc0JBQWMsS0FBZCxzQkFBYyxRQW1CekIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBuZXcgKGNsYXNzIFBlZXJEZWZpbmVcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgTUFYX0NMSUVOVCA9IDM7XHJcbiAgICAgICAgcHVibGljIFRJTUVPVVRfRElTQ09OTkVDVCA9IDMwMDBcclxuICAgICAgICBwdWJsaWMgUElOR19USU1FUiA9IDEwMDBcclxuICAgICAgICBwdWJsaWMgVElNRU9VVF9SRVRSWSA9IDUwMDBcclxuICAgIH0pXHJcbiAgICBleHBvcnQgZW51bSBQZWVyUGhhc2VcclxuICAgIHtcclxuICAgICAgICBOT05FID0gMCxcclxuICAgICAgICBDT05ORUNULFxyXG4gICAgICAgIFNUQVJUX1NDUkVFTixcclxuICAgICAgICBXQUlUSU5HLFxyXG4gICAgICAgIFNDQU5fUVIsXHJcbiAgICAgICAgSU5HQU1FLFxyXG4gICAgICAgIEdBTUVPVkVSXHJcbiAgICB9XHJcbiAgICBleHBvcnQgZW51bSBQZWVyU3RhZ2VcclxuICAgIHtcclxuICAgICAgICBQTEFZSU5HLFxyXG4gICAgICAgIFdBSVRJTkcsXHJcbiAgICB9XHJcbiAgICBleHBvcnQgZW51bSBQZWVyQWN0aW9uQ29ubmVjdFxyXG4gICAge1xyXG4gICAgICAgIENPTk5FQ1RJTkcsXHJcbiAgICAgICAgQ09OTkVDVEVELFxyXG4gICAgICAgIENPTk5FQ1RfRkFJTEVELFxyXG4gICAgICAgIENPTk5FQ1RfUkVUUlksXHJcbiAgICAgICAgQ09OTkVDVF9SRVRSWV9TVUNDRVNTLFxyXG4gICAgICAgIFNXSVRDSF9NQUlOUExBWUVSLFxyXG4gICAgICAgIFBJTkdfUE9ORyxcclxuICAgIH1cclxuICAgIGV4cG9ydCBlbnVtIFBlZXJBY3Rpb25UeXBlXHJcbiAgICB7XHJcbiAgICAgICAgTk9ORSA9IDAsXHJcbiAgICAgICAgVVAsXHJcbiAgICAgICAgRE9XTixcclxuICAgICAgICBMRUZULFxyXG4gICAgICAgIFJJR0hULFxyXG4gICAgICAgIEVOVEVSLFxyXG4gICAgICAgIE5FWFQsXHJcbiAgICAgICAgQkFDSyxcclxuICAgICAgICBDVVNUT00sXHJcbiAgICAgICAgSlVNUCxcclxuICAgICAgICBFTkRHQU1FLFxyXG4gICAgICAgIFJFUExBWSxcclxuICAgICAgICBIT01FLFxyXG4gICAgICAgIEhPTEQsXHJcbiAgICAgICAgUkVMRUFTRSxcclxuICAgICAgICBST1RBVEUsXHJcbiAgICAgICAgU0hPV1xyXG4gICAgfVxyXG4gICAgIl19