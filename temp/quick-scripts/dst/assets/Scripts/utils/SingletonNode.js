
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/utils/SingletonNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '005153jN7pCg4dYKrYXehlc', 'SingletonNode');
// Scripts/utils/SingletonNode.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
function SingletonNode() {
    var Singleton = /** @class */ (function (_super) {
        __extends(Singleton, _super);
        function Singleton() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(Singleton, "Instance", {
            get: function () {
                return this.instance;
            },
            enumerable: false,
            configurable: true
        });
        Singleton.prototype.onLoad = function () {
            if (!Singleton.instance) {
                Singleton.instance = this;
            }
            else {
                throw Singleton.instance.constructor['name'] + " instance already exist";
            }
        };
        return Singleton;
    }(cc.Component));
    return Singleton;
}
exports.default = SingletonNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcdXRpbHNcXFNpbmdsZXRvbk5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsU0FBd0IsYUFBYTtJQUNqQztRQUF3Qiw2QkFBWTtRQUFwQzs7UUFtQkEsQ0FBQztRQWhCRyxzQkFBVyxxQkFBUTtpQkFBbkI7Z0JBRUksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3pCLENBQUM7OztXQUFBO1FBRUQsMEJBQU0sR0FBTjtZQUVJLElBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUN0QjtnQkFDSSxTQUFTLENBQUMsUUFBUSxHQUFHLElBQVMsQ0FBQzthQUNsQztpQkFFRDtnQkFDSSxNQUFTLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyw0QkFBeUIsQ0FBQzthQUM1RTtRQUNMLENBQUM7UUFDTCxnQkFBQztJQUFELENBbkJBLEFBbUJDLENBbkJ1QixFQUFFLENBQUMsU0FBUyxHQW1CbkM7SUFFRCxPQUFPLFNBQVMsQ0FBQztBQUNyQixDQUFDO0FBdkJELGdDQXVCQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW5nbGV0b25Ob2RlPFQ+KCkge1xyXG4gICAgY2xhc3MgU2luZ2xldG9uIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogVDtcclxuXHJcbiAgICAgICAgc3RhdGljIGdldCBJbnN0YW5jZSgpOiBUXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9uTG9hZCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZighU2luZ2xldG9uLmluc3RhbmNlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBTaW5nbGV0b24uaW5zdGFuY2UgPSB0aGlzIGFzIFQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBgJHtTaW5nbGV0b24uaW5zdGFuY2UuY29uc3RydWN0b3JbJ25hbWUnXX0gaW5zdGFuY2UgYWxyZWFkeSBleGlzdGA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBTaW5nbGV0b247XHJcbn0iXX0=