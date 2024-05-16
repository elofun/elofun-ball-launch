
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gameplay/Ball/Trail.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bdaffaF72hHi4PuAcpqk95k', 'Trail');
// Scripts/gameplay/Ball/Trail.ts

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
var Trail = /** @class */ (function (_super) {
    __extends(Trail, _super);
    function Trail() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.color = cc.Color.WHITE;
        _this.target = null;
        _this.width = 10;
        _this.trailLength = 40;
        _this.trailPoints = [];
        _this.graphics = null;
        return _this;
        // update (dt) {}
    }
    Trail.prototype.start = function () {
        // Create a graphics node
        this.graphics = this.node.getComponent(cc.Graphics);
        console.log(this.graphics);
        // this.scheduleUpdate();
    };
    Trail.prototype.update = function (dt) {
        // Add current position to the trail points
        this.trailPoints.push(this.target.getPosition());
        // Remove old points if trail length is exceeded
        while (this.trailPoints.length > this.trailLength) {
            this.trailPoints.shift();
            //   console.log("this.trailPoints.shift();", this.trailPoints.shift());
        }
        // Clear graphics
        this.graphics.clear();
        // Draw the trail
        this.graphics.lineWidth = this.width;
        this.graphics.strokeColor = this.color;
        for (var i = this.trailPoints.length - 2; i >= 0; --i) {
            this.graphics.moveTo(this.trailPoints[i].x, this.trailPoints[i].y);
            this.graphics.lineTo(this.trailPoints[i + 1].x, this.trailPoints[i + 1].y);
            this.graphics.stroke();
            this.graphics.lineWidth = this.graphics.lineWidth - 1;
        }
    };
    __decorate([
        property(cc.Color)
    ], Trail.prototype, "color", void 0);
    __decorate([
        property(cc.Node)
    ], Trail.prototype, "target", void 0);
    __decorate([
        property(cc.Float)
    ], Trail.prototype, "width", void 0);
    __decorate([
        property(cc.Float)
    ], Trail.prototype, "trailLength", void 0);
    Trail = __decorate([
        ccclass
    ], Trail);
    return Trail;
}(cc.Component));
exports.default = Trail;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZXBsYXlcXEJhbGxcXFRyYWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBb0RDO1FBbERDLFdBQUssR0FBYSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUVqQyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFdBQUssR0FBVyxFQUFFLENBQUM7UUFHbkIsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFFakIsaUJBQVcsR0FBYyxFQUFFLENBQUM7UUFFNUIsY0FBUSxHQUFnQixJQUFJLENBQUM7O1FBc0NyQyxpQkFBaUI7SUFDbkIsQ0FBQztJQXJDQyxxQkFBSyxHQUFMO1FBQ0UseUJBQXlCO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTNCLHlCQUF5QjtJQUMzQixDQUFDO0lBRUQsc0JBQU0sR0FBTixVQUFPLEVBQVU7UUFDZiwyQ0FBMkM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBRWpELGdEQUFnRDtRQUNoRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN6Qix3RUFBd0U7U0FDekU7UUFFRCxpQkFBaUI7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUV0QixpQkFBaUI7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3ZDLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQzFCLENBQUM7WUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRXZCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztTQUN2RDtJQUNILENBQUM7SUEvQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt3Q0FDYztJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0NBQ0E7SUFHbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4Q0FDTTtJQVROLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0FvRHpCO0lBQUQsWUFBQztDQXBERCxBQW9EQyxDQXBEa0MsRUFBRSxDQUFDLFNBQVMsR0FvRDlDO2tCQXBEb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFpbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KGNjLkNvbG9yKVxyXG4gIGNvbG9yOiBjYy5Db2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHRhcmdldDogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gIHdpZHRoOiBudW1iZXIgPSAxMDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gIHRyYWlsTGVuZ3RoOiBudW1iZXIgPSA0MDtcclxuXHJcbiAgcHJpdmF0ZSB0cmFpbFBvaW50czogY2MuVmVjMltdID0gW107XHJcblxyXG4gIHByaXZhdGUgZ3JhcGhpY3M6IGNjLkdyYXBoaWNzID0gbnVsbDtcclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICAvLyBDcmVhdGUgYSBncmFwaGljcyBub2RlXHJcbiAgICB0aGlzLmdyYXBoaWNzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmdyYXBoaWNzKTtcclxuXHJcbiAgICAvLyB0aGlzLnNjaGVkdWxlVXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgLy8gQWRkIGN1cnJlbnQgcG9zaXRpb24gdG8gdGhlIHRyYWlsIHBvaW50c1xyXG4gICAgdGhpcy50cmFpbFBvaW50cy5wdXNoKHRoaXMudGFyZ2V0LmdldFBvc2l0aW9uKCkpO1xyXG5cclxuICAgIC8vIFJlbW92ZSBvbGQgcG9pbnRzIGlmIHRyYWlsIGxlbmd0aCBpcyBleGNlZWRlZFxyXG4gICAgd2hpbGUgKHRoaXMudHJhaWxQb2ludHMubGVuZ3RoID4gdGhpcy50cmFpbExlbmd0aCkge1xyXG4gICAgICB0aGlzLnRyYWlsUG9pbnRzLnNoaWZ0KCk7XHJcbiAgICAgIC8vICAgY29uc29sZS5sb2coXCJ0aGlzLnRyYWlsUG9pbnRzLnNoaWZ0KCk7XCIsIHRoaXMudHJhaWxQb2ludHMuc2hpZnQoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2xlYXIgZ3JhcGhpY3NcclxuICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcclxuXHJcbiAgICAvLyBEcmF3IHRoZSB0cmFpbFxyXG4gICAgdGhpcy5ncmFwaGljcy5saW5lV2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgdGhpcy5ncmFwaGljcy5zdHJva2VDb2xvciA9IHRoaXMuY29sb3I7XHJcbiAgICBmb3IgKGxldCBpID0gdGhpcy50cmFpbFBvaW50cy5sZW5ndGggLSAyOyBpID49IDA7IC0taSkge1xyXG4gICAgICB0aGlzLmdyYXBoaWNzLm1vdmVUbyh0aGlzLnRyYWlsUG9pbnRzW2ldLngsIHRoaXMudHJhaWxQb2ludHNbaV0ueSk7XHJcbiAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVRvKFxyXG4gICAgICAgIHRoaXMudHJhaWxQb2ludHNbaSArIDFdLngsXHJcbiAgICAgICAgdGhpcy50cmFpbFBvaW50c1tpICsgMV0ueVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZSgpO1xyXG5cclxuICAgICAgdGhpcy5ncmFwaGljcy5saW5lV2lkdGggPSB0aGlzLmdyYXBoaWNzLmxpbmVXaWR0aCAtIDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==