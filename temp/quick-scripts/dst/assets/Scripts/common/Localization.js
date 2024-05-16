
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/common/Localization.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bd45doTXaVJGazSbf1+Ekni', 'Localization');
// Scripts/common/Localization.ts

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
exports.TextTransforms = exports.LOCALIZATION_ENUM = exports.LOCALIZATION_KEYS = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var STRINGS = require("../../strings");
var Events_1 = require("./Events");
var enumObj = {};
exports.LOCALIZATION_KEYS = Object.keys(STRINGS);
for (var i = 0; i < exports.LOCALIZATION_KEYS.length; i++) {
    enumObj[exports.LOCALIZATION_KEYS[i]] = i;
}
exports.LOCALIZATION_ENUM = cc.Enum(enumObj);
exports.TextTransforms = cc.Enum({
    None: 0,
    Upper: 1,
    Lower: 2,
});
var Localization = /** @class */ (function (_super) {
    __extends(Localization, _super);
    function Localization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Localization.GetLocalizedString = function (key) {
        if (STRINGS[key]) {
            // window.language = "en"
            // window.language = "my"
            // window.language = "mu"
            return STRINGS[key][window.language.toUpperCase()] || '';
        }
        return '';
    };
    Localization.ChangeLanguage = function (language) {
        window.language = language;
        Events_1.default.emit(Events_1.default.EventLanguageChanged);
    };
    Localization = __decorate([
        ccclass
    ], Localization);
    return Localization;
}(cc.Component));
exports.default = Localization;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcY29tbW9uXFxMb2NhbGl6YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLHVDQUF5QztBQUN6QyxtQ0FBOEI7QUFFOUIsSUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ04sUUFBQSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3RELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyx5QkFBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQ2pEO0lBQ0ksT0FBTyxDQUFDLHlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ3JDO0FBRVksUUFBQSxpQkFBaUIsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3JDLFFBQUEsY0FBYyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDbEMsSUFBSSxFQUFFLENBQUM7SUFDUCxLQUFLLEVBQUUsQ0FBQztJQUNSLEtBQUssRUFBRSxDQUFDO0NBQ1gsQ0FBQyxDQUFDO0FBR0g7SUFBMEMsZ0NBQVk7SUFBdEQ7O0lBb0JBLENBQUM7SUFsQlUsK0JBQWtCLEdBQXpCLFVBQTBCLEdBQVc7UUFFakMsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQ2hCO1lBQ0kseUJBQXlCO1lBQ3pCLHlCQUF5QjtZQUN6Qix5QkFBeUI7WUFFekIsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUM1RDtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVNLDJCQUFjLEdBQXJCLFVBQXNCLFFBQWdCO1FBRWxDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQzNCLGdCQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBbkJnQixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBb0JoQztJQUFELG1CQUFDO0NBcEJELEFBb0JDLENBcEJ5QyxFQUFFLENBQUMsU0FBUyxHQW9CckQ7a0JBcEJvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuaW1wb3J0ICogYXMgU1RSSU5HUyBmcm9tICcuLi8uLi9zdHJpbmdzJztcclxuaW1wb3J0IEV2ZW50cyBmcm9tICcuL0V2ZW50cyc7XHJcblxyXG5jb25zdCBlbnVtT2JqID0ge307XHJcbmV4cG9ydCBjb25zdCBMT0NBTElaQVRJT05fS0VZUyA9IE9iamVjdC5rZXlzKFNUUklOR1MpO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IExPQ0FMSVpBVElPTl9LRVlTLmxlbmd0aDsgaSsrKVxyXG57XHJcbiAgICBlbnVtT2JqW0xPQ0FMSVpBVElPTl9LRVlTW2ldXSA9IGk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMT0NBTElaQVRJT05fRU5VTSA9IGNjLkVudW0oZW51bU9iaik7XHJcbmV4cG9ydCBjb25zdCBUZXh0VHJhbnNmb3JtcyA9IGNjLkVudW0oe1xyXG4gICAgTm9uZTogMCxcclxuICAgIFVwcGVyOiAxLFxyXG4gICAgTG93ZXI6IDIsXHJcbn0pO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYWxpemF0aW9uIGV4dGVuZHMgY2MuQ29tcG9uZW50XHJcbntcclxuICAgIHN0YXRpYyBHZXRMb2NhbGl6ZWRTdHJpbmcoa2V5OiBzdHJpbmcpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICBpZiAoU1RSSU5HU1trZXldKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gd2luZG93Lmxhbmd1YWdlID0gXCJlblwiXHJcbiAgICAgICAgICAgIC8vIHdpbmRvdy5sYW5ndWFnZSA9IFwibXlcIlxyXG4gICAgICAgICAgICAvLyB3aW5kb3cubGFuZ3VhZ2UgPSBcIm11XCJcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBTVFJJTkdTW2tleV1bd2luZG93Lmxhbmd1YWdlLnRvVXBwZXJDYXNlKCldIHx8ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIENoYW5nZUxhbmd1YWdlKGxhbmd1YWdlOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgd2luZG93Lmxhbmd1YWdlID0gbGFuZ3VhZ2U7XHJcbiAgICAgICAgRXZlbnRzLmVtaXQoRXZlbnRzLkV2ZW50TGFuZ3VhZ2VDaGFuZ2VkKTtcclxuICAgIH1cclxufSJdfQ==