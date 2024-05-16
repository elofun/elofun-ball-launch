"use strict";
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