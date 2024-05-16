
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/cuboid.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1bcb2GEmxRB1458fn5Fjmnu', 'cuboid');
// Scripts/cuboid.ts

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
var Cuboid = /** @class */ (function (_super) {
    __extends(Cuboid, _super);
    function Cuboid() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.player = null;
        _this.diamond = null;
        _this.thresHold = 9999;
        _this.thresHoldActive = 9999;
        return _this;
    }
    Cuboid.prototype.onLoad = function () {
        var _this = this;
        this.schedule(function () {
            var y = _this.player.position.y - _this.node.position.y;
            if (y < 200 && y > -200) {
                if (_this.thresHold === 0)
                    return;
                _this.thresHold = 0;
                _this.node.children.forEach(function (child) {
                    if (child.childrenCount === 1) {
                        child.children[0].getComponent(cc.BoxCollider) && (child.children[0].getComponent(cc.BoxCollider).enabled = true);
                    }
                });
                _this.getComponent(cc.BoxCollider).enabled = true;
            }
            else {
                if (_this.thresHold === 200)
                    return;
                _this.thresHold = 200;
                _this.node.children.forEach(function (child) {
                    if (child.childrenCount === 1) {
                        child.children[0].getComponent(cc.BoxCollider) && (child.children[0].getComponent(cc.BoxCollider).enabled = false);
                    }
                });
            }
            if (y < -500) {
                _this.getComponent(cc.BoxCollider).enabled = false;
            }
        }, 0.1);
        this.schedule(function () {
            if (_this.player.position.y - _this.node.position.y < 720 && _this.player.position.y - _this.node.position.y > -720) {
                if (_this.thresHoldActive === 0)
                    return;
                _this.thresHoldActive = 0;
                _this.node.children.forEach(function (child) {
                    child.getComponent(cc.Sprite) && (child.getComponent(cc.Sprite).enabled = true);
                });
            }
            else {
                if (_this.thresHoldActive === 720)
                    return;
                _this.thresHoldActive = 720;
                _this.node.children.forEach(function (child) {
                    child.getComponent(cc.Sprite) && (child.getComponent(cc.Sprite).enabled = false);
                });
            }
        }, 0.2);
    };
    __decorate([
        property(cc.Node)
    ], Cuboid.prototype, "player", void 0);
    Cuboid = __decorate([
        ccclass
    ], Cuboid);
    return Cuboid;
}(cc.Component));
exports.default = Cuboid;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcY3Vib2lkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBb0RDO1FBbERXLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFeEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV2QixlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLHFCQUFlLEdBQUcsSUFBSSxDQUFDOztJQTZDbkMsQ0FBQztJQTNDRyx1QkFBTSxHQUFOO1FBQUEsaUJBMENDO1FBekNHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDVixJQUFNLENBQUMsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3JCLElBQUksS0FBSSxDQUFDLFNBQVMsS0FBSyxDQUFDO29CQUFFLE9BQU87Z0JBQ2pDLEtBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO29CQUM3QixJQUFJLEtBQUssQ0FBQyxhQUFhLEtBQUssQ0FBQyxFQUFFO3dCQUMzQixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDO3FCQUNySDtnQkFDTCxDQUFDLENBQUMsQ0FBQTtnQkFDRixLQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQ3BEO2lCQUFNO2dCQUNILElBQUksS0FBSSxDQUFDLFNBQVMsS0FBSyxHQUFHO29CQUFFLE9BQU87Z0JBQ25DLEtBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO2dCQUNyQixLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO29CQUM3QixJQUFJLEtBQUssQ0FBQyxhQUFhLEtBQUssQ0FBQyxFQUFFO3dCQUMzQixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDO3FCQUN0SDtnQkFDTCxDQUFDLENBQUMsQ0FBQTthQUNMO1lBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ1YsS0FBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUNyRDtRQUNMLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUVQLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDVixJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQzdHLElBQUksS0FBSSxDQUFDLGVBQWUsS0FBSyxDQUFDO29CQUFFLE9BQU87Z0JBQ3ZDLEtBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO2dCQUN6QixLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO29CQUM3QixLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFDcEYsQ0FBQyxDQUFDLENBQUE7YUFDTDtpQkFBTTtnQkFDSCxJQUFJLEtBQUksQ0FBQyxlQUFlLEtBQUssR0FBRztvQkFBRSxPQUFPO2dCQUN6QyxLQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQztnQkFDM0IsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSztvQkFDN0IsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUM7Z0JBQ3JGLENBQUMsQ0FBQyxDQUFBO2FBQ0w7UUFDTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDWCxDQUFDO0lBakREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ2E7SUFGZCxNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBb0QxQjtJQUFELGFBQUM7Q0FwREQsQUFvREMsQ0FwRG1DLEVBQUUsQ0FBQyxTQUFTLEdBb0QvQztrQkFwRG9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGxheUdyb3VuZCBmcm9tIFwiLi9wbGF5R3JvdW5kXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3Vib2lkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBwbGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBkaWFtb25kOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHRocmVzSG9sZCA9IDk5OTk7XHJcbiAgICBwcml2YXRlIHRocmVzSG9sZEFjdGl2ZSA9IDk5OTk7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB5ID0gdGhpcy5wbGF5ZXIucG9zaXRpb24ueSAtIHRoaXMubm9kZS5wb3NpdGlvbi55O1xyXG4gICAgICAgICAgICBpZiAoeSA8IDIwMCAmJiB5ID4gLTIwMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGhyZXNIb2xkID09PSAwKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocmVzSG9sZCA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQuY2hpbGRyZW5Db3VudCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpICYmIChjaGlsZC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpLmVuYWJsZWQgPSB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGhyZXNIb2xkID09PSAyMDApIHJldHVybjtcclxuICAgICAgICAgICAgICAgIHRoaXMudGhyZXNIb2xkID0gMjAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLmNoaWxkcmVuQ291bnQgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKSAmJiAoY2hpbGQuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKS5lbmFibGVkID0gZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh5IDwgLTUwMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDAuMSlcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllci5wb3NpdGlvbi55IC0gdGhpcy5ub2RlLnBvc2l0aW9uLnkgPCA3MjAgJiYgdGhpcy5wbGF5ZXIucG9zaXRpb24ueSAtIHRoaXMubm9kZS5wb3NpdGlvbi55ID4gLTcyMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGhyZXNIb2xkQWN0aXZlID09PSAwKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocmVzSG9sZEFjdGl2ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSAmJiAoY2hpbGQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZW5hYmxlZCA9IHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRocmVzSG9sZEFjdGl2ZSA9PT0gNzIwKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocmVzSG9sZEFjdGl2ZSA9IDcyMDtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChjYy5TcHJpdGUpICYmIChjaGlsZC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5lbmFibGVkID0gZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDAuMilcclxuICAgIH1cclxufVxyXG4iXX0=