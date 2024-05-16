
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/utils/Timer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2f2fcQ9soJHUbtX80Hsh3jj', 'Timer');
// Scripts/utils/Timer.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Timer = /** @class */ (function () {
    function Timer() {
        this.timer = 0;
        this.duration = 0;
        this.overhead = 0;
        this.isDone = true;
    }
    Timer.prototype.SetDuration = function (duration) {
        this.timer = duration;
        this.duration = duration;
        this.overhead = 0;
        this.isDone = false;
    };
    Timer.prototype.GetDuration = function () {
        return this.duration;
    };
    Timer.prototype.GetTime = function () {
        return this.timer;
    };
    Timer.prototype.GetPercent = function () {
        return this.timer / this.duration;
    };
    Timer.prototype.Reset = function () {
        this.timer = this.duration;
        this.overhead = 0;
        this.isDone = false;
    };
    Timer.prototype.IsDone = function () {
        return this.timer === 0;
    };
    Timer.prototype.FirstFinished = function () {
        if (this.timer > 0) {
            return false;
        }
        if (this.isDone) {
            return false;
        }
        this.isDone = true;
        return true;
    };
    Timer.prototype.GetOverhead = function () {
        return this.overhead;
    };
    Timer.prototype.Update = function (dt) {
        if (this.timer === 0) {
            return;
        }
        this.timer -= dt;
        if (this.timer < 0) {
            this.overhead = -this.timer;
            this.timer = 0;
        }
    };
    return Timer;
}());
exports.default = Timer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcdXRpbHNcXFRpbWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtRQUNVLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLFdBQU0sR0FBWSxJQUFJLENBQUM7SUEwRGpDLENBQUM7SUF4REMsMkJBQVcsR0FBWCxVQUFhLFFBQVE7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELDJCQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELHVCQUFPLEdBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELDBCQUFVLEdBQVY7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNwQyxDQUFDO0lBRUQscUJBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsc0JBQU0sR0FBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELDZCQUFhLEdBQWI7UUFDRSxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ2xCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsMkJBQVcsR0FBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQsc0JBQU0sR0FBTixVQUFRLEVBQUU7UUFDUixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ2pCLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7U0FDaEI7SUFDSCxDQUFDO0lBQ0gsWUFBQztBQUFELENBOURBLEFBOERDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lciB7XHJcbiAgcHJpdmF0ZSB0aW1lcjogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIGR1cmF0aW9uOiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgb3ZlcmhlYWQ6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBpc0RvbmU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBTZXREdXJhdGlvbiAoZHVyYXRpb24pIHtcclxuICAgIHRoaXMudGltZXIgPSBkdXJhdGlvbjtcclxuICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICAgIHRoaXMub3ZlcmhlYWQgPSAwO1xyXG4gICAgdGhpcy5pc0RvbmUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIEdldER1cmF0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLmR1cmF0aW9uO1xyXG4gIH1cclxuXHJcbiAgR2V0VGltZSAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50aW1lcjtcclxuICB9XHJcblxyXG4gIEdldFBlcmNlbnQgKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGltZXIgLyB0aGlzLmR1cmF0aW9uO1xyXG4gIH1cclxuXHJcbiAgUmVzZXQgKCkge1xyXG4gICAgdGhpcy50aW1lciA9IHRoaXMuZHVyYXRpb247XHJcbiAgICB0aGlzLm92ZXJoZWFkID0gMDtcclxuICAgIHRoaXMuaXNEb25lID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBJc0RvbmUgKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGltZXIgPT09IDA7XHJcbiAgfVxyXG5cclxuICBGaXJzdEZpbmlzaGVkICgpIHtcclxuICAgIGlmICh0aGlzLnRpbWVyID4gMCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pc0RvbmUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaXNEb25lID0gdHJ1ZTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgR2V0T3ZlcmhlYWQgKCkge1xyXG4gICAgcmV0dXJuIHRoaXMub3ZlcmhlYWQ7XHJcbiAgfVxyXG5cclxuICBVcGRhdGUgKGR0KSB7XHJcbiAgICBpZiAodGhpcy50aW1lciA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50aW1lciAtPSBkdDtcclxuICAgIGlmICh0aGlzLnRpbWVyIDwgMCkge1xyXG4gICAgICB0aGlzLm92ZXJoZWFkID0gLXRoaXMudGltZXI7XHJcbiAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=