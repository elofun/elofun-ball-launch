
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/diamond.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '085b587D41NjKlGgaQmpnmJ', 'diamond');
// Scripts/diamond.ts

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
var Diamond = /** @class */ (function (_super) {
    __extends(Diamond, _super);
    function Diamond() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.player = null;
        _this.diamondSprite = null;
        _this.diamondParticle = null;
        _this.lblScorePlus = null;
        _this.thresHold = 9999;
        return _this;
    }
    Diamond.prototype.onLoad = function () {
        var _this = this;
        this.schedule(function () {
            var y = _this.player.position.y - _this.node.position.y;
            if (y < 200 && y > -200) {
                if (_this.thresHold === 0)
                    return;
                _this.thresHold = 0;
                _this.getComponent(cc.CircleCollider).enabled = true;
            }
            else {
                if (_this.thresHold === 200)
                    return;
                _this.thresHold = 200;
                _this.getComponent(cc.CircleCollider).enabled = false;
            }
        }, 0.1);
    };
    __decorate([
        property(cc.Node)
    ], Diamond.prototype, "player", void 0);
    __decorate([
        property(cc.Sprite)
    ], Diamond.prototype, "diamondSprite", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], Diamond.prototype, "diamondParticle", void 0);
    __decorate([
        property(cc.Label)
    ], Diamond.prototype, "lblScorePlus", void 0);
    Diamond = __decorate([
        ccclass
    ], Diamond);
    return Diamond;
}(cc.Component));
exports.default = Diamond;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZGlhbW9uZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQXlCQztRQXZCVyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBRVYsbUJBQWEsR0FBYyxJQUFJLENBQUM7UUFDeEIscUJBQWUsR0FBc0IsSUFBSSxDQUFDO1FBQ25ELGtCQUFZLEdBQWEsSUFBSSxDQUFDO1FBRTFDLGVBQVMsR0FBRyxJQUFJLENBQUM7O0lBaUI3QixDQUFDO0lBZkcsd0JBQU0sR0FBTjtRQUFBLGlCQWNDO1FBYkcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNWLElBQU0sQ0FBQyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtnQkFDckIsSUFBSSxLQUFJLENBQUMsU0FBUyxLQUFLLENBQUM7b0JBQUUsT0FBTztnQkFDakMsS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7Z0JBQ25CLEtBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDdkQ7aUJBQU07Z0JBQ0gsSUFBSSxLQUFJLENBQUMsU0FBUyxLQUFLLEdBQUc7b0JBQUUsT0FBTztnQkFDbkMsS0FBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7YUFDeEQ7UUFDTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFFWCxDQUFDO0lBdEJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ2E7SUFFVjtRQUFwQixRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFBaUM7SUFDeEI7UUFBNUIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUM7b0RBQTJDO0lBQ25EO1FBQW5CLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUErQjtJQU5qQyxPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBeUIzQjtJQUFELGNBQUM7Q0F6QkQsQUF5QkMsQ0F6Qm9DLEVBQUUsQ0FBQyxTQUFTLEdBeUJoRDtrQkF6Qm9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZURlZmluZSBmcm9tIFwiLi9nYW1lL0dhbWVEZWZpbmVcIjtcclxuaW1wb3J0IHBsYXlHcm91bmQgZnJvbSBcIi4vcGxheUdyb3VuZFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpYW1vbmQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIHBsYXllcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSkgZGlhbW9uZFNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QYXJ0aWNsZVN5c3RlbSkgZGlhbW9uZFBhcnRpY2xlOiBjYy5QYXJ0aWNsZVN5c3RlbSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpIGxibFNjb3JlUGx1czogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgdGhyZXNIb2xkID0gOTk5OTtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSB0aGlzLnBsYXllci5wb3NpdGlvbi55IC0gdGhpcy5ub2RlLnBvc2l0aW9uLnk7XHJcbiAgICAgICAgICAgIGlmICh5IDwgMjAwICYmIHkgPiAtMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50aHJlc0hvbGQgPT09IDApIHJldHVybjtcclxuICAgICAgICAgICAgICAgIHRoaXMudGhyZXNIb2xkID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkNpcmNsZUNvbGxpZGVyKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRocmVzSG9sZCA9PT0gMjAwKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocmVzSG9sZCA9IDIwMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkNpcmNsZUNvbGxpZGVyKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAwLjEpXHJcblxyXG4gICAgfVxyXG59Il19