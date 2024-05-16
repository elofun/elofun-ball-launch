"use strict";
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