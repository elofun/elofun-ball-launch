
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gameplay/Ball/BallPhysics.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7c355CUI69PM6g7uROFEL0+', 'BallPhysics');
// Scripts/gameplay/Ball/BallPhysics.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var GamePlayManager_1 = require("../GamePlayManager");
var ParticleManager_1 = require("../Particle/ParticleManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BallPhysics = /** @class */ (function (_super) {
    __extends(BallPhysics, _super);
    function BallPhysics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BallPhysics.prototype.onBeginContact = function (contact, self, other) {
        GamePlayManager_1.default.Instance.timeNeedToTouch.Touching();
        ParticleManager_1.default.Instance.SpawnThing(contact.getWorldManifold().points[0], ParticleManager_1.default.Instance._particleName.TouchWallParticle);
    };
    BallPhysics = __decorate([
        ccclass
    ], BallPhysics);
    return BallPhysics;
}(cc.Component));
exports.default = BallPhysics;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZXBsYXlcXEJhbGxcXEJhbGxQaHlzaWNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWxGLHNEQUFpRDtBQUNqRCwrREFBMEQ7QUFFcEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFBckQ7O0lBY0EsQ0FBQztJQWJDLG9DQUFjLEdBQWQsVUFDRSxPQUEwQixFQUMxQixJQUEyQixFQUMzQixLQUErQjtRQUUvQix5QkFBZSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEQseUJBQWUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUNqQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQ3BDLHlCQUFlLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FDekQsQ0FBQztJQUNKLENBQUM7SUFYa0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQWMvQjtJQUFELGtCQUFDO0NBZEQsQUFjQyxDQWR3QyxFQUFFLENBQUMsU0FBUyxHQWNwRDtrQkFkb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBCYWxsIGZyb20gXCIuLi9CYWxsXCI7XHJcbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tIFwiLi4vR2FtZU1hbmFnZXJcIjtcclxuaW1wb3J0IEdhbWVQbGF5TWFuYWdlciBmcm9tIFwiLi4vR2FtZVBsYXlNYW5hZ2VyXCI7XHJcbmltcG9ydCBQYXJ0aWNsZU1hbmFnZXIgZnJvbSBcIi4uL1BhcnRpY2xlL1BhcnRpY2xlTWFuYWdlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbGxQaHlzaWNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBvbkJlZ2luQ29udGFjdChcclxuICAgIGNvbnRhY3Q6IGNjLlBoeXNpY3NDb250YWN0LFxyXG4gICAgc2VsZjogY2MuUGh5c2ljc0JveENvbGxpZGVyLFxyXG4gICAgb3RoZXI6IGNjLlBoeXNpY3NDaXJjbGVDb2xsaWRlclxyXG4gICkge1xyXG4gICAgR2FtZVBsYXlNYW5hZ2VyLkluc3RhbmNlLnRpbWVOZWVkVG9Ub3VjaC5Ub3VjaGluZygpO1xyXG4gICAgUGFydGljbGVNYW5hZ2VyLkluc3RhbmNlLlNwYXduVGhpbmcoXHJcbiAgICAgIGNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpLnBvaW50c1swXSxcclxuICAgICAgUGFydGljbGVNYW5hZ2VyLkluc3RhbmNlLl9wYXJ0aWNsZU5hbWUuVG91Y2hXYWxsUGFydGljbGVcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==