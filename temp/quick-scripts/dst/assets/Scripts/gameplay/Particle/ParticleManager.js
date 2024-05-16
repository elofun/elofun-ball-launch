
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gameplay/Particle/ParticleManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ab89e3YJghAfZuNvXoYnmFX', 'ParticleManager');
// Scripts/gameplay/Particle/ParticleManager.ts

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
var Spawn_1 = require("../Spawn");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ParticleManager = /** @class */ (function (_super) {
    __extends(ParticleManager, _super);
    function ParticleManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._particleName = {
            TouchWallParticle: "TouchWallParticle",
        };
        return _this;
    }
    ParticleManager_1 = ParticleManager;
    ParticleManager.prototype.start = function () {
        ParticleManager_1.Instance = this;
    };
    var ParticleManager_1;
    ParticleManager.Instance = null;
    ParticleManager = ParticleManager_1 = __decorate([
        ccclass
    ], ParticleManager);
    return ParticleManager;
}(Spawn_1.default));
exports.default = ParticleManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZXBsYXlcXFBhcnRpY2xlXFxQYXJ0aWNsZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsa0NBQTZCO0FBRXZCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFLO0lBQWxEO1FBQUEscUVBUUM7UUFOUSxtQkFBYSxHQUFHO1lBQ3JCLGlCQUFpQixFQUFFLG1CQUFtQjtTQUN2QyxDQUFDOztJQUlKLENBQUM7d0JBUm9CLGVBQWU7SUFLeEIsK0JBQUssR0FBZjtRQUNFLGlCQUFlLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUNsQyxDQUFDOztJQU5hLHdCQUFRLEdBQW9CLElBQUksQ0FBQztJQUQ1QixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBUW5DO0lBQUQsc0JBQUM7Q0FSRCxBQVFDLENBUjRDLGVBQUssR0FRakQ7a0JBUm9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgU3Bhd24gZnJvbSBcIi4uL1NwYXduXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFydGljbGVNYW5hZ2VyIGV4dGVuZHMgU3Bhd24ge1xyXG4gIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2U6IFBhcnRpY2xlTWFuYWdlciA9IG51bGw7XHJcbiAgcHVibGljIF9wYXJ0aWNsZU5hbWUgPSB7XHJcbiAgICBUb3VjaFdhbGxQYXJ0aWNsZTogXCJUb3VjaFdhbGxQYXJ0aWNsZVwiLFxyXG4gIH07XHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgUGFydGljbGVNYW5hZ2VyLkluc3RhbmNlID0gdGhpcztcclxuICB9XHJcbn1cclxuIl19