"use strict";
cc._RF.push(module, 'd9adbSs7VdIeaPiYGmWgXvR', 'LocalizedText');
// Scripts/utils/LocalizedText.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LocalizedText = /** @class */ (function (_super) {
    __extends(LocalizedText, _super);
    function LocalizedText() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.EN = "";
        _this.VI = "";
        return _this;
    }
    LocalizedText.prototype.start = function () {
        var text = this.node.getComponent(cc.Label);
        var defaultText = text.string;
        text.string = this[window.language.toUpperCase()] || defaultText;
    };
    __decorate([
        property({ type: String, multiline: true, })
    ], LocalizedText.prototype, "EN", void 0);
    __decorate([
        property({ type: String, multiline: true, })
    ], LocalizedText.prototype, "VI", void 0);
    LocalizedText = __decorate([
        ccclass
    ], LocalizedText);
    return LocalizedText;
}(cc.Component));
exports.default = LocalizedText;

cc._RF.pop();