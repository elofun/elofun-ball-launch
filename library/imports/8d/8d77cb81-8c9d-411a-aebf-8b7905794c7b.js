"use strict";
cc._RF.push(module, '8d77cuBjJ1BGq6/i3kFeUx7', 'QRCodeGen');
// Scripts/PeerComponent/QRCodeGen.ts

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
var Global_1 = require("../common/Global");
var StageMgr_1 = require("../stage/StageMgr");
var Helper_1 = require("../utils/Helper");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var QRCodeGen = /** @class */ (function (_super) {
    __extends(QRCodeGen, _super);
    function QRCodeGen() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.qrCode = null;
        _this.size = 100;
        _this.loadingCover = null;
        return _this;
    }
    QRCodeGen.prototype.createQR = function () {
        var _this = this;
        try {
            var link = Helper_1.default.getControllerURL();
            if (!link) {
                throw console.error("Can't generate QR Code because controller url is " + link);
            }
            link += "&language=" + window.language;
            var div = document.createElement("div");
            var qrcode = new QRCode(div, {
                text: link,
                width: this.size,
                height: this.size,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.L
            });
            var img_1 = div.children[0];
            setTimeout(function () {
                _this.loadingCover.active = false;
                var texture = new cc.Texture2D();
                texture.initWithElement(img_1);
                texture.handleLoadedTexture();
                var spriteFrame = new cc.SpriteFrame(texture);
                var node = new cc.Node();
                var sprite = node.addComponent(cc.Sprite);
                sprite.spriteFrame = spriteFrame;
                sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
                _this.qrCode.removeAllChildren();
                _this.qrCode.addChild(node);
                node.width = _this.size;
                node.height = _this.size;
            }, 300);
        }
        catch (error) {
            if (Global_1.default.Instance.backAppTime - Date.now() < 0) {
                StageMgr_1.default.Instance.sendMessage("backToApp");
                return;
            }
            setTimeout(function () {
                _this.createQR();
            }, 2000);
        }
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    QRCodeGen.prototype.start = function () {
    };
    __decorate([
        property(cc.Node)
    ], QRCodeGen.prototype, "qrCode", void 0);
    __decorate([
        property
    ], QRCodeGen.prototype, "size", void 0);
    __decorate([
        property(cc.Node)
    ], QRCodeGen.prototype, "loadingCover", void 0);
    QRCodeGen = __decorate([
        ccclass
    ], QRCodeGen);
    return QRCodeGen;
}(cc.Component));
exports.default = QRCodeGen;

cc._RF.pop();