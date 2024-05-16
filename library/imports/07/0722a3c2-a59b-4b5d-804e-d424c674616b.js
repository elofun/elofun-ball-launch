"use strict";
cc._RF.push(module, '0722aPCpZtLXYBO1CTGdGFr', 'GameDefine');
// Scripts/game/GameDefine.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new (/** @class */ (function () {
    function GameDefine() {
        this.DiamondScore = 2;
        this.PlayTime = 300;
        this.player = window.language.toUpperCase() == "VI" ? "Người chơi" : "Player";
        this.died = window.language.toUpperCase() == "VI" ? "đã chết." : "has died.";
        this.gameover = window.language.toUpperCase() == "VI" ? "KẾT THÚC" : "GAMEOVER";
        this.disconnect = window.language.toUpperCase() == "VI" ? "MẤT KẾT NỐI" : "LOST CONNECTION";
        this.hasdisconnect = window.language.toUpperCase() == "VI" ? "đã mất kết nối." : "has been disconnected.";
        this.hosting = window.language.toUpperCase() == "VI" ? "sẽ trở thành chủ phòng." : "is now hosting.";
    }
    return GameDefine;
}()));

cc._RF.pop();