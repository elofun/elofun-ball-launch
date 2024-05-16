
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/game/GameDefine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZVxcR2FtZURlZmluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtCQUFlLElBQUk7SUFBQztRQUVULGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxHQUFHLENBQUM7UUFDZixXQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQ3pFLFNBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDeEUsYUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUMzRSxlQUFVLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUM7UUFDdkYsa0JBQWEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDO1FBQ3JHLFlBQU8sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO0lBQzNHLENBQUM7SUFBRCxpQkFBQztBQUFELENBVm9CLEFBVW5CLElBQUMsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IG5ldyAoY2xhc3MgR2FtZURlZmluZVxyXG57XHJcbiAgICBwdWJsaWMgRGlhbW9uZFNjb3JlID0gMjtcclxuICAgIHB1YmxpYyBQbGF5VGltZSA9IDMwMDtcclxuICAgIHB1YmxpYyBwbGF5ZXIgPSB3aW5kb3cubGFuZ3VhZ2UudG9VcHBlckNhc2UoKSA9PSBcIlZJXCIgPyBcIk5nxrDhu51pIGNoxqFpXCIgOiBcIlBsYXllclwiO1xyXG4gICAgcHVibGljIGRpZWQgPSB3aW5kb3cubGFuZ3VhZ2UudG9VcHBlckNhc2UoKSA9PSBcIlZJXCIgPyBcIsSRw6MgY2jhur90LlwiIDogXCJoYXMgZGllZC5cIjtcclxuICAgIHB1YmxpYyBnYW1lb3ZlciA9IHdpbmRvdy5sYW5ndWFnZS50b1VwcGVyQ2FzZSgpID09IFwiVklcIiA/IFwiS+G6vlQgVEjDmkNcIiA6IFwiR0FNRU9WRVJcIjtcclxuICAgIHB1YmxpYyBkaXNjb25uZWN0ID0gd2luZG93Lmxhbmd1YWdlLnRvVXBwZXJDYXNlKCkgPT0gXCJWSVwiID8gXCJN4bqkVCBL4bq+VCBO4buQSVwiIDogXCJMT1NUIENPTk5FQ1RJT05cIjtcclxuICAgIHB1YmxpYyBoYXNkaXNjb25uZWN0ID0gd2luZG93Lmxhbmd1YWdlLnRvVXBwZXJDYXNlKCkgPT0gXCJWSVwiID8gXCLEkcOjIG3huqV0IGvhur90IG7hu5FpLlwiIDogXCJoYXMgYmVlbiBkaXNjb25uZWN0ZWQuXCI7XHJcbiAgICBwdWJsaWMgaG9zdGluZyA9IHdpbmRvdy5sYW5ndWFnZS50b1VwcGVyQ2FzZSgpID09IFwiVklcIiA/IFwic+G6vSB0cuG7nyB0aMOgbmggY2jhu6cgcGjDsm5nLlwiIDogXCJpcyBub3cgaG9zdGluZy5cIjtcclxufSkiXX0=