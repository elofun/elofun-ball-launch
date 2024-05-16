
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gameplay/TrajectoryLine/TrajectoryLine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '70e104pF95DF4JScfXbPalN', 'TrajectoryLine');
// Scripts/gameplay/TrajectoryLine/TrajectoryLine.ts

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
var TrajectoryLine = /** @class */ (function (_super) {
    __extends(TrajectoryLine, _super);
    function TrajectoryLine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.graphics = null;
        return _this;
    }
    TrajectoryLine.prototype.onEnable = function () {
        this.graphics = this.node.getComponent(cc.Graphics);
    };
    TrajectoryLine.prototype.start = function () {
        // this.node.on(cc.Node.EventType.MOUSE_MOVE, this.onMouseDown, this);
        // this.clearLineOverTime();
    };
    TrajectoryLine.prototype.drawLine = function (start, endPoint, mag) {
        this.graphics.clear();
        this.graphics.strokeColor = cc.Color.ORANGE; // Set line color
        this.graphics.lineWidth = 3; // Set line width
        this.graphics.moveTo(start.x, start.y);
        var end = endPoint.mul(mag).add(start);
        this.graphics.lineTo(end.x, end.y);
        this.graphics.stroke();
    };
    TrajectoryLine.prototype.drawCircle = function (start, endPoint, mag) {
        var gap = 14;
        var radius = 4;
        this.graphics.lineWidth = 2; // Set line width
        var pointCount = 0;
        var newCurrentPosMag = 0;
        var newCurrentPos = cc.Vec2.ZERO;
        var end = endPoint.normalize().clone();
        var dir = end.clone().normalizeSelf();
        pointCount = 0;
        var currentPos = start.clone();
        currentPos.x = start.x + end.normalizeSelf().x;
        currentPos.y = start.y + end.normalizeSelf().y;
        // currentPos.x = start.x + this.offSet * end.normalizeSelf().x;
        // currentPos.y = start.y + this.offSet * end.normalizeSelf().y;
        this.graphics.moveTo(start.x, start.y);
        this.graphics.circle(currentPos.x, currentPos.y, radius);
        while (newCurrentPosMag < mag - 50) {
            newCurrentPosMag = dir
                .clone()
                .mul(pointCount * gap)
                .mag();
            newCurrentPos = dir
                .clone()
                .mul(pointCount * gap)
                .add(currentPos);
            this.graphics.circle(newCurrentPos.x, newCurrentPos.y, radius);
            pointCount++;
        }
        this.graphics.fill();
        this.graphics.stroke();
    };
    TrajectoryLine.prototype.update = function (dt) { };
    TrajectoryLine = __decorate([
        ccclass
    ], TrajectoryLine);
    return TrajectoryLine;
}(cc.Component));
exports.default = TrajectoryLine;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZXBsYXlcXFRyYWplY3RvcnlMaW5lXFxUcmFqZWN0b3J5TGluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQXNEQztRQXJEQyxjQUFRLEdBQWdCLElBQUksQ0FBQzs7SUFxRC9CLENBQUM7SUFwRFcsaUNBQVEsR0FBbEI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0QsOEJBQUssR0FBTDtRQUNFLHNFQUFzRTtRQUN0RSw0QkFBNEI7SUFDOUIsQ0FBQztJQUNELGlDQUFRLEdBQVIsVUFBUyxLQUFjLEVBQUUsUUFBaUIsRUFBRSxHQUFXO1FBQ3JELElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxpQkFBaUI7UUFDOUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsaUJBQWlCO1FBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXZDLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUNELG1DQUFVLEdBQVYsVUFBVyxLQUFjLEVBQUUsUUFBaUIsRUFBRSxHQUFXO1FBQ3ZELElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLGlCQUFpQjtRQUM5QyxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDekIsSUFBSSxhQUFhLEdBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDMUMsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZDLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUV0QyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBRWYsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQy9CLFVBQVUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9DLFVBQVUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9DLGdFQUFnRTtRQUNoRSxnRUFBZ0U7UUFDaEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3pELE9BQU8sZ0JBQWdCLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRTtZQUNsQyxnQkFBZ0IsR0FBRyxHQUFHO2lCQUNuQixLQUFLLEVBQUU7aUJBQ1AsR0FBRyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7aUJBQ3JCLEdBQUcsRUFBRSxDQUFDO1lBQ1QsYUFBYSxHQUFHLEdBQUc7aUJBQ2hCLEtBQUssRUFBRTtpQkFDUCxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztpQkFDckIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMvRCxVQUFVLEVBQUUsQ0FBQztTQUNkO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDRCwrQkFBTSxHQUFOLFVBQU8sRUFBRSxJQUFHLENBQUM7SUFyRE0sY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQXNEbEM7SUFBRCxxQkFBQztDQXRERCxBQXNEQyxDQXREMkMsRUFBRSxDQUFDLFNBQVMsR0FzRHZEO2tCQXREb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFqZWN0b3J5TGluZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgZ3JhcGhpY3M6IGNjLkdyYXBoaWNzID0gbnVsbDtcclxuICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdyYXBoaWNzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgfVxyXG4gIHN0YXJ0KCkge1xyXG4gICAgLy8gdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX01PVkUsIHRoaXMub25Nb3VzZURvd24sIHRoaXMpO1xyXG4gICAgLy8gdGhpcy5jbGVhckxpbmVPdmVyVGltZSgpO1xyXG4gIH1cclxuICBkcmF3TGluZShzdGFydDogY2MuVmVjMiwgZW5kUG9pbnQ6IGNjLlZlYzIsIG1hZzogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmdyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuT1JBTkdFOyAvLyBTZXQgbGluZSBjb2xvclxyXG4gICAgdGhpcy5ncmFwaGljcy5saW5lV2lkdGggPSAzOyAvLyBTZXQgbGluZSB3aWR0aFxyXG4gICAgdGhpcy5ncmFwaGljcy5tb3ZlVG8oc3RhcnQueCwgc3RhcnQueSk7XHJcblxyXG4gICAgbGV0IGVuZCA9IGVuZFBvaW50Lm11bChtYWcpLmFkZChzdGFydCk7XHJcbiAgICB0aGlzLmdyYXBoaWNzLmxpbmVUbyhlbmQueCwgZW5kLnkpO1xyXG4gICAgdGhpcy5ncmFwaGljcy5zdHJva2UoKTtcclxuICB9XHJcbiAgZHJhd0NpcmNsZShzdGFydDogY2MuVmVjMiwgZW5kUG9pbnQ6IGNjLlZlYzIsIG1hZzogbnVtYmVyKSB7XHJcbiAgICBsZXQgZ2FwID0gMTQ7XHJcbiAgICBsZXQgcmFkaXVzID0gNDtcclxuICAgIHRoaXMuZ3JhcGhpY3MubGluZVdpZHRoID0gMjsgLy8gU2V0IGxpbmUgd2lkdGhcclxuICAgIGxldCBwb2ludENvdW50ID0gMDtcclxuICAgIGxldCBuZXdDdXJyZW50UG9zTWFnID0gMDtcclxuICAgIGxldCBuZXdDdXJyZW50UG9zOiBjYy5WZWMyID0gY2MuVmVjMi5aRVJPO1xyXG4gICAgbGV0IGVuZCA9IGVuZFBvaW50Lm5vcm1hbGl6ZSgpLmNsb25lKCk7XHJcbiAgICBsZXQgZGlyID0gZW5kLmNsb25lKCkubm9ybWFsaXplU2VsZigpO1xyXG5cclxuICAgIHBvaW50Q291bnQgPSAwO1xyXG5cclxuICAgIGxldCBjdXJyZW50UG9zID0gc3RhcnQuY2xvbmUoKTtcclxuICAgIGN1cnJlbnRQb3MueCA9IHN0YXJ0LnggKyBlbmQubm9ybWFsaXplU2VsZigpLng7XHJcbiAgICBjdXJyZW50UG9zLnkgPSBzdGFydC55ICsgZW5kLm5vcm1hbGl6ZVNlbGYoKS55O1xyXG4gICAgLy8gY3VycmVudFBvcy54ID0gc3RhcnQueCArIHRoaXMub2ZmU2V0ICogZW5kLm5vcm1hbGl6ZVNlbGYoKS54O1xyXG4gICAgLy8gY3VycmVudFBvcy55ID0gc3RhcnQueSArIHRoaXMub2ZmU2V0ICogZW5kLm5vcm1hbGl6ZVNlbGYoKS55O1xyXG4gICAgdGhpcy5ncmFwaGljcy5tb3ZlVG8oc3RhcnQueCwgc3RhcnQueSk7XHJcbiAgICB0aGlzLmdyYXBoaWNzLmNpcmNsZShjdXJyZW50UG9zLngsIGN1cnJlbnRQb3MueSwgcmFkaXVzKTtcclxuICAgIHdoaWxlIChuZXdDdXJyZW50UG9zTWFnIDwgbWFnIC0gNTApIHtcclxuICAgICAgbmV3Q3VycmVudFBvc01hZyA9IGRpclxyXG4gICAgICAgIC5jbG9uZSgpXHJcbiAgICAgICAgLm11bChwb2ludENvdW50ICogZ2FwKVxyXG4gICAgICAgIC5tYWcoKTtcclxuICAgICAgbmV3Q3VycmVudFBvcyA9IGRpclxyXG4gICAgICAgIC5jbG9uZSgpXHJcbiAgICAgICAgLm11bChwb2ludENvdW50ICogZ2FwKVxyXG4gICAgICAgIC5hZGQoY3VycmVudFBvcyk7XHJcbiAgICAgIHRoaXMuZ3JhcGhpY3MuY2lyY2xlKG5ld0N1cnJlbnRQb3MueCwgbmV3Q3VycmVudFBvcy55LCByYWRpdXMpO1xyXG4gICAgICBwb2ludENvdW50Kys7XHJcbiAgICB9XHJcbiAgICB0aGlzLmdyYXBoaWNzLmZpbGwoKTtcclxuICAgIHRoaXMuZ3JhcGhpY3Muc3Ryb2tlKCk7XHJcbiAgfVxyXG4gIHVwZGF0ZShkdCkge31cclxufVxyXG4iXX0=