
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/utils/Helper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '90a75udUmlJUqYerDKv5BZf', 'Helper');
// Scripts/utils/Helper.ts

"use strict";
// import GameDefine from "../game/GameDefine";
Object.defineProperty(exports, "__esModule", { value: true });
var PeerManager_1 = require("../PeerComponent/PeerManager");
exports.default = new (/** @class */ (function () {
    function Helper() {
    }
    Helper.prototype.Rand = function (min, max) {
        return Math.random() * (max - min) + min;
    };
    Helper.prototype.RandInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    Helper.prototype.RandArgument = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return arguments[this.RandInt(0, arguments.length - 1)];
    };
    Helper.prototype.RandArray = function (arr) {
        return arr[this.RandInt(0, arr.length - 1)];
    };
    Helper.prototype.RandTypeEnum = function (obj) {
        var keys = Object.keys(obj);
        return this.RandInt(0, keys.length / 2 - 1);
    };
    Helper.prototype.GetKey = function (obj, index) {
        return Object.keys(obj)[index];
    };
    Helper.prototype.GetKeyEnum = function (obj, index) {
        var keys = Object.keys(obj);
        return keys[index + keys.length / 2];
    };
    Helper.prototype.GetIndexEnum = function (obj, name) {
        var keys = Object.keys(obj);
        for (var i = keys.length / 2; i < keys.length; i++) {
            if (keys[i] == name) {
                return i - keys.length / 2;
            }
        }
        return -1;
    };
    Helper.prototype.CopyToClipboard = function (str) {
        var el = document.createElement('textarea');
        var isIOS = navigator.userAgent.search(/(iPad|iPhone|iphone|iPod)/) != -1;
        el.value = str;
        document.body.appendChild(el);
        if (isIOS) {
            el.contentEditable = true;
            el.readOnly = false;
            var range = document.createRange();
            range.selectNodeContents(el);
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
            el.setSelectionRange(0, 999999);
        }
        else {
            el.setAttribute('readonly', '');
            el.select();
        }
        document.execCommand('copy');
        document.body.removeChild(el);
    };
    Helper.prototype.Normalized = function (x1, y1, x2, y2) {
        var dX = x1 - x2;
        var dY = y1 - y2;
        var length = Math.sqrt(dX * dX + dY * dY);
        return new cc.Vec2(dX / length, dY / length);
    };
    Helper.prototype.MoveToTarget = function (current, target, speed) {
        speed = Math.abs(speed);
        if (current < target) {
            return Math.min(target, current + speed);
        }
        else {
            return Math.max(target, current - speed);
        }
    };
    Helper.prototype.Collision2Rect = function (rect1, rect2) {
        if (rect1.x + rect1.width < rect2.x ||
            rect1.y + rect1.height < rect2.y ||
            rect2.x + rect2.width < rect1.x ||
            rect2.y + rect2.height < rect1.y) {
            return false;
        }
        return true;
    };
    Helper.prototype.CollisionPointRect = function (x, y, rect) {
        if (x < rect.x ||
            y < rect.y ||
            x > rect.x + rect.width ||
            y > rect.y + rect.height) {
            return false;
        }
        return true;
    };
    Helper.prototype.Distance = function (x1, y1, x2, y2) {
        return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    };
    Helper.prototype.Constrain = function (value, min, max) {
        value = Math.max(min, value);
        value = Math.min(max, value);
        return value;
    };
    Helper.prototype.ToRadian = function (angle) {
        return (angle / 180) * Math.PI;
    };
    Helper.prototype.ToAngle = function (radian) {
        return (radian / Math.PI) * 180;
    };
    Helper.prototype.TimeoutPromise = function (time, promise) {
        var timeout = new Promise(function (resolve, reject) {
            setTimeout(function () {
                reject("Timed out.");
            }, time);
        });
        return Promise.race([promise, timeout]);
    };
    Helper.prototype.HttpRequest = function (method, url, body, responseType, headers, requestParams) {
        if (headers === void 0) { headers = null; }
        if (requestParams === void 0) { requestParams = {}; }
        var logEvent = window.logEvent || console.log;
        var start = Date.now();
        var apiName = url.split('/').pop().split('?').shift();
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url, true);
            if (method == "POST") {
                xhr.setRequestHeader("Content-Type", "application/json");
            }
            for (var _i = 0, headers_1 = headers; _i < headers_1.length; _i++) {
                var item = headers_1[_i];
                xhr.setRequestHeader(item.key, item.value);
            }
            if (responseType) {
                xhr.responseType = responseType;
            }
            // xhr.timeout = GameDefine.TIME_API_TIMEOUT;
            xhr.timeout = 10000;
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(xhr.response);
                    }
                    else {
                        reject(xhr.response);
                    }
                    logEvent(apiName, {
                        method: method,
                        url: url,
                        body: body,
                        requestParams: requestParams,
                        reponseStatus: xhr.status,
                        response: xhr.response,
                        duration: Date.now() - start
                    });
                }
            };
            xhr.onerror = function (e) {
                logEvent('apiRequestError', {
                    apiName: apiName,
                    method: method,
                    url: url,
                    body: body,
                    requestParams: requestParams,
                    duration: Date.now() - start
                });
                reject('error');
            };
            xhr.ontimeout = function (e) {
                reject('timed out');
            };
            xhr.send(body);
        });
    };
    Helper.prototype.DrawLine = function (graphic, x1, y1, x2, y2, color, lineWidth) {
        if (color === void 0) { color = cc.Color.RED; }
        if (lineWidth === void 0) { lineWidth = 2; }
        graphic.lineWidth = lineWidth;
        graphic.strokeColor = color;
        graphic.moveTo(x1, y1);
        graphic.lineTo(x2, y2);
        graphic.stroke();
    };
    Helper.prototype.DrawSquare = function (graphic, x, y, width, color, lineWidth) {
        if (color === void 0) { color = cc.Color.RED; }
        if (lineWidth === void 0) { lineWidth = 2; }
        this.DrawRect(graphic, x, y, width, width, color, lineWidth);
    };
    Helper.prototype.DrawRect = function (graphic, x, y, width, height, color, lineWidth) {
        if (color === void 0) { color = cc.Color.RED; }
        if (lineWidth === void 0) { lineWidth = 2; }
        graphic.lineWidth = lineWidth;
        graphic.strokeColor = color;
        typeof x === "number"
            ? graphic.rect(x, y, width, height)
            : graphic.rect(x.x, x.y, x.width, x.height);
        graphic.stroke();
    };
    Helper.prototype.DrawArc = function (graphic, x, y, r, startAngle, endAngle, offsetAngle, anticlockwise, color, lineWidth, withLine) {
        if (startAngle === void 0) { startAngle = 0; }
        if (endAngle === void 0) { endAngle = Math.PI * 2; }
        if (offsetAngle === void 0) { offsetAngle = 0; }
        if (anticlockwise === void 0) { anticlockwise = true; }
        if (color === void 0) { color = cc.Color.RED; }
        if (lineWidth === void 0) { lineWidth = 2; }
        if (withLine === void 0) { withLine = false; }
        var TWO_PI = Math.PI * 2;
        var drawOffset = Math.PI * 1.5; // start angle at 0 o'clock
        startAngle += drawOffset + offsetAngle;
        endAngle += drawOffset + offsetAngle;
        startAngle = TWO_PI - startAngle;
        endAngle = TWO_PI - endAngle;
        startAngle = startAngle > TWO_PI ? startAngle % TWO_PI : startAngle;
        endAngle = endAngle > TWO_PI ? endAngle % TWO_PI : endAngle;
        graphic.lineWidth = lineWidth;
        graphic.strokeColor = color;
        graphic.arc(x, y, r, startAngle, endAngle, anticlockwise);
        if (withLine) {
            graphic.lineTo(x, y);
            graphic.close();
        }
        graphic.stroke();
    };
    Helper.prototype.DrawCircle = function (graphic, x, y, r, color, lineWidth) {
        if (color === void 0) { color = cc.Color.RED; }
        if (lineWidth === void 0) { lineWidth = 2; }
        this.DrawEllipse(graphic, x, y, r, r, color, lineWidth);
    };
    Helper.prototype.DrawEllipse = function (graphic, x, y, rX, rY, color, lineWidth) {
        if (color === void 0) { color = cc.Color.RED; }
        if (lineWidth === void 0) { lineWidth = 2; }
        graphic.lineWidth = lineWidth;
        graphic.strokeColor = color;
        graphic.ellipse(x, y, rX, rY);
        graphic.stroke();
    };
    Helper.prototype.FillSquare = function (graphic, x, y, width, color) {
        if (color === void 0) { color = cc.Color.RED; }
        this.FillRect(graphic, x, y, width, width, color);
    };
    Helper.prototype.FillRect = function (graphic, x, y, width, height, color) {
        if (color === void 0) { color = cc.Color.RED; }
        graphic.fillColor = color;
        this.DrawRect(graphic, x, y, width, height, color, 0);
        graphic.fill();
    };
    Helper.prototype.FillArc = function (graphic, x, y, r, startAngle, endAngle, offsetAngle, anticlockwise, color) {
        if (startAngle === void 0) { startAngle = 0; }
        if (endAngle === void 0) { endAngle = Math.PI * 2; }
        if (offsetAngle === void 0) { offsetAngle = 0; }
        if (anticlockwise === void 0) { anticlockwise = true; }
        if (color === void 0) { color = cc.Color.RED; }
        graphic.fillColor = color;
        this.DrawArc(graphic, x, y, r, startAngle, endAngle, offsetAngle, anticlockwise, undefined, 0, true);
        graphic.fill();
    };
    Helper.prototype.FillCircle = function (graphic, x, y, r, color) {
        if (color === void 0) { color = cc.Color.RED; }
        this.FillEllipse(graphic, x, y, r, r, color);
    };
    Helper.prototype.FillEllipse = function (graphic, x, y, rX, rY, color) {
        if (color === void 0) { color = cc.Color.RED; }
        graphic.fillColor = color;
        this.DrawEllipse(graphic, x, y, rX, rY, color, 0);
        graphic.fill();
    };
    Helper.prototype.getControllerURL = function () {
        var url = window.controllerURL;
        if (!url || url == "") {
            return;
        }
        return "" + url + PeerManager_1.default.Instance.sip;
    };
    return Helper;
}()))();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcdXRpbHNcXEhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQStDOztBQUUvQyw0REFBdUQ7QUFFdkQsa0JBQWUsSUFBSTtJQUFDO0lBbVVwQixDQUFDO0lBbFVDLHFCQUFJLEdBQUosVUFBSyxHQUFHLEVBQUUsR0FBRztRQUNYLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUMzQyxDQUFDO0lBRUQsd0JBQU8sR0FBUCxVQUFRLEdBQUcsRUFBRSxHQUFHO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELDZCQUFZLEdBQVo7UUFBYSxjQUFPO2FBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztZQUFQLHlCQUFPOztRQUNsQixPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELDBCQUFTLEdBQVQsVUFBVSxHQUFHO1FBQ1gsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCw2QkFBWSxHQUFaLFVBQWEsR0FBRztRQUNkLElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMs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QUksQ0FDTCxDQUFDO1FBQ0YsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCwyQkFBVSxHQUFWLFVBQVcsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQW9CO1FBQXBCLHNCQUFBLEVBQUEsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUc7UUFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCw0QkFBVyxHQUFYLFVBQVksT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFvQjtRQUFwQixzQkFBQSxFQUFBLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHO1FBQ3JELE9BQU8sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEQsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxpQ0FBZ0IsR0FBaEI7UUFDRSxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQy9CLElBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLEVBQUUsRUFBRTtZQUNwQixPQUFPO1NBQ1I7UUFDRCxPQUFPLEtBQUcsR0FBRyxHQUFHLHFCQUFXLENBQUMsUUFBUSxDQUFDLEdBQUssQ0FBQztJQUM3QyxDQUFDO0lBQ0gsYUFBQztBQUFELENBblVvQixBQW1VbkIsSUFBQyxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgR2FtZURlZmluZSBmcm9tIFwiLi4vZ2FtZS9HYW1lRGVmaW5lXCI7XHJcblxyXG5pbXBvcnQgUGVlck1hbmFnZXIgZnJvbSBcIi4uL1BlZXJDb21wb25lbnQvUGVlck1hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyAoY2xhc3MgSGVscGVyIHtcclxuICBSYW5kKG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xyXG4gIH1cclxuICBcclxuICBSYW5kSW50KG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxuICB9XHJcblxyXG4gIFJhbmRBcmd1bWVudCguLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gYXJndW1lbnRzW3RoaXMuUmFuZEludCgwLCBhcmd1bWVudHMubGVuZ3RoIC0gMSldO1xyXG4gIH1cclxuXHJcbiAgUmFuZEFycmF5KGFycikge1xyXG4gICAgcmV0dXJuIGFyclt0aGlzLlJhbmRJbnQoMCwgYXJyLmxlbmd0aCAtIDEpXTtcclxuICB9XHJcblxyXG4gIFJhbmRUeXBlRW51bShvYmope1xyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XHJcbiAgICByZXR1cm4gdGhpcy5SYW5kSW50KDAsIGtleXMubGVuZ3RoIC8gMiAtIDEpO1xyXG4gIH1cclxuXHJcbiAgR2V0S2V5KG9iaiwgaW5kZXgpIHtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopW2luZGV4XTtcclxuICB9XHJcblxyXG4gIEdldEtleUVudW0ob2JqLCBpbmRleCkge1xyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XHJcbiAgICByZXR1cm4ga2V5c1tpbmRleCArIGtleXMubGVuZ3RoIC8gMl07XHJcbiAgfVxyXG5cclxuICBHZXRJbmRleEVudW0ob2JqLCBuYW1lKSB7XHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcclxuICAgIGZvciAobGV0IGkgPSBrZXlzLmxlbmd0aCAvIDI7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmKGtleXNbaV0gPT0gbmFtZSl7XHJcbiAgICAgICAgcmV0dXJuIGkgLSBrZXlzLmxlbmd0aCAvIDI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIC0xO1xyXG4gIH1cclxuICBDb3B5VG9DbGlwYm9hcmQoc3RyKSB7XHJcblx0XHRjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcblx0XHR2YXIgaXNJT1MgPSBuYXZpZ2F0b3IudXNlckFnZW50LnNlYXJjaCgvKGlQYWR8aVBob25lfGlwaG9uZXxpUG9kKS8pICE9IC0xXHJcblx0XHRlbC52YWx1ZSA9IHN0cjtcclxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xyXG5cclxuXHRcdGlmIChpc0lPUykge1xyXG5cdFx0XHRlbC5jb250ZW50RWRpdGFibGUgPSB0cnVlO1xyXG5cdFx0XHRlbC5yZWFkT25seSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0dmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuXHRcdFx0cmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKGVsKTtcclxuXHRcdFx0dmFyIHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuXHRcdFx0c2VsLnJlbW92ZUFsbFJhbmdlcygpO1xyXG5cdFx0XHRzZWwuYWRkUmFuZ2UocmFuZ2UpO1xyXG5cdFx0XHRlbC5zZXRTZWxlY3Rpb25SYW5nZSgwLCA5OTk5OTkpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGVsLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAnJyk7XHJcblx0XHRcdGVsLnNlbGVjdCgpO1xyXG5cdFx0fVxyXG5cdFx0ZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcclxuXHRcdGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWwpO1xyXG5cdH1cclxuXHJcbiAgTm9ybWFsaXplZCh4MSwgeTEsIHgyLCB5Mikge1xyXG4gICAgY29uc3QgZFggPSB4MSAtIHgyO1xyXG4gICAgY29uc3QgZFkgPSB5MSAtIHkyO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gTWF0aC5zcXJ0KGRYICogZFggKyBkWSAqIGRZKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IGNjLlZlYzIoZFggLyBsZW5ndGgsIGRZIC8gbGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIE1vdmVUb1RhcmdldChjdXJyZW50LCB0YXJnZXQsIHNwZWVkKSB7XHJcbiAgICBzcGVlZCA9IE1hdGguYWJzKHNwZWVkKTtcclxuXHJcbiAgICBpZiAoY3VycmVudCA8IHRhcmdldCkge1xyXG4gICAgICByZXR1cm4gTWF0aC5taW4odGFyZ2V0LCBjdXJyZW50ICsgc3BlZWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIE1hdGgubWF4KHRhcmdldCwgY3VycmVudCAtIHNwZWVkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIENvbGxpc2lvbjJSZWN0KHJlY3QxLCByZWN0Mikge1xyXG4gICAgaWYgKFxyXG4gICAgICByZWN0MS54ICsgcmVjdDEud2lkdGggPCByZWN0Mi54IHx8XHJcbiAgICAgIHJlY3QxLnkgKyByZWN0MS5oZWlnaHQgPCByZWN0Mi55IHx8XHJcbiAgICAgIHJlY3QyLnggKyByZWN0Mi53aWR0aCA8IHJlY3QxLnggfHxcclxuICAgICAgcmVjdDIueSArIHJlY3QyLmhlaWdodCA8IHJlY3QxLnlcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBDb2xsaXNpb25Qb2ludFJlY3QoeCwgeSwgcmVjdCkge1xyXG4gICAgaWYgKFxyXG4gICAgICB4IDwgcmVjdC54IHx8XHJcbiAgICAgIHkgPCByZWN0LnkgfHxcclxuICAgICAgeCA+IHJlY3QueCArIHJlY3Qud2lkdGggfHxcclxuICAgICAgeSA+IHJlY3QueSArIHJlY3QuaGVpZ2h0XHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgRGlzdGFuY2UoeDEsIHkxLCB4MiwgeTIpIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQoKHgxIC0geDIpICogKHgxIC0geDIpICsgKHkxIC0geTIpICogKHkxIC0geTIpKTtcclxuICB9XHJcblxyXG4gIENvbnN0cmFpbih2YWx1ZSwgbWluLCBtYXgpIHtcclxuICAgIHZhbHVlID0gTWF0aC5tYXgobWluLCB2YWx1ZSk7XHJcbiAgICB2YWx1ZSA9IE1hdGgubWluKG1heCwgdmFsdWUpO1xyXG5cclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIFRvUmFkaWFuKGFuZ2xlKSB7XHJcbiAgICByZXR1cm4gKGFuZ2xlIC8gMTgwKSAqIE1hdGguUEk7XHJcbiAgfVxyXG5cclxuICBUb0FuZ2xlKHJhZGlhbikge1xyXG4gICAgcmV0dXJuIChyYWRpYW4gLyBNYXRoLlBJKSAqIDE4MDtcclxuICB9XHJcblxyXG4gIFRpbWVvdXRQcm9taXNlKHRpbWUsIHByb21pc2UpIHtcclxuICAgIGNvbnN0IHRpbWVvdXQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHJlamVjdChcIlRpbWVkIG91dC5cIik7XHJcbiAgICAgIH0sIHRpbWUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIFByb21pc2UucmFjZShbcHJvbWlzZSwgdGltZW91dF0pO1xyXG4gIH1cclxuXHJcbiAgSHR0cFJlcXVlc3QobWV0aG9kLCB1cmwsIGJvZHksIHJlc3BvbnNlVHlwZSwgaGVhZGVycyA9IG51bGwsIHJlcXVlc3RQYXJhbXMgPSB7fSkge1xyXG4gICAgY29uc3QgbG9nRXZlbnQgPSAod2luZG93IGFzIGFueSkubG9nRXZlbnQgfHwgY29uc29sZS5sb2c7XHJcbiAgICBjb25zdCBzdGFydCA9IERhdGUubm93KCk7XHJcbiAgICBjb25zdCBhcGlOYW1lID0gdXJsLnNwbGl0KCcvJykucG9wKCkuc3BsaXQoJz8nKS5zaGlmdCgpO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICB4aHIub3BlbihtZXRob2QsIHVybCwgdHJ1ZSk7XHJcblxyXG4gICAgICBpZiAobWV0aG9kID09IFwiUE9TVFwiKSB7XHJcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGxldCBpdGVtIG9mIGhlYWRlcnMpIHtcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihpdGVtLmtleSwgaXRlbS52YWx1ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChyZXNwb25zZVR5cGUpIHtcclxuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gcmVzcG9uc2VUeXBlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyB4aHIudGltZW91dCA9IEdhbWVEZWZpbmUuVElNRV9BUElfVElNRU9VVDtcclxuICAgICAgeGhyLnRpbWVvdXQgPSAxMDAwMDtcclxuXHJcbiAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQpIHtcclxuICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICByZXNvbHZlKHhoci5yZXNwb25zZSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZWplY3QoeGhyLnJlc3BvbnNlKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBsb2dFdmVudChhcGlOYW1lLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZCxcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICBib2R5LFxyXG4gICAgICAgICAgICByZXF1ZXN0UGFyYW1zLFxyXG4gICAgICAgICAgICByZXBvbnNlU3RhdHVzOiB4aHIuc3RhdHVzLFxyXG4gICAgICAgICAgICByZXNwb25zZTogeGhyLnJlc3BvbnNlLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogRGF0ZS5ub3coKSAtIHN0YXJ0XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgbG9nRXZlbnQoJ2FwaVJlcXVlc3RFcnJvcicsIHtcclxuICAgICAgICAgIGFwaU5hbWUsXHJcbiAgICAgICAgICBtZXRob2QsXHJcbiAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICBib2R5LFxyXG4gICAgICAgICAgcmVxdWVzdFBhcmFtcyxcclxuICAgICAgICAgIGR1cmF0aW9uOiBEYXRlLm5vdygpIC0gc3RhcnRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmVqZWN0KCdlcnJvcicpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB4aHIub250aW1lb3V0ID0gKGUpID0+IHtcclxuICAgICAgICByZWplY3QoJ3RpbWVkIG91dCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB4aHIuc2VuZChib2R5KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgRHJhd0xpbmUoZ3JhcGhpYywgeDEsIHkxLCB4MiwgeTIsIGNvbG9yID0gY2MuQ29sb3IuUkVELCBsaW5lV2lkdGggPSAyKSB7XHJcbiAgICBncmFwaGljLmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcclxuICAgIGdyYXBoaWMuc3Ryb2tlQ29sb3IgPSBjb2xvcjtcclxuICAgIGdyYXBoaWMubW92ZVRvKHgxLCB5MSk7XHJcbiAgICBncmFwaGljLmxpbmVUbyh4MiwgeTIpO1xyXG4gICAgZ3JhcGhpYy5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIERyYXdTcXVhcmUoZ3JhcGhpYywgeCwgeSwgd2lkdGgsIGNvbG9yID0gY2MuQ29sb3IuUkVELCBsaW5lV2lkdGggPSAyKSB7XHJcbiAgICB0aGlzLkRyYXdSZWN0KGdyYXBoaWMsIHgsIHksIHdpZHRoLCB3aWR0aCwgY29sb3IsIGxpbmVXaWR0aCk7XHJcbiAgfVxyXG5cclxuICBEcmF3UmVjdChncmFwaGljLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvciA9IGNjLkNvbG9yLlJFRCwgbGluZVdpZHRoID0gMikge1xyXG4gICAgZ3JhcGhpYy5saW5lV2lkdGggPSBsaW5lV2lkdGg7XHJcbiAgICBncmFwaGljLnN0cm9rZUNvbG9yID0gY29sb3I7XHJcbiAgICB0eXBlb2YgeCA9PT0gXCJudW1iZXJcIlxyXG4gICAgICA/IGdyYXBoaWMucmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KVxyXG4gICAgICA6IGdyYXBoaWMucmVjdCh4LngsIHgueSwgeC53aWR0aCwgeC5oZWlnaHQpO1xyXG4gICAgZ3JhcGhpYy5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIERyYXdBcmMoXHJcbiAgICBncmFwaGljLFxyXG4gICAgeCxcclxuICAgIHksXHJcbiAgICByLFxyXG4gICAgc3RhcnRBbmdsZSA9IDAsXHJcbiAgICBlbmRBbmdsZSA9IE1hdGguUEkgKiAyLFxyXG4gICAgb2Zmc2V0QW5nbGUgPSAwLFxyXG4gICAgYW50aWNsb2Nrd2lzZSA9IHRydWUsXHJcbiAgICBjb2xvciA9IGNjLkNvbG9yLlJFRCxcclxuICAgIGxpbmVXaWR0aCA9IDIsXHJcbiAgICB3aXRoTGluZSA9IGZhbHNlXHJcbiAgKSB7XHJcbiAgICBjb25zdCBUV09fUEkgPSBNYXRoLlBJICogMjtcclxuICAgIGNvbnN0IGRyYXdPZmZzZXQgPSBNYXRoLlBJICogMS41OyAvLyBzdGFydCBhbmdsZSBhdCAwIG8nY2xvY2tcclxuICAgIHN0YXJ0QW5nbGUgKz0gZHJhd09mZnNldCArIG9mZnNldEFuZ2xlO1xyXG4gICAgZW5kQW5nbGUgKz0gZHJhd09mZnNldCArIG9mZnNldEFuZ2xlO1xyXG4gICAgc3RhcnRBbmdsZSA9IFRXT19QSSAtIHN0YXJ0QW5nbGU7XHJcbiAgICBlbmRBbmdsZSA9IFRXT19QSSAtIGVuZEFuZ2xlO1xyXG5cclxuICAgIHN0YXJ0QW5nbGUgPSBzdGFydEFuZ2xlID4gVFdPX1BJID8gc3RhcnRBbmdsZSAlIFRXT19QSSA6IHN0YXJ0QW5nbGU7XHJcbiAgICBlbmRBbmdsZSA9IGVuZEFuZ2xlID4gVFdPX1BJID8gZW5kQW5nbGUgJSBUV09fUEkgOiBlbmRBbmdsZTtcclxuXHJcbiAgICBncmFwaGljLmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcclxuICAgIGdyYXBoaWMuc3Ryb2tlQ29sb3IgPSBjb2xvcjtcclxuICAgIGdyYXBoaWMuYXJjKHgsIHksIHIsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBhbnRpY2xvY2t3aXNlKTtcclxuICAgIGlmICh3aXRoTGluZSkge1xyXG4gICAgICBncmFwaGljLmxpbmVUbyh4LCB5KTtcclxuICAgICAgZ3JhcGhpYy5jbG9zZSgpO1xyXG4gICAgfVxyXG4gICAgZ3JhcGhpYy5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIERyYXdDaXJjbGUoZ3JhcGhpYywgeCwgeSwgciwgY29sb3IgPSBjYy5Db2xvci5SRUQsIGxpbmVXaWR0aCA9IDIpIHtcclxuICAgIHRoaXMuRHJhd0VsbGlwc2UoZ3JhcGhpYywgeCwgeSwgciwgciwgY29sb3IsIGxpbmVXaWR0aCk7XHJcbiAgfVxyXG5cclxuICBEcmF3RWxsaXBzZShncmFwaGljLCB4LCB5LCByWCwgclksIGNvbG9yID0gY2MuQ29sb3IuUkVELCBsaW5lV2lkdGggPSAyKSB7XHJcbiAgICBncmFwaGljLmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcclxuICAgIGdyYXBoaWMuc3Ryb2tlQ29sb3IgPSBjb2xvcjtcclxuICAgIGdyYXBoaWMuZWxsaXBzZSh4LCB5LCByWCwgclkpO1xyXG4gICAgZ3JhcGhpYy5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIEZpbGxTcXVhcmUoZ3JhcGhpYywgeCwgeSwgd2lkdGgsIGNvbG9yID0gY2MuQ29sb3IuUkVEKSB7XHJcbiAgICB0aGlzLkZpbGxSZWN0KGdyYXBoaWMsIHgsIHksIHdpZHRoLCB3aWR0aCwgY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgRmlsbFJlY3QoZ3JhcGhpYywgeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IgPSBjYy5Db2xvci5SRUQpIHtcclxuICAgIGdyYXBoaWMuZmlsbENvbG9yID0gY29sb3I7XHJcbiAgICB0aGlzLkRyYXdSZWN0KGdyYXBoaWMsIHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yLCAwKTtcclxuICAgIGdyYXBoaWMuZmlsbCgpO1xyXG4gIH1cclxuXHJcbiAgRmlsbEFyYyhcclxuICAgIGdyYXBoaWMsXHJcbiAgICB4LFxyXG4gICAgeSxcclxuICAgIHIsXHJcbiAgICBzdGFydEFuZ2xlID0gMCxcclxuICAgIGVuZEFuZ2xlID0gTWF0aC5QSSAqIDIsXHJcbiAgICBvZmZzZXRBbmdsZSA9IDAsXHJcbiAgICBhbnRpY2xvY2t3aXNlID0gdHJ1ZSxcclxuICAgIGNvbG9yID0gY2MuQ29sb3IuUkVEXHJcbiAgKSB7XHJcbiAgICBncmFwaGljLmZpbGxDb2xvciA9IGNvbG9yO1xyXG4gICAgdGhpcy5EcmF3QXJjKFxyXG4gICAgICBncmFwaGljLFxyXG4gICAgICB4LFxyXG4gICAgICB5LFxyXG4gICAgICByLFxyXG4gICAgICBzdGFydEFuZ2xlLFxyXG4gICAgICBlbmRBbmdsZSxcclxuICAgICAgb2Zmc2V0QW5nbGUsXHJcbiAgICAgIGFudGljbG9ja3dpc2UsXHJcbiAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgMCxcclxuICAgICAgdHJ1ZVxyXG4gICAgKTtcclxuICAgIGdyYXBoaWMuZmlsbCgpO1xyXG4gIH1cclxuXHJcbiAgRmlsbENpcmNsZShncmFwaGljLCB4LCB5LCByLCBjb2xvciA9IGNjLkNvbG9yLlJFRCkge1xyXG4gICAgdGhpcy5GaWxsRWxsaXBzZShncmFwaGljLCB4LCB5LCByLCByLCBjb2xvcik7XHJcbiAgfVxyXG5cclxuICBGaWxsRWxsaXBzZShncmFwaGljLCB4LCB5LCByWCwgclksIGNvbG9yID0gY2MuQ29sb3IuUkVEKSB7XHJcbiAgICBncmFwaGljLmZpbGxDb2xvciA9IGNvbG9yO1xyXG4gICAgdGhpcy5EcmF3RWxsaXBzZShncmFwaGljLCB4LCB5LCByWCwgclksIGNvbG9yLCAwKTtcclxuICAgIGdyYXBoaWMuZmlsbCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udHJvbGxlclVSTCgpIHtcclxuICAgIGxldCB1cmwgPSB3aW5kb3cuY29udHJvbGxlclVSTDtcclxuICAgIGlmKCF1cmwgfHwgdXJsID09IFwiXCIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGAke3VybH0ke1BlZXJNYW5hZ2VyLkluc3RhbmNlLnNpcH1gO1xyXG4gIH1cclxufSkoKTtcclxuIl19