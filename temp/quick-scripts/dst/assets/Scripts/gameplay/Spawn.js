
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gameplay/Spawn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fd8f6IjeKpAsZNtY7UtFi2B', 'Spawn');
// Scripts/gameplay/Spawn.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Spawn = /** @class */ (function (_super) {
    __extends(Spawn, _super);
    function Spawn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prefabs = [];
        _this.holder = null;
        return _this;
    }
    Spawn.prototype.LoadHolder = function () {
        if (this.holder != null)
            return;
        this.holder = this.node.getChildByName("Holder");
        console.log("Success load Holder ", this.holder);
    };
    Spawn.prototype.LoadPrefabs = function () {
        var _this = this;
        this.node.getChildByName("Prefabs").children.forEach(function (element) {
            _this.prefabs.push(element);
        });
    };
    Spawn.prototype.GetPrefabByName = function (prefabName) {
        var targetPrefab = null;
        this.prefabs.forEach(function (prefab) {
            if (prefab.name == prefabName) {
                targetPrefab = prefab;
            }
        });
        return targetPrefab;
    };
    Spawn.prototype.SpawnThing = function (spawnPos, prefabName) {
        var prefab = this.GetPrefabByName(prefabName);
        if (prefab == null)
            return null;
        var newNode = cc.instantiate(prefab);
        newNode.active = true;
        newNode.position = new cc.Vec3(spawnPos.x, spawnPos.y, 0);
        newNode.parent = this.holder;
        return newNode;
    };
    Spawn.prototype.onEnable = function () {
        this.LoadHolder();
        this.LoadPrefabs();
    };
    __decorate([
        property(cc.Node)
    ], Spawn.prototype, "prefabs", void 0);
    __decorate([
        property(cc.Node)
    ], Spawn.prototype, "holder", void 0);
    Spawn = __decorate([
        ccclass
    ], Spawn);
    return Spawn;
}(cc.Component));
exports.default = Spawn;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZXBsYXlcXFNwYXduLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBbUNDO1FBbENvQixhQUFPLEdBQWMsRUFBRSxDQUFDO1FBQ3hCLFlBQU0sR0FBWSxJQUFJLENBQUM7O0lBaUM1QyxDQUFDO0lBaENXLDBCQUFVLEdBQXBCO1FBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUk7WUFBRSxPQUFPO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNTLDJCQUFXLEdBQXJCO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztZQUMzRCxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDUywrQkFBZSxHQUF6QixVQUEwQixVQUFrQjtRQUMxQyxJQUFJLFlBQVksR0FBWSxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQzFCLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxVQUFVLEVBQUU7Z0JBQzdCLFlBQVksR0FBRyxNQUFNLENBQUM7YUFDdkI7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFDTSwwQkFBVSxHQUFqQixVQUFrQixRQUFpQixFQUFFLFVBQWtCO1FBQ3JELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUMsSUFBSSxNQUFNLElBQUksSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ2hDLElBQUksT0FBTyxHQUFZLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDdEIsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFELE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM3QixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBQ1Msd0JBQVEsR0FBbEI7UUFDRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFqQ2tCO1FBQWxCLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUF5QjtJQUN4QjtRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FBd0I7SUFGdkIsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQW1DekI7SUFBRCxZQUFDO0NBbkNELEFBbUNDLENBbkNrQyxFQUFFLENBQUMsU0FBUyxHQW1DOUM7a0JBbkNvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwYXduIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBAcHJvcGVydHkoY2MuTm9kZSkgcHJlZmFiczogY2MuTm9kZVtdID0gW107XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpIGhvbGRlcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgcHJvdGVjdGVkIExvYWRIb2xkZXIoKSB7XHJcbiAgICBpZiAodGhpcy5ob2xkZXIgIT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgdGhpcy5ob2xkZXIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJIb2xkZXJcIik7XHJcbiAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3MgbG9hZCBIb2xkZXIgXCIsIHRoaXMuaG9sZGVyKTtcclxuICB9XHJcbiAgcHJvdGVjdGVkIExvYWRQcmVmYWJzKCkge1xyXG4gICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUHJlZmFic1wiKS5jaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgIHRoaXMucHJlZmFicy5wdXNoKGVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHByb3RlY3RlZCBHZXRQcmVmYWJCeU5hbWUocHJlZmFiTmFtZTogc3RyaW5nKTogY2MuTm9kZSB7XHJcbiAgICBsZXQgdGFyZ2V0UHJlZmFiOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHRoaXMucHJlZmFicy5mb3JFYWNoKChwcmVmYWIpID0+IHtcclxuICAgICAgaWYgKHByZWZhYi5uYW1lID09IHByZWZhYk5hbWUpIHtcclxuICAgICAgICB0YXJnZXRQcmVmYWIgPSBwcmVmYWI7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRhcmdldFByZWZhYjtcclxuICB9XHJcbiAgcHVibGljIFNwYXduVGhpbmcoc3Bhd25Qb3M6IGNjLlZlYzIsIHByZWZhYk5hbWU6IHN0cmluZyk6IGNjLk5vZGUge1xyXG4gICAgbGV0IHByZWZhYiA9IHRoaXMuR2V0UHJlZmFiQnlOYW1lKHByZWZhYk5hbWUpO1xyXG4gICAgaWYgKHByZWZhYiA9PSBudWxsKSByZXR1cm4gbnVsbDtcclxuICAgIGxldCBuZXdOb2RlOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgIG5ld05vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIG5ld05vZGUucG9zaXRpb24gPSBuZXcgY2MuVmVjMyhzcGF3blBvcy54LCBzcGF3blBvcy55LCAwKTtcclxuICAgIG5ld05vZGUucGFyZW50ID0gdGhpcy5ob2xkZXI7XHJcbiAgICByZXR1cm4gbmV3Tm9kZTtcclxuICB9XHJcbiAgcHJvdGVjdGVkIG9uRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5Mb2FkSG9sZGVyKCk7XHJcbiAgICB0aGlzLkxvYWRQcmVmYWJzKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==