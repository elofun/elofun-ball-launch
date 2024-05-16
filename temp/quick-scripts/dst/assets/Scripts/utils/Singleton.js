
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/utils/Singleton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd05d9m5rI9IA7eX1WXQ8VpM', 'Singleton');
// Scripts/utils/Singleton.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Singleton() {
    var Singleton = /** @class */ (function () {
        function Singleton() {
            if (!Singleton.instance) {
                Singleton.instance = this;
            }
            else {
                throw Singleton.instance.constructor['name'] + " instance already exist";
            }
        }
        Object.defineProperty(Singleton, "Instance", {
            get: function () {
                return this.instance;
            },
            enumerable: false,
            configurable: true
        });
        return Singleton;
    }());
    return Singleton;
}
exports.default = Singleton;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcdXRpbHNcXFNpbmdsZXRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLFNBQXdCLFNBQVM7SUFDN0I7UUFRSTtZQUVJLElBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUN0QjtnQkFDSSxTQUFTLENBQUMsUUFBUSxHQUFHLElBQVMsQ0FBQzthQUNsQztpQkFFRDtnQkFDSSxNQUFTLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyw0QkFBeUIsQ0FBQzthQUM1RTtRQUNMLENBQUM7UUFmRCxzQkFBVyxxQkFBUTtpQkFBbkI7Z0JBRUksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3pCLENBQUM7OztXQUFBO1FBYUwsZ0JBQUM7SUFBRCxDQW5CQSxBQW1CQyxJQUFBO0lBRUQsT0FBTyxTQUFTLENBQUM7QUFDckIsQ0FBQztBQXZCRCw0QkF1QkMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2luZ2xldG9uPFQ+KCkge1xyXG4gICAgY2xhc3MgU2luZ2xldG9uIHtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogVDtcclxuXHJcbiAgICAgICAgc3RhdGljIGdldCBJbnN0YW5jZSgpOiBUXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCFTaW5nbGV0b24uaW5zdGFuY2UpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFNpbmdsZXRvbi5pbnN0YW5jZSA9IHRoaXMgYXMgVDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRocm93IGAke1NpbmdsZXRvbi5pbnN0YW5jZS5jb25zdHJ1Y3RvclsnbmFtZSddfSBpbnN0YW5jZSBhbHJlYWR5IGV4aXN0YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIFNpbmdsZXRvbjtcclxufSJdfQ==