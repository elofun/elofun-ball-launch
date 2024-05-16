
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/PeerComponent/QRCodeGen.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGVlckNvbXBvbmVudFxcUVJDb2RlR2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFzQztBQUN0Qyw4Q0FBeUM7QUFDekMsMENBQXFDO0FBRS9CLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBdURDO1FBckRzQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBQ2hDLFVBQUksR0FBVyxHQUFHLENBQUM7UUFDVixrQkFBWSxHQUFZLElBQUksQ0FBQzs7SUFtRHBELENBQUM7SUFqREcsNEJBQVEsR0FBUjtRQUFBLGlCQXlDQztRQXhDRyxJQUFJO1lBQ0EsSUFBSSxJQUFJLEdBQUcsZ0JBQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3JDLElBQUcsQ0FBQyxJQUFJLEVBQUU7Z0JBQ04sTUFBTSxPQUFPLENBQUMsS0FBSyxDQUFDLG1EQUFtRCxHQUFFLElBQUksQ0FBQyxDQUFDO2FBQ2xGO1lBQ0QsSUFBSSxJQUFJLGVBQWEsTUFBTSxDQUFDLFFBQVUsQ0FBQztZQUN2QyxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hDLElBQUksTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBQztnQkFDeEIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNoQixNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2pCLFNBQVMsRUFBRyxTQUFTO2dCQUNyQixVQUFVLEVBQUcsU0FBUztnQkFDdEIsWUFBWSxFQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUN2QyxDQUFDLENBQUM7WUFDSCxJQUFJLEtBQUcsR0FBUSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLFVBQVUsQ0FBQztnQkFDUCxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ2pDLElBQUksT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNqQyxPQUFPLENBQUMsZUFBZSxDQUFDLEtBQUcsQ0FBQyxDQUFDO2dCQUM3QixPQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztnQkFDOUIsSUFBSSxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDekIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO2dCQUNqQyxNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDNUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2dCQUNoQyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFFO2dCQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUU7WUFDN0IsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ1g7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLElBQUcsZ0JBQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUU7Z0JBQzdDLGtCQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDM0MsT0FBTzthQUNWO1lBQ0QsVUFBVSxDQUFDO2dCQUNQLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNwQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7U0FDWDtJQUNMLENBQUM7SUFFRCx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHlCQUFLLEdBQUw7SUFDQSxDQUFDO0lBcERrQjtRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FBd0I7SUFDaEM7UUFBVCxRQUFROzJDQUFvQjtJQUNWO1FBQWxCLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUE4QjtJQUovQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBdUQ3QjtJQUFELGdCQUFDO0NBdkRELEFBdURDLENBdkRzQyxFQUFFLENBQUMsU0FBUyxHQXVEbEQ7a0JBdkRvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vY29tbW9uL0dsb2JhbFwiO1xyXG5pbXBvcnQgU3RhZ2VNZ3IgZnJvbSBcIi4uL3N0YWdlL1N0YWdlTWdyXCI7XHJcbmltcG9ydCBIZWxwZXIgZnJvbSBcIi4uL3V0aWxzL0hlbHBlclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRUkNvZGVHZW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBxckNvZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5IHNpemU6IG51bWJlciA9IDEwMDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBsb2FkaW5nQ292ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIGNyZWF0ZVFSKCl7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGxpbmsgPSBIZWxwZXIuZ2V0Q29udHJvbGxlclVSTCgpO1xyXG4gICAgICAgICAgICBpZighbGluaykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgY29uc29sZS5lcnJvcihcIkNhbid0IGdlbmVyYXRlIFFSIENvZGUgYmVjYXVzZSBjb250cm9sbGVyIHVybCBpcyBcIisgbGluayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGluayArPSBgJmxhbmd1YWdlPSR7d2luZG93Lmxhbmd1YWdlfWA7XHJcbiAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBsZXQgcXJjb2RlID0gbmV3IFFSQ29kZShkaXYse1xyXG4gICAgICAgICAgICAgICAgdGV4dDogbGluayxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLnNpemUsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuc2l6ZSxcclxuICAgICAgICAgICAgICAgIGNvbG9yRGFyayA6IFwiIzAwMDAwMFwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3JMaWdodCA6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgICAgICAgY29ycmVjdExldmVsIDogUVJDb2RlLkNvcnJlY3RMZXZlbC5MXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsZXQgaW1nOiBhbnkgPSBkaXYuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nQ292ZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGV4dHVyZSA9IG5ldyBjYy5UZXh0dXJlMkQoKTtcclxuICAgICAgICAgICAgICAgIHRleHR1cmUuaW5pdFdpdGhFbGVtZW50KGltZyk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0dXJlLmhhbmRsZUxvYWRlZFRleHR1cmUoKTtcclxuICAgICAgICAgICAgICAgIHZhciBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIHZhciBub2RlID0gbmV3IGNjLk5vZGUoKTtcclxuICAgICAgICAgICAgICAgIHZhciBzcHJpdGUgPSBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGUuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xckNvZGUucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucXJDb2RlLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS53aWR0aCA9IHRoaXMuc2l6ZSA7XHJcbiAgICAgICAgICAgICAgICBub2RlLmhlaWdodCA9IHRoaXMuc2l6ZSA7XHJcbiAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgaWYoR2xvYmFsLkluc3RhbmNlLmJhY2tBcHBUaW1lIC0gRGF0ZS5ub3coKSA8IDApIHtcclxuICAgICAgICAgICAgICAgIFN0YWdlTWdyLkluc3RhbmNlLnNlbmRNZXNzYWdlKFwiYmFja1RvQXBwXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlUVIoKTsgXHJcbiAgICAgICAgICAgIH0sIDIwMDApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgIH1cclxufVxyXG4iXX0=