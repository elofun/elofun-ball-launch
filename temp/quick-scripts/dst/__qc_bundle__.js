
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Scripts/AudioController');
require('./assets/Scripts/Loader');
require('./assets/Scripts/PeerComponent/PeerAction');
require('./assets/Scripts/PeerComponent/PeerClientManager');
require('./assets/Scripts/PeerComponent/PeerDefine');
require('./assets/Scripts/PeerComponent/PeerManager');
require('./assets/Scripts/PeerComponent/QRCodeGen');
require('./assets/Scripts/Popups/Popup');
require('./assets/Scripts/Popups/PopupManager');
require('./assets/Scripts/collisionReset');
require('./assets/Scripts/common/Events');
require('./assets/Scripts/common/Global');
require('./assets/Scripts/common/LoadingCover');
require('./assets/Scripts/common/LoadingIcon');
require('./assets/Scripts/common/Localization');
require('./assets/Scripts/common/SoundMgr');
require('./assets/Scripts/common/Spinner');
require('./assets/Scripts/cuboid');
require('./assets/Scripts/diamond');
require('./assets/Scripts/game/FrameMgr');
require('./assets/Scripts/game/GameDefine');
require('./assets/Scripts/game/GameManager');
require('./assets/Scripts/gameplay/Ball');
require('./assets/Scripts/gameplay/Ball/BallPhysics');
require('./assets/Scripts/gameplay/Ball/Trail');
require('./assets/Scripts/gameplay/FadeWall');
require('./assets/Scripts/gameplay/GamePlayManager');
require('./assets/Scripts/gameplay/LevelManager');
require('./assets/Scripts/gameplay/Level/GameplayLevelDesgin');
require('./assets/Scripts/gameplay/Particle/ParticleManager');
require('./assets/Scripts/gameplay/Sound/Sound');
require('./assets/Scripts/gameplay/Spawn');
require('./assets/Scripts/gameplay/TimeNeedTouch');
require('./assets/Scripts/gameplay/TrajectoryLine/TrajectoryLine');
require('./assets/Scripts/gameplay/Wall/ObstaclesWallSpawner');
require('./assets/Scripts/gameplay/Wall/WinDetect');
require('./assets/Scripts/playGround');
require('./assets/Scripts/playerBall');
require('./assets/Scripts/playerBallHitBox');
require('./assets/Scripts/stage/Stage');
require('./assets/Scripts/stage/StageGameEnd');
require('./assets/Scripts/stage/StageInGame');
require('./assets/Scripts/stage/StageLobby');
require('./assets/Scripts/stage/StageMgr');
require('./assets/Scripts/stage/StageQRscan');
require('./assets/Scripts/stage/StageStartGame');
require('./assets/Scripts/stage/StageTestGame');
require('./assets/Scripts/ui/UIMgr');
require('./assets/Scripts/utils/GameObject');
require('./assets/Scripts/utils/Helper');
require('./assets/Scripts/utils/LocalizedFrame');
require('./assets/Scripts/utils/LocalizedText');
require('./assets/Scripts/utils/ObjectMgr');
require('./assets/Scripts/utils/Singleton');
require('./assets/Scripts/utils/SingletonNode');
require('./assets/Scripts/utils/Timer');
require('./assets/levelDesign');
require('./assets/strings');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/levelDesign.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f4cdaX2XKlHqKKlKcebjlUE', 'levelDesign');
// levelDesign.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _default = [{
  startIndex: 0,
  directionChangeRate: 0,
  diamondSpawnRate: 0.1,
  doubleWay2Rate: 0,
  doubleWay1Rate: 0
}, {
  startIndex: 50,
  directionChangeRate: 0.1,
  diamondSpawnRate: 0.1,
  doubleWay2Rate: 0,
  doubleWay1Rate: 0
}, {
  startIndex: 100,
  directionChangeRate: 0.2,
  diamondSpawnRate: 0.1,
  doubleWay2Rate: 0.1,
  doubleWay1Rate: 0
}, {
  startIndex: 200,
  directionChangeRate: 0.7,
  diamondSpawnRate: 0.1,
  doubleWay2Rate: 0,
  doubleWay1Rate: 0.1
}, {
  startIndex: 240,
  directionChangeRate: 0.25,
  diamondSpawnRate: 0.1,
  doubleWay2Rate: 0.1,
  doubleWay1Rate: 0.1
}, {
  startIndex: 300,
  directionChangeRate: 1,
  diamondSpawnRate: 0.1,
  doubleWay2Rate: 0,
  doubleWay1Rate: 0
}, {
  startIndex: 320,
  directionChangeRate: 0.3,
  diamondSpawnRate: 0.1,
  doubleWay2Rate: 0,
  doubleWay1Rate: 0
}, {
  startIndex: 400,
  directionChangeRate: 0.6,
  diamondSpawnRate: 0.1,
  doubleWay2Rate: 0.1,
  doubleWay1Rate: 0
}, {
  startIndex: 450,
  directionChangeRate: 0.4,
  diamondSpawnRate: 0.1,
  doubleWay2Rate: 0.1,
  doubleWay1Rate: 0
}, {
  startIndex: 500,
  directionChangeRate: 0.8,
  diamondSpawnRate: 0.1,
  doubleWay2Rate: 0,
  doubleWay1Rate: 0.1
}, {
  startIndex: 530,
  directionChangeRate: 0.5,
  diamondSpawnRate: 0.1,
  doubleWay2Rate: 0,
  doubleWay1Rate: 0.1
}, {
  startIndex: 600,
  directionChangeRate: 1,
  diamondSpawnRate: 0.1,
  doubleWay2Rate: 0,
  doubleWay1Rate: 0
}, {
  startIndex: 620,
  directionChangeRate: 0.65,
  diamondSpawnRate: 0.1,
  doubleWay2Rate: 0,
  doubleWay1Rate: 0
}, {
  startIndex: 700,
  directionChangeRate: 0.9,
  diamondSpawnRate: 0.1,
  doubleWay2Rate: 0.1,
  doubleWay1Rate: 0.1
}, {
  startIndex: 750,
  directionChangeRate: 0.5,
  diamondSpawnRate: 0.1,
  doubleWay2Rate: 0.1,
  doubleWay1Rate: 0.1
}];
exports["default"] = _default;
module.exports = exports["default"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbGV2ZWxEZXNpZ24uanMiXSwibmFtZXMiOlsic3RhcnRJbmRleCIsImRpcmVjdGlvbkNoYW5nZVJhdGUiLCJkaWFtb25kU3Bhd25SYXRlIiwiZG91YmxlV2F5MlJhdGUiLCJkb3VibGVXYXkxUmF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUFlLENBQ2I7QUFDRUEsRUFBQUEsVUFBVSxFQUFFLENBRGQ7QUFFRUMsRUFBQUEsbUJBQW1CLEVBQUUsQ0FGdkI7QUFHRUMsRUFBQUEsZ0JBQWdCLEVBQUUsR0FIcEI7QUFJRUMsRUFBQUEsY0FBYyxFQUFFLENBSmxCO0FBS0VDLEVBQUFBLGNBQWMsRUFBRTtBQUxsQixDQURhLEVBUWI7QUFDRUosRUFBQUEsVUFBVSxFQUFFLEVBRGQ7QUFFRUMsRUFBQUEsbUJBQW1CLEVBQUUsR0FGdkI7QUFHRUMsRUFBQUEsZ0JBQWdCLEVBQUUsR0FIcEI7QUFJRUMsRUFBQUEsY0FBYyxFQUFFLENBSmxCO0FBS0VDLEVBQUFBLGNBQWMsRUFBRTtBQUxsQixDQVJhLEVBZWI7QUFDRUosRUFBQUEsVUFBVSxFQUFFLEdBRGQ7QUFFRUMsRUFBQUEsbUJBQW1CLEVBQUUsR0FGdkI7QUFHRUMsRUFBQUEsZ0JBQWdCLEVBQUUsR0FIcEI7QUFJRUMsRUFBQUEsY0FBYyxFQUFFLEdBSmxCO0FBS0VDLEVBQUFBLGNBQWMsRUFBRTtBQUxsQixDQWZhLEVBc0JiO0FBQ0VKLEVBQUFBLFVBQVUsRUFBRSxHQURkO0FBRUVDLEVBQUFBLG1CQUFtQixFQUFFLEdBRnZCO0FBR0VDLEVBQUFBLGdCQUFnQixFQUFFLEdBSHBCO0FBSUVDLEVBQUFBLGNBQWMsRUFBRSxDQUpsQjtBQUtFQyxFQUFBQSxjQUFjLEVBQUU7QUFMbEIsQ0F0QmEsRUE2QmI7QUFDRUosRUFBQUEsVUFBVSxFQUFFLEdBRGQ7QUFFRUMsRUFBQUEsbUJBQW1CLEVBQUUsSUFGdkI7QUFHRUMsRUFBQUEsZ0JBQWdCLEVBQUUsR0FIcEI7QUFJRUMsRUFBQUEsY0FBYyxFQUFFLEdBSmxCO0FBS0VDLEVBQUFBLGNBQWMsRUFBRTtBQUxsQixDQTdCYSxFQW9DYjtBQUNFSixFQUFBQSxVQUFVLEVBQUUsR0FEZDtBQUVFQyxFQUFBQSxtQkFBbUIsRUFBRSxDQUZ2QjtBQUdFQyxFQUFBQSxnQkFBZ0IsRUFBRSxHQUhwQjtBQUlFQyxFQUFBQSxjQUFjLEVBQUUsQ0FKbEI7QUFLRUMsRUFBQUEsY0FBYyxFQUFFO0FBTGxCLENBcENhLEVBMkNiO0FBQ0VKLEVBQUFBLFVBQVUsRUFBRSxHQURkO0FBRUVDLEVBQUFBLG1CQUFtQixFQUFFLEdBRnZCO0FBR0VDLEVBQUFBLGdCQUFnQixFQUFFLEdBSHBCO0FBSUVDLEVBQUFBLGNBQWMsRUFBRSxDQUpsQjtBQUtFQyxFQUFBQSxjQUFjLEVBQUU7QUFMbEIsQ0EzQ2EsRUFrRGI7QUFDRUosRUFBQUEsVUFBVSxFQUFFLEdBRGQ7QUFFRUMsRUFBQUEsbUJBQW1CLEVBQUUsR0FGdkI7QUFHRUMsRUFBQUEsZ0JBQWdCLEVBQUUsR0FIcEI7QUFJRUMsRUFBQUEsY0FBYyxFQUFFLEdBSmxCO0FBS0VDLEVBQUFBLGNBQWMsRUFBRTtBQUxsQixDQWxEYSxFQXlEYjtBQUNFSixFQUFBQSxVQUFVLEVBQUUsR0FEZDtBQUVFQyxFQUFBQSxtQkFBbUIsRUFBRSxHQUZ2QjtBQUdFQyxFQUFBQSxnQkFBZ0IsRUFBRSxHQUhwQjtBQUlFQyxFQUFBQSxjQUFjLEVBQUUsR0FKbEI7QUFLRUMsRUFBQUEsY0FBYyxFQUFFO0FBTGxCLENBekRhLEVBZ0ViO0FBQ0VKLEVBQUFBLFVBQVUsRUFBRSxHQURkO0FBRUVDLEVBQUFBLG1CQUFtQixFQUFFLEdBRnZCO0FBR0VDLEVBQUFBLGdCQUFnQixFQUFFLEdBSHBCO0FBSUVDLEVBQUFBLGNBQWMsRUFBRSxDQUpsQjtBQUtFQyxFQUFBQSxjQUFjLEVBQUU7QUFMbEIsQ0FoRWEsRUF1RWI7QUFDRUosRUFBQUEsVUFBVSxFQUFFLEdBRGQ7QUFFRUMsRUFBQUEsbUJBQW1CLEVBQUUsR0FGdkI7QUFHRUMsRUFBQUEsZ0JBQWdCLEVBQUUsR0FIcEI7QUFJRUMsRUFBQUEsY0FBYyxFQUFFLENBSmxCO0FBS0VDLEVBQUFBLGNBQWMsRUFBRTtBQUxsQixDQXZFYSxFQThFYjtBQUNFSixFQUFBQSxVQUFVLEVBQUUsR0FEZDtBQUVFQyxFQUFBQSxtQkFBbUIsRUFBRSxDQUZ2QjtBQUdFQyxFQUFBQSxnQkFBZ0IsRUFBRSxHQUhwQjtBQUlFQyxFQUFBQSxjQUFjLEVBQUUsQ0FKbEI7QUFLRUMsRUFBQUEsY0FBYyxFQUFFO0FBTGxCLENBOUVhLEVBcUZiO0FBQ0VKLEVBQUFBLFVBQVUsRUFBRSxHQURkO0FBRUVDLEVBQUFBLG1CQUFtQixFQUFFLElBRnZCO0FBR0VDLEVBQUFBLGdCQUFnQixFQUFFLEdBSHBCO0FBSUVDLEVBQUFBLGNBQWMsRUFBRSxDQUpsQjtBQUtFQyxFQUFBQSxjQUFjLEVBQUU7QUFMbEIsQ0FyRmEsRUE0RmI7QUFDRUosRUFBQUEsVUFBVSxFQUFFLEdBRGQ7QUFFRUMsRUFBQUEsbUJBQW1CLEVBQUUsR0FGdkI7QUFHRUMsRUFBQUEsZ0JBQWdCLEVBQUUsR0FIcEI7QUFJRUMsRUFBQUEsY0FBYyxFQUFFLEdBSmxCO0FBS0VDLEVBQUFBLGNBQWMsRUFBRTtBQUxsQixDQTVGYSxFQW1HYjtBQUNFSixFQUFBQSxVQUFVLEVBQUUsR0FEZDtBQUVFQyxFQUFBQSxtQkFBbUIsRUFBRSxHQUZ2QjtBQUdFQyxFQUFBQSxnQkFBZ0IsRUFBRSxHQUhwQjtBQUlFQyxFQUFBQSxjQUFjLEVBQUUsR0FKbEI7QUFLRUMsRUFBQUEsY0FBYyxFQUFFO0FBTGxCLENBbkdhIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBbXHJcbiAge1xyXG4gICAgc3RhcnRJbmRleDogMCxcclxuICAgIGRpcmVjdGlvbkNoYW5nZVJhdGU6IDAsXHJcbiAgICBkaWFtb25kU3Bhd25SYXRlOiAwLjEsXHJcbiAgICBkb3VibGVXYXkyUmF0ZTogMCxcclxuICAgIGRvdWJsZVdheTFSYXRlOiAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc3RhcnRJbmRleDogNTAsXHJcbiAgICBkaXJlY3Rpb25DaGFuZ2VSYXRlOiAwLjEsXHJcbiAgICBkaWFtb25kU3Bhd25SYXRlOiAwLjEsXHJcbiAgICBkb3VibGVXYXkyUmF0ZTogMCxcclxuICAgIGRvdWJsZVdheTFSYXRlOiAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc3RhcnRJbmRleDogMTAwLFxyXG4gICAgZGlyZWN0aW9uQ2hhbmdlUmF0ZTogMC4yLFxyXG4gICAgZGlhbW9uZFNwYXduUmF0ZTogMC4xLFxyXG4gICAgZG91YmxlV2F5MlJhdGU6IDAuMSxcclxuICAgIGRvdWJsZVdheTFSYXRlOiAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc3RhcnRJbmRleDogMjAwLFxyXG4gICAgZGlyZWN0aW9uQ2hhbmdlUmF0ZTogMC43LFxyXG4gICAgZGlhbW9uZFNwYXduUmF0ZTogMC4xLFxyXG4gICAgZG91YmxlV2F5MlJhdGU6IDAsXHJcbiAgICBkb3VibGVXYXkxUmF0ZTogMC4xLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc3RhcnRJbmRleDogMjQwLFxyXG4gICAgZGlyZWN0aW9uQ2hhbmdlUmF0ZTogMC4yNSxcclxuICAgIGRpYW1vbmRTcGF3blJhdGU6IDAuMSxcclxuICAgIGRvdWJsZVdheTJSYXRlOiAwLjEsXHJcbiAgICBkb3VibGVXYXkxUmF0ZTogMC4xLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc3RhcnRJbmRleDogMzAwLFxyXG4gICAgZGlyZWN0aW9uQ2hhbmdlUmF0ZTogMSxcclxuICAgIGRpYW1vbmRTcGF3blJhdGU6IDAuMSxcclxuICAgIGRvdWJsZVdheTJSYXRlOiAwLFxyXG4gICAgZG91YmxlV2F5MVJhdGU6IDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBzdGFydEluZGV4OiAzMjAsXHJcbiAgICBkaXJlY3Rpb25DaGFuZ2VSYXRlOiAwLjMsXHJcbiAgICBkaWFtb25kU3Bhd25SYXRlOiAwLjEsXHJcbiAgICBkb3VibGVXYXkyUmF0ZTogMCxcclxuICAgIGRvdWJsZVdheTFSYXRlOiAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc3RhcnRJbmRleDogNDAwLFxyXG4gICAgZGlyZWN0aW9uQ2hhbmdlUmF0ZTogMC42LFxyXG4gICAgZGlhbW9uZFNwYXduUmF0ZTogMC4xLFxyXG4gICAgZG91YmxlV2F5MlJhdGU6IDAuMSxcclxuICAgIGRvdWJsZVdheTFSYXRlOiAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc3RhcnRJbmRleDogNDUwLFxyXG4gICAgZGlyZWN0aW9uQ2hhbmdlUmF0ZTogMC40LFxyXG4gICAgZGlhbW9uZFNwYXduUmF0ZTogMC4xLFxyXG4gICAgZG91YmxlV2F5MlJhdGU6IDAuMSxcclxuICAgIGRvdWJsZVdheTFSYXRlOiAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc3RhcnRJbmRleDogNTAwLFxyXG4gICAgZGlyZWN0aW9uQ2hhbmdlUmF0ZTogMC44LFxyXG4gICAgZGlhbW9uZFNwYXduUmF0ZTogMC4xLFxyXG4gICAgZG91YmxlV2F5MlJhdGU6IDAsXHJcbiAgICBkb3VibGVXYXkxUmF0ZTogMC4xLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc3RhcnRJbmRleDogNTMwLFxyXG4gICAgZGlyZWN0aW9uQ2hhbmdlUmF0ZTogMC41LFxyXG4gICAgZGlhbW9uZFNwYXduUmF0ZTogMC4xLFxyXG4gICAgZG91YmxlV2F5MlJhdGU6IDAsXHJcbiAgICBkb3VibGVXYXkxUmF0ZTogMC4xLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc3RhcnRJbmRleDogNjAwLFxyXG4gICAgZGlyZWN0aW9uQ2hhbmdlUmF0ZTogMSxcclxuICAgIGRpYW1vbmRTcGF3blJhdGU6IDAuMSxcclxuICAgIGRvdWJsZVdheTJSYXRlOiAwLFxyXG4gICAgZG91YmxlV2F5MVJhdGU6IDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBzdGFydEluZGV4OiA2MjAsXHJcbiAgICBkaXJlY3Rpb25DaGFuZ2VSYXRlOiAwLjY1LFxyXG4gICAgZGlhbW9uZFNwYXduUmF0ZTogMC4xLFxyXG4gICAgZG91YmxlV2F5MlJhdGU6IDAsXHJcbiAgICBkb3VibGVXYXkxUmF0ZTogMCxcclxuICB9LFxyXG4gIHtcclxuICAgIHN0YXJ0SW5kZXg6IDcwMCxcclxuICAgIGRpcmVjdGlvbkNoYW5nZVJhdGU6IDAuOSxcclxuICAgIGRpYW1vbmRTcGF3blJhdGU6IDAuMSxcclxuICAgIGRvdWJsZVdheTJSYXRlOiAwLjEsXHJcbiAgICBkb3VibGVXYXkxUmF0ZTogMC4xLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc3RhcnRJbmRleDogNzUwLFxyXG4gICAgZGlyZWN0aW9uQ2hhbmdlUmF0ZTogMC41LFxyXG4gICAgZGlhbW9uZFNwYXduUmF0ZTogMC4xLFxyXG4gICAgZG91YmxlV2F5MlJhdGU6IDAuMSxcclxuICAgIGRvdWJsZVdheTFSYXRlOiAwLjEsXHJcbiAgfSxcclxuXTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/PeerComponent/PeerClientManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b7d93Mk4CRNdqzsWLCXdMvH', 'PeerClientManager');
// Scripts/PeerComponent/PeerClientManager.ts

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
var PeerDefine_1 = require("./PeerDefine");
var PeerManager_1 = require("./PeerManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PeerClientManager = /** @class */ (function (_super) {
    __extends(PeerClientManager, _super);
    function PeerClientManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.masterSIP = 0;
        _this.currentID = 0;
        _this.currentMainPlayerID = 0;
        _this.isMainPlayer = false;
        _this.isConnected = false;
        return _this;
    }
    PeerClientManager_1 = PeerClientManager;
    PeerClientManager.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        PeerClientManager_1.Instance = this;
        var urlParams = new URLSearchParams(window.location.search);
        this.masterSIP = parseInt(urlParams.get('sip')) || 0;
        console.log("masterSIP: " + this.masterSIP);
        delete this.setConnectedCB;
        delete this.setDisConnectCB;
        delete this.getClients;
    };
    PeerClientManager.prototype.setClientConnectedCB = function (cb) {
        this.connectedCB = cb;
    };
    PeerClientManager.prototype.setClientDisconnectCB = function (cb) {
        this.disconnectCB = cb;
    };
    PeerClientManager.prototype.IsConnected = function () {
        return this.isConnected;
    };
    PeerClientManager.prototype.IsMainPlayer = function () {
        return this.isMainPlayer;
    };
    PeerClientManager.prototype.update = function (dt) {
        _super.prototype.update.call(this, dt);
    };
    PeerClientManager.prototype.init = function () {
        _super.prototype.init.call(this);
        // this.connect()
    };
    PeerClientManager.prototype.connect = function () {
        var _this = this;
        var interval = setInterval(function () {
            if (_this.isInitalized) {
                clearInterval(interval);
                var localMasterSIP = cc.sys.localStorage.getItem("masterSIP");
                if (localMasterSIP && localMasterSIP == _this.masterSIP && !_this.isConnected) {
                    _this.reconnect(function (args) {
                        cc.sys.localStorage.setItem("localSIP", _this.sip);
                        switch (args.currentStage) {
                            case PeerDefine_1.PeerStage.PLAYING:
                                //TO DO
                                break;
                            case PeerDefine_1.PeerStage.WAITING:
                                //TO DO
                                break;
                        }
                    });
                    setTimeout(function () {
                        if (!_this.isConnected) {
                            _this.disconnectCB && _this.disconnectCB();
                            _this.clientTimeoutPingPong && clearTimeout(_this.clientTimeoutPingPong);
                            _this.clientIntervalPing && clearInterval(_this.clientIntervalPing);
                            _this.isConnected = false;
                        }
                    }, PeerDefine_1.default.TIMEOUT_RETRY);
                    return;
                }
                cc.sys.localStorage.setItem("localSIP", _this.sip);
                cc.sys.localStorage.setItem("masterSIP", _this.masterSIP);
                var connectMessage = {
                    phase: PeerDefine_1.PeerPhase.CONNECT,
                    action: PeerDefine_1.PeerActionConnect.CONNECTING,
                    customParam: ""
                };
                _this.sendMessage(connectMessage);
                setTimeout(function () {
                    if (!_this.isConnected) {
                        _this.disconnectCB && _this.disconnectCB();
                        _this.clientTimeoutPingPong && clearTimeout(_this.clientTimeoutPingPong);
                        _this.clientIntervalPing && clearInterval(_this.clientIntervalPing);
                        _this.isConnected = false;
                    }
                }, PeerDefine_1.default.TIMEOUT_RETRY);
            }
        }, 1000);
    };
    PeerClientManager.prototype.reconnect = function (cb) {
        if (cb === void 0) { cb = null; }
        cc.log("reconnect");
        this.reconnectCB = cb;
        var localSIP = cc.sys.localStorage.getItem("localSIP") | 0;
        var connectMessage = {
            phase: PeerDefine_1.PeerPhase.CONNECT,
            action: PeerDefine_1.PeerActionConnect.CONNECT_RETRY,
            customParam: "" + localSIP
        };
        this.sendMessage(connectMessage);
    };
    PeerClientManager.prototype.sendMessage = function (msg) {
        if (this.masterSIP) {
            this.peer.sendTo(this.masterSIP, JSON.stringify(msg));
        }
    };
    PeerClientManager.prototype.onRecievedMessage = function (msg, client) {
        var args = JSON.parse(msg);
        if (args.phase != PeerDefine_1.PeerPhase.CONNECT) {
            console.log(msg);
        }
        if (args.phase == PeerDefine_1.PeerPhase.CONNECT) {
            switch (args.action) {
                case PeerDefine_1.PeerActionConnect.CONNECTED:
                    {
                        this.isMainPlayer = args.customParam == "mainPlayer";
                        this.isConnected = true;
                        this.currentID = args.currentID;
                        this.currentMainPlayerID = args.currentMainPlayerID;
                        this.connectedCB && this.connectedCB();
                        this.setClientPing();
                        PeerManager_1.default.emit(PeerManager_1.default.EventSwitchMainPlayer, this.isMainPlayer);
                        break;
                    }
                case PeerDefine_1.PeerActionConnect.CONNECT_FAILED:
                    {
                        this.isConnected = false;
                        this.disconnectCB && this.disconnectCB();
                        break;
                    }
                case PeerDefine_1.PeerActionConnect.SWITCH_MAINPLAYER:
                    {
                        this.isMainPlayer = this.currentID == args.currentMainPlayerID;
                        this.currentMainPlayerID = args.currentMainPlayerID;
                        PeerManager_1.default.emit(PeerManager_1.default.EventSwitchMainPlayer, this.isMainPlayer);
                        break;
                    }
                case PeerDefine_1.PeerActionConnect.PING_PONG:
                    {
                        this.clientUpdatePingPong();
                        break;
                    }
                case PeerDefine_1.PeerActionConnect.CONNECT_RETRY_SUCCESS:
                    {
                        this.isMainPlayer = args.customParam == "mainPlayer";
                        this.isConnected = true;
                        this.currentID = args.currentID;
                        this.currentMainPlayerID = args.currentMainPlayerID;
                        this.reconnectCB && this.reconnectCB(args);
                        this.reconnectCB = null;
                        this.setClientPing();
                        PeerManager_1.default.emit(PeerManager_1.default.EventSwitchMainPlayer, this.isMainPlayer);
                        cc.log("reconnect success");
                        break;
                    }
            }
            return;
        }
        PeerManager_1.default.emit(PeerManager_1.default.EventReceivedMessage, args);
        this.onmessage && this.onmessage(msg);
    };
    PeerClientManager.prototype.setClientPing = function () {
        var _this = this;
        this.clientIntervalPing = setInterval(function () {
            var pingMsg = {
                action: PeerDefine_1.PeerActionConnect.PING_PONG,
                phase: PeerDefine_1.PeerPhase.CONNECT,
                customParam: "Ping"
            };
            _this.sendMessage(pingMsg);
        }, PeerDefine_1.default.PING_TIMER);
    };
    PeerClientManager.prototype.clientUpdatePingPong = function () {
        var _this = this;
        if (this.clientTimeoutPingPong)
            clearTimeout(this.clientTimeoutPingPong);
        this.clientTimeoutPingPong = setTimeout(function () {
            _this.disconnectCB && _this.disconnectCB();
            clearTimeout(_this.clientTimeoutPingPong);
            clearInterval(_this.clientIntervalPing);
            _this.isConnected = false;
            console.log("disconnect");
        }, PeerDefine_1.default.TIMEOUT_DISCONNECT);
    };
    var PeerClientManager_1;
    PeerClientManager.Instance = null;
    PeerClientManager = PeerClientManager_1 = __decorate([
        ccclass
    ], PeerClientManager);
    return PeerClientManager;
}(PeerManager_1.default));
exports.default = PeerClientManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGVlckNvbXBvbmVudFxcUGVlckNsaWVudE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsMkNBQW1HO0FBQ25HLDZDQUEyRDtBQUNyRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUErQyxxQ0FBVztJQUExRDtRQUFBLHFFQTBOQztRQXROVSxlQUFTLEdBQVcsQ0FBQyxDQUFBO1FBQ3JCLGVBQVMsR0FBVyxDQUFDLENBQUE7UUFDckIseUJBQW1CLEdBQVcsQ0FBQyxDQUFBO1FBRTlCLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGlCQUFXLEdBQVksS0FBSyxDQUFBOztJQWlOeEMsQ0FBQzswQkExTm9CLGlCQUFpQjtJQWVsQyxrQ0FBTSxHQUFOO1FBRUksaUJBQU0sTUFBTSxXQUFFLENBQUM7UUFDZixtQkFBaUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO1FBQ2pDLElBQU0sU0FBUyxHQUFHLElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7UUFFM0MsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUM1QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7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O2dCQUNuQyxLQUFLLEVBQUUsc0JBQVMsQ0FBQyxPQUFPO2dCQUN4QixXQUFXLEVBQUUsTUFBTTthQUN0QixDQUFBO1lBQ0QsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUM3QixDQUFDLEVBQUUsb0JBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0QsZ0RBQW9CLEdBQXBCO1FBQUEsaUJBV0M7UUFURyxJQUFJLElBQUksQ0FBQyxxQkFBcUI7WUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUE7UUFDeEUsSUFBSSxDQUFDLHFCQUFxQixHQUFHLFVBQVUsQ0FBQztZQUVwQyxLQUFJLENBQUMsWUFBWSxJQUFJLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtZQUN4QyxZQUFZLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLENBQUE7WUFDeEMsYUFBYSxDQUFDLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1lBQ3RDLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFBO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDN0IsQ0FBQyxFQUFFLG9CQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUN0QyxDQUFDOztJQXZOYSwwQkFBUSxHQUFzQixJQUFJLENBQUM7SUFGaEMsaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0EwTnJDO0lBQUQsd0JBQUM7Q0ExTkQsQUEwTkMsQ0ExTjhDLHFCQUFXLEdBME56RDtrQkExTm9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBQZWVyRGVmaW5lLCB7IFBlZXJBY3Rpb25Db25uZWN0LCBQZWVyQWN0aW9uVHlwZSwgUGVlclBoYXNlLCBQZWVyU3RhZ2UgfSBmcm9tIFwiLi9QZWVyRGVmaW5lXCI7XHJcbmltcG9ydCBQZWVyTWFuYWdlciwgeyBJRGF0YVJlY2VpdmVkIH0gZnJvbSBcIi4vUGVlck1hbmFnZXJcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlZXJDbGllbnRNYW5hZ2VyIGV4dGVuZHMgUGVlck1hbmFnZXJcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBJbnN0YW5jZTogUGVlckNsaWVudE1hbmFnZXIgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBtYXN0ZXJTSVA6IG51bWJlciA9IDBcclxuICAgIHB1YmxpYyBjdXJyZW50SUQ6IG51bWJlciA9IDBcclxuICAgIHB1YmxpYyBjdXJyZW50TWFpblBsYXllcklEOiBudW1iZXIgPSAwXHJcblxyXG4gICAgcHJpdmF0ZSBpc01haW5QbGF5ZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaXNDb25uZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBkaXNjb25uZWN0Q0I6IEZ1bmN0aW9uXHJcbiAgICBwcml2YXRlIGNvbm5lY3RlZENCOiBGdW5jdGlvblxyXG4gICAgcHJpdmF0ZSByZWNvbm5lY3RDQjogRnVuY3Rpb25cclxuICAgIHByaXZhdGUgY2xpZW50VGltZW91dFBpbmdQb25nOiBhbnk7XHJcbiAgICBwcml2YXRlIGNsaWVudEludGVydmFsUGluZzogYW55O1xyXG4gICAgb25Mb2FkKClcclxuICAgIHtcclxuICAgICAgICBzdXBlci5vbkxvYWQoKTtcclxuICAgICAgICBQZWVyQ2xpZW50TWFuYWdlci5JbnN0YW5jZSA9IHRoaXNcclxuICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgICAgIHRoaXMubWFzdGVyU0lQID0gcGFyc2VJbnQodXJsUGFyYW1zLmdldCgnc2lwJykpIHx8IDA7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJtYXN0ZXJTSVA6IFwiICsgdGhpcy5tYXN0ZXJTSVApXHJcblxyXG4gICAgICAgIGRlbGV0ZSB0aGlzLnNldENvbm5lY3RlZENCO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLnNldERpc0Nvbm5lY3RDQjtcclxuICAgICAgICBkZWxldGUgdGhpcy5nZXRDbGllbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENsaWVudENvbm5lY3RlZENCKGNiOiBGdW5jdGlvbilcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNvbm5lY3RlZENCID0gY2JcclxuICAgIH1cclxuICAgIHNldENsaWVudERpc2Nvbm5lY3RDQihjYjogRnVuY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0Q0IgPSBjYlxyXG4gICAgfVxyXG4gICAgSXNDb25uZWN0ZWQoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzQ29ubmVjdGVkXHJcbiAgICB9XHJcbiAgICBJc01haW5QbGF5ZXIoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzTWFpblBsYXllclxyXG4gICAgfVxyXG4gICAgdXBkYXRlKGR0KVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZShkdCk7XHJcbiAgICB9XHJcbiAgICBpbml0KClcclxuICAgIHtcclxuICAgICAgICBzdXBlci5pbml0KClcclxuICAgICAgICAvLyB0aGlzLmNvbm5lY3QoKVxyXG4gICAgfVxyXG4gICAgY29ubmVjdCgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW5pdGFsaXplZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbG9jYWxNYXN0ZXJTSVAgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtYXN0ZXJTSVBcIilcclxuICAgICAgICAgICAgICAgIGlmIChsb2NhbE1hc3RlclNJUCAmJiBsb2NhbE1hc3RlclNJUCA9PSB0aGlzLm1hc3RlclNJUCAmJiAhdGhpcy5pc0Nvbm5lY3RlZClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY29ubmVjdCgoYXJncykgPT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsU0lQXCIsIHRoaXMuc2lwKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChhcmdzLmN1cnJlbnRTdGFnZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBQZWVyU3RhZ2UuUExBWUlORzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1RPIERPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFBlZXJTdGFnZS5XQUlUSU5HOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vVE8gRE9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzQ29ubmVjdGVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc2Nvbm5lY3RDQiAmJiB0aGlzLmRpc2Nvbm5lY3RDQigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWVudFRpbWVvdXRQaW5nUG9uZyAmJiBjbGVhclRpbWVvdXQodGhpcy5jbGllbnRUaW1lb3V0UGluZ1BvbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWVudEludGVydmFsUGluZyAmJiBjbGVhckludGVydmFsKHRoaXMuY2xpZW50SW50ZXJ2YWxQaW5nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCBQZWVyRGVmaW5lLlRJTUVPVVRfUkVUUlkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbFNJUFwiLCB0aGlzLnNpcClcclxuICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm1hc3RlclNJUFwiLCB0aGlzLm1hc3RlclNJUClcclxuICAgICAgICAgICAgICAgIGxldCBjb25uZWN0TWVzc2FnZTogSURhdGFSZWNlaXZlZCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBwaGFzZTogUGVlclBoYXNlLkNPTk5FQ1QsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBQZWVyQWN0aW9uQ29ubmVjdC5DT05ORUNUSU5HLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbVBhcmFtOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRNZXNzYWdlKGNvbm5lY3RNZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0Nvbm5lY3RlZClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzY29ubmVjdENCICYmIHRoaXMuZGlzY29ubmVjdENCKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGllbnRUaW1lb3V0UGluZ1BvbmcgJiYgY2xlYXJUaW1lb3V0KHRoaXMuY2xpZW50VGltZW91dFBpbmdQb25nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWVudEludGVydmFsUGluZyAmJiBjbGVhckludGVydmFsKHRoaXMuY2xpZW50SW50ZXJ2YWxQaW5nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCBQZWVyRGVmaW5lLlRJTUVPVVRfUkVUUlkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwMClcclxuICAgIH1cclxuICAgIHJlY29ubmVjdChjYjogRnVuY3Rpb24gPSBudWxsKVxyXG4gICAge1xyXG4gICAgICAgIGNjLmxvZyhcInJlY29ubmVjdFwiKVxyXG4gICAgICAgIHRoaXMucmVjb25uZWN0Q0IgPSBjYjtcclxuICAgICAgICBsZXQgbG9jYWxTSVAgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbFNJUFwiKSB8IDBcclxuICAgICAgICBsZXQgY29ubmVjdE1lc3NhZ2U6IElEYXRhUmVjZWl2ZWQgPSB7XHJcbiAgICAgICAgICAgIHBoYXNlOiBQZWVyUGhhc2UuQ09OTkVDVCxcclxuICAgICAgICAgICAgYWN0aW9uOiBQZWVyQWN0aW9uQ29ubmVjdC5DT05ORUNUX1JFVFJZLFxyXG4gICAgICAgICAgICBjdXN0b21QYXJhbTogXCJcIiArIGxvY2FsU0lQXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UoY29ubmVjdE1lc3NhZ2UpXHJcbiAgICB9XHJcbiAgICBzZW5kTWVzc2FnZShtc2c6IElEYXRhUmVjZWl2ZWQpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMubWFzdGVyU0lQKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5wZWVyLnNlbmRUbyh0aGlzLm1hc3RlclNJUCwgSlNPTi5zdHJpbmdpZnkobXNnKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvblJlY2lldmVkTWVzc2FnZShtc2csIGNsaWVudClcclxuICAgIHtcclxuICAgICAgICBsZXQgYXJncyA9IEpTT04ucGFyc2UobXNnKVxyXG4gICAgICAgIGlmIChhcmdzLnBoYXNlICE9IFBlZXJQaGFzZS5DT05ORUNUKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobXNnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXJncy5waGFzZSA9PSBQZWVyUGhhc2UuQ09OTkVDVClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoYXJncy5hY3Rpb24pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgUGVlckFjdGlvbkNvbm5lY3QuQ09OTkVDVEVEOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc01haW5QbGF5ZXIgPSBhcmdzLmN1c3RvbVBhcmFtID09IFwibWFpblBsYXllclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudElEID0gYXJncy5jdXJyZW50SUQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1haW5QbGF5ZXJJRCA9IGFyZ3MuY3VycmVudE1haW5QbGF5ZXJJRDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0ZWRDQiAmJiB0aGlzLmNvbm5lY3RlZENCKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDbGllbnRQaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBlZXJNYW5hZ2VyLmVtaXQoUGVlck1hbmFnZXIuRXZlbnRTd2l0Y2hNYWluUGxheWVyLCB0aGlzLmlzTWFpblBsYXllcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIFBlZXJBY3Rpb25Db25uZWN0LkNPTk5FQ1RfRkFJTEVEOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzY29ubmVjdENCICYmIHRoaXMuZGlzY29ubmVjdENCKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSBQZWVyQWN0aW9uQ29ubmVjdC5TV0lUQ0hfTUFJTlBMQVlFUjpcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNNYWluUGxheWVyID0gdGhpcy5jdXJyZW50SUQgPT0gYXJncy5jdXJyZW50TWFpblBsYXllcklEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1haW5QbGF5ZXJJRCA9IGFyZ3MuY3VycmVudE1haW5QbGF5ZXJJRDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUGVlck1hbmFnZXIuZW1pdChQZWVyTWFuYWdlci5FdmVudFN3aXRjaE1haW5QbGF5ZXIsIHRoaXMuaXNNYWluUGxheWVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIFBlZXJBY3Rpb25Db25uZWN0LlBJTkdfUE9ORzpcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50VXBkYXRlUGluZ1BvbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIFBlZXJBY3Rpb25Db25uZWN0LkNPTk5FQ1RfUkVUUllfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNNYWluUGxheWVyID0gYXJncy5jdXN0b21QYXJhbSA9PSBcIm1haW5QbGF5ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRJRCA9IGFyZ3MuY3VycmVudElEO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNYWluUGxheWVySUQgPSBhcmdzLmN1cnJlbnRNYWluUGxheWVySUQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY29ubmVjdENCICYmIHRoaXMucmVjb25uZWN0Q0IoYXJncylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVjb25uZWN0Q0IgPSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2xpZW50UGluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBQZWVyTWFuYWdlci5lbWl0KFBlZXJNYW5hZ2VyLkV2ZW50U3dpdGNoTWFpblBsYXllciwgdGhpcy5pc01haW5QbGF5ZXIpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCJyZWNvbm5lY3Qgc3VjY2Vzc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBQZWVyTWFuYWdlci5lbWl0KFBlZXJNYW5hZ2VyLkV2ZW50UmVjZWl2ZWRNZXNzYWdlLCBhcmdzKVxyXG4gICAgICAgIHRoaXMub25tZXNzYWdlICYmIHRoaXMub25tZXNzYWdlKG1zZyk7XHJcbiAgICB9XHJcbiAgICBzZXRDbGllbnRQaW5nKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNsaWVudEludGVydmFsUGluZyA9IHNldEludGVydmFsKCgpID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcGluZ01zZzogSURhdGFSZWNlaXZlZCA9IHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbjogUGVlckFjdGlvbkNvbm5lY3QuUElOR19QT05HLFxyXG4gICAgICAgICAgICAgICAgcGhhc2U6IFBlZXJQaGFzZS5DT05ORUNULFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tUGFyYW06IFwiUGluZ1wiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZW5kTWVzc2FnZShwaW5nTXNnKVxyXG4gICAgICAgIH0sIFBlZXJEZWZpbmUuUElOR19USU1FUik7XHJcbiAgICB9XHJcbiAgICBjbGllbnRVcGRhdGVQaW5nUG9uZygpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2xpZW50VGltZW91dFBpbmdQb25nKSBjbGVhclRpbWVvdXQodGhpcy5jbGllbnRUaW1lb3V0UGluZ1BvbmcpXHJcbiAgICAgICAgdGhpcy5jbGllbnRUaW1lb3V0UGluZ1BvbmcgPSBzZXRUaW1lb3V0KCgpID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2Nvbm5lY3RDQiAmJiB0aGlzLmRpc2Nvbm5lY3RDQigpXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNsaWVudFRpbWVvdXRQaW5nUG9uZylcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmNsaWVudEludGVydmFsUGluZylcclxuICAgICAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGlzY29ubmVjdFwiKVxyXG4gICAgICAgIH0sIFBlZXJEZWZpbmUuVElNRU9VVF9ESVNDT05ORUNUKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/stage/StageInGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8531fDf7L1KwZdv2KsCCznt', 'StageInGame');
// Scripts/stage/StageInGame.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Stage_1 = require("./Stage");
var StageGameEnd_1 = require("./StageGameEnd");
var playGround_1 = require("../playGround");
var PeerManager_1 = require("../PeerComponent/PeerManager");
var PeerAction_1 = require("../PeerComponent/PeerAction");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StageInGame = /** @class */ (function (_super) {
    __extends(StageInGame, _super);
    function StageInGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.playGround = null;
        _this.container = null;
        _this.playerAvatar = [];
        _this.playerRankSpriteFrames = [];
        _this.normalSprite = null;
        _this.graySprite = null;
        _this.tutorialPopup = null;
        _this.lblTimer = null;
        _this.bgSpriteFrames = [];
        _this.roadSpriteFrames = [];
        _this.objectsSpriteFrame1 = [];
        _this.objectsSpriteFrame2 = [];
        _this.objectsSpriteFrame3 = [];
        _this.isDead = [];
        _this.isGameOver = [];
        _this.playerScore = [];
        _this.avatarPositionY = [50, -125, -300];
        _this.connectedPlayerIndex = [];
        _this.rankUpdateInterval = null;
        return _this;
    }
    StageInGame_1 = StageInGame;
    // LIFE-CYCLE CALLBACKS:
    StageInGame.prototype.onLoad = function () {
        StageInGame_1.Instance = this;
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    };
    StageInGame.prototype.initial = function () {
        var _this = this;
        for (var _i = 0, _a = this.container.children; _i < _a.length; _i++) {
            var child = _a[_i];
            if (child.getComponent(PeerAction_1.default)) {
                child.getComponent(PeerAction_1.default).playerSIP = -1;
            }
        }
        this.container.removeAllChildren();
        this.connectedPlayerIndex = [];
        var bgIndexArr = [0, 1, 2];
        this.shuffleArray(bgIndexArr);
        var count = 0;
        for (var i = 0; i < 3; i++) {
            this.playerAvatar[i].getComponent(cc.Sprite).setMaterial(0, this.normalSprite);
            this.playerAvatar[i].active = PeerManager_1.default.Instance.clientConnected[i] ? true : false;
            if (PeerManager_1.default.Instance.clientConnected[i]) {
                count++;
                var playground = cc.instantiate(this.playGround);
                playground.getComponent(playGround_1.default).playerIndex = i;
                playground.getComponent(PeerAction_1.default).playerSIP = PeerManager_1.default.Instance.clientConnected[i].remoteSIP;
                playground.getComponent(playGround_1.default).bgSpriteFrame = this.bgSpriteFrames[bgIndexArr[i]];
                playground.getComponent(playGround_1.default).roadSpriteFrame = this.roadSpriteFrames[bgIndexArr[i]];
                playground.getComponent(playGround_1.default).objectsSpriteFrame = bgIndexArr[i] == 0
                    ? this.objectsSpriteFrame1 : bgIndexArr[i] == 1
                    ? this.objectsSpriteFrame2
                    : this.objectsSpriteFrame3;
                playground.parent = this.container;
                this.isGameOver[i] = false;
                this.isDead[i] = false;
                this.playerScore[i] = 0;
                this.connectedPlayerIndex.push(i);
            }
        }
        this.rankUpdateInterval = setInterval(function () {
            _this.updateRank();
        }, 2000);
        this.lblTimer.string = "5";
        setTimeout(function () {
            cc.tween(_this.tutorialPopup).to(0.3, { scale: 0.5, }, { easing: "quadOut" }).start();
            var time = 5;
            var interval = setInterval(function () {
                _this.lblTimer.string = (--time).toString();
                cc.tween(_this.lblTimer.node).to(0.1, { scale: 1.5 }).to(0.1, { scale: 1 }).start();
                if (time <= 0) {
                    clearInterval(interval);
                    cc.tween(_this.tutorialPopup).to(0.3, { scale: 0, }, { easing: "quadIn" }).call(function () {
                        _this.container.children.forEach(function (e) {
                            e.getComponent(playGround_1.default).startMoveBall();
                        });
                    }).start();
                }
            }, 1000);
        }, 500);
    };
    StageInGame.prototype.shuffleArray = function (array) {
        var _a;
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
        }
    };
    StageInGame.prototype.showConnectMessage = function (index, disconnectMessage) {
        if (disconnectMessage === void 0) { disconnectMessage = null; }
        if (!this.container.children[index])
            return;
        this.container.children[index].getComponent(playGround_1.default).showMessagePlayerDisconnect(disconnectMessage);
    };
    StageInGame.prototype.setGameOver = function (index, isDead) {
        if (isDead === void 0) { isDead = true; }
        this.isGameOver[index] = true;
        if (isDead) {
            this.isDead[index] = true;
            this.playerAvatar[index].getComponent(cc.Sprite).setMaterial(0, this.graySprite);
        }
        if (this.isGameOver.every(function (e) { return e == true; })) {
            clearInterval(this.rankUpdateInterval);
            for (var _i = 0, _a = this.container.children; _i < _a.length; _i++) {
                var child = _a[_i];
                if (child.getComponent(PeerAction_1.default)) {
                    child.getComponent(PeerAction_1.default).playerSIP = -1;
                }
            }
            this.container.removeAllChildren();
            var rank = this.getPlayerRank();
            if (PeerManager_1.default.Instance.getClientConneted().length > 0) {
                StageGameEnd_1.default.Instance.showResult(rank);
            }
        }
    };
    StageInGame.prototype.updateRank = function () {
        var rank = this.getPlayerRank();
        for (var i = 0; i < rank.length; i++) {
            cc.tween(this.playerAvatar[rank[i].playerIndex]).to(0.5, { y: this.avatarPositionY[i] }).start();
            this.playerAvatar[rank[i].playerIndex].getChildByName("rank")
                .getComponent(cc.Sprite).spriteFrame = this.playerRankSpriteFrames[i];
        }
    };
    StageInGame.prototype.getPlayerRank = function () {
        var rank = [];
        for (var i = 0; i < this.connectedPlayerIndex.length; i++) {
            rank[i] = {
                score: this.playerScore[this.connectedPlayerIndex[i]],
                playerIndex: this.connectedPlayerIndex[i],
            };
        }
        rank.sort(function (a, b) {
            return b.score - a.score;
        });
        return rank;
    };
    var StageInGame_1;
    StageInGame.Instance = null;
    __decorate([
        property(cc.Prefab)
    ], StageInGame.prototype, "playGround", void 0);
    __decorate([
        property(cc.Node)
    ], StageInGame.prototype, "container", void 0);
    __decorate([
        property(cc.Node)
    ], StageInGame.prototype, "playerAvatar", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], StageInGame.prototype, "playerRankSpriteFrames", void 0);
    __decorate([
        property(cc.Material)
    ], StageInGame.prototype, "normalSprite", void 0);
    __decorate([
        property(cc.Material)
    ], StageInGame.prototype, "graySprite", void 0);
    __decorate([
        property(cc.Node)
    ], StageInGame.prototype, "tutorialPopup", void 0);
    __decorate([
        property(cc.Label)
    ], StageInGame.prototype, "lblTimer", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], StageInGame.prototype, "bgSpriteFrames", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], StageInGame.prototype, "roadSpriteFrames", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], StageInGame.prototype, "objectsSpriteFrame1", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], StageInGame.prototype, "objectsSpriteFrame2", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], StageInGame.prototype, "objectsSpriteFrame3", void 0);
    StageInGame = StageInGame_1 = __decorate([
        ccclass
    ], StageInGame);
    return StageInGame;
}(Stage_1.default));
exports.default = StageInGame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3RhZ2VcXFN0YWdlSW5HYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUE0QjtBQUM1QiwrQ0FBMEM7QUFDMUMsNENBQXVDO0FBQ3ZDLDREQUEwRTtBQUMxRSwwREFBcUQ7QUFHL0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQUs7SUFBOUM7UUFBQSxxRUF3SkM7UUF0SndCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBQy9CLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsa0JBQVksR0FBYyxFQUFFLENBQUM7UUFDdEIsNEJBQXNCLEdBQXFCLEVBQUUsQ0FBQztRQUNqRCxrQkFBWSxHQUFnQixJQUFJLENBQUM7UUFDakMsZ0JBQVUsR0FBZ0IsSUFBSSxDQUFDO1FBQ25DLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBQzdCLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFDcEIsb0JBQWMsR0FBcUIsRUFBRSxDQUFDO1FBQ3RDLHNCQUFnQixHQUFxQixFQUFFLENBQUM7UUFDeEMseUJBQW1CLEdBQXFCLEVBQUUsQ0FBQztRQUMzQyx5QkFBbUIsR0FBcUIsRUFBRSxDQUFDO1FBQzNDLHlCQUFtQixHQUFxQixFQUFFLENBQUM7UUFJOUQsWUFBTSxHQUFjLEVBQUUsQ0FBQztRQUN2QixnQkFBVSxHQUFjLEVBQUUsQ0FBQztRQUMzQixpQkFBVyxHQUFhLEVBQUUsQ0FBQztRQUMxQixxQkFBZSxHQUFhLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0MsMEJBQW9CLEdBQWEsRUFBRSxDQUFDO1FBQ3BDLHdCQUFrQixHQUFHLElBQUksQ0FBQzs7SUFpSXRDLENBQUM7b0JBeEpvQixXQUFXO0lBd0I1Qix3QkFBd0I7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eEpELEFBd0pDLENBeEp3QyxlQUFLLEdBd0o3QztrQkF4Sm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RhZ2UgZnJvbSBcIi4vU3RhZ2VcIjtcclxuaW1wb3J0IFN0YWdlR2FtZUVuZCBmcm9tIFwiLi9TdGFnZUdhbWVFbmRcIjtcclxuaW1wb3J0IHBsYXlHcm91bmQgZnJvbSBcIi4uL3BsYXlHcm91bmRcIjtcclxuaW1wb3J0IFBlZXJNYW5hZ2VyLCB7IElEYXRhUmVjZWl2ZWQgfSBmcm9tIFwiLi4vUGVlckNvbXBvbmVudC9QZWVyTWFuYWdlclwiO1xyXG5pbXBvcnQgUGVlckFjdGlvbiBmcm9tIFwiLi4vUGVlckNvbXBvbmVudC9QZWVyQWN0aW9uXCI7XHJcbmltcG9ydCB7IFBlZXJBY3Rpb25UeXBlLCBQZWVyUGhhc2UgfSBmcm9tIFwiLi4vUGVlckNvbXBvbmVudC9QZWVyRGVmaW5lXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhZ2VJbkdhbWUgZXh0ZW5kcyBTdGFnZSB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYikgcGxheUdyb3VuZDogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBjb250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIHBsYXllckF2YXRhcjogY2MuTm9kZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpIHBsYXllclJhbmtTcHJpdGVGcmFtZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5NYXRlcmlhbCkgbm9ybWFsU3ByaXRlOiBjYy5NYXRlcmlhbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTWF0ZXJpYWwpIGdyYXlTcHJpdGU6IGNjLk1hdGVyaWFsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSB0dXRvcmlhbFBvcHVwOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbCkgbGJsVGltZXI6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSkgYmdTcHJpdGVGcmFtZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSkgcm9hZFNwcml0ZUZyYW1lczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKSBvYmplY3RzU3ByaXRlRnJhbWUxOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpIG9iamVjdHNTcHJpdGVGcmFtZTI6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSkgb2JqZWN0c1Nwcml0ZUZyYW1lMzogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICAgIHN0YXRpYyBJbnN0YW5jZTogU3RhZ2VJbkdhbWUgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBpc0RlYWQ6IGJvb2xlYW5bXSA9IFtdO1xyXG4gICAgcHVibGljIGlzR2FtZU92ZXI6IGJvb2xlYW5bXSA9IFtdO1xyXG4gICAgcHVibGljIHBsYXllclNjb3JlOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBhdmF0YXJQb3NpdGlvblk6IG51bWJlcltdID0gWzUwLCAtMTI1LCAtMzAwXTtcclxuICAgIHByaXZhdGUgY29ubmVjdGVkUGxheWVySW5kZXg6IG51bWJlcltdID0gW107XHJcbiAgICBwcml2YXRlIHJhbmtVcGRhdGVJbnRlcnZhbCA9IG51bGw7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgU3RhZ2VJbkdhbWUuSW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIHZhciBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbCgpIHtcclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmNvbnRhaW5lci5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBpZiAoY2hpbGQuZ2V0Q29tcG9uZW50KFBlZXJBY3Rpb24pKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoUGVlckFjdGlvbikucGxheWVyU0lQID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb25uZWN0ZWRQbGF5ZXJJbmRleCA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgYmdJbmRleEFyciA9IFswLCAxLCAyXTtcclxuICAgICAgICB0aGlzLnNodWZmbGVBcnJheShiZ0luZGV4QXJyKTtcclxuXHJcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckF2YXRhcltpXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zZXRNYXRlcmlhbCgwLCB0aGlzLm5vcm1hbFNwcml0ZSk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyQXZhdGFyW2ldLmFjdGl2ZSA9IFBlZXJNYW5hZ2VyLkluc3RhbmNlLmNsaWVudENvbm5lY3RlZFtpXSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKFBlZXJNYW5hZ2VyLkluc3RhbmNlLmNsaWVudENvbm5lY3RlZFtpXSkge1xyXG4gICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgICAgIGxldCBwbGF5Z3JvdW5kID0gY2MuaW5zdGFudGlhdGUodGhpcy5wbGF5R3JvdW5kKTtcclxuICAgICAgICAgICAgICAgIHBsYXlncm91bmQuZ2V0Q29tcG9uZW50KHBsYXlHcm91bmQpLnBsYXllckluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgIHBsYXlncm91bmQuZ2V0Q29tcG9uZW50KFBlZXJBY3Rpb24pLnBsYXllclNJUCA9IFBlZXJNYW5hZ2VyLkluc3RhbmNlLmNsaWVudENvbm5lY3RlZFtpXS5yZW1vdGVTSVA7XHJcbiAgICAgICAgICAgICAgICBwbGF5Z3JvdW5kLmdldENvbXBvbmVudChwbGF5R3JvdW5kKS5iZ1Nwcml0ZUZyYW1lID0gdGhpcy5iZ1Nwcml0ZUZyYW1lc1tiZ0luZGV4QXJyW2ldXTtcclxuICAgICAgICAgICAgICAgIHBsYXlncm91bmQuZ2V0Q29tcG9uZW50KHBsYXlHcm91bmQpLnJvYWRTcHJpdGVGcmFtZSA9IHRoaXMucm9hZFNwcml0ZUZyYW1lc1tiZ0luZGV4QXJyW2ldXTtcclxuICAgICAgICAgICAgICAgIHBsYXlncm91bmQuZ2V0Q29tcG9uZW50KHBsYXlHcm91bmQpLm9iamVjdHNTcHJpdGVGcmFtZSA9IGJnSW5kZXhBcnJbaV0gPT0gMFxyXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5vYmplY3RzU3ByaXRlRnJhbWUxIDogYmdJbmRleEFycltpXSA9PSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5vYmplY3RzU3ByaXRlRnJhbWUyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5vYmplY3RzU3ByaXRlRnJhbWUzO1xyXG4gICAgICAgICAgICAgICAgcGxheWdyb3VuZC5wYXJlbnQgPSB0aGlzLmNvbnRhaW5lcjtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNHYW1lT3ZlcltpXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0RlYWRbaV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU2NvcmVbaV0gPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0ZWRQbGF5ZXJJbmRleC5wdXNoKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJhbmtVcGRhdGVJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVSYW5rKCk7XHJcbiAgICAgICAgfSwgMjAwMClcclxuXHJcbiAgICAgICAgdGhpcy5sYmxUaW1lci5zdHJpbmcgPSBcIjVcIjtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy50dXRvcmlhbFBvcHVwKS50bygwLjMsIHsgc2NhbGU6IDAuNSwgfSwgeyBlYXNpbmc6IFwicXVhZE91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIGxldCB0aW1lID0gNTtcclxuICAgICAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYmxUaW1lci5zdHJpbmcgPSAoLS10aW1lKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5sYmxUaW1lci5ub2RlKS50bygwLjEsIHsgc2NhbGU6IDEuNSB9KS50bygwLjEsIHsgc2NhbGU6IDEgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aW1lIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLnR1dG9yaWFsUG9wdXApLnRvKDAuMywgeyBzY2FsZTogMCwgfSwgeyBlYXNpbmc6IFwicXVhZEluXCIgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmNoaWxkcmVuLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuZ2V0Q29tcG9uZW50KHBsYXlHcm91bmQpLnN0YXJ0TW92ZUJhbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAxMDAwKVxyXG4gICAgICAgIH0sIDUwMClcclxuICAgIH1cclxuXHJcbiAgICBzaHVmZmxlQXJyYXkoYXJyYXkpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XHJcbiAgICAgICAgICAgIFthcnJheVtpXSwgYXJyYXlbal1dID0gW2FycmF5W2pdLCBhcnJheVtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dDb25uZWN0TWVzc2FnZShpbmRleDogbnVtYmVyLCBkaXNjb25uZWN0TWVzc2FnZTogc3RyaW5nID0gbnVsbCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jb250YWluZXIuY2hpbGRyZW5baW5kZXhdKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2hpbGRyZW5baW5kZXhdLmdldENvbXBvbmVudChwbGF5R3JvdW5kKS5zaG93TWVzc2FnZVBsYXllckRpc2Nvbm5lY3QoZGlzY29ubmVjdE1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEdhbWVPdmVyKGluZGV4OiBudW1iZXIsIGlzRGVhZDogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgICAgICB0aGlzLmlzR2FtZU92ZXJbaW5kZXhdID0gdHJ1ZTtcclxuICAgICAgICBpZiAoaXNEZWFkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEZWFkW2luZGV4XSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyQXZhdGFyW2luZGV4XS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zZXRNYXRlcmlhbCgwLCB0aGlzLmdyYXlTcHJpdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNHYW1lT3Zlci5ldmVyeSgoZSkgPT4geyByZXR1cm4gZSA9PSB0cnVlIH0pKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5yYW5rVXBkYXRlSW50ZXJ2YWwpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5jb250YWluZXIuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5nZXRDb21wb25lbnQoUGVlckFjdGlvbikpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoUGVlckFjdGlvbikucGxheWVyU0lQID0gLTE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuXHJcbiAgICAgICAgICAgIGxldCByYW5rID0gdGhpcy5nZXRQbGF5ZXJSYW5rKCk7XHJcbiAgICAgICAgICAgIGlmIChQZWVyTWFuYWdlci5JbnN0YW5jZS5nZXRDbGllbnRDb25uZXRlZCgpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIFN0YWdlR2FtZUVuZC5JbnN0YW5jZS5zaG93UmVzdWx0KHJhbmspO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVJhbmsoKSB7XHJcbiAgICAgICAgbGV0IHJhbmsgPSB0aGlzLmdldFBsYXllclJhbmsoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5rLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMucGxheWVyQXZhdGFyW3JhbmtbaV0ucGxheWVySW5kZXhdKS50bygwLjUsIHsgeTogdGhpcy5hdmF0YXJQb3NpdGlvbllbaV0gfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJBdmF0YXJbcmFua1tpXS5wbGF5ZXJJbmRleF0uZ2V0Q2hpbGRCeU5hbWUoXCJyYW5rXCIpXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnBsYXllclJhbmtTcHJpdGVGcmFtZXNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFBsYXllclJhbmsoKSB7XHJcbiAgICAgICAgbGV0IHJhbmsgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29ubmVjdGVkUGxheWVySW5kZXgubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgcmFua1tpXSA9IHtcclxuICAgICAgICAgICAgICAgIHNjb3JlOiB0aGlzLnBsYXllclNjb3JlW3RoaXMuY29ubmVjdGVkUGxheWVySW5kZXhbaV1dLFxyXG4gICAgICAgICAgICAgICAgcGxheWVySW5kZXg6IHRoaXMuY29ubmVjdGVkUGxheWVySW5kZXhbaV0sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJhbmsuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYi5zY29yZSAtIGEuc2NvcmU7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHJhbms7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ui/UIMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8e195aDavdHDKGbdlAqNUxo', 'UIMgr');
// Scripts/ui/UIMgr.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UI_MOVE_DIRECTION = exports.UI_SHOW_EFFECT = exports.UIs = void 0;
// import GameMgr from "../game/GameMgr";
var Helper_1 = require("../utils/Helper");
var SingletonNode_1 = require("../utils/SingletonNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIs;
(function (UIs) {
    UIs[UIs["UIInterstitial"] = 0] = "UIInterstitial";
    UIs[UIs["UIWaiting"] = 1] = "UIWaiting";
    UIs[UIs["UIGame"] = 2] = "UIGame";
    UIs[UIs["UIScan"] = 3] = "UIScan";
    UIs[UIs["UIGuide"] = 4] = "UIGuide";
})(UIs = exports.UIs || (exports.UIs = {}));
var UI_SHOW_EFFECT;
(function (UI_SHOW_EFFECT) {
    UI_SHOW_EFFECT[UI_SHOW_EFFECT["APPEAR"] = 0] = "APPEAR";
    UI_SHOW_EFFECT[UI_SHOW_EFFECT["MOVE"] = 1] = "MOVE";
    UI_SHOW_EFFECT[UI_SHOW_EFFECT["SCALE"] = 2] = "SCALE";
    UI_SHOW_EFFECT[UI_SHOW_EFFECT["FADE"] = 3] = "FADE";
})(UI_SHOW_EFFECT = exports.UI_SHOW_EFFECT || (exports.UI_SHOW_EFFECT = {}));
var UI_MOVE_DIRECTION;
(function (UI_MOVE_DIRECTION) {
    UI_MOVE_DIRECTION[UI_MOVE_DIRECTION["UP"] = 0] = "UP";
    UI_MOVE_DIRECTION[UI_MOVE_DIRECTION["DOWN"] = 1] = "DOWN";
    UI_MOVE_DIRECTION[UI_MOVE_DIRECTION["LEFT"] = 2] = "LEFT";
    UI_MOVE_DIRECTION[UI_MOVE_DIRECTION["RIGHT"] = 3] = "RIGHT";
})(UI_MOVE_DIRECTION = exports.UI_MOVE_DIRECTION || (exports.UI_MOVE_DIRECTION = {}));
var UIMgr = /** @class */ (function (_super) {
    __extends(UIMgr, _super);
    function UIMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.UIPrefabs = [];
        _this.Canvas = null;
        _this.mMoveDirection = UI_MOVE_DIRECTION.LEFT;
        _this.mPreviousView = null;
        _this.mCurrentView = null;
        return _this;
    }
    Object.defineProperty(UIMgr.prototype, "MoveDirection", {
        set: function (value) {
            this.mMoveDirection = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UIMgr.prototype, "CurrentView", {
        get: function () {
            return this.mCurrentView;
        },
        enumerable: false,
        configurable: true
    });
    UIMgr.show = function (viewName, effectType, easing, duration) {
        if (effectType === void 0) { effectType = UI_SHOW_EFFECT.APPEAR; }
        if (easing === void 0) { easing = "smooth"; }
        if (duration === void 0) { duration = 0.5; }
        var instance = this.Instance;
        instance.mPreviousView = instance.mCurrentView;
        for (var _i = 0, _a = instance.node.children; _i < _a.length; _i++) {
            var view = _a[_i];
            var isActive = view.name == UIs[viewName];
            if (isActive) {
                instance.mCurrentView = view;
            }
            if (view.active != isActive) {
                view.active = isActive;
            }
        }
        if (instance.mPreviousView && instance.mCurrentView && instance.mPreviousView != instance.mCurrentView) {
            instance.animate(effectType, easing, duration);
        }
    };
    UIMgr.hide = function () {
        var instance = this.Instance;
        for (var _i = 0, _a = instance.node.children; _i < _a.length; _i++) {
            var view = _a[_i];
            view.active = false;
        }
    };
    UIMgr.nextView = function (isNext, effectType, easing, duration) {
        if (isNext === void 0) { isNext = true; }
        var instance = this.Instance;
        var index = instance.node.children.indexOf(instance.mCurrentView);
        if (index != -1 && ((isNext && index < instance.node.childrenCount - 1) || (!isNext && index > 0))) {
            index = isNext ? (index + 1) : (index - 1);
            this.show(Helper_1.default.GetIndexEnum(UIs, instance.node.children[index].name), effectType, easing, duration);
        }
    };
    UIMgr.getUI = function (viewName) {
        return this.Instance.node.getChildByName(UIs[viewName]).getComponent(UIs[viewName]);
    };
    UIMgr.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        for (var i = 0; i < this.UIPrefabs.length; i++) {
            var node = cc.instantiate(this.UIPrefabs[i]);
            node.active = false;
            this.node.addChild(node);
        }
        this.Canvas = cc.find("Canvas");
    };
    UIMgr.prototype.start = function () {
    };
    UIMgr.prototype.animate = function (effectType, easing, duration) {
        var _this = this;
        this.mPreviousView.active = true;
        switch (effectType) {
            case UI_SHOW_EFFECT.APPEAR:
                {
                    this.mPreviousView.active = false;
                    break;
                }
            case UI_SHOW_EFFECT.MOVE:
                {
                    var previousViewPosition = void 0;
                    var currentViewPosition = void 0;
                    switch (this.mMoveDirection) {
                        case UI_MOVE_DIRECTION.UP:
                            {
                                currentViewPosition = cc.v2(0, -this.Canvas.height * 1.5);
                                previousViewPosition = cc.v2(0, this.Canvas.height * 1.5);
                                break;
                            }
                        case UI_MOVE_DIRECTION.DOWN:
                            {
                                currentViewPosition = cc.v2(0, this.Canvas.height * 1.5);
                                previousViewPosition = cc.v2(0, -this.Canvas.height * 1.5);
                                break;
                            }
                        case UI_MOVE_DIRECTION.LEFT:
                            {
                                currentViewPosition = cc.v2(this.Canvas.width * 1.5, 0);
                                previousViewPosition = cc.v2(-this.Canvas.width * 1.5, 0);
                                break;
                            }
                        case UI_MOVE_DIRECTION.RIGHT:
                            {
                                currentViewPosition = cc.v2(-this.Canvas.width * 1.5, 0);
                                previousViewPosition = cc.v2(this.Canvas.width * 1.5, 0);
                                break;
                            }
                    }
                    cc.tween(this.mPreviousView)
                        .to(duration, { position: previousViewPosition }, { easing: easing })
                        .call(function () { return _this.mPreviousView.active = false; })
                        .start();
                    cc.tween(this.mCurrentView)
                        .set({ opacity: 0 })
                        .delay(0)
                        .set({ position: currentViewPosition, opacity: 255 })
                        .to(duration, { position: cc.Vec3.ZERO }, { easing: easing })
                        .start();
                    break;
                }
            case UI_SHOW_EFFECT.SCALE:
                {
                    this.mCurrentView.setScale(cc.Vec2.ZERO);
                    cc.tween(this.mPreviousView)
                        .to(duration, { scale: 0 }, { easing: easing })
                        .call(function () { return _this.mPreviousView.active = false; })
                        .start();
                    cc.tween(this.mCurrentView)
                        .delay(duration)
                        .to(duration, { scale: 1 }, { easing: easing })
                        .start();
                    break;
                }
            case UI_SHOW_EFFECT.FADE:
                {
                    cc.tween(this.mPreviousView)
                        .to(duration, { scale: this.mPreviousView.scaleX }, { progress: function (start, end, current, ratio) {
                            _this.mPreviousView.opacity = (1 - ratio) * 255;
                            return start + (end - start) * ratio;
                        } })
                        .call(function () { return _this.mPreviousView.active = false; })
                        .start();
                    cc.tween(this.mCurrentView)
                        .delay(duration)
                        .to(duration, { scale: this.mCurrentView.scaleX }, { progress: function (start, end, current, ratio) {
                            _this.mCurrentView.opacity = ratio * 255;
                            return start + (end - start) * ratio;
                        } })
                        .start();
                    break;
                }
        }
        this.mCurrentView.active = true;
    };
    __decorate([
        property(cc.Prefab)
    ], UIMgr.prototype, "UIPrefabs", void 0);
    UIMgr = __decorate([
        ccclass
    ], UIMgr);
    return UIMgr;
}(SingletonNode_1.default()));
exports.default = UIMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcdWlcXFVJTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBeUM7QUFDekMsMENBQXFDO0FBQ3JDLHdEQUFtRDtBQUU3QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFZLEdBT1g7QUFQRCxXQUFZLEdBQUc7SUFFWCxpREFBYyxDQUFBO0lBQ2QsdUNBQVMsQ0FBQTtJQUNULGlDQUFNLENBQUE7SUFDTixpQ0FBTSxDQUFBO0lBQ04sbUNBQU8sQ0FBQTtBQUNYLENBQUMsRUFQVyxHQUFHLEdBQUgsV0FBRyxLQUFILFdBQUcsUUFPZDtBQUVELElBQVksY0FNWDtBQU5ELFdBQVksY0FBYztJQUV0Qix1REFBTSxDQUFBO0lBQ04sbURBQUksQ0FBQTtJQUNKLHFEQUFLLENBQUE7SUFDTCxtREFBSSxDQUFBO0FBQ1IsQ0FBQyxFQU5XLGNBQWMsR0FBZCxzQkFBYyxLQUFkLHNCQUFjLFFBTXpCO0FBRUQsSUFBWSxpQkFNWDtBQU5ELFdBQVksaUJBQWlCO0lBRXpCLHFEQUFFLENBQUE7SUFDRix5REFBSSxDQUFBO0lBQ0oseURBQUksQ0FBQTtJQUNKLDJEQUFLLENBQUE7QUFDVCxDQUFDLEVBTlcsaUJBQWlCLEdBQWpCLHlCQUFpQixLQUFqQix5QkFBaUIsUUFNNUI7QUFHRDtJQUFtQyx5QkFBc0I7SUFBekQ7UUFBQSxxRUFzTEM7UUExS2dDLGVBQVMsR0FBcUIsRUFBRSxDQUFDO1FBRXRELFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsb0JBQWMsR0FBc0IsaUJBQWlCLENBQUMsSUFBSSxDQUFDO1FBQzNELG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLGtCQUFZLEdBQVksSUFBSSxDQUFDOztJQXFLekMsQ0FBQztJQXBMRyxzQkFBSSxnQ0FBYTthQUFqQixVQUFr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S0FBSyxHQUFHLEdBQUcsQ0FBQzs0QkFDeEMsT0FBTyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO3dCQUN6QyxDQUFDLEVBQUMsQ0FBQzt5QkFDRixLQUFLLEVBQUUsQ0FBQztvQkFFYixNQUFNO2lCQUNUO1NBQ0o7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDcEMsQ0FBQztJQXpLb0I7UUFBcEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQTBDO0lBWjdDLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0FzTHpCO0lBQUQsWUFBQztDQXRMRCxBQXNMQyxDQXRMa0MsdUJBQWEsRUFBUyxHQXNMeEQ7a0JBdExvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEdhbWVNZ3IgZnJvbSBcIi4uL2dhbWUvR2FtZU1nclwiO1xyXG5pbXBvcnQgSGVscGVyIGZyb20gXCIuLi91dGlscy9IZWxwZXJcIjtcclxuaW1wb3J0IFNpbmdsZXRvbk5vZGUgZnJvbSBcIi4uL3V0aWxzL1NpbmdsZXRvbk5vZGVcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5leHBvcnQgZW51bSBVSXNcclxue1xyXG4gICAgVUlJbnRlcnN0aXRpYWwsXHJcbiAgICBVSVdhaXRpbmcsXHJcbiAgICBVSUdhbWUsXHJcbiAgICBVSVNjYW4sXHJcbiAgICBVSUd1aWRlXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFVJX1NIT1dfRUZGRUNUXHJcbntcclxuICAgIEFQUEVBUixcclxuICAgIE1PVkUsXHJcbiAgICBTQ0FMRSxcclxuICAgIEZBREVcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVUlfTU9WRV9ESVJFQ1RJT05cclxue1xyXG4gICAgVVAsXHJcbiAgICBET1dOLFxyXG4gICAgTEVGVCxcclxuICAgIFJJR0hUXHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJTWdyIGV4dGVuZHMgU2luZ2xldG9uTm9kZTxVSU1ncj4oKVxyXG57XHJcbiAgICBzZXQgTW92ZURpcmVjdGlvbih2YWx1ZTogVUlfTU9WRV9ESVJFQ1RJT04pXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tTW92ZURpcmVjdGlvbiA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgQ3VycmVudFZpZXcoKTogY2MuTm9kZSBcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tQ3VycmVudFZpZXc7XHJcbiAgICB9XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYikgcHJpdmF0ZSBVSVByZWZhYnM6IEFycmF5PGNjLlByZWZhYj4gPSBbXTtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBDYW52YXM6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBtTW92ZURpcmVjdGlvbjogVUlfTU9WRV9ESVJFQ1RJT04gPSBVSV9NT1ZFX0RJUkVDVElPTi5MRUZUO1xyXG4gICAgcHJpdmF0ZSBtUHJldmlvdXNWaWV3OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgbUN1cnJlbnRWaWV3OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBzdGF0aWMgc2hvdyh2aWV3TmFtZTogVUlzLCBcclxuICAgICAgICBlZmZlY3RUeXBlOiBVSV9TSE9XX0VGRkVDVCA9IFVJX1NIT1dfRUZGRUNULkFQUEVBUiwgXHJcbiAgICAgICAgZWFzaW5nOiBzdHJpbmcgPSBcInNtb290aFwiLCBcclxuICAgICAgICBkdXJhdGlvbjogbnVtYmVyID0gMC41KVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5JbnN0YW5jZTtcclxuICAgICAgICBpbnN0YW5jZS5tUHJldmlvdXNWaWV3ID0gaW5zdGFuY2UubUN1cnJlbnRWaWV3O1xyXG5cclxuICAgICAgICBmb3IobGV0IHZpZXcgb2YgaW5zdGFuY2Uubm9kZS5jaGlsZHJlbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gdmlldy5uYW1lID09IFVJc1t2aWV3TmFtZV07XHJcbiAgICAgICAgICAgIGlmKGlzQWN0aXZlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5tQ3VycmVudFZpZXcgPSB2aWV3O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZih2aWV3LmFjdGl2ZSAhPSBpc0FjdGl2ZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmlldy5hY3RpdmUgPSBpc0FjdGl2ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoaW5zdGFuY2UubVByZXZpb3VzVmlldyAmJiBpbnN0YW5jZS5tQ3VycmVudFZpZXcgJiYgaW5zdGFuY2UubVByZXZpb3VzVmlldyAhPSBpbnN0YW5jZS5tQ3VycmVudFZpZXcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5hbmltYXRlKGVmZmVjdFR5cGUsIGVhc2luZywgZHVyYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXRpYyBoaWRlKClcclxuICAgIHtcclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuSW5zdGFuY2U7XHJcbiAgICAgICAgZm9yKGxldCB2aWV3IG9mIGluc3RhbmNlLm5vZGUuY2hpbGRyZW4pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2aWV3LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbmV4dFZpZXcoaXNOZXh0OiBib29sZWFuID0gdHJ1ZSxcclxuICAgICAgICBlZmZlY3RUeXBlOiBVSV9TSE9XX0VGRkVDVCwgXHJcbiAgICAgICAgZWFzaW5nOiBzdHJpbmcsIFxyXG4gICAgICAgIGR1cmF0aW9uOiBudW1iZXJcclxuICAgICkgXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLkluc3RhbmNlO1xyXG4gICAgICAgIGxldCBpbmRleCA9IGluc3RhbmNlLm5vZGUuY2hpbGRyZW4uaW5kZXhPZihpbnN0YW5jZS5tQ3VycmVudFZpZXcpO1xyXG5cclxuICAgICAgICBpZihpbmRleCAhPSAtMSAmJiAoKGlzTmV4dCAmJiBpbmRleCA8IGluc3RhbmNlLm5vZGUuY2hpbGRyZW5Db3VudCAtIDEpIHx8ICghaXNOZXh0ICYmIGluZGV4ID4gMCkpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW5kZXggPSBpc05leHQgPyAoaW5kZXggKyAxKSA6IChpbmRleCAtIDEpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3coSGVscGVyLkdldEluZGV4RW51bShVSXMsIGluc3RhbmNlLm5vZGUuY2hpbGRyZW5baW5kZXhdLm5hbWUpLCBlZmZlY3RUeXBlLCBlYXNpbmcsIGR1cmF0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFVJPFQ+KHZpZXdOYW1lOiBVSXMpOiBUIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFVJc1t2aWV3TmFtZV0pLmdldENvbXBvbmVudChVSXNbdmlld05hbWVdKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgICBzdXBlci5vbkxvYWQoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuVUlQcmVmYWJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLlVJUHJlZmFic1tpXSk7XHJcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuQ2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYW5pbWF0ZShlZmZlY3RUeXBlOiBVSV9TSE9XX0VGRkVDVCwgZWFzaW5nOiBzdHJpbmcsIGR1cmF0aW9uOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tUHJldmlvdXNWaWV3LmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHN3aXRjaChlZmZlY3RUeXBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FzZSBVSV9TSE9XX0VGRkVDVC5BUFBFQVI6XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubVByZXZpb3VzVmlldy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVUlfU0hPV19FRkZFQ1QuTU9WRTpcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IHByZXZpb3VzVmlld1Bvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRWaWV3UG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2godGhpcy5tTW92ZURpcmVjdGlvbilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFVJX01PVkVfRElSRUNUSU9OLlVQOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFZpZXdQb3NpdGlvbiA9IGNjLnYyKDAsIC0gdGhpcy5DYW52YXMuaGVpZ2h0ICogMS41KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNWaWV3UG9zaXRpb24gPSBjYy52MigwLCB0aGlzLkNhbnZhcy5oZWlnaHQqIDEuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFVJX01PVkVfRElSRUNUSU9OLkRPV046XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Vmlld1Bvc2l0aW9uID0gY2MudjIoMCwgdGhpcy5DYW52YXMuaGVpZ2h0KiAxLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1ZpZXdQb3NpdGlvbiA9IGNjLnYyKDAsIC0gdGhpcy5DYW52YXMuaGVpZ2h0KiAxLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBVSV9NT1ZFX0RJUkVDVElPTi5MRUZUOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFZpZXdQb3NpdGlvbiA9IGNjLnYyKHRoaXMuQ2FudmFzLndpZHRoICogMS41LCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNWaWV3UG9zaXRpb24gPSBjYy52MigtIHRoaXMuQ2FudmFzLndpZHRoICogMS41LCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgVUlfTU9WRV9ESVJFQ1RJT04uUklHSFQ6XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Vmlld1Bvc2l0aW9uID0gY2MudjIoLSB0aGlzLkNhbnZhcy53aWR0aCAqIDEuNSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzVmlld1Bvc2l0aW9uID0gY2MudjIodGhpcy5DYW52YXMud2lkdGggKiAxLjUsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tUHJldmlvdXNWaWV3KVxyXG4gICAgICAgICAgICAgICAgICAgIC50byhkdXJhdGlvbiwge3Bvc2l0aW9uOiBwcmV2aW91c1ZpZXdQb3NpdGlvbn0sIHtlYXNpbmd9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMubVByZXZpb3VzVmlldy5hY3RpdmUgPSBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubUN1cnJlbnRWaWV3KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXQoe29wYWNpdHkgOjB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5kZWxheSgwKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXQoe3Bvc2l0aW9uIDogY3VycmVudFZpZXdQb3NpdGlvbiwgb3BhY2l0eSA6IDI1NX0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKGR1cmF0aW9uLCB7cG9zaXRpb246IGNjLlZlYzMuWkVST30sIHtlYXNpbmd9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhazsgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFVJX1NIT1dfRUZGRUNULlNDQUxFOlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1DdXJyZW50Vmlldy5zZXRTY2FsZShjYy5WZWMyLlpFUk8pO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tUHJldmlvdXNWaWV3KVxyXG4gICAgICAgICAgICAgICAgICAgIC50byhkdXJhdGlvbiwge3NjYWxlOiAwfSwge2Vhc2luZ30pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5tUHJldmlvdXNWaWV3LmFjdGl2ZSA9IGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tQ3VycmVudFZpZXcpXHJcbiAgICAgICAgICAgICAgICAgICAgLmRlbGF5KGR1cmF0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgIC50byhkdXJhdGlvbiwge3NjYWxlOiAxfSwge2Vhc2luZ30pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhazsgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFVJX1NIT1dfRUZGRUNULkZBREU6XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubVByZXZpb3VzVmlldylcclxuICAgICAgICAgICAgICAgICAgICAudG8oZHVyYXRpb24sIHtzY2FsZTogdGhpcy5tUHJldmlvdXNWaWV3LnNjYWxlWH0sIHtwcm9ncmVzczogKHN0YXJ0LCBlbmQsIGN1cnJlbnQsIHJhdGlvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVByZXZpb3VzVmlldy5vcGFjaXR5ID0gKDEgLSByYXRpbykgKiAyNTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGFydCArIChlbmQgLSBzdGFydCkgKiByYXRpbztcclxuICAgICAgICAgICAgICAgICAgICB9fSlcclxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLm1QcmV2aW91c1ZpZXcuYWN0aXZlID0gZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1DdXJyZW50VmlldylcclxuICAgICAgICAgICAgICAgICAgICAuZGVsYXkoZHVyYXRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKGR1cmF0aW9uLCB7c2NhbGU6IHRoaXMubUN1cnJlbnRWaWV3LnNjYWxlWH0sIHtwcm9ncmVzczogKHN0YXJ0LCBlbmQsIGN1cnJlbnQsIHJhdGlvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubUN1cnJlbnRWaWV3Lm9wYWNpdHkgPSByYXRpbyAqIDI1NTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXJ0ICsgKGVuZCAtIHN0YXJ0KSAqIHJhdGlvO1xyXG4gICAgICAgICAgICAgICAgICAgIH19KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7ICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICAgIFxyXG4gICAgICAgIHRoaXMubUN1cnJlbnRWaWV3LmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gameplay/Ball/BallPhysics.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7c355CUI69PM6g7uROFEL0+', 'BallPhysics');
// Scripts/gameplay/Ball/BallPhysics.ts

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
var GamePlayManager_1 = require("../GamePlayManager");
var ParticleManager_1 = require("../Particle/ParticleManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BallPhysics = /** @class */ (function (_super) {
    __extends(BallPhysics, _super);
    function BallPhysics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BallPhysics.prototype.onBeginContact = function (contact, self, other) {
        GamePlayManager_1.default.Instance.timeNeedToTouch.Touching();
        ParticleManager_1.default.Instance.SpawnThing(contact.getWorldManifold().points[0], ParticleManager_1.default.Instance._particleName.TouchWallParticle);
    };
    BallPhysics = __decorate([
        ccclass
    ], BallPhysics);
    return BallPhysics;
}(cc.Component));
exports.default = BallPhysics;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZXBsYXlcXEJhbGxcXEJhbGxQaHlzaWNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWxGLHNEQUFpRDtBQUNqRCwrREFBMEQ7QUFFcEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFBckQ7O0lBY0EsQ0FBQztJQWJDLG9DQUFjLEdBQWQsVUFDRSxPQUEwQixFQUMxQixJQUEyQixFQUMzQixLQUErQjtRQUUvQix5QkFBZSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEQseUJBQWUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUNqQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQ3BDLHlCQUFlLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FDekQsQ0FBQztJQUNKLENBQUM7SUFYa0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQWMvQjtJQUFELGtCQUFDO0NBZEQsQUFjQyxDQWR3QyxFQUFFLENBQUMsU0FBUyxHQWNwRDtrQkFkb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBCYWxsIGZyb20gXCIuLi9CYWxsXCI7XHJcbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tIFwiLi4vR2FtZU1hbmFnZXJcIjtcclxuaW1wb3J0IEdhbWVQbGF5TWFuYWdlciBmcm9tIFwiLi4vR2FtZVBsYXlNYW5hZ2VyXCI7XHJcbmltcG9ydCBQYXJ0aWNsZU1hbmFnZXIgZnJvbSBcIi4uL1BhcnRpY2xlL1BhcnRpY2xlTWFuYWdlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbGxQaHlzaWNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBvbkJlZ2luQ29udGFjdChcclxuICAgIGNvbnRhY3Q6IGNjLlBoeXNpY3NDb250YWN0LFxyXG4gICAgc2VsZjogY2MuUGh5c2ljc0JveENvbGxpZGVyLFxyXG4gICAgb3RoZXI6IGNjLlBoeXNpY3NDaXJjbGVDb2xsaWRlclxyXG4gICkge1xyXG4gICAgR2FtZVBsYXlNYW5hZ2VyLkluc3RhbmNlLnRpbWVOZWVkVG9Ub3VjaC5Ub3VjaGluZygpO1xyXG4gICAgUGFydGljbGVNYW5hZ2VyLkluc3RhbmNlLlNwYXduVGhpbmcoXHJcbiAgICAgIGNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpLnBvaW50c1swXSxcclxuICAgICAgUGFydGljbGVNYW5hZ2VyLkluc3RhbmNlLl9wYXJ0aWNsZU5hbWUuVG91Y2hXYWxsUGFydGljbGVcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/stage/StageMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fd6a8RrsDtCgJjnXG0oVHlf', 'StageMgr');
// Scripts/stage/StageMgr.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stages = void 0;
var Stage_1 = require("./Stage");
var SingletonNode_1 = require("../utils/SingletonNode");
var Helper_1 = require("../utils/Helper");
var PeerManager_1 = require("../PeerComponent/PeerManager");
var StageQRscan_1 = require("./StageQRscan");
var StageLobby_1 = require("./StageLobby");
var StageGameEnd_1 = require("./StageGameEnd");
var StageInGame_1 = require("./StageInGame");
var PeerDefine_1 = require("../PeerComponent/PeerDefine");
var StageStartGame_1 = require("./StageStartGame");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Stages;
(function (Stages) {
    Stages[Stages["StageQRscan"] = 0] = "StageQRscan";
    Stages[Stages["StageLobby"] = 1] = "StageLobby";
    Stages[Stages["StageInGame"] = 2] = "StageInGame";
    Stages[Stages["StageGameEnd"] = 3] = "StageGameEnd";
    Stages[Stages["StageStartGame"] = 4] = "StageStartGame";
    Stages[Stages["StageTestGame"] = 5] = "StageTestGame";
})(Stages = exports.Stages || (exports.Stages = {}));
var StageMgr = /** @class */ (function (_super) {
    __extends(StageMgr, _super);
    function StageMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.StagePrefabs = [];
        _this.StageCover = null;
        _this.isTweening = false;
        _this.mPreviousStage = null;
        _this.mCurrentStage = null;
        _this.inputCode = [];
        return _this;
    }
    StageMgr_1 = StageMgr;
    Object.defineProperty(StageMgr.prototype, "CurrentStage", {
        get: function () {
            return this.mCurrentStage;
        },
        enumerable: false,
        configurable: true
    });
    StageMgr.show = function (stageName, duration) {
        if (duration === void 0) { duration = 0.5; }
        if (StageMgr_1.Instance.isTweening) {
            return;
        }
        var instance = this.Instance;
        instance.mPreviousStage = instance.mCurrentStage;
        for (var _i = 0, _a = instance.node.children; _i < _a.length; _i++) {
            var stage = _a[_i];
            var isActive = stage.name == Stages[stageName];
            if (isActive) {
                instance.mCurrentStage = stage;
            }
            if (stage.active != isActive) {
                stage.active = isActive;
            }
        }
        if (instance.mPreviousStage &&
            instance.mCurrentStage &&
            instance.mPreviousStage != instance.mCurrentStage) {
            instance.animate(duration);
        }
        else {
            instance.mCurrentStage.getComponent(Stage_1.default).init();
        }
        var msg = {
            phase: PeerDefine_1.PeerPhase.NONE,
            action: PeerDefine_1.PeerActionType.SHOW,
            customParam: "",
        };
        return;
        PeerManager_1.default.Instance.PlayGame(false);
        switch (stageName) {
            case Stages.StageInGame:
                StageInGame_1.default.Instance.initial();
                PeerManager_1.default.Instance.PlayGame();
                msg.phase = PeerDefine_1.PeerPhase.INGAME;
                break;
            case Stages.StageLobby:
                msg.phase = PeerDefine_1.PeerPhase.WAITING;
                break;
            case Stages.StageGameEnd:
                msg.phase = PeerDefine_1.PeerPhase.GAMEOVER;
                break;
        }
        PeerManager_1.default.Instance.sendMessageToAll(msg);
    };
    StageMgr.nextStage = function (isNext, duration) {
        if (isNext === void 0) { isNext = true; }
        if (duration === void 0) { duration = 0.5; }
        var instance = this.Instance;
        var index = instance.node.children.indexOf(instance.mCurrentStage);
        if (!isNext && index == 0) {
            // window.location = GameDefine.DEEP_LINK_BACK;
        }
        else if (index != -1 &&
            ((isNext && index < instance.node.childrenCount - 1) ||
                (!isNext && index > 0))) {
            index = isNext ? index + 1 : index - 1;
            StageMgr_1.show(Helper_1.default.GetIndexEnum(Stages, instance.node.children[index].name), duration);
        }
    };
    StageMgr.prototype.onLoad = function () {
        var _this = this;
        _super.prototype.onLoad.call(this);
        for (var i = 0; i < this.StagePrefabs.length; i++) {
            var node = cc.instantiate(this.StagePrefabs[i]);
            this.node.addChild(node);
            node.active = false;
        }
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function (event) {
            _this.inputCode.push(event.keyCode);
            if (_this.inputCode.length >= 4) {
                if (_this.inputCode.toString() == [54, 55, 56, 57].toString()) {
                    cc.debug.setDisplayStats(true);
                }
                _this.inputCode.shift();
            }
            if (PeerManager_1.default.Instance.isPlayWithRemote) {
                switch (StageMgr_1.Instance.CurrentStage.name) {
                    case Stages[Stages.StageQRscan]:
                        if (event.keyCode == 13) {
                            StageQRscan_1.default.Instance.nextStage(true);
                            PeerManager_1.default.Instance.setRemoteMode(true);
                        }
                        break;
                    case Stages[Stages.StageStartGame]:
                        if (event.keyCode == 13) {
                            StageStartGame_1.default.Instance.nextStage(true);
                        }
                        break;
                    case Stages[Stages.StageLobby]:
                        if (event.keyCode == 13) {
                            StageLobby_1.default.Instance.nextStage();
                        }
                        break;
                    case Stages[Stages.StageGameEnd]:
                        if (event.keyCode == 37) {
                            StageGameEnd_1.default.Instance.chooseButton(false);
                        }
                        else if (event.keyCode == 39) {
                            StageGameEnd_1.default.Instance.chooseButton(true);
                        }
                        else if (event.keyCode == 13) {
                            if (StageGameEnd_1.default.Instance.btnPlay.interactable) {
                                StageGameEnd_1.default.Instance.nextStage();
                            }
                            else {
                                StageGameEnd_1.default.Instance.previousStage();
                            }
                        }
                        break;
                }
            }
        });
        window.addEventListener("message", this.onReciveMessage.bind(this), false);
        this.sendMessage("getControllerURL"); // có thể thêm customParam nếu muốn
        this.sendMessage("getPrefix");
        this.sendMessage("getControllerOrigin");
    };
    StageMgr.prototype.onReciveMessage = function (e) {
        if (e.data && e.data.action) {
            var msg = e.data;
            switch (msg.action) {
                case "getPrefix": {
                    window.controllerPrefix = msg.message;
                    break;
                }
                case "getControllerURL": {
                    window.controllerURL = msg.message;
                    break;
                }
                case "getControllerOrigin": {
                    window.controllerOrigin = msg.message;
                    break;
                }
            }
        }
    };
    StageMgr.prototype.sendMessage = function (action, customParam) {
        if (customParam === void 0) { customParam = null; }
        var msg = {
            action: action,
            game: "zig-zag",
            customParam: customParam,
        };
        window.parent.postMessage(msg, "*");
    };
    StageMgr.prototype.start = function () {
        this.StageCover = cc.find("Canvas").getChildByName("Stage Cover");
        this.StageCover.active = false;
        StageMgr_1.show(Stages.StageQRscan);
    };
    StageMgr.prototype.animate = function (duration) {
        var _this = this;
        this.mPreviousStage.active = true;
        this.mCurrentStage.active = false;
        this.isTweening = true;
        this.StageCover.active = true;
        cc.tween(this.mPreviousStage)
            .to(duration, { scale: this.mPreviousStage.scaleX }, {
            progress: function (start, end, current, ratio) {
                // this.mPreviousStage.opacity = (1 - ratio) * 255;
                _this.StageCover.opacity = ratio * 255;
                return start + (end - start) * ratio;
            },
        })
            .call(function () {
            _this.mPreviousStage.active = false;
            _this.mCurrentStage.active = true;
            _this.mCurrentStage.getComponent(Stage_1.default).init();
        })
            .start();
        cc.tween(this.mCurrentStage)
            .delay(duration)
            .to(duration, { scale: this.mCurrentStage.scaleX }, {
            progress: function (start, end, current, ratio) {
                // this.mCurrentStage.opacity = ratio * 255;
                _this.StageCover.opacity = (1 - ratio) * 255;
                return start + (end - start) * ratio;
            },
        })
            .call(function () {
            _this.StageCover.active = false;
            _this.isTweening = false;
        })
            .start();
    };
    var StageMgr_1;
    __decorate([
        property(cc.Prefab)
    ], StageMgr.prototype, "StagePrefabs", void 0);
    StageMgr = StageMgr_1 = __decorate([
        ccclass
    ], StageMgr);
    return StageMgr;
}(SingletonNode_1.default()));
exports.default = StageMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3RhZ2VcXFN0YWdlTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBNEI7QUFDNUIsd0RBQW1EO0FBRW5ELDBDQUFxQztBQUVyQyw0REFBMEU7QUFDMUUsNkNBQXdDO0FBQ3hDLDJDQUFzQztBQUN0QywrQ0FBMEM7QUFDMUMsNkNBQXdDO0FBQ3hDLDBEQUlxQztBQUNyQyxtREFBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBWSxNQU9YO0FBUEQsV0FBWSxNQUFNO0lBQ2hCLGlEQUFXLENBQUE7SUFDWCwrQ0FBVSxDQUFBO0lBQ1YsaURBQVcsQ0FBQTtJQUNYLG1EQUFZLENBQUE7SUFDWix1REFBYyxDQUFBO0lBQ2QscURBQWEsQ0FBQTtBQUNmLENBQUMsRUFQVyxNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUFPakI7QUFHRDtJQUFzQyw0QkFBeUI7SUFBL0Q7UUFBQSxxRUFrT0M7UUFqTzhCLGtCQUFZLEdBQXFCLEVBQUUsQ0FBQztRQUN6RCxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQU01QixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUMvQixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUM5QixlQUFTLEdBQWEsRUFBRSxDQUFDOztJQXVObkMsQ0FBQztpQkFsT29CLFFBQVE7SUFLM0Isc0JBQUksa0NBQVk7YUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFNTSxhQUFJLEdBQVgsVUFBWSxTQUFpQixFQUFFLFFBQXNCO1FBQXRCLHlCQUFBLEVBQUEsY0FBc0I7UUFDbkQsSUFBSSxVQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRTtZQUNoQyxP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UUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdGFnZSBmcm9tIFwiLi9TdGFnZVwiO1xyXG5pbXBvcnQgU2luZ2xldG9uTm9kZSBmcm9tIFwiLi4vdXRpbHMvU2luZ2xldG9uTm9kZVwiO1xyXG5pbXBvcnQgR2FtZU1nciBmcm9tIFwiLi4vZ2FtZS9HYW1lTWFuYWdlclwiO1xyXG5pbXBvcnQgSGVscGVyIGZyb20gXCIuLi91dGlscy9IZWxwZXJcIjtcclxuaW1wb3J0IEdhbWVEZWZpbmUgZnJvbSBcIi4uL2dhbWUvR2FtZURlZmluZVwiO1xyXG5pbXBvcnQgUGVlck1hbmFnZXIsIHsgSURhdGFSZWNlaXZlZCB9IGZyb20gXCIuLi9QZWVyQ29tcG9uZW50L1BlZXJNYW5hZ2VyXCI7XHJcbmltcG9ydCBTdGFnZVFSc2NhbiBmcm9tIFwiLi9TdGFnZVFSc2NhblwiO1xyXG5pbXBvcnQgU3RhZ2VMb2JieSBmcm9tIFwiLi9TdGFnZUxvYmJ5XCI7XHJcbmltcG9ydCBTdGFnZUdhbWVFbmQgZnJvbSBcIi4vU3RhZ2VHYW1lRW5kXCI7XHJcbmltcG9ydCBTdGFnZUluR2FtZSBmcm9tIFwiLi9TdGFnZUluR2FtZVwiO1xyXG5pbXBvcnQge1xyXG4gIFBlZXJBY3Rpb25UeXBlLFxyXG4gIFBlZXJQaGFzZSxcclxuICBQZWVyU3RhZ2UsXHJcbn0gZnJvbSBcIi4uL1BlZXJDb21wb25lbnQvUGVlckRlZmluZVwiO1xyXG5pbXBvcnQgU3RhZ2VTdGFydEdhbWUgZnJvbSBcIi4vU3RhZ2VTdGFydEdhbWVcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5leHBvcnQgZW51bSBTdGFnZXMge1xyXG4gIFN0YWdlUVJzY2FuLFxyXG4gIFN0YWdlTG9iYnksXHJcbiAgU3RhZ2VJbkdhbWUsXHJcbiAgU3RhZ2VHYW1lRW5kLFxyXG4gIFN0YWdlU3RhcnRHYW1lLFxyXG4gIFN0YWdlVGVzdEdhbWUsXHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YWdlTWdyIGV4dGVuZHMgU2luZ2xldG9uTm9kZTxTdGFnZU1ncj4oKSB7XHJcbiAgQHByb3BlcnR5KGNjLlByZWZhYikgcHJpdmF0ZSBTdGFnZVByZWZhYnM6IEFycmF5PGNjLlByZWZhYj4gPSBbXTtcclxuICBwcml2YXRlIFN0YWdlQ292ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gIHByaXZhdGUgaXNUd2VlbmluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBnZXQgQ3VycmVudFN0YWdlKCk6IGNjLk5vZGUge1xyXG4gICAgcmV0dXJuIHRoaXMubUN1cnJlbnRTdGFnZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbVByZXZpb3VzU3RhZ2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gIHByaXZhdGUgbUN1cnJlbnRTdGFnZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgcHJpdmF0ZSBpbnB1dENvZGU6IG51bWJlcltdID0gW107XHJcblxyXG4gIHN0YXRpYyBzaG93KHN0YWdlTmFtZTogU3RhZ2VzLCBkdXJhdGlvbjogbnVtYmVyID0gMC41KSB7XHJcbiAgICBpZiAoU3RhZ2VNZ3IuSW5zdGFuY2UuaXNUd2VlbmluZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuSW5zdGFuY2U7XHJcbiAgICBpbnN0YW5jZS5tUHJldmlvdXNTdGFnZSA9IGluc3RhbmNlLm1DdXJyZW50U3RhZ2U7XHJcblxyXG4gICAgZm9yIChsZXQgc3RhZ2Ugb2YgaW5zdGFuY2Uubm9kZS5jaGlsZHJlbikge1xyXG4gICAgICBjb25zdCBpc0FjdGl2ZSA9IHN0YWdlLm5hbWUgPT0gU3RhZ2VzW3N0YWdlTmFtZV07XHJcblxyXG4gICAgICBpZiAoaXNBY3RpdmUpIHtcclxuICAgICAgICBpbnN0YW5jZS5tQ3VycmVudFN0YWdlID0gc3RhZ2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChzdGFnZS5hY3RpdmUgIT0gaXNBY3RpdmUpIHtcclxuICAgICAgICBzdGFnZS5hY3RpdmUgPSBpc0FjdGl2ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChcclxuICAgICAgaW5zdGFuY2UubVByZXZpb3VzU3RhZ2UgJiZcclxuICAgICAgaW5zdGFuY2UubUN1cnJlbnRTdGFnZSAmJlxyXG4gICAgICBpbnN0YW5jZS5tUHJldmlvdXNTdGFnZSAhPSBpbnN0YW5jZS5tQ3VycmVudFN0YWdlXHJcbiAgICApIHtcclxuICAgICAgaW5zdGFuY2UuYW5pbWF0ZShkdXJhdGlvbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbnN0YW5jZS5tQ3VycmVudFN0YWdlLmdldENvbXBvbmVudChTdGFnZSkuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBtc2c6IElEYXRhUmVjZWl2ZWQgPSB7XHJcbiAgICAgIHBoYXNlOiBQZWVyUGhhc2UuTk9ORSxcclxuICAgICAgYWN0aW9uOiBQZWVyQWN0aW9uVHlwZS5TSE9XLFxyXG4gICAgICBjdXN0b21QYXJhbTogXCJcIixcclxuICAgIH07XHJcbiAgICByZXR1cm47XHJcbiAgICBQZWVyTWFuYWdlci5JbnN0YW5jZS5QbGF5R2FtZShmYWxzZSk7XHJcblxyXG4gICAgc3dpdGNoIChzdGFnZU5hbWUpIHtcclxuICAgICAgY2FzZSBTdGFnZXMuU3RhZ2VJbkdhbWU6XHJcbiAgICAgICAgU3RhZ2VJbkdhbWUuSW5zdGFuY2UuaW5pdGlhbCgpO1xyXG4gICAgICAgIFBlZXJNYW5hZ2VyLkluc3RhbmNlLlBsYXlHYW1lKCk7XHJcbiAgICAgICAgbXNnLnBoYXNlID0gUGVlclBoYXNlLklOR0FNRTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTdGFnZXMuU3RhZ2VMb2JieTpcclxuICAgICAgICBtc2cucGhhc2UgPSBQZWVyUGhhc2UuV0FJVElORztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTdGFnZXMuU3RhZ2VHYW1lRW5kOlxyXG4gICAgICAgIG1zZy5waGFzZSA9IFBlZXJQaGFzZS5HQU1FT1ZFUjtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBQZWVyTWFuYWdlci5JbnN0YW5jZS5zZW5kTWVzc2FnZVRvQWxsKG1zZyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgbmV4dFN0YWdlKGlzTmV4dDogYm9vbGVhbiA9IHRydWUsIGR1cmF0aW9uOiBudW1iZXIgPSAwLjUpIHtcclxuICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5JbnN0YW5jZTtcclxuICAgIGxldCBpbmRleCA9IGluc3RhbmNlLm5vZGUuY2hpbGRyZW4uaW5kZXhPZihpbnN0YW5jZS5tQ3VycmVudFN0YWdlKTtcclxuXHJcbiAgICBpZiAoIWlzTmV4dCAmJiBpbmRleCA9PSAwKSB7XHJcbiAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbiA9IEdhbWVEZWZpbmUuREVFUF9MSU5LX0JBQ0s7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBpbmRleCAhPSAtMSAmJlxyXG4gICAgICAoKGlzTmV4dCAmJiBpbmRleCA8IGluc3RhbmNlLm5vZGUuY2hpbGRyZW5Db3VudCAtIDEpIHx8XHJcbiAgICAgICAgKCFpc05leHQgJiYgaW5kZXggPiAwKSlcclxuICAgICkge1xyXG4gICAgICBpbmRleCA9IGlzTmV4dCA/IGluZGV4ICsgMSA6IGluZGV4IC0gMTtcclxuICAgICAgU3RhZ2VNZ3Iuc2hvdyhcclxuICAgICAgICBIZWxwZXIuR2V0SW5kZXhFbnVtKFN0YWdlcywgaW5zdGFuY2Uubm9kZS5jaGlsZHJlbltpbmRleF0ubmFtZSksXHJcbiAgICAgICAgZHVyYXRpb25cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIHN1cGVyLm9uTG9hZCgpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLlN0YWdlUHJlZmFicy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5TdGFnZVByZWZhYnNbaV0pO1xyXG4gICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY2Muc3lzdGVtRXZlbnQub24oXHJcbiAgICAgIGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTixcclxuICAgICAgKGV2ZW50OiBjYy5FdmVudC5FdmVudEtleWJvYXJkKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbnB1dENvZGUucHVzaChldmVudC5rZXlDb2RlKTtcclxuICAgICAgICBpZiAodGhpcy5pbnB1dENvZGUubGVuZ3RoID49IDQpIHtcclxuICAgICAgICAgIGlmICh0aGlzLmlucHV0Q29kZS50b1N0cmluZygpID09IFs1NCwgNTUsIDU2LCA1N10udG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgICBjYy5kZWJ1Zy5zZXREaXNwbGF5U3RhdHModHJ1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmlucHV0Q29kZS5zaGlmdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoUGVlck1hbmFnZXIuSW5zdGFuY2UuaXNQbGF5V2l0aFJlbW90ZSkge1xyXG4gICAgICAgICAgc3dpdGNoIChTdGFnZU1nci5JbnN0YW5jZS5DdXJyZW50U3RhZ2UubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFN0YWdlc1tTdGFnZXMuU3RhZ2VRUnNjYW5dOlxyXG4gICAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09IDEzKSB7XHJcbiAgICAgICAgICAgICAgICBTdGFnZVFSc2Nhbi5JbnN0YW5jZS5uZXh0U3RhZ2UodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBQZWVyTWFuYWdlci5JbnN0YW5jZS5zZXRSZW1vdGVNb2RlKHRydWUpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTdGFnZXNbU3RhZ2VzLlN0YWdlU3RhcnRHYW1lXTpcclxuICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAxMykge1xyXG4gICAgICAgICAgICAgICAgU3RhZ2VTdGFydEdhbWUuSW5zdGFuY2UubmV4dFN0YWdlKHRydWUpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTdGFnZXNbU3RhZ2VzLlN0YWdlTG9iYnldOlxyXG4gICAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09IDEzKSB7XHJcbiAgICAgICAgICAgICAgICBTdGFnZUxvYmJ5Lkluc3RhbmNlLm5leHRTdGFnZSgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTdGFnZXNbU3RhZ2VzLlN0YWdlR2FtZUVuZF06XHJcbiAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMzcpIHtcclxuICAgICAgICAgICAgICAgIFN0YWdlR2FtZUVuZC5JbnN0YW5jZS5jaG9vc2VCdXR0b24oZmFsc2UpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PSAzOSkge1xyXG4gICAgICAgICAgICAgICAgU3RhZ2VHYW1lRW5kLkluc3RhbmNlLmNob29zZUJ1dHRvbih0cnVlKTtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT0gMTMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChTdGFnZUdhbWVFbmQuSW5zdGFuY2UuYnRuUGxheS5pbnRlcmFjdGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgU3RhZ2VHYW1lRW5kLkluc3RhbmNlLm5leHRTdGFnZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgU3RhZ2VHYW1lRW5kLkluc3RhbmNlLnByZXZpb3VzU3RhZ2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCB0aGlzLm9uUmVjaXZlTWVzc2FnZS5iaW5kKHRoaXMpLCBmYWxzZSk7XHJcblxyXG4gICAgdGhpcy5zZW5kTWVzc2FnZShcImdldENvbnRyb2xsZXJVUkxcIik7IC8vIGPDsyB0aOG7gyB0aMOqbSBjdXN0b21QYXJhbSBu4bq/dSBtdeG7kW5cclxuICAgIHRoaXMuc2VuZE1lc3NhZ2UoXCJnZXRQcmVmaXhcIik7XHJcbiAgICB0aGlzLnNlbmRNZXNzYWdlKFwiZ2V0Q29udHJvbGxlck9yaWdpblwiKTtcclxuICB9XHJcblxyXG4gIG9uUmVjaXZlTWVzc2FnZShlKSB7XHJcbiAgICBpZiAoZS5kYXRhICYmIGUuZGF0YS5hY3Rpb24pIHtcclxuICAgICAgbGV0IG1zZyA9IGUuZGF0YTtcclxuICAgICAgc3dpdGNoIChtc2cuYWN0aW9uKSB7XHJcbiAgICAgICAgY2FzZSBcImdldFByZWZpeFwiOiB7XHJcbiAgICAgICAgICB3aW5kb3cuY29udHJvbGxlclByZWZpeCA9IG1zZy5tZXNzYWdlO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCJnZXRDb250cm9sbGVyVVJMXCI6IHtcclxuICAgICAgICAgIHdpbmRvdy5jb250cm9sbGVyVVJMID0gbXNnLm1lc3NhZ2U7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcImdldENvbnRyb2xsZXJPcmlnaW5cIjoge1xyXG4gICAgICAgICAgd2luZG93LmNvbnRyb2xsZXJPcmlnaW4gPSBtc2cubWVzc2FnZTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VuZE1lc3NhZ2UoYWN0aW9uOiBzdHJpbmcsIGN1c3RvbVBhcmFtOiBhbnkgPSBudWxsKSB7XHJcbiAgICBsZXQgbXNnID0ge1xyXG4gICAgICBhY3Rpb246IGFjdGlvbixcclxuICAgICAgZ2FtZTogXCJ6aWctemFnXCIsIC8vIGdhbWUgbsOgbyB0aMOsIMSR4bq3dCB0w6puIMSRw7MgKGdp4buRbmcgdMOqbiBmb2xkZXIgY2jhu6lhIGdhbWUpXHJcbiAgICAgIGN1c3RvbVBhcmFtOiBjdXN0b21QYXJhbSxcclxuICAgIH07XHJcbiAgICAod2luZG93IGFzIGFueSkucGFyZW50LnBvc3RNZXNzYWdlKG1zZywgXCIqXCIpO1xyXG4gIH1cclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICB0aGlzLlN0YWdlQ292ZXIgPSBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENoaWxkQnlOYW1lKFwiU3RhZ2UgQ292ZXJcIik7XHJcbiAgICB0aGlzLlN0YWdlQ292ZXIuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgU3RhZ2VNZ3Iuc2hvdyhTdGFnZXMuU3RhZ2VRUnNjYW4pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhbmltYXRlKGR1cmF0aW9uOiBudW1iZXIpIHtcclxuICAgIHRoaXMubVByZXZpb3VzU3RhZ2UuYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMubUN1cnJlbnRTdGFnZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNUd2VlbmluZyA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5TdGFnZUNvdmVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICBjYy50d2Vlbih0aGlzLm1QcmV2aW91c1N0YWdlKVxyXG4gICAgICAudG8oXHJcbiAgICAgICAgZHVyYXRpb24sXHJcbiAgICAgICAgeyBzY2FsZTogdGhpcy5tUHJldmlvdXNTdGFnZS5zY2FsZVggfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm9ncmVzczogKHN0YXJ0LCBlbmQsIGN1cnJlbnQsIHJhdGlvKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubVByZXZpb3VzU3RhZ2Uub3BhY2l0eSA9ICgxIC0gcmF0aW8pICogMjU1O1xyXG4gICAgICAgICAgICB0aGlzLlN0YWdlQ292ZXIub3BhY2l0eSA9IHJhdGlvICogMjU1O1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhcnQgKyAoZW5kIC0gc3RhcnQpICogcmF0aW87XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5tUHJldmlvdXNTdGFnZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm1DdXJyZW50U3RhZ2UuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm1DdXJyZW50U3RhZ2UuZ2V0Q29tcG9uZW50KFN0YWdlKS5pbml0KCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gICAgY2MudHdlZW4odGhpcy5tQ3VycmVudFN0YWdlKVxyXG4gICAgICAuZGVsYXkoZHVyYXRpb24pXHJcbiAgICAgIC50byhcclxuICAgICAgICBkdXJhdGlvbixcclxuICAgICAgICB7IHNjYWxlOiB0aGlzLm1DdXJyZW50U3RhZ2Uuc2NhbGVYIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvZ3Jlc3M6IChzdGFydCwgZW5kLCBjdXJyZW50LCByYXRpbykgPT4ge1xyXG4gICAgICAgICAgICAvLyB0aGlzLm1DdXJyZW50U3RhZ2Uub3BhY2l0eSA9IHJhdGlvICogMjU1O1xyXG4gICAgICAgICAgICB0aGlzLlN0YWdlQ292ZXIub3BhY2l0eSA9ICgxIC0gcmF0aW8pICogMjU1O1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhcnQgKyAoZW5kIC0gc3RhcnQpICogcmF0aW87XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5TdGFnZUNvdmVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNUd2VlbmluZyA9IGZhbHNlO1xyXG4gICAgICB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/strings.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '06f1dcF/lRJcYoC0Xu0umHM', 'strings');
// strings.js

"use strict";

module.exports = {
  EMPTY: {
    EN: "",
    MY: "",
    MU: ""
  },
  COMMON_HIGHSCORE: {
    EN: "High Score:",
    MY: "အျမင့္ဆုံးရမွတ္",
    MU: "အမြင့်ဆုံးရမှတ်"
  },
  COMMON_STORE_EQUIP: {
    EN: "Store &\nEquipment",
    MY: "ပစၥည္းစတိုးဆိုင္",
    MU: "ပစ္စည်းစတိုးဆိုင်"
  },
  COMMON_GIFT_GUIDE: {
    EN: "Gift & Guide",
    MY: "Gift & Guide",
    MU: "Gift & Guide"
  },
  COMMON_LEADERBOARD: {
    EN: "Leader board",
    MY: "Leader board",
    MU: "Leader board"
  },
  COMMON_HISTORY: {
    EN: "Your History",
    MY: "Your History",
    MU: "Your History"
  },
  COMMON_COLLECTION: {
    EN: "Your Collection",
    MY: "Collection",
    MU: "Collection"
  },
  COMMON_SCORE: {
    EN: "Score:",
    MY: "ရမွတ္",
    MU: "ရမှတ်"
  },
  COMMON_SKILL: {
    EN: "Skill",
    MY: "Skill",
    MU: "Skill"
  },
  COMMON_ATTACK: {
    EN: "Attack",
    MY: "Attack",
    MU: "Attack"
  },
  COMMON_COOLDOWN: {
    EN: "Cool down:",
    MY: "Cool down:",
    MU: "Cool down:"
  },
  COMMON_XP: {
    EN: "XP",
    MY: "XP",
    MU: "XP"
  },
  COMMON_LV: {
    EN: "LV.",
    MY: "LV.",
    MU: "LV."
  },
  COMMON_LEVEL_UP: {
    EN: "Level up!!!",
    MY: "Level တိုး",
    MU: "Level တိုး"
  },
  COMMON_EQUIP: {
    EN: "EQUIP NOW",
    MY: "သုံးမည္",
    MU: "သုံးမည်"
  },
  COMMON_UNEQUIP: {
    EN: "UNEQUIP",
    MY: "မသုံးပါ",
    MU: "မသုံးပါ"
  },
  COMMON_YES: {
    EN: "Yes",
    MY: "Yes",
    MU: "Yes"
  },
  COMMON_NO: {
    EN: "No",
    MY: "No",
    MU: "No"
  },
  COMMON_OK: {
    EN: "OK",
    MY: "OK",
    MU: "OK"
  },
  COMMON_COPY: {
    EN: "Copy",
    MY: "ကူးယူမည္",
    MU: "ကူးယူမည်"
  },
  COMMON_TURN_REMAIN: {
    EN: "Daily remaining turns:",
    MY: "ယေန႔ကစားခြင့္",
    MU: "ယနေ့ကစားခွင့်"
  },
  COMMON_TURN_TOTAL: {
    EN: "Total turns:",
    MY: "စုစုေပါင္းကစားခြင့္",
    MU: "စုစုပေါင်းကစားခွင့်"
  },
  COMMON_YOUR_STICK: {
    EN: "Your Sticks:",
    MY: "သင့္stickမ်ား",
    MU: "သင့်stickများ"
  },
  COMMON_NO_OF: {
    EN: "No.",
    MY: "No.",
    MU: "No."
  },
  COMMON_DATE_TIME: {
    EN: "Date / Time",
    MY: "ရက္/အခ်ိန္",
    MU: "ရက်/အချိန်"
  },
  PLAYER_ID: {
    EN: "Your ID:",
    MY: "သင့္ ID",
    MU: "သင့် ID"
  },
  PLAYER_STAR: {
    EN: "Collected Stars",
    MY: "ရရွိထားေသာၾကယ္မ်ား",
    MU: "ရရှိထားသောကြယ်များ"
  },
  PLAYER_RANK: {
    EN: "Current Rank:",
    MY: "လက္ရွိအဆင့္",
    MU: "လက်ရှိအဆင့်"
  },
  BOOSTER_TITLE: {
    EN: "Booster pack",
    MY: "အင္အားတိုး Pack",
    MU: "အင်အားတိုး Pack"
  },
  BOOSTER_TITLE_2: {
    EN: "Buy sticks",
    MY: "Stickမ်ားဝယ္မည္",
    MU: "Stickများဝယ်မည်"
  },
  BOOSTER_DESC: {
    EN: "For this turn only",
    MY: "ယခုကစားခြင့္အတြက္သာ",
    MU: "ယခုကစားခွင့်အတွက်သာ"
  },
  BOOSTER_HP: {
    EN: "Max HP",
    MY: "Max HP",
    MU: "Max HP"
  },
  BOOSTER_CONFIRM: {
    EN: "Spend %d Ks main lalance\nto buy %d Sticks?",
    MY: "%d Stick ဝယ္ယူရန္ လက္က်န္ေငြ\n%d က်ပ္ကိုအသုံးျပဳမည္",
    MU: "%d Stick ဝယ်ယူရန် လက်ကျန်ငွေ\n%d ကျပ်ကိုအသုံးပြုမည်"
  },
  STORE_DESC: {
    EN: "Buy and equip skills for special powers",
    MY: "အထူးပါဝါမ်ားရေအာင္ကြၽမ္းက်င္မႈမ်ားဝယ္ယူပါ",
    MU: "အထူးပါဝါများရအောင်ကျွမ်းကျင်မှုများဝယ်ယူပါ"
  },
  STORE_BUY_WITH: {
    EN: "Buy with 1000",
    MY: "၁၀၀၀ျဖင့္ဝယ္မည္",
    MU: "၁၀၀၀ဖြင့်ဝယ်မည်"
  },
  STORE_TURN_1: {
    EN: "Get 30 turns",
    MY: "ကစားခြင့္ ၃၀ယူမည္",
    MU: "ကစားခွင့် ၃၀ယူမည်"
  },
  STORE_TURN_2: {
    EN: "Not affect daily limit",
    MY: "ေန႔စဥ္ကစားခြင့္သတ္မွတ္\nခ်က္ကိုမေျပာင္းလဲႏိုင္ပါ",
    MU: "နေ့စဉ်ကစားခွင့်သတ်မှတ်\nချက်ကိုမပြောင်းလဲနိုင်ပါ"
  },
  STORE_FREEZE: {
    EN: "Freeze all\nenemies for 2s",
    MY: "ရန္သူမ်ား 2စကၠန႔္\nေရခဲသြားေစျခင္း",
    MU: "ရန်သူများ 2စက္ကန့်\nရေခဲသွားစေခြင်း"
  },
  STORE_SLOW: {
    EN: "Slow enemies\n70% for 5s",
    MY: "ရန္သူ႔လႈပ္ရွားမႈ 70% ခန႔္\n5စကၠန႔္ၾကာေႏွးသြားေစျခင္း",
    MU: "ရန်သူ့လှုပ်ရှားမှု 70%ခန့်\n5စက္ကန့်ကြာနှေးသွားစေခြင်း"
  },
  STORE_ATTACK: {
    EN: "+50% Attack\nfor 5s",
    MY: "5စကၠန႔္ၾကာ တိုက္ခိုက္မႈအား\n50%တိုးတတ္ေစျခင္း",
    MU: "5စက္ကန့်ကြာ တိုက်ခိုက်မှုအား\n50%တိုးတတ်စေခြင်း"
  },
  STORE_INVISIBLE: {
    EN: "Be invisible\nfor 5s",
    MY: "5စကၠန႔္ၾကာ\nကိုယ္ေဖ်ာက္ႏိုင္ျခင္း",
    MU: "5စက္ကန့်ကြာ\nကိုယ်ဖျောက်နိုင်ခြင်း"
  },
  COLLECTION_DESC_1: {
    EN: "Collect all 10 sims to win",
    MY: "ဆင္းကဒ္ ၁၀ခုစုေဆာင္းၿပီး",
    MU: "ဆင်းကဒ် ၁၀ခုစုဆောင်းပြီး"
  },
  COLLECTION_DESC_2: {
    EN: "20,000,000 Kyats",
    MY: "20,000,000 Kyats",
    MU: "20,000,000 Kyats"
  },
  COLLECTION_DESC_3: {
    EN: "as Grand Prize.",
    MY: "ကိုဆုႀကီးယူမည္",
    MU: "ကိုဆုကြီးယူမည်"
  },
  COLLECTION_DESC_4: {
    EN: "Play more to get more chance",
    MY: "အထူးဆုမ်ားရယူႏိုင္မည့္",
    MU: "အထူးဆုများရယူနိုင်မည့်"
  },
  COLLECTION_DESC_5: {
    EN: "to win these amazing prizes!",
    MY: "အခြင့္အေရးပိုရေအာင္ပိုကစားပါ",
    MU: "အခွင့်အရေးပိုရအောင်ပိုကစားပါ"
  },
  COLLECTION_DESC_6: {
    EN: "to win more prizes!",
    MY: "အခြင့္အေရးပိုရေအာင္ပိုကစားပါ",
    MU: "အခွင့်အရေးပိုရအောင်ပိုကစားပါ"
  },
  COLLECTION_DESC_7: {
    EN: "Check your grand prize collection progress!",
    MY: "အထူးဆုရယူရန္စုေဆာင္းမႈမ်ား",
    MU: "အထူးဆုရယူရန်စုဆောင်းမှုများ"
  },
  COLLECTION_TARGET: {
    EN: "Your Target",
    MY: "သင့္ရည္မွန္းခ်က္",
    MU: "သင့်ရည်မှန်းချက်"
  },
  LB_DESC: {
    EN: "See how you compete with other players!",
    MY: "အျခားကစားသမားေတြႏွင့္ယွဥ္ၿပိဳင္မႈရလဒ္",
    MU: "အခြားကစားသမားတွေနှင့်ယှဉ်ပြိုင်မှုရလဒ်"
  },
  LB_STAR_TITLE: {
    EN: "TOP STAR",
    MY: "TOP STAR",
    MU: "TOP STAR"
  },
  LB_STAR_DESC: {
    EN: "Top 10 weekly star collectors will receive 10,000Ks Emoney each",
    MY: "ယခုအပတ္အတြက္ထိပ္တန္းၾကယ္အမ်ားစုဆု ၁၀ေယာက္\nစာရင္းတြင္ပါဝင္ပါက Emoney ၁၀,၀၀၀က်ပ္စီရရွိပါမည္။",
    MU: "ယခုအပတ်အတွက်ထိပ်တန်းကြယ်အများစုဆု ၁၀ယောက်\nစာရင်းတွင်ပါဝင်ပါက Emoney ၁၀,၀၀၀ကျပ်စီရရှိပါမည်။"
  },
  LB_STAR_TIME: {
    EN: "Star Times",
    MY: "Star Times",
    MU: "Star Times"
  },
  LB_STARS: {
    EN: "Stars",
    MY: "Stars",
    MU: "Stars"
  },
  LB_SCORE_TITLE: {
    EN: "TOP SCORE",
    MY: "TOP SCORE",
    MU: "TOP SCORE"
  },
  LB_SCORE_TIMES: {
    EN: "Score time",
    MY: "Score time",
    MU: "Score time"
  },
  LB_SCORES: {
    EN: "Score",
    MY: "Score",
    MU: "Score"
  },
  LB_WINNER_TITLE: {
    EN: "WINNER LIST",
    MY: "ကံထူးရွင္မ်ား",
    MU: "ကံထူးရှင်များ"
  },
  LB_WINNER_GRAND: {
    EN: "Grand Prizes",
    MY: "ထိပ္တန္းဆုမ်ား",
    MU: "ထိပ်တန်းဆုများ"
  },
  LB_WINNER_PREMIUM: {
    EN: "Premium Prizes",
    MY: "အထူးဆုမ်ား",
    MU: "အထူးဆုများ"
  },
  LB_THIS_WEEK: {
    EN: "This Week",
    MY: "ယခုအပါတ္",
    MU: "ယခုအပါတ်"
  },
  LB_LAST_WEEK: {
    EN: "Last Week",
    MY: "ယခင္အပါတ္",
    MU: "ယခင်အပါတ်"
  },
  LB_PERIOD: {
    EN: "Period:",
    MY: "အခ်ိန္",
    MU: "အချိန်"
  },
  GG_GIFT: {
    EN: "GIFTS",
    MY: "ဆုလက္ေဆာင္မ်ား",
    MU: "ဆုလက်ဆောင်များ"
  },
  GG_GIFT_SPECIAL: {
    EN: "SPECIAL PRIZES",
    MY: "စပါယ္ရွယ္ဆုမ်ား",
    MU: "စပါယ်ရှယ်ဆုများ"
  },
  GG_GUIDE: {
    EN: "GUIDE",
    MY: "လမ္းၫႊန္ခ်က္",
    MU: "လမ်းညွှန်ချက်"
  },
  GG_GUIDE_01: {
    EN: "How to play game?",
    MY: "ဂိမ္းဘယ္လိုကစားရမလဲ",
    MU: "ဂိမ်းဘယ်လိုကစားရမလဲ"
  },
  GG_GUIDE_02: {
    EN: "How to view history?",
    MY: "History ကိုဘယ္လိုၾကည့္ရမလဲ",
    MU: "History ကိုဘယ်လိုကြည့်ရမလဲ"
  },
  GG_GUIDE_03: {
    EN: "How to redeem gifts?",
    MY: "ဆုလက္ေဆာင္ေတြဘယ္လိုထုတ္ယူရမလဲ",
    MU: "ဆုလက်ဆောင်တွေဘယ်လိုထုတ်ယူရမလဲ"
  },
  GG_GUIDE_04: {
    EN: "How to to up sticks?",
    MY: "Stick ရေအာင္ဘယ္လိုလုပ္ရမလဲ",
    MU: "Stick ရအောင်ဘယ်လိုလုပ်ရမလဲ"
  },
  HISTORY_DESC_1: {
    EN: "Get more turns after buying\nPackage/topup or buy at the Store!",
    MY: "ပတ့္ေက့ခ္်ဝယ္ယူၿပီး၊ဖုန္းေငြျဖည့္ၿပီး\n(သို႔) စတိုးမွဝယ္ယူၿပီးကစားခြင့္မ်ားပိုမိုရယူပါ",
    MU: "ပတ့်ကေ့ခ်ျဝယ်ယူပြီး၊ဖုန်းငွေဖြည့်ပြီး\n(သို့) စတိုးမှဝယ်ယူပြီးကစားခွင့်များပိုမိုရယူပါ"
  },
  HISTORY_DESC_2: {
    EN: "Tap for details!",
    MY: "အေသးစိတ္ၾကည့္ရန္ႏွိပ္ပါ",
    MU: "အသေးစိတ်ကြည့်ရန်နှိပ်ပါ"
  },
  HISTORY_DESC_3: {
    EN: "Check your received turns & prizes here!",
    MY: "ရရွိထားသည့္ကစားခြင့္မ်ားႏွင့္ဆုမ်ား",
    MU: "ရရှိထားသည့်ကစားခွင့်များနှင့်ဆုများ"
  },
  HISTORY_TURN: {
    EN: "TURN",
    MY: "ကစားခြင့္",
    MU: "ကစားခွင့်"
  },
  HISTORY_TURNS: {
    EN: "Turn",
    MY: "ကစားခြင့္",
    MU: "ကစားခွင့်"
  },
  HISTORY_PRIZE: {
    EN: "PRIZE",
    MY: "ဆုလက္ေဆာင္",
    MU: "ဆုလက်ဆောင်"
  },
  HISTORY_GIFT: {
    EN: "Received Gifts",
    MY: "ရရွိသည့္ဆုမ်ား",
    MU: "ရရှိသည့်ဆုများ"
  },
  HISTORY_LUCKY_CODE: {
    EN: "Lucky Code",
    MY: "လပ္ကီးကုဒ္",
    MU: "လပ်ကီးကုဒ်"
  },
  HISTORY_LUCKY_CODE_DESC: {
    EN: "Lucky Codes will be selected\nduring livestreams to win 20,000,000Ks",
    MY: "LiveStream မ်ားတြင္ လပ္ကီးကုဒ္မ်ားမွ\nသိန္း၂၀၀ကံထူးရွင္ေ႐ြးခ်ယ္ပါမည္",
    MU: "LiveStream များတွင် လပ်ကီးကုဒ်များမှ\nသိန်း၂၀၀ကံထူးရှင်ရွေးချယ်ပါမည်"
  },
  HISTORY_GIFT_CODE: {
    EN: "Emoney Gift Code",
    MY: "Emoneyလက္ေဆာင္ကုဒ္",
    MU: "Emoneyလက်ဆောင်ကုဒ်"
  },
  HISTORY_GIFT_CODE_DESC_1: {
    EN: "Input Gift Code to claim\nyour emoney prize.",
    MY: "Emoney ဆုယူရန္လက္ေဆာင္ကုဒ္ထည့္ပါ",
    MU: "Emoney ဆုယူရန်လက်ဆောင်ကုဒ်ထည့်ပါ"
  },
  HISTORY_GIFT_CODE_DESC_2: {
    EN: "Tap me to get MytelPay application!",
    MY: "MytelPay App ရယူရန္ႏွိပ္ပါ",
    MU: "MytelPay App ရယူရန်နှိပ်ပါ"
  },
  HISTORY_GIFT_CODE_DESC_3: {
    EN: "Gift code can be used one time only. You can claim\non MytelPay app and please do not share to anyone",
    MY: "လက္ေဆာင္ကုဒ္မ်ားကိုတစ္ႀကိမ္သာအသုံးျပဳႏိုင္ပါသည္။ MytelPay လက္ေဆာင္ကုဒ္\nတြင္ထည့္သြင္းရမည္ျဖစ္ၿပီး တစ္ျခားသူကိုမွ်ေဝျခင္းမျပဳလုပ္ပါႏွင့္။",
    MU: "လက်ဆောင်ကုဒ်များကိုတစ်ကြိမ်သာအသုံးပြုနိုင်ပါသည်။ MytelPay လက်ဆောင်ကုဒ်\nတွင်ထည့်သွင်းရမည်ဖြစ်ပြီး တစ်ခြားသူကိုမျှဝေခြင်းမပြုလုပ်ပါနှင့်။"
  },
  END_GAMEOVER: {
    EN: "Game Over",
    MY: "Game Over",
    MU: "Game Over"
  },
  END_BEST_SCORE: {
    EN: "BEST\nSCORE",
    MY: "အေကာင္း\nဆုံးရမွတ္",
    MU: "အကောင်း\nဆုံးရမှတ်"
  },
  END_REPLAY: {
    EN: "PLAY AGAIN",
    MY: "ထပ္‌ကစား",
    MU: "ထပ်‌ကစား"
  },
  END_PRIZE: {
    EN: "YOU WON THESE AMAZING PRIZES",
    MY: "သင္ေအာက္ပါဆုႀကီးမ်ားရရွိပါသည္",
    MU: "သင်အောက်ပါဆုကြီးများရရှိပါသည်"
  },
  TUTOR_TITLE: {
    EN: "How to play in 3 steps",
    MY: "ဘယ္လိုကစားမလဲ",
    MU: "ဘယ်လိုကစားမလဲ"
  },
  TUTOR_DESC_1: {
    EN: "Keep MoMo running as\nfar as possible",
    MY: "မိုမိုကို ျမန္ျမန္ေျပးခိုင္းပါ",
    MU: "မိုမိုကို မြန်မြန်ပြေးခိုင်းပါ"
  },
  TUTOR_DESC_2: {
    EN: "Swipe to kill enemies",
    MY: "ရန္သူသတ္ရန္ရန္သူေပၚကိုပြတ္ဆြဲပါ",
    MU: "ရန်သူသတ်ရန်ရန်သူပေါ်ကိုပွတ်ဆွဲပါ"
  },
  TUTOR_DESC_3: {
    EN: "Jump over water!",
    MY: "ေရေအာက္မက်ေအာင္ခုန္ပါ",
    MU: "ရေအောက်မကျအောင်ခုန်ပါ"
  },
  GAME_MODE: {
    EN: "CHOOSE GAME MODE",
    MY: "ကစားမည့္ပုံစံေ႐ြးပါ",
    MU: "ကစားမည့်ပုံစံရွေးပါ"
  },
  GAME_MODE_VOICE: {
    EN: "Use voice",
    MY: "အသံျဖင့္",
    MU: "အသံဖြင့်"
  },
  GAME_MODE_VOICE_DESC_1: {
    EN: "SCREAM\n2 JUMP",
    MY: "ခုန္ရန္အသံ\nထြက္ပါ",
    MU: "ခုန်ရန်အသံ\nထွက်ပါ"
  },
  GAME_MODE_VOICE_DESC_2: {
    EN: "To play with voice input, you need to:",
    MY: "အသံျဖင့္ကစားရန္ သင္သည္",
    MU: "အသံဖြင့်ကစားရန် သင်သည်"
  },
  GAME_MODE_VOICE_DESC_3: {
    EN: "1. Enable MyID to access microphone.",
    MY: "1.မိုက္ခ႐ိုဖုန္းအသုံးျပဳရန္MyIDကိုခြင့္ျပဳထားပါ",
    MU: "1.မိုက်ခရိုဖုန်းအသုံးပြုရန်MyIDကိုခွင့်ပြုထားပါ"
  },
  GAME_MODE_HAND: {
    EN: "Use hand",
    MY: "လက္ျဖင့္",
    MU: "လက်ဖြင့်"
  },
  GAME_MODE_HAND_DESC: {
    EN: "SHAKE\n2 JUMP",
    MY: "ခုန္ရန္ဖုန္းကို\nလႈပ္ခါပါ",
    MU: "ခုန်ရန်ဖုန်းကို\nလှုပ်ခါပါ"
  },
  WARNING_VOICE_1: {
    EN: "VOICE INPUT\nNOT DETECTED",
    MY: "အသံခြင့္ျပဳ\nထားျခင္းမရွိပါ",
    MU: "အသံခွင့်ပြု\nထားခြင်းမရှိပါ"
  },
  WARNING_VOICE_2: {
    EN: "PLEASE CHOOSE",
    MY: "ေ႐ြးခ်ယ္ပါ",
    MU: "ရွေးချယ်ပါ"
  },
  WARNING_VOICE_3: {
    EN: "“SHAKE 2 JUMP MODE”",
    MY: "“SHAKE 2 JUMP MODE”",
    MU: '"SHAKE 2 JUMP MODE"'
  },
  GAME_GO: {
    EN: "GO!",
    MY: "GO!",
    MU: "GO!"
  },
  GAME_WAVE: {
    EN: "Wave",
    MY: "Wave",
    MU: "Wave"
  },
  GAME_ENEMY_NOTICE: {
    EN: "Enemies incoming in",
    MY: "ရန္သူေတြလာရန္",
    MU: "ရန်သူတွေလာရန်"
  },
  GAME_WATER_NOTICE: {
    EN: "Water incoming in",
    MY: "ေရေက်ာ္ျဖတ္ရန္",
    MU: "ရေကျော်ဖြတ်ရန်"
  },
  GAME_REVIVE_TITLE: {
    EN: "Oops… Revive now?",
    MY: "အသက္ဆက္လက္ရွင္သန္ေစမလား",
    MU: "အသက်ဆက်လက်ရှင်သန်စေမလား"
  },
  GAME_REVIVE_DESC: {
    EN: "Get full health and move to next wave",
    MY: "Health အျပည့္ျဖင့္ ေနာက္ wave သို႔သြားမည္",
    MU: "Health အပြည့်ဖြင့် နောက် wave သို့သွားမည်"
  },
  "GG_GRAND PRIZE": {
    EN: "GRAND PRIZE",
    MY: "ထိပ္တန္းဆု",
    MU: "ထိပ်တန်းဆု"
  },
  "GG_PREMIUM PRIZE": {
    EN: "PREMIUM PRIZES",
    MY: "အထူးဆုမ်ား",
    MU: "အထူးဆုများ"
  },
  ENEMY_COMMING_TUT: {
    EN: "SWIPE TO\nKILL ENEMIES",
    MY: "ရန္သူသတ္ရန္ ရန္သူ\nေပၚကိုပြတ္ဆြဲပါ",
    MU: "ရန်သူသတ်ရန် ရန်သူ\nပေါ်ကိုပွတ်ဆွဲပါ"
  },
  TUTOR_DESC_3_IOS: {
    EN: "Shake to jump\nover water!",
    MY: "ေရအေပၚသို႔ေရာက္ေအာင္\nခုန္ရန္ဖုန္းကိုလႈပ္ခါပါ။",
    MU: "ရေအပေါ်သို့ရောက်အောင်\nခုန်ရန်ဖုန်းကိုလှုပ်ခါပါ။"
  },
  GAME_MODE_VOICE_DESC_4: {
    EN: '2. Tap "ALLOW" whenever you play Speak 2 Jump',
    MY: '2.အသံျဖင့္ကစားမည့္အခါတိုင္း "ALLOW" ကိုေ႐ြးပါ',
    MU: '2.အသံဖြင့်ကစားမည့်အခါတိုင်း "ALLOW" ကိုရွေးပါ'
  },
  STORE_BUY_WITH_500: {
    EN: "Buy with 500",
    MY: "၅၀၀ ျဖင့္ဝယ္မည္",
    MU: "၅၀၀ ဖြင့်ဝယ်မည်"
  },
  HISTORY_GIFT_CODE_DESC_4: {
    EN: "Tap me to to Follow Mytel fanpage!",
    MY: "Mytel Fanpage သြားရန္ႏွိပ္ပါ။",
    MU: "Mytel Fanpage သွားရန်နှိပ်ပါ။"
  },
  LB_WINNER_TITLE_2: {
    EN: "Collect all 10 sims to win 20,000,000 Kyats",
    MY: "ဆင္းကဒ္၁၀ခုစုေဆာင္းၿပီး ေငြ သိန္း ၂၀၀ရယူပါ။",
    MU: "ဆင်းကဒ်၁၀ခုစုဆောင်းပြီး ငွေ သိန်း ၂၀၀ရယူပါ။"
  },
  WARNING_DESC: {
    EN: "Are you sure to quit this session?",
    MY: "ယခုထြက္ေတာ့မွာေသခ်ာပါသလား။",
    MU: "ယခုထွက်တော့မှာသေချာပါသလား။"
  },
  UI_ERROR: {
    EN: "Oops... Connection error!\nPlease try again later",
    MY: "ဆက္သြယ္မႈျပတ္ေတာက္ေနပါသျဖင့္\nျပန္လည္ႀကိဳးစားပါ။",
    MU: "ဆက်သွယ်မှုပြတ်တောက်နေပါသဖြင့်\nပြန်လည်ကြိုးစားပါ။"
  },
  UI_CANCEL: {
    EN: "CANCEL",
    MY: "ထြက္မည္",
    MU: "ထွက်မည်"
  },
  UI_RETRY: {
    EN: "RETRY",
    MY: "ျပန္လုပ္မည္",
    MU: "ပြန်လုပ်မည်"
  },
  UI_QUIT: {
    EN: "QUIT",
    MY: "ထြက္ခြာမည္",
    MU: "ထွက်ခွာမည်"
  },
  UI_WRONG: {
    EN: "Oops…\nSomething goes wrong!",
    MY: "မွားယြင္းမႈျဖစ္ေပၚေနပါသည္။",
    MU: "မှားယွင်းမှုဖြစ်ပေါ်နေပါသည်။"
  },
  TUTOR_DESC_3_IOS_HAND: {
    EN: "Tap to jump\nover water!",
    MY: "ေရေပၚတြင္\nခုန္ရန္ႏွိပ္ပါ။",
    MU: "ရေပေါ်တွင်\nခုန်ရန်နှိပ်ပါ။"
  },
  GAME_MODE_HAND_TAP_DESC: {
    EN: "TAP 2\nJUMP",
    MY: "ခုန္ရန္\nႏွိပ္ပါ။",
    MU: "ခုန်ရန်\nနှိပ်ပါ။"
  },
  UI_NO_MORE_TURN: {
    EN: "OOPS... NO MORE PLAY TURNS.\nBUY AT STORE?",
    MY: "ကစားခြင့္ကုန္ဆုံးသြားပါၿပီ။\n ကစားခြင့္ဝယ္လိုပါသလား။",
    MU: "ကစားခွင့်ကုန်ဆုံးသွားပါပြီ။\nကစားခွင့်ဝယ်လိုပါသလား။"
  },
  ENDGAME_ERROR_PRIZE: {
    EN: "Network unstable. \nPlease check History page\nlater for details.",
    MY: "အင်တာနက်ဆက်သွယ်မှု ပြတ်တောက်နေပါသဖြင့် \nHistory page မှ အချက်အလက် \nများကို ထပ်မံ့ စစ်ဆေးပေးပါ",
    MU: "အင်တာနက်ဆက်သွယ်မှု ပြတ်တောက်နေပါသဖြင့် \nHistory page မှ အချက်အလက် \nများကို ထပ်မံ့ စစ်ဆေးပေးပါ"
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3RyaW5ncy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiRU1QVFkiLCJFTiIsIk1ZIiwiTVUiLCJDT01NT05fSElHSFNDT1JFIiwiQ09NTU9OX1NUT1JFX0VRVUlQIiwiQ09NTU9OX0dJRlRfR1VJREUiLCJDT01NT05fTEVBREVSQk9BUkQiLCJDT01NT05fSElTVE9SWSIsIkNPTU1PTl9DT0xMRUNUSU9OIiwiQ09NTU9OX1NDT1JFIiwiQ09NTU9OX1NLSUxMIiwiQ09NTU9OX0FUVEFDSyIsIkNPTU1PTl9DT09MRE9XTiIsIkNPTU1PTl9YUCIsIkNPTU1PTl9MViIsIkNPTU1PTl9MRVZFTF9VUCIsIkNPTU1PTl9FUVVJUCIsIkNPTU1PTl9VTkVRVUlQIiwiQ09NTU9OX1lFUyIsIkNPTU1PTl9OTyIsIkNPTU1PTl9PSyIsIkNPTU1PTl9DT1BZIiwiQ09NTU9OX1RVUk5fUkVNQUlOIiwiQ09NTU9OX1RVUk5fVE9UQUwiLCJDT01NT05fWU9VUl9TVElDSyIsIkNPTU1PTl9OT19PRiIsIkNPTU1PTl9EQVRFX1RJTUUiLCJQTEFZRVJfSUQiLCJQTEFZRVJfU1RBUiIsIlBMQVlFUl9SQU5LIiwiQk9PU1RFUl9USVRMRSIsIkJPT1NURVJfVElUTEVfMiIsIkJPT1NURVJfREVTQyIsIkJPT1NURVJfSFAiLCJCT09TVEVSX0NPTkZJUk0iLCJTVE9SRV9ERVNDIiwiU1RPUkVfQlVZX1dJVEgiLCJTVE9SRV9UVVJOXzEiLCJTVE9SRV9UVVJOXzIiLCJTVE9SRV9GUkVFWkUiLCJTVE9SRV9TTE9XIiwiU1RPUkVfQVRUQUNLIiwiU1RPUkVfSU5WSVNJQkxFIiwiQ09MTEVDVElPTl9ERVNDXzEiLCJDT0xMRUNUSU9OX0RFU0NfMiIsIkNPTExFQ1RJT05fREVTQ18zIiwiQ09MTEVDVElPTl9ERVNDXzQiLCJDT0xMRUNUSU9OX0RFU0NfNSIsIkNPTExFQ1RJT05fREVTQ182IiwiQ09MTEVDVElPTl9ERVNDXzciLCJDT0xMRUNUSU9OX1RBUkdFVCIsIkxCX0RFU0MiLCJMQl9TVEFSX1RJVExFIiwiTEJfU1RBUl9ERVNDIiwiTEJfU1RBUl9USU1FIiwiTEJfU1RBUlMiLCJMQl9TQ09SRV9USVRMRSIsIkxCX1NDT1JFX1RJTUVTIiwiTEJfU0NPUkVTIiwiTEJfV0lOTkVSX1RJVExFIiwiTEJfV0lOTkVSX0dSQU5EIiwiTEJfV0lOTkVSX1BSRU1JVU0iLCJMQl9USElTX1dFRUsiLCJMQl9MQVNUX1dFRUsiLCJMQl9QRVJJT0QiLCJHR19HSUZUIiwiR0dfR0lGVF9TUEVDSUFMIiwiR0dfR1VJREUiLCJHR19HVUlERV8wMSIsIkdHX0dVSURFXzAyIiwiR0dfR1VJREVfMDMiLCJHR19HVUlERV8wNCIsIkhJU1RPUllfREVTQ18xIiwiSElTVE9SWV9ERVNDXzIiLCJISVNUT1JZX0RFU0NfMyIsIkhJU1RPUllfVFVSTiIsIkhJU1RPUllfVFVSTlMiLCJISVNUT1JZX1BSSVpFIiwiSElTVE9SWV9HSUZUIiwiSElTVE9SWV9MVUNLWV9DT0RFIiwiSElTVE9SWV9MVUNLWV9DT0RFX0RFU0MiLCJISVNUT1JZX0dJRlRfQ09ERSIsIkhJU1RPUllfR0lGVF9DT0RFX0RFU0NfMSIsIkhJU1RPUllfR0lGVF9DT0RFX0RFU0NfMiIsIkhJU1RPUllfR0lGVF9DT0RFX0RFU0NfMyIsIkVORF9HQU1FT1ZFUiIsIkVORF9CRVNUX1NDT1JFIiwiRU5EX1JFUExBWSIsIkVORF9QUklaRSIsIlRVVE9SX1RJVExFIiwiVFVUT1JfREVTQ18xIiwiVFVUT1JfREVTQ18yIiwiVFVUT1JfREVTQ18zIiwiR0FNRV9NT0RFIiwiR0FNRV9NT0RFX1ZPSUNFIiwiR0FNRV9NT0RFX1ZPSUNFX0RFU0NfMSIsIkdBTUVfTU9ERV9WT0lDRV9ERVNDXzIiLCJHQU1FX01PREVfVk9JQ0VfREVTQ18zIiwiR0FNRV9NT0RFX0hBTkQiLCJHQU1FX01PREVfSEFORF9ERVNDIiwiV0FSTklOR19WT0lDRV8xIiwiV0FSTklOR19WT0lDRV8yIiwiV0FSTklOR19WT0lDRV8zIiwiR0FNRV9HTyIsIkdBTUVfV0FWRSIsIkdBTUVfRU5FTVlfTk9USUNFIiwiR0FNRV9XQVRFUl9OT1RJQ0UiLCJHQU1FX1JFVklWRV9USVRMRSIsIkdBTUVfUkVWSVZFX0RFU0MiLCJFTkVNWV9DT01NSU5HX1RVVCIsIlRVVE9SX0RFU0NfM19JT1MiLCJHQU1FX01PREVfVk9JQ0VfREVTQ180IiwiU1RPUkVfQlVZX1dJVEhfNTAwIiwiSElTVE9SWV9HSUZUX0NPREVfREVTQ180IiwiTEJfV0lOTkVSX1RJVExFXzIiLCJXQVJOSU5HX0RFU0MiLCJVSV9FUlJPUiIsIlVJX0NBTkNFTCIsIlVJX1JFVFJZIiwiVUlfUVVJVCIsIlVJX1dST05HIiwiVFVUT1JfREVTQ18zX0lPU19IQU5EIiwiR0FNRV9NT0RFX0hBTkRfVEFQX0RFU0MiLCJVSV9OT19NT1JFX1RVUk4iLCJFTkRHQU1FX0VSUk9SX1BSSVpFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDZkMsRUFBQUEsS0FBSyxFQUFFO0FBQUVDLElBQUFBLEVBQUUsRUFBRSxFQUFOO0FBQVVDLElBQUFBLEVBQUUsRUFBRSxFQUFkO0FBQWtCQyxJQUFBQSxFQUFFLEVBQUU7QUFBdEIsR0FEUTtBQUVmQyxFQUFBQSxnQkFBZ0IsRUFBRTtBQUNoQkgsSUFBQUEsRUFBRSxFQUFFLGFBRFk7QUFFaEJDLElBQUFBLEVBQUUsRUFBRSxpQkFGWTtBQUdoQkMsSUFBQUEsRUFBRSxFQUFFO0FBSFksR0FGSDtBQU9mRSxFQUFBQSxrQkFBa0IsRUFBRTtBQUNsQkosSUFBQUEsRUFBRSxFQUFFLG9CQURjO0FBRWxCQyxJQUFBQSxFQUFFLEVBQUUsa0JBRmM7QUFHbEJDLElBQUFBLEVBQUUsRUFBRTtBQUhjLEdBUEw7QUFZZkcsRUFBQUEsaUJBQWlCLEVBQUU7QUFDakJMLElBQUFBLEVBQUUsRUFBRSxjQURhO0FBRWpCQyxJQUFBQSxFQUFFLEVBQUUsY0FGYTtBQUdqQkMsSUFBQUEsRUFBRSxFQUFFO0FBSGEsR0FaSjtBQWlCZkksRUFBQUEsa0JB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RUFBRSxFQUFFO0FBSEksR0FyYUs7QUEwYWZ1SCxFQUFBQSxxQkFBcUIsRUFBRTtBQUNyQnpILElBQUFBLEVBQUUsRUFBRSwwQkFEaUI7QUFFckJDLElBQUFBLEVBQUUsRUFBRSw0QkFGaUI7QUFHckJDLElBQUFBLEVBQUUsRUFBRTtBQUhpQixHQTFhUjtBQSthZndILEVBQUFBLHVCQUF1QixFQUFFO0FBQ3ZCMUgsSUFBQUEsRUFBRSxFQUFFLGFBRG1CO0FBRXZCQyxJQUFBQSxFQUFFLEVBQUUsbUJBRm1CO0FBR3ZCQyxJQUFBQSxFQUFFLEVBQUU7QUFIbUIsR0EvYVY7QUFvYmZ5SCxFQUFBQSxlQUFlLEVBQUU7QUFDZjNILElBQUFBLEVBQUUsRUFBRSw0Q0FEVztBQUVmQyxJQUFBQSxFQUFFLEVBQUUsc0RBRlc7QUFHZkMsSUFBQUEsRUFBRSxFQUFFO0FBSFcsR0FwYkY7QUF5YmYwSCxFQUFBQSxtQkFBbUIsRUFBRTtBQUNuQjVILElBQUFBLEVBQUUsRUFBRSxtRUFEZTtBQUVuQkMsSUFBQUEsRUFBRSxFQUFFLGlHQUZlO0FBR25CQyxJQUFBQSxFQUFFLEVBQUU7QUFIZTtBQXpiTixDQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgRU1QVFk6IHsgRU46IFwiXCIsIE1ZOiBcIlwiLCBNVTogXCJcIiB9LFxyXG4gIENPTU1PTl9ISUdIU0NPUkU6IHtcclxuICAgIEVOOiBcIkhpZ2ggU2NvcmU6XCIsXHJcbiAgICBNWTogXCLhgKHhgLvhgJnhgIThgLfhgLnhgIbhgK/hgLbhgLjhgJvhgJnhgL3hgJDhgLlcIixcclxuICAgIE1VOiBcIuGAoeGAmeGAvOGAhOGAt+GAuuGAhuGAr+GAtuGAuOGAm+GAmeGAvuGAkOGAulwiLFxyXG4gIH0sXHJcbiAgQ09NTU9OX1NUT1JFX0VRVUlQOiB7XHJcbiAgICBFTjogXCJTdG9yZSAmXFxuRXF1aXBtZW50XCIsXHJcbiAgICBNWTogXCLhgJXhgIXhgaXhgIrhgLnhgLjhgIXhgJDhgK3hgK/hgLjhgIbhgK3hgK/hgIThgLlcIixcclxuICAgIE1VOiBcIuGAleGAheGAueGAheGAiuGAuuGAuOGAheGAkOGAreGAr+GAuOGAhuGAreGAr+GAhOGAulwiLFxyXG4gIH0sXHJcbiAgQ09NTU9OX0dJRlRfR1VJREU6IHtcclxuICAgIEVOOiBcIkdpZnQgJiBHdWlkZVwiLFxyXG4gICAgTVk6IFwiR2lmdCAmIEd1aWRlXCIsXHJcbiAgICBNVTogXCJHaWZ0ICYgR3VpZGVcIixcclxuICB9LFxyXG4gIENPTU1PTl9MRUFERVJCT0FSRDoge1xyXG4gICAgRU46IFwiTGVhZGVyIGJvYXJkXCIsXHJcbiAgICBNWTogXCJMZWFkZXIgYm9hcmRcIixcclxuICAgIE1VOiBcIkxlYWRlciBib2FyZFwiLFxyXG4gIH0sXHJcbiAgQ09NTU9OX0hJU1RPUlk6IHtcclxuICAgIEVOOiBcIllvdXIgSGlzdG9yeVwiLFxyXG4gICAgTVk6IFwiWW91ciBIaXN0b3J5XCIsXHJcbiAgICBNVTogXCJZb3VyIEhpc3RvcnlcIixcclxuICB9LFxyXG4gIENPTU1PTl9DT0xMRUNUSU9OOiB7XHJcbiAgICBFTjogXCJZb3VyIENvbGxlY3Rpb25cIixcclxuICAgIE1ZOiBcIkNvbGxlY3Rpb25cIixcclxuICAgIE1VOiBcIkNvbGxlY3Rpb25cIixcclxuICB9LFxyXG4gIENPTU1PTl9TQ09SRTogeyBFTjogXCJTY29yZTpcIiwgTVk6IFwi4YCb4YCZ4YC94YCQ4YC5XCIsIE1VOiBcIuGAm+GAmeGAvuGAkOGAulwiIH0sXHJcbiAgQ09NTU9OX1NLSUxMOiB7IEVOOiBcIlNraWxsXCIsIE1ZOiBcIlNraWxsXCIsIE1VOiBcIlNraWxsXCIgfSxcclxuICBDT01NT05fQVRUQUNLOiB7IEVOOiBcIkF0dGFja1wiLCBNWTogXCJBdHRhY2tcIiwgTVU6IFwiQXR0YWNrXCIgfSxcclxuICBDT01NT05fQ09PTERPV046IHsgRU46IFwiQ29vbCBkb3duOlwiLCBNWTogXCJDb29sIGRvd246XCIsIE1VOiBcIkNvb2wgZG93bjpcIiB9LFxyXG4gIENPTU1PTl9YUDogeyBFTjogXCJYUFwiLCBNWTogXCJYUFwiLCBNVTogXCJYUFwiIH0sXHJcbiAgQ09NTU9OX0xWOiB7IEVOOiBcIkxWLlwiLCBNWTogXCJMVi5cIiwgTVU6IFwiTFYuXCIgfSxcclxuICBDT01NT05fTEVWRUxfVVA6IHsgRU46IFwiTGV2ZWwgdXAhISFcIiwgTVk6IFwiTGV2ZWwg4YCQ4YCt4YCv4YC4XCIsIE1VOiBcIkxldmVsIOGAkOGAreGAr+GAuFwiIH0sXHJcbiAgQ09NTU9OX0VRVUlQOiB7IEVOOiBcIkVRVUlQIE5PV1wiLCBNWTogXCLhgJ7hgK/hgLbhgLjhgJnhgIrhgLlcIiwgTVU6IFwi4YCe4YCv4YC24YC44YCZ4YCK4YC6XCIgfSxcclxuICBDT01NT05fVU5FUVVJUDogeyBFTjogXCJVTkVRVUlQXCIsIE1ZOiBcIuGAmeGAnuGAr+GAtuGAuOGAleGAq1wiLCBNVTogXCLhgJnhgJ7hgK/hgLbhgLjhgJXhgKtcIiB9LFxyXG4gIENPTU1PTl9ZRVM6IHsgRU46IFwiWWVzXCIsIE1ZOiBcIlllc1wiLCBNVTogXCJZZXNcIiB9LFxyXG4gIENPTU1PTl9OTzogeyBFTjogXCJOb1wiLCBNWTogXCJOb1wiLCBNVTogXCJOb1wiIH0sXHJcbiAgQ09NTU9OX09LOiB7IEVOOiBcIk9LXCIsIE1ZOiBcIk9LXCIsIE1VOiBcIk9LXCIgfSxcclxuICBDT01NT05fQ09QWTogeyBFTjogXCJDb3B5XCIsIE1ZOiBcIuGAgOGAsOGAuOGAmuGAsOGAmeGAiuGAuVwiLCBNVTogXCLhgIDhgLDhgLjhgJrhgLDhgJnhgIrhgLpcIiB9LFxyXG4gIENPTU1PTl9UVVJOX1JFTUFJTjoge1xyXG4gICAgRU46IFwiRGFpbHkgcmVtYWluaW5nIHR1cm5zOlwiLFxyXG4gICAgTVk6IFwi4YCa4YCx4YCU4YKU4YCA4YCF4YCs4YC44YCB4YC84YCE4YC34YC5XCIsXHJcbiAgICBNVTogXCLhgJrhgJThgLHhgLfhgIDhgIXhgKzhgLjhgIHhgL3hgIThgLfhgLpcIixcclxuICB9LFxyXG4gIENPTU1PTl9UVVJOX1RPVEFMOiB7XHJcbiAgICBFTjogXCJUb3RhbCB0dXJuczpcIixcclxuICAgIE1ZOiBcIuGAheGAr+GAheGAr+GAseGAleGAq+GAhOGAueGAuOGAgOGAheGArOGAuOGAgeGAvOGAhOGAt+GAuVwiLFxyXG4gICAgTVU6IFwi4YCF4YCv4YCF4YCv4YCV4YCx4YCr4YCE4YC64YC44YCA4YCF4YCs4YC44YCB4YC94YCE4YC34YC6XCIsXHJcbiAgfSxcclxuICBDT01NT05fWU9VUl9TVElDSzoge1xyXG4gICAgRU46IFwiWW91ciBTdGlja3M6XCIsXHJcbiAgICBNWTogXCLhgJ7hgIThgLfhgLlzdGlja+GAmeGAuuGArOGAuFwiLFxyXG4gICAgTVU6IFwi4YCe4YCE4YC34YC6c3RpY2vhgJnhgLvhgKzhgLhcIixcclxuICB9LFxyXG4gIENPTU1PTl9OT19PRjogeyBFTjogXCJOby5cIiwgTVk6IFwiTm8uXCIsIE1VOiBcIk5vLlwiIH0sXHJcbiAgQ09NTU9OX0RBVEVfVElNRTogeyBFTjogXCJEYXRlIC8gVGltZVwiLCBNWTogXCLhgJvhgIDhgLkv4YCh4YCB4YC64YCt4YCU4YC5XCIsIE1VOiBcIuGAm+GAgOGAui/hgKHhgIHhgLvhgK3hgJThgLpcIiB9LFxyXG4gIFBMQVlFUl9JRDogeyBFTjogXCJZb3VyIElEOlwiLCBNWTogXCLhgJ7hgIThgLfhgLkgSURcIiwgTVU6IFwi4YCe4YCE4YC34YC6IElEXCIgfSxcclxuICBQTEFZRVJfU1RBUjoge1xyXG4gICAgRU46IFwiQ29sbGVjdGVkIFN0YXJzXCIsXHJcbiAgICBNWTogXCLhgJvhgJvhgL3hgK3hgJHhgKzhgLjhgLHhgJ7hgKzhgb7hgIDhgJrhgLnhgJnhgLrhgKzhgLhcIixcclxuICAgIE1VOiBcIuGAm+GAm+GAvuGAreGAkeGArOGAuOGAnuGAseGArOGAgOGAvOGAmuGAuuGAmeGAu+GArOGAuFwiLFxyXG4gIH0sXHJcbiAgUExBWUVSX1JBTks6IHsgRU46IFwiQ3VycmVudCBSYW5rOlwiLCBNWTogXCLhgJzhgIDhgLnhgJvhgL3hgK3hgKHhgIbhgIThgLfhgLlcIiwgTVU6IFwi4YCc4YCA4YC64YCb4YC+4YCt4YCh4YCG4YCE4YC34YC6XCIgfSxcclxuICBCT09TVEVSX1RJVExFOiB7XHJcbiAgICBFTjogXCJCb29zdGVyIHBhY2tcIixcclxuICAgIE1ZOiBcIuGAoeGAhOGAueGAoeGArOGAuOGAkOGAreGAr+GAuCBQYWNrXCIsXHJcbiAgICBNVTogXCLhgKHhgIThgLrhgKHhgKzhgLjhgJDhgK3hgK/hgLggUGFja1wiLFxyXG4gIH0sXHJcbiAgQk9PU1RFUl9USVRMRV8yOiB7XHJcbiAgICBFTjogXCJCdXkgc3RpY2tzXCIsXHJcbiAgICBNWTogXCJTdGlja+GAmeGAuuGArOGAuOGAneGAmuGAueGAmeGAiuGAuVwiLFxyXG4gICAgTVU6IFwiU3RpY2vhgJnhgLvhgKzhgLjhgJ3hgJrhgLrhgJnhgIrhgLpcIixcclxuICB9LFxyXG4gIEJPT1NURVJfREVTQzoge1xyXG4gICAgRU46IFwiRm9yIHRoaXMgdHVybiBvbmx5XCIsXHJcbiAgICBNWTogXCLhgJrhgIHhgK/hgIDhgIXhgKzhgLjhgIHhgLzhgIThgLfhgLnhgKHhgJDhgLzhgIDhgLnhgJ7hgKxcIixcclxuICAgIE1VOiBcIuGAmuGAgeGAr+GAgOGAheGArOGAuOGAgeGAveGAhOGAt+GAuuGAoeGAkOGAveGAgOGAuuGAnuGArFwiLFxyXG4gIH0sXHJcbiAgQk9PU1RFUl9IUDogeyBFTjogXCJNYXggSFBcIiwgTVk6IFwiTWF4IEhQXCIsIE1VOiBcIk1heCBIUFwiIH0sXHJcbiAgQk9PU1RFUl9DT05GSVJNOiB7XHJcbiAgICBFTjogXCJTcGVuZCAlZCBLcyBtYWluIGxhbGFuY2VcXG50byBidXkgJWQgU3RpY2tzP1wiLFxyXG4gICAgTVk6IFwiJWQgU3RpY2sg4YCd4YCa4YC54YCa4YCw4YCb4YCU4YC5IOGAnOGAgOGAueGAgOGAuuGAlOGAueGAseGAhOGAvFxcbiVkIOGAgOGAuuGAleGAueGAgOGAreGAr+GAoeGAnuGAr+GAtuGAuOGAu+GAleGAs+GAmeGAiuGAuVwiLFxyXG4gICAgTVU6IFwiJWQgU3RpY2sg4YCd4YCa4YC64YCa4YCw4YCb4YCU4YC6IOGAnOGAgOGAuuGAgOGAu+GAlOGAuuGAhOGAveGAsVxcbiVkIOGAgOGAu+GAleGAuuGAgOGAreGAr+GAoeGAnuGAr+GAtuGAuOGAleGAvOGAr+GAmeGAiuGAulwiLFxyXG4gIH0sXHJcbiAgU1RPUkVfREVTQzoge1xyXG4gICAgRU46IFwiQnV5IGFuZCBlcXVpcCBza2lsbHMgZm9yIHNwZWNpYWwgcG93ZXJzXCIsXHJcbiAgICBNWTogXCLhgKHhgJHhgLDhgLjhgJXhgKvhgJ3hgKvhgJnhgLrhgKzhgLjhgJvhgLHhgKHhgKzhgIThgLnhgIDhgLzhgb3hgJnhgLnhgLjhgIDhgLrhgIThgLnhgJnhgojhgJnhgLrhgKzhgLjhgJ3hgJrhgLnhgJrhgLDhgJXhgKtcIixcclxuICAgIE1VOiBcIuGAoeGAkeGAsOGAuOGAleGAq+GAneGAq+GAmeGAu+GArOGAuOGAm+GAoeGAseGArOGAhOGAuuGAgOGAu+GAveGAmeGAuuGAuOGAgOGAu+GAhOGAuuGAmeGAvuGAr+GAmeGAu+GArOGAuOGAneGAmuGAuuGAmuGAsOGAleGAq1wiLFxyXG4gIH0sXHJcbiAgU1RPUkVfQlVZX1dJVEg6IHtcclxuICAgIEVOOiBcIkJ1eSB3aXRoIDEwMDBcIixcclxuICAgIE1ZOiBcIuGBgeGBgOGBgOGBgOGAu+GAluGAhOGAt+GAueGAneGAmuGAueGAmeGAiuGAuVwiLFxyXG4gICAgTVU6IFwi4YGB4YGA4YGA4YGA4YCW4YC84YCE4YC34YC64YCd4YCa4YC64YCZ4YCK4YC6XCIsXHJcbiAgfSxcclxuICBTVE9SRV9UVVJOXzE6IHtcclxuICAgIEVOOiBcIkdldCAzMCB0dXJuc1wiLFxyXG4gICAgTVk6IFwi4YCA4YCF4YCs4YC44YCB4YC84YCE4YC34YC5IOGBg+GBgOGAmuGAsOGAmeGAiuGAuVwiLFxyXG4gICAgTVU6IFwi4YCA4YCF4YCs4YC44YCB4YC94YCE4YC34YC6IOGBg+GBgOGAmuGAsOGAmeGAiuGAulwiLFxyXG4gIH0sXHJcbiAgU1RPUkVfVFVSTl8yOiB7XHJcbiAgICBFTjogXCJOb3QgYWZmZWN0IGRhaWx5IGxpbWl0XCIsXHJcbiAgICBNWTogXCLhgLHhgJThgpThgIXhgKXhgLnhgIDhgIXhgKzhgLjhgIHhgLzhgIThgLfhgLnhgJ7hgJDhgLnhgJnhgL3hgJDhgLlcXG7hgIHhgLrhgIDhgLnhgIDhgK3hgK/hgJnhgLHhgLvhgJXhgKzhgIThgLnhgLjhgJzhgLLhgo/hgK3hgK/hgIThgLnhgJXhgKtcIixcclxuICAgIE1VOiBcIuGAlOGAseGAt+GAheGAieGAuuGAgOGAheGArOGAuOGAgeGAveGAhOGAt+GAuuGAnuGAkOGAuuGAmeGAvuGAkOGAulxcbuGAgeGAu+GAgOGAuuGAgOGAreGAr+GAmeGAleGAvOGAseGArOGAhOGAuuGAuOGAnOGAsuGAlOGAreGAr+GAhOGAuuGAleGAq1wiLFxyXG4gIH0sXHJcbiAgU1RPUkVfRlJFRVpFOiB7XHJcbiAgICBFTjogXCJGcmVlemUgYWxsXFxuZW5lbWllcyBmb3IgMnNcIixcclxuICAgIE1ZOiBcIuGAm+GAlOGAueGAnuGAsOGAmeGAuuGArOGAuCAy4YCF4YCA4YGg4YCU4YKU4YC5XFxu4YCx4YCb4YCB4YCy4YCe4YC84YCs4YC44YCx4YCF4YC74YCB4YCE4YC54YC4XCIsXHJcbiAgICBNVTogXCLhgJvhgJThgLrhgJ7hgLDhgJnhgLvhgKzhgLggMuGAheGAgOGAueGAgOGAlOGAt+GAulxcbuGAm+GAseGAgeGAsuGAnuGAveGArOGAuOGAheGAseGAgeGAvOGAhOGAuuGAuFwiLFxyXG4gIH0sXHJcbiAgU1RPUkVfU0xPVzoge1xyXG4gICAgRU46IFwiU2xvdyBlbmVtaWVzXFxuNzAlIGZvciA1c1wiLFxyXG4gICAgTVk6IFwi4YCb4YCU4YC54YCe4YCw4YKU4YCc4YKI4YCV4YC54YCb4YC94YCs4YC44YCZ4YKIIDcwJSDhgIHhgJThgpThgLlcXG414YCF4YCA4YGg4YCU4YKU4YC54YG+4YCA4YCs4YCx4YKP4YC94YC44YCe4YC84YCs4YC44YCx4YCF4YC74YCB4YCE4YC54YC4XCIsXHJcbiAgICBNVTogXCLhgJvhgJThgLrhgJ7hgLDhgLfhgJzhgL7hgK/hgJXhgLrhgJvhgL7hgKzhgLjhgJnhgL7hgK8gNzAl4YCB4YCU4YC34YC6XFxuNeGAheGAgOGAueGAgOGAlOGAt+GAuuGAgOGAvOGArOGAlOGAvuGAseGAuOGAnuGAveGArOGAuOGAheGAseGAgeGAvOGAhOGAuuGAuFwiLFxyXG4gIH0sXHJcbiAgU1RPUkVfQVRUQUNLOiB7XHJcbiAgICBFTjogXCIrNTAlIEF0dGFja1xcbmZvciA1c1wiLFxyXG4gICAgTVk6IFwiNeGAheGAgOGBoOGAlOGClOGAueGBvuGAgOGArCDhgJDhgK3hgK/hgIDhgLnhgIHhgK3hgK/hgIDhgLnhgJnhgojhgKHhgKzhgLhcXG41MCXhgJDhgK3hgK/hgLjhgJDhgJDhgLnhgLHhgIXhgLvhgIHhgIThgLnhgLhcIixcclxuICAgIE1VOiBcIjXhgIXhgIDhgLnhgIDhgJThgLfhgLrhgIDhgLzhgKwg4YCQ4YCt4YCv4YCA4YC64YCB4YCt4YCv4YCA4YC64YCZ4YC+4YCv4YCh4YCs4YC4XFxuNTAl4YCQ4YCt4YCv4YC44YCQ4YCQ4YC64YCF4YCx4YCB4YC84YCE4YC64YC4XCIsXHJcbiAgfSxcclxuICBTVE9SRV9JTlZJU0lCTEU6IHtcclxuICAgIEVOOiBcIkJlIGludmlzaWJsZVxcbmZvciA1c1wiLFxyXG4gICAgTVk6IFwiNeGAheGAgOGBoOGAlOGClOGAueGBvuGAgOGArFxcbuGAgOGAreGAr+GAmuGAueGAseGAluGAuuGArOGAgOGAueGCj+GAreGAr+GAhOGAueGAu+GAgeGAhOGAueGAuFwiLFxyXG4gICAgTVU6IFwiNeGAheGAgOGAueGAgOGAlOGAt+GAuuGAgOGAvOGArFxcbuGAgOGAreGAr+GAmuGAuuGAluGAu+GAseGArOGAgOGAuuGAlOGAreGAr+GAhOGAuuGAgeGAvOGAhOGAuuGAuFwiLFxyXG4gIH0sXHJcbiAgQ09MTEVDVElPTl9ERVNDXzE6IHtcclxuICAgIEVOOiBcIkNvbGxlY3QgYWxsIDEwIHNpbXMgdG8gd2luXCIsXHJcbiAgICBNWTogXCLhgIbhgIThgLnhgLjhgIDhgJLhgLkg4YGB4YGA4YCB4YCv4YCF4YCv4YCx4YCG4YCs4YCE4YC54YC44YG/4YCV4YCu4YC4XCIsXHJcbiAgICBNVTogXCLhgIbhgIThgLrhgLjhgIDhgJLhgLog4YGB4YGA4YCB4YCv4YCF4YCv4YCG4YCx4YCs4YCE4YC64YC44YCV4YC84YCu4YC4XCIsXHJcbiAgfSxcclxuICBDT0xMRUNUSU9OX0RFU0NfMjoge1xyXG4gICAgRU46IFwiMjAsMDAwLDAwMCBLeWF0c1wiLFxyXG4gICAgTVk6IFwiMjAsMDAwLDAwMCBLeWF0c1wiLFxyXG4gICAgTVU6IFwiMjAsMDAwLDAwMCBLeWF0c1wiLFxyXG4gIH0sXHJcbiAgQ09MTEVDVElPTl9ERVNDXzM6IHtcclxuICAgIEVOOiBcImFzIEdyYW5kIFByaXplLlwiLFxyXG4gICAgTVk6IFwi4YCA4YCt4YCv4YCG4YCv4YKA4YCA4YCu4YC44YCa4YCw4YCZ4YCK4YC5XCIsXHJcbiAgICBNVTogXCLhgIDhgK3hgK/hgIbhgK/hgIDhgLzhgK7hgLjhgJrhgLDhgJnhgIrhgLpcIixcclxuICB9LFxyXG4gIENPTExFQ1RJT05fREVTQ180OiB7XHJcbiAgICBFTjogXCJQbGF5IG1vcmUgdG8gZ2V0IG1vcmUgY2hhbmNlXCIsXHJcbiAgICBNWTogXCLhgKHhgJHhgLDhgLjhgIbhgK/hgJnhgLrhgKzhgLjhgJvhgJrhgLDhgo/hgK3hgK/hgIThgLnhgJnhgIrhgLfhgLlcIixcclxuICAgIE1VOiBcIuGAoeGAkeGAsOGAuOGAhuGAr+GAmeGAu+GArOGAuOGAm+GAmuGAsOGAlOGAreGAr+GAhOGAuuGAmeGAiuGAt+GAulwiLFxyXG4gIH0sXHJcbiAgQ09MTEVDVElPTl9ERVNDXzU6IHtcclxuICAgIEVOOiBcInRvIHdpbiB0aGVzZSBhbWF6aW5nIHByaXplcyFcIixcclxuICAgIE1ZOiBcIuGAoeGAgeGAvOGAhOGAt+GAueGAoeGAseGAm+GAuOGAleGAreGAr+GAm+GAseGAoeGArOGAhOGAueGAleGAreGAr+GAgOGAheGArOGAuOGAleGAq1wiLFxyXG4gICAgTVU6IFwi4YCh4YCB4YC94YCE4YC34YC64YCh4YCb4YCx4YC44YCV4YCt4YCv4YCb4YCh4YCx4YCs4YCE4YC64YCV4YCt4YCv4YCA4YCF4YCs4YC44YCV4YCrXCIsXHJcbiAgfSxcclxuICBDT0xMRUNUSU9OX0RFU0NfNjoge1xyXG4gICAgRU46IFwidG8gd2luIG1vcmUgcHJpemVzIVwiLFxyXG4gICAgTVk6IFwi4YCh4YCB4YC84YCE4YC34YC54YCh4YCx4YCb4YC44YCV4YCt4YCv4YCb4YCx4YCh4YCs4YCE4YC54YCV4YCt4YCv4YCA4YCF4YCs4YC44YCV4YCrXCIsXHJcbiAgICBNVTogXCLhgKHhgIHhgL3hgIThgLfhgLrhgKHhgJvhgLHhgLjhgJXhgK3hgK/hgJvhgKHhgLHhgKzhgIThgLrhgJXhgK3hgK/hgIDhgIXhgKzhgLjhgJXhgKtcIixcclxuICB9LFxyXG4gIENPTExFQ1RJT05fREVTQ183OiB7XHJcbiAgICBFTjogXCJDaGVjayB5b3VyIGdyYW5kIHByaXplIGNvbGxlY3Rpb24gcHJvZ3Jlc3MhXCIsXHJcbiAgICBNWTogXCLhgKHhgJHhgLDhgLjhgIbhgK/hgJvhgJrhgLDhgJvhgJThgLnhgIXhgK/hgLHhgIbhgKzhgIThgLnhgLjhgJnhgojhgJnhgLrhgKzhgLhcIixcclxuICAgIE1VOiBcIuGAoeGAkeGAsOGAuOGAhuGAr+GAm+GAmuGAsOGAm+GAlOGAuuGAheGAr+GAhuGAseGArOGAhOGAuuGAuOGAmeGAvuGAr+GAmeGAu+GArOGAuFwiLFxyXG4gIH0sXHJcbiAgQ09MTEVDVElPTl9UQVJHRVQ6IHtcclxuICAgIEVOOiBcIllvdXIgVGFyZ2V0XCIsXHJcbiAgICBNWTogXCLhgJ7hgIThgLfhgLnhgJvhgIrhgLnhgJnhgL3hgJThgLnhgLjhgIHhgLrhgIDhgLlcIixcclxuICAgIE1VOiBcIuGAnuGAhOGAt+GAuuGAm+GAiuGAuuGAmeGAvuGAlOGAuuGAuOGAgeGAu+GAgOGAulwiLFxyXG4gIH0sXHJcbiAgTEJfREVTQzoge1xyXG4gICAgRU46IFwiU2VlIGhvdyB5b3UgY29tcGV0ZSB3aXRoIG90aGVyIHBsYXllcnMhXCIsXHJcbiAgICBNWTogXCLhgKHhgLvhgIHhgKzhgLjhgIDhgIXhgKzhgLjhgJ7hgJnhgKzhgLjhgLHhgJDhgLzhgo/hgL3hgIThgLfhgLnhgJrhgL3hgKXhgLnhgb/hgJXhgK3hgLPhgIThgLnhgJnhgojhgJvhgJzhgJLhgLlcIixcclxuICAgIE1VOiBcIuGAoeGAgeGAvOGArOGAuOGAgOGAheGArOGAuOGAnuGAmeGArOGAuOGAkOGAveGAseGAlOGAvuGAhOGAt+GAuuGAmuGAvuGAieGAuuGAleGAvOGAreGAr+GAhOGAuuGAmeGAvuGAr+GAm+GAnOGAkuGAulwiLFxyXG4gIH0sXHJcbiAgTEJfU1RBUl9USVRMRTogeyBFTjogXCJUT1AgU1RBUlwiLCBNWTogXCJUT1AgU1RBUlwiLCBNVTogXCJUT1AgU1RBUlwiIH0sXHJcbiAgTEJfU1RBUl9ERVNDOiB7XHJcbiAgICBFTjogXCJUb3AgMTAgd2Vla2x5IHN0YXIgY29sbGVjdG9ycyB3aWxsIHJlY2VpdmUgMTAsMDAwS3MgRW1vbmV5IGVhY2hcIixcclxuICAgIE1ZOiBcIuGAmuGAgeGAr+GAoeGAleGAkOGAueGAoeGAkOGAvOGAgOGAueGAkeGAreGAleGAueGAkOGAlOGAueGAuOGBvuGAgOGAmuGAueGAoeGAmeGAuuGArOGAuOGAheGAr+GAhuGAryDhgYHhgYDhgLHhgJrhgKzhgIDhgLlcXG7hgIXhgKzhgJvhgIThgLnhgLjhgJDhgLzhgIThgLnhgJXhgKvhgJ3hgIThgLnhgJXhgKvhgIAgRW1vbmV5IOGBgeGBgCzhgYDhgYDhgYDhgIDhgLrhgJXhgLnhgIXhgK7hgJvhgJvhgL3hgK3hgJXhgKvhgJnhgIrhgLnhgYtcIixcclxuICAgIE1VOiBcIuGAmuGAgeGAr+GAoeGAleGAkOGAuuGAoeGAkOGAveGAgOGAuuGAkeGAreGAleGAuuGAkOGAlOGAuuGAuOGAgOGAvOGAmuGAuuGAoeGAmeGAu+GArOGAuOGAheGAr+GAhuGAryDhgYHhgYDhgJrhgLHhgKzhgIDhgLpcXG7hgIXhgKzhgJvhgIThgLrhgLjhgJDhgL3hgIThgLrhgJXhgKvhgJ3hgIThgLrhgJXhgKvhgIAgRW1vbmV5IOGBgeGBgCzhgYDhgYDhgYDhgIDhgLvhgJXhgLrhgIXhgK7hgJvhgJvhgL7hgK3hgJXhgKvhgJnhgIrhgLrhgYtcIixcclxuICB9LFxyXG4gIExCX1NUQVJfVElNRTogeyBFTjogXCJTdGFyIFRpbWVzXCIsIE1ZOiBcIlN0YXIgVGltZXNcIiwgTVU6IFwiU3RhciBUaW1lc1wiIH0sXHJcbiAgTEJfU1RBUlM6IHsgRU46IFwiU3RhcnNcIiwgTVk6IFwiU3RhcnNcIiwgTVU6IFwiU3RhcnNcIiB9LFxyXG4gIExCX1NDT1JFX1RJVExFOiB7IEVOOiBcIlRPUCBTQ09SRVwiLCBNWTogXCJUT1AgU0NPUkVcIiwgTVU6IFwiVE9QIFNDT1JFXCIgfSxcclxuICBMQl9TQ09SRV9USU1FUzogeyBFTjogXCJTY29yZSB0aW1lXCIsIE1ZOiBcIlNjb3JlIHRpbWVcIiwgTVU6IFwiU2NvcmUgdGltZVwiIH0sXHJcbiAgTEJfU0NPUkVTOiB7IEVOOiBcIlNjb3JlXCIsIE1ZOiBcIlNjb3JlXCIsIE1VOiBcIlNjb3JlXCIgfSxcclxuICBMQl9XSU5ORVJfVElUTEU6IHtcclxuICAgIEVOOiBcIldJTk5FUiBMSVNUXCIsXHJcbiAgICBNWTogXCLhgIDhgLbhgJHhgLDhgLjhgJvhgL3hgIThgLnhgJnhgLrhgKzhgLhcIixcclxuICAgIE1VOiBcIuGAgOGAtuGAkeGAsOGAuOGAm+GAvuGAhOGAuuGAmeGAu+GArOGAuFwiLFxyXG4gIH0sXHJcbiAgTEJfV0lOTkVSX0dSQU5EOiB7XHJcbiAgICBFTjogXCJHcmFuZCBQcml6ZXNcIixcclxuICAgIE1ZOiBcIuGAkeGAreGAleGAueGAkOGAlOGAueGAuOGAhuGAr+GAmeGAuuGArOGAuFwiLFxyXG4gICAgTVU6IFwi4YCR4YCt4YCV4YC64YCQ4YCU4YC64YC44YCG4YCv4YCZ4YC74YCs4YC4XCIsXHJcbiAgfSxcclxuICBMQl9XSU5ORVJfUFJFTUlVTToge1xyXG4gICAgRU46IFwiUHJlbWl1bSBQcml6ZXNcIixcclxuICAgIE1ZOiBcIuGAoeGAkeGAsOGAuOGAhuGAr+GAmeGAuuGArOGAuFwiLFxyXG4gICAgTVU6IFwi4YCh4YCR4YCw4YC44YCG4YCv4YCZ4YC74YCs4YC4XCIsXHJcbiAgfSxcclxuICBMQl9USElTX1dFRUs6IHsgRU46IFwiVGhpcyBXZWVrXCIsIE1ZOiBcIuGAmuGAgeGAr+GAoeGAleGAq+GAkOGAuVwiLCBNVTogXCLhgJrhgIHhgK/hgKHhgJXhgKvhgJDhgLpcIiB9LFxyXG4gIExCX0xBU1RfV0VFSzogeyBFTjogXCJMYXN0IFdlZWtcIiwgTVk6IFwi4YCa4YCB4YCE4YC54YCh4YCV4YCr4YCQ4YC5XCIsIE1VOiBcIuGAmuGAgeGAhOGAuuGAoeGAleGAq+GAkOGAulwiIH0sXHJcbiAgTEJfUEVSSU9EOiB7IEVOOiBcIlBlcmlvZDpcIiwgTVk6IFwi4YCh4YCB4YC64YCt4YCU4YC5XCIsIE1VOiBcIuGAoeGAgeGAu+GAreGAlOGAulwiIH0sXHJcbiAgR0dfR0lGVDogeyBFTjogXCJHSUZUU1wiLCBNWTogXCLhgIbhgK/hgJzhgIDhgLnhgLHhgIbhgKzhgIThgLnhgJnhgLrhgKzhgLhcIiwgTVU6IFwi4YCG4YCv4YCc4YCA4YC64YCG4YCx4YCs4YCE4YC64YCZ4YC74YCs4YC4XCIgfSxcclxuICBHR19HSUZUX1NQRUNJQUw6IHtcclxuICAgIEVOOiBcIlNQRUNJQUwgUFJJWkVTXCIsXHJcbiAgICBNWTogXCLhgIXhgJXhgKvhgJrhgLnhgJvhgL3hgJrhgLnhgIbhgK/hgJnhgLrhgKzhgLhcIixcclxuICAgIE1VOiBcIuGAheGAleGAq+GAmuGAuuGAm+GAvuGAmuGAuuGAhuGAr+GAmeGAu+GArOGAuFwiLFxyXG4gIH0sXHJcbiAgR0dfR1VJREU6IHsgRU46IFwiR1VJREVcIiwgTVk6IFwi4YCc4YCZ4YC54YC44YGr4YKK4YCU4YC54YCB4YC64YCA4YC5XCIsIE1VOiBcIuGAnOGAmeGAuuGAuOGAiuGAveGAvuGAlOGAuuGAgeGAu+GAgOGAulwiIH0sXHJcbiAgR0dfR1VJREVfMDE6IHtcclxuICAgIEVOOiBcIkhvdyB0byBwbGF5IGdhbWU/XCIsXHJcbiAgICBNWTogXCLhgILhgK3hgJnhgLnhgLjhgJjhgJrhgLnhgJzhgK3hgK/hgIDhgIXhgKzhgLjhgJvhgJnhgJzhgLJcIixcclxuICAgIE1VOiBcIuGAguGAreGAmeGAuuGAuOGAmOGAmuGAuuGAnOGAreGAr+GAgOGAheGArOGAuOGAm+GAmeGAnOGAslwiLFxyXG4gIH0sXHJcbiAgR0dfR1VJREVfMDI6IHtcclxuICAgIEVOOiBcIkhvdyB0byB2aWV3IGhpc3Rvcnk/XCIsXHJcbiAgICBNWTogXCJIaXN0b3J5IOGAgOGAreGAr+GAmOGAmuGAueGAnOGAreGAr+GBvuGAgOGAiuGAt+GAueGAm+GAmeGAnOGAslwiLFxyXG4gICAgTVU6IFwiSGlzdG9yeSDhgIDhgK3hgK/hgJjhgJrhgLrhgJzhgK3hgK/hgIDhgLzhgIrhgLfhgLrhgJvhgJnhgJzhgLJcIixcclxuICB9LFxyXG4gIEdHX0dVSURFXzAzOiB7XHJcbiAgICBFTjogXCJIb3cgdG8gcmVkZWVtIGdpZnRzP1wiLFxyXG4gICAgTVk6IFwi4YCG4YCv4YCc4YCA4YC54YCx4YCG4YCs4YCE4YC54YCx4YCQ4YC84YCY4YCa4YC54YCc4YCt4YCv4YCR4YCv4YCQ4YC54YCa4YCw4YCb4YCZ4YCc4YCyXCIsXHJcbiAgICBNVTogXCLhgIbhgK/hgJzhgIDhgLrhgIbhgLHhgKzhgIThgLrhgJDhgL3hgLHhgJjhgJrhgLrhgJzhgK3hgK/hgJHhgK/hgJDhgLrhgJrhgLDhgJvhgJnhgJzhgLJcIixcclxuICB9LFxyXG4gIEdHX0dVSURFXzA0OiB7XHJcbiAgICBFTjogXCJIb3cgdG8gdG8gdXAgc3RpY2tzP1wiLFxyXG4gICAgTVk6IFwiU3RpY2sg4YCb4YCx4YCh4YCs4YCE4YC54YCY4YCa4YC54YCc4YCt4YCv4YCc4YCv4YCV4YC54YCb4YCZ4YCc4YCyXCIsXHJcbiAgICBNVTogXCJTdGljayDhgJvhgKHhgLHhgKzhgIThgLrhgJjhgJrhgLrhgJzhgK3hgK/hgJzhgK/hgJXhgLrhgJvhgJnhgJzhgLJcIixcclxuICB9LFxyXG4gIEhJU1RPUllfREVTQ18xOiB7XHJcbiAgICBFTjogXCJHZXQgbW9yZSB0dXJucyBhZnRlciBidXlpbmdcXG5QYWNrYWdlL3RvcHVwIG9yIGJ1eSBhdCB0aGUgU3RvcmUhXCIsXHJcbiAgICBNWTogXCLhgJXhgJDhgLfhgLnhgLHhgIDhgLfhgIHhgLnhgLrhgJ3hgJrhgLnhgJrhgLDhgb/hgJXhgK7hgLjhgYrhgJbhgK/hgJThgLnhgLjhgLHhgIThgLzhgLvhgJbhgIrhgLfhgLnhgb/hgJXhgK7hgLhcXG4o4YCe4YCt4YCv4YKUKSDhgIXhgJDhgK3hgK/hgLjhgJnhgL3hgJ3hgJrhgLnhgJrhgLDhgb/hgJXhgK7hgLjhgIDhgIXhgKzhgLjhgIHhgLzhgIThgLfhgLnhgJnhgLrhgKzhgLjhgJXhgK3hgK/hgJnhgK3hgK/hgJvhgJrhgLDhgJXhgKtcIixcclxuICAgIE1VOiBcIuGAleGAkOGAt+GAuuGAgOGAseGAt+GAgeGAuuGAu+GAneGAmuGAuuGAmuGAsOGAleGAvOGAruGAuOGBiuGAluGAr+GAlOGAuuGAuOGAhOGAveGAseGAluGAvOGAiuGAt+GAuuGAleGAvOGAruGAuFxcbijhgJ7hgK3hgK/hgLcpIOGAheGAkOGAreGAr+GAuOGAmeGAvuGAneGAmuGAuuGAmuGAsOGAleGAvOGAruGAuOGAgOGAheGArOGAuOGAgeGAveGAhOGAt+GAuuGAmeGAu+GArOGAuOGAleGAreGAr+GAmeGAreGAr+GAm+GAmuGAsOGAleGAq1wiLFxyXG4gIH0sXHJcbiAgSElTVE9SWV9ERVNDXzI6IHtcclxuICAgIEVOOiBcIlRhcCBmb3IgZGV0YWlscyFcIixcclxuICAgIE1ZOiBcIuGAoeGAseGAnuGAuOGAheGAreGAkOGAueGBvuGAgOGAiuGAt+GAueGAm+GAlOGAueGCj+GAveGAreGAleGAueGAleGAq1wiLFxyXG4gICAgTVU6IFwi4YCh4YCe4YCx4YC44YCF4YCt4YCQ4YC64YCA4YC84YCK4YC34YC64YCb4YCU4YC64YCU4YC+4YCt4YCV4YC64YCV4YCrXCIsXHJcbiAgfSxcclxuICBISVNUT1JZX0RFU0NfMzoge1xyXG4gICAgRU46IFwiQ2hlY2sgeW91ciByZWNlaXZlZCB0dXJucyAmIHByaXplcyBoZXJlIVwiLFxyXG4gICAgTVk6IFwi4YCb4YCb4YC94YCt4YCR4YCs4YC44YCe4YCK4YC34YC54YCA4YCF4YCs4YC44YCB4YC84YCE4YC34YC54YCZ4YC64YCs4YC44YKP4YC94YCE4YC34YC54YCG4YCv4YCZ4YC64YCs4YC4XCIsXHJcbiAgICBNVTogXCLhgJvhgJvhgL7hgK3hgJHhgKzhgLjhgJ7hgIrhgLfhgLrhgIDhgIXhgKzhgLjhgIHhgL3hgIThgLfhgLrhgJnhgLvhgKzhgLjhgJThgL7hgIThgLfhgLrhgIbhgK/hgJnhgLvhgKzhgLhcIixcclxuICB9LFxyXG4gIEhJU1RPUllfVFVSTjogeyBFTjogXCJUVVJOXCIsIE1ZOiBcIuGAgOGAheGArOGAuOGAgeGAvOGAhOGAt+GAuVwiLCBNVTogXCLhgIDhgIXhgKzhgLjhgIHhgL3hgIThgLfhgLpcIiB9LFxyXG4gIEhJU1RPUllfVFVSTlM6IHsgRU46IFwiVHVyblwiLCBNWTogXCLhgIDhgIXhgKzhgLjhgIHhgLzhgIThgLfhgLlcIiwgTVU6IFwi4YCA4YCF4YCs4YC44YCB4YC94YCE4YC34YC6XCIgfSxcclxuICBISVNUT1JZX1BSSVpFOiB7IEVOOiBcIlBSSVpFXCIsIE1ZOiBcIuGAhuGAr+GAnOGAgOGAueGAseGAhuGArOGAhOGAuVwiLCBNVTogXCLhgIbhgK/hgJzhgIDhgLrhgIbhgLHhgKzhgIThgLpcIiB9LFxyXG4gIEhJU1RPUllfR0lGVDoge1xyXG4gICAgRU46IFwiUmVjZWl2ZWQgR2lmdHNcIixcclxuICAgIE1ZOiBcIuGAm+GAm+GAveGAreGAnuGAiuGAt+GAueGAhuGAr+GAmeGAuuGArOGAuFwiLFxyXG4gICAgTVU6IFwi4YCb4YCb4YC+4YCt4YCe4YCK4YC34YC64YCG4YCv4YCZ4YC74YCs4YC4XCIsXHJcbiAgfSxcclxuICBISVNUT1JZX0xVQ0tZX0NPREU6IHsgRU46IFwiTHVja3kgQ29kZVwiLCBNWTogXCLhgJzhgJXhgLnhgIDhgK7hgLjhgIDhgK/hgJLhgLlcIiwgTVU6IFwi4YCc4YCV4YC64YCA4YCu4YC44YCA4YCv4YCS4YC6XCIgfSxcclxuICBISVNUT1JZX0xVQ0tZX0NPREVfREVTQzoge1xyXG4gICAgRU46IFwiTHVja3kgQ29kZXMgd2lsbCBiZSBzZWxlY3RlZFxcbmR1cmluZyBsaXZlc3RyZWFtcyB0byB3aW4gMjAsMDAwLDAwMEtzXCIsXHJcbiAgICBNWTogXCJMaXZlU3RyZWFtIOGAmeGAuuGArOGAuOGAkOGAvOGAhOGAuSDhgJzhgJXhgLnhgIDhgK7hgLjhgIDhgK/hgJLhgLnhgJnhgLrhgKzhgLjhgJnhgL1cXG7hgJ7hgK3hgJThgLnhgLjhgYLhgYDhgYDhgIDhgLbhgJHhgLDhgLjhgJvhgL3hgIThgLnhgLHhgpDhgLzhgLjhgIHhgLrhgJrhgLnhgJXhgKvhgJnhgIrhgLlcIixcclxuICAgIE1VOiBcIkxpdmVTdHJlYW0g4YCZ4YC74YCs4YC44YCQ4YC94YCE4YC6IOGAnOGAleGAuuGAgOGAruGAuOGAgOGAr+GAkuGAuuGAmeGAu+GArOGAuOGAmeGAvlxcbuGAnuGAreGAlOGAuuGAuOGBguGBgOGBgOGAgOGAtuGAkeGAsOGAuOGAm+GAvuGAhOGAuuGAm+GAveGAseGAuOGAgeGAu+GAmuGAuuGAleGAq+GAmeGAiuGAulwiLFxyXG4gIH0sXHJcbiAgSElTVE9SWV9HSUZUX0NPREU6IHtcclxuICAgIEVOOiBcIkVtb25leSBHaWZ0IENvZGVcIixcclxuICAgIE1ZOiBcIkVtb25leeGAnOGAgOGAueGAseGAhuGArOGAhOGAueGAgOGAr+GAkuGAuVwiLFxyXG4gICAgTVU6IFwiRW1vbmV54YCc4YCA4YC64YCG4YCx4YCs4YCE4YC64YCA4YCv4YCS4YC6XCIsXHJcbiAgfSxcclxuICBISVNUT1JZX0dJRlRfQ09ERV9ERVNDXzE6IHtcclxuICAgIEVOOiBcIklucHV0IEdpZnQgQ29kZSB0byBjbGFpbVxcbnlvdXIgZW1vbmV5IHByaXplLlwiLFxyXG4gICAgTVk6IFwiRW1vbmV5IOGAhuGAr+GAmuGAsOGAm+GAlOGAueGAnOGAgOGAueGAseGAhuGArOGAhOGAueGAgOGAr+GAkuGAueGAkeGAiuGAt+GAueGAleGAq1wiLFxyXG4gICAgTVU6IFwiRW1vbmV5IOGAhuGAr+GAmuGAsOGAm+GAlOGAuuGAnOGAgOGAuuGAhuGAseGArOGAhOGAuuGAgOGAr+GAkuGAuuGAkeGAiuGAt+GAuuGAleGAq1wiLFxyXG4gIH0sXHJcbiAgSElTVE9SWV9HSUZUX0NPREVfREVTQ18yOiB7XHJcbiAgICBFTjogXCJUYXAgbWUgdG8gZ2V0IE15dGVsUGF5IGFwcGxpY2F0aW9uIVwiLFxyXG4gICAgTVk6IFwiTXl0ZWxQYXkgQXBwIOGAm+GAmuGAsOGAm+GAlOGAueGCj+GAveGAreGAleGAueGAleGAq1wiLFxyXG4gICAgTVU6IFwiTXl0ZWxQYXkgQXBwIOGAm+GAmuGAsOGAm+GAlOGAuuGAlOGAvuGAreGAleGAuuGAleGAq1wiLFxyXG4gIH0sXHJcbiAgSElTVE9SWV9HSUZUX0NPREVfREVTQ18zOiB7XHJcbiAgICBFTjogXCJHaWZ0IGNvZGUgY2FuIGJlIHVzZWQgb25lIHRpbWUgb25seS4gWW91IGNhbiBjbGFpbVxcbm9uIE15dGVsUGF5IGFwcCBhbmQgcGxlYXNlIGRvIG5vdCBzaGFyZSB0byBhbnlvbmVcIixcclxuICAgIE1ZOiBcIuGAnOGAgOGAueGAseGAhuGArOGAhOGAueGAgOGAr+GAkuGAueGAmeGAuuGArOGAuOGAgOGAreGAr+GAkOGAheGAueGCgOGAgOGAreGAmeGAueGAnuGArOGAoeGAnuGAr+GAtuGAuOGAu+GAleGAs+GCj+GAreGAr+GAhOGAueGAleGAq+GAnuGAiuGAueGBiyBNeXRlbFBheSDhgJzhgIDhgLnhgLHhgIbhgKzhgIThgLnhgIDhgK/hgJLhgLlcXG7hgJDhgLzhgIThgLnhgJHhgIrhgLfhgLnhgJ7hgLzhgIThgLnhgLjhgJvhgJnhgIrhgLnhgLvhgJbhgIXhgLnhgb/hgJXhgK7hgLgg4YCQ4YCF4YC54YC74YCB4YCs4YC44YCe4YCw4YCA4YCt4YCv4YCZ4YC94YC64YCx4YCd4YC74YCB4YCE4YC54YC44YCZ4YC74YCV4YCz4YCc4YCv4YCV4YC54YCV4YCr4YKP4YC94YCE4YC34YC54YGLXCIsXHJcbiAgICBNVTogXCLhgJzhgIDhgLrhgIbhgLHhgKzhgIThgLrhgIDhgK/hgJLhgLrhgJnhgLvhgKzhgLjhgIDhgK3hgK/hgJDhgIXhgLrhgIDhgLzhgK3hgJnhgLrhgJ7hgKzhgKHhgJ7hgK/hgLbhgLjhgJXhgLzhgK/hgJThgK3hgK/hgIThgLrhgJXhgKvhgJ7hgIrhgLrhgYsgTXl0ZWxQYXkg4YCc4YCA4YC64YCG4YCx4YCs4YCE4YC64YCA4YCv4YCS4YC6XFxu4YCQ4YC94YCE4YC64YCR4YCK4YC34YC64YCe4YC94YCE4YC64YC44YCb4YCZ4YCK4YC64YCW4YC84YCF4YC64YCV4YC84YCu4YC4IOGAkOGAheGAuuGAgeGAvOGArOGAuOGAnuGAsOGAgOGAreGAr+GAmeGAu+GAvuGAneGAseGAgeGAvOGAhOGAuuGAuOGAmeGAleGAvOGAr+GAnOGAr+GAleGAuuGAleGAq+GAlOGAvuGAhOGAt+GAuuGBi1wiLFxyXG4gIH0sXHJcbiAgRU5EX0dBTUVPVkVSOiB7IEVOOiBcIkdhbWUgT3ZlclwiLCBNWTogXCJHYW1lIE92ZXJcIiwgTVU6IFwiR2FtZSBPdmVyXCIgfSxcclxuICBFTkRfQkVTVF9TQ09SRToge1xyXG4gICAgRU46IFwiQkVTVFxcblNDT1JFXCIsXHJcbiAgICBNWTogXCLhgKHhgLHhgIDhgKzhgIThgLnhgLhcXG7hgIbhgK/hgLbhgLjhgJvhgJnhgL3hgJDhgLlcIixcclxuICAgIE1VOiBcIuGAoeGAgOGAseGArOGAhOGAuuGAuFxcbuGAhuGAr+GAtuGAuOGAm+GAmeGAvuGAkOGAulwiLFxyXG4gIH0sXHJcbiAgRU5EX1JFUExBWTogeyBFTjogXCJQTEFZIEFHQUlOXCIsIE1ZOiBcIuGAkeGAleGAueKAjOGAgOGAheGArOGAuFwiLCBNVTogXCLhgJHhgJXhgLrigIzhgIDhgIXhgKzhgLhcIiB9LFxyXG4gIEVORF9QUklaRToge1xyXG4gICAgRU46IFwiWU9VIFdPTiBUSEVTRSBBTUFaSU5HIFBSSVpFU1wiLFxyXG4gICAgTVk6IFwi4YCe4YCE4YC54YCx4YCh4YCs4YCA4YC54YCV4YCr4YCG4YCv4YKA4YCA4YCu4YC44YCZ4YC64YCs4YC44YCb4YCb4YC94YCt4YCV4YCr4YCe4YCK4YC5XCIsXHJcbiAgICBNVTogXCLhgJ7hgIThgLrhgKHhgLHhgKzhgIDhgLrhgJXhgKvhgIbhgK/hgIDhgLzhgK7hgLjhgJnhgLvhgKzhgLjhgJvhgJvhgL7hgK3hgJXhgKvhgJ7hgIrhgLpcIixcclxuICB9LFxyXG4gIFRVVE9SX1RJVExFOiB7XHJcbiAgICBFTjogXCJIb3cgdG8gcGxheSBpbiAzIHN0ZXBzXCIsXHJcbiAgICBNWTogXCLhgJjhgJrhgLnhgJzhgK3hgK/hgIDhgIXhgKzhgLjhgJnhgJzhgLJcIixcclxuICAgIE1VOiBcIuGAmOGAmuGAuuGAnOGAreGAr+GAgOGAheGArOGAuOGAmeGAnOGAslwiLFxyXG4gIH0sXHJcbiAgVFVUT1JfREVTQ18xOiB7XHJcbiAgICBFTjogXCJLZWVwIE1vTW8gcnVubmluZyBhc1xcbmZhciBhcyBwb3NzaWJsZVwiLFxyXG4gICAgTVk6IFwi4YCZ4YCt4YCv4YCZ4YCt4YCv4YCA4YCt4YCvIOGAu+GAmeGAlOGAueGAu+GAmeGAlOGAueGAseGAu+GAleGAuOGAgeGAreGAr+GAhOGAueGAuOGAleGAq1wiLFxyXG4gICAgTVU6IFwi4YCZ4YCt4YCv4YCZ4YCt4YCv4YCA4YCt4YCvIOGAmeGAvOGAlOGAuuGAmeGAvOGAlOGAuuGAleGAvOGAseGAuOGAgeGAreGAr+GAhOGAuuGAuOGAleGAq1wiLFxyXG4gIH0sXHJcbiAgVFVUT1JfREVTQ18yOiB7XHJcbiAgICBFTjogXCJTd2lwZSB0byBraWxsIGVuZW1pZXNcIixcclxuICAgIE1ZOiBcIuGAm+GAlOGAueGAnuGAsOGAnuGAkOGAueGAm+GAlOGAueGAm+GAlOGAueGAnuGAsOGAseGAleGBmuGAgOGAreGAr+GAleGAvOGAkOGAueGAhuGAvOGAsuGAleGAq1wiLFxyXG4gICAgTVU6IFwi4YCb4YCU4YC64YCe4YCw4YCe4YCQ4YC64YCb4YCU4YC64YCb4YCU4YC64YCe4YCw4YCV4YCx4YCr4YC64YCA4YCt4YCv4YCV4YC94YCQ4YC64YCG4YC94YCy4YCV4YCrXCIsXHJcbiAgfSxcclxuICBUVVRPUl9ERVNDXzM6IHtcclxuICAgIEVOOiBcIkp1bXAgb3ZlciB3YXRlciFcIixcclxuICAgIE1ZOiBcIuGAseGAm+GAseGAoeGArOGAgOGAueGAmeGAgOGAuuGAseGAoeGArOGAhOGAueGAgeGAr+GAlOGAueGAleGAq1wiLFxyXG4gICAgTVU6IFwi4YCb4YCx4YCh4YCx4YCs4YCA4YC64YCZ4YCA4YC74YCh4YCx4YCs4YCE4YC64YCB4YCv4YCU4YC64YCV4YCrXCIsXHJcbiAgfSxcclxuICBHQU1FX01PREU6IHtcclxuICAgIEVOOiBcIkNIT09TRSBHQU1FIE1PREVcIixcclxuICAgIE1ZOiBcIuGAgOGAheGArOGAuOGAmeGAiuGAt+GAueGAleGAr+GAtuGAheGAtuGAseGCkOGAvOGAuOGAleGAq1wiLFxyXG4gICAgTVU6IFwi4YCA4YCF4YCs4YC44YCZ4YCK4YC34YC64YCV4YCv4YC24YCF4YC24YCb4YC94YCx4YC44YCV4YCrXCIsXHJcbiAgfSxcclxuICBHQU1FX01PREVfVk9JQ0U6IHsgRU46IFwiVXNlIHZvaWNlXCIsIE1ZOiBcIuGAoeGAnuGAtuGAu+GAluGAhOGAt+GAuVwiLCBNVTogXCLhgKHhgJ7hgLbhgJbhgLzhgIThgLfhgLpcIiB9LFxyXG4gIEdBTUVfTU9ERV9WT0lDRV9ERVNDXzE6IHtcclxuICAgIEVOOiBcIlNDUkVBTVxcbjIgSlVNUFwiLFxyXG4gICAgTVk6IFwi4YCB4YCv4YCU4YC54YCb4YCU4YC54YCh4YCe4YC2XFxu4YCR4YC84YCA4YC54YCV4YCrXCIsXHJcbiAgICBNVTogXCLhgIHhgK/hgJThgLrhgJvhgJThgLrhgKHhgJ7hgLZcXG7hgJHhgL3hgIDhgLrhgJXhgKtcIixcclxuICB9LFxyXG4gIEdBTUVfTU9ERV9WT0lDRV9ERVNDXzI6IHtcclxuICAgIEVOOiBcIlRvIHBsYXkgd2l0aCB2b2ljZSBpbnB1dCwgeW91IG5lZWQgdG86XCIsXHJcbiAgICBNWTogXCLhgKHhgJ7hgLbhgLvhgJbhgIThgLfhgLnhgIDhgIXhgKzhgLjhgJvhgJThgLkg4YCe4YCE4YC54YCe4YCK4YC5XCIsXHJcbiAgICBNVTogXCLhgKHhgJ7hgLbhgJbhgLzhgIThgLfhgLrhgIDhgIXhgKzhgLjhgJvhgJThgLog4YCe4YCE4YC64YCe4YCK4YC6XCIsXHJcbiAgfSxcclxuICBHQU1FX01PREVfVk9JQ0VfREVTQ18zOiB7XHJcbiAgICBFTjogXCIxLiBFbmFibGUgTXlJRCB0byBhY2Nlc3MgbWljcm9waG9uZS5cIixcclxuICAgIE1ZOiBcIjEu4YCZ4YCt4YCv4YCA4YC54YCB4YKQ4YCt4YCv4YCW4YCv4YCU4YC54YC44YCh4YCe4YCv4YC24YC44YC74YCV4YCz4YCb4YCU4YC5TXlJROGAgOGAreGAr+GAgeGAvOGAhOGAt+GAueGAu+GAleGAs+GAkeGArOGAuOGAleGAq1wiLFxyXG4gICAgTVU6IFwiMS7hgJnhgK3hgK/hgIDhgLrhgIHhgJvhgK3hgK/hgJbhgK/hgJThgLrhgLjhgKHhgJ7hgK/hgLbhgLjhgJXhgLzhgK/hgJvhgJThgLpNeUlE4YCA4YCt4YCv4YCB4YC94YCE4YC34YC64YCV4YC84YCv4YCR4YCs4YC44YCV4YCrXCIsXHJcbiAgfSxcclxuICBHQU1FX01PREVfSEFORDogeyBFTjogXCJVc2UgaGFuZFwiLCBNWTogXCLhgJzhgIDhgLnhgLvhgJbhgIThgLfhgLlcIiwgTVU6IFwi4YCc4YCA4YC64YCW4YC84YCE4YC34YC6XCIgfSxcclxuICBHQU1FX01PREVfSEFORF9ERVNDOiB7XHJcbiAgICBFTjogXCJTSEFLRVxcbjIgSlVNUFwiLFxyXG4gICAgTVk6IFwi4YCB4YCv4YCU4YC54YCb4YCU4YC54YCW4YCv4YCU4YC54YC44YCA4YCt4YCvXFxu4YCc4YKI4YCV4YC54YCB4YCr4YCV4YCrXCIsXHJcbiAgICBNVTogXCLhgIHhgK/hgJThgLrhgJvhgJThgLrhgJbhgK/hgJThgLrhgLjhgIDhgK3hgK9cXG7hgJzhgL7hgK/hgJXhgLrhgIHhgKvhgJXhgKtcIixcclxuICB9LFxyXG4gIFdBUk5JTkdfVk9JQ0VfMToge1xyXG4gICAgRU46IFwiVk9JQ0UgSU5QVVRcXG5OT1QgREVURUNURURcIixcclxuICAgIE1ZOiBcIuGAoeGAnuGAtuGAgeGAvOGAhOGAt+GAueGAu+GAleGAs1xcbuGAkeGArOGAuOGAu+GAgeGAhOGAueGAuOGAmeGAm+GAveGAreGAleGAq1wiLFxyXG4gICAgTVU6IFwi4YCh4YCe4YC24YCB4YC94YCE4YC34YC64YCV4YC84YCvXFxu4YCR4YCs4YC44YCB4YC84YCE4YC64YC44YCZ4YCb4YC+4YCt4YCV4YCrXCIsXHJcbiAgfSxcclxuICBXQVJOSU5HX1ZPSUNFXzI6IHsgRU46IFwiUExFQVNFIENIT09TRVwiLCBNWTogXCLhgLHhgpDhgLzhgLjhgIHhgLrhgJrhgLnhgJXhgKtcIiwgTVU6IFwi4YCb4YC94YCx4YC44YCB4YC74YCa4YC64YCV4YCrXCIgfSxcclxuICBXQVJOSU5HX1ZPSUNFXzM6IHtcclxuICAgIEVOOiBcIuKAnFNIQUtFIDIgSlVNUCBNT0RF4oCdXCIsXHJcbiAgICBNWTogXCLigJxTSEFLRSAyIEpVTVAgTU9EReKAnVwiLFxyXG4gICAgTVU6ICdcIlNIQUtFIDIgSlVNUCBNT0RFXCInLFxyXG4gIH0sXHJcbiAgR0FNRV9HTzogeyBFTjogXCJHTyFcIiwgTVk6IFwiR08hXCIsIE1VOiBcIkdPIVwiIH0sXHJcbiAgR0FNRV9XQVZFOiB7IEVOOiBcIldhdmVcIiwgTVk6IFwiV2F2ZVwiLCBNVTogXCJXYXZlXCIgfSxcclxuICBHQU1FX0VORU1ZX05PVElDRToge1xyXG4gICAgRU46IFwiRW5lbWllcyBpbmNvbWluZyBpblwiLFxyXG4gICAgTVk6IFwi4YCb4YCU4YC54YCe4YCw4YCx4YCQ4YC84YCc4YCs4YCb4YCU4YC5XCIsXHJcbiAgICBNVTogXCLhgJvhgJThgLrhgJ7hgLDhgJDhgL3hgLHhgJzhgKzhgJvhgJThgLpcIixcclxuICB9LFxyXG4gIEdBTUVfV0FURVJfTk9USUNFOiB7XHJcbiAgICBFTjogXCJXYXRlciBpbmNvbWluZyBpblwiLFxyXG4gICAgTVk6IFwi4YCx4YCb4YCx4YCA4YC64YCs4YC54YC74YCW4YCQ4YC54YCb4YCU4YC5XCIsXHJcbiAgICBNVTogXCLhgJvhgLHhgIDhgLvhgLHhgKzhgLrhgJbhgLzhgJDhgLrhgJvhgJThgLpcIixcclxuICB9LFxyXG4gIEdBTUVfUkVWSVZFX1RJVExFOiB7XHJcbiAgICBFTjogXCJPb3Bz4oCmIFJldml2ZSBub3c/XCIsXHJcbiAgICBNWTogXCLhgKHhgJ7hgIDhgLnhgIbhgIDhgLnhgJzhgIDhgLnhgJvhgL3hgIThgLnhgJ7hgJThgLnhgLHhgIXhgJnhgJzhgKzhgLhcIixcclxuICAgIE1VOiBcIuGAoeGAnuGAgOGAuuGAhuGAgOGAuuGAnOGAgOGAuuGAm+GAvuGAhOGAuuGAnuGAlOGAuuGAheGAseGAmeGAnOGArOGAuFwiLFxyXG4gIH0sXHJcbiAgR0FNRV9SRVZJVkVfREVTQzoge1xyXG4gICAgRU46IFwiR2V0IGZ1bGwgaGVhbHRoIGFuZCBtb3ZlIHRvIG5leHQgd2F2ZVwiLFxyXG4gICAgTVk6IFwiSGVhbHRoIOGAoeGAu+GAleGAiuGAt+GAueGAu+GAluGAhOGAt+GAuSDhgLHhgJThgKzhgIDhgLkgd2F2ZSDhgJ7hgK3hgK/hgpThgJ7hgLzhgKzhgLjhgJnhgIrhgLlcIixcclxuICAgIE1VOiBcIkhlYWx0aCDhgKHhgJXhgLzhgIrhgLfhgLrhgJbhgLzhgIThgLfhgLog4YCU4YCx4YCs4YCA4YC6IHdhdmUg4YCe4YCt4YCv4YC34YCe4YC94YCs4YC44YCZ4YCK4YC6XCIsXHJcbiAgfSxcclxuICBcIkdHX0dSQU5EIFBSSVpFXCI6IHsgRU46IFwiR1JBTkQgUFJJWkVcIiwgTVk6IFwi4YCR4YCt4YCV4YC54YCQ4YCU4YC54YC44YCG4YCvXCIsIE1VOiBcIuGAkeGAreGAleGAuuGAkOGAlOGAuuGAuOGAhuGAr1wiIH0sXHJcbiAgXCJHR19QUkVNSVVNIFBSSVpFXCI6IHtcclxuICAgIEVOOiBcIlBSRU1JVU0gUFJJWkVTXCIsXHJcbiAgICBNWTogXCLhgKHhgJHhgLDhgLjhgIbhgK/hgJnhgLrhgKzhgLhcIixcclxuICAgIE1VOiBcIuGAoeGAkeGAsOGAuOGAhuGAr+GAmeGAu+GArOGAuFwiLFxyXG4gIH0sXHJcbiAgRU5FTVlfQ09NTUlOR19UVVQ6IHtcclxuICAgIEVOOiBcIlNXSVBFIFRPXFxuS0lMTCBFTkVNSUVTXCIsXHJcbiAgICBNWTogXCLhgJvhgJThgLnhgJ7hgLDhgJ7hgJDhgLnhgJvhgJThgLkg4YCb4YCU4YC54YCe4YCwXFxu4YCx4YCV4YGa4YCA4YCt4YCv4YCV4YC84YCQ4YC54YCG4YC84YCy4YCV4YCrXCIsXHJcbiAgICBNVTogXCLhgJvhgJThgLrhgJ7hgLDhgJ7hgJDhgLrhgJvhgJThgLog4YCb4YCU4YC64YCe4YCwXFxu4YCV4YCx4YCr4YC64YCA4YCt4YCv4YCV4YC94YCQ4YC64YCG4YC94YCy4YCV4YCrXCIsXHJcbiAgfSxcclxuICBUVVRPUl9ERVNDXzNfSU9TOiB7XHJcbiAgICBFTjogXCJTaGFrZSB0byBqdW1wXFxub3ZlciB3YXRlciFcIixcclxuICAgIE1ZOiBcIuGAseGAm+GAoeGAseGAleGBmuGAnuGAreGAr+GClOGAseGAm+GArOGAgOGAueGAseGAoeGArOGAhOGAuVxcbuGAgeGAr+GAlOGAueGAm+GAlOGAueGAluGAr+GAlOGAueGAuOGAgOGAreGAr+GAnOGCiOGAleGAueGAgeGAq+GAleGAq+GBi1wiLFxyXG4gICAgTVU6IFwi4YCb4YCx4YCh4YCV4YCx4YCr4YC64YCe4YCt4YCv4YC34YCb4YCx4YCs4YCA4YC64YCh4YCx4YCs4YCE4YC6XFxu4YCB4YCv4YCU4YC64YCb4YCU4YC64YCW4YCv4YCU4YC64YC44YCA4YCt4YCv4YCc4YC+4YCv4YCV4YC64YCB4YCr4YCV4YCr4YGLXCIsXHJcbiAgfSxcclxuICBHQU1FX01PREVfVk9JQ0VfREVTQ180OiB7XHJcbiAgICBFTjogJzIuIFRhcCBcIkFMTE9XXCIgd2hlbmV2ZXIgeW91IHBsYXkgU3BlYWsgMiBKdW1wJyxcclxuICAgIE1ZOiAnMi7hgKHhgJ7hgLbhgLvhgJbhgIThgLfhgLnhgIDhgIXhgKzhgLjhgJnhgIrhgLfhgLnhgKHhgIHhgKvhgJDhgK3hgK/hgIThgLnhgLggXCJBTExPV1wiIOGAgOGAreGAr+GAseGCkOGAvOGAuOGAleGAqycsXHJcbiAgICBNVTogJzIu4YCh4YCe4YC24YCW4YC84YCE4YC34YC64YCA4YCF4YCs4YC44YCZ4YCK4YC34YC64YCh4YCB4YCr4YCQ4YCt4YCv4YCE4YC64YC4IFwiQUxMT1dcIiDhgIDhgK3hgK/hgJvhgL3hgLHhgLjhgJXhgKsnLFxyXG4gIH0sXHJcbiAgU1RPUkVfQlVZX1dJVEhfNTAwOiB7XHJcbiAgICBFTjogXCJCdXkgd2l0aCA1MDBcIixcclxuICAgIE1ZOiBcIuGBheGBgOGBgCDhgLvhgJbhgIThgLfhgLnhgJ3hgJrhgLnhgJnhgIrhgLlcIixcclxuICAgIE1VOiBcIuGBheGBgOGBgCDhgJbhgLzhgIThgLfhgLrhgJ3hgJrhgLrhgJnhgIrhgLpcIixcclxuICB9LFxyXG4gIEhJU1RPUllfR0lGVF9DT0RFX0RFU0NfNDoge1xyXG4gICAgRU46IFwiVGFwIG1lIHRvIHRvIEZvbGxvdyBNeXRlbCBmYW5wYWdlIVwiLFxyXG4gICAgTVk6IFwiTXl0ZWwgRmFucGFnZSDhgJ7hgLzhgKzhgLjhgJvhgJThgLnhgo/hgL3hgK3hgJXhgLnhgJXhgKvhgYtcIixcclxuICAgIE1VOiBcIk15dGVsIEZhbnBhZ2Ug4YCe4YC94YCs4YC44YCb4YCU4YC64YCU4YC+4YCt4YCV4YC64YCV4YCr4YGLXCIsXHJcbiAgfSxcclxuICBMQl9XSU5ORVJfVElUTEVfMjoge1xyXG4gICAgRU46IFwiQ29sbGVjdCBhbGwgMTAgc2ltcyB0byB3aW4gMjAsMDAwLDAwMCBLeWF0c1wiLFxyXG4gICAgTVk6IFwi4YCG4YCE4YC54YC44YCA4YCS4YC54YGB4YGA4YCB4YCv4YCF4YCv4YCx4YCG4YCs4YCE4YC54YC44YG/4YCV4YCu4YC4IOGAseGAhOGAvCDhgJ7hgK3hgJThgLnhgLgg4YGC4YGA4YGA4YCb4YCa4YCw4YCV4YCr4YGLXCIsXHJcbiAgICBNVTogXCLhgIbhgIThgLrhgLjhgIDhgJLhgLrhgYHhgYDhgIHhgK/hgIXhgK/hgIbhgLHhgKzhgIThgLrhgLjhgJXhgLzhgK7hgLgg4YCE4YC94YCxIOGAnuGAreGAlOGAuuGAuCDhgYLhgYDhgYDhgJvhgJrhgLDhgJXhgKvhgYtcIixcclxuICB9LFxyXG4gIFdBUk5JTkdfREVTQzoge1xyXG4gICAgRU46IFwiQXJlIHlvdSBzdXJlIHRvIHF1aXQgdGhpcyBzZXNzaW9uP1wiLFxyXG4gICAgTVk6IFwi4YCa4YCB4YCv4YCR4YC84YCA4YC54YCx4YCQ4YCs4YC34YCZ4YC94YCs4YCx4YCe4YCB4YC64YCs4YCV4YCr4YCe4YCc4YCs4YC44YGLXCIsXHJcbiAgICBNVTogXCLhgJrhgIHhgK/hgJHhgL3hgIDhgLrhgJDhgLHhgKzhgLfhgJnhgL7hgKzhgJ7hgLHhgIHhgLvhgKzhgJXhgKvhgJ7hgJzhgKzhgLjhgYtcIixcclxuICB9LFxyXG4gIFVJX0VSUk9SOiB7XHJcbiAgICBFTjogXCJPb3BzLi4uIENvbm5lY3Rpb24gZXJyb3IhXFxuUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxyXG4gICAgTVk6IFwi4YCG4YCA4YC54YCe4YC84YCa4YC54YCZ4YKI4YC74YCV4YCQ4YC54YCx4YCQ4YCs4YCA4YC54YCx4YCU4YCV4YCr4YCe4YC74YCW4YCE4YC34YC5XFxu4YC74YCV4YCU4YC54YCc4YCK4YC54YKA4YCA4YCt4YCz4YC44YCF4YCs4YC44YCV4YCr4YGLXCIsXHJcbiAgICBNVTogXCLhgIbhgIDhgLrhgJ7hgL3hgJrhgLrhgJnhgL7hgK/hgJXhgLzhgJDhgLrhgJDhgLHhgKzhgIDhgLrhgJThgLHhgJXhgKvhgJ7hgJbhgLzhgIThgLfhgLpcXG7hgJXhgLzhgJThgLrhgJzhgIrhgLrhgIDhgLzhgK3hgK/hgLjhgIXhgKzhgLjhgJXhgKvhgYtcIixcclxuICB9LFxyXG4gIFVJX0NBTkNFTDogeyBFTjogXCJDQU5DRUxcIiwgTVk6IFwi4YCR4YC84YCA4YC54YCZ4YCK4YC5XCIsIE1VOiBcIuGAkeGAveGAgOGAuuGAmeGAiuGAulwiIH0sXHJcbiAgVUlfUkVUUlk6IHsgRU46IFwiUkVUUllcIiwgTVk6IFwi4YC74YCV4YCU4YC54YCc4YCv4YCV4YC54YCZ4YCK4YC5XCIsIE1VOiBcIuGAleGAvOGAlOGAuuGAnOGAr+GAleGAuuGAmeGAiuGAulwiIH0sXHJcbiAgVUlfUVVJVDogeyBFTjogXCJRVUlUXCIsIE1ZOiBcIuGAkeGAvOGAgOGAueGAgeGAvOGArOGAmeGAiuGAuVwiLCBNVTogXCLhgJHhgL3hgIDhgLrhgIHhgL3hgKzhgJnhgIrhgLpcIiB9LFxyXG4gIFVJX1dST05HOiB7XHJcbiAgICBFTjogXCJPb3Bz4oCmXFxuU29tZXRoaW5nIGdvZXMgd3JvbmchXCIsXHJcbiAgICBNWTogXCLhgJnhgL3hgKzhgLjhgJrhgLzhgIThgLnhgLjhgJnhgojhgLvhgJbhgIXhgLnhgLHhgJXhgZrhgLHhgJThgJXhgKvhgJ7hgIrhgLnhgYtcIixcclxuICAgIE1VOiBcIuGAmeGAvuGArOGAuOGAmuGAveGAhOGAuuGAuOGAmeGAvuGAr+GAluGAvOGAheGAuuGAleGAseGAq+GAuuGAlOGAseGAleGAq+GAnuGAiuGAuuGBi1wiLFxyXG4gIH0sXHJcbiAgVFVUT1JfREVTQ18zX0lPU19IQU5EOiB7XHJcbiAgICBFTjogXCJUYXAgdG8ganVtcFxcbm92ZXIgd2F0ZXIhXCIsXHJcbiAgICBNWTogXCLhgLHhgJvhgLHhgJXhgZrhgJDhgLzhgIThgLlcXG7hgIHhgK/hgJThgLnhgJvhgJThgLnhgo/hgL3hgK3hgJXhgLnhgJXhgKvhgYtcIixcclxuICAgIE1VOiBcIuGAm+GAseGAleGAseGAq+GAuuGAkOGAveGAhOGAulxcbuGAgeGAr+GAlOGAuuGAm+GAlOGAuuGAlOGAvuGAreGAleGAuuGAleGAq+GBi1wiLFxyXG4gIH0sXHJcbiAgR0FNRV9NT0RFX0hBTkRfVEFQX0RFU0M6IHtcclxuICAgIEVOOiBcIlRBUCAyXFxuSlVNUFwiLFxyXG4gICAgTVk6IFwi4YCB4YCv4YCU4YC54YCb4YCU4YC5XFxu4YKP4YC94YCt4YCV4YC54YCV4YCr4YGLXCIsXHJcbiAgICBNVTogXCLhgIHhgK/hgJThgLrhgJvhgJThgLpcXG7hgJThgL7hgK3hgJXhgLrhgJXhgKvhgYtcIixcclxuICB9LFxyXG4gIFVJX05PX01PUkVfVFVSTjoge1xyXG4gICAgRU46IFwiT09QUy4uLiBOTyBNT1JFIFBMQVkgVFVSTlMuXFxuQlVZIEFUIFNUT1JFP1wiLFxyXG4gICAgTVk6IFwi4YCA4YCF4YCs4YC44YCB4YC84YCE4YC34YC54YCA4YCv4YCU4YC54YCG4YCv4YC24YC44YCe4YC84YCs4YC44YCV4YCr4YG/4YCV4YCu4YGLXFxuIOGAgOGAheGArOGAuOGAgeGAvOGAhOGAt+GAueGAneGAmuGAueGAnOGAreGAr+GAleGAq+GAnuGAnOGArOGAuOGBi1wiLFxyXG4gICAgTVU6IFwi4YCA4YCF4YCs4YC44YCB4YC94YCE4YC34YC64YCA4YCv4YCU4YC64YCG4YCv4YC24YC44YCe4YC94YCs4YC44YCV4YCr4YCV4YC84YCu4YGLXFxu4YCA4YCF4YCs4YC44YCB4YC94YCE4YC34YC64YCd4YCa4YC64YCc4YCt4YCv4YCV4YCr4YCe4YCc4YCs4YC44YGLXCIsXHJcbiAgfSxcclxuICBFTkRHQU1FX0VSUk9SX1BSSVpFOiB7XHJcbiAgICBFTjogXCJOZXR3b3JrIHVuc3RhYmxlLiBcXG5QbGVhc2UgY2hlY2sgSGlzdG9yeSBwYWdlXFxubGF0ZXIgZm9yIGRldGFpbHMuXCIsXHJcbiAgICBNWTogXCLhgKHhgIThgLrhgJDhgKzhgJThgIDhgLrhgIbhgIDhgLrhgJ7hgL3hgJrhgLrhgJnhgL7hgK8g4YCV4YC84YCQ4YC64YCQ4YCx4YCs4YCA4YC64YCU4YCx4YCV4YCr4YCe4YCW4YC84YCE4YC34YC6IFxcbkhpc3RvcnkgcGFnZSDhgJnhgL4g4YCh4YCB4YC74YCA4YC64YCh4YCc4YCA4YC6IFxcbuGAmeGAu+GArOGAuOGAgOGAreGAryDhgJHhgJXhgLrhgJnhgLbhgLcg4YCF4YCF4YC64YCG4YCx4YC44YCV4YCx4YC44YCV4YCrXCIsXHJcbiAgICBNVTogXCLhgKHhgIThgLrhgJDhgKzhgJThgIDhgLrhgIbhgIDhgLrhgJ7hgL3hgJrhgLrhgJnhgL7hgK8g4YCV4YC84YCQ4YC64YCQ4YCx4YCs4YCA4YC64YCU4YCx4YCV4YCr4YCe4YCW4YC84YCE4YC34YC6IFxcbkhpc3RvcnkgcGFnZSDhgJnhgL4g4YCh4YCB4YC74YCA4YC64YCh4YCc4YCA4YC6IFxcbuGAmeGAu+GArOGAuOGAgOGAreGAryDhgJHhgJXhgLrhgJnhgLbhgLcg4YCF4YCF4YC64YCG4YCx4YC44YCV4YCx4YC44YCV4YCrXCIsXHJcbiAgfSxcclxufTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/playGround.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7c0988P9KdKaoNjh5pLuFPn', 'playGround');
// Scripts/playGround.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GameDefine_1 = require("./game/GameDefine");
var PeerManager_1 = require("./PeerComponent/PeerManager");
var StageInGame_1 = require("./stage/StageInGame");
var levelDesign = require("../levelDesign.js");
var SoundMgr_1 = require("./common/SoundMgr");
var cuboid_1 = require("./cuboid");
var diamond_1 = require("./diamond");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var playGround = /** @class */ (function (_super) {
    __extends(playGround, _super);
    function playGround() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cuboid = null;
        _this.diamond = null;
        _this.cuboidContainer = null;
        _this.cuboidBase = null;
        _this.playerBall = null;
        _this.lblScore = null;
        _this.bg = null;
        _this.dragonSP = [];
        _this.diamondContainer = null;
        _this.endGamePopup = null;
        _this.bannerLabel = null;
        _this.popupLabel = null;
        _this.playerIndex = 0;
        _this.previousCuboid = null;
        _this.distance = cc.v2(100 * Math.cos(45 * Math.PI / 180), 100 * Math.cos(45 * Math.PI / 180));
        _this.initialDistance = cc.v2(100 * Math.cos(45 * Math.PI / 180), 0 * Math.cos(45 * Math.PI / 180));
        _this.isMoveLeft = false;
        _this.isPlayerDead = false;
        _this.score = 0;
        _this.diamondPool = new cc.NodePool();
        _this.extraCuboidPool = new cc.NodePool();
        _this.isReady = false;
        _this.isSpawnLeft = false;
        _this.currentLevel = 0;
        _this.cubiodCount = 0;
        _this.isChangingDirection = false;
        _this.dragonSpine = null;
        _this.dragonSkin = ["Char3", "Char2", "Char1"];
        _this.bgSpriteFrame = null;
        _this.roadSpriteFrame = null;
        _this.objectsSpriteFrame = null;
        _this.playerPos = new cc.Vec2(0, 0);
        return _this;
    }
    playGround.prototype.onLoad = function () {
        var _this = this;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function (event) {
            if (PeerManager_1.default.Instance.isPlayWithRemote && _this.playerIndex == 0) {
                if (event.keyCode == 13) {
                    _this.changeDirection();
                }
            }
        });
        var initCount = 10;
        for (var i = 0; i < initCount; ++i) {
            var diamond = cc.instantiate(this.diamond);
            this.diamondPool.put(diamond);
        }
        var initExtraCount = 30;
        for (var i = 0; i < initExtraCount; ++i) {
            var extraCuboid = cc.instantiate(this.cuboid);
            this.extraCuboidPool.put(extraCuboid);
        }
        this.dragonSpine = this.playerBall.getChildByName("playerChar").getComponent(sp.Skeleton);
    };
    playGround.prototype.start = function () {
        this.playerBall.zIndex = 999;
        this.cuboidBase.zIndex = 0;
        for (var i = 0; i < 15; i++) {
            this.createCuboid();
        }
        this.dragonSpine.setSkin(this.dragonSkin[this.playerIndex]);
        this.bg.getComponent(cc.Sprite).spriteFrame = this.bgSpriteFrame;
        this.cuboidBase.getChildByName("frontFace").getComponent(cc.Sprite).spriteFrame =
            this.roadSpriteFrame;
    };
    playGround.prototype.changeDirection = function () {
        var _this = this;
        if (!this.isPlayerDead && this.isReady && !this.isChangingDirection) {
            this.isMoveLeft = !this.isMoveLeft;
            this.isChangingDirection = true;
            cc.tween(this.playerBall).to(0.15, {
                angle: this.isMoveLeft ? 45 : -45,
            }).call(function () {
                _this.isChangingDirection = false;
            }).start();
            this.scoreUpdate();
        }
    };
    playGround.prototype.createCuboid = function (newCuboid) {
        var _this = this;
        if (newCuboid === void 0) { newCuboid = cc.instantiate(this.cuboid); }
        newCuboid.getChildByName("frontFace").getComponent(cc.Sprite).spriteFrame =
            this.roadSpriteFrame;
        var nextLevel = levelDesign[this.currentLevel + 1];
        if (nextLevel) {
            if (++this.cubiodCount >= nextLevel.startIndex) {
                this.currentLevel++;
            }
        }
        var currentLevel = levelDesign[this.currentLevel];
        if (this.previousCuboid) {
            var random = Math.random();
            var splitValue = 0;
            if (random < currentLevel.doubleWay2Rate) {
                splitValue = 2;
                if (this.previousCuboid.x < -105 || this.previousCuboid.x > 105) {
                    splitValue = 0;
                }
                else if (this.previousCuboid.x < -70 || this.previousCuboid.x > 70) {
                    splitValue = 1;
                }
            }
            else if (random < currentLevel.doubleWay2Rate + currentLevel.doubleWay1Rate) {
                splitValue = 1;
                if (this.previousCuboid.x < -105 || this.previousCuboid.x > 105) {
                    splitValue = 0;
                }
            }
            else {
                splitValue = 0;
            }
            switch (splitValue) {
                case 0:
                    if (Math.random() < currentLevel.directionChangeRate) {
                        this.isSpawnLeft = !this.isSpawnLeft;
                    }
                    if (this.previousCuboid.x < -140) {
                        this.isSpawnLeft = false;
                    }
                    else if (this.previousCuboid.x > 140) {
                        this.isSpawnLeft = true;
                    }
                    newCuboid.x = (this.isSpawnLeft ? -this.distance.x : this.distance.x) + this.previousCuboid.x;
                    newCuboid.y = this.previousCuboid.y + this.distance.y;
                    newCuboid.getChildByName("fence-1").active = this.isSpawnLeft ? false : true;
                    newCuboid.getChildByName("fence-2").active = this.isSpawnLeft ? true : false;
                    this.previousCuboid.getChildByName("fence-3").active = this.isSpawnLeft ? true : false;
                    this.previousCuboid.getChildByName("fence-4").active = this.isSpawnLeft ? false : true;
                    newCuboid.getChildByName("fence-1").children[0].getComponent(cc.BoxCollider).enabled = this.isSpawnLeft ? false : true;
                    newCuboid.getChildByName("fence-2").children[0].getComponent(cc.BoxCollider).enabled = this.isSpawnLeft ? true : false;
                    this.previousCuboid.getChildByName("fence-3").children[0].getComponent(cc.BoxCollider).enabled = this.isSpawnLeft ? true : false;
                    this.previousCuboid.getChildByName("fence-4").children[0].getComponent(cc.BoxCollider).enabled = this.isSpawnLeft ? false : true;
                    if (Math.random() < 0.5) {
                        var objectSprite = newCuboid.getChildByName("objectRandom").getChildByName("objectSprite");
                        newCuboid.getChildByName("objectRandom").active = true;
                        objectSprite.getComponent(cc.Sprite).spriteFrame =
                            this.objectsSpriteFrame[Math.floor(Math.random() * this.objectsSpriteFrame.length)];
                        objectSprite.x = newCuboid.x > 0 ? -400 : 400;
                    }
                    else {
                        newCuboid.getChildByName("objectRandom").active = false;
                    }
                    break;
                case 1:
                    var prevX_1 = this.previousCuboid.x;
                    var prevY_1 = this.previousCuboid.y;
                    setTimeout(function () {
                        _this.createExtraCuboid(-_this.distance.x + prevX_1, prevY_1 + _this.distance.y, [false, true, false, true]);
                    }, 50);
                    setTimeout(function () {
                        _this.createExtraCuboid(_this.distance.x + prevX_1, prevY_1 + _this.distance.y, [true, false, true, false]);
                    }, 100);
                    newCuboid.x = this.previousCuboid.x;
                    newCuboid.y = this.previousCuboid.y + this.distance.y * 2;
                    newCuboid.getChildByName("fence-1").active = false;
                    newCuboid.getChildByName("fence-2").active = false;
                    this.previousCuboid.getChildByName("fence-3").active = false;
                    this.previousCuboid.getChildByName("fence-4").active = false;
                    newCuboid.getChildByName("fence-1").children[0].getComponent(cc.BoxCollider).enabled = false;
                    newCuboid.getChildByName("fence-2").children[0].getComponent(cc.BoxCollider).enabled = false;
                    this.previousCuboid.getChildByName("fence-3").children[0].getComponent(cc.BoxCollider).enabled = false;
                    this.previousCuboid.getChildByName("fence-4").children[0].getComponent(cc.BoxCollider).enabled = false;
                    break;
                case 2:
                    var previousX_1 = this.previousCuboid.x;
                    var previousY_1 = this.previousCuboid.y;
                    setTimeout(function () {
                        _this.createExtraCuboid(-_this.distance.x + previousX_1, previousY_1 + _this.distance.y, [false, true, true, false]);
                    }, 50);
                    setTimeout(function () {
                        _this.createExtraCuboid(_this.distance.x + previousX_1, previousY_1 + _this.distance.y, [true, false, false, true]);
                    }, 100);
                    setTimeout(function () {
                        _this.createExtraCuboid(-_this.distance.x * 2 + previousX_1, previousY_1 + _this.distance.y * 2, [false, true, false, true]);
                    }, 150);
                    setTimeout(function () {
                        _this.createExtraCuboid(_this.distance.x * 2 + previousX_1, previousY_1 + _this.distance.y * 2, [true, false, true, false]);
                    }, 200);
                    setTimeout(function () {
                        _this.createExtraCuboid(-_this.distance.x + previousX_1, previousY_1 + _this.distance.y * 3, [true, false, false, true]);
                    }, 250);
                    setTimeout(function () {
                        _this.createExtraCuboid(_this.distance.x + previousX_1, previousY_1 + _this.distance.y * 3, [false, true, true, false]);
                    }, 300);
                    newCuboid.x = this.previousCuboid.x;
                    newCuboid.y = this.previousCuboid.y + this.distance.y * 4;
                    newCuboid.getChildByName("fence-1").active = false;
                    newCuboid.getChildByName("fence-2").active = false;
                    this.previousCuboid.getChildByName("fence-3").active = false;
                    this.previousCuboid.getChildByName("fence-4").active = false;
                    newCuboid.getChildByName("fence-1").children[0].getComponent(cc.BoxCollider).enabled = false;
                    newCuboid.getChildByName("fence-2").children[0].getComponent(cc.BoxCollider).enabled = false;
                    this.previousCuboid.getChildByName("fence-3").children[0].getComponent(cc.BoxCollider).enabled = false;
                    this.previousCuboid.getChildByName("fence-4").children[0].getComponent(cc.BoxCollider).enabled = false;
                    break;
            }
        }
        else {
            this.isSpawnLeft = false;
            newCuboid.x = this.isSpawnLeft ? -this.initialDistance.x : this.initialDistance.x;
            newCuboid.y = this.initialDistance.y;
            newCuboid.getChildByName("fence-1").active = this.isSpawnLeft ? false : true;
            newCuboid.getChildByName("fence-2").active = this.isSpawnLeft ? true : false;
            this.cuboidBase.getChildByName("fence-7").active = this.isSpawnLeft ? true : false;
            this.cuboidBase.getChildByName("fence-8").active = this.isSpawnLeft ? false : true;
            newCuboid.getChildByName("fence-1").children[0].getComponent(cc.BoxCollider).enabled = this.isSpawnLeft ? false : true;
            newCuboid.getChildByName("fence-2").children[0].getComponent(cc.BoxCollider).enabled = this.isSpawnLeft ? true : false;
            this.cuboidBase.getChildByName("fence-7").children[0].getComponent(cc.BoxCollider).enabled = this.isSpawnLeft ? true : false;
            this.cuboidBase.getChildByName("fence-8").children[0].getComponent(cc.BoxCollider).enabled = this.isSpawnLeft ? false : true;
        }
        newCuboid.zIndex = -newCuboid.y / 70;
        newCuboid.parent = this.cuboidContainer;
        this.previousCuboid = newCuboid;
        var isDiamondActive = Math.random() < currentLevel.diamondSpawnRate;
        if (isDiamondActive) {
            var newDiamond = this.createDiamond(newCuboid.x, newCuboid.y + 85);
            newCuboid.getComponent(cuboid_1.default).diamond = newDiamond;
        }
        else {
            newCuboid.getComponent(cuboid_1.default).diamond = null;
        }
    };
    playGround.prototype.createDiamond = function (x, y) {
        var newDiamond = null;
        if (this.diamondPool.size() > 0) {
            newDiamond = this.diamondPool.get();
        }
        else {
            newDiamond = cc.instantiate(this.diamond);
        }
        newDiamond.x = x;
        newDiamond.y = y;
        newDiamond.parent = this.diamondContainer;
        newDiamond.getComponent(diamond_1.default).diamondSprite.node.active = true;
        newDiamond.getComponent(diamond_1.default).diamondParticle.node.active = false;
        newDiamond.getComponent(diamond_1.default).lblScorePlus.node.active = false;
        return newDiamond;
    };
    playGround.prototype.createExtraCuboid = function (x, y, isActiveArr) {
        if (isActiveArr === void 0) { isActiveArr = [true, true, true, true]; }
        var cuboid = null;
        if (this.extraCuboidPool.size() > 0) {
            cuboid = this.extraCuboidPool.get();
        }
        else {
            cuboid = cc.instantiate(this.cuboid);
        }
        cuboid.x = x;
        cuboid.y = y;
        cuboid.getChildByName("frontFace").getComponent(cc.Sprite)
            .spriteFrame = this.roadSpriteFrame;
        cuboid.parent = this.cuboidContainer;
        cuboid.name = "ExtraCuboid";
        cuboid.zIndex = -cuboid.y / 70;
        var isDiamondActive = Math.random() < levelDesign[this.currentLevel].diamondSpawnRate;
        if (isDiamondActive) {
            var newDiamond = this.createDiamond(x, y + 85);
            cuboid.getComponent(cuboid_1.default).diamond = newDiamond;
        }
        else {
            cuboid.getComponent(cuboid_1.default).diamond = null;
        }
        cuboid.getChildByName("fence-1").active = isActiveArr[0];
        cuboid.getChildByName("fence-2").active = isActiveArr[1];
        cuboid.getChildByName("fence-3").active = isActiveArr[2];
        cuboid.getChildByName("fence-4").active = isActiveArr[3];
        cuboid.getChildByName("fence-1").children[0].getComponent(cc.BoxCollider).enabled = isActiveArr[0];
        cuboid.getChildByName("fence-2").children[0].getComponent(cc.BoxCollider).enabled = isActiveArr[1];
        cuboid.getChildByName("fence-3").children[0].getComponent(cc.BoxCollider).enabled = isActiveArr[2];
        cuboid.getChildByName("fence-4").children[0].getComponent(cc.BoxCollider).enabled = isActiveArr[3];
        cuboid.getChildByName("objectRandom").active = false;
    };
    playGround.prototype.ballMoveScheduler = function (dt) {
        var _this = this;
        if (this.isPlayerDead) {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_EXPLODE);
            this.unschedule(this.ballMoveScheduler);
            this.dragonSpine.timeScale = 1;
            this.dragonSpine.setAnimation(0, "Crash_Animation", false);
            this.dragonSpine.setCompleteListener(function () {
                StageInGame_1.default.Instance.setGameOver(_this.playerIndex, true);
                _this.showPopupEndGame();
                _this.diamondPool.clear();
                _this.extraCuboidPool.clear();
            });
        }
        var vec = new cc.Vec2(0, 0);
        cc.Vec2.lerp(vec, this.playerBall.getPosition(), this.playerBall.getPosition().clone().add(new cc.Vec2((this.isMoveLeft ? -1 : 1) * dt * this.distance.x * 2.5, dt * this.distance.y * 2.5)), 1);
        this.playerBall.setPosition(vec);
        cc.Vec2.lerp(vec, this.bg.parent.getPosition(), this.bg.parent.getPosition().clone().add(new cc.Vec2(0, -(dt * this.distance.y * 2.5))), 1);
        this.bg.parent.setPosition(vec);
        if (this.bg.parent.y <= -1080) {
            this.bg.parent.y += 720;
            this.diamondContainer.y -= 720;
            this.cuboidContainer.y -= 720;
        }
    };
    playGround.prototype.showPopupEndGame = function () {
        this.endGamePopup.active = true;
        cc.tween(this.endGamePopup).to(0.3, { scale: 1 }, { easing: 'bounceOut' }).start();
        this.popupLabel.string = GameDefine_1.default.player + " " + (this.playerIndex + 1) + " " + GameDefine_1.default.died;
        this.bannerLabel.string = GameDefine_1.default.gameover;
    };
    playGround.prototype.showMessagePlayerDisconnect = function (disconnectMessage) {
        if (!disconnectMessage)
            return;
        this.popupLabel.string = disconnectMessage;
        this.bannerLabel.string = GameDefine_1.default.disconnect;
    };
    playGround.prototype.startMoveBall = function () {
        this.schedule(this.ballMoveScheduler);
        this.isReady = true;
        this.isPlayerDead = false;
    };
    playGround.prototype.scoreUpdate = function (scoreAdd) {
        if (scoreAdd === void 0) { scoreAdd = 1; }
        this.score += scoreAdd;
        this.lblScore.string = this.score.toString();
        cc.tween(this.lblScore.node).to(0.1, { scale: 1.2 }).to(0.1, { scale: 1 }).start();
        StageInGame_1.default.Instance.playerScore[this.playerIndex] = this.score;
    };
    __decorate([
        property(cc.Node)
    ], playGround.prototype, "cuboid", void 0);
    __decorate([
        property(cc.Node)
    ], playGround.prototype, "diamond", void 0);
    __decorate([
        property(cc.Node)
    ], playGround.prototype, "cuboidContainer", void 0);
    __decorate([
        property(cc.Node)
    ], playGround.prototype, "cuboidBase", void 0);
    __decorate([
        property(cc.Node)
    ], playGround.prototype, "playerBall", void 0);
    __decorate([
        property(cc.Label)
    ], playGround.prototype, "lblScore", void 0);
    __decorate([
        property(cc.Node)
    ], playGround.prototype, "bg", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], playGround.prototype, "dragonSP", void 0);
    __decorate([
        property(cc.Node)
    ], playGround.prototype, "diamondContainer", void 0);
    __decorate([
        property(cc.Node)
    ], playGround.prototype, "endGamePopup", void 0);
    __decorate([
        property(cc.Label)
    ], playGround.prototype, "bannerLabel", void 0);
    __decorate([
        property(cc.Label)
    ], playGround.prototype, "popupLabel", void 0);
    playGround = __decorate([
        ccclass
    ], playGround);
    return playGround;
}(cc.Component));
exports.default = playGround;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xccGxheUdyb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFDM0MsMkRBQXNEO0FBRXRELG1EQUE4QztBQUM5QywrQ0FBZ0Q7QUFDaEQsOENBQXlDO0FBQ3pDLG1DQUE4QjtBQUM5QixxQ0FBZ0M7QUFFMUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFtVkM7UUFqVnNCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixxQkFBZSxHQUFZLElBQUksQ0FBQztRQUNoQyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUMxQixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBQzNCLFFBQUUsR0FBWSxJQUFJLENBQUM7UUFDWixjQUFRLEdBQXFCLEVBQUUsQ0FBQztRQUN2QyxzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFDakMsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFDNUIsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFDN0IsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFekMsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDdkIsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFDL0IsY0FBUSxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsRyxxQkFBZSxHQUFZLEVBQUUs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RSxDQUFDO1FBQ25GLHFCQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwRSxDQUFDO0lBaFZrQjtRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FBd0I7SUFDdkI7UUFBbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQXlCO0lBQ3hCO1FBQWxCLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUFpQztJQUNoQztRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFBNEI7SUFDM0I7UUFBbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQTRCO0lBQzFCO1FBQW5CLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUEyQjtJQUMzQjtRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FBb0I7SUFDWjtRQUF6QixRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztnREFBaUM7SUFDdkM7UUFBbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQWtDO0lBQ2pDO1FBQWxCLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUE4QjtJQUM1QjtRQUFuQixRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFBOEI7SUFDN0I7UUFBbkIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQTZCO0lBYi9CLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FtVjlCO0lBQUQsaUJBQUM7Q0FuVkQsQUFtVkMsQ0FuVnVDLEVBQUUsQ0FBQyxTQUFTLEdBbVZuRDtrQkFuVm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZURlZmluZSBmcm9tIFwiLi9nYW1lL0dhbWVEZWZpbmVcIjtcclxuaW1wb3J0IFBlZXJNYW5hZ2VyIGZyb20gXCIuL1BlZXJDb21wb25lbnQvUGVlck1hbmFnZXJcIjtcclxuaW1wb3J0IFN0YWdlR2FtZUVuZCBmcm9tIFwiLi9zdGFnZS9TdGFnZUdhbWVFbmRcIjtcclxuaW1wb3J0IFN0YWdlSW5HYW1lIGZyb20gXCIuL3N0YWdlL1N0YWdlSW5HYW1lXCI7XHJcbmltcG9ydCAqIGFzIGxldmVsRGVzaWduIGZyb20gJy4uL2xldmVsRGVzaWduLmpzJ1xyXG5pbXBvcnQgU291bmRNZ3IgZnJvbSBcIi4vY29tbW9uL1NvdW5kTWdyXCI7XHJcbmltcG9ydCBDdWJvaWQgZnJvbSBcIi4vY3Vib2lkXCI7XHJcbmltcG9ydCBEaWFtb25kIGZyb20gXCIuL2RpYW1vbmRcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwbGF5R3JvdW5kIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgY3Vib2lkOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBkaWFtb25kOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBjdWJvaWRDb250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIGN1Ym9pZEJhc2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIHBsYXllckJhbGw6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKSBsYmxTY29yZTogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIGJnOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSkgZHJhZ29uU1A6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBkaWFtb25kQ29udGFpbmVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBlbmRHYW1lUG9wdXA6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKSBiYW5uZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKSBwb3B1cExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHBsYXllckluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBwcmV2aW91c0N1Ym9pZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGRpc3RhbmNlOiBjYy5WZWMyID0gY2MudjIoMTAwICogTWF0aC5jb3MoNDUgKiBNYXRoLlBJIC8gMTgwKSwgMTAwICogTWF0aC5jb3MoNDUgKiBNYXRoLlBJIC8gMTgwKSk7XHJcbiAgICBwcml2YXRlIGluaXRpYWxEaXN0YW5jZTogY2MuVmVjMiA9IGNjLnYyKDEwMCAqIE1hdGguY29zKDQ1ICogTWF0aC5QSSAvIDE4MCksIDAgKiBNYXRoLmNvcyg0NSAqIE1hdGguUEkgLyAxODApKTtcclxuICAgIHByaXZhdGUgaXNNb3ZlTGVmdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGlzUGxheWVyRGVhZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBzY29yZTogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBkaWFtb25kUG9vbDogY2MuTm9kZVBvb2wgPSBuZXcgY2MuTm9kZVBvb2woKTtcclxuICAgIHB1YmxpYyBleHRyYUN1Ym9pZFBvb2w6IGNjLk5vZGVQb29sID0gbmV3IGNjLk5vZGVQb29sKCk7XHJcbiAgICBwdWJsaWMgaXNSZWFkeTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc1NwYXduTGVmdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50TGV2ZWw6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGN1YmlvZENvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBpc0NoYW5naW5nRGlyZWN0aW9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGRyYWdvblNwaW5lOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIGRyYWdvblNraW46IHN0cmluZ1tdID0gW1wiQ2hhcjNcIiwgXCJDaGFyMlwiLCBcIkNoYXIxXCJdO1xyXG4gICAgcHVibGljIGJnU3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIHB1YmxpYyByb2FkU3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIHB1YmxpYyBvYmplY3RzU3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lW10gPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgcGxheWVyUG9zID0gbmV3IGNjLlZlYzIoMCwgMCk7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChQZWVyTWFuYWdlci5JbnN0YW5jZS5pc1BsYXlXaXRoUmVtb3RlICYmIHRoaXMucGxheWVySW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMTMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbGV0IGluaXRDb3VudCA9IDEwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5pdENvdW50OyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IGRpYW1vbmQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmRpYW1vbmQpO1xyXG4gICAgICAgICAgICB0aGlzLmRpYW1vbmRQb29sLnB1dChkaWFtb25kKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpbml0RXh0cmFDb3VudCA9IDMwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5pdEV4dHJhQ291bnQ7ICsraSkge1xyXG4gICAgICAgICAgICBsZXQgZXh0cmFDdWJvaWQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmN1Ym9pZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZXh0cmFDdWJvaWRQb29sLnB1dChleHRyYUN1Ym9pZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRyYWdvblNwaW5lID0gdGhpcy5wbGF5ZXJCYWxsLmdldENoaWxkQnlOYW1lKFwicGxheWVyQ2hhclwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyQmFsbC56SW5kZXggPSA5OTk7XHJcbiAgICAgICAgdGhpcy5jdWJvaWRCYXNlLnpJbmRleCA9IDA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTU7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUN1Ym9pZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kcmFnb25TcGluZS5zZXRTa2luKHRoaXMuZHJhZ29uU2tpblt0aGlzLnBsYXllckluZGV4XSk7XHJcblxyXG4gICAgICAgIHRoaXMuYmcuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmJnU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgdGhpcy5jdWJvaWRCYXNlLmdldENoaWxkQnlOYW1lKFwiZnJvbnRGYWNlXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cclxuICAgICAgICAgICAgdGhpcy5yb2FkU3ByaXRlRnJhbWU7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlRGlyZWN0aW9uKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1BsYXllckRlYWQgJiYgdGhpcy5pc1JlYWR5ICYmICF0aGlzLmlzQ2hhbmdpbmdEaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5pc01vdmVMZWZ0ID0gIXRoaXMuaXNNb3ZlTGVmdDtcclxuICAgICAgICAgICAgdGhpcy5pc0NoYW5naW5nRGlyZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5wbGF5ZXJCYWxsKS50bygwLjE1LCB7XHJcbiAgICAgICAgICAgICAgICBhbmdsZTogdGhpcy5pc01vdmVMZWZ0ID8gNDUgOiAtNDUsXHJcbiAgICAgICAgICAgIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0NoYW5naW5nRGlyZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmVVcGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQ3Vib2lkKG5ld0N1Ym9pZDogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY3Vib2lkKSkge1xyXG4gICAgICAgIG5ld0N1Ym9pZC5nZXRDaGlsZEJ5TmFtZShcImZyb250RmFjZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9XHJcbiAgICAgICAgICAgIHRoaXMucm9hZFNwcml0ZUZyYW1lO1xyXG5cclxuICAgICAgICBjb25zdCBuZXh0TGV2ZWwgPSBsZXZlbERlc2lnblt0aGlzLmN1cnJlbnRMZXZlbCArIDFdO1xyXG4gICAgICAgIGlmIChuZXh0TGV2ZWwpIHtcclxuICAgICAgICAgICAgaWYgKCsrdGhpcy5jdWJpb2RDb3VudCA+PSBuZXh0TGV2ZWwuc3RhcnRJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWwrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudExldmVsID0gbGV2ZWxEZXNpZ25bdGhpcy5jdXJyZW50TGV2ZWxdO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcmV2aW91c0N1Ym9pZCkge1xyXG4gICAgICAgICAgICBsZXQgcmFuZG9tID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgbGV0IHNwbGl0VmFsdWUgPSAwO1xyXG4gICAgICAgICAgICBpZiAocmFuZG9tIDwgY3VycmVudExldmVsLmRvdWJsZVdheTJSYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBzcGxpdFZhbHVlID0gMjtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByZXZpb3VzQ3Vib2lkLnggPCAtMTA1IHx8IHRoaXMucHJldmlvdXNDdWJvaWQueCA+IDEwNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwbGl0VmFsdWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXZpb3VzQ3Vib2lkLnggPCAtNzAgfHwgdGhpcy5wcmV2aW91c0N1Ym9pZC54ID4gNzApIHtcclxuICAgICAgICAgICAgICAgICAgICBzcGxpdFZhbHVlID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyYW5kb20gPCBjdXJyZW50TGV2ZWwuZG91YmxlV2F5MlJhdGUgKyBjdXJyZW50TGV2ZWwuZG91YmxlV2F5MVJhdGUpIHtcclxuICAgICAgICAgICAgICAgIHNwbGl0VmFsdWUgPSAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJldmlvdXNDdWJvaWQueCA8IC0xMDUgfHwgdGhpcy5wcmV2aW91c0N1Ym9pZC54ID4gMTA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BsaXRWYWx1ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzcGxpdFZhbHVlID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3dpdGNoIChzcGxpdFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCBjdXJyZW50TGV2ZWwuZGlyZWN0aW9uQ2hhbmdlUmF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU3Bhd25MZWZ0ID0gIXRoaXMuaXNTcGF3bkxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByZXZpb3VzQ3Vib2lkLnggPCAtMTQwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTcGF3bkxlZnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldmlvdXNDdWJvaWQueCA+IDE0MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU3Bhd25MZWZ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0N1Ym9pZC54ID0gKHRoaXMuaXNTcGF3bkxlZnQgPyAtdGhpcy5kaXN0YW5jZS54IDogdGhpcy5kaXN0YW5jZS54KSArIHRoaXMucHJldmlvdXNDdWJvaWQueDtcclxuICAgICAgICAgICAgICAgICAgICBuZXdDdWJvaWQueSA9IHRoaXMucHJldmlvdXNDdWJvaWQueSArIHRoaXMuZGlzdGFuY2UueTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q3Vib2lkLmdldENoaWxkQnlOYW1lKFwiZmVuY2UtMVwiKS5hY3RpdmUgPSB0aGlzLmlzU3Bhd25MZWZ0ID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0N1Ym9pZC5nZXRDaGlsZEJ5TmFtZShcImZlbmNlLTJcIikuYWN0aXZlID0gdGhpcy5pc1NwYXduTGVmdCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzQ3Vib2lkLmdldENoaWxkQnlOYW1lKFwiZmVuY2UtM1wiKS5hY3RpdmUgPSB0aGlzLmlzU3Bhd25MZWZ0ID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNDdWJvaWQuZ2V0Q2hpbGRCeU5hbWUoXCJmZW5jZS00XCIpLmFjdGl2ZSA9IHRoaXMuaXNTcGF3bkxlZnQgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q3Vib2lkLmdldENoaWxkQnlOYW1lKFwiZmVuY2UtMVwiKS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpLmVuYWJsZWQgPSB0aGlzLmlzU3Bhd25MZWZ0ID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0N1Ym9pZC5nZXRDaGlsZEJ5TmFtZShcImZlbmNlLTJcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKS5lbmFibGVkID0gdGhpcy5pc1NwYXduTGVmdCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzQ3Vib2lkLmdldENoaWxkQnlOYW1lKFwiZmVuY2UtM1wiKS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpLmVuYWJsZWQgPSB0aGlzLmlzU3Bhd25MZWZ0ID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNDdWJvaWQuZ2V0Q2hpbGRCeU5hbWUoXCJmZW5jZS00XCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikuZW5hYmxlZCA9IHRoaXMuaXNTcGF3bkxlZnQgPyBmYWxzZSA6IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC41KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvYmplY3RTcHJpdGUgPSBuZXdDdWJvaWQuZ2V0Q2hpbGRCeU5hbWUoXCJvYmplY3RSYW5kb21cIikuZ2V0Q2hpbGRCeU5hbWUoXCJvYmplY3RTcHJpdGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0N1Ym9pZC5nZXRDaGlsZEJ5TmFtZShcIm9iamVjdFJhbmRvbVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RTcHJpdGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmplY3RzU3ByaXRlRnJhbWVbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5vYmplY3RzU3ByaXRlRnJhbWUubGVuZ3RoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFNwcml0ZS54ID0gbmV3Q3Vib2lkLnggPiAwID8gLTQwMCA6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdDdWJvaWQuZ2V0Q2hpbGRCeU5hbWUoXCJvYmplY3RSYW5kb21cIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcmV2WCA9IHRoaXMucHJldmlvdXNDdWJvaWQueDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJldlkgPSB0aGlzLnByZXZpb3VzQ3Vib2lkLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRXh0cmFDdWJvaWQoLXRoaXMuZGlzdGFuY2UueCArIHByZXZYLCBwcmV2WSArIHRoaXMuZGlzdGFuY2UueSwgW2ZhbHNlLCB0cnVlLCBmYWxzZSwgdHJ1ZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUV4dHJhQ3Vib2lkKHRoaXMuZGlzdGFuY2UueCArIHByZXZYLCBwcmV2WSArIHRoaXMuZGlzdGFuY2UueSwgW3RydWUsIGZhbHNlLCB0cnVlLCBmYWxzZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMClcclxuICAgICAgICAgICAgICAgICAgICBuZXdDdWJvaWQueCA9IHRoaXMucHJldmlvdXNDdWJvaWQueDtcclxuICAgICAgICAgICAgICAgICAgICBuZXdDdWJvaWQueSA9IHRoaXMucHJldmlvdXNDdWJvaWQueSArIHRoaXMuZGlzdGFuY2UueSAqIDI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0N1Ym9pZC5nZXRDaGlsZEJ5TmFtZShcImZlbmNlLTFcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q3Vib2lkLmdldENoaWxkQnlOYW1lKFwiZmVuY2UtMlwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzQ3Vib2lkLmdldENoaWxkQnlOYW1lKFwiZmVuY2UtM1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzQ3Vib2lkLmdldENoaWxkQnlOYW1lKFwiZmVuY2UtNFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdDdWJvaWQuZ2V0Q2hpbGRCeU5hbWUoXCJmZW5jZS0xXCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0N1Ym9pZC5nZXRDaGlsZEJ5TmFtZShcImZlbmNlLTJcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c0N1Ym9pZC5nZXRDaGlsZEJ5TmFtZShcImZlbmNlLTNcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c0N1Ym9pZC5nZXRDaGlsZEJ5TmFtZShcImZlbmNlLTRcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByZXZpb3VzWCA9IHRoaXMucHJldmlvdXNDdWJvaWQueDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJldmlvdXNZID0gdGhpcy5wcmV2aW91c0N1Ym9pZC55O1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUV4dHJhQ3Vib2lkKC10aGlzLmRpc3RhbmNlLnggKyBwcmV2aW91c1gsIHByZXZpb3VzWSArIHRoaXMuZGlzdGFuY2UueSwgW2ZhbHNlLCB0cnVlLCB0cnVlLCBmYWxzZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVFeHRyYUN1Ym9pZCh0aGlzLmRpc3RhbmNlLnggKyBwcmV2aW91c1gsIHByZXZpb3VzWSArIHRoaXMuZGlzdGFuY2UueSwgW3RydWUsIGZhbHNlLCBmYWxzZSwgdHJ1ZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRXh0cmFDdWJvaWQoLXRoaXMuZGlzdGFuY2UueCAqIDIgKyBwcmV2aW91c1gsIHByZXZpb3VzWSArIHRoaXMuZGlzdGFuY2UueSAqIDIsIFtmYWxzZSwgdHJ1ZSwgZmFsc2UsIHRydWVdKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxNTApO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUV4dHJhQ3Vib2lkKHRoaXMuZGlzdGFuY2UueCAqIDIgKyBwcmV2aW91c1gsIHByZXZpb3VzWSArIHRoaXMuZGlzdGFuY2UueSAqIDIsIFt0cnVlLCBmYWxzZSwgdHJ1ZSwgZmFsc2VdKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAyMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUV4dHJhQ3Vib2lkKC10aGlzLmRpc3RhbmNlLnggKyBwcmV2aW91c1gsIHByZXZpb3VzWSArIHRoaXMuZGlzdGFuY2UueSAqIDMsIFt0cnVlLCBmYWxzZSwgZmFsc2UsIHRydWVdKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAyNTApO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUV4dHJhQ3Vib2lkKHRoaXMuZGlzdGFuY2UueCArIHByZXZpb3VzWCwgcHJldmlvdXNZICsgdGhpcy5kaXN0YW5jZS55ICogMywgW2ZhbHNlLCB0cnVlLCB0cnVlLCBmYWxzZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q3Vib2lkLnggPSB0aGlzLnByZXZpb3VzQ3Vib2lkLng7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q3Vib2lkLnkgPSB0aGlzLnByZXZpb3VzQ3Vib2lkLnkgKyB0aGlzLmRpc3RhbmNlLnkgKiA0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBuZXdDdWJvaWQuZ2V0Q2hpbGRCeU5hbWUoXCJmZW5jZS0xXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0N1Ym9pZC5nZXRDaGlsZEJ5TmFtZShcImZlbmNlLTJcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c0N1Ym9pZC5nZXRDaGlsZEJ5TmFtZShcImZlbmNlLTNcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c0N1Ym9pZC5nZXRDaGlsZEJ5TmFtZShcImZlbmNlLTRcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q3Vib2lkLmdldENoaWxkQnlOYW1lKFwiZmVuY2UtMVwiKS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdDdWJvaWQuZ2V0Q2hpbGRCeU5hbWUoXCJmZW5jZS0yXCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNDdWJvaWQuZ2V0Q2hpbGRCeU5hbWUoXCJmZW5jZS0zXCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNDdWJvaWQuZ2V0Q2hpbGRCeU5hbWUoXCJmZW5jZS00XCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pc1NwYXduTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBuZXdDdWJvaWQueCA9IHRoaXMuaXNTcGF3bkxlZnQgPyAtdGhpcy5pbml0aWFsRGlzdGFuY2UueCA6IHRoaXMuaW5pdGlhbERpc3RhbmNlLng7XHJcbiAgICAgICAgICAgIG5ld0N1Ym9pZC55ID0gdGhpcy5pbml0aWFsRGlzdGFuY2UueTtcclxuICAgICAgICAgICAgbmV3Q3Vib2lkLmdldENoaWxkQnlOYW1lKFwiZmVuY2UtMVwiKS5hY3RpdmUgPSB0aGlzLmlzU3Bhd25MZWZ0ID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgICAgICBuZXdDdWJvaWQuZ2V0Q2hpbGRCeU5hbWUoXCJmZW5jZS0yXCIpLmFjdGl2ZSA9IHRoaXMuaXNTcGF3bkxlZnQgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY3Vib2lkQmFzZS5nZXRDaGlsZEJ5TmFtZShcImZlbmNlLTdcIikuYWN0aXZlID0gdGhpcy5pc1NwYXduTGVmdCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jdWJvaWRCYXNlLmdldENoaWxkQnlOYW1lKFwiZmVuY2UtOFwiKS5hY3RpdmUgPSB0aGlzLmlzU3Bhd25MZWZ0ID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgICAgICBuZXdDdWJvaWQuZ2V0Q2hpbGRCeU5hbWUoXCJmZW5jZS0xXCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikuZW5hYmxlZCA9IHRoaXMuaXNTcGF3bkxlZnQgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgICAgIG5ld0N1Ym9pZC5nZXRDaGlsZEJ5TmFtZShcImZlbmNlLTJcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKS5lbmFibGVkID0gdGhpcy5pc1NwYXduTGVmdCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jdWJvaWRCYXNlLmdldENoaWxkQnlOYW1lKFwiZmVuY2UtN1wiKS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpLmVuYWJsZWQgPSB0aGlzLmlzU3Bhd25MZWZ0ID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmN1Ym9pZEJhc2UuZ2V0Q2hpbGRCeU5hbWUoXCJmZW5jZS04XCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikuZW5hYmxlZCA9IHRoaXMuaXNTcGF3bkxlZnQgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld0N1Ym9pZC56SW5kZXggPSAtbmV3Q3Vib2lkLnkgLyA3MDtcclxuICAgICAgICBuZXdDdWJvaWQucGFyZW50ID0gdGhpcy5jdWJvaWRDb250YWluZXI7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c0N1Ym9pZCA9IG5ld0N1Ym9pZDtcclxuXHJcbiAgICAgICAgbGV0IGlzRGlhbW9uZEFjdGl2ZSA9IE1hdGgucmFuZG9tKCkgPCBjdXJyZW50TGV2ZWwuZGlhbW9uZFNwYXduUmF0ZTtcclxuICAgICAgICBpZiAoaXNEaWFtb25kQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdEaWFtb25kID0gdGhpcy5jcmVhdGVEaWFtb25kKG5ld0N1Ym9pZC54LCBuZXdDdWJvaWQueSArIDg1KTtcclxuICAgICAgICAgICAgbmV3Q3Vib2lkLmdldENvbXBvbmVudChDdWJvaWQpLmRpYW1vbmQgPSBuZXdEaWFtb25kO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld0N1Ym9pZC5nZXRDb21wb25lbnQoQ3Vib2lkKS5kaWFtb25kID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRGlhbW9uZCh4LCB5KSB7XHJcbiAgICAgICAgbGV0IG5ld0RpYW1vbmQgPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLmRpYW1vbmRQb29sLnNpemUoKSA+IDApIHtcclxuICAgICAgICAgICAgbmV3RGlhbW9uZCA9IHRoaXMuZGlhbW9uZFBvb2wuZ2V0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3RGlhbW9uZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGlhbW9uZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld0RpYW1vbmQueCA9IHg7XHJcbiAgICAgICAgbmV3RGlhbW9uZC55ID0geTtcclxuICAgICAgICBuZXdEaWFtb25kLnBhcmVudCA9IHRoaXMuZGlhbW9uZENvbnRhaW5lcjtcclxuICAgICAgICBuZXdEaWFtb25kLmdldENvbXBvbmVudChEaWFtb25kKS5kaWFtb25kU3ByaXRlLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBuZXdEaWFtb25kLmdldENvbXBvbmVudChEaWFtb25kKS5kaWFtb25kUGFydGljbGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBuZXdEaWFtb25kLmdldENvbXBvbmVudChEaWFtb25kKS5sYmxTY29yZVBsdXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld0RpYW1vbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRXh0cmFDdWJvaWQoeCwgeSwgaXNBY3RpdmVBcnI6IGJvb2xlYW5bXSA9IFt0cnVlLCB0cnVlLCB0cnVlLCB0cnVlXSkge1xyXG4gICAgICAgIGxldCBjdWJvaWQgPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLmV4dHJhQ3Vib2lkUG9vbC5zaXplKCkgPiAwKSB7XHJcbiAgICAgICAgICAgIGN1Ym9pZCA9IHRoaXMuZXh0cmFDdWJvaWRQb29sLmdldCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGN1Ym9pZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY3Vib2lkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3Vib2lkLnggPSB4O1xyXG4gICAgICAgIGN1Ym9pZC55ID0geTtcclxuICAgICAgICBjdWJvaWQuZ2V0Q2hpbGRCeU5hbWUoXCJmcm9udEZhY2VcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuICAgICAgICAgICAgLnNwcml0ZUZyYW1lID0gdGhpcy5yb2FkU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgY3Vib2lkLnBhcmVudCA9IHRoaXMuY3Vib2lkQ29udGFpbmVyO1xyXG4gICAgICAgIGN1Ym9pZC5uYW1lID0gXCJFeHRyYUN1Ym9pZFwiO1xyXG4gICAgICAgIGN1Ym9pZC56SW5kZXggPSAtY3Vib2lkLnkgLyA3MDtcclxuXHJcbiAgICAgICAgbGV0IGlzRGlhbW9uZEFjdGl2ZSA9IE1hdGgucmFuZG9tKCkgPCBsZXZlbERlc2lnblt0aGlzLmN1cnJlbnRMZXZlbF0uZGlhbW9uZFNwYXduUmF0ZTtcclxuICAgICAgICBpZiAoaXNEaWFtb25kQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdEaWFtb25kID0gdGhpcy5jcmVhdGVEaWFtb25kKHgsIHkgKyA4NSk7XHJcbiAgICAgICAgICAgIGN1Ym9pZC5nZXRDb21wb25lbnQoQ3Vib2lkKS5kaWFtb25kID0gbmV3RGlhbW9uZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjdWJvaWQuZ2V0Q29tcG9uZW50KEN1Ym9pZCkuZGlhbW9uZCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjdWJvaWQuZ2V0Q2hpbGRCeU5hbWUoXCJmZW5jZS0xXCIpLmFjdGl2ZSA9IGlzQWN0aXZlQXJyWzBdO1xyXG4gICAgICAgIGN1Ym9pZC5nZXRDaGlsZEJ5TmFtZShcImZlbmNlLTJcIikuYWN0aXZlID0gaXNBY3RpdmVBcnJbMV07XHJcbiAgICAgICAgY3Vib2lkLmdldENoaWxkQnlOYW1lKFwiZmVuY2UtM1wiKS5hY3RpdmUgPSBpc0FjdGl2ZUFyclsyXTtcclxuICAgICAgICBjdWJvaWQuZ2V0Q2hpbGRCeU5hbWUoXCJmZW5jZS00XCIpLmFjdGl2ZSA9IGlzQWN0aXZlQXJyWzNdO1xyXG5cclxuICAgICAgICBjdWJvaWQuZ2V0Q2hpbGRCeU5hbWUoXCJmZW5jZS0xXCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikuZW5hYmxlZCA9IGlzQWN0aXZlQXJyWzBdO1xyXG4gICAgICAgIGN1Ym9pZC5nZXRDaGlsZEJ5TmFtZShcImZlbmNlLTJcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKS5lbmFibGVkID0gaXNBY3RpdmVBcnJbMV07XHJcbiAgICAgICAgY3Vib2lkLmdldENoaWxkQnlOYW1lKFwiZmVuY2UtM1wiKS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpLmVuYWJsZWQgPSBpc0FjdGl2ZUFyclsyXTtcclxuICAgICAgICBjdWJvaWQuZ2V0Q2hpbGRCeU5hbWUoXCJmZW5jZS00XCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikuZW5hYmxlZCA9IGlzQWN0aXZlQXJyWzNdO1xyXG5cclxuICAgICAgICBjdWJvaWQuZ2V0Q2hpbGRCeU5hbWUoXCJvYmplY3RSYW5kb21cIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYmFsbE1vdmVTY2hlZHVsZXIoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1BsYXllckRlYWQpIHtcclxuICAgICAgICAgICAgU291bmRNZ3IucGxheVNmeChTb3VuZE1nci5JbnN0YW5jZS5TRlhfRVhQTE9ERSk7XHJcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmJhbGxNb3ZlU2NoZWR1bGVyKTtcclxuICAgICAgICAgICAgdGhpcy5kcmFnb25TcGluZS50aW1lU2NhbGUgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLmRyYWdvblNwaW5lLnNldEFuaW1hdGlvbigwLCBcIkNyYXNoX0FuaW1hdGlvblwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ29uU3BpbmUuc2V0Q29tcGxldGVMaXN0ZW5lcigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBTdGFnZUluR2FtZS5JbnN0YW5jZS5zZXRHYW1lT3Zlcih0aGlzLnBsYXllckluZGV4LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BvcHVwRW5kR2FtZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFtb25kUG9vbC5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leHRyYUN1Ym9pZFBvb2wuY2xlYXIoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB2ZWMgPSBuZXcgY2MuVmVjMigwLCAwKTtcclxuICAgICAgICBjYy5WZWMyLmxlcnAodmVjLCB0aGlzLnBsYXllckJhbGwuZ2V0UG9zaXRpb24oKSwgdGhpcy5wbGF5ZXJCYWxsLmdldFBvc2l0aW9uKCkuY2xvbmUoKS5hZGQobmV3IGNjLlZlYzIoKHRoaXMuaXNNb3ZlTGVmdCA/IC0xIDogMSkgKiBkdCAqIHRoaXMuZGlzdGFuY2UueCAqIDIuNSwgZHQgKiB0aGlzLmRpc3RhbmNlLnkgKiAyLjUpKSwgMSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJCYWxsLnNldFBvc2l0aW9uKHZlYyk7XHJcbiAgICAgICAgY2MuVmVjMi5sZXJwKHZlYywgdGhpcy5iZy5wYXJlbnQuZ2V0UG9zaXRpb24oKSwgdGhpcy5iZy5wYXJlbnQuZ2V0UG9zaXRpb24oKS5jbG9uZSgpLmFkZChuZXcgY2MuVmVjMigwLCAtKGR0ICogdGhpcy5kaXN0YW5jZS55ICogMi41KSkpLCAxKTtcclxuICAgICAgICB0aGlzLmJnLnBhcmVudC5zZXRQb3NpdGlvbih2ZWMpO1xyXG4gICAgICAgIGlmICh0aGlzLmJnLnBhcmVudC55IDw9IC0xMDgwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmcucGFyZW50LnkgKz0gNzIwO1xyXG4gICAgICAgICAgICB0aGlzLmRpYW1vbmRDb250YWluZXIueSAtPSA3MjA7XHJcbiAgICAgICAgICAgIHRoaXMuY3Vib2lkQ29udGFpbmVyLnkgLT0gNzIwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93UG9wdXBFbmRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuZW5kR2FtZVBvcHVwLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5lbmRHYW1lUG9wdXApLnRvKDAuMywgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogJ2JvdW5jZU91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLnBvcHVwTGFiZWwuc3RyaW5nID0gYCR7R2FtZURlZmluZS5wbGF5ZXJ9ICR7dGhpcy5wbGF5ZXJJbmRleCArIDF9ICR7R2FtZURlZmluZS5kaWVkfWA7XHJcbiAgICAgICAgdGhpcy5iYW5uZXJMYWJlbC5zdHJpbmcgPSBHYW1lRGVmaW5lLmdhbWVvdmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dNZXNzYWdlUGxheWVyRGlzY29ubmVjdChkaXNjb25uZWN0TWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCFkaXNjb25uZWN0TWVzc2FnZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucG9wdXBMYWJlbC5zdHJpbmcgPSBkaXNjb25uZWN0TWVzc2FnZTtcclxuICAgICAgICB0aGlzLmJhbm5lckxhYmVsLnN0cmluZyA9IEdhbWVEZWZpbmUuZGlzY29ubmVjdDtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydE1vdmVCYWxsKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5iYWxsTW92ZVNjaGVkdWxlcik7XHJcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzUGxheWVyRGVhZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNjb3JlVXBkYXRlKHNjb3JlQWRkOiBudW1iZXIgPSAxKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZSArPSBzY29yZUFkZDtcclxuICAgICAgICB0aGlzLmxibFNjb3JlLnN0cmluZyA9IHRoaXMuc2NvcmUudG9TdHJpbmcoKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmxibFNjb3JlLm5vZGUpLnRvKDAuMSwgeyBzY2FsZTogMS4yIH0pLnRvKDAuMSwgeyBzY2FsZTogMSB9KS5zdGFydCgpO1xyXG4gICAgICAgIFN0YWdlSW5HYW1lLkluc3RhbmNlLnBsYXllclNjb3JlW3RoaXMucGxheWVySW5kZXhdID0gdGhpcy5zY29yZTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Popups/Popup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0e80ecRCoVPhLuYrk7UOzMr', 'Popup');
// Scripts/Popups/Popup.ts

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
var Popup = /** @class */ (function (_super) {
    __extends(Popup, _super);
    function Popup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Popup.prototype.init = function () {
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    Popup.prototype.start = function () {
    };
    Popup = __decorate([
        ccclass
    ], Popup);
    return Popup;
}(cc.Component));
exports.default = Popup;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUG9wdXBzXFxQb3B1cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFtQyx5QkFBWTtJQUEvQzs7SUFjQSxDQUFDO0lBYlUsb0JBQUksR0FBWDtJQUdBLENBQUM7SUFDRCx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHFCQUFLLEdBQUw7SUFFQSxDQUFDO0lBWGdCLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0FjekI7SUFBRCxZQUFDO0NBZEQsQUFjQyxDQWRrQyxFQUFFLENBQUMsU0FBUyxHQWM5QztrQkFkb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHVibGljIGluaXQoKVxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/PeerComponent/PeerAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1c65drFRtpG/LO3xlybZ0cn', 'PeerAction');
// Scripts/PeerComponent/PeerAction.ts

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
exports.PeerType = void 0;
var PeerClientManager_1 = require("./PeerClientManager");
var PeerDefine_1 = require("./PeerDefine");
var PeerManager_1 = require("./PeerManager");
var PeerType;
(function (PeerType) {
    PeerType[PeerType["NONE"] = 0] = "NONE";
    PeerType[PeerType["SEND"] = 1] = "SEND";
    PeerType[PeerType["RECEIVE"] = 2] = "RECEIVE";
})(PeerType = exports.PeerType || (exports.PeerType = {}));
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PeerHandler = /** @class */ (function () {
    function PeerHandler() {
        this.actionName = PeerDefine_1.PeerActionType.NONE;
        this.eventHandler = [];
        this.customMessage = "";
    }
    __decorate([
        property({ type: cc.Enum(PeerDefine_1.PeerActionType) })
    ], PeerHandler.prototype, "actionName", void 0);
    __decorate([
        property(cc.Component.EventHandler)
    ], PeerHandler.prototype, "eventHandler", void 0);
    __decorate([
        property()
    ], PeerHandler.prototype, "customMessage", void 0);
    PeerHandler = __decorate([
        ccclass("PeerHandler")
    ], PeerHandler);
    return PeerHandler;
}());
var PeerAction = /** @class */ (function (_super) {
    __extends(PeerAction, _super);
    function PeerAction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = PeerType.NONE;
        _this.actionPhase = PeerDefine_1.PeerPhase.NONE;
        _this.actionHandler = [];
        _this.actionName = PeerDefine_1.PeerActionType.NONE;
        _this.eventHandler = [];
        _this.customMessage = "";
        _this.playerSIP = null;
        return _this;
    }
    PeerAction.prototype.onLoad = function () {
        // try
        // {
        switch (this.type) {
            case PeerType.NONE:
                break;
            case PeerType.SEND:
                this.node.on(cc.Node.EventType.TOUCH_END, this.hanleSubmit.bind(this));
                break;
            case PeerType.RECEIVE:
                return;
                PeerManager_1.default.registerEvent(PeerManager_1.default.EventReceivedMessage, this.handleMessage.bind(this));
                break;
        }
        // } catch (e) { }
    };
    PeerAction.prototype.hanleSubmit = function () {
        if (!this.node.active)
            return;
        for (var _i = 0, _a = this.eventHandler; _i < _a.length; _i++) {
            var event = _a[_i];
            event && event.emit([]);
        }
        var msg = {
            action: this.actionName,
            phase: this.actionPhase,
            customParam: this.customMessage,
        };
        console.log(this.customMessage);
        if (PeerClientManager_1.default.Instance)
            PeerClientManager_1.default.Instance.sendMessage(msg);
        else if (PeerManager_1.default.Instance)
            PeerManager_1.default.Instance.sendMessageToAll(msg);
    };
    PeerAction.prototype.handleMessage = function (e, client) {
        if (!this.node.active)
            return;
        if (this.playerSIP == null || this.playerSIP == client.remoteSIP) {
            console.log(e);
            if (e.phase == this.actionPhase) {
                for (var _i = 0, _a = this.actionHandler; _i < _a.length; _i++) {
                    var handler = _a[_i];
                    if (handler.actionName == e.action) {
                        for (var _b = 0, _c = handler.eventHandler; _b < _c.length; _b++) {
                            var evt = _c[_b];
                            evt && evt.emit([e]);
                        }
                    }
                }
            }
        }
    };
    __decorate([
        property({ type: cc.Enum(PeerType) })
    ], PeerAction.prototype, "type", void 0);
    __decorate([
        property({ type: cc.Enum(PeerDefine_1.PeerPhase) })
    ], PeerAction.prototype, "actionPhase", void 0);
    __decorate([
        property({
            type: PeerHandler,
            visible: function () {
                return this.type == PeerType.RECEIVE;
            },
        })
    ], PeerAction.prototype, "actionHandler", void 0);
    __decorate([
        property({
            type: cc.Enum(PeerDefine_1.PeerActionType),
            visible: function () {
                return this.type == PeerType.SEND;
            },
        })
    ], PeerAction.prototype, "actionName", void 0);
    __decorate([
        property({
            type: cc.Component.EventHandler,
            visible: function () {
                return this.type == PeerType.SEND;
            },
        })
    ], PeerAction.prototype, "eventHandler", void 0);
    __decorate([
        property({
            visible: function () {
                return this.type == PeerType.SEND;
            },
            type: cc.String,
        })
    ], PeerAction.prototype, "customMessage", void 0);
    PeerAction = __decorate([
        ccclass
    ], PeerAction);
    return PeerAction;
}(cc.Component));
exports.default = PeerAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGVlckNvbXBvbmVudFxcUGVlckFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYseURBQW9EO0FBQ3BELDJDQUF5RDtBQUN6RCw2Q0FBMkQ7QUFFM0QsSUFBWSxRQUlYO0FBSkQsV0FBWSxRQUFRO0lBQ2xCLHVDQUFJLENBQUE7SUFDSix1Q0FBSSxDQUFBO0lBQ0osNkNBQU8sQ0FBQTtBQUNULENBQUMsRUFKVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQUluQjtBQUVLLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQUE7UUFDK0MsZUFBVSxHQUNyRCwyQkFBYyxDQUFDLElBQUksQ0FBQztRQUV0QixpQkFBWSxHQUFxQyxFQUFFLENBQUM7UUFFcEQsa0JBQWEsR0FBVyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQU44QztRQUE1QyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQywyQkFBYyxDQUFDLEVBQUUsQ0FBQzttREFDdEI7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7cURBQ2dCO0lBRXBEO1FBREMsUUFBUSxFQUFFO3NEQUNnQjtJQU52QixXQUFXO1FBRGhCLE9BQU8sQ0FBQyxhQUFhLENBQUM7T0FDakIsV0FBVyxDQU9oQjtJQUFELGtCQUFDO0NBUEQsQUFPQyxJQUFBO0FBRUQ7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFtRkM7UUFsRndDLFVBQUksR0FBYSxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQzlCLGlCQUFXLEdBQ2pE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b3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgUGVlckNsaWVudE1hbmFnZXIgZnJvbSBcIi4vUGVlckNsaWVudE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgUGVlckFjdGlvblR5cGUsIFBlZXJQaGFzZSB9IGZyb20gXCIuL1BlZXJEZWZpbmVcIjtcclxuaW1wb3J0IFBlZXJNYW5hZ2VyLCB7IElEYXRhUmVjZWl2ZWQgfSBmcm9tIFwiLi9QZWVyTWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IGVudW0gUGVlclR5cGUge1xyXG4gIE5PTkUsXHJcbiAgU0VORCxcclxuICBSRUNFSVZFLFxyXG59XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzcyhcIlBlZXJIYW5kbGVyXCIpXHJcbmNsYXNzIFBlZXJIYW5kbGVyIHtcclxuICBAcHJvcGVydHkoeyB0eXBlOiBjYy5FbnVtKFBlZXJBY3Rpb25UeXBlKSB9KSBhY3Rpb25OYW1lOiBQZWVyQWN0aW9uVHlwZSA9XHJcbiAgICBQZWVyQWN0aW9uVHlwZS5OT05FO1xyXG4gIEBwcm9wZXJ0eShjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKVxyXG4gIGV2ZW50SGFuZGxlcjogQXJyYXk8Y2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcj4gPSBbXTtcclxuICBAcHJvcGVydHkoKVxyXG4gIGN1c3RvbU1lc3NhZ2U6IHN0cmluZyA9IFwiXCI7XHJcbn1cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVlckFjdGlvbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KHsgdHlwZTogY2MuRW51bShQZWVyVHlwZSkgfSkgdHlwZTogUGVlclR5cGUgPSBQZWVyVHlwZS5OT05FO1xyXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkVudW0oUGVlclBoYXNlKSB9KSBhY3Rpb25QaGFzZTogUGVlclBoYXNlID1cclxuICAgIFBlZXJQaGFzZS5OT05FO1xyXG4gIEBwcm9wZXJ0eSh7XHJcbiAgICB0eXBlOiBQZWVySGFuZGxlcixcclxuICAgIHZpc2libGU6IGZ1bmN0aW9uICh0aGlzOiBQZWVyQWN0aW9uKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnR5cGUgPT0gUGVlclR5cGUuUkVDRUlWRTtcclxuICAgIH0sXHJcbiAgfSlcclxuICBhY3Rpb25IYW5kbGVyOiBBcnJheTxQZWVySGFuZGxlcj4gPSBbXTtcclxuICBAcHJvcGVydHkoe1xyXG4gICAgdHlwZTogY2MuRW51bShQZWVyQWN0aW9uVHlwZSksXHJcbiAgICB2aXNpYmxlOiBmdW5jdGlvbiAodGhpczogUGVlckFjdGlvbikge1xyXG4gICAgICByZXR1cm4gdGhpcy50eXBlID09IFBlZXJUeXBlLlNFTkQ7XHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgYWN0aW9uTmFtZTogUGVlckFjdGlvblR5cGUgPSBQZWVyQWN0aW9uVHlwZS5OT05FO1xyXG4gIEBwcm9wZXJ0eSh7XHJcbiAgICB0eXBlOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLFxyXG4gICAgdmlzaWJsZTogZnVuY3Rpb24gKHRoaXM6IFBlZXJBY3Rpb24pIHtcclxuICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PSBQZWVyVHlwZS5TRU5EO1xyXG4gICAgfSxcclxuICB9KVxyXG4gIGV2ZW50SGFuZGxlcjogQXJyYXk8Y2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcj4gPSBbXTtcclxuICBAcHJvcGVydHkoe1xyXG4gICAgdmlzaWJsZTogZnVuY3Rpb24gKHRoaXM6IFBlZXJBY3Rpb24pIHtcclxuICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PSBQZWVyVHlwZS5TRU5EO1xyXG4gICAgfSxcclxuICAgIHR5cGU6IGNjLlN0cmluZyxcclxuICB9KVxyXG4gIGN1c3RvbU1lc3NhZ2U6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gIHB1YmxpYyBwbGF5ZXJTSVA6IG51bWJlciA9IG51bGw7XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIC8vIHRyeVxyXG4gICAgLy8ge1xyXG4gICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcclxuICAgICAgY2FzZSBQZWVyVHlwZS5OT05FOlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFBlZXJUeXBlLlNFTkQ6XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5oYW5sZVN1Ym1pdC5iaW5kKHRoaXMpKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBQZWVyVHlwZS5SRUNFSVZFOlxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgICBQZWVyTWFuYWdlci5yZWdpc3RlckV2ZW50KFxyXG4gICAgICAgICAgUGVlck1hbmFnZXIuRXZlbnRSZWNlaXZlZE1lc3NhZ2UsXHJcbiAgICAgICAgICB0aGlzLmhhbmRsZU1lc3NhZ2UuYmluZCh0aGlzKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICAvLyB9IGNhdGNoIChlKSB7IH1cclxuICB9XHJcbiAgaGFubGVTdWJtaXQoKSB7XHJcbiAgICBpZiAoIXRoaXMubm9kZS5hY3RpdmUpIHJldHVybjtcclxuICAgIGZvciAobGV0IGV2ZW50IG9mIHRoaXMuZXZlbnRIYW5kbGVyKSB7XHJcbiAgICAgIGV2ZW50ICYmIGV2ZW50LmVtaXQoW10pO1xyXG4gICAgfVxyXG4gICAgbGV0IG1zZzogSURhdGFSZWNlaXZlZCA9IHtcclxuICAgICAgYWN0aW9uOiB0aGlzLmFjdGlvbk5hbWUsXHJcbiAgICAgIHBoYXNlOiB0aGlzLmFjdGlvblBoYXNlLFxyXG4gICAgICBjdXN0b21QYXJhbTogdGhpcy5jdXN0b21NZXNzYWdlLFxyXG4gICAgfTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuY3VzdG9tTWVzc2FnZSk7XHJcbiAgICBpZiAoUGVlckNsaWVudE1hbmFnZXIuSW5zdGFuY2UpIFBlZXJDbGllbnRNYW5hZ2VyLkluc3RhbmNlLnNlbmRNZXNzYWdlKG1zZyk7XHJcbiAgICBlbHNlIGlmIChQZWVyTWFuYWdlci5JbnN0YW5jZSkgUGVlck1hbmFnZXIuSW5zdGFuY2Uuc2VuZE1lc3NhZ2VUb0FsbChtc2cpO1xyXG4gIH1cclxuICBoYW5kbGVNZXNzYWdlKGU6IElEYXRhUmVjZWl2ZWQsIGNsaWVudCkge1xyXG4gICAgaWYgKCF0aGlzLm5vZGUuYWN0aXZlKSByZXR1cm47XHJcbiAgICBpZiAodGhpcy5wbGF5ZXJTSVAgPT0gbnVsbCB8fCB0aGlzLnBsYXllclNJUCA9PSBjbGllbnQucmVtb3RlU0lQKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICBpZiAoZS5waGFzZSA9PSB0aGlzLmFjdGlvblBoYXNlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaGFuZGxlciBvZiB0aGlzLmFjdGlvbkhhbmRsZXIpIHtcclxuICAgICAgICAgIGlmIChoYW5kbGVyLmFjdGlvbk5hbWUgPT0gZS5hY3Rpb24pIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgZXZ0IG9mIGhhbmRsZXIuZXZlbnRIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgICAgZXZ0ICYmIGV2dC5lbWl0KFtlXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/PeerComponent/PeerManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f9ace5O2YJCy7edETP5LCWv', 'PeerManager');
// Scripts/PeerComponent/PeerManager.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GameDefine_1 = require("../game/GameDefine");
var StageInGame_1 = require("../stage/StageInGame");
var StageLobby_1 = require("../stage/StageLobby");
var StageMgr_1 = require("../stage/StageMgr");
var PeerDefine_1 = require("./PeerDefine");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PeerManager = /** @class */ (function (_super) {
    __extends(PeerManager, _super);
    function PeerManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.peer = null;
        _this.sip = 0;
        _this.clientConnected = new Array(PeerDefine_1.default.MAX_CLIENT);
        _this.arrDisconnectCB = new Array(PeerDefine_1.default.MAX_CLIENT);
        _this.arrConnectedCB = new Array(PeerDefine_1.default.MAX_CLIENT);
        _this.onmessage = null;
        _this.isPlayWithRemote = true;
        _this.isInitalized = false;
        _this.isScriptLoaded = false;
        _this.timeoutPingPong = [];
        _this.currentMainPlayer = -1;
        _this.isPlayingGame = false;
        return _this;
    }
    PeerManager_1 = PeerManager;
    PeerManager.registerEvent = function (name, callback) {
        this.Instance.node.on(name, callback);
    };
    PeerManager.emit = function (name) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (_a = this.Instance.node).emit.apply(_a, __spreadArrays([name], args));
    };
    PeerManager.prototype.loadScript = function (moduleName, cb) {
        function scriptLoaded() {
            document.body.removeChild(domScript);
            domScript.removeEventListener("load", scriptLoaded, false);
            cb && cb();
        }
        var domScript = document.createElement("script");
        domScript.async = true;
        domScript.src = moduleName;
        domScript.addEventListener("load", scriptLoaded, false);
        document.body.appendChild(domScript);
    };
    PeerManager.prototype.onLoad = function () {
        var _this = this;
        PeerManager_1.Instance = this;
        return;
        if (!window.isRelease) {
            this.loadScript("https://fpt.eloplay.vn/peer/peerclient.js", function () {
                _this.isScriptLoaded = true;
            });
        }
        else {
            this.isScriptLoaded = true;
        }
        var getPeerInterval = setInterval(function () {
            if (_this.isInitalized || !_this.isScriptLoaded)
                return;
            if (!_this.peer && window.getPeerClient) {
                _this.peer = window.getPeerClient();
                console.log(_this.peer);
            }
            else if (_this.peer && !_this.sip) {
                _this.sip = _this.peer.getSIP();
            }
            else if (_this.peer && _this.sip && !_this.isInitalized) {
                _this.init();
                clearInterval(getPeerInterval);
            }
        }, 1000);
    };
    PeerManager.prototype.start = function () {
        return;
        this.clientConnected = new Array(PeerDefine_1.default.MAX_CLIENT);
        this.veryfiSIPs = new Array(PeerDefine_1.default.MAX_CLIENT);
    };
    PeerManager.prototype.getSIP = function () {
        return this.sip;
    };
    PeerManager.prototype.update = function (dt) { };
    PeerManager.prototype.getClients = function () {
        return this.clientConnected;
    };
    PeerManager.prototype.setRemoteMode = function (val) {
        if (val === void 0) { val = false; }
        if (val) {
            this.clientConnected[0] = { remoteSIP: 0 };
        }
        else {
            this.clientConnected[0] = null;
        }
        this.isPlayWithRemote = val;
    };
    PeerManager.prototype.getClientConneted = function () {
        var arr = [];
        for (var _i = 0, _a = this.clientConnected; _i < _a.length; _i++) {
            var client = _a[_i];
            if (client || (this.isPlayWithRemote && client == true)) {
                arr.push(client);
            }
        }
        return arr;
    };
    PeerManager.prototype.setConnectedCB = function (clientId, cb // client ID will be from 0
    ) {
        if (clientId < PeerDefine_1.default.MAX_CLIENT) {
            this.arrConnectedCB[clientId] = cb;
        }
    };
    PeerManager.prototype.setDisConnectCB = function (clientId, cb) {
        if (clientId < PeerDefine_1.default.MAX_CLIENT) {
            this.arrDisconnectCB[clientId] = cb;
        }
    };
    PeerManager.prototype.PlayGame = function (value) {
        if (value === void 0) { value = true; }
        this.isPlayingGame = value;
    };
    PeerManager.prototype.init = function () {
        this.isInitalized = true;
        this.peer.on("message", this.onRecievedMessage.bind(this));
        console.log(this.sip);
    };
    PeerManager.prototype.setMessageRecivedCB = function (cb) {
        this.onmessage = cb;
    };
    PeerManager.prototype.connecting = function (client) {
        var indexAvl = this.getSlotAvailble();
        if (indexAvl < 0) {
            var msgFail = {
                action: PeerDefine_1.PeerActionConnect.CONNECT_FAILED,
                phase: PeerDefine_1.PeerPhase.CONNECT,
                customParam: "Connection failed - full slot",
            };
            client.send(JSON.stringify(msgFail));
            return;
        }
        if (this.isPlayingGame) {
            var msgFail = {
                action: PeerDefine_1.PeerActionConnect.CONNECT_FAILED,
                phase: PeerDefine_1.PeerPhase.CONNECT,
                customParam: "game is playing",
            };
            client.send(JSON.stringify(msgFail));
            return;
        }
        if (this.currentMainPlayer == -1) {
            this.currentMainPlayer = indexAvl;
        }
        if (this.isPlayWithRemote)
            this.currentMainPlayer = 0;
        var msgConnected = {
            action: PeerDefine_1.PeerActionConnect.CONNECTED,
            phase: PeerDefine_1.PeerPhase.CONNECT,
            customParam: indexAvl == this.currentMainPlayer
                ? !this.isPlayWithRemote
                    ? "mainPlayer"
                    : "Connection success"
                : "Connection success",
            currentID: indexAvl,
            currentMainPlayerID: this.currentMainPlayer,
        };
        if (this.getClientConneted().length == 0) {
            StageMgr_1.default.show(StageMgr_1.Stages.StageStartGame);
            this.setRemoteMode(false);
            var msg = {
                phase: PeerDefine_1.PeerPhase.START_SCREEN,
                action: PeerDefine_1.PeerActionType.SHOW,
                customParam: "",
            };
            client.send(JSON.stringify(msg));
        }
        this.arrConnectedCB[indexAvl] && this.arrConnectedCB[indexAvl]();
        client.send(JSON.stringify(msgConnected));
        this.clientConnected[indexAvl] = client;
        this.veryfiSIPs[indexAvl] = client.remoteSIP;
        StageLobby_1.default.Instance.setUI(true, indexAvl);
    };
    PeerManager.prototype.onRecievedMessage = function (msg, client) {
        //need to verfify client here
        var args = JSON.parse(msg);
        if (args.phase != PeerDefine_1.PeerPhase.CONNECT) {
            console.log(msg);
        }
        if (args.phase == PeerDefine_1.PeerPhase.CONNECT) {
            switch (args.action) {
                case PeerDefine_1.PeerActionConnect.CONNECTING: {
                    this.connecting(client);
                    return;
                }
                case PeerDefine_1.PeerActionConnect.PING_PONG: {
                    this.updatePingPong(client, args);
                    return;
                }
                case PeerDefine_1.PeerActionConnect.CONNECT_RETRY: {
                    if (this.isPlayingGame) {
                        console.log("reconnect :" + client.remoteSIP);
                        var veryfiSIP = client.remoteSIP;
                        var check = this.veryfiSIPs.includes(veryfiSIP);
                        console.log(check, veryfiSIP, this.veryfiSIPs);
                        if (check) {
                            var indexAvl = this.veryfiSIPs.indexOf(veryfiSIP);
                            this.arrConnectedCB[indexAvl] && this.arrConnectedCB[indexAvl]();
                            this.clientConnected[indexAvl] = client;
                            this.veryfiSIPs[indexAvl] = client.remoteSIP;
                            var msgSuccess = {
                                action: PeerDefine_1.PeerActionConnect.CONNECT_RETRY_SUCCESS,
                                phase: PeerDefine_1.PeerPhase.CONNECT,
                                currentID: indexAvl,
                                currentMainPlayerID: this.currentMainPlayer,
                                customParam: "reconnect success",
                                currentStage: PeerDefine_1.PeerStage.PLAYING,
                            };
                            client.send(JSON.stringify(msgSuccess));
                            StageInGame_1.default.Instance.isGameOver[indexAvl] =
                                StageInGame_1.default.Instance.isDead[indexAvl];
                        }
                        else {
                            var msgFail = {
                                action: PeerDefine_1.PeerActionConnect.CONNECT_FAILED,
                                phase: PeerDefine_1.PeerPhase.CONNECT,
                                customParam: "cannot connect, not current player",
                            };
                            client.send(JSON.stringify(msgFail));
                        }
                    }
                    else {
                        this.connecting(client);
                    }
                    return;
                }
            }
        }
        PeerManager_1.emit(PeerManager_1.EventReceivedMessage, args, client);
        this.onmessage && this.onmessage(msg);
    };
    PeerManager.prototype.getSlotAvailble = function () {
        for (var i = 0; i < this.clientConnected.length; i++) {
            if (!this.clientConnected[i])
                return i;
        }
        return -1;
    };
    PeerManager.prototype.getRemoteSIPAvailable = function (remoteSIP) {
        for (var i = 0; i < this.clientConnected.length; i++) {
            if (this.clientConnected[i] &&
                this.clientConnected[i].remoteSIP == remoteSIP)
                return i;
        }
        return -1;
    };
    PeerManager.prototype.updatePingPong = function (client, msg) {
        var _this = this;
        var id = this.getRemoteSIPAvailable(client.remoteSIP);
        if (id < 0)
            return;
        if (this.timeoutPingPong[id])
            clearTimeout(this.timeoutPingPong[id]);
        this.sendMessage(id, msg);
        this.timeoutPingPong[id] = setTimeout(function () {
            _this.arrDisconnectCB[id] && _this.arrDisconnectCB[id]();
            clearTimeout(_this.timeoutPingPong[id]);
            _this.clientConnected[id] = null;
            StageLobby_1.default.Instance.setUI(false, id);
            if (StageInGame_1.default.Instance.node.active) {
                setTimeout(function () {
                    if (!_this.clientConnected[id]) {
                        var str = "Ng\u01B0\u1EDDi ch\u01A1i " + (id + 1) + " \u0111\u00E3 m\u1EA5t k\u1EBFt n\u1ED1i";
                        StageInGame_1.default.Instance.showConnectMessage(id, str);
                    }
                }, PeerDefine_1.default.TIMEOUT_RETRY);
                if (id != _this.currentMainPlayer) {
                }
            }
            if (_this.isPlayWithRemote)
                return;
            if (id == _this.currentMainPlayer) {
                _this.currentMainPlayer = -1;
                if (_this.getClientConneted().length > 0) {
                    //set Main player here
                    var e = _this.switchMainPlayer(id);
                    if (e) {
                    }
                    else {
                    }
                }
                else {
                    StageMgr_1.default.show(StageMgr_1.Stages.StageQRscan);
                    _this.isPlayWithRemote = true;
                    _this.isPlayingGame = false;
                }
            }
        }, PeerDefine_1.default.TIMEOUT_DISCONNECT);
    };
    PeerManager.prototype.switchMainPlayer = function (previousMainPlayer) {
        for (var _i = 0, _a = this.clientConnected; _i < _a.length; _i++) {
            var client = _a[_i];
            if (client) {
                this.currentMainPlayer = this.clientConnected.indexOf(client);
                var msgConnected = {
                    action: PeerDefine_1.PeerActionConnect.SWITCH_MAINPLAYER,
                    phase: PeerDefine_1.PeerPhase.CONNECT,
                    customParam: "mainPlayer",
                    currentMainPlayerID: this.currentMainPlayer,
                };
                this.sendMessageToAll(msgConnected);
                var str = GameDefine_1.default.player + " " + (previousMainPlayer + 1) + " " + GameDefine_1.default.hasdisconnect + " \n" + GameDefine_1.default.player + " " + (this.currentMainPlayer + 1) + " " + GameDefine_1.default.hosting;
                StageInGame_1.default.Instance.showConnectMessage(previousMainPlayer, str);
                return true;
            }
        }
        return false;
    };
    PeerManager.prototype.sendMessage = function (clientIndex, msg) {
        if (!this.peer)
            return;
        var client = this.clientConnected[clientIndex];
        if (client) {
            this.peer.sendTo(client.remoteSIP, JSON.stringify(msg));
        }
    };
    PeerManager.prototype.sendMessageToAll = function (msg) {
        if (!this.peer)
            return;
        for (var _i = 0, _a = this.clientConnected; _i < _a.length; _i++) {
            var client = _a[_i];
            if (client)
                this.peer.sendTo(client.remoteSIP, JSON.stringify(msg));
        }
    };
    var PeerManager_1;
    PeerManager.Instance = null;
    PeerManager.EventReceivedMessage = "ReceivedMessage";
    PeerManager.EventSwitchMainPlayer = "SwitchMainPlayer";
    PeerManager = PeerManager_1 = __decorate([
        ccclass
    ], PeerManager);
    return PeerManager;
}(cc.Component));
exports.default = PeerManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGVlckNvbXBvbmVudFxcUGVlck1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUE0QztBQUM1QyxvREFBK0M7QUFDL0Msa0RBQTZDO0FBQzdDLDhDQUFxRDtBQUVyRCwyQ0FLc0I7QUFhaEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUEwVUM7UUE3VFEsVUFBSSxHQUFRLElBQUksQ0FBQztRQUNqQixTQUFHLEdBQVcsQ0FBQyxDQUFDO1FBQ2hCLHFCQUFlLEdBQVEsSUFBSSxLQUFLLENBQUMsb0JBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4RCxxQkFBZSxHQUFvQixJQUFJLEtBQUssQ0FBQyxvQkFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BFLG9CQUFjLEdBQW9CLElBQUksS0FBSyxDQUFDLG9CQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkUsZUFBUyxHQUFhLElBQUksQ0FBQztRQUMzQixzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFFakMsa0JBQVksR0FBRyxLQUFLLENBQUM7UUFDcEIsb0JBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIscUJBQWUsR0FBUSxFQUFFLENBQUM7UUFDM0IsdUJBQWlCLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDOUIsbUJBQWEsR0FBWSxLQUFLLENBQUM7O0lBaVR6QyxDQUFDO29CQTFVb0IsV0FBVztJQUt2Qix5QkFBYSxHQUFwQixVQUFxQixJQUFZLEVBQUUsUUFBa0I7UUFDbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU0sZ0JBQUksR0FBWCxVQUFZ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SUFKL0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQTBVL0I7SUFBRCxrQkFBQztDQTFVRCxBQTBVQyxDQTFVd0MsRUFBRSxDQUFDLFNBQVMsR0EwVXBEO2tCQTFVb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lRGVmaW5lIGZyb20gXCIuLi9nYW1lL0dhbWVEZWZpbmVcIjtcclxuaW1wb3J0IFN0YWdlSW5HYW1lIGZyb20gXCIuLi9zdGFnZS9TdGFnZUluR2FtZVwiO1xyXG5pbXBvcnQgU3RhZ2VMb2JieSBmcm9tIFwiLi4vc3RhZ2UvU3RhZ2VMb2JieVwiO1xyXG5pbXBvcnQgU3RhZ2VNZ3IsIHsgU3RhZ2VzIH0gZnJvbSBcIi4uL3N0YWdlL1N0YWdlTWdyXCI7XHJcbmltcG9ydCBTdGFnZVFSc2NhbiBmcm9tIFwiLi4vc3RhZ2UvU3RhZ2VRUnNjYW5cIjtcclxuaW1wb3J0IFBlZXJEZWZpbmUsIHtcclxuICBQZWVyQWN0aW9uQ29ubmVjdCxcclxuICBQZWVyQWN0aW9uVHlwZSxcclxuICBQZWVyUGhhc2UsXHJcbiAgUGVlclN0YWdlLFxyXG59IGZyb20gXCIuL1BlZXJEZWZpbmVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFSZWNlaXZlZCB7XHJcbiAgcGhhc2U6IFBlZXJQaGFzZTtcclxuICBhY3Rpb246IFBlZXJBY3Rpb25UeXBlIHwgUGVlckFjdGlvbkNvbm5lY3Q7XHJcbiAgY3VzdG9tUGFyYW06IHN0cmluZztcclxuICBjdXJyZW50SUQ/OiBudW1iZXI7XHJcbiAgY3VycmVudENsaWVudElEPzogbnVtYmVyO1xyXG4gIGN1cnJlbnRNYWluUGxheWVySUQ/OiBudW1iZXI7XHJcbiAgY3VycmVudFN0YWdlPzogUGVlclN0YWdlO1xyXG4gIHJhbms/OiBudW1iZXI7XHJcbiAgc2NvcmU/OiBudW1iZXI7XHJcbn1cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlZXJNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBwdWJsaWMgc3RhdGljIEluc3RhbmNlOiBQZWVyTWFuYWdlciA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBFdmVudFJlY2VpdmVkTWVzc2FnZSA9IFwiUmVjZWl2ZWRNZXNzYWdlXCI7XHJcbiAgc3RhdGljIEV2ZW50U3dpdGNoTWFpblBsYXllciA9IFwiU3dpdGNoTWFpblBsYXllclwiO1xyXG4gIHN0YXRpYyByZWdpc3RlckV2ZW50KG5hbWU6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XHJcbiAgICB0aGlzLkluc3RhbmNlLm5vZGUub24obmFtZSwgY2FsbGJhY2spO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGVtaXQobmFtZTogc3RyaW5nLCAuLi5hcmdzKSB7XHJcbiAgICB0aGlzLkluc3RhbmNlLm5vZGUuZW1pdChuYW1lLCAuLi5hcmdzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwZWVyOiBhbnkgPSBudWxsO1xyXG4gIHB1YmxpYyBzaXA6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIGNsaWVudENvbm5lY3RlZDogYW55ID0gbmV3IEFycmF5KFBlZXJEZWZpbmUuTUFYX0NMSUVOVCk7XHJcbiAgcHVibGljIGFyckRpc2Nvbm5lY3RDQjogQXJyYXk8RnVuY3Rpb24+ID0gbmV3IEFycmF5KFBlZXJEZWZpbmUuTUFYX0NMSUVOVCk7XHJcbiAgcHVibGljIGFyckNvbm5lY3RlZENCOiBBcnJheTxGdW5jdGlvbj4gPSBuZXcgQXJyYXkoUGVlckRlZmluZS5NQVhfQ0xJRU5UKTtcclxuICBwdWJsaWMgb25tZXNzYWdlOiBGdW5jdGlvbiA9IG51bGw7XHJcbiAgcHVibGljIGlzUGxheVdpdGhSZW1vdGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBwdWJsaWMgaXNJbml0YWxpemVkID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBpc1NjcmlwdExvYWRlZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgdGltZW91dFBpbmdQb25nOiBhbnkgPSBbXTtcclxuICBwdWJsaWMgY3VycmVudE1haW5QbGF5ZXI6IG51bWJlciA9IC0xO1xyXG4gIHByaXZhdGUgaXNQbGF5aW5nR2FtZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIHZlcnlmaVNJUHM6IG51bWJlcltdO1xyXG5cclxuICBsb2FkU2NyaXB0KG1vZHVsZU5hbWUsIGNiKSB7XHJcbiAgICBmdW5jdGlvbiBzY3JpcHRMb2FkZWQoKSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9tU2NyaXB0KTtcclxuICAgICAgZG9tU2NyaXB0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHNjcmlwdExvYWRlZCwgZmFsc2UpO1xyXG4gICAgICBjYiAmJiBjYigpO1xyXG4gICAgfVxyXG4gICAgdmFyIGRvbVNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcbiAgICBkb21TY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG4gICAgZG9tU2NyaXB0LnNyYyA9IG1vZHVsZU5hbWU7XHJcbiAgICBkb21TY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgc2NyaXB0TG9hZGVkLCBmYWxzZSk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvbVNjcmlwdCk7XHJcbiAgfVxyXG4gIG9uTG9hZCgpIHtcclxuICAgIFBlZXJNYW5hZ2VyLkluc3RhbmNlID0gdGhpcztcclxuXHJcbiAgICByZXR1cm47XHJcbiAgICBpZiAoIXdpbmRvdy5pc1JlbGVhc2UpIHtcclxuICAgICAgdGhpcy5sb2FkU2NyaXB0KFwiaHR0cHM6Ly9mcHQuZWxvcGxheS52bi9wZWVyL3BlZXJjbGllbnQuanNcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNTY3JpcHRMb2FkZWQgPSB0cnVlO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXNTY3JpcHRMb2FkZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBnZXRQZWVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmlzSW5pdGFsaXplZCB8fCAhdGhpcy5pc1NjcmlwdExvYWRlZCkgcmV0dXJuO1xyXG4gICAgICBpZiAoIXRoaXMucGVlciAmJiAod2luZG93IGFzIGFueSkuZ2V0UGVlckNsaWVudCkge1xyXG4gICAgICAgIHRoaXMucGVlciA9ICh3aW5kb3cgYXMgYW55KS5nZXRQZWVyQ2xpZW50KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wZWVyKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZXIgJiYgIXRoaXMuc2lwKSB7XHJcbiAgICAgICAgdGhpcy5zaXAgPSB0aGlzLnBlZXIuZ2V0U0lQKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wZWVyICYmIHRoaXMuc2lwICYmICF0aGlzLmlzSW5pdGFsaXplZCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoZ2V0UGVlckludGVydmFsKTtcclxuICAgICAgfVxyXG4gICAgfSwgMTAwMCk7XHJcbiAgfVxyXG4gIHN0YXJ0KCkge1xyXG4gICAgcmV0dXJuO1xyXG4gICAgdGhpcy5jbGllbnRDb25uZWN0ZWQgPSBuZXcgQXJyYXkoUGVlckRlZmluZS5NQVhfQ0xJRU5UKTtcclxuICAgIHRoaXMudmVyeWZpU0lQcyA9IG5ldyBBcnJheShQZWVyRGVmaW5lLk1BWF9DTElFTlQpO1xyXG4gIH1cclxuICBnZXRTSVAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zaXA7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoZHQpIHt9XHJcbiAgZ2V0Q2xpZW50cygpIHtcclxuICAgIHJldHVybiB0aGlzLmNsaWVudENvbm5lY3RlZDtcclxuICB9XHJcbiAgc2V0UmVtb3RlTW9kZSh2YWw6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgaWYgKHZhbCkge1xyXG4gICAgICB0aGlzLmNsaWVudENvbm5lY3RlZFswXSA9IHsgcmVtb3RlU0lQOiAwIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNsaWVudENvbm5lY3RlZFswXSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICB0aGlzLmlzUGxheVdpdGhSZW1vdGUgPSB2YWw7XHJcbiAgfVxyXG4gIGdldENsaWVudENvbm5ldGVkKCkge1xyXG4gICAgbGV0IGFyciA9IFtdO1xyXG4gICAgZm9yIChsZXQgY2xpZW50IG9mIHRoaXMuY2xpZW50Q29ubmVjdGVkKSB7XHJcbiAgICAgIGlmIChjbGllbnQgfHwgKHRoaXMuaXNQbGF5V2l0aFJlbW90ZSAmJiBjbGllbnQgPT0gdHJ1ZSkpIHtcclxuICAgICAgICBhcnIucHVzaChjbGllbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyO1xyXG4gIH1cclxuICBzZXRDb25uZWN0ZWRDQihcclxuICAgIGNsaWVudElkOiBudW1iZXIsXHJcbiAgICBjYjogRnVuY3Rpb24gLy8gY2xpZW50IElEIHdpbGwgYmUgZnJvbSAwXHJcbiAgKSB7XHJcbiAgICBpZiAoY2xpZW50SWQgPCBQZWVyRGVmaW5lLk1BWF9DTElFTlQpIHtcclxuICAgICAgdGhpcy5hcnJDb25uZWN0ZWRDQltjbGllbnRJZF0gPSBjYjtcclxuICAgIH1cclxuICB9XHJcbiAgc2V0RGlzQ29ubmVjdENCKGNsaWVudElkOiBudW1iZXIsIGNiOiBGdW5jdGlvbikge1xyXG4gICAgaWYgKGNsaWVudElkIDwgUGVlckRlZmluZS5NQVhfQ0xJRU5UKSB7XHJcbiAgICAgIHRoaXMuYXJyRGlzY29ubmVjdENCW2NsaWVudElkXSA9IGNiO1xyXG4gICAgfVxyXG4gIH1cclxuICBQbGF5R2FtZSh2YWx1ZSA9IHRydWUpIHtcclxuICAgIHRoaXMuaXNQbGF5aW5nR2FtZSA9IHZhbHVlO1xyXG4gIH1cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5pc0luaXRhbGl6ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5wZWVyLm9uKFwibWVzc2FnZVwiLCB0aGlzLm9uUmVjaWV2ZWRNZXNzYWdlLmJpbmQodGhpcykpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zaXApO1xyXG4gIH1cclxuICBzZXRNZXNzYWdlUmVjaXZlZENCKGNiOiBGdW5jdGlvbikge1xyXG4gICAgdGhpcy5vbm1lc3NhZ2UgPSBjYjtcclxuICB9XHJcbiAgY29ubmVjdGluZyhjbGllbnQpIHtcclxuICAgIGxldCBpbmRleEF2bCA9IHRoaXMuZ2V0U2xvdEF2YWlsYmxlKCk7XHJcbiAgICBpZiAoaW5kZXhBdmwgPCAwKSB7XHJcbiAgICAgIGxldCBtc2dGYWlsOiBJRGF0YVJlY2VpdmVkID0ge1xyXG4gICAgICAgIGFjdGlvbjogUGVlckFjdGlvbkNvbm5lY3QuQ09OTkVDVF9GQUlMRUQsXHJcbiAgICAgICAgcGhhc2U6IFBlZXJQaGFzZS5DT05ORUNULFxyXG4gICAgICAgIGN1c3RvbVBhcmFtOiBcIkNvbm5lY3Rpb24gZmFpbGVkIC0gZnVsbCBzbG90XCIsXHJcbiAgICAgIH07XHJcbiAgICAgIGNsaWVudC5zZW5kKEpTT04uc3RyaW5naWZ5KG1zZ0ZhaWwpKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaXNQbGF5aW5nR2FtZSkge1xyXG4gICAgICBsZXQgbXNnRmFpbDogSURhdGFSZWNlaXZlZCA9IHtcclxuICAgICAgICBhY3Rpb246IFBlZXJBY3Rpb25Db25uZWN0LkNPTk5FQ1RfRkFJTEVELFxyXG4gICAgICAgIHBoYXNlOiBQZWVyUGhhc2UuQ09OTkVDVCxcclxuICAgICAgICBjdXN0b21QYXJhbTogXCJnYW1lIGlzIHBsYXlpbmdcIixcclxuICAgICAgfTtcclxuICAgICAgY2xpZW50LnNlbmQoSlNPTi5zdHJpbmdpZnkobXNnRmFpbCkpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jdXJyZW50TWFpblBsYXllciA9PSAtMSkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRNYWluUGxheWVyID0gaW5kZXhBdmw7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pc1BsYXlXaXRoUmVtb3RlKSB0aGlzLmN1cnJlbnRNYWluUGxheWVyID0gMDtcclxuICAgIGxldCBtc2dDb25uZWN0ZWQ6IElEYXRhUmVjZWl2ZWQgPSB7XHJcbiAgICAgIGFjdGlvbjogUGVlckFjdGlvbkNvbm5lY3QuQ09OTkVDVEVELFxyXG4gICAgICBwaGFzZTogUGVlclBoYXNlLkNPTk5FQ1QsXHJcbiAgICAgIGN1c3RvbVBhcmFtOlxyXG4gICAgICAgIGluZGV4QXZsID09IHRoaXMuY3VycmVudE1haW5QbGF5ZXJcclxuICAgICAgICAgID8gIXRoaXMuaXNQbGF5V2l0aFJlbW90ZVxyXG4gICAgICAgICAgICA/IFwibWFpblBsYXllclwiXHJcbiAgICAgICAgICAgIDogXCJDb25uZWN0aW9uIHN1Y2Nlc3NcIlxyXG4gICAgICAgICAgOiBcIkNvbm5lY3Rpb24gc3VjY2Vzc1wiLFxyXG4gICAgICBjdXJyZW50SUQ6IGluZGV4QXZsLFxyXG4gICAgICBjdXJyZW50TWFpblBsYXllcklEOiB0aGlzLmN1cnJlbnRNYWluUGxheWVyLFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy5nZXRDbGllbnRDb25uZXRlZCgpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIFN0YWdlTWdyLnNob3coU3RhZ2VzLlN0YWdlU3RhcnRHYW1lKTtcclxuICAgICAgdGhpcy5zZXRSZW1vdGVNb2RlKGZhbHNlKTtcclxuXHJcbiAgICAgIGxldCBtc2c6IElEYXRhUmVjZWl2ZWQgPSB7XHJcbiAgICAgICAgcGhhc2U6IFBlZXJQaGFzZS5TVEFSVF9TQ1JFRU4sXHJcbiAgICAgICAgYWN0aW9uOiBQZWVyQWN0aW9uVHlwZS5TSE9XLFxyXG4gICAgICAgIGN1c3RvbVBhcmFtOiBcIlwiLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY2xpZW50LnNlbmQoSlNPTi5zdHJpbmdpZnkobXNnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hcnJDb25uZWN0ZWRDQltpbmRleEF2bF0gJiYgdGhpcy5hcnJDb25uZWN0ZWRDQltpbmRleEF2bF0oKTtcclxuICAgIGNsaWVudC5zZW5kKEpTT04uc3RyaW5naWZ5KG1zZ0Nvbm5lY3RlZCkpO1xyXG4gICAgdGhpcy5jbGllbnRDb25uZWN0ZWRbaW5kZXhBdmxdID0gY2xpZW50O1xyXG4gICAgdGhpcy52ZXJ5ZmlTSVBzW2luZGV4QXZsXSA9IGNsaWVudC5yZW1vdGVTSVA7XHJcblxyXG4gICAgU3RhZ2VMb2JieS5JbnN0YW5jZS5zZXRVSSh0cnVlLCBpbmRleEF2bCk7XHJcbiAgfVxyXG4gIG9uUmVjaWV2ZWRNZXNzYWdlKG1zZywgY2xpZW50KSB7XHJcbiAgICAvL25lZWQgdG8gdmVyZmlmeSBjbGllbnQgaGVyZVxyXG4gICAgbGV0IGFyZ3MgPSBKU09OLnBhcnNlKG1zZyk7XHJcbiAgICBpZiAoYXJncy5waGFzZSAhPSBQZWVyUGhhc2UuQ09OTkVDVCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhtc2cpO1xyXG4gICAgfVxyXG4gICAgaWYgKGFyZ3MucGhhc2UgPT0gUGVlclBoYXNlLkNPTk5FQ1QpIHtcclxuICAgICAgc3dpdGNoIChhcmdzLmFjdGlvbikge1xyXG4gICAgICAgIGNhc2UgUGVlckFjdGlvbkNvbm5lY3QuQ09OTkVDVElORzoge1xyXG4gICAgICAgICAgdGhpcy5jb25uZWN0aW5nKGNsaWVudCk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgUGVlckFjdGlvbkNvbm5lY3QuUElOR19QT05HOiB7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZVBpbmdQb25nKGNsaWVudCwgYXJncyk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgUGVlckFjdGlvbkNvbm5lY3QuQ09OTkVDVF9SRVRSWToge1xyXG4gICAgICAgICAgaWYgKHRoaXMuaXNQbGF5aW5nR2FtZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlY29ubmVjdCA6XCIgKyBjbGllbnQucmVtb3RlU0lQKTtcclxuICAgICAgICAgICAgbGV0IHZlcnlmaVNJUCA9IGNsaWVudC5yZW1vdGVTSVA7XHJcbiAgICAgICAgICAgIGxldCBjaGVjayA9IHRoaXMudmVyeWZpU0lQcy5pbmNsdWRlcyh2ZXJ5ZmlTSVApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjaGVjaywgdmVyeWZpU0lQLCB0aGlzLnZlcnlmaVNJUHMpO1xyXG4gICAgICAgICAgICBpZiAoY2hlY2spIHtcclxuICAgICAgICAgICAgICBsZXQgaW5kZXhBdmwgPSB0aGlzLnZlcnlmaVNJUHMuaW5kZXhPZih2ZXJ5ZmlTSVApO1xyXG5cclxuICAgICAgICAgICAgICB0aGlzLmFyckNvbm5lY3RlZENCW2luZGV4QXZsXSAmJiB0aGlzLmFyckNvbm5lY3RlZENCW2luZGV4QXZsXSgpO1xyXG4gICAgICAgICAgICAgIHRoaXMuY2xpZW50Q29ubmVjdGVkW2luZGV4QXZsXSA9IGNsaWVudDtcclxuICAgICAgICAgICAgICB0aGlzLnZlcnlmaVNJUHNbaW5kZXhBdmxdID0gY2xpZW50LnJlbW90ZVNJUDtcclxuXHJcbiAgICAgICAgICAgICAgbGV0IG1zZ1N1Y2Nlc3M6IElEYXRhUmVjZWl2ZWQgPSB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb246IFBlZXJBY3Rpb25Db25uZWN0LkNPTk5FQ1RfUkVUUllfU1VDQ0VTUyxcclxuICAgICAgICAgICAgICAgIHBoYXNlOiBQZWVyUGhhc2UuQ09OTkVDVCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRJRDogaW5kZXhBdmwsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50TWFpblBsYXllcklEOiB0aGlzLmN1cnJlbnRNYWluUGxheWVyLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tUGFyYW06IFwicmVjb25uZWN0IHN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGFnZTogUGVlclN0YWdlLlBMQVlJTkcsXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICBjbGllbnQuc2VuZChKU09OLnN0cmluZ2lmeShtc2dTdWNjZXNzKSk7XHJcblxyXG4gICAgICAgICAgICAgIFN0YWdlSW5HYW1lLkluc3RhbmNlLmlzR2FtZU92ZXJbaW5kZXhBdmxdID1cclxuICAgICAgICAgICAgICAgIFN0YWdlSW5HYW1lLkluc3RhbmNlLmlzRGVhZFtpbmRleEF2bF07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgbGV0IG1zZ0ZhaWw6IElEYXRhUmVjZWl2ZWQgPSB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb246IFBlZXJBY3Rpb25Db25uZWN0LkNPTk5FQ1RfRkFJTEVELFxyXG4gICAgICAgICAgICAgICAgcGhhc2U6IFBlZXJQaGFzZS5DT05ORUNULFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tUGFyYW06IFwiY2Fubm90IGNvbm5lY3QsIG5vdCBjdXJyZW50IHBsYXllclwiLFxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgY2xpZW50LnNlbmQoSlNPTi5zdHJpbmdpZnkobXNnRmFpbCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbm5lY3RpbmcoY2xpZW50KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFBlZXJNYW5hZ2VyLmVtaXQoUGVlck1hbmFnZXIuRXZlbnRSZWNlaXZlZE1lc3NhZ2UsIGFyZ3MsIGNsaWVudCk7XHJcbiAgICB0aGlzLm9ubWVzc2FnZSAmJiB0aGlzLm9ubWVzc2FnZShtc2cpO1xyXG4gIH1cclxuICBnZXRTbG90QXZhaWxibGUoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2xpZW50Q29ubmVjdGVkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICghdGhpcy5jbGllbnRDb25uZWN0ZWRbaV0pIHJldHVybiBpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIC0xO1xyXG4gIH1cclxuICBnZXRSZW1vdGVTSVBBdmFpbGFibGUocmVtb3RlU0lQOiBudW1iZXIpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jbGllbnRDb25uZWN0ZWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuY2xpZW50Q29ubmVjdGVkW2ldICYmXHJcbiAgICAgICAgdGhpcy5jbGllbnRDb25uZWN0ZWRbaV0ucmVtb3RlU0lQID09IHJlbW90ZVNJUFxyXG4gICAgICApXHJcbiAgICAgICAgcmV0dXJuIGk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLTE7XHJcbiAgfVxyXG4gIHVwZGF0ZVBpbmdQb25nKGNsaWVudCwgbXNnKSB7XHJcbiAgICBsZXQgaWQgPSB0aGlzLmdldFJlbW90ZVNJUEF2YWlsYWJsZShjbGllbnQucmVtb3RlU0lQKTtcclxuICAgIGlmIChpZCA8IDApIHJldHVybjtcclxuICAgIGlmICh0aGlzLnRpbWVvdXRQaW5nUG9uZ1tpZF0pIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRQaW5nUG9uZ1tpZF0pO1xyXG5cclxuICAgIHRoaXMuc2VuZE1lc3NhZ2UoaWQsIG1zZyk7XHJcblxyXG4gICAgdGhpcy50aW1lb3V0UGluZ1BvbmdbaWRdID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuYXJyRGlzY29ubmVjdENCW2lkXSAmJiB0aGlzLmFyckRpc2Nvbm5lY3RDQltpZF0oKTtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dFBpbmdQb25nW2lkXSk7XHJcbiAgICAgIHRoaXMuY2xpZW50Q29ubmVjdGVkW2lkXSA9IG51bGw7XHJcblxyXG4gICAgICBTdGFnZUxvYmJ5Lkluc3RhbmNlLnNldFVJKGZhbHNlLCBpZCk7XHJcbiAgICAgIGlmIChTdGFnZUluR2FtZS5JbnN0YW5jZS5ub2RlLmFjdGl2ZSkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKCF0aGlzLmNsaWVudENvbm5lY3RlZFtpZF0pIHtcclxuICAgICAgICAgICAgbGV0IHN0ciA9IGBOZ8aw4budaSBjaMahaSAke2lkICsgMX0gxJHDoyBt4bqldCBr4bq/dCBu4buRaWA7XHJcbiAgICAgICAgICAgIFN0YWdlSW5HYW1lLkluc3RhbmNlLnNob3dDb25uZWN0TWVzc2FnZShpZCwgc3RyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCBQZWVyRGVmaW5lLlRJTUVPVVRfUkVUUlkpO1xyXG4gICAgICAgIGlmIChpZCAhPSB0aGlzLmN1cnJlbnRNYWluUGxheWVyKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5pc1BsYXlXaXRoUmVtb3RlKSByZXR1cm47XHJcbiAgICAgIGlmIChpZCA9PSB0aGlzLmN1cnJlbnRNYWluUGxheWVyKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TWFpblBsYXllciA9IC0xO1xyXG4gICAgICAgIGlmICh0aGlzLmdldENsaWVudENvbm5ldGVkKCkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgLy9zZXQgTWFpbiBwbGF5ZXIgaGVyZVxyXG4gICAgICAgICAgbGV0IGUgPSB0aGlzLnN3aXRjaE1haW5QbGF5ZXIoaWQpO1xyXG4gICAgICAgICAgaWYgKGUpIHtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIFN0YWdlTWdyLnNob3coU3RhZ2VzLlN0YWdlUVJzY2FuKTtcclxuICAgICAgICAgIHRoaXMuaXNQbGF5V2l0aFJlbW90ZSA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLmlzUGxheWluZ0dhbWUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sIFBlZXJEZWZpbmUuVElNRU9VVF9ESVNDT05ORUNUKTtcclxuICB9XHJcbiAgc3dpdGNoTWFpblBsYXllcihwcmV2aW91c01haW5QbGF5ZXIpIHtcclxuICAgIGZvciAobGV0IGNsaWVudCBvZiB0aGlzLmNsaWVudENvbm5lY3RlZCkge1xyXG4gICAgICBpZiAoY2xpZW50KSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TWFpblBsYXllciA9IHRoaXMuY2xpZW50Q29ubmVjdGVkLmluZGV4T2YoY2xpZW50KTtcclxuICAgICAgICBsZXQgbXNnQ29ubmVjdGVkOiBJRGF0YVJlY2VpdmVkID0ge1xyXG4gICAgICAgICAgYWN0aW9uOiBQZWVyQWN0aW9uQ29ubmVjdC5TV0lUQ0hfTUFJTlBMQVlFUixcclxuICAgICAgICAgIHBoYXNlOiBQZWVyUGhhc2UuQ09OTkVDVCxcclxuICAgICAgICAgIGN1c3RvbVBhcmFtOiBcIm1haW5QbGF5ZXJcIixcclxuICAgICAgICAgIGN1cnJlbnRNYWluUGxheWVySUQ6IHRoaXMuY3VycmVudE1haW5QbGF5ZXIsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlVG9BbGwobXNnQ29ubmVjdGVkKTtcclxuXHJcbiAgICAgICAgbGV0IHN0ciA9IGAke0dhbWVEZWZpbmUucGxheWVyfSAke3ByZXZpb3VzTWFpblBsYXllciArIDF9ICR7XHJcbiAgICAgICAgICBHYW1lRGVmaW5lLmhhc2Rpc2Nvbm5lY3RcclxuICAgICAgICB9IFxcbiR7R2FtZURlZmluZS5wbGF5ZXJ9ICR7dGhpcy5jdXJyZW50TWFpblBsYXllciArIDF9ICR7XHJcbiAgICAgICAgICBHYW1lRGVmaW5lLmhvc3RpbmdcclxuICAgICAgICB9YDtcclxuICAgICAgICBTdGFnZUluR2FtZS5JbnN0YW5jZS5zaG93Q29ubmVjdE1lc3NhZ2UocHJldmlvdXNNYWluUGxheWVyLCBzdHIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBzZW5kTWVzc2FnZShjbGllbnRJbmRleCwgbXNnOiBJRGF0YVJlY2VpdmVkKSB7XHJcbiAgICBpZiAoIXRoaXMucGVlcikgcmV0dXJuO1xyXG4gICAgbGV0IGNsaWVudCA9IHRoaXMuY2xpZW50Q29ubmVjdGVkW2NsaWVudEluZGV4XTtcclxuICAgIGlmIChjbGllbnQpIHtcclxuICAgICAgdGhpcy5wZWVyLnNlbmRUbyhjbGllbnQucmVtb3RlU0lQLCBKU09OLnN0cmluZ2lmeShtc2cpKTtcclxuICAgIH1cclxuICB9XHJcbiAgc2VuZE1lc3NhZ2VUb0FsbChtc2c6IElEYXRhUmVjZWl2ZWQpIHtcclxuICAgIGlmICghdGhpcy5wZWVyKSByZXR1cm47XHJcbiAgICBmb3IgKGxldCBjbGllbnQgb2YgdGhpcy5jbGllbnRDb25uZWN0ZWQpIHtcclxuICAgICAgaWYgKGNsaWVudCkgdGhpcy5wZWVyLnNlbmRUbyhjbGllbnQucmVtb3RlU0lQLCBKU09OLnN0cmluZ2lmeShtc2cpKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/common/LoadingCover.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5efa34rLMBL6Z7zYO5/5lDg', 'LoadingCover');
// Scripts/common/LoadingCover.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var SingletonNode_1 = require("../utils/SingletonNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadingCover = /** @class */ (function (_super) {
    __extends(LoadingCover, _super);
    function LoadingCover() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Container = null;
        return _this;
    }
    LoadingCover.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.hide();
    };
    LoadingCover.prototype.show = function () {
        this.Container.active = true;
    };
    LoadingCover.prototype.hide = function () {
        this.Container.active = false;
    };
    __decorate([
        property(cc.Node)
    ], LoadingCover.prototype, "Container", void 0);
    LoadingCover = __decorate([
        ccclass
    ], LoadingCover);
    return LoadingCover;
}(SingletonNode_1.default()));
exports.default = LoadingCover;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcY29tbW9uXFxMb2FkaW5nQ292ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQW1EO0FBRTdDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUE2QjtJQUF2RTtRQUFBLHFFQWdCQztRQWQ4QixlQUFTLEdBQVksSUFBSSxDQUFDOztJQWN6RCxDQUFDO0lBWkcsNkJBQU0sR0FBTjtRQUNJLGlCQUFNLE1BQU0sV0FBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCwyQkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFFRCwyQkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFia0I7UUFBbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQW1DO0lBRnBDLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FnQmhDO0lBQUQsbUJBQUM7Q0FoQkQsQUFnQkMsQ0FoQnlDLHVCQUFhLEVBQWdCLEdBZ0J0RTtrQkFoQm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2luZ2xldG9uTm9kZSBmcm9tIFwiLi4vdXRpbHMvU2luZ2xldG9uTm9kZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmdDb3ZlciBleHRlbmRzIFNpbmdsZXRvbk5vZGU8TG9hZGluZ0NvdmVyPigpXHJcbntcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBwcml2YXRlIENvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgc3VwZXIub25Mb2FkKCk7XHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdygpe1xyXG4gICAgICAgIHRoaXMuQ29udGFpbmVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpe1xyXG4gICAgICAgIHRoaXMuQ29udGFpbmVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/game/GameDefine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0722aPCpZtLXYBO1CTGdGFr', 'GameDefine');
// Scripts/game/GameDefine.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new (/** @class */ (function () {
    function GameDefine() {
        this.DiamondScore = 2;
        this.PlayTime = 300;
        this.player = window.language.toUpperCase() == "VI" ? "Người chơi" : "Player";
        this.died = window.language.toUpperCase() == "VI" ? "đã chết." : "has died.";
        this.gameover = window.language.toUpperCase() == "VI" ? "KẾT THÚC" : "GAMEOVER";
        this.disconnect = window.language.toUpperCase() == "VI" ? "MẤT KẾT NỐI" : "LOST CONNECTION";
        this.hasdisconnect = window.language.toUpperCase() == "VI" ? "đã mất kết nối." : "has been disconnected.";
        this.hosting = window.language.toUpperCase() == "VI" ? "sẽ trở thành chủ phòng." : "is now hosting.";
    }
    return GameDefine;
}()));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZVxcR2FtZURlZmluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtCQUFlLElBQUk7SUFBQztRQUVULGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxHQUFHLENBQUM7UUFDZixXQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQ3pFLFNBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDeEUsYUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUMzRSxlQUFVLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUM7UUFDdkYsa0JBQWEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDO1FBQ3JHLFlBQU8sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO0lBQzNHLENBQUM7SUFBRCxpQkFBQztBQUFELENBVm9CLEFBVW5CLElBQUMsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IG5ldyAoY2xhc3MgR2FtZURlZmluZVxyXG57XHJcbiAgICBwdWJsaWMgRGlhbW9uZFNjb3JlID0gMjtcclxuICAgIHB1YmxpYyBQbGF5VGltZSA9IDMwMDtcclxuICAgIHB1YmxpYyBwbGF5ZXIgPSB3aW5kb3cubGFuZ3VhZ2UudG9VcHBlckNhc2UoKSA9PSBcIlZJXCIgPyBcIk5nxrDhu51pIGNoxqFpXCIgOiBcIlBsYXllclwiO1xyXG4gICAgcHVibGljIGRpZWQgPSB3aW5kb3cubGFuZ3VhZ2UudG9VcHBlckNhc2UoKSA9PSBcIlZJXCIgPyBcIsSRw6MgY2jhur90LlwiIDogXCJoYXMgZGllZC5cIjtcclxuICAgIHB1YmxpYyBnYW1lb3ZlciA9IHdpbmRvdy5sYW5ndWFnZS50b1VwcGVyQ2FzZSgpID09IFwiVklcIiA/IFwiS+G6vlQgVEjDmkNcIiA6IFwiR0FNRU9WRVJcIjtcclxuICAgIHB1YmxpYyBkaXNjb25uZWN0ID0gd2luZG93Lmxhbmd1YWdlLnRvVXBwZXJDYXNlKCkgPT0gXCJWSVwiID8gXCJN4bqkVCBL4bq+VCBO4buQSVwiIDogXCJMT1NUIENPTk5FQ1RJT05cIjtcclxuICAgIHB1YmxpYyBoYXNkaXNjb25uZWN0ID0gd2luZG93Lmxhbmd1YWdlLnRvVXBwZXJDYXNlKCkgPT0gXCJWSVwiID8gXCLEkcOjIG3huqV0IGvhur90IG7hu5FpLlwiIDogXCJoYXMgYmVlbiBkaXNjb25uZWN0ZWQuXCI7XHJcbiAgICBwdWJsaWMgaG9zdGluZyA9IHdpbmRvdy5sYW5ndWFnZS50b1VwcGVyQ2FzZSgpID09IFwiVklcIiA/IFwic+G6vSB0cuG7nyB0aMOgbmggY2jhu6cgcGjDsm5nLlwiIDogXCJpcyBub3cgaG9zdGluZy5cIjtcclxufSkiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gameplay/Sound/Sound.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '345daSN7ONNz7rZBaxuOiua', 'Sound');
// Scripts/gameplay/Sound/Sound.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZXBsYXlcXFNvdW5kXFxTb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDs7SUFLQSxDQUFDO0lBTG9CLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FLNUI7SUFBRCxlQUFDO0NBTEQsQUFLQyxDQUxxQyxFQUFFLENBQUMsU0FBUyxHQUtqRDtrQkFMb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gameplay/Level/GameplayLevelDesgin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5a58e+A1E5M6oKQXOQxOCtb', 'GameplayLevelDesgin');
// Scripts/gameplay/Level/GameplayLevelDesgin.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _default = [{
  level: 1,
  timeToBounce: 1,
  ballStartPos: {
    x: 300,
    y: -50
  },
  wall: {
    left: {
      pos: {
        x: -480,
        y: 0
      },
      size: {
        w: 100,
        h: 1334
      }
    },
    right: {
      pos: {
        x: 480,
        y: 680
      },
      size: {
        w: 100,
        h: 1334
      }
    },
    top: {
      pos: {
        x: 0,
        y: 270
      },
      size: {
        w: 960,
        h: 100
      }
    },
    down: {
      pos: {
        x: 0,
        y: -270
      },
      size: {
        w: 960,
        h: 100
      }
    }
  },
  fadeWall: {
    pos: {
      x: 480,
      y: -105
    },
    size: {
      w: 100,
      h: 230
    }
  },
  obstaclesWall: [{
    pos: {
      x: 0,
      y: -120
    },
    size: {
      w: 40,
      h: 200
    },
    rotation: 0
  }]
}, {
  level: 2,
  timeToBounce: 1,
  ballStartPos: {
    x: 300,
    y: -90
  },
  wall: {
    left: {
      pos: {
        x: -480,
        y: 0
      },
      size: {
        w: 100,
        h: 1334
      }
    },
    right: {
      pos: {
        x: 480,
        y: 680
      },
      size: {
        w: 100,
        h: 1334
      }
    },
    top: {
      pos: {
        x: 0,
        y: 270
      },
      size: {
        w: 960,
        h: 100
      }
    },
    down: {
      pos: {
        x: 0,
        y: -270
      },
      size: {
        w: 960,
        h: 100
      }
    }
  },
  fadeWall: {
    pos: {
      x: 480,
      y: -105
    },
    size: {
      w: 100,
      h: 230
    }
  },
  obstaclesWall: [{
    pos: {
      x: 0,
      y: 0
    },
    size: {
      w: 40,
      h: 200
    },
    rotation: 0
  }]
}, {
  level: 3,
  timeToBounce: 2,
  ballStartPos: {
    x: 300,
    y: -90
  },
  wall: {
    left: {
      pos: {
        x: -480,
        y: 0
      },
      size: {
        w: 100,
        h: 1334
      }
    },
    right: {
      pos: {
        x: 480,
        y: 680
      },
      size: {
        w: 100,
        h: 1334
      }
    },
    top: {
      pos: {
        x: 0,
        y: 270
      },
      size: {
        w: 960,
        h: 100
      }
    },
    down: {
      pos: {
        x: 0,
        y: -270
      },
      size: {
        w: 960,
        h: 100
      }
    }
  },
  fadeWall: {
    pos: {
      x: 480,
      y: -105
    },
    size: {
      w: 100,
      h: 230
    }
  },
  obstaclesWall: [{
    pos: {
      x: 0,
      y: 0
    },
    size: {
      w: 40,
      h: 100
    },
    rotation: 90
  }]
}];
exports["default"] = _default;
module.exports = exports["default"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZXBsYXlcXExldmVsXFxHYW1lcGxheUxldmVsRGVzZ2luLmpzIl0sIm5hbWVzIjpbImxldmVsIiwidGltZVRvQm91bmNlIiwiYmFsbFN0YXJ0UG9zIiwieCIsInkiLCJ3YWxsIiwibGVmdCIsInBvcyIsInNpemUiLCJ3IiwiaCIsInJpZ2h0IiwidG9wIiwiZG93biIsImZhZGVXYWxsIiwib2JzdGFjbGVzV2FsbCIsInJvdGF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBQWUsQ0FDYjtBQUNFQSxFQUFBQSxLQUFLLEVBQUUsQ0FEVDtBQUVFQyxFQUFBQSxZQUFZLEVBQUUsQ0FGaEI7QUFJRUMsRUFBQUEsWUFBWSxFQUFFO0FBQUVDLElBQUFBLENBQUMsRUFBRSxHQUFMO0FBQVVDLElBQUFBLENBQUMsRUFBRSxDQUFDO0FBQWQsR0FKaEI7QUFLRUMsRUFBQUEsSUFBSSxFQUFFO0FBQ0pDLElBQUFBLElBQUksRUFBRTtBQUFFQyxNQUFBQSxHQUFHLEVBQUU7QUFBRUosUUFBQUEsQ0FBQyxFQUFFLENBQUMsR0FBTjtBQUFXQyxRQUFBQSxDQUFDLEVBQUU7QUFBZCxPQUFQO0FBQTBCSSxNQUFBQSxJQUFJLEVBQUU7QUFBRUMsUUFBQUEsQ0FBQyxFQUFFLEdBQUw7QUFBVUMsUUFBQUEsQ0FBQyxFQUFFO0FBQWI7QUFBaEMsS0FERjtBQUVKQyxJQUFBQSxLQUFLLEVBQUU7QUFBRUosTUFBQUEsR0FBRyxFQUFFO0FBQUVKLFFBQUFBLENBQUMsRUFBRSxHQUFMO0FBQVVDLFFBQUFBLENBQUMsRUFBRTtBQUFiLE9BQVA7QUFBMkJJLE1BQUFBLElBQUksRUFBRTtBQUFFQyxRQUFBQSxDQUFDLEVBQUUsR0FBTDtBQUFVQyxRQUFBQSxDQUFDLEVBQUU7QUFBYjtBQUFqQyxLQUZIO0FBR0pFLElBQUFBLEdBQUcsRUFBRTtBQUFFTCxNQUFBQSxHQUFHLEVBQUU7QUFBRUosUUFBQUEsQ0FBQyxFQUFFLENBQUw7QUFB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R0FBRyxFQUFFO0FBQUVMLE1BQUFBLEdBQUcsRUFBRTtBQUFFSixRQUFBQSxDQUFDLEVBQUUsQ0FBTDtBQUFRQyxRQUFBQSxDQUFDLEVBQUU7QUFBWCxPQUFQO0FBQXlCSSxNQUFBQSxJQUFJLEVBQUU7QUFBRUMsUUFBQUEsQ0FBQyxFQUFFLEdBQUw7QUFBVUMsUUFBQUEsQ0FBQyxFQUFFO0FBQWI7QUFBL0IsS0FIRDtBQUlKRyxJQUFBQSxJQUFJLEVBQUU7QUFBRU4sTUFBQUEsR0FBRyxFQUFFO0FBQUVKLFFBQUFBLENBQUMsRUFBRSxDQUFMO0FBQVFDLFFBQUFBLENBQUMsRUFBRSxDQUFDO0FBQVosT0FBUDtBQUEwQkksTUFBQUEsSUFBSSxFQUFFO0FBQUVDLFFBQUFBLENBQUMsRUFBRSxHQUFMO0FBQVVDLFFBQUFBLENBQUMsRUFBRTtBQUFiO0FBQWhDO0FBSkYsR0FMUjtBQVdFSSxFQUFBQSxRQUFRLEVBQUU7QUFBRVAsSUFBQUEsR0FBRyxFQUFFO0FBQUVKLE1BQUFBLENBQUMsRUFBRSxHQUFMO0FBQVVDLE1BQUFBLENBQUMsRUFBRSxDQUFDO0FBQWQsS0FBUDtBQUE0QkksSUFBQUEsSUFBSSxFQUFFO0FBQUVDLE1BQUFBLENBQUMsRUFBRSxHQUFMO0FBQVVDLE1BQUFBLENBQUMsRUFBRTtBQUFiO0FBQWxDLEdBWFo7QUFZRUssRUFBQUEsYUFBYSxFQUFFLENBQ2I7QUFDRVIsSUFBQUEsR0FBRyxFQUFFO0FBQUVKLE1BQUFBLENBQUMsRUFBRSxDQUFMO0FBQVFDLE1BQUFBLENBQUMsRUFBRTtBQUFYLEtBRFA7QUFFRUksSUFBQUEsSUFBSSxFQUFFO0FBQUVDLE1BQUFBLENBQUMsRUFBRSxFQUFMO0FBQVNDLE1BQUFBLENBQUMsRUFBRTtBQUFaLEtBRlI7QUFHRU0sSUFBQUEsUUFBUSxFQUFFO0FBSFosR0FEYTtBQVpqQixDQTFDYSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgW1xyXG4gIHtcclxuICAgIGxldmVsOiAxLFxyXG4gICAgdGltZVRvQm91bmNlOiAxLFxyXG5cclxuICAgIGJhbGxTdGFydFBvczogeyB4OiAzMDAsIHk6IC01MCB9LFxyXG4gICAgd2FsbDoge1xyXG4gICAgICBsZWZ0OiB7IHBvczogeyB4OiAtNDgwLCB5OiAwIH0sIHNpemU6IHsgdzogMTAwLCBoOiAxMzM0IH0gfSxcclxuICAgICAgcmlnaHQ6IHsgcG9zOiB7IHg6IDQ4MCwgeTogNjgwIH0sIHNpemU6IHsgdzogMTAwLCBoOiAxMzM0IH0gfSxcclxuICAgICAgdG9wOiB7IHBvczogeyB4OiAwLCB5OiAyNzAgfSwgc2l6ZTogeyB3OiA5NjAsIGg6IDEwMCB9IH0sXHJcbiAgICAgIGRvd246IHsgcG9zOiB7IHg6IDAsIHk6IC0yNzAgfSwgc2l6ZTogeyB3OiA5NjAsIGg6IDEwMCB9IH0sXHJcbiAgICB9LFxyXG4gICAgZmFkZVdhbGw6IHsgcG9zOiB7IHg6IDQ4MCwgeTogLTEwNSB9LCBzaXplOiB7IHc6IDEwMCwgaDogMjMwIH0gfSxcclxuICAgIG9ic3RhY2xlc1dhbGw6IFtcclxuICAgICAge1xyXG4gICAgICAgIHBvczogeyB4OiAwLCB5OiAtMTIwIH0sXHJcbiAgICAgICAgc2l6ZTogeyB3OiA0MCwgaDogMjAwIH0sXHJcbiAgICAgICAgcm90YXRpb246IDAsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIGxldmVsOiAyLFxyXG4gICAgdGltZVRvQm91bmNlOiAxLFxyXG5cclxuICAgIGJhbGxTdGFydFBvczogeyB4OiAzMDAsIHk6IC05MCB9LFxyXG4gICAgd2FsbDoge1xyXG4gICAgICBsZWZ0OiB7IHBvczogeyB4OiAtNDgwLCB5OiAwIH0sIHNpemU6IHsgdzogMTAwLCBoOiAxMzM0IH0gfSxcclxuICAgICAgcmlnaHQ6IHsgcG9zOiB7IHg6IDQ4MCwgeTogNjgwIH0sIHNpemU6IHsgdzogMTAwLCBoOiAxMzM0IH0gfSxcclxuICAgICAgdG9wOiB7IHBvczogeyB4OiAwLCB5OiAyNzAgfSwgc2l6ZTogeyB3OiA5NjAsIGg6IDEwMCB9IH0sXHJcbiAgICAgIGRvd246IHsgcG9zOiB7IHg6IDAsIHk6IC0yNzAgfSwgc2l6ZTogeyB3OiA5NjAsIGg6IDEwMCB9IH0sXHJcbiAgICB9LFxyXG4gICAgZmFkZVdhbGw6IHsgcG9zOiB7IHg6IDQ4MCwgeTogLTEwNSB9LCBzaXplOiB7IHc6IDEwMCwgaDogMjMwIH0gfSxcclxuICAgIG9ic3RhY2xlc1dhbGw6IFtcclxuICAgICAge1xyXG4gICAgICAgIHBvczogeyB4OiAwLCB5OiAwIH0sXHJcbiAgICAgICAgc2l6ZTogeyB3OiA0MCwgaDogMjAwIH0sXHJcbiAgICAgICAgcm90YXRpb246IDAsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGV2ZWw6IDMsXHJcbiAgICB0aW1lVG9Cb3VuY2U6IDIsXHJcblxyXG4gICAgYmFsbFN0YXJ0UG9zOiB7IHg6IDMwMCwgeTogLTkwIH0sXHJcbiAgICB3YWxsOiB7XHJcbiAgICAgIGxlZnQ6IHsgcG9zOiB7IHg6IC00ODAsIHk6IDAgfSwgc2l6ZTogeyB3OiAxMDAsIGg6IDEzMzQgfSB9LFxyXG4gICAgICByaWdodDogeyBwb3M6IHsgeDogNDgwLCB5OiA2ODAgfSwgc2l6ZTogeyB3OiAxMDAsIGg6IDEzMzQgfSB9LFxyXG4gICAgICB0b3A6IHsgcG9zOiB7IHg6IDAsIHk6IDI3MCB9LCBzaXplOiB7IHc6IDk2MCwgaDogMTAwIH0gfSxcclxuICAgICAgZG93bjogeyBwb3M6IHsgeDogMCwgeTogLTI3MCB9LCBzaXplOiB7IHc6IDk2MCwgaDogMTAwIH0gfSxcclxuICAgIH0sXHJcbiAgICBmYWRlV2FsbDogeyBwb3M6IHsgeDogNDgwLCB5OiAtMTA1IH0sIHNpemU6IHsgdzogMTAwLCBoOiAyMzAgfSB9LFxyXG4gICAgb2JzdGFjbGVzV2FsbDogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcG9zOiB7IHg6IDAsIHk6IDAgfSxcclxuICAgICAgICBzaXplOiB7IHc6IDQwLCBoOiAxMDAgfSxcclxuICAgICAgICByb3RhdGlvbjogOTAsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gameplay/Wall/WinDetect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e06c1K0nHtLqrm+uKkRc3aJ', 'WinDetect');
// Scripts/gameplay/Wall/WinDetect.ts

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
var GamePlayManager_1 = require("../GamePlayManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WinDetect = /** @class */ (function (_super) {
    __extends(WinDetect, _super);
    function WinDetect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WinDetect.prototype.onCollisionEnter = function (other, self) {
        if (other != self && GamePlayManager_1.default.Instance.isLost == false) {
            // LevelManager.Instance.NextLevel();
            GamePlayManager_1.default.Instance.Win();
        }
    };
    WinDetect = __decorate([
        ccclass
    ], WinDetect);
    return WinDetect;
}(cc.Component));
exports.default = WinDetect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZXBsYXlcXFdhbGxcXFdpbkRldGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixzREFBaUQ7QUFHM0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFBbkQ7O0lBU0EsQ0FBQztJQVJDLG9DQUFnQixHQUFoQixVQUFpQixLQUFrQixFQUFFLElBQWlCO1FBQ3BELElBQUksS0FBSyxJQUFJLElBQUksSUFBSSx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksS0FBSyxFQUFFO1lBQzdELHFDQUFxQztZQUNyQyx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNoQztJQUNILENBQUM7SUFOa0IsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQVM3QjtJQUFELGdCQUFDO0NBVEQsQUFTQyxDQVRzQyxFQUFFLENBQUMsU0FBUyxHQVNsRDtrQkFUb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBHYW1lUGxheU1hbmFnZXIgZnJvbSBcIi4uL0dhbWVQbGF5TWFuYWdlclwiO1xyXG5pbXBvcnQgTGV2ZWxNYW5hZ2VyIGZyb20gXCIuLi9MZXZlbE1hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaW5EZXRlY3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIG9uQ29sbGlzaW9uRW50ZXIob3RoZXI6IGNjLkNvbGxpZGVyLCBzZWxmOiBjYy5Db2xsaWRlcikge1xyXG4gICAgaWYgKG90aGVyICE9IHNlbGYgJiYgR2FtZVBsYXlNYW5hZ2VyLkluc3RhbmNlLmlzTG9zdCA9PSBmYWxzZSkge1xyXG4gICAgICAvLyBMZXZlbE1hbmFnZXIuSW5zdGFuY2UuTmV4dExldmVsKCk7XHJcbiAgICAgIEdhbWVQbGF5TWFuYWdlci5JbnN0YW5jZS5XaW4oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Loader.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1b8496GkHdFirfeeZ/dlzhB', 'Loader');
// Scripts/Loader.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var urlParams = new URLSearchParams(window.location.search);
window.language = urlParams.get('language') || 'vi';
cc.assetManager.force = true;
cc.assetManager.loadBundle(window.language, null, function (err, bundle) {
    console.log(bundle);
});
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.SystemPrefabs = [];
        _this.PlaceHolderPrefabs = [];
        return _this;
    }
    Loader.prototype.onLoad = function () {
        for (var i = 0; i < this.SystemPrefabs.length; i++) {
            this.node.addChild(cc.instantiate(this.SystemPrefabs[i]));
        }
        for (var i = 0; i < this.PlaceHolderPrefabs.length; i++) {
            this.node.addChild(cc.instantiate(this.PlaceHolderPrefabs[i]));
        }
    };
    __decorate([
        property(cc.Prefab)
    ], Loader.prototype, "SystemPrefabs", void 0);
    __decorate([
        property(cc.Prefab)
    ], Loader.prototype, "PlaceHolderPrefabs", void 0);
    Loader = __decorate([
        ccclass
    ], Loader);
    return Loader;
}(cc.Component));
exports.default = Loader;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU0sU0FBUyxHQUFHLElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDOUQsTUFBTSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQztBQUNwRCxFQUFFLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDN0IsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsVUFBQyxHQUFHLEVBQUUsTUFBTTtJQUUxRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3hCLENBQUMsQ0FBQyxDQUFBO0FBRUksSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUFZQztRQVhnQyxtQkFBYSxHQUFxQixFQUFFLENBQUM7UUFDckMsd0JBQWtCLEdBQXFCLEVBQUUsQ0FBQzs7SUFVM0UsQ0FBQztJQVJHLHVCQUFNLEdBQU47UUFDSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM3RDtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3JELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsRTtJQUNMLENBQUM7SUFWb0I7UUFBcEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aURBQThDO0lBQzdDO1FBQXBCLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUFtRDtJQUZ0RCxNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBWTFCO0lBQUQsYUFBQztDQVpELEFBWUMsQ0FabUMsRUFBRSxDQUFDLFNBQVMsR0FZL0M7a0JBWm9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG53aW5kb3cubGFuZ3VhZ2UgPSB1cmxQYXJhbXMuZ2V0KCdsYW5ndWFnZScpIHx8ICd2aSc7XHJcbmNjLmFzc2V0TWFuYWdlci5mb3JjZSA9IHRydWU7XHJcbmNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKHdpbmRvdy5sYW5ndWFnZSwgbnVsbCwgKGVyciwgYnVuZGxlKSA9PiBcclxue1xyXG4gICAgY29uc29sZS5sb2coYnVuZGxlKTtcclxufSlcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYikgcHJpdmF0ZSBTeXN0ZW1QcmVmYWJzOiBBcnJheTxjYy5QcmVmYWI+ID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKSBwcml2YXRlIFBsYWNlSG9sZGVyUHJlZmFiczogQXJyYXk8Y2MuUHJlZmFiPiA9IFtdO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuU3lzdGVtUHJlZmFicy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoY2MuaW5zdGFudGlhdGUodGhpcy5TeXN0ZW1QcmVmYWJzW2ldKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5QbGFjZUhvbGRlclByZWZhYnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGNjLmluc3RhbnRpYXRlKHRoaXMuUGxhY2VIb2xkZXJQcmVmYWJzW2ldKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/diamond.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '085b587D41NjKlGgaQmpnmJ', 'diamond');
// Scripts/diamond.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Diamond = /** @class */ (function (_super) {
    __extends(Diamond, _super);
    function Diamond() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.player = null;
        _this.diamondSprite = null;
        _this.diamondParticle = null;
        _this.lblScorePlus = null;
        _this.thresHold = 9999;
        return _this;
    }
    Diamond.prototype.onLoad = function () {
        var _this = this;
        this.schedule(function () {
            var y = _this.player.position.y - _this.node.position.y;
            if (y < 200 && y > -200) {
                if (_this.thresHold === 0)
                    return;
                _this.thresHold = 0;
                _this.getComponent(cc.CircleCollider).enabled = true;
            }
            else {
                if (_this.thresHold === 200)
                    return;
                _this.thresHold = 200;
                _this.getComponent(cc.CircleCollider).enabled = false;
            }
        }, 0.1);
    };
    __decorate([
        property(cc.Node)
    ], Diamond.prototype, "player", void 0);
    __decorate([
        property(cc.Sprite)
    ], Diamond.prototype, "diamondSprite", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], Diamond.prototype, "diamondParticle", void 0);
    __decorate([
        property(cc.Label)
    ], Diamond.prototype, "lblScorePlus", void 0);
    Diamond = __decorate([
        ccclass
    ], Diamond);
    return Diamond;
}(cc.Component));
exports.default = Diamond;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZGlhbW9uZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQXlCQztRQXZCVyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBRVYsbUJBQWEsR0FBYyxJQUFJLENBQUM7UUFDeEIscUJBQWUsR0FBc0IsSUFBSSxDQUFDO1FBQ25ELGtCQUFZLEdBQWEsSUFBSSxDQUFDO1FBRTFDLGVBQVMsR0FBRyxJQUFJLENBQUM7O0lBaUI3QixDQUFDO0lBZkcsd0JBQU0sR0FBTjtRQUFBLGlCQWNDO1FBYkcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNWLElBQU0sQ0FBQyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtnQkFDckIsSUFBSSxLQUFJLENBQUMsU0FBUyxLQUFLLENBQUM7b0JBQUUsT0FBTztnQkFDakMsS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7Z0JBQ25CLEtBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDdkQ7aUJBQU07Z0JBQ0gsSUFBSSxLQUFJLENBQUMsU0FBUyxLQUFLLEdBQUc7b0JBQUUsT0FBTztnQkFDbkMsS0FBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7YUFDeEQ7UUFDTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFFWCxDQUFDO0lBdEJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ2E7SUFFVjtRQUFwQixRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFBaUM7SUFDeEI7UUFBNUIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUM7b0RBQTJDO0lBQ25EO1FBQW5CLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUErQjtJQU5qQyxPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBeUIzQjtJQUFELGNBQUM7Q0F6QkQsQUF5QkMsQ0F6Qm9DLEVBQUUsQ0FBQyxTQUFTLEdBeUJoRDtrQkF6Qm9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZURlZmluZSBmcm9tIFwiLi9nYW1lL0dhbWVEZWZpbmVcIjtcclxuaW1wb3J0IHBsYXlHcm91bmQgZnJvbSBcIi4vcGxheUdyb3VuZFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpYW1vbmQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIHBsYXllcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSkgZGlhbW9uZFNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QYXJ0aWNsZVN5c3RlbSkgZGlhbW9uZFBhcnRpY2xlOiBjYy5QYXJ0aWNsZVN5c3RlbSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpIGxibFNjb3JlUGx1czogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgdGhyZXNIb2xkID0gOTk5OTtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSB0aGlzLnBsYXllci5wb3NpdGlvbi55IC0gdGhpcy5ub2RlLnBvc2l0aW9uLnk7XHJcbiAgICAgICAgICAgIGlmICh5IDwgMjAwICYmIHkgPiAtMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50aHJlc0hvbGQgPT09IDApIHJldHVybjtcclxuICAgICAgICAgICAgICAgIHRoaXMudGhyZXNIb2xkID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkNpcmNsZUNvbGxpZGVyKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRocmVzSG9sZCA9PT0gMjAwKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocmVzSG9sZCA9IDIwMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkNpcmNsZUNvbGxpZGVyKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAwLjEpXHJcblxyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/cuboid.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1bcb2GEmxRB1458fn5Fjmnu', 'cuboid');
// Scripts/cuboid.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Cuboid = /** @class */ (function (_super) {
    __extends(Cuboid, _super);
    function Cuboid() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.player = null;
        _this.diamond = null;
        _this.thresHold = 9999;
        _this.thresHoldActive = 9999;
        return _this;
    }
    Cuboid.prototype.onLoad = function () {
        var _this = this;
        this.schedule(function () {
            var y = _this.player.position.y - _this.node.position.y;
            if (y < 200 && y > -200) {
                if (_this.thresHold === 0)
                    return;
                _this.thresHold = 0;
                _this.node.children.forEach(function (child) {
                    if (child.childrenCount === 1) {
                        child.children[0].getComponent(cc.BoxCollider) && (child.children[0].getComponent(cc.BoxCollider).enabled = true);
                    }
                });
                _this.getComponent(cc.BoxCollider).enabled = true;
            }
            else {
                if (_this.thresHold === 200)
                    return;
                _this.thresHold = 200;
                _this.node.children.forEach(function (child) {
                    if (child.childrenCount === 1) {
                        child.children[0].getComponent(cc.BoxCollider) && (child.children[0].getComponent(cc.BoxCollider).enabled = false);
                    }
                });
            }
            if (y < -500) {
                _this.getComponent(cc.BoxCollider).enabled = false;
            }
        }, 0.1);
        this.schedule(function () {
            if (_this.player.position.y - _this.node.position.y < 720 && _this.player.position.y - _this.node.position.y > -720) {
                if (_this.thresHoldActive === 0)
                    return;
                _this.thresHoldActive = 0;
                _this.node.children.forEach(function (child) {
                    child.getComponent(cc.Sprite) && (child.getComponent(cc.Sprite).enabled = true);
                });
            }
            else {
                if (_this.thresHoldActive === 720)
                    return;
                _this.thresHoldActive = 720;
                _this.node.children.forEach(function (child) {
                    child.getComponent(cc.Sprite) && (child.getComponent(cc.Sprite).enabled = false);
                });
            }
        }, 0.2);
    };
    __decorate([
        property(cc.Node)
    ], Cuboid.prototype, "player", void 0);
    Cuboid = __decorate([
        ccclass
    ], Cuboid);
    return Cuboid;
}(cc.Component));
exports.default = Cuboid;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcY3Vib2lkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBb0RDO1FBbERXLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFeEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV2QixlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLHFCQUFlLEdBQUcsSUFBSSxDQUFDOztJQTZDbkMsQ0FBQztJQTNDRyx1QkFBTSxHQUFOO1FBQUEsaUJBMENDO1FBekNHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDVixJQUFNLENBQUMsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3JCLElBQUksS0FBSSxDQUFDLFNBQVMsS0FBSyxDQUFDO29CQUFFLE9BQU87Z0JBQ2pDLEtBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO29CQUM3QixJQUFJLEtBQUssQ0FBQyxhQUFhLEtBQUssQ0FBQyxFQUFFO3dCQUMzQixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDO3FCQUNySDtnQkFDTCxDQUFDLENBQUMsQ0FBQTtnQkFDRixLQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQ3BEO2lCQUFNO2dCQUNILElBQUksS0FBSSxDQUFDLFNBQVMsS0FBSyxHQUFHO29CQUFFLE9BQU87Z0JBQ25DLEtBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO2dCQUNyQixLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO29CQUM3QixJQUFJLEtBQUssQ0FBQyxhQUFhLEtBQUssQ0FBQyxFQUFFO3dCQUMzQixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDO3FCQUN0SDtnQkFDTCxDQUFDLENBQUMsQ0FBQTthQUNMO1lBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ1YsS0FBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUNyRDtRQUNMLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUVQLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDVixJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQzdHLElBQUksS0FBSSxDQUFDLGVBQWUsS0FBSyxDQUFDO29CQUFFLE9BQU87Z0JBQ3ZDLEtBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO2dCQUN6QixLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO29CQUM3QixLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFDcEYsQ0FBQyxDQUFDLENBQUE7YUFDTDtpQkFBTTtnQkFDSCxJQUFJLEtBQUksQ0FBQyxlQUFlLEtBQUssR0FBRztvQkFBRSxPQUFPO2dCQUN6QyxLQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQztnQkFDM0IsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSztvQkFDN0IsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUM7Z0JBQ3JGLENBQUMsQ0FBQyxDQUFBO2FBQ0w7UUFDTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDWCxDQUFDO0lBakREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ2E7SUFGZCxNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBb0QxQjtJQUFELGFBQUM7Q0FwREQsQUFvREMsQ0FwRG1DLEVBQUUsQ0FBQyxTQUFTLEdBb0QvQztrQkFwRG9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGxheUdyb3VuZCBmcm9tIFwiLi9wbGF5R3JvdW5kXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3Vib2lkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBwbGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBkaWFtb25kOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHRocmVzSG9sZCA9IDk5OTk7XHJcbiAgICBwcml2YXRlIHRocmVzSG9sZEFjdGl2ZSA9IDk5OTk7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB5ID0gdGhpcy5wbGF5ZXIucG9zaXRpb24ueSAtIHRoaXMubm9kZS5wb3NpdGlvbi55O1xyXG4gICAgICAgICAgICBpZiAoeSA8IDIwMCAmJiB5ID4gLTIwMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGhyZXNIb2xkID09PSAwKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocmVzSG9sZCA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQuY2hpbGRyZW5Db3VudCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpICYmIChjaGlsZC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpLmVuYWJsZWQgPSB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGhyZXNIb2xkID09PSAyMDApIHJldHVybjtcclxuICAgICAgICAgICAgICAgIHRoaXMudGhyZXNIb2xkID0gMjAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLmNoaWxkcmVuQ291bnQgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKSAmJiAoY2hpbGQuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKS5lbmFibGVkID0gZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh5IDwgLTUwMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDAuMSlcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllci5wb3NpdGlvbi55IC0gdGhpcy5ub2RlLnBvc2l0aW9uLnkgPCA3MjAgJiYgdGhpcy5wbGF5ZXIucG9zaXRpb24ueSAtIHRoaXMubm9kZS5wb3NpdGlvbi55ID4gLTcyMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGhyZXNIb2xkQWN0aXZlID09PSAwKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocmVzSG9sZEFjdGl2ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSAmJiAoY2hpbGQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZW5hYmxlZCA9IHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRocmVzSG9sZEFjdGl2ZSA9PT0gNzIwKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocmVzSG9sZEFjdGl2ZSA9IDcyMDtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChjYy5TcHJpdGUpICYmIChjaGlsZC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5lbmFibGVkID0gZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDAuMilcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/PeerComponent/QRCodeGen.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8d77cuBjJ1BGq6/i3kFeUx7', 'QRCodeGen');
// Scripts/PeerComponent/QRCodeGen.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Global_1 = require("../common/Global");
var StageMgr_1 = require("../stage/StageMgr");
var Helper_1 = require("../utils/Helper");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var QRCodeGen = /** @class */ (function (_super) {
    __extends(QRCodeGen, _super);
    function QRCodeGen() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.qrCode = null;
        _this.size = 100;
        _this.loadingCover = null;
        return _this;
    }
    QRCodeGen.prototype.createQR = function () {
        var _this = this;
        try {
            var link = Helper_1.default.getControllerURL();
            if (!link) {
                throw console.error("Can't generate QR Code because controller url is " + link);
            }
            link += "&language=" + window.language;
            var div = document.createElement("div");
            var qrcode = new QRCode(div, {
                text: link,
                width: this.size,
                height: this.size,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.L
            });
            var img_1 = div.children[0];
            setTimeout(function () {
                _this.loadingCover.active = false;
                var texture = new cc.Texture2D();
                texture.initWithElement(img_1);
                texture.handleLoadedTexture();
                var spriteFrame = new cc.SpriteFrame(texture);
                var node = new cc.Node();
                var sprite = node.addComponent(cc.Sprite);
                sprite.spriteFrame = spriteFrame;
                sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
                _this.qrCode.removeAllChildren();
                _this.qrCode.addChild(node);
                node.width = _this.size;
                node.height = _this.size;
            }, 300);
        }
        catch (error) {
            if (Global_1.default.Instance.backAppTime - Date.now() < 0) {
                StageMgr_1.default.Instance.sendMessage("backToApp");
                return;
            }
            setTimeout(function () {
                _this.createQR();
            }, 2000);
        }
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    QRCodeGen.prototype.start = function () {
    };
    __decorate([
        property(cc.Node)
    ], QRCodeGen.prototype, "qrCode", void 0);
    __decorate([
        property
    ], QRCodeGen.prototype, "size", void 0);
    __decorate([
        property(cc.Node)
    ], QRCodeGen.prototype, "loadingCover", void 0);
    QRCodeGen = __decorate([
        ccclass
    ], QRCodeGen);
    return QRCodeGen;
}(cc.Component));
exports.default = QRCodeGen;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGVlckNvbXBvbmVudFxcUVJDb2RlR2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFzQztBQUN0Qyw4Q0FBeUM7QUFDekMsMENBQXFDO0FBRS9CLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBdURDO1FBckRzQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBQ2hDLFVBQUksR0FBVyxHQUFHLENBQUM7UUFDVixrQkFBWSxHQUFZLElBQUksQ0FBQzs7SUFtRHBELENBQUM7SUFqREcsNEJBQVEsR0FBUjtRQUFBLGlCQXlDQztRQXhDRyxJQUFJO1lBQ0EsSUFBSSxJQUFJLEdBQUcsZ0JBQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3JDLElBQUcsQ0FBQyxJQUFJLEVBQUU7Z0JBQ04sTUFBTSxPQUFPLENBQUMsS0FBSyxDQUFDLG1EQUFtRCxHQUFFLElBQUksQ0FBQyxDQUFDO2FBQ2xGO1lBQ0QsSUFBSSxJQUFJLGVBQWEsTUFBTSxDQUFDLFFBQVUsQ0FBQztZQUN2QyxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hDLElBQUksTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBQztnQkFDeEIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNoQixNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2pCLFNBQVMsRUFBRyxTQUFTO2dCQUNyQixVQUFVLEVBQUcsU0FBUztnQkFDdEIsWUFBWSxFQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUN2QyxDQUFDLENBQUM7WUFDSCxJQUFJLEtBQUcsR0FBUSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLFVBQVUsQ0FBQztnQkFDUCxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ2pDLElBQUksT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNqQyxPQUFPLENBQUMsZUFBZSxDQUFDLEtBQUcsQ0FBQyxDQUFDO2dCQUM3QixPQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztnQkFDOUIsSUFBSSxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDekIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO2dCQUNqQyxNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDNUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2dCQUNoQyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFFO2dCQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUU7WUFDN0IsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ1g7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLElBQUcsZ0JBQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUU7Z0JBQzdDLGtCQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDM0MsT0FBTzthQUNWO1lBQ0QsVUFBVSxDQUFDO2dCQUNQLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNwQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7U0FDWDtJQUNMLENBQUM7SUFFRCx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHlCQUFLLEdBQUw7SUFDQSxDQUFDO0lBcERrQjtRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FBd0I7SUFDaEM7UUFBVCxRQUFROzJDQUFvQjtJQUNWO1FBQWxCLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUE4QjtJQUovQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBdUQ3QjtJQUFELGdCQUFDO0NBdkRELEFBdURDLENBdkRzQyxFQUFFLENBQUMsU0FBUyxHQXVEbEQ7a0JBdkRvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vY29tbW9uL0dsb2JhbFwiO1xyXG5pbXBvcnQgU3RhZ2VNZ3IgZnJvbSBcIi4uL3N0YWdlL1N0YWdlTWdyXCI7XHJcbmltcG9ydCBIZWxwZXIgZnJvbSBcIi4uL3V0aWxzL0hlbHBlclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRUkNvZGVHZW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBxckNvZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5IHNpemU6IG51bWJlciA9IDEwMDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBsb2FkaW5nQ292ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIGNyZWF0ZVFSKCl7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGxpbmsgPSBIZWxwZXIuZ2V0Q29udHJvbGxlclVSTCgpO1xyXG4gICAgICAgICAgICBpZighbGluaykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgY29uc29sZS5lcnJvcihcIkNhbid0IGdlbmVyYXRlIFFSIENvZGUgYmVjYXVzZSBjb250cm9sbGVyIHVybCBpcyBcIisgbGluayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGluayArPSBgJmxhbmd1YWdlPSR7d2luZG93Lmxhbmd1YWdlfWA7XHJcbiAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBsZXQgcXJjb2RlID0gbmV3IFFSQ29kZShkaXYse1xyXG4gICAgICAgICAgICAgICAgdGV4dDogbGluayxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLnNpemUsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuc2l6ZSxcclxuICAgICAgICAgICAgICAgIGNvbG9yRGFyayA6IFwiIzAwMDAwMFwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3JMaWdodCA6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgICAgICAgY29ycmVjdExldmVsIDogUVJDb2RlLkNvcnJlY3RMZXZlbC5MXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsZXQgaW1nOiBhbnkgPSBkaXYuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nQ292ZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGV4dHVyZSA9IG5ldyBjYy5UZXh0dXJlMkQoKTtcclxuICAgICAgICAgICAgICAgIHRleHR1cmUuaW5pdFdpdGhFbGVtZW50KGltZyk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0dXJlLmhhbmRsZUxvYWRlZFRleHR1cmUoKTtcclxuICAgICAgICAgICAgICAgIHZhciBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIHZhciBub2RlID0gbmV3IGNjLk5vZGUoKTtcclxuICAgICAgICAgICAgICAgIHZhciBzcHJpdGUgPSBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGUuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xckNvZGUucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucXJDb2RlLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS53aWR0aCA9IHRoaXMuc2l6ZSA7XHJcbiAgICAgICAgICAgICAgICBub2RlLmhlaWdodCA9IHRoaXMuc2l6ZSA7XHJcbiAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgaWYoR2xvYmFsLkluc3RhbmNlLmJhY2tBcHBUaW1lIC0gRGF0ZS5ub3coKSA8IDApIHtcclxuICAgICAgICAgICAgICAgIFN0YWdlTWdyLkluc3RhbmNlLnNlbmRNZXNzYWdlKFwiYmFja1RvQXBwXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlUVIoKTsgXHJcbiAgICAgICAgICAgIH0sIDIwMDApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/collisionReset.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a17f9LZSlxJWIxURW1Pdn8u', 'collisionReset');
// Scripts/collisionReset.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var cuboid_1 = require("./cuboid");
var playGround_1 = require("./playGround");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CollisionReset = /** @class */ (function (_super) {
    __extends(CollisionReset, _super);
    function CollisionReset() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PlayGround = null;
        return _this;
    }
    CollisionReset.prototype.onCollisionExit = function (other, self) {
        if (this.PlayGround.isPlayerDead || other.tag !== 5 || !this.PlayGround.isReady)
            return;
        if (other.node.name == "ExtraCuboid") {
            this.PlayGround.extraCuboidPool.put(other.node);
        }
        else if (other.node == this.PlayGround.cuboidBase) {
            // other.node.destroy();
        }
        else {
            if (other.node.getComponent(cuboid_1.default).diamond) {
                this.PlayGround.diamondPool.put(other.node.getComponent(cuboid_1.default).diamond);
            }
            this.PlayGround.createCuboid(other.node);
        }
    };
    __decorate([
        property(playGround_1.default)
    ], CollisionReset.prototype, "PlayGround", void 0);
    CollisionReset = __decorate([
        ccclass
    ], CollisionReset);
    return CollisionReset;
}(cc.Component));
exports.default = CollisionReset;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcY29sbGlzaW9uUmVzZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQThCO0FBQzlCLDJDQUFzQztBQUdoQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQWtCQztRQWhCeUIsZ0JBQVUsR0FBZSxJQUFJLENBQUM7O0lBZ0J4RCxDQUFDO0lBZEcsd0NBQWUsR0FBZixVQUFnQixLQUFrQixFQUFFLElBQWlCO1FBQ2pELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBRXhGLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksYUFBYSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkQ7YUFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7WUFDakQsd0JBQXdCO1NBQzNCO2FBQU07WUFDSCxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDNUU7WUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUM7SUFDTCxDQUFDO0lBZnFCO1FBQXJCLFFBQVEsQ0FBQyxvQkFBVSxDQUFDO3NEQUErQjtJQUZuQyxjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBa0JsQztJQUFELHFCQUFDO0NBbEJELEFBa0JDLENBbEIyQyxFQUFFLENBQUMsU0FBUyxHQWtCdkQ7a0JBbEJvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEN1Ym9pZCBmcm9tIFwiLi9jdWJvaWRcIjtcclxuaW1wb3J0IHBsYXlHcm91bmQgZnJvbSBcIi4vcGxheUdyb3VuZFwiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsaXNpb25SZXNldCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHBsYXlHcm91bmQpIFBsYXlHcm91bmQ6IHBsYXlHcm91bmQgPSBudWxsO1xyXG5cclxuICAgIG9uQ29sbGlzaW9uRXhpdChvdGhlcjogY2MuQ29sbGlkZXIsIHNlbGY6IGNjLkNvbGxpZGVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuUGxheUdyb3VuZC5pc1BsYXllckRlYWQgfHwgb3RoZXIudGFnICE9PSA1IHx8ICF0aGlzLlBsYXlHcm91bmQuaXNSZWFkeSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAob3RoZXIubm9kZS5uYW1lID09IFwiRXh0cmFDdWJvaWRcIikge1xyXG4gICAgICAgICAgICB0aGlzLlBsYXlHcm91bmQuZXh0cmFDdWJvaWRQb29sLnB1dChvdGhlci5ub2RlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyLm5vZGUgPT0gdGhpcy5QbGF5R3JvdW5kLmN1Ym9pZEJhc2UpIHtcclxuICAgICAgICAgICAgLy8gb3RoZXIubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KEN1Ym9pZCkuZGlhbW9uZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5R3JvdW5kLmRpYW1vbmRQb29sLnB1dChvdGhlci5ub2RlLmdldENvbXBvbmVudChDdWJvaWQpLmRpYW1vbmQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuUGxheUdyb3VuZC5jcmVhdGVDdWJvaWQob3RoZXIubm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/playerBallHitBox.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '055aeKjXC5P5JH+PuFhm8cO', 'playerBallHitBox');
// Scripts/playerBallHitBox.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var SoundMgr_1 = require("./common/SoundMgr");
var diamond_1 = require("./diamond");
var GameDefine_1 = require("./game/GameDefine");
var playGround_1 = require("./playGround");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var playerBallHitBox = /** @class */ (function (_super) {
    __extends(playerBallHitBox, _super);
    function playerBallHitBox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PlayGround = null;
        return _this;
    }
    playerBallHitBox.prototype.onCollisionEnter = function (other, self) {
        if (other.tag !== 3)
            return;
        var diamond = other.node.getComponent(diamond_1.default);
        if (!diamond.diamondSprite.node.active)
            return;
        SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_CRYSTAL);
        diamond.diamondSprite.node.active = false;
        diamond.diamondParticle.node.active = true;
        diamond.diamondParticle.resetSystem();
        diamond.lblScorePlus.node.active = true;
        cc.tween(diamond.lblScorePlus.node).to(0.5, { y: 175 }).call(function () {
            diamond.lblScorePlus.node.active = false;
            diamond.lblScorePlus.node.y = 75;
        }).start();
        this.PlayGround.scoreUpdate(GameDefine_1.default.DiamondScore);
        diamond.lblScorePlus.string = "+" + GameDefine_1.default.DiamondScore;
    };
    __decorate([
        property(playGround_1.default)
    ], playerBallHitBox.prototype, "PlayGround", void 0);
    playerBallHitBox = __decorate([
        ccclass
    ], playerBallHitBox);
    return playerBallHitBox;
}(cc.Component));
exports.default = playerBallHitBox;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xccGxheWVyQmFsbEhpdEJveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBeUM7QUFDekMscUNBQWdDO0FBQ2hDLGdEQUEyQztBQUMzQywyQ0FBc0M7QUFFaEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUF1QkM7UUFyQnlCLGdCQUFVLEdBQWUsSUFBSSxDQUFDOztJQXFCeEQsQ0FBQztJQW5CRywyQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBa0IsRUFBRSxJQUFpQjtRQUNsRCxJQUFHLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUFFLE9BQU87UUFFM0IsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQU8sQ0FBQyxDQUFDO1FBQy9DLElBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUU5QyxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxrQkFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVoRCxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDM0MsT0FBTyxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN0QyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3hDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3ZELE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDekMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNYLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLG9CQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckQsT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLG9CQUFVLENBQUMsWUFBWSxDQUFDO0lBQ2hFLENBQUM7SUFwQnFCO1FBQXJCLFFBQVEsQ0FBQyxvQkFBVSxDQUFDO3dEQUErQjtJQUZuQyxnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQXVCcEM7SUFBRCx1QkFBQztDQXZCRCxBQXVCQyxDQXZCNkMsRUFBRSxDQUFDLFNBQVMsR0F1QnpEO2tCQXZCb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNvdW5kTWdyIGZyb20gXCIuL2NvbW1vbi9Tb3VuZE1nclwiO1xyXG5pbXBvcnQgRGlhbW9uZCBmcm9tIFwiLi9kaWFtb25kXCI7XHJcbmltcG9ydCBHYW1lRGVmaW5lIGZyb20gXCIuL2dhbWUvR2FtZURlZmluZVwiO1xyXG5pbXBvcnQgcGxheUdyb3VuZCBmcm9tIFwiLi9wbGF5R3JvdW5kXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHBsYXllckJhbGxIaXRCb3ggZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShwbGF5R3JvdW5kKSBQbGF5R3JvdW5kOiBwbGF5R3JvdW5kID0gbnVsbDtcclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyOiBjYy5Db2xsaWRlciwgc2VsZjogY2MuQ29sbGlkZXIpIHtcclxuICAgICAgICBpZihvdGhlci50YWcgIT09IDMpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGRpYW1vbmQgPSBvdGhlci5ub2RlLmdldENvbXBvbmVudChEaWFtb25kKTtcclxuICAgICAgICBpZighZGlhbW9uZC5kaWFtb25kU3ByaXRlLm5vZGUuYWN0aXZlKSByZXR1cm47XHJcblxyXG4gICAgICAgIFNvdW5kTWdyLnBsYXlTZngoU291bmRNZ3IuSW5zdGFuY2UuU0ZYX0NSWVNUQUwpO1xyXG5cclxuICAgICAgICBkaWFtb25kLmRpYW1vbmRTcHJpdGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBkaWFtb25kLmRpYW1vbmRQYXJ0aWNsZS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgZGlhbW9uZC5kaWFtb25kUGFydGljbGUucmVzZXRTeXN0ZW0oKTtcclxuICAgICAgICBkaWFtb25kLmxibFNjb3JlUGx1cy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgY2MudHdlZW4oZGlhbW9uZC5sYmxTY29yZVBsdXMubm9kZSkudG8oMC41LCB7eTogMTc1fSkuY2FsbCgoKT0+e1xyXG4gICAgICAgICAgICBkaWFtb25kLmxibFNjb3JlUGx1cy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkaWFtb25kLmxibFNjb3JlUGx1cy5ub2RlLnkgPSA3NTtcclxuICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMuUGxheUdyb3VuZC5zY29yZVVwZGF0ZShHYW1lRGVmaW5lLkRpYW1vbmRTY29yZSk7XHJcbiAgICAgICAgZGlhbW9uZC5sYmxTY29yZVBsdXMuc3RyaW5nID0gXCIrXCIgKyBHYW1lRGVmaW5lLkRpYW1vbmRTY29yZTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/PeerComponent/PeerDefine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6d3cf1QRs9NY4n4TNnuAi/J', 'PeerDefine');
// Scripts/PeerComponent/PeerDefine.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeerActionType = exports.PeerActionConnect = exports.PeerStage = exports.PeerPhase = void 0;
exports.default = new (/** @class */ (function () {
    function PeerDefine() {
        this.MAX_CLIENT = 3;
        this.TIMEOUT_DISCONNECT = 3000;
        this.PING_TIMER = 1000;
        this.TIMEOUT_RETRY = 5000;
    }
    return PeerDefine;
}()));
var PeerPhase;
(function (PeerPhase) {
    PeerPhase[PeerPhase["NONE"] = 0] = "NONE";
    PeerPhase[PeerPhase["CONNECT"] = 1] = "CONNECT";
    PeerPhase[PeerPhase["START_SCREEN"] = 2] = "START_SCREEN";
    PeerPhase[PeerPhase["WAITING"] = 3] = "WAITING";
    PeerPhase[PeerPhase["SCAN_QR"] = 4] = "SCAN_QR";
    PeerPhase[PeerPhase["INGAME"] = 5] = "INGAME";
    PeerPhase[PeerPhase["GAMEOVER"] = 6] = "GAMEOVER";
})(PeerPhase = exports.PeerPhase || (exports.PeerPhase = {}));
var PeerStage;
(function (PeerStage) {
    PeerStage[PeerStage["PLAYING"] = 0] = "PLAYING";
    PeerStage[PeerStage["WAITING"] = 1] = "WAITING";
})(PeerStage = exports.PeerStage || (exports.PeerStage = {}));
var PeerActionConnect;
(function (PeerActionConnect) {
    PeerActionConnect[PeerActionConnect["CONNECTING"] = 0] = "CONNECTING";
    PeerActionConnect[PeerActionConnect["CONNECTED"] = 1] = "CONNECTED";
    PeerActionConnect[PeerActionConnect["CONNECT_FAILED"] = 2] = "CONNECT_FAILED";
    PeerActionConnect[PeerActionConnect["CONNECT_RETRY"] = 3] = "CONNECT_RETRY";
    PeerActionConnect[PeerActionConnect["CONNECT_RETRY_SUCCESS"] = 4] = "CONNECT_RETRY_SUCCESS";
    PeerActionConnect[PeerActionConnect["SWITCH_MAINPLAYER"] = 5] = "SWITCH_MAINPLAYER";
    PeerActionConnect[PeerActionConnect["PING_PONG"] = 6] = "PING_PONG";
})(PeerActionConnect = exports.PeerActionConnect || (exports.PeerActionConnect = {}));
var PeerActionType;
(function (PeerActionType) {
    PeerActionType[PeerActionType["NONE"] = 0] = "NONE";
    PeerActionType[PeerActionType["UP"] = 1] = "UP";
    PeerActionType[PeerActionType["DOWN"] = 2] = "DOWN";
    PeerActionType[PeerActionType["LEFT"] = 3] = "LEFT";
    PeerActionType[PeerActionType["RIGHT"] = 4] = "RIGHT";
    PeerActionType[PeerActionType["ENTER"] = 5] = "ENTER";
    PeerActionType[PeerActionType["NEXT"] = 6] = "NEXT";
    PeerActionType[PeerActionType["BACK"] = 7] = "BACK";
    PeerActionType[PeerActionType["CUSTOM"] = 8] = "CUSTOM";
    PeerActionType[PeerActionType["JUMP"] = 9] = "JUMP";
    PeerActionType[PeerActionType["ENDGAME"] = 10] = "ENDGAME";
    PeerActionType[PeerActionType["REPLAY"] = 11] = "REPLAY";
    PeerActionType[PeerActionType["HOME"] = 12] = "HOME";
    PeerActionType[PeerActionType["HOLD"] = 13] = "HOLD";
    PeerActionType[PeerActionType["RELEASE"] = 14] = "RELEASE";
    PeerActionType[PeerActionType["ROTATE"] = 15] = "ROTATE";
    PeerActionType[PeerActionType["SHOW"] = 16] = "SHOW";
})(PeerActionType = exports.PeerActionType || (exports.PeerActionType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGVlckNvbXBvbmVudFxcUGVlckRlZmluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrQkFBZSxJQUFJO0lBQUM7UUFFTCxlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsdUJBQWtCLEdBQUcsSUFBSSxDQUFBO1FBQ3pCLGVBQVUsR0FBRyxJQUFJLENBQUE7UUFDakIsa0JBQWEsR0FBRyxJQUFJLENBQUE7SUFDL0IsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FOZ0IsQUFNZixJQUFDLENBQUE7QUFDRixJQUFZLFNBU1g7QUFURCxXQUFZLFNBQVM7SUFFakIseUNBQVEsQ0FBQTtJQUNSLCtDQUFPLENBQUE7SUFDUCx5REFBWSxDQUFBO0lBQ1osK0NBQU8sQ0FBQTtJQUNQLCtDQUFPLENBQUE7SUFDUCw2Q0FBTSxDQUFBO0lBQ04saURBQVEsQ0FBQTtBQUNaLENBQUMsRUFUVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQVNwQjtBQUNELElBQVksU0FJWDtBQUpELFdBQVksU0FBUztJQUVqQiwrQ0FBTyxDQUFBO0lBQ1AsK0NBQU8sQ0FBQTtBQUNYLENBQUMsRUFKVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUlwQjtBQUNELElBQVksaUJBU1g7QUFURCxXQUFZLGlCQUFpQjtJQUV6QixxRUFBVSxDQUFBO0lBQ1YsbUVBQVMsQ0FBQTtJQUNULDZFQUFjLENBQUE7SUFDZCwyRUFBYSxDQUFBO0lBQ2IsMkZBQXFCLENBQUE7SUFDckIsbUZBQWlCLENBQUE7SUFDakIsbUVBQVMsQ0FBQTtBQUNiLENBQUMsRUFUVyxpQkFBaUIsR0FBakIseUJBQWlCLEtBQWpCLHlCQUFpQixRQVM1QjtBQUNELElBQVksY0FtQlg7QUFuQkQsV0FBWSxjQUFjO0lBRXRCLG1EQUFRLENBQUE7SUFDUiwrQ0FBRSxDQUFBO0lBQ0YsbURBQUksQ0FBQTtJQUNKLG1EQUFJLENBQUE7SUFDSixxREFBSyxDQUFBO0lBQ0wscURBQUssQ0FBQTtJQUNMLG1EQUFJLENBQUE7SUFDSixtREFBSSxDQUFBO0lBQ0osdURBQU0sQ0FBQTtJQUNOLG1EQUFJLENBQUE7SUFDSiwwREFBTyxDQUFBO0lBQ1Asd0RBQU0sQ0FBQTtJQUNOLG9EQUFJLENBQUE7SUFDSixvREFBSSxDQUFBO0lBQ0osMERBQU8sQ0FBQTtJQUNQLHdEQUFNLENBQUE7SUFDTixvREFBSSxDQUFBO0FBQ1IsQ0FBQyxFQW5CVyxjQUFjLEdBQWQsc0JBQWMsS0FBZCxzQkFBYyxRQW1CekIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBuZXcgKGNsYXNzIFBlZXJEZWZpbmVcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgTUFYX0NMSUVOVCA9IDM7XHJcbiAgICAgICAgcHVibGljIFRJTUVPVVRfRElTQ09OTkVDVCA9IDMwMDBcclxuICAgICAgICBwdWJsaWMgUElOR19USU1FUiA9IDEwMDBcclxuICAgICAgICBwdWJsaWMgVElNRU9VVF9SRVRSWSA9IDUwMDBcclxuICAgIH0pXHJcbiAgICBleHBvcnQgZW51bSBQZWVyUGhhc2VcclxuICAgIHtcclxuICAgICAgICBOT05FID0gMCxcclxuICAgICAgICBDT05ORUNULFxyXG4gICAgICAgIFNUQVJUX1NDUkVFTixcclxuICAgICAgICBXQUlUSU5HLFxyXG4gICAgICAgIFNDQU5fUVIsXHJcbiAgICAgICAgSU5HQU1FLFxyXG4gICAgICAgIEdBTUVPVkVSXHJcbiAgICB9XHJcbiAgICBleHBvcnQgZW51bSBQZWVyU3RhZ2VcclxuICAgIHtcclxuICAgICAgICBQTEFZSU5HLFxyXG4gICAgICAgIFdBSVRJTkcsXHJcbiAgICB9XHJcbiAgICBleHBvcnQgZW51bSBQZWVyQWN0aW9uQ29ubmVjdFxyXG4gICAge1xyXG4gICAgICAgIENPTk5FQ1RJTkcsXHJcbiAgICAgICAgQ09OTkVDVEVELFxyXG4gICAgICAgIENPTk5FQ1RfRkFJTEVELFxyXG4gICAgICAgIENPTk5FQ1RfUkVUUlksXHJcbiAgICAgICAgQ09OTkVDVF9SRVRSWV9TVUNDRVNTLFxyXG4gICAgICAgIFNXSVRDSF9NQUlOUExBWUVSLFxyXG4gICAgICAgIFBJTkdfUE9ORyxcclxuICAgIH1cclxuICAgIGV4cG9ydCBlbnVtIFBlZXJBY3Rpb25UeXBlXHJcbiAgICB7XHJcbiAgICAgICAgTk9ORSA9IDAsXHJcbiAgICAgICAgVVAsXHJcbiAgICAgICAgRE9XTixcclxuICAgICAgICBMRUZULFxyXG4gICAgICAgIFJJR0hULFxyXG4gICAgICAgIEVOVEVSLFxyXG4gICAgICAgIE5FWFQsXHJcbiAgICAgICAgQkFDSyxcclxuICAgICAgICBDVVNUT00sXHJcbiAgICAgICAgSlVNUCxcclxuICAgICAgICBFTkRHQU1FLFxyXG4gICAgICAgIFJFUExBWSxcclxuICAgICAgICBIT01FLFxyXG4gICAgICAgIEhPTEQsXHJcbiAgICAgICAgUkVMRUFTRSxcclxuICAgICAgICBST1RBVEUsXHJcbiAgICAgICAgU0hPV1xyXG4gICAgfVxyXG4gICAgIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/AudioController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a9ec7Y1hx1KB5gy4Z0CyAdY', 'AudioController');
// Scripts/AudioController.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Audios = void 0;
var SingletonNode_1 = require("./utils/SingletonNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Audios;
(function (Audios) {
    Audios[Audios["Booster"] = 0] = "Booster";
    Audios[Audios["BtnClick"] = 1] = "BtnClick";
    Audios[Audios["MCDie"] = 2] = "MCDie";
    Audios[Audios["EnemiesComing"] = 3] = "EnemiesComing";
    Audios[Audios["EnemyDie"] = 4] = "EnemyDie";
    Audios[Audios["FreezeSkill"] = 5] = "FreezeSkill";
    Audios[Audios["GameOver"] = 6] = "GameOver";
    Audios[Audios["GamePlayLoop"] = 7] = "GamePlayLoop";
    Audios[Audios["HomeLoop"] = 8] = "HomeLoop";
    Audios[Audios["InvisibleSkill"] = 9] = "InvisibleSkill";
    Audios[Audios["Jump"] = 10] = "Jump";
    Audios[Audios["MCHit"] = 11] = "MCHit";
    Audios[Audios["RageSkill"] = 12] = "RageSkill";
    Audios[Audios["Roarr"] = 13] = "Roarr";
    Audios[Audios["SlowSkill"] = 14] = "SlowSkill";
    Audios[Audios["SwipeOnEnemy"] = 15] = "SwipeOnEnemy";
    Audios[Audios["WaterComming"] = 16] = "WaterComming";
})(Audios = exports.Audios || (exports.Audios = {}));
var AudioController = /** @class */ (function (_super) {
    __extends(AudioController, _super);
    function AudioController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // LIFE-CYCLE CALLBACKS:
        _this.AudioList = [];
        _this.volume = 1;
        return _this;
    }
    AudioController.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    AudioController.prototype.start = function () {
    };
    AudioController.prototype.playAudioEffect = function (audioClip, loop) {
        if (loop === void 0) { loop = false; }
        var audio = this.AudioList[audioClip];
        return cc.audioEngine.playEffect(audio, loop);
    };
    AudioController.prototype.stopAudioEffect = function (id) {
        cc.audioEngine.stopEffect(id);
    };
    AudioController.prototype.stopAllAudioEffect = function () {
        cc.audioEngine.stopAllEffects();
    };
    AudioController.prototype.playButtonSound = function () {
        this.playAudioEffect(Audios.BtnClick);
    };
    AudioController.prototype.setMute = function () {
        if (this.volume == 1) {
            this.volume = 0;
            cc.audioEngine.setEffectsVolume(0);
        }
        else {
            this.volume = 1;
            cc.audioEngine.setEffectsVolume(1);
        }
    };
    __decorate([
        property(cc.AudioClip)
    ], AudioController.prototype, "AudioList", void 0);
    AudioController = __decorate([
        ccclass
    ], AudioController);
    return AudioController;
}(SingletonNode_1.default()));
exports.default = AudioController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQXVkaW9Db250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBa0Q7QUFDNUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsSUFBWSxNQW1CWDtBQW5CRCxXQUFZLE1BQU07SUFFZCx5Q0FBVyxDQUFBO0lBQ1gsMkNBQVksQ0FBQTtJQUNaLHFDQUFTLENBQUE7SUFDVCxxREFBaUIsQ0FBQTtJQUNqQiwyQ0FBWSxDQUFBO0lBQ1osaURBQWUsQ0FBQTtJQUNmLDJDQUFZLENBQUE7SUFDWixtREFBZ0IsQ0FBQTtJQUNoQiwyQ0FBWSxDQUFBO0lBQ1osdURBQWtCLENBQUE7SUFDbEIsb0NBQVMsQ0FBQTtJQUNULHNDQUFVLENBQUE7SUFDViw4Q0FBYyxDQUFBO0lBQ2Qsc0NBQVUsQ0FBQTtJQUNWLDhDQUFjLENBQUE7SUFDZCxvREFBaUIsQ0FBQTtJQUNqQixvREFBaUIsQ0FBQTtBQUNyQixDQUFDLEVBbkJXLE1BQU0sR0FBTixjQUFNLEtBQU4sY0FBTSxRQW1CakI7QUFFRDtJQUE2QyxtQ0FBZ0M7SUFBN0U7UUFBQSxxRUE4Q0M7UUEzQ0csd0JBQXdCO1FBQ0EsZUFBUyxHQUF5QixFQUFFLENBQUM7UUFFdEQsWUFBTSxHQUFhLENBQUMsQ0FBQzs7SUF3Q2hDLENBQUM7SUF0Q0csZ0NBQU0sR0FBTjtRQUVJLGlCQUFNLE1BQU0sV0FBRSxDQUFBO0lBQ2xCLENBQUM7SUFDRCwrQkFBSyxHQUFMO0lBR0EsQ0FBQztJQUNELHlDQUFlLEdBQWYsVUFBZ0IsU0FBa0IsRUFBRSxJQUFzQjtRQUF0QixxQkFBQSxFQUFBLFlBQXNCO1FBRXRELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDckMsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDakQsQ0FBQztJQUNELHlDQUFlLEdBQWYsVUFBZ0IsRUFBVztRQUV2QixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBQ0QsNENBQWtCLEdBQWxCO1FBRUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtJQUNuQyxDQUFDO0lBQ0QseUNBQWUsR0FBZjtRQUVJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFDRCxpQ0FBTyxHQUFQO1FBRUksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFDcEI7WUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoQixFQUFFLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQ3JDO2FBQ0Q7WUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoQixFQUFFLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQ3JDO0lBQ0wsQ0FBQztJQXhDdUI7UUFBdkIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7c0RBQXNDO0lBSjVDLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0E4Q25DO0lBQUQsc0JBQUM7Q0E5Q0QsQUE4Q0MsQ0E5QzRDLHVCQUFhLEVBQW1CLEdBOEM1RTtrQkE5Q29CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2luZ2xldG9uTm9kZSBmcm9tIFwiLi91dGlscy9TaW5nbGV0b25Ob2RlXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmV4cG9ydCBlbnVtIEF1ZGlvc1xyXG57XHJcbiAgICBCb29zdGVyID0gMCxcclxuICAgIEJ0bkNsaWNrID0gMSxcclxuICAgIE1DRGllID0gMixcclxuICAgIEVuZW1pZXNDb21pbmcgPSAzLFxyXG4gICAgRW5lbXlEaWUgPSA0LFxyXG4gICAgRnJlZXplU2tpbGwgPSA1LFxyXG4gICAgR2FtZU92ZXIgPSA2LFxyXG4gICAgR2FtZVBsYXlMb29wID0gNyxcclxuICAgIEhvbWVMb29wID0gOCxcclxuICAgIEludmlzaWJsZVNraWxsID0gOSxcclxuICAgIEp1bXAgPSAxMCxcclxuICAgIE1DSGl0ID0gMTEsXHJcbiAgICBSYWdlU2tpbGwgPSAxMixcclxuICAgIFJvYXJyID0gMTMsXHJcbiAgICBTbG93U2tpbGwgPSAxNCxcclxuICAgIFN3aXBlT25FbmVteSA9IDE1LFxyXG4gICAgV2F0ZXJDb21taW5nID0gMTYsXHJcbn1cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW9Db250cm9sbGVyIGV4dGVuZHMgU2luZ2xldG9uTm9kZTxBdWRpb0NvbnRyb2xsZXI+KCkge1xyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApIEF1ZGlvTGlzdCA6IEFycmF5PGNjLkF1ZGlvQ2xpcD4gPSBbXTtcclxuXHJcbiAgICBwdWJsaWMgdm9sdW1lIDogbnVtYmVyICA9IDE7XHJcbiAgICBcclxuICAgIG9uTG9hZCgpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIub25Mb2FkKClcclxuICAgIH1cclxuICAgIHN0YXJ0KClcclxuICAgIHtcclxuXHJcbiAgICB9XHJcbiAgICBwbGF5QXVkaW9FZmZlY3QoYXVkaW9DbGlwIDogQXVkaW9zLCBsb29wIDogYm9vbGVhbiA9IGZhbHNlKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBhdWRpbyA9IHRoaXMuQXVkaW9MaXN0W2F1ZGlvQ2xpcF1cclxuICAgICAgICByZXR1cm4gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChhdWRpbywgbG9vcClcclxuICAgIH1cclxuICAgIHN0b3BBdWRpb0VmZmVjdChpZCA6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wRWZmZWN0KGlkKVxyXG4gICAgfVxyXG4gICAgc3RvcEFsbEF1ZGlvRWZmZWN0KClcclxuICAgIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpXHJcbiAgICB9XHJcbiAgICBwbGF5QnV0dG9uU291bmQoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucGxheUF1ZGlvRWZmZWN0KEF1ZGlvcy5CdG5DbGljaylcclxuICAgIH1cclxuICAgIHNldE11dGUoKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLnZvbHVtZSA9PSAxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy52b2x1bWUgPSAwO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRFZmZlY3RzVm9sdW1lKDApXHJcbiAgICAgICAgfSBlbHNlIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy52b2x1bWUgPSAxO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRFZmZlY3RzVm9sdW1lKDEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/playerBall.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9a52dKv1yRLFb9DOGF+w6r+', 'playerBall');
// Scripts/playerBall.ts

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
var playGround_1 = require("./playGround");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerBall = /** @class */ (function (_super) {
    __extends(PlayerBall, _super);
    function PlayerBall() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PlayGround = null;
        _this.enterCount = 1;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    PlayerBall.prototype.start = function () {
    };
    // update (dt) {}
    PlayerBall.prototype.onCollisionEnter = function (other, self) {
        if (this.PlayGround.isPlayerDead || other.tag !== 2 || !this.PlayGround.isReady)
            return;
        this.PlayGround.isPlayerDead = true;
    };
    __decorate([
        property(playGround_1.default)
    ], PlayerBall.prototype, "PlayGround", void 0);
    PlayerBall = __decorate([
        ccclass
    ], PlayerBall);
    return PlayerBall;
}(cc.Component));
exports.default = PlayerBall;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xccGxheWVyQmFsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlsRiwyQ0FBc0M7QUFFaEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFvQkM7UUFsQnlCLGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBRTVDLGdCQUFVLEdBQUcsQ0FBQyxDQUFDOztJQWdCM0IsQ0FBQztJQWRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsMEJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxpQkFBaUI7SUFDakIscUNBQWdCLEdBQWhCLFVBQWlCLEtBQWtCLEVBQUUsSUFBaUI7UUFDbEQsSUFBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTztZQUFFLE9BQU87UUFFdkYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQ3hDLENBQUM7SUFqQnFCO1FBQXJCLFFBQVEsQ0FBQyxvQkFBVSxDQUFDO2tEQUErQjtJQUZuQyxVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBb0I5QjtJQUFELGlCQUFDO0NBcEJELEFBb0JDLENBcEJ1QyxFQUFFLENBQUMsU0FBUyxHQW9CbkQ7a0JBcEJvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEN1Ym9pZCBmcm9tIFwiLi9jdWJvaWRcIjtcclxuaW1wb3J0IERpYW1vbmQgZnJvbSBcIi4vZGlhbW9uZFwiO1xyXG5pbXBvcnQgcGxheUdyb3VuZCBmcm9tIFwiLi9wbGF5R3JvdW5kXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckJhbGwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShwbGF5R3JvdW5kKSBQbGF5R3JvdW5kOiBwbGF5R3JvdW5kID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGVudGVyQ291bnQgPSAxO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXI6IGNjLkNvbGxpZGVyLCBzZWxmOiBjYy5Db2xsaWRlcikge1xyXG4gICAgICAgIGlmKHRoaXMuUGxheUdyb3VuZC5pc1BsYXllckRlYWQgfHwgb3RoZXIudGFnICE9PSAyIHx8ICF0aGlzLlBsYXlHcm91bmQuaXNSZWFkeSkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuUGxheUdyb3VuZC5pc1BsYXllckRlYWQgPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Popups/PopupManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '30835F+tMxLu4+MZ1zfvBzu', 'PopupManager');
// Scripts/Popups/PopupManager.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Popups = void 0;
var Helper_1 = require("../utils/Helper");
var SingletonNode_1 = require("../utils/SingletonNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Popups;
(function (Popups) {
})(Popups = exports.Popups || (exports.Popups = {}));
var PopupManager = /** @class */ (function (_super) {
    __extends(PopupManager, _super);
    function PopupManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PopupBackground = null;
        _this.PopupContainer = null;
        _this.ShownPopups = null;
        _this.PopupPrefabs = [];
        return _this;
    }
    PopupManager.push = function (popupName, useBg) {
        if (useBg === void 0) { useBg = true; }
        var instance = this.Instance;
        var popup = instance.PopupContainer.getChildByName(Popups[popupName]);
        if (popup) {
            instance.usePopup(popup);
            instance.animate(true, popup);
            instance.PopupBackground.active = useBg;
        }
    };
    PopupManager.pop = function () {
        var instance = this.Instance;
        if (instance.ShownPopups.children.length > 0) {
            var popup = instance.ShownPopups.children[instance.ShownPopups.children.length - 1];
            instance.PopupBackground.active = instance.ShownPopups.children.length - 1 > 0;
            instance.animate(false, popup);
        }
    };
    PopupManager.hide = function (popupName) {
        var instance = this.Instance;
        var popup = instance.ShownPopups.getChildByName(Popups[popupName]);
        if (popup) {
            instance.animate(false, popup);
        }
    };
    PopupManager.getPopup = function (popupName) {
        var instance = this.Instance;
        var popup = instance.PopupContainer.getChildByName(Popups[popupName]);
        if (popup) {
            return popup;
        }
        return instance.ShownPopups.getChildByName(Popups[popupName]);
    };
    PopupManager.prototype.animate = function (isShow, popup) {
        var _this = this;
        if (!isShow) {
            var randomEasing = ['bounceOut', 'quadOut', 'backOut'];
            var easing = randomEasing[Helper_1.default.RandInt(0, randomEasing.length - 1)];
            cc.tween(popup)
                .to(0.3, { scale: 0, }, { easing: 'quadIn' })
                .call(function () {
                _this.returnPopup(popup);
                // this.PopupBackground.active = this.ShownPopups.children.length > 0;
            })
                .start();
        }
        else {
            var randomEasing = ['bounceOut', 'quadOut', 'backOut'];
            var easing = randomEasing[Helper_1.default.RandInt(0, randomEasing.length - 1)];
            popup.setScale(0);
            cc.tween(popup)
                .by(0.3, { scale: 1, }, { easing: easing })
                .start();
        }
    };
    PopupManager.prototype.usePopup = function (popup) {
        this.PopupContainer.removeChild(popup, false);
        this.ShownPopups.addChild(popup);
    };
    PopupManager.prototype.returnPopup = function (popup) {
        this.ShownPopups.removeChild(popup, false);
        this.PopupContainer.addChild(popup);
    };
    PopupManager.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        for (var i = 0; i < this.PopupPrefabs.length; i++) {
            this.PopupContainer.addChild(cc.instantiate(this.PopupPrefabs[i]));
        }
    };
    PopupManager.prototype.start = function () {
    };
    __decorate([
        property(cc.Node)
    ], PopupManager.prototype, "PopupBackground", void 0);
    __decorate([
        property(cc.Node)
    ], PopupManager.prototype, "PopupContainer", void 0);
    __decorate([
        property(cc.Node)
    ], PopupManager.prototype, "ShownPopups", void 0);
    __decorate([
        property(cc.Prefab)
    ], PopupManager.prototype, "PopupPrefabs", void 0);
    PopupManager = __decorate([
        ccclass
    ], PopupManager);
    return PopupManager;
}(SingletonNode_1.default()));
exports.default = PopupManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUG9wdXBzXFxQb3B1cE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBDQUFxQztBQUNyQyx3REFBbUQ7QUFFN0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsSUFBWSxNQUdYO0FBSEQsV0FBWSxNQUFNO0FBR2xCLENBQUMsRUFIVyxNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUFHakI7QUFFRDtJQUEwQyxnQ0FBNkI7SUFBdkU7UUFBQSxxRUF1R0M7UUFyRzhCLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBQ2hDLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBQy9CLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzFCLGtCQUFZLEdBQXFCLEVBQUUsQ0FBQzs7SUFrR3JFLENBQUM7SUE5RlUsaUJBQUksR0FBWCxVQUFZLFNBQWlCLEVBQUUsS0FBWTtRQUFaLHNCQUFBLEVBQUEsWUFBWTtRQUV2QyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksS0FBSyxFQUNUO1lBQ0ksUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM5QixRQUFRLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDM0M7SUFDTCxDQUFDO0lBRU0sZ0JBQUcsR0FBVjtRQUVJLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBSSxRQUFRLENBQUMsV0FBVyxDQUFD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LENBQUM7SUFFTyxrQ0FBVyxHQUFuQixVQUFvQixLQUFjO1FBRTlCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsNkJBQU0sR0FBTjtRQUVJLGlCQUFNLE1BQU0sV0FBRSxDQUFDO1FBQ2YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUNqRDtZQUNJLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEU7SUFDTCxDQUFDO0lBRUQsNEJBQUssR0FBTDtJQUdBLENBQUM7SUFuR2tCO1FBQWxCLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUF5QztJQUN4QztRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3REFBd0M7SUFDdkM7UUFBbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQXFDO0lBQ2xDO1FBQXBCLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUE2QztJQUxoRCxZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBdUdoQztJQUFELG1CQUFDO0NBdkdELEFBdUdDLENBdkd5Qyx1QkFBYSxFQUFnQixHQXVHdEU7a0JBdkdvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlbHBlciBmcm9tIFwiLi4vdXRpbHMvSGVscGVyXCI7XHJcbmltcG9ydCBTaW5nbGV0b25Ob2RlIGZyb20gXCIuLi91dGlscy9TaW5nbGV0b25Ob2RlXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5leHBvcnQgZW51bSBQb3B1cHNcclxue1xyXG4gICAgXHJcbn1cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBNYW5hZ2VyIGV4dGVuZHMgU2luZ2xldG9uTm9kZTxQb3B1cE1hbmFnZXI+KCkge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBwcml2YXRlIFBvcHVwQmFja2dyb3VuZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgcHJpdmF0ZSBQb3B1cENvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgcHJpdmF0ZSBTaG93blBvcHVwczogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKSBwcml2YXRlIFBvcHVwUHJlZmFiczogQXJyYXk8Y2MuUHJlZmFiPiA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgbVNob3dDYWxsYmFjaztcclxuICAgIHByaXZhdGUgbUhpZGVDYWxsYmFjaztcclxuICAgIHN0YXRpYyBwdXNoKHBvcHVwTmFtZTogUG9wdXBzLCB1c2VCZyA9IHRydWUpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLkluc3RhbmNlO1xyXG4gICAgICAgIGNvbnN0IHBvcHVwID0gaW5zdGFuY2UuUG9wdXBDb250YWluZXIuZ2V0Q2hpbGRCeU5hbWUoUG9wdXBzW3BvcHVwTmFtZV0pO1xyXG4gICAgICAgIGlmIChwb3B1cClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLnVzZVBvcHVwKHBvcHVwKTtcclxuICAgICAgICAgICAgaW5zdGFuY2UuYW5pbWF0ZSh0cnVlLCBwb3B1cCk7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLlBvcHVwQmFja2dyb3VuZC5hY3RpdmUgPSB1c2VCZztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHBvcCgpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLkluc3RhbmNlO1xyXG4gICAgICAgIGlmIChpbnN0YW5jZS5TaG93blBvcHVwcy5jaGlsZHJlbi5sZW5ndGggPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgcG9wdXAgPSBpbnN0YW5jZS5TaG93blBvcHVwcy5jaGlsZHJlbltpbnN0YW5jZS5TaG93blBvcHVwcy5jaGlsZHJlbi5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgaW5zdGFuY2UuUG9wdXBCYWNrZ3JvdW5kLmFjdGl2ZSA9IGluc3RhbmNlLlNob3duUG9wdXBzLmNoaWxkcmVuLmxlbmd0aCAtIDEgPiAwO1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5hbmltYXRlKGZhbHNlLCBwb3B1cCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoaWRlKHBvcHVwTmFtZTogUG9wdXBzKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5JbnN0YW5jZTtcclxuICAgICAgICBjb25zdCBwb3B1cCA9IGluc3RhbmNlLlNob3duUG9wdXBzLmdldENoaWxkQnlOYW1lKFBvcHVwc1twb3B1cE5hbWVdKTtcclxuICAgICAgICBpZiAocG9wdXApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5hbmltYXRlKGZhbHNlLCBwb3B1cCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRQb3B1cChwb3B1cE5hbWU6IFBvcHVwcylcclxuICAgIHtcclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuSW5zdGFuY2U7XHJcbiAgICAgICAgbGV0IHBvcHVwID0gaW5zdGFuY2UuUG9wdXBDb250YWluZXIuZ2V0Q2hpbGRCeU5hbWUoUG9wdXBzW3BvcHVwTmFtZV0pO1xyXG4gICAgICAgIGlmIChwb3B1cClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBwb3B1cDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLlNob3duUG9wdXBzLmdldENoaWxkQnlOYW1lKFBvcHVwc1twb3B1cE5hbWVdKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgYW5pbWF0ZShpc1Nob3c6IGJvb2xlYW4sIHBvcHVwOiBjYy5Ob2RlKVxyXG4gICAge1xyXG4gICAgICAgIGlmICghaXNTaG93KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJhbmRvbUVhc2luZyA9IFsnYm91bmNlT3V0JywgJ3F1YWRPdXQnLCAnYmFja091dCddXHJcbiAgICAgICAgICAgIGxldCBlYXNpbmcgPSByYW5kb21FYXNpbmdbSGVscGVyLlJhbmRJbnQoMCwgcmFuZG9tRWFzaW5nLmxlbmd0aCAtIDEpXVxyXG4gICAgICAgICAgICBjYy50d2Vlbihwb3B1cClcclxuICAgICAgICAgICAgICAgIC50bygwLjMsIHsgc2NhbGU6IDAsIH0sIHsgZWFzaW5nOiAncXVhZEluJyB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJldHVyblBvcHVwKHBvcHVwKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLlBvcHVwQmFja2dyb3VuZC5hY3RpdmUgPSB0aGlzLlNob3duUG9wdXBzLmNoaWxkcmVuLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICB9IGVsc2UgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmFuZG9tRWFzaW5nID0gWydib3VuY2VPdXQnLCAncXVhZE91dCcsICdiYWNrT3V0J11cclxuICAgICAgICAgICAgbGV0IGVhc2luZyA9IHJhbmRvbUVhc2luZ1tIZWxwZXIuUmFuZEludCgwLCByYW5kb21FYXNpbmcubGVuZ3RoIC0gMSldXHJcbiAgICAgICAgICAgIHBvcHVwLnNldFNjYWxlKDApXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHBvcHVwKVxyXG4gICAgICAgICAgICAgICAgLmJ5KDAuMywgeyBzY2FsZTogMSwgfSwgeyBlYXNpbmc6IGVhc2luZyB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1c2VQb3B1cChwb3B1cDogY2MuTm9kZSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLlBvcHVwQ29udGFpbmVyLnJlbW92ZUNoaWxkKHBvcHVwLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5TaG93blBvcHVwcy5hZGRDaGlsZChwb3B1cCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXR1cm5Qb3B1cChwb3B1cDogY2MuTm9kZSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLlNob3duUG9wdXBzLnJlbW92ZUNoaWxkKHBvcHVwLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5Qb3B1cENvbnRhaW5lci5hZGRDaGlsZChwb3B1cCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKClcclxuICAgIHtcclxuICAgICAgICBzdXBlci5vbkxvYWQoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuUG9wdXBQcmVmYWJzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5Qb3B1cENvbnRhaW5lci5hZGRDaGlsZChjYy5pbnN0YW50aWF0ZSh0aGlzLlBvcHVwUHJlZmFic1tpXSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhcnQoKVxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/common/Global.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd20a0HD4J5Lx6vX5OXcGy4+', 'Global');
// Scripts/common/Global.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Global = /** @class */ (function (_super) {
    __extends(Global, _super);
    function Global() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.backAppTime = null;
        return _this;
    }
    Global_1 = Global;
    Global.prototype.onLoad = function () {
        Global_1.Instance = this;
    };
    var Global_1;
    Global.Instance = null;
    Global = Global_1 = __decorate([
        ccclass
    ], Global);
    return Global;
}(cc.Component));
exports.default = Global;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcY29tbW9uXFxHbG9iYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUFRQztRQU5VLGlCQUFXLEdBQVcsSUFBSSxDQUFDOztJQU10QyxDQUFDO2VBUm9CLE1BQU07SUFLdkIsdUJBQU0sR0FBTjtRQUNJLFFBQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7O0lBSk0sZUFBUSxHQUFXLElBQUksQ0FBQztJQUhkLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FRMUI7SUFBRCxhQUFDO0NBUkQsQUFRQyxDQVJtQyxFQUFFLENBQUMsU0FBUyxHQVEvQztrQkFSb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgICBpbnRlcmZhY2UgV2luZG93IHtcclxuICAgICAgICBsYW5ndWFnZTogc3RyaW5nO1xyXG4gICAgICAgIGlzUmVsZWFzZTogYm9vbGVhbjtcclxuICAgICAgICBjb250cm9sbGVyUHJlZml4O1xyXG4gICAgICAgIGNvbnRyb2xsZXJVUkw7XHJcbiAgICAgICAgY29udHJvbGxlck9yaWdpbjtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdsb2JhbCBleHRlbmRzIGNjLkNvbXBvbmVudFxyXG57XHJcbiAgICBwdWJsaWMgYmFja0FwcFRpbWU6IG51bWJlciA9IG51bGw7XHJcbiAgICBzdGF0aWMgSW5zdGFuY2U6IEdsb2JhbCA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIEdsb2JhbC5JbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/common/Localization.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bd45doTXaVJGazSbf1+Ekni', 'Localization');
// Scripts/common/Localization.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextTransforms = exports.LOCALIZATION_ENUM = exports.LOCALIZATION_KEYS = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var STRINGS = require("../../strings");
var Events_1 = require("./Events");
var enumObj = {};
exports.LOCALIZATION_KEYS = Object.keys(STRINGS);
for (var i = 0; i < exports.LOCALIZATION_KEYS.length; i++) {
    enumObj[exports.LOCALIZATION_KEYS[i]] = i;
}
exports.LOCALIZATION_ENUM = cc.Enum(enumObj);
exports.TextTransforms = cc.Enum({
    None: 0,
    Upper: 1,
    Lower: 2,
});
var Localization = /** @class */ (function (_super) {
    __extends(Localization, _super);
    function Localization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Localization.GetLocalizedString = function (key) {
        if (STRINGS[key]) {
            // window.language = "en"
            // window.language = "my"
            // window.language = "mu"
            return STRINGS[key][window.language.toUpperCase()] || '';
        }
        return '';
    };
    Localization.ChangeLanguage = function (language) {
        window.language = language;
        Events_1.default.emit(Events_1.default.EventLanguageChanged);
    };
    Localization = __decorate([
        ccclass
    ], Localization);
    return Localization;
}(cc.Component));
exports.default = Localization;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcY29tbW9uXFxMb2NhbGl6YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLHVDQUF5QztBQUN6QyxtQ0FBOEI7QUFFOUIsSUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ04sUUFBQSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3RELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyx5QkFBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQ2pEO0lBQ0ksT0FBTyxDQUFDLHlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ3JDO0FBRVksUUFBQSxpQkFBaUIsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3JDLFFBQUEsY0FBYyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDbEMsSUFBSSxFQUFFLENBQUM7SUFDUCxLQUFLLEVBQUUsQ0FBQztJQUNSLEtBQUssRUFBRSxDQUFDO0NBQ1gsQ0FBQyxDQUFDO0FBR0g7SUFBMEMsZ0NBQVk7SUFBdEQ7O0lBb0JBLENBQUM7SUFsQlUsK0JBQWtCLEdBQXpCLFVBQTBCLEdBQVc7UUFFakMsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQ2hCO1lBQ0kseUJBQXlCO1lBQ3pCLHlCQUF5QjtZQUN6Qix5QkFBeUI7WUFFekIsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUM1RDtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVNLDJCQUFjLEdBQXJCLFVBQXNCLFFBQWdCO1FBRWxDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQzNCLGdCQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBbkJnQixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBb0JoQztJQUFELG1CQUFDO0NBcEJELEFBb0JDLENBcEJ5QyxFQUFFLENBQUMsU0FBUyxHQW9CckQ7a0JBcEJvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuaW1wb3J0ICogYXMgU1RSSU5HUyBmcm9tICcuLi8uLi9zdHJpbmdzJztcclxuaW1wb3J0IEV2ZW50cyBmcm9tICcuL0V2ZW50cyc7XHJcblxyXG5jb25zdCBlbnVtT2JqID0ge307XHJcbmV4cG9ydCBjb25zdCBMT0NBTElaQVRJT05fS0VZUyA9IE9iamVjdC5rZXlzKFNUUklOR1MpO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IExPQ0FMSVpBVElPTl9LRVlTLmxlbmd0aDsgaSsrKVxyXG57XHJcbiAgICBlbnVtT2JqW0xPQ0FMSVpBVElPTl9LRVlTW2ldXSA9IGk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMT0NBTElaQVRJT05fRU5VTSA9IGNjLkVudW0oZW51bU9iaik7XHJcbmV4cG9ydCBjb25zdCBUZXh0VHJhbnNmb3JtcyA9IGNjLkVudW0oe1xyXG4gICAgTm9uZTogMCxcclxuICAgIFVwcGVyOiAxLFxyXG4gICAgTG93ZXI6IDIsXHJcbn0pO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYWxpemF0aW9uIGV4dGVuZHMgY2MuQ29tcG9uZW50XHJcbntcclxuICAgIHN0YXRpYyBHZXRMb2NhbGl6ZWRTdHJpbmcoa2V5OiBzdHJpbmcpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICBpZiAoU1RSSU5HU1trZXldKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gd2luZG93Lmxhbmd1YWdlID0gXCJlblwiXHJcbiAgICAgICAgICAgIC8vIHdpbmRvdy5sYW5ndWFnZSA9IFwibXlcIlxyXG4gICAgICAgICAgICAvLyB3aW5kb3cubGFuZ3VhZ2UgPSBcIm11XCJcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBTVFJJTkdTW2tleV1bd2luZG93Lmxhbmd1YWdlLnRvVXBwZXJDYXNlKCldIHx8ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIENoYW5nZUxhbmd1YWdlKGxhbmd1YWdlOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgd2luZG93Lmxhbmd1YWdlID0gbGFuZ3VhZ2U7XHJcbiAgICAgICAgRXZlbnRzLmVtaXQoRXZlbnRzLkV2ZW50TGFuZ3VhZ2VDaGFuZ2VkKTtcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/common/SoundMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2fbc04KsHtO9rOLJqTjEbZu', 'SoundMgr');
// Scripts/common/SoundMgr.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var SingletonNode_1 = require("../utils/SingletonNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SoundMgr = /** @class */ (function (_super) {
    __extends(SoundMgr, _super);
    function SoundMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.BGM = null;
        _this.SFX_BUTTON = null;
        _this.SFX_SELECT = null;
        _this.SFX_ENDSCREEN = null;
        _this.SFX_EXPLODE = null;
        _this.SFX_CRYSTAL = null;
        return _this;
    }
    Object.defineProperty(SoundMgr, "IsMute", {
        get: function () { return cc.audioEngine.getMusicVolume() == 0; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SoundMgr, "IsMusicPlaying", {
        get: function () { return cc.audioEngine.isMusicPlaying(); },
        enumerable: false,
        configurable: true
    });
    SoundMgr.playMusic = function (clip, loop) {
        if (loop === void 0) { loop = true; }
        cc.audioEngine.playMusic(clip, loop);
    };
    SoundMgr.playSfx = function (clip, loop) {
        if (loop === void 0) { loop = false; }
        cc.audioEngine.playEffect(clip, loop);
    };
    SoundMgr.pauseMusic = function () {
        cc.audioEngine.pauseMusic();
    };
    SoundMgr.pauseAll = function () {
        cc.audioEngine.pauseAll();
    };
    SoundMgr.stopMusic = function () {
        cc.audioEngine.stopMusic();
    };
    SoundMgr.stopAll = function () {
        cc.audioEngine.stopAll();
    };
    SoundMgr.setMute = function (value) {
        if (value === void 0) { value = true; }
        var volume = Number(!value);
        this.setMusicVolume(volume);
        this.setSfxVolume(volume);
    };
    SoundMgr.setMusicVolume = function (value) {
        cc.audioEngine.setMusicVolume(value);
    };
    SoundMgr.setSfxVolume = function (value) {
        cc.audioEngine.setEffectsVolume(value);
    };
    SoundMgr.toggleSound = function () {
        this.setMute(!this.IsMute);
    };
    __decorate([
        property({ type: cc.AudioClip })
    ], SoundMgr.prototype, "BGM", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], SoundMgr.prototype, "SFX_BUTTON", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], SoundMgr.prototype, "SFX_SELECT", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], SoundMgr.prototype, "SFX_ENDSCREEN", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], SoundMgr.prototype, "SFX_EXPLODE", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], SoundMgr.prototype, "SFX_CRYSTAL", void 0);
    SoundMgr = __decorate([
        ccclass
    ], SoundMgr);
    return SoundMgr;
}(SingletonNode_1.default()));
exports.default = SoundMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcY29tbW9uXFxTb3VuZE1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBbUQ7QUFFN0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQXlCO0lBQS9EO1FBQUEscUVBcURDO1FBbkRtQyxTQUFHLEdBQWlCLElBQUksQ0FBQztRQUN6QixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFDaEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBQ2hDLG1CQUFhLEdBQWlCLElBQUksQ0FBQztRQUNuQyxpQkFBVyxHQUFpQixJQUFJLENBQUM7UUFDakMsaUJBQVcsR0FBaUIsSUFBSSxDQUFDOztJQThDckUsQ0FBQztJQTVDQyxzQkFBVyxrQkFBTTthQUFqQixjQUFxQixPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDbkUsc0JBQVcsMEJBQWM7YUFBekIsY0FBNkIsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFFL0Qsa0JBQVMsR0FBaEIsVUFBaUIsSUFBa0IsRUFBRSxJQUFvQjtRQUFwQixxQkFBQSxFQUFBLFdBQW9CO1FBQ3ZELEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sZ0JBQU8sR0FBZCxVQUFlLElBQWtCLEVBQUUsSUFBcUI7UUFBckIscUJBQUEsRUFBQSxZQUFxQjtRQUN0RCxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVNLG1CQUFVLEdBQWpCO1FBQ0UsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU0saUJBQVEsR0FBZjtRQUNFLEVBQUUsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVNLGtCQUFTLEdBQWhCO1FBQ0UsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRU0sZ0JBQU8sR0FBZDtRQUNFLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVNLGdCQUFPLEdBQWQsVUFBZSxLQUFxQjtRQUFyQixzQkFBQSxFQUFBLFlBQXFCO1FBQ2xDLElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRU0sdUJBQWMsR0FBckIsVUFBc0IsS0FBSztRQUN6QixFQUFFLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0scUJBQVksR0FBbkIsVUFBb0IsS0FBSztRQUN2QixFQUFFLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFSyxvQkFBVyxHQUFsQjtRQUNDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQWxEa0M7UUFBakMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzt5Q0FBMEI7SUFDekI7UUFBakMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnREFBaUM7SUFDaEM7UUFBakMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnREFBaUM7SUFDaEM7UUFBakMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzttREFBb0M7SUFDbkM7UUFBakMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztpREFBa0M7SUFDakM7UUFBakMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztpREFBa0M7SUFQaEQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXFENUI7SUFBRCxlQUFDO0NBckRELEFBcURDLENBckRxQyx1QkFBYSxFQUFZLEdBcUQ5RDtrQkFyRG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2luZ2xldG9uTm9kZSBmcm9tIFwiLi4vdXRpbHMvU2luZ2xldG9uTm9kZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kTWdyIGV4dGVuZHMgU2luZ2xldG9uTm9kZTxTb3VuZE1ncj4oKVxyXG57XHJcbiAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pIEJHTTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSkgU0ZYX0JVVFRPTjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSkgU0ZYX1NFTEVDVDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSkgU0ZYX0VORFNDUkVFTjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSkgU0ZYX0VYUExPREU6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pIFNGWF9DUllTVEFMOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICBzdGF0aWMgZ2V0IElzTXV0ZSgpeyByZXR1cm4gY2MuYXVkaW9FbmdpbmUuZ2V0TXVzaWNWb2x1bWUoKSA9PSAwOyB9XHJcbiAgc3RhdGljIGdldCBJc011c2ljUGxheWluZygpeyByZXR1cm4gY2MuYXVkaW9FbmdpbmUuaXNNdXNpY1BsYXlpbmcoKTsgfVxyXG5cclxuICBzdGF0aWMgcGxheU11c2ljKGNsaXA6IGNjLkF1ZGlvQ2xpcCwgbG9vcDogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyhjbGlwLCBsb29wKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBwbGF5U2Z4KGNsaXA6IGNjLkF1ZGlvQ2xpcCwgbG9vcDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGNsaXAsIGxvb3ApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHBhdXNlTXVzaWMoKSB7XHJcbiAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZU11c2ljKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcGF1c2VBbGwoKSB7XHJcbiAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZUFsbCgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHN0b3BNdXNpYygpIHtcclxuICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHN0b3BBbGwoKSB7XHJcbiAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2V0TXV0ZSh2YWx1ZTogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgIGNvbnN0IHZvbHVtZSA9IE51bWJlcighdmFsdWUpO1xyXG4gICAgdGhpcy5zZXRNdXNpY1ZvbHVtZSh2b2x1bWUpO1xyXG4gICAgdGhpcy5zZXRTZnhWb2x1bWUodm9sdW1lKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzZXRNdXNpY1ZvbHVtZSh2YWx1ZSkge1xyXG4gICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNldFNmeFZvbHVtZSh2YWx1ZSkge1xyXG4gICAgY2MuYXVkaW9FbmdpbmUuc2V0RWZmZWN0c1ZvbHVtZSh2YWx1ZSk7XHJcbiAgfVxyXG5cdFxyXG5cdHN0YXRpYyB0b2dnbGVTb3VuZCgpe1xyXG5cdFx0dGhpcy5zZXRNdXRlKCF0aGlzLklzTXV0ZSk7XHJcblx0fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/common/Spinner.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9bb946QoZVOMKPUS/9hPO3J', 'Spinner');
// Scripts/common/Spinner.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Spinner = /** @class */ (function (_super) {
    __extends(Spinner, _super);
    function Spinner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Speed = 10 * 60;
        return _this;
    }
    Spinner.prototype.update = function (dt) {
        this.node.angle = (this.node.angle - this.Speed * dt) % 360;
    };
    __decorate([
        property(cc.Integer)
    ], Spinner.prototype, "Speed", void 0);
    Spinner = __decorate([
        ccclass
    ], Spinner);
    return Spinner;
}(cc.Component));
exports.default = Spinner;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcY29tbW9uXFxTcGlubmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBT0M7UUFMaUMsV0FBSyxHQUFXLEVBQUUsR0FBRyxFQUFFLENBQUM7O0lBSzFELENBQUM7SUFIRyx3QkFBTSxHQUFOLFVBQU8sRUFBVTtRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDaEUsQ0FBQztJQUpxQjtRQUFyQixRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzswQ0FBaUM7SUFGckMsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQU8zQjtJQUFELGNBQUM7Q0FQRCxBQU9DLENBUG9DLEVBQUUsQ0FBQyxTQUFTLEdBT2hEO2tCQVBvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwaW5uZXIgZXh0ZW5kcyBjYy5Db21wb25lbnRcclxue1xyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpIHByaXZhdGUgU3BlZWQ6IG51bWJlciA9IDEwICogNjA7XHJcblxyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpe1xyXG4gICAgICAgIHRoaXMubm9kZS5hbmdsZSA9ICh0aGlzLm5vZGUuYW5nbGUgLSB0aGlzLlNwZWVkICogZHQpICUgMzYwO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/game/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4e4edq/h0FGmYOarVkTPs/6', 'GameManager');
// Scripts/game/GameManager.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var AudioController_1 = require("../AudioController");
var SingletonNode_1 = require("../utils/SingletonNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        _this.STATE = {
            TUTORIAL: 0,
            INGAME: 1,
            GAMEOVER: 2
        };
        _this.state = 0;
        _this.isPause = false;
        return _this;
        // update (dt) {}
    }
    GameManager.prototype.start = function () {
    };
    GameManager.prototype.startGame = function () {
    };
    GameManager.prototype.endGame = function () {
    };
    GameManager.prototype.setMute = function () {
        AudioController_1.default.Instance.setMute();
    };
    GameManager.prototype.onGamePause = function () {
        this.isPause = true;
    };
    GameManager.prototype.onGameResume = function () {
        this.isPause = false;
    };
    GameManager.prototype.IsPause = function () {
        return this.isPause;
    };
    GameManager = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(SingletonNode_1.default()));
exports.default = GameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZVxcR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQWlEO0FBQ2pELHdEQUFtRDtBQUU3QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF5QywrQkFBNEI7SUFBckU7UUFFSSx3QkFBd0I7UUFGNUIscUVBMENDO1FBdENHLGVBQWU7UUFDUCxXQUFLLEdBQ2I7WUFDSSxRQUFRLEVBQUUsQ0FBQztZQUNYLE1BQU0sRUFBRSxDQUFDO1lBQ1QsUUFBUSxFQUFFLENBQUM7U0FDZCxDQUFBO1FBQ08sV0FBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGFBQU8sR0FBYSxLQUFLLENBQUM7O1FBNkJsQyxpQkFBaUI7SUFDckIsQ0FBQztJQTVCRywyQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUNELCtCQUFTLEdBQVQ7SUFHQSxDQUFDO0lBQ0QsNkJBQU8sR0FBUDtJQUdBLENBQUM7SUFDRCw2QkFBTyxHQUFQO1FBRUkseUJBQWUsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDdEMsQ0FBQztJQUNELGlDQUFXLEdBQVg7UUFFSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBQ0Qsa0NBQVksR0FBWjtRQUVJLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFDRCw2QkFBTyxHQUFQO1FBRUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFBO0lBQ3ZCLENBQUM7SUF4Q2dCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0EwQy9CO0lBQUQsa0JBQUM7Q0ExQ0QsQUEwQ0MsQ0ExQ3dDLHVCQUFhLEVBQWUsR0EwQ3BFO2tCQTFDb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdWRpb0NvbnRyb2xsZXIgZnJvbSBcIi4uL0F1ZGlvQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgU2luZ2xldG9uTm9kZSBmcm9tIFwiLi4vdXRpbHMvU2luZ2xldG9uTm9kZVwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFuYWdlciBleHRlbmRzIFNpbmdsZXRvbk5vZGU8R2FtZU1hbmFnZXI+KCkge1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG4gICAgcHJpdmF0ZSBTVEFURSA9XHJcbiAgICB7XHJcbiAgICAgICAgVFVUT1JJQUw6IDAsXHJcbiAgICAgICAgSU5HQU1FOiAxLFxyXG4gICAgICAgIEdBTUVPVkVSOiAyXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHN0YXRlID0gMDtcclxuICAgIHByaXZhdGUgaXNQYXVzZSA6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgc3RhcnRHYW1lKClcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGVuZEdhbWUoKVxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgc2V0TXV0ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgQXVkaW9Db250cm9sbGVyLkluc3RhbmNlLnNldE11dGUoKVxyXG4gICAgfVxyXG4gICAgb25HYW1lUGF1c2UoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaXNQYXVzZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBvbkdhbWVSZXN1bWUoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaXNQYXVzZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgSXNQYXVzZSgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNQYXVzZVxyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/game/FrameMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2af42k1WypJMIZ/nsc3uFll', 'FrameMgr');
// Scripts/game/FrameMgr.ts

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
var SingletonNode_1 = require("../utils/SingletonNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FrameMgr = /** @class */ (function (_super) {
    __extends(FrameMgr, _super);
    function FrameMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.frameHouse = [];
        _this.frameBuilding = [];
        return _this;
        // update (dt) {}
    }
    __decorate([
        property(cc.SpriteFrame)
    ], FrameMgr.prototype, "frameHouse", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FrameMgr.prototype, "frameBuilding", void 0);
    FrameMgr = __decorate([
        ccclass
    ], FrameMgr);
    return FrameMgr;
}(SingletonNode_1.default()));
exports.default = FrameMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZVxcRnJhbWVNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsd0RBQW1EO0FBRTdDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUF5QjtJQUEvRDtRQUFBLHFFQU1DO1FBSjZCLGdCQUFVLEdBQTBCLEVBQUUsQ0FBQTtRQUN0QyxtQkFBYSxHQUEwQixFQUFFLENBQUE7O1FBRW5FLGlCQUFpQjtJQUNyQixDQUFDO0lBSjZCO1FBQXpCLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO2dEQUF1QztJQUN0QztRQUF6QixRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzttREFBMEM7SUFIbEQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQU01QjtJQUFELGVBQUM7Q0FORCxBQU1DLENBTnFDLHVCQUFhLEVBQVksR0FNOUQ7a0JBTm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgU2luZ2xldG9uTm9kZSBmcm9tIFwiLi4vdXRpbHMvU2luZ2xldG9uTm9kZVwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFtZU1nciBleHRlbmRzIFNpbmdsZXRvbk5vZGU8RnJhbWVNZ3I+KCkge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSkgZnJhbWVIb3VzZTogQXJyYXk8Y2MuU3ByaXRlRnJhbWU+ID0gW11cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSkgZnJhbWVCdWlsZGluZzogQXJyYXk8Y2MuU3ByaXRlRnJhbWU+ID0gW11cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/common/LoadingIcon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'be9ed13DexHaZjgDih502/F', 'LoadingIcon');
// Scripts/common/LoadingIcon.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Spinner_1 = require("./Spinner");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadingIcon = /** @class */ (function (_super) {
    __extends(LoadingIcon, _super);
    function LoadingIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoadingIcon.prototype.show = function () {
        this.node.active = true;
    };
    LoadingIcon.prototype.hide = function () {
        this.node.active = false;
    };
    LoadingIcon = __decorate([
        ccclass
    ], LoadingIcon);
    return LoadingIcon;
}(Spinner_1.default));
exports.default = LoadingIcon;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcY29tbW9uXFxMb2FkaW5nSWNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBZ0M7QUFFMUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQU87SUFBaEQ7O0lBU0EsQ0FBQztJQVBHLDBCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUVELDBCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQVJnQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBUy9CO0lBQUQsa0JBQUM7Q0FURCxBQVNDLENBVHdDLGlCQUFPLEdBUy9DO2tCQVRvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4vU3Bpbm5lclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmdJY29uIGV4dGVuZHMgU3Bpbm5lclxyXG57XHJcbiAgICBzaG93KCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpe1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/common/Events.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ea18dqOuq1Cx7O+U51FB9JD', 'Events');
// Scripts/common/Events.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var SingletonNode_1 = require("../utils/SingletonNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Events.registerEvent = function (name, callback) {
        this.Instance.node.on(name, callback);
    };
    Events.emit = function (name) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (_a = this.Instance.node).emit.apply(_a, __spreadArrays([name], args));
    };
    Events.EventLanguageChanged = 'EventLanguageChanged';
    Events = __decorate([
        ccclass
    ], Events);
    return Events;
}(SingletonNode_1.default()));
exports.default = Events;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcY29tbW9uXFxFdmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUFtRDtBQUU3QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQywwQkFBdUI7SUFBM0Q7O0lBV0EsQ0FBQztJQVBVLG9CQUFhLEdBQXBCLFVBQXFCLElBQVksRUFBRSxRQUFrQjtRQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTSxXQUFJLEdBQVgsVUFBWSxJQUFZOztRQUFFLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAsNkJBQU87O1FBQzdCLENBQUEsS0FBQSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQSxDQUFDLElBQUksMkJBQUMsSUFBSSxHQUFLLElBQUksR0FBRTtJQUMzQyxDQUFDO0lBUk0sMkJBQW9CLEdBQVcsc0JBQXNCLENBQUM7SUFGNUMsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQVcxQjtJQUFELGFBQUM7Q0FYRCxBQVdDLENBWG1DLHVCQUFhLEVBQVUsR0FXMUQ7a0JBWG9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2luZ2xldG9uTm9kZSBmcm9tIFwiLi4vdXRpbHMvU2luZ2xldG9uTm9kZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50cyBleHRlbmRzIFNpbmdsZXRvbk5vZGU8RXZlbnRzPigpXHJcbntcclxuICAgIHN0YXRpYyBFdmVudExhbmd1YWdlQ2hhbmdlZDogc3RyaW5nID0gJ0V2ZW50TGFuZ3VhZ2VDaGFuZ2VkJztcclxuXHJcbiAgICBzdGF0aWMgcmVnaXN0ZXJFdmVudChuYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbil7XHJcbiAgICAgICAgdGhpcy5JbnN0YW5jZS5ub2RlLm9uKG5hbWUsIGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZW1pdChuYW1lOiBzdHJpbmcsIC4uLmFyZ3Mpe1xyXG4gICAgICAgIHRoaXMuSW5zdGFuY2Uubm9kZS5lbWl0KG5hbWUsIC4uLmFyZ3MpO1xyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gameplay/GamePlayManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1589dfnk4VMIp1dekOxl3G2', 'GamePlayManager');
// Scripts/gameplay/GamePlayManager.ts

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
// import Singleton from "../utils/Singleton";
var SingletonNode_1 = require("../utils/SingletonNode");
var FadeWall_1 = require("./FadeWall");
var LevelManager_js_1 = require("./LevelManager.js");
var TimeNeedTouch_1 = require("./TimeNeedTouch");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlayManager = /** @class */ (function (_super) {
    __extends(GamePlayManager, _super);
    function GamePlayManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timeNeedToTouch = null;
        _this.fadeWall = null;
        // public static Instance: GamePlayManager = null;
        _this.currentLevel = null;
        _this.isLost = false;
        return _this;
    }
    GamePlayManager.prototype.onEnable = function () {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true;
        // cc.director.getPhysicsManager().debugDrawFlags =
        //   cc.PhysicsManager.DrawBits.e_aabbBit |
        //   cc.PhysicsManager.DrawBits.e_pairBit |
        //   cc.PhysicsManager.DrawBits.e_centerOfMassBit |
        //   cc.PhysicsManager.DrawBits.e_jointBit |
        //   cc.PhysicsManager.DrawBits.e_shapeBit;
    };
    GamePlayManager.prototype.start = function () {
        if (this.currentLevel == null) {
            this.currentLevel = 0;
            LevelManager_js_1.default.Instance.SetUpLevel(this.currentLevel); // set level to 0
            // this.ballHolder.active = true;
        }
    };
    GamePlayManager.prototype.Win = function () {
        // console.log("win");
        if (this.isLost == true)
            return;
        LevelManager_js_1.default.Instance.DisableHolder();
        LevelManager_js_1.default.Instance.NextLevel();
    };
    GamePlayManager.prototype.Lose = function () {
        // console.log("lose");
        LevelManager_js_1.default.Instance.DisableHolder();
        LevelManager_js_1.default.Instance.SetUpLevel(this.currentLevel);
        this.isLost = false;
    };
    __decorate([
        property(TimeNeedTouch_1.default)
    ], GamePlayManager.prototype, "timeNeedToTouch", void 0);
    __decorate([
        property(FadeWall_1.default)
    ], GamePlayManager.prototype, "fadeWall", void 0);
    GamePlayManager = __decorate([
        ccclass
    ], GamePlayManager);
    return GamePlayManager;
}(SingletonNode_1.default()));
exports.default = GamePlayManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZXBsYXlcXEdhbWVQbGF5TWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiw4Q0FBOEM7QUFFOUMsd0RBQW1EO0FBQ25ELHVDQUFrQztBQUNsQyxxREFBNkM7QUFDN0MsaURBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFnQztJQUE3RTtRQUFBLHFFQXlDQztRQXhDbUMscUJBQWUsR0FBb0IsSUFBSSxDQUFDO1FBQy9DLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFFckQsa0RBQWtEO1FBRTNDLGtCQUFZLEdBQVcsSUFBSSxDQUFDO1FBQzVCLFlBQU0sR0FBWSxLQUFLLENBQUM7O0lBa0NqQyxDQUFDO0lBaENXLGtDQUFRLEdBQWxCO1FBQ0UsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDL0MsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDakQsbURBQW1EO1FBQ25ELDJDQUEyQztRQUMzQywyQ0FBMkM7UUFDM0MsbURBQW1EO1FBQ25ELDRDQUE0QztRQUM1QywyQ0FBMkM7SUFDN0MsQ0FBQztJQUNTLCtCQUFLLEdBQWY7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxFQUFFO1lBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1lBQ3RCLHlCQUFZLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxpQkFBaUI7WUFDdEUsaUNBQWlDO1NBQ2xDO0lBQ0gsQ0FBQztJQUVELDZCQUFHLEdBQUg7UUFDRSxzQkFBc0I7UUFFdEIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUk7WUFBRSxPQUFPO1FBQ2hDLHlCQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3RDLHlCQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFDRCw4QkFBSSxHQUFKO1FBQ0UsdUJBQXVCO1FBRXZCLHlCQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3RDLHlCQUFZLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQXZDMEI7UUFBMUIsUUFBUSxDQUFDLHVCQUFlLENBQUM7NERBQWdEO0lBQ3REO1FBQW5CLFFBQVEsQ0FBQyxrQkFBUSxDQUFDO3FEQUFrQztJQUZsQyxlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBeUNuQztJQUFELHNCQUFDO0NBekNELEFBeUNDLENBekM0Qyx1QkFBYSxFQUFtQixHQXlDNUU7a0JBekNvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuLy8gaW1wb3J0IFNpbmdsZXRvbiBmcm9tIFwiLi4vdXRpbHMvU2luZ2xldG9uXCI7XHJcblxyXG5pbXBvcnQgU2luZ2xldG9uTm9kZSBmcm9tIFwiLi4vdXRpbHMvU2luZ2xldG9uTm9kZVwiO1xyXG5pbXBvcnQgRmFkZVdhbGwgZnJvbSBcIi4vRmFkZVdhbGxcIjtcclxuaW1wb3J0IExldmVsTWFuYWdlciBmcm9tIFwiLi9MZXZlbE1hbmFnZXIuanNcIjtcclxuaW1wb3J0IFRpbWVOZWVkVG9Ub3VjaCBmcm9tIFwiLi9UaW1lTmVlZFRvdWNoXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVBsYXlNYW5hZ2VyIGV4dGVuZHMgU2luZ2xldG9uTm9kZTxHYW1lUGxheU1hbmFnZXI+KCkge1xyXG4gIEBwcm9wZXJ0eShUaW1lTmVlZFRvVG91Y2gpIHB1YmxpYyB0aW1lTmVlZFRvVG91Y2g6IFRpbWVOZWVkVG9Ub3VjaCA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEZhZGVXYWxsKSBwdWJsaWMgZmFkZVdhbGw6IEZhZGVXYWxsID0gbnVsbDtcclxuXHJcbiAgLy8gcHVibGljIHN0YXRpYyBJbnN0YW5jZTogR2FtZVBsYXlNYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgcHVibGljIGN1cnJlbnRMZXZlbDogbnVtYmVyID0gbnVsbDtcclxuICBwdWJsaWMgaXNMb3N0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAvLyBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmRlYnVnRHJhd0ZsYWdzID1cclxuICAgIC8vICAgY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9hYWJiQml0IHxcclxuICAgIC8vICAgY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9wYWlyQml0IHxcclxuICAgIC8vICAgY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9jZW50ZXJPZk1hc3NCaXQgfFxyXG4gICAgLy8gICBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX2pvaW50Qml0IHxcclxuICAgIC8vICAgY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9zaGFwZUJpdDtcclxuICB9XHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudExldmVsID09IG51bGwpIHtcclxuICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgPSAwO1xyXG4gICAgICBMZXZlbE1hbmFnZXIuSW5zdGFuY2UuU2V0VXBMZXZlbCh0aGlzLmN1cnJlbnRMZXZlbCk7IC8vIHNldCBsZXZlbCB0byAwXHJcbiAgICAgIC8vIHRoaXMuYmFsbEhvbGRlci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgV2luKCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJ3aW5cIik7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNMb3N0ID09IHRydWUpIHJldHVybjtcclxuICAgIExldmVsTWFuYWdlci5JbnN0YW5jZS5EaXNhYmxlSG9sZGVyKCk7XHJcbiAgICBMZXZlbE1hbmFnZXIuSW5zdGFuY2UuTmV4dExldmVsKCk7XHJcbiAgfVxyXG4gIExvc2UoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImxvc2VcIik7XHJcblxyXG4gICAgTGV2ZWxNYW5hZ2VyLkluc3RhbmNlLkRpc2FibGVIb2xkZXIoKTtcclxuICAgIExldmVsTWFuYWdlci5JbnN0YW5jZS5TZXRVcExldmVsKHRoaXMuY3VycmVudExldmVsKTtcclxuICAgIHRoaXMuaXNMb3N0ID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gameplay/FadeWall.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bbc84lQ+TNPhogR2CwFzPYR', 'FadeWall');
// Scripts/gameplay/FadeWall.ts

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
var FadeWall = /** @class */ (function (_super) {
    __extends(FadeWall, _super);
    function FadeWall() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.winWall = null;
        return _this;
    }
    FadeWall.prototype.FadeWall = function () {
        cc.tween(this.node)
            .to(0.3, {
            scale: 0,
        }, { easing: "fade" })
            .start();
        // update (dt) {}
    };
    FadeWall.prototype.Reset = function () {
        console.log("RESET FADE WALL");
        this.node.scale = 1;
    };
    __decorate([
        property(cc.Node)
    ], FadeWall.prototype, "winWall", void 0);
    FadeWall = __decorate([
        ccclass
    ], FadeWall);
    return FadeWall;
}(cc.Component));
exports.default = FadeWall;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZXBsYXlcXEZhZGVXYWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBbUJDO1FBbEJvQixhQUFPLEdBQVksSUFBSSxDQUFDOztJQWtCN0MsQ0FBQztJQWpCQywyQkFBUSxHQUFSO1FBQ0UsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2hCLEVBQUUsQ0FDRCxHQUFHLEVBQ0g7WUFDRSxLQUFLLEVBQUUsQ0FBQztTQUNULEVBQ0QsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQ25CO2FBQ0EsS0FBSyxFQUFFLENBQUM7UUFDWCxpQkFBaUI7SUFDbkIsQ0FBQztJQUNELHdCQUFLLEdBQUw7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFqQmtCO1FBQWxCLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUF5QjtJQUR4QixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBbUI1QjtJQUFELGVBQUM7Q0FuQkQsQUFtQkMsQ0FuQnFDLEVBQUUsQ0FBQyxTQUFTLEdBbUJqRDtrQkFuQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFkZVdhbGwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKSB3aW5XYWxsOiBjYy5Ob2RlID0gbnVsbDtcclxuICBGYWRlV2FsbCgpIHtcclxuICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgLnRvKFxyXG4gICAgICAgIDAuMyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzY2FsZTogMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgZWFzaW5nOiBcImZhZGVcIiB9XHJcbiAgICAgIClcclxuICAgICAgLnN0YXJ0KCk7XHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG4gIH1cclxuICBSZXNldCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiUkVTRVQgRkFERSBXQUxMXCIpO1xyXG5cclxuICAgIHRoaXMubm9kZS5zY2FsZSA9IDE7XHJcbiAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gameplay/LevelManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '250d1eyNKNE8YBb3TY+ZhBo', 'LevelManager');
// Scripts/gameplay/LevelManager.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var SingletonNode_1 = require("../utils/SingletonNode");
var levelDesign = require("../gameplay/Level/GameplayLevelDesgin.js");
var ObstaclesWallSpawner_1 = require("./Wall/ObstaclesWallSpawner");
var TimeNeedTouch_1 = require("./TimeNeedTouch");
var GamePlayManager_1 = require("./GamePlayManager");
var Ball_1 = require("./Ball");
var FadeWall_1 = require("./FadeWall");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LevelManager = /** @class */ (function (_super) {
    __extends(LevelManager, _super);
    function LevelManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wall = null;
        _this.fadeWallHolder = null;
        _this.timeToBounceHolder = null;
        _this.ballHolder = null;
        _this._levelDesignKey = {
            wall: "wall",
            ballStartPos: "ballStartPos",
            fadeWallHolder: "fadeWall",
            obstaclesWall: "obstaclesWall",
            timeToBounce: "timeToBounce",
        };
        return _this;
    }
    LevelManager.prototype.SetUpLevel = function (levelIndex) {
        var _this = this;
        var currentLevel = levelDesign[levelIndex];
        console.log("levelIndex", levelIndex);
        console.log("currentLevel.level", currentLevel.level);
        this.wall.children.forEach(function (eachWall) {
            var tempWall = _this.GetValueByKey(currentLevel["wall"], eachWall.name);
            eachWall.setPosition(tempWall.pos.x, tempWall.pos.y);
            eachWall.width = tempWall.size.w;
            eachWall.height = tempWall.size.h;
            eachWall.getComponent(cc.PhysicsBoxCollider).size.height =
                tempWall.size.h;
            eachWall.getComponent(cc.PhysicsBoxCollider).size.width = tempWall.size.w;
        });
        this.ballHolder.setPosition(currentLevel[this._levelDesignKey.ballStartPos].x, currentLevel[this._levelDesignKey.ballStartPos].y);
        this.fadeWallHolder.setPosition(currentLevel[this._levelDesignKey.fadeWallHolder].pos.x, currentLevel[this._levelDesignKey.fadeWallHolder].pos.y);
        if (currentLevel[this._levelDesignKey.obstaclesWall].length > 0) {
            for (var index = 0; index < currentLevel[this._levelDesignKey.obstaclesWall].length; index++) {
                var obstaclesWallPos = new cc.Vec2(currentLevel[this._levelDesignKey.obstaclesWall][index].pos.x, currentLevel[this._levelDesignKey.obstaclesWall][index].pos.y);
                var obsWall = ObstaclesWallSpawner_1.default.Instance.SpawnThing(obstaclesWallPos, ObstaclesWallSpawner_1.default.Instance._wallPrefabName);
                obsWall.active = false;
                obsWall.rotation =
                    currentLevel[this._levelDesignKey.obstaclesWall][index].rotation;
                obsWall.width =
                    currentLevel[this._levelDesignKey.obstaclesWall][index].size.w;
                obsWall.height =
                    currentLevel[this._levelDesignKey.obstaclesWall][index].size.h;
                obsWall.getComponent(cc.PhysicsBoxCollider).size.width =
                    currentLevel[this._levelDesignKey.obstaclesWall][index].size.w;
                obsWall.getComponent(cc.PhysicsBoxCollider).size.height =
                    currentLevel[this._levelDesignKey.obstaclesWall][index].size.h;
                obsWall.active = true;
            }
        }
        this.timeToBounceHolder
            .getComponent(TimeNeedTouch_1.default)
            .setBounce(currentLevel[this._levelDesignKey.timeToBounce]);
        this.fadeWallHolder.active = true;
        this.ballHolder.active = true;
        console.log("this.fadeWallHolder", this.fadeWallHolder, 
        // this.fadeWallHolder.getPosition().x,
        // this.fadeWallHolder.getPosition().y,
        this.fadeWallHolder.getChildByName("FadeAbleWall").scale, this.fadeWallHolder.getChildByName("FadeAbleWall").getPosition().x, this.fadeWallHolder.getChildByName("FadeAbleWall").getPosition().y);
    };
    LevelManager.prototype.DisableHolder = function () {
        console.log("RESET");
        ObstaclesWallSpawner_1.default.Instance.ClearHolder();
        this.ballHolder.getComponent(Ball_1.default).Reset();
        this.fadeWallHolder.getComponentInChildren(FadeWall_1.default).Reset();
        this.ballHolder.active = false;
    };
    LevelManager.prototype.NextLevel = function () {
        GamePlayManager_1.default.Instance.currentLevel =
            GamePlayManager_1.default.Instance.currentLevel + 1;
        this.SetUpLevel(GamePlayManager_1.default.Instance.currentLevel);
    };
    LevelManager.prototype.GetValueByKey = function (objectInput, keyToFind) {
        for (var key in objectInput) {
            if (Object.prototype.hasOwnProperty.call(objectInput, key)) {
                var element = objectInput[key];
                if (keyToFind.toLowerCase() == key.toLowerCase()) {
                    return element;
                }
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], LevelManager.prototype, "wall", void 0);
    __decorate([
        property(cc.Node)
    ], LevelManager.prototype, "fadeWallHolder", void 0);
    __decorate([
        property(cc.Node)
    ], LevelManager.prototype, "timeToBounceHolder", void 0);
    __decorate([
        property(cc.Node)
    ], LevelManager.prototype, "ballHolder", void 0);
    LevelManager = __decorate([
        ccclass
    ], LevelManager);
    return LevelManager;
}(SingletonNode_1.default()));
exports.default = LevelManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZXBsYXlcXExldmVsTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjtBQUNsRix3REFBbUQ7QUFDbkQsc0VBQXdFO0FBQ3hFLG9FQUErRDtBQUMvRCxpREFBOEM7QUFDOUMscURBQWdEO0FBQ2hELCtCQUEwQjtBQUMxQix1Q0FBa0M7QUFFNUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQTZCO0lBQXZFO1FBQUEscUVBcUdDO1FBcEcyQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBQ3JCLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBQy9CLHdCQUFrQixHQUFZLElBQUksQ0FBQztRQUVuQyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUM3QyxxQkFBZSxHQUFHO1lBQ3hCLElBQUksRUFBRSxNQUFNO1lBQ1osWUFBWSxFQUFFLGNBQWM7WUFDNUIsY0FBYyxFQUFFLFVBQVU7WUFDMUIsYUFBYSxFQUFFLGVBQWU7WUFDOUIsWUFBWSxFQUFFLGNBQWM7U0FDN0IsQ0FBQzs7SUF5RkosQ0FBQztJQXhGQyxpQ0FBVSxHQUFWLFVBQVcsVUFBa0I7UUFBN0IsaUJBaUVDO1FBaEVDLElBQU0sWUFBWSxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztRQUV0QyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV0RCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENB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QUM7Q0FyR0QsQUFxR0MsQ0FyR3lDLHVCQUFhLEVBQWdCLEdBcUd0RTtrQkFyR29CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbmltcG9ydCBTaW5nbGV0b25Ob2RlIGZyb20gXCIuLi91dGlscy9TaW5nbGV0b25Ob2RlXCI7XHJcbmltcG9ydCAqIGFzIGxldmVsRGVzaWduIGZyb20gXCIuLi9nYW1lcGxheS9MZXZlbC9HYW1lcGxheUxldmVsRGVzZ2luLmpzXCI7XHJcbmltcG9ydCBPYnN0YWNsZXNXYWxsU3Bhd25lciBmcm9tIFwiLi9XYWxsL09ic3RhY2xlc1dhbGxTcGF3bmVyXCI7XHJcbmltcG9ydCBUaW1lTmVlZFRvVG91Y2ggZnJvbSBcIi4vVGltZU5lZWRUb3VjaFwiO1xyXG5pbXBvcnQgR2FtZVBsYXlNYW5hZ2VyIGZyb20gXCIuL0dhbWVQbGF5TWFuYWdlclwiO1xyXG5pbXBvcnQgQmFsbCBmcm9tIFwiLi9CYWxsXCI7XHJcbmltcG9ydCBGYWRlV2FsbCBmcm9tIFwiLi9GYWRlV2FsbFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsTWFuYWdlciBleHRlbmRzIFNpbmdsZXRvbk5vZGU8TGV2ZWxNYW5hZ2VyPigpIHtcclxuICBAcHJvcGVydHkoY2MuTm9kZSkgcHVibGljIHdhbGw6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKSBwdWJsaWMgZmFkZVdhbGxIb2xkZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKSBwdWJsaWMgdGltZVRvQm91bmNlSG9sZGVyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpIHB1YmxpYyBiYWxsSG9sZGVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICBwcml2YXRlIF9sZXZlbERlc2lnbktleSA9IHtcclxuICAgIHdhbGw6IFwid2FsbFwiLFxyXG4gICAgYmFsbFN0YXJ0UG9zOiBcImJhbGxTdGFydFBvc1wiLFxyXG4gICAgZmFkZVdhbGxIb2xkZXI6IFwiZmFkZVdhbGxcIixcclxuICAgIG9ic3RhY2xlc1dhbGw6IFwib2JzdGFjbGVzV2FsbFwiLFxyXG4gICAgdGltZVRvQm91bmNlOiBcInRpbWVUb0JvdW5jZVwiLFxyXG4gIH07XHJcbiAgU2V0VXBMZXZlbChsZXZlbEluZGV4OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRMZXZlbCA9IGxldmVsRGVzaWduW2xldmVsSW5kZXhdO1xyXG4gICAgY29uc29sZS5sb2coXCJsZXZlbEluZGV4XCIsIGxldmVsSW5kZXgpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiY3VycmVudExldmVsLmxldmVsXCIsIGN1cnJlbnRMZXZlbC5sZXZlbCk7XHJcblxyXG4gICAgdGhpcy53YWxsLmNoaWxkcmVuLmZvckVhY2goKGVhY2hXYWxsKSA9PiB7XHJcbiAgICAgIGxldCB0ZW1wV2FsbCA9IHRoaXMuR2V0VmFsdWVCeUtleShjdXJyZW50TGV2ZWxbXCJ3YWxsXCJdLCBlYWNoV2FsbC5uYW1lKTtcclxuICAgICAgZWFjaFdhbGwuc2V0UG9zaXRpb24odGVtcFdhbGwucG9zLngsIHRlbXBXYWxsLnBvcy55KTtcclxuICAgICAgZWFjaFdhbGwud2lkdGggPSB0ZW1wV2FsbC5zaXplLnc7XHJcbiAgICAgIGVhY2hXYWxsLmhlaWdodCA9IHRlbXBXYWxsLnNpemUuaDtcclxuICAgICAgZWFjaFdhbGwuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcikuc2l6ZS5oZWlnaHQgPVxyXG4gICAgICAgIHRlbXBXYWxsLnNpemUuaDtcclxuICAgICAgZWFjaFdhbGwuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcikuc2l6ZS53aWR0aCA9IHRlbXBXYWxsLnNpemUudztcclxuICAgIH0pO1xyXG4gICAgdGhpcy5iYWxsSG9sZGVyLnNldFBvc2l0aW9uKFxyXG4gICAgICBjdXJyZW50TGV2ZWxbdGhpcy5fbGV2ZWxEZXNpZ25LZXkuYmFsbFN0YXJ0UG9zXS54LFxyXG4gICAgICBjdXJyZW50TGV2ZWxbdGhpcy5fbGV2ZWxEZXNpZ25LZXkuYmFsbFN0YXJ0UG9zXS55XHJcbiAgICApO1xyXG4gICAgdGhpcy5mYWRlV2FsbEhvbGRlci5zZXRQb3NpdGlvbihcclxuICAgICAgY3VycmVudExldmVsW3RoaXMuX2xldmVsRGVzaWduS2V5LmZhZGVXYWxsSG9sZGVyXS5wb3MueCxcclxuICAgICAgY3VycmVudExldmVsW3RoaXMuX2xldmVsRGVzaWduS2V5LmZhZGVXYWxsSG9sZGVyXS5wb3MueVxyXG4gICAgKTtcclxuICAgIGlmIChjdXJyZW50TGV2ZWxbdGhpcy5fbGV2ZWxEZXNpZ25LZXkub2JzdGFjbGVzV2FsbF0ubGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IgKFxyXG4gICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgaW5kZXggPCBjdXJyZW50TGV2ZWxbdGhpcy5fbGV2ZWxEZXNpZ25LZXkub2JzdGFjbGVzV2FsbF0ubGVuZ3RoO1xyXG4gICAgICAgIGluZGV4KytcclxuICAgICAgKSB7XHJcbiAgICAgICAgbGV0IG9ic3RhY2xlc1dhbGxQb3M6IGNjLlZlYzIgPSBuZXcgY2MuVmVjMihcclxuICAgICAgICAgIGN1cnJlbnRMZXZlbFt0aGlzLl9sZXZlbERlc2lnbktleS5vYnN0YWNsZXNXYWxsXVtpbmRleF0ucG9zLngsXHJcbiAgICAgICAgICBjdXJyZW50TGV2ZWxbdGhpcy5fbGV2ZWxEZXNpZ25LZXkub2JzdGFjbGVzV2FsbF1baW5kZXhdLnBvcy55XHJcbiAgICAgICAgKTtcclxuICAgICAgICBsZXQgb2JzV2FsbDogY2MuTm9kZSA9IE9ic3RhY2xlc1dhbGxTcGF3bmVyLkluc3RhbmNlLlNwYXduVGhpbmcoXHJcbiAgICAgICAgICBvYnN0YWNsZXNXYWxsUG9zLFxyXG4gICAgICAgICAgT2JzdGFjbGVzV2FsbFNwYXduZXIuSW5zdGFuY2UuX3dhbGxQcmVmYWJOYW1lXHJcbiAgICAgICAgKTtcclxuICAgICAgICBvYnNXYWxsLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIG9ic1dhbGwucm90YXRpb24gPVxyXG4gICAgICAgICAgY3VycmVudExldmVsW3RoaXMuX2xldmVsRGVzaWduS2V5Lm9ic3RhY2xlc1dhbGxdW2luZGV4XS5yb3RhdGlvbjtcclxuICAgICAgICBvYnNXYWxsLndpZHRoID1cclxuICAgICAgICAgIGN1cnJlbnRMZXZlbFt0aGlzLl9sZXZlbERlc2lnbktleS5vYnN0YWNsZXNXYWxsXVtpbmRleF0uc2l6ZS53O1xyXG4gICAgICAgIG9ic1dhbGwuaGVpZ2h0ID1cclxuICAgICAgICAgIGN1cnJlbnRMZXZlbFt0aGlzLl9sZXZlbERlc2lnbktleS5vYnN0YWNsZXNXYWxsXVtpbmRleF0uc2l6ZS5oO1xyXG4gICAgICAgIG9ic1dhbGwuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcikuc2l6ZS53aWR0aCA9XHJcbiAgICAgICAgICBjdXJyZW50TGV2ZWxbdGhpcy5fbGV2ZWxEZXNpZ25LZXkub2JzdGFjbGVzV2FsbF1baW5kZXhdLnNpemUudztcclxuICAgICAgICBvYnNXYWxsLmdldENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpLnNpemUuaGVpZ2h0ID1cclxuICAgICAgICAgIGN1cnJlbnRMZXZlbFt0aGlzLl9sZXZlbERlc2lnbktleS5vYnN0YWNsZXNXYWxsXVtpbmRleF0uc2l6ZS5oO1xyXG4gICAgICAgIG9ic1dhbGwuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy50aW1lVG9Cb3VuY2VIb2xkZXJcclxuICAgICAgLmdldENvbXBvbmVudChUaW1lTmVlZFRvVG91Y2gpXHJcbiAgICAgIC5zZXRCb3VuY2UoY3VycmVudExldmVsW3RoaXMuX2xldmVsRGVzaWduS2V5LnRpbWVUb0JvdW5jZV0pO1xyXG4gICAgdGhpcy5mYWRlV2FsbEhvbGRlci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5iYWxsSG9sZGVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgXCJ0aGlzLmZhZGVXYWxsSG9sZGVyXCIsXHJcbiAgICAgIHRoaXMuZmFkZVdhbGxIb2xkZXIsXHJcbiAgICAgIC8vIHRoaXMuZmFkZVdhbGxIb2xkZXIuZ2V0UG9zaXRpb24oKS54LFxyXG4gICAgICAvLyB0aGlzLmZhZGVXYWxsSG9sZGVyLmdldFBvc2l0aW9uKCkueSxcclxuICAgICAgdGhpcy5mYWRlV2FsbEhvbGRlci5nZXRDaGlsZEJ5TmFtZShcIkZhZGVBYmxlV2FsbFwiKS5zY2FsZSxcclxuICAgICAgdGhpcy5mYWRlV2FsbEhvbGRlci5nZXRDaGlsZEJ5TmFtZShcIkZhZGVBYmxlV2FsbFwiKS5nZXRQb3NpdGlvbigpLngsXHJcbiAgICAgIHRoaXMuZmFkZVdhbGxIb2xkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJGYWRlQWJsZVdhbGxcIikuZ2V0UG9zaXRpb24oKS55XHJcbiAgICApO1xyXG4gIH1cclxuICBEaXNhYmxlSG9sZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJSRVNFVFwiKTtcclxuICAgIE9ic3RhY2xlc1dhbGxTcGF3bmVyLkluc3RhbmNlLkNsZWFySG9sZGVyKCk7XHJcbiAgICB0aGlzLmJhbGxIb2xkZXIuZ2V0Q29tcG9uZW50KEJhbGwpLlJlc2V0KCk7XHJcbiAgICB0aGlzLmZhZGVXYWxsSG9sZGVyLmdldENvbXBvbmVudEluQ2hpbGRyZW4oRmFkZVdhbGwpLlJlc2V0KCk7XHJcbiAgICB0aGlzLmJhbGxIb2xkZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgfVxyXG4gIE5leHRMZXZlbCgpIHtcclxuICAgIEdhbWVQbGF5TWFuYWdlci5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPVxyXG4gICAgICBHYW1lUGxheU1hbmFnZXIuSW5zdGFuY2UuY3VycmVudExldmVsICsgMTtcclxuICAgIHRoaXMuU2V0VXBMZXZlbChHYW1lUGxheU1hbmFnZXIuSW5zdGFuY2UuY3VycmVudExldmVsKTtcclxuICB9XHJcbiAgR2V0VmFsdWVCeUtleShvYmplY3RJbnB1dCwga2V5VG9GaW5kOiBzdHJpbmcpIHtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIG9iamVjdElucHV0KSB7XHJcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0SW5wdXQsIGtleSkpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gb2JqZWN0SW5wdXRba2V5XTtcclxuICAgICAgICBpZiAoa2V5VG9GaW5kLnRvTG93ZXJDYXNlKCkgPT0ga2V5LnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gameplay/Ball.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ad4efPsBOtAZqP0kazbwXDn', 'Ball');
// Scripts/gameplay/Ball.ts

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
var TrajectoryLine_1 = require("./TrajectoryLine/TrajectoryLine");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Ball = /** @class */ (function (_super) {
    __extends(Ball, _super);
    function Ball() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rigidBody = null;
        _this.trajectoryLineDir = new cc.Vec2(0, 1);
        _this.SFX = null;
        _this.ball = null;
        _this.trajectoryLine = null;
        _this.moveSpeed = 0;
        _this.isBallMoving = false;
        _this.mouseHold = false;
        return _this;
    }
    Ball_1 = Ball;
    Ball.prototype.onEnable = function () {
        Ball_1.Instance = this;
        this.rigidBody = this.ball.getComponent(cc.RigidBody);
        this.rigidBody.gravityScale = 0;
        // this.node.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyPress, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyPress, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyPressEnter, this);
    };
    Ball.prototype.start = function () {
        this.trajectoryLine.drawCircle(this.ball.getPosition(), this.trajectoryLineDir, 100);
    };
    Ball.prototype.SetDirOfBall = function (trajectoryLineDir) {
        var dir = trajectoryLineDir
            .sub(this.ball.getPosition())
            .normalize()
            .mul(this.moveSpeed);
        this.rigidBody.linearVelocity = dir;
    };
    Ball.prototype.onKeyPress = function (event) {
        if (this.node.active == false)
            return;
        switch (event.keyCode) {
            case cc.macro.KEY.d: //keycode right arrow
                if (this.isBallMoving == true)
                    return;
                this.RotateTrajectoryLine(1);
                break;
            case 39: //keycode left arrow
                if (this.isBallMoving == true)
                    return;
                this.RotateTrajectoryLine(-1);
                break;
        }
    };
    Ball.prototype.onKeyPressEnter = function (event) {
        if (this.node.active == false)
            return;
        switch (event.keyCode) {
            case 13: //enter keyCode
                if (this.isBallMoving == true)
                    return;
                this.SetDirOfBall(this.trajectoryLineDir);
                this.trajectoryLine.graphics.clear();
                this.isBallMoving = true;
                break;
        }
    };
    Ball.prototype.RotateTrajectoryLine = function (dir) {
        this.trajectoryLineDir = this.trajectoryLineDir.rotate(0.017453 * 2 * dir);
        this.trajectoryLine.graphics.clear();
        this.trajectoryLine.drawCircle(this.ball.getPosition(), this.trajectoryLineDir, 100);
    };
    Ball.prototype.Reset = function () {
        this.rigidBody.linearVelocity = cc.Vec2.ZERO;
        this.isBallMoving = false;
        this.trajectoryLineDir = new cc.Vec2(0, 1);
        this.ball.setPosition(0, 0);
    };
    Ball.prototype.update = function (dt) { };
    var Ball_1;
    Ball.Instance = null;
    __decorate([
        property(cc.Node)
    ], Ball.prototype, "SFX", void 0);
    __decorate([
        property(cc.Node)
    ], Ball.prototype, "ball", void 0);
    __decorate([
        property(TrajectoryLine_1.default)
    ], Ball.prototype, "trajectoryLine", void 0);
    __decorate([
        property(Number)
    ], Ball.prototype, "moveSpeed", void 0);
    Ball = Ball_1 = __decorate([
        ccclass
    ], Ball);
    return Ball;
}(cc.Component));
exports.default = Ball;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZXBsYXlcXEJhbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbEYsa0VBQTZEO0FBRXZELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBc0ZDO1FBcEZRLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBQy9CLHVCQUFpQixHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUIsU0FBRyxHQUFZLElBQUksQ0FBQztRQUVwQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBQ2Qsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBRTlDLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDeEMsa0JBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsZUFBUyxHQUFZLEtBQUssQ0FBQzs7SUEyRXBDLENBQUM7YUF0Rm9CLElBQUk7SUFhYix1QkFBUSxHQUFsQjtRQUNFLE1BQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUVoQywwRUFBMEU7UUFDMUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFD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QUFDLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ1MscUJBQU0sR0FBaEIsVUFBaUIsRUFBVSxJQUFTLENBQUM7O0lBcEZ2QixhQUFRLEdBQVMsSUFBSSxDQUFDO0lBR2pCO1FBQWxCLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FDQUE0QjtJQUUzQjtRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzQ0FBNkI7SUFDckI7UUFBekIsUUFBUSxDQUFDLHdCQUFjLENBQUM7Z0RBQThDO0lBRXJEO1FBQWpCLFFBQVEsQ0FBQyxNQUFNLENBQUM7MkNBQThCO0lBVDVCLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FzRnhCO0lBQUQsV0FBQztDQXRGRCxBQXNGQyxDQXRGaUMsRUFBRSxDQUFDLFNBQVMsR0FzRjdDO2tCQXRGb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tIFwiLi9HYW1lTWFuYWdlclwiO1xyXG5pbXBvcnQgUGFydGljbGVNYW5hZ2VyIGZyb20gXCIuL1BhcnRpY2xlL1BhcnRpY2xlTWFuYWdlclwiO1xyXG5pbXBvcnQgVHJhamVjdG9yeUxpbmUgZnJvbSBcIi4vVHJhamVjdG9yeUxpbmUvVHJhamVjdG9yeUxpbmVcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWxsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBwdWJsaWMgc3RhdGljIEluc3RhbmNlOiBCYWxsID0gbnVsbDtcclxuICBwdWJsaWMgcmlnaWRCb2R5OiBjYy5SaWdpZEJvZHkgPSBudWxsO1xyXG4gIHB1YmxpYyB0cmFqZWN0b3J5TGluZURpcjogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKDAsIDEpO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKSBwdWJsaWMgU0ZYOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpIHB1YmxpYyBiYWxsOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoVHJhamVjdG9yeUxpbmUpIHB1YmxpYyB0cmFqZWN0b3J5TGluZTogVHJhamVjdG9yeUxpbmUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoTnVtYmVyKSBwdWJsaWMgbW92ZVNwZWVkOiBudW1iZXIgPSAwO1xyXG4gIHB1YmxpYyBpc0JhbGxNb3Zpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgbW91c2VIb2xkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgIEJhbGwuSW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgdGhpcy5yaWdpZEJvZHkgPSB0aGlzLmJhbGwuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICB0aGlzLnJpZ2lkQm9keS5ncmF2aXR5U2NhbGUgPSAwO1xyXG5cclxuICAgIC8vIHRoaXMubm9kZS5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlQcmVzcywgdGhpcyk7XHJcbiAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlQcmVzcywgdGhpcyk7XHJcbiAgICBjYy5zeXN0ZW1FdmVudC5vbihcclxuICAgICAgY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLFxyXG4gICAgICB0aGlzLm9uS2V5UHJlc3NFbnRlcixcclxuICAgICAgdGhpc1xyXG4gICAgKTtcclxuICB9XHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy50cmFqZWN0b3J5TGluZS5kcmF3Q2lyY2xlKFxyXG4gICAgICB0aGlzLmJhbGwuZ2V0UG9zaXRpb24oKSxcclxuICAgICAgdGhpcy50cmFqZWN0b3J5TGluZURpcixcclxuICAgICAgMTAwXHJcbiAgICApO1xyXG4gIH1cclxuICBTZXREaXJPZkJhbGwodHJhamVjdG9yeUxpbmVEaXI6IGNjLlZlYzIpIHtcclxuICAgIGxldCBkaXI6IGNjLlZlYzIgPSB0cmFqZWN0b3J5TGluZURpclxyXG4gICAgICAuc3ViKHRoaXMuYmFsbC5nZXRQb3NpdGlvbigpKVxyXG4gICAgICAubm9ybWFsaXplKClcclxuICAgICAgLm11bCh0aGlzLm1vdmVTcGVlZCk7XHJcblxyXG4gICAgdGhpcy5yaWdpZEJvZHkubGluZWFyVmVsb2NpdHkgPSBkaXI7XHJcbiAgfVxyXG4gIG9uS2V5UHJlc3MoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50S2V5Ym9hcmQpIHtcclxuICAgIGlmICh0aGlzLm5vZGUuYWN0aXZlID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6IC8va2V5Y29kZSByaWdodCBhcnJvd1xyXG4gICAgICAgIGlmICh0aGlzLmlzQmFsbE1vdmluZyA9PSB0cnVlKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuUm90YXRlVHJhamVjdG9yeUxpbmUoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMzk6IC8va2V5Y29kZSBsZWZ0IGFycm93XHJcbiAgICAgICAgaWYgKHRoaXMuaXNCYWxsTW92aW5nID09IHRydWUpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5Sb3RhdGVUcmFqZWN0b3J5TGluZSgtMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG9uS2V5UHJlc3NFbnRlcihldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xyXG4gICAgaWYgKHRoaXMubm9kZS5hY3RpdmUgPT0gZmFsc2UpIHJldHVybjtcclxuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICBjYXNlIDEzOiAvL2VudGVyIGtleUNvZGVcclxuICAgICAgICBpZiAodGhpcy5pc0JhbGxNb3ZpbmcgPT0gdHJ1ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLlNldERpck9mQmFsbCh0aGlzLnRyYWplY3RvcnlMaW5lRGlyKTtcclxuICAgICAgICB0aGlzLnRyYWplY3RvcnlMaW5lLmdyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5pc0JhbGxNb3ZpbmcgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuICBSb3RhdGVUcmFqZWN0b3J5TGluZShkaXI6IG51bWJlcikge1xyXG4gICAgdGhpcy50cmFqZWN0b3J5TGluZURpciA9IHRoaXMudHJhamVjdG9yeUxpbmVEaXIucm90YXRlKDAuMDE3NDUzICogMiAqIGRpcik7XHJcbiAgICB0aGlzLnRyYWplY3RvcnlMaW5lLmdyYXBoaWNzLmNsZWFyKCk7XHJcblxyXG4gICAgdGhpcy50cmFqZWN0b3J5TGluZS5kcmF3Q2lyY2xlKFxyXG4gICAgICB0aGlzLmJhbGwuZ2V0UG9zaXRpb24oKSxcclxuICAgICAgdGhpcy50cmFqZWN0b3J5TGluZURpcixcclxuICAgICAgMTAwXHJcbiAgICApO1xyXG4gIH1cclxuICBSZXNldCgpIHtcclxuICAgIHRoaXMucmlnaWRCb2R5LmxpbmVhclZlbG9jaXR5ID0gY2MuVmVjMi5aRVJPO1xyXG4gICAgdGhpcy5pc0JhbGxNb3ZpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMudHJhamVjdG9yeUxpbmVEaXIgPSBuZXcgY2MuVmVjMigwLCAxKTtcclxuICAgIHRoaXMuYmFsbC5zZXRQb3NpdGlvbigwLCAwKTtcclxuICB9XHJcbiAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gameplay/TimeNeedTouch.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '84042I9KIdEGo233ywZTGud', 'TimeNeedTouch');
// Scripts/gameplay/TimeNeedTouch.ts

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
var GamePlayManager_1 = require("./GamePlayManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TimeNeedToTouch = /** @class */ (function (_super) {
    __extends(TimeNeedToTouch, _super);
    function TimeNeedToTouch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.TimeNeedToTouch = 0;
        _this.isOpenDoor = false;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    // start() {}
    TimeNeedToTouch.prototype.setBounce = function (timeBounce) {
        this.TimeNeedToTouch = timeBounce;
        this.label.string = this.TimeNeedToTouch.toString();
        this.isOpenDoor = false;
    };
    TimeNeedToTouch.prototype.Touching = function () {
        if (this.TimeNeedToTouch > 0) {
            this.TimeNeedToTouch--;
            this.label.string = this.TimeNeedToTouch.toString();
            if (this.TimeNeedToTouch == 0 && this.isOpenDoor == false) {
                GamePlayManager_1.default.Instance.fadeWall.FadeWall();
                this.label.string = this.TimeNeedToTouch.toString();
                this.isOpenDoor = true;
            }
        }
        else if (this.TimeNeedToTouch == 0) {
            this.isOpenDoor = true;
            GamePlayManager_1.default.Instance.isLost = true;
            this.label.string = "Lost";
            this.scheduleOnce(function () {
                GamePlayManager_1.default.Instance.Lose();
            }, 0.4);
        }
    };
    __decorate([
        property(cc.Label)
    ], TimeNeedToTouch.prototype, "label", void 0);
    __decorate([
        property
    ], TimeNeedToTouch.prototype, "TimeNeedToTouch", void 0);
    TimeNeedToTouch = __decorate([
        ccclass
    ], TimeNeedToTouch);
    return TimeNeedToTouch;
}(cc.Component));
exports.default = TimeNeedToTouch;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZXBsYXlcXFRpbWVOZWVkVG91Y2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEYscURBQWdEO0FBRTFDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBc0NDO1FBcENDLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHaEIscUJBQWUsR0FBVyxDQUFDLENBQUM7UUFDNUIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7O1FBK0JuQyxpQkFBaUI7SUFDbkIsQ0FBQztJQTlCQyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLGFBQWE7SUFDYixtQ0FBUyxHQUFULFVBQVUsVUFBa0I7UUFDMUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxVQUFVLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0Qsa0NBQVEsR0FBUjtRQUNFLElBQUksSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLEVBQUU7WUFDNUIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDcEQsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLEtBQUssRUFBRTtnQkFDekQseUJBQWUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUM3QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNwRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzthQUN4QjtTQUNGO2FBQU0sSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2Qix5QkFBZSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNoQix5QkFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNsQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDVDtJQUNILENBQUM7SUFqQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDSTtJQUd2QjtRQURDLFFBQVE7NERBQzBCO0lBTGhCLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0FzQ25DO0lBQUQsc0JBQUM7Q0F0Q0QsQUFzQ0MsQ0F0QzRDLEVBQUUsQ0FBQyxTQUFTLEdBc0N4RDtrQkF0Q29CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4vR2FtZU1hbmFnZXJcIjtcclxuaW1wb3J0IEdhbWVQbGF5TWFuYWdlciBmcm9tIFwiLi9HYW1lUGxheU1hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lTmVlZFRvVG91Y2ggZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHlcclxuICBwdWJsaWMgVGltZU5lZWRUb1RvdWNoOiBudW1iZXIgPSAwO1xyXG4gIHB1YmxpYyBpc09wZW5Eb29yOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgLy8gc3RhcnQoKSB7fVxyXG4gIHNldEJvdW5jZSh0aW1lQm91bmNlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuVGltZU5lZWRUb1RvdWNoID0gdGltZUJvdW5jZTtcclxuICAgIHRoaXMubGFiZWwuc3RyaW5nID0gdGhpcy5UaW1lTmVlZFRvVG91Y2gudG9TdHJpbmcoKTtcclxuICAgIHRoaXMuaXNPcGVuRG9vciA9IGZhbHNlO1xyXG4gIH1cclxuICBUb3VjaGluZygpIHtcclxuICAgIGlmICh0aGlzLlRpbWVOZWVkVG9Ub3VjaCA+IDApIHtcclxuICAgICAgdGhpcy5UaW1lTmVlZFRvVG91Y2gtLTtcclxuICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSB0aGlzLlRpbWVOZWVkVG9Ub3VjaC50b1N0cmluZygpO1xyXG4gICAgICBpZiAodGhpcy5UaW1lTmVlZFRvVG91Y2ggPT0gMCAmJiB0aGlzLmlzT3BlbkRvb3IgPT0gZmFsc2UpIHtcclxuICAgICAgICBHYW1lUGxheU1hbmFnZXIuSW5zdGFuY2UuZmFkZVdhbGwuRmFkZVdhbGwoKTtcclxuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IHRoaXMuVGltZU5lZWRUb1RvdWNoLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5pc09wZW5Eb29yID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLlRpbWVOZWVkVG9Ub3VjaCA9PSAwKSB7XHJcbiAgICAgIHRoaXMuaXNPcGVuRG9vciA9IHRydWU7XHJcbiAgICAgIEdhbWVQbGF5TWFuYWdlci5JbnN0YW5jZS5pc0xvc3QgPSB0cnVlO1xyXG4gICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IFwiTG9zdFwiO1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgR2FtZVBsYXlNYW5hZ2VyLkluc3RhbmNlLkxvc2UoKTtcclxuICAgICAgfSwgMC40KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gameplay/Wall/ObstaclesWallSpawner.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f2113SZgMVJLpPG2bS7uOAw', 'ObstaclesWallSpawner');
// Scripts/gameplay/Wall/ObstaclesWallSpawner.ts

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
var ObstaclesWallSpawner = /** @class */ (function (_super) {
    __extends(ObstaclesWallSpawner, _super);
    function ObstaclesWallSpawner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._wallPrefabName = "wall";
        return _this;
        // update (dt) {}
    }
    ObstaclesWallSpawner_1 = ObstaclesWallSpawner;
    ObstaclesWallSpawner.prototype.onLoad = function () {
        ObstaclesWallSpawner_1.Instance = this;
    };
    ObstaclesWallSpawner.prototype.ClearHolder = function () {
        if (this.holder.children.length <= 0)
            return;
        this.holder.removeAllChildren();
    };
    var ObstaclesWallSpawner_1;
    ObstaclesWallSpawner.Instance = null;
    ObstaclesWallSpawner = ObstaclesWallSpawner_1 = __decorate([
        ccclass
    ], ObstaclesWallSpawner);
    return ObstaclesWallSpawner;
}(Spawn_1.default));
exports.default = ObstaclesWallSpawner;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZXBsYXlcXFdhbGxcXE9ic3RhY2xlc1dhbGxTcGF3bmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLGtDQUE2QjtBQUV2QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrRCx3Q0FBSztJQUF2RDtRQUFBLHFFQWFDO1FBWlEscUJBQWUsR0FBRyxNQUFNLENBQUM7O1FBV2hDLGlCQUFpQjtJQUNuQixDQUFDOzZCQWJvQixvQkFBb0I7SUFJN0IscUNBQU0sR0FBaEI7UUFDRSxzQkFBb0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZDLENBQUM7SUFDRCwwQ0FBVyxHQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQztZQUFFLE9BQU87UUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBRWxDLENBQUM7O0lBVGEsNkJBQVEsR0FBeUIsSUFBSSxDQUFDO0lBRmpDLG9CQUFvQjtRQUR4QyxPQUFPO09BQ2Esb0JBQW9CLENBYXhDO0lBQUQsMkJBQUM7Q0FiRCxBQWFDLENBYmlELGVBQUssR0FhdEQ7a0JBYm9CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBTcGF3biBmcm9tIFwiLi4vU3Bhd25cIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYnN0YWNsZXNXYWxsU3Bhd25lciBleHRlbmRzIFNwYXduIHtcclxuICBwdWJsaWMgX3dhbGxQcmVmYWJOYW1lID0gXCJ3YWxsXCI7XHJcbiAgcHVibGljIHN0YXRpYyBJbnN0YW5jZTogT2JzdGFjbGVzV2FsbFNwYXduZXIgPSBudWxsO1xyXG5cclxuICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgT2JzdGFjbGVzV2FsbFNwYXduZXIuSW5zdGFuY2UgPSB0aGlzO1xyXG4gIH1cclxuICBDbGVhckhvbGRlcigpIHtcclxuICAgIGlmICh0aGlzLmhvbGRlci5jaGlsZHJlbi5sZW5ndGggPD0gMCkgcmV0dXJuO1xyXG4gICAgdGhpcy5ob2xkZXIucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuXHJcbiAgfVxyXG4gIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/stage/StageGameEnd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd0df7MrCDxIOqiQAqLISxA9', 'StageGameEnd');
// Scripts/stage/StageGameEnd.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var SoundMgr_1 = require("../common/SoundMgr");
var GameDefine_1 = require("../game/GameDefine");
var PeerDefine_1 = require("../PeerComponent/PeerDefine");
var PeerManager_1 = require("../PeerComponent/PeerManager");
var Stage_1 = require("./Stage");
var StageMgr_1 = require("./StageMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StageGameEnd = /** @class */ (function (_super) {
    __extends(StageGameEnd, _super);
    function StageGameEnd() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnPlay = null;
        _this.btnBack = null;
        _this.playerRankBases = [];
        _this.fireWorks = [];
        _this.endGameMulti = null;
        _this.endGameSingle = null;
        _this.dragonSkin = ["Char3", "Char2", "Char1"];
        return _this;
    }
    StageGameEnd_1 = StageGameEnd;
    // LIFE-CYCLE CALLBACKS:
    StageGameEnd.prototype.onLoad = function () {
        StageGameEnd_1.Instance = this;
    };
    StageGameEnd.prototype.start = function () {
        this.btnPlay.interactable = true;
        this.btnBack.interactable = false;
    };
    // update (dt) {}
    StageGameEnd.prototype.showResult = function (rank) {
        if (rank.length > 1) {
            this.endGameMulti.active = true;
            this.endGameSingle.active = false;
            for (var i = 0; i < 3; i++) {
                if (i < rank.length) {
                    var msg = {
                        phase: PeerDefine_1.PeerPhase.GAMEOVER,
                        action: PeerDefine_1.PeerActionType.ENDGAME,
                        customParam: "",
                        rank: i,
                        score: rank[i].score,
                    };
                    PeerManager_1.default.Instance.sendMessage(rank[i].playerIndex, msg);
                    this.playerRankBases[i].active = true;
                    this.playerRankBases[i].getChildByName("playerSprite").getComponent(sp.Skeleton)
                        .setSkin(this.dragonSkin[rank[i].playerIndex]);
                    this.playerRankBases[i].getChildByName("player").getComponent(cc.Label).string =
                        GameDefine_1.default.player + " " + (rank[i].playerIndex + 1);
                    this.playerRankBases[i].getChildByName("lblScore").getComponent(cc.Label).string =
                        rank[i].score.toString();
                }
                else {
                    this.playerRankBases[i].active = false;
                }
            }
        }
        else {
            this.endGameMulti.active = false;
            this.endGameSingle.active = true;
            var highScore = localStorage.getItem('highScoreZigZag');
            if (!highScore || highScore < rank[0].score) {
                highScore = rank[0].score;
            }
            localStorage.setItem('highScoreZigZag', highScore);
            this.endGameSingle.getChildByName("player").getComponent(cc.Label).string =
                GameDefine_1.default.player + " " + (rank[0].playerIndex + 1);
            this.endGameSingle.getChildByName("lblScore").getComponent(cc.Label).string =
                rank[0].score.toString();
            this.endGameSingle.getChildByName("lblHighScore").getComponent(cc.Label).string =
                highScore.toString();
            this.endGameSingle.getChildByName("playerSprite").getComponent(sp.Skeleton)
                .setSkin(this.dragonSkin[rank[0].playerIndex]);
        }
        StageMgr_1.default.show(StageMgr_1.Stages.StageGameEnd);
        SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_ENDSCREEN);
        // for(let i = 0; i<this.fireWorks.length; i++) {
        //     setTimeout(()=>{
        //         this.fireWorks[i].play();
        //         this.fireWorks[i].getAnimationState("FireWork").repeatCount = 2;
        //     }, 800 + 600 * i);
        // }
    };
    StageGameEnd.prototype.nextStage = function () {
        SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
        this.btnPlay.interactable = true;
        this.btnBack.interactable = false;
        cc.tween(this.btnPlay.node).to(0.1, { scale: 0.65 }).to(0.1, { scale: 0.5 })
            .call(function () {
            StageMgr_1.default.show(StageMgr_1.Stages.StageLobby);
        }).start();
    };
    StageGameEnd.prototype.previousStage = function () {
        var msg = {
            phase: PeerDefine_1.PeerPhase.GAMEOVER,
            action: PeerDefine_1.PeerActionType.BACK,
            customParam: ""
        };
        PeerManager_1.default.Instance.sendMessageToAll(msg);
        SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
        this.btnPlay.interactable = false;
        this.btnBack.interactable = true;
        cc.tween(this.btnBack.node).to(0.1, { scale: 0.65 }).to(0.1, { scale: 0.5 })
            .call(function () {
            StageMgr_1.default.Instance.sendMessage("goBack");
        }).start();
    };
    StageGameEnd.prototype.chooseButton = function (isBtnNext) {
        SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_SELECT);
        this.btnBack.interactable = !isBtnNext;
        this.btnPlay.interactable = isBtnNext;
    };
    var StageGameEnd_1;
    StageGameEnd.Instance = null;
    __decorate([
        property(cc.Button)
    ], StageGameEnd.prototype, "btnPlay", void 0);
    __decorate([
        property(cc.Button)
    ], StageGameEnd.prototype, "btnBack", void 0);
    __decorate([
        property(cc.Node)
    ], StageGameEnd.prototype, "playerRankBases", void 0);
    __decorate([
        property(cc.Animation)
    ], StageGameEnd.prototype, "fireWorks", void 0);
    __decorate([
        property(cc.Node)
    ], StageGameEnd.prototype, "endGameMulti", void 0);
    __decorate([
        property(cc.Node)
    ], StageGameEnd.prototype, "endGameSingle", void 0);
    StageGameEnd = StageGameEnd_1 = __decorate([
        ccclass
    ], StageGameEnd);
    return StageGameEnd;
}(Stage_1.default));
exports.default = StageGameEnd;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3RhZ2VcXFN0YWdlR2FtZUVuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBMEM7QUFDMUMsaURBQTRDO0FBQzVDLDBEQUF3RTtBQUN4RSw0REFBMEU7QUFDMUUsaUNBQTRCO0FBRTVCLHVDQUE4QztBQUd4QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEwQyxnQ0FBSztJQUEvQztRQUFBLHFFQXFIQztRQW5Id0IsYUFBTyxHQUFjLElBQUksQ0FBQztRQUMxQixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBQzVCLHFCQUFlLEdBQWMsRUFBRSxDQUFDO1FBQzNCLGVBQVMsR0FBbUIsRUFBRSxDQUFDO1FBQ3BDLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBSXpDLGdCQUFVLEdBQVksQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDOztJQTBHOUQsQ0FBQztxQkFySG9CLFlBQVk7SUFhN0Isd0JBQXdCO0lBRXhCLDZCQUFNLEdBQU47UUFDSSxjQUFZLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUNqQyxDQUFDO0lBRUQsNEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDdEMsQ0FBQztJQUVELGlCQUFpQjtJQUVqQixpQ0FBVSxHQUFWLFVBQVcsSUFBSTtRQUNYLElBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNsQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN4QixJQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUNoQixJQUFJLEdBQUcsR0FBa0I7d0JBQ3JCLEtBQUssRUFBRSxzQkFBUyxDQUFDLFFBQVE7d0JBQ3pCLE1BQU0sRUFBRSwyQkFBYyxDQUFDLE9BQU87d0JBQzlCLFdBQVcsRUFBRSxFQUFFO3dCQUNmLElBQUksRUFBRSxDQUFDO3dCQUNQLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztxQkFDdkIsQ0FBQTtvQkFFRCxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFFM0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUN0QyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzt5QkFDM0UsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7b0JBQ25ELElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTTt3QkFDdkUsb0JBQVUsQ0FBQyxNQUFNLFVBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUUsQ0FBQztvQkFDdEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNO3dCQUM1RSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNoQztxQkFBTTtvQkFDSCxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7aUJBQzFDO2FBQ0o7U0FDSjthQUFNO1lBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUVqQyxJQUFJLFNBQVMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDeEQsSUFBRyxDQUFDLFNBQVMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRTtnQkFDeEMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDN0I7WUFDRCxZQUFZLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBRW5ELElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTTtnQkFDbEUsb0JBQVUsQ0FBQyxNQUFNLFVBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUUsQ0FBQztZQUN0RCxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU07Z0JBQ3ZFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNO2dCQUMzRSxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7aUJBQ3RFLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1NBQ3REO1FBRUQsa0JBQVEsQ0FBQyxJQUFJLENBQUMsaUJBQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNuQyxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxrQkFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsRCxpREFBaUQ7UUFDakQsdUJBQXVCO1FBQ3ZCLG9DQUFvQztRQUNwQywyRUFBMkU7UUFDM0UseUJBQXlCO1FBQ3pCLElBQUk7SUFDUixDQUFDO0lBRUQsZ0NBQVMsR0FBVDtRQUNJLGtCQUFRLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFFbEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBQyxDQUFDO2FBQ3ZFLElBQUksQ0FBQztZQUNGLGtCQUFRLENBQUMsSUFBSSxDQUFDLGlCQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQsb0NBQWEsR0FBYjtRQUNJLElBQUksR0FBRyxHQUFrQjtZQUNyQixLQUFLLEVBQUUsc0JBQVMsQ0FBQyxRQUFRO1lBQ3pCLE1BQU0sRUFBRSwyQkFBYyxDQUFDLElBQUk7WUFDM0IsV0FBVyxFQUFFLEVBQUU7U0FDbEIsQ0FBQTtRQUNELHFCQUFXLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTNDLGtCQUFRLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFFakMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBQyxDQUFDO2FBQ3ZFLElBQUksQ0FBQztZQUNGLGtCQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCxtQ0FBWSxHQUFaLFVBQWEsU0FBa0I7UUFDM0Isa0JBQVEsQ0FBQyxPQUFPLENBQUMsa0JBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO0lBQzFDLENBQUM7O0lBM0dNLHFCQUFRLEdBQWlCLElBQUksQ0FBQztJQVBoQjtRQUFwQixRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztpREFBMkI7SUFDMUI7UUFBcEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aURBQTJCO0lBQzVCO1FBQWxCLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUFpQztJQUMzQjtRQUF2QixRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzttREFBZ0M7SUFDcEM7UUFBbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQThCO0lBQzdCO1FBQWxCLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUErQjtJQVBoQyxZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBcUhoQztJQUFELG1CQUFDO0NBckhELEFBcUhDLENBckh5QyxlQUFLLEdBcUg5QztrQkFySG9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU291bmRNZ3IgZnJvbSBcIi4uL2NvbW1vbi9Tb3VuZE1nclwiO1xyXG5pbXBvcnQgR2FtZURlZmluZSBmcm9tIFwiLi4vZ2FtZS9HYW1lRGVmaW5lXCI7XHJcbmltcG9ydCB7IFBlZXJBY3Rpb25UeXBlLCBQZWVyUGhhc2UgfSBmcm9tIFwiLi4vUGVlckNvbXBvbmVudC9QZWVyRGVmaW5lXCI7XHJcbmltcG9ydCBQZWVyTWFuYWdlciwgeyBJRGF0YVJlY2VpdmVkIH0gZnJvbSBcIi4uL1BlZXJDb21wb25lbnQvUGVlck1hbmFnZXJcIjtcclxuaW1wb3J0IFN0YWdlIGZyb20gXCIuL1N0YWdlXCI7XHJcbmltcG9ydCBTdGFnZUluR2FtZSBmcm9tIFwiLi9TdGFnZUluR2FtZVwiO1xyXG5pbXBvcnQgU3RhZ2VNZ3IsIHsgU3RhZ2VzIH0gZnJvbSBcIi4vU3RhZ2VNZ3JcIjtcclxuXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YWdlR2FtZUVuZCBleHRlbmRzIFN0YWdlIHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKSBidG5QbGF5OiBjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbikgYnRuQmFjazogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBwbGF5ZXJSYW5rQmFzZXM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbikgZmlyZVdvcmtzOiBjYy5BbmltYXRpb25bXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIGVuZEdhbWVNdWx0aTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgZW5kR2FtZVNpbmdsZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgc3RhdGljIEluc3RhbmNlOiBTdGFnZUdhbWVFbmQgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgZHJhZ29uU2tpbjogc3RyaW5nW10gPVtcIkNoYXIzXCIsIFwiQ2hhcjJcIiwgXCJDaGFyMVwiXTtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIFN0YWdlR2FtZUVuZC5JbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuYnRuUGxheS5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYnRuQmFjay5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG5cclxuICAgIHNob3dSZXN1bHQocmFuaykge1xyXG4gICAgICAgIGlmKHJhbmsubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZEdhbWVNdWx0aS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmVuZEdhbWVTaW5nbGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZihpIDwgcmFuay5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbXNnOiBJRGF0YVJlY2VpdmVkID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaGFzZTogUGVlclBoYXNlLkdBTUVPVkVSLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFBlZXJBY3Rpb25UeXBlLkVOREdBTUUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbVBhcmFtOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5rOiBpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZTogcmFua1tpXS5zY29yZSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBQZWVyTWFuYWdlci5JbnN0YW5jZS5zZW5kTWVzc2FnZShyYW5rW2ldLnBsYXllckluZGV4LCBtc2cpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJSYW5rQmFzZXNbaV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclJhbmtCYXNlc1tpXS5nZXRDaGlsZEJ5TmFtZShcInBsYXllclNwcml0ZVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRTa2luKHRoaXMuZHJhZ29uU2tpbltyYW5rW2ldLnBsYXllckluZGV4XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJSYW5rQmFzZXNbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJwbGF5ZXJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHtHYW1lRGVmaW5lLnBsYXllcn0gJHtyYW5rW2ldLnBsYXllckluZGV4ICsgMX1gO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyUmFua0Jhc2VzW2ldLmdldENoaWxkQnlOYW1lKFwibGJsU2NvcmVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFua1tpXS5zY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclJhbmtCYXNlc1tpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kR2FtZU11bHRpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmVuZEdhbWVTaW5nbGUuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBoaWdoU2NvcmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlnaFNjb3JlWmlnWmFnJyk7XHJcbiAgICAgICAgICAgIGlmKCFoaWdoU2NvcmUgfHwgaGlnaFNjb3JlIDwgcmFua1swXS5zY29yZSkge1xyXG4gICAgICAgICAgICAgICAgaGlnaFNjb3JlID0gcmFua1swXS5zY29yZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGlnaFNjb3JlWmlnWmFnJywgaGlnaFNjb3JlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZW5kR2FtZVNpbmdsZS5nZXRDaGlsZEJ5TmFtZShcInBsYXllclwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9XHJcbiAgICAgICAgICAgICAgICBgJHtHYW1lRGVmaW5lLnBsYXllcn0gJHtyYW5rWzBdLnBsYXllckluZGV4ICsgMX1gO1xyXG4gICAgICAgICAgICB0aGlzLmVuZEdhbWVTaW5nbGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxTY29yZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFxyXG4gICAgICAgICAgICAgICAgcmFua1swXS5zY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZEdhbWVTaW5nbGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxIaWdoU2NvcmVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcclxuICAgICAgICAgICAgICAgIGhpZ2hTY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZEdhbWVTaW5nbGUuZ2V0Q2hpbGRCeU5hbWUoXCJwbGF5ZXJTcHJpdGVcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgICAgICAgLnNldFNraW4odGhpcy5kcmFnb25Ta2luW3JhbmtbMF0ucGxheWVySW5kZXhdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFN0YWdlTWdyLnNob3coU3RhZ2VzLlN0YWdlR2FtZUVuZCk7XHJcbiAgICAgICAgU291bmRNZ3IucGxheVNmeChTb3VuZE1nci5JbnN0YW5jZS5TRlhfRU5EU0NSRUVOKTtcclxuICAgICAgICAvLyBmb3IobGV0IGkgPSAwOyBpPHRoaXMuZmlyZVdvcmtzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuZmlyZVdvcmtzW2ldLnBsYXkoKTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuZmlyZVdvcmtzW2ldLmdldEFuaW1hdGlvblN0YXRlKFwiRmlyZVdvcmtcIikucmVwZWF0Q291bnQgPSAyO1xyXG4gICAgICAgIC8vICAgICB9LCA4MDAgKyA2MDAgKiBpKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dFN0YWdlKCkge1xyXG4gICAgICAgIFNvdW5kTWdyLnBsYXlTZngoU291bmRNZ3IuSW5zdGFuY2UuU0ZYX0JVVFRPTik7XHJcbiAgICAgICAgdGhpcy5idG5QbGF5LmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5idG5CYWNrLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLmJ0blBsYXkubm9kZSkudG8oMC4xLCB7c2NhbGU6IDAuNjV9KS50bygwLjEsIHtzY2FsZTogMC41fSlcclxuICAgICAgICAuY2FsbCgoKT0+e1xyXG4gICAgICAgICAgICBTdGFnZU1nci5zaG93KFN0YWdlcy5TdGFnZUxvYmJ5KTtcclxuICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByZXZpb3VzU3RhZ2UoKSB7XHJcbiAgICAgICAgbGV0IG1zZzogSURhdGFSZWNlaXZlZCA9IHtcclxuICAgICAgICAgICAgcGhhc2U6IFBlZXJQaGFzZS5HQU1FT1ZFUixcclxuICAgICAgICAgICAgYWN0aW9uOiBQZWVyQWN0aW9uVHlwZS5CQUNLLFxyXG4gICAgICAgICAgICBjdXN0b21QYXJhbTogXCJcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBQZWVyTWFuYWdlci5JbnN0YW5jZS5zZW5kTWVzc2FnZVRvQWxsKG1zZyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgU291bmRNZ3IucGxheVNmeChTb3VuZE1nci5JbnN0YW5jZS5TRlhfQlVUVE9OKTtcclxuICAgICAgICB0aGlzLmJ0blBsYXkuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5idG5CYWNrLmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICAgICBcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmJ0bkJhY2subm9kZSkudG8oMC4xLCB7c2NhbGU6IDAuNjV9KS50bygwLjEsIHtzY2FsZTogMC41fSlcclxuICAgICAgICAuY2FsbCgoKT0+e1xyXG4gICAgICAgICAgICBTdGFnZU1nci5JbnN0YW5jZS5zZW5kTWVzc2FnZShcImdvQmFja1wiKTsgXHJcbiAgICAgICAgfSkuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjaG9vc2VCdXR0b24oaXNCdG5OZXh0OiBib29sZWFuKSB7XHJcbiAgICAgICAgU291bmRNZ3IucGxheVNmeChTb3VuZE1nci5JbnN0YW5jZS5TRlhfU0VMRUNUKTtcclxuICAgICAgICB0aGlzLmJ0bkJhY2suaW50ZXJhY3RhYmxlID0gIWlzQnRuTmV4dDtcclxuICAgICAgICB0aGlzLmJ0blBsYXkuaW50ZXJhY3RhYmxlID0gaXNCdG5OZXh0O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/stage/StageQRscan.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '824b3x307FID6iZwnCxazfr', 'StageQRscan');
// Scripts/stage/StageQRscan.ts

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
var Global_1 = require("../common/Global");
var SoundMgr_1 = require("../common/SoundMgr");
var PeerManager_1 = require("../PeerComponent/PeerManager");
var QRCodeGen_1 = require("../PeerComponent/QRCodeGen");
var Stage_1 = require("./Stage");
var StageLobby_1 = require("./StageLobby");
var StageMgr_1 = require("./StageMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StageQRscan = /** @class */ (function (_super) {
    __extends(StageQRscan, _super);
    function StageQRscan() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.qrCode = null;
        return _this;
    }
    StageQRscan_1 = StageQRscan;
    // LIFE-CYCLE CALLBACKS:
    StageQRscan.prototype.onLoad = function () {
        StageQRscan_1.Instance = this;
    };
    StageQRscan.prototype.start = function () {
        var _this = this;
        SoundMgr_1.default.playMusic(SoundMgr_1.default.Instance.BGM);
        var urlParams = new URLSearchParams(window.location.search);
        var timerGoBack = Number(urlParams.get("timer_qr")) || 30000;
        Global_1.default.Instance.backAppTime = Date.now() + timerGoBack;
        return;
        var interval = setInterval(function () {
            if (PeerManager_1.default.Instance.peer && PeerManager_1.default.Instance.sip) {
                _this.qrCode.createQR();
                StageLobby_1.default.Instance.qrCode.createQR();
                StageLobby_1.default.Instance.lblRoomCode.string =
                    "" + window.controllerPrefix + PeerManager_1.default.Instance.sip;
                clearInterval(interval);
                return;
            }
            if (Global_1.default.Instance.backAppTime - Date.now() < 0) {
                StageMgr_1.default.Instance.sendMessage("backToApp");
                clearInterval(interval);
            }
        }, 1000);
    };
    // update (dt) {}
    StageQRscan.prototype.nextStage = function (isRemote) {
        if (isRemote === void 0) { isRemote = false; }
        if (isRemote) {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            StageMgr_1.default.show(StageMgr_1.Stages.StageStartGame);
        }
        else {
            StageMgr_1.default.show(StageMgr_1.Stages.StageStartGame);
        }
    };
    var StageQRscan_1;
    StageQRscan.Instance = null;
    __decorate([
        property(QRCodeGen_1.default)
    ], StageQRscan.prototype, "qrCode", void 0);
    StageQRscan = StageQRscan_1 = __decorate([
        ccclass
    ], StageQRscan);
    return StageQRscan;
}(Stage_1.default));
exports.default = StageQRscan;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3RhZ2VcXFN0YWdlUVJzY2FuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLDJDQUFzQztBQUN0QywrQ0FBMEM7QUFDMUMsNERBQXVEO0FBQ3ZELHdEQUFtRDtBQUNuRCxpQ0FBNEI7QUFDNUIsMkNBQXNDO0FBQ3RDLHVDQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBSztJQUE5QztRQUFBLHFFQTRDQztRQTNDc0IsWUFBTSxHQUFjLElBQUksQ0FBQzs7SUEyQ2hELENBQUM7b0JBNUNvQixXQUFXO0lBSTlCLHdCQUF3QjtJQUV4Qiw0QkFBTSxHQUFOO1FBQ0UsYUFBVyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUVELDJCQUFLLEdBQUw7UUFBQSxpQkFzQkM7UUFyQkMsa0JBQVEsQ0FBQyxTQUFTLENBQUMsa0JBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFMUMsSUFBSSxTQUFTLEdBQUcsSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1RCxJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQztRQUM3RCxnQkFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLFdBQVcsQ0FBQztRQUV2RCxPQUFPO1FBQ1AsSUFBSSxRQUFRLEdBQUcsV0FBVyxDQUFDO1lBQ3pCLElBQUkscUJBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLHFCQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRTtnQkFDekQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDdkIsb0JBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN0QyxvQkFBVSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTTtvQkFDcEMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7Z0JBQzFELGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDeEIsT0FBTzthQUNSO1lBQ0QsSUFBSSxnQkFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRTtnQkFDaEQsa0JBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMzQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDekI7UUFDSCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsaUJBQWlCO0lBRWpCLCtCQUFTLEdBQVQsVUFBVSxRQUF5QjtRQUF6Qix5QkFBQSxFQUFBLGdCQUF5QjtRQUNqQyxJQUFJLFFBQVEsRUFBRTtZQUNaLGtCQUFRLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQy9DLGtCQUFRLENBQUMsSUFBSSxDQUFDLGlCQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDdEM7YUFBTTtZQUNMLGtCQUFRLENBQUMsSUFBSSxDQUFDLGlCQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDOztJQXhDTSxvQkFBUSxHQUFnQixJQUFJLENBQUM7SUFGZjtRQUFwQixRQUFRLENBQUMsbUJBQVMsQ0FBQzsrQ0FBMEI7SUFEM0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQTRDL0I7SUFBRCxrQkFBQztDQTVDRCxBQTRDQyxDQTVDd0MsZUFBSyxHQTRDN0M7a0JBNUNvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vY29tbW9uL0dsb2JhbFwiO1xyXG5pbXBvcnQgU291bmRNZ3IgZnJvbSBcIi4uL2NvbW1vbi9Tb3VuZE1nclwiO1xyXG5pbXBvcnQgUGVlck1hbmFnZXIgZnJvbSBcIi4uL1BlZXJDb21wb25lbnQvUGVlck1hbmFnZXJcIjtcclxuaW1wb3J0IFFSQ29kZUdlbiBmcm9tIFwiLi4vUGVlckNvbXBvbmVudC9RUkNvZGVHZW5cIjtcclxuaW1wb3J0IFN0YWdlIGZyb20gXCIuL1N0YWdlXCI7XHJcbmltcG9ydCBTdGFnZUxvYmJ5IGZyb20gXCIuL1N0YWdlTG9iYnlcIjtcclxuaW1wb3J0IFN0YWdlTWdyLCB7IFN0YWdlcyB9IGZyb20gXCIuL1N0YWdlTWdyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhZ2VRUnNjYW4gZXh0ZW5kcyBTdGFnZSB7XHJcbiAgQHByb3BlcnR5KFFSQ29kZUdlbikgcXJDb2RlOiBRUkNvZGVHZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgSW5zdGFuY2U6IFN0YWdlUVJzY2FuID0gbnVsbDtcclxuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgU3RhZ2VRUnNjYW4uSW5zdGFuY2UgPSB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICBTb3VuZE1nci5wbGF5TXVzaWMoU291bmRNZ3IuSW5zdGFuY2UuQkdNKTtcclxuXHJcbiAgICBsZXQgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuICAgIGxldCB0aW1lckdvQmFjayA9IE51bWJlcih1cmxQYXJhbXMuZ2V0KFwidGltZXJfcXJcIikpIHx8IDMwMDAwO1xyXG4gICAgR2xvYmFsLkluc3RhbmNlLmJhY2tBcHBUaW1lID0gRGF0ZS5ub3coKSArIHRpbWVyR29CYWNrO1xyXG5cclxuICAgIHJldHVybjtcclxuICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgaWYgKFBlZXJNYW5hZ2VyLkluc3RhbmNlLnBlZXIgJiYgUGVlck1hbmFnZXIuSW5zdGFuY2Uuc2lwKSB7XHJcbiAgICAgICAgdGhpcy5xckNvZGUuY3JlYXRlUVIoKTtcclxuICAgICAgICBTdGFnZUxvYmJ5Lkluc3RhbmNlLnFyQ29kZS5jcmVhdGVRUigpO1xyXG4gICAgICAgIFN0YWdlTG9iYnkuSW5zdGFuY2UubGJsUm9vbUNvZGUuc3RyaW5nID1cclxuICAgICAgICAgIFwiXCIgKyB3aW5kb3cuY29udHJvbGxlclByZWZpeCArIFBlZXJNYW5hZ2VyLkluc3RhbmNlLnNpcDtcclxuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKEdsb2JhbC5JbnN0YW5jZS5iYWNrQXBwVGltZSAtIERhdGUubm93KCkgPCAwKSB7XHJcbiAgICAgICAgU3RhZ2VNZ3IuSW5zdGFuY2Uuc2VuZE1lc3NhZ2UoXCJiYWNrVG9BcHBcIik7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgIH1cclxuICAgIH0sIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgLy8gdXBkYXRlIChkdCkge31cclxuXHJcbiAgbmV4dFN0YWdlKGlzUmVtb3RlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIGlmIChpc1JlbW90ZSkge1xyXG4gICAgICBTb3VuZE1nci5wbGF5U2Z4KFNvdW5kTWdyLkluc3RhbmNlLlNGWF9CVVRUT04pO1xyXG4gICAgICBTdGFnZU1nci5zaG93KFN0YWdlcy5TdGFnZVN0YXJ0R2FtZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBTdGFnZU1nci5zaG93KFN0YWdlcy5TdGFnZVN0YXJ0R2FtZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/stage/StageStartGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0e252LdYfhIyIZLhk6PCy9f', 'StageStartGame');
// Scripts/stage/StageStartGame.ts

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
var SoundMgr_1 = require("../common/SoundMgr");
var Stage_1 = require("./Stage");
var StageMgr_1 = require("./StageMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StageStartGame = /** @class */ (function (_super) {
    __extends(StageStartGame, _super);
    function StageStartGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startButton = null;
        return _this;
    }
    StageStartGame_1 = StageStartGame;
    // LIFE-CYCLE CALLBACKS:
    StageStartGame.prototype.onLoad = function () {
        StageStartGame_1.Instance = this;
    };
    StageStartGame.prototype.nextStage = function (isRemote) {
        if (isRemote === void 0) { isRemote = false; }
        if (isRemote) {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            cc.tween(this.startButton)
                .to(0.1, { scale: 0.65 })
                .to(0.1, { scale: 0.5 })
                .call(function () {
                StageMgr_1.default.show(StageMgr_1.Stages.StageTestGame);
            })
                .start();
        }
        else {
            StageMgr_1.default.show(StageMgr_1.Stages.StageTestGame);
        }
    };
    var StageStartGame_1;
    StageStartGame.Instance = null;
    __decorate([
        property(cc.Node)
    ], StageStartGame.prototype, "startButton", void 0);
    StageStartGame = StageStartGame_1 = __decorate([
        ccclass
    ], StageStartGame);
    return StageStartGame;
}(Stage_1.default));
exports.default = StageStartGame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3RhZ2VcXFN0YWdlU3RhcnRHYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLCtDQUEwQztBQUMxQyxpQ0FBNEI7QUFDNUIsdUNBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTRDLGtDQUFLO0lBQWpEO1FBQUEscUVBeUJDO1FBeEJvQixpQkFBVyxHQUFZLElBQUksQ0FBQzs7SUF3QmpELENBQUM7dUJBekJvQixjQUFjO0lBS2pDLHdCQUF3QjtJQUV4QiwrQkFBTSxHQUFOO1FBQ0UsZ0JBQWMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxrQ0FBUyxHQUFULFVBQVUsUUFBeUI7UUFBekIseUJBQUEsRUFBQSxnQkFBeUI7UUFDakMsSUFBSSxRQUFRLEVBQUU7WUFDWixrQkFBUSxDQUFDLE9BQU8sQ0FBQyxrQkFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMvQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7aUJBQ3ZCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7aUJBQ3hCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUM7aUJBQ3ZCLElBQUksQ0FBQztnQkFDSixrQkFBUSxDQUFDLElBQUksQ0FBQyxpQkFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQztpQkFDRCxLQUFLLEVBQUUsQ0FBQztTQUNaO2FBQU07WUFDTCxrQkFBUSxDQUFDLElBQUksQ0FBQyxpQkFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7SUFyQk0sdUJBQVEsR0FBbUIsSUFBSSxDQUFDO0lBRnBCO1FBQWxCLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUE2QjtJQUQ1QixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBeUJsQztJQUFELHFCQUFDO0NBekJELEFBeUJDLENBekIyQyxlQUFLLEdBeUJoRDtrQkF6Qm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgU291bmRNZ3IgZnJvbSBcIi4uL2NvbW1vbi9Tb3VuZE1nclwiO1xyXG5pbXBvcnQgU3RhZ2UgZnJvbSBcIi4vU3RhZ2VcIjtcclxuaW1wb3J0IFN0YWdlTWdyLCB7IFN0YWdlcyB9IGZyb20gXCIuL1N0YWdlTWdyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhZ2VTdGFydEdhbWUgZXh0ZW5kcyBTdGFnZSB7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpIHN0YXJ0QnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIEluc3RhbmNlOiBTdGFnZVN0YXJ0R2FtZSA9IG51bGw7XHJcblxyXG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICBTdGFnZVN0YXJ0R2FtZS5JbnN0YW5jZSA9IHRoaXM7XHJcbiAgfVxyXG5cclxuICBuZXh0U3RhZ2UoaXNSZW1vdGU6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgaWYgKGlzUmVtb3RlKSB7XHJcbiAgICAgIFNvdW5kTWdyLnBsYXlTZngoU291bmRNZ3IuSW5zdGFuY2UuU0ZYX0JVVFRPTik7XHJcbiAgICAgIGNjLnR3ZWVuKHRoaXMuc3RhcnRCdXR0b24pXHJcbiAgICAgICAgLnRvKDAuMSwgeyBzY2FsZTogMC42NSB9KVxyXG4gICAgICAgIC50bygwLjEsIHsgc2NhbGU6IDAuNSB9KVxyXG4gICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgIFN0YWdlTWdyLnNob3coU3RhZ2VzLlN0YWdlVGVzdEdhbWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBTdGFnZU1nci5zaG93KFN0YWdlcy5TdGFnZVRlc3RHYW1lKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/utils/LocalizedFrame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8ba3d+Bn6NI76jJhS1uJSSp', 'LocalizedFrame');
// Scripts/utils/LocalizedFrame.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LocalizedFrame = /** @class */ (function (_super) {
    __extends(LocalizedFrame, _super);
    function LocalizedFrame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.EN = null;
        _this.VI = null;
        return _this;
    }
    LocalizedFrame.prototype.start = function () {
        var sprite = this.node.getComponent(cc.Sprite);
        var defaultSpriteFrame = sprite.spriteFrame;
        sprite.spriteFrame = this[window.language.toUpperCase()] || defaultSpriteFrame;
    };
    __decorate([
        property(cc.SpriteFrame)
    ], LocalizedFrame.prototype, "EN", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], LocalizedFrame.prototype, "VI", void 0);
    LocalizedFrame = __decorate([
        ccclass
    ], LocalizedFrame);
    return LocalizedFrame;
}(cc.Component));
exports.default = LocalizedFrame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcdXRpbHNcXExvY2FsaXplZEZyYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBVUM7UUFSNkIsUUFBRSxHQUFtQixJQUFJLENBQUM7UUFDMUIsUUFBRSxHQUFtQixJQUFJLENBQUM7O0lBT3hELENBQUM7SUFMRyw4QkFBSyxHQUFMO1FBQ0ksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLElBQUksa0JBQWtCLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUM1QyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksa0JBQWtCLENBQUM7SUFDbkYsQ0FBQztJQVB5QjtRQUF6QixRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs4Q0FBMkI7SUFDMUI7UUFBekIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7OENBQTJCO0lBSG5DLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FVbEM7SUFBRCxxQkFBQztDQVZELEFBVUMsQ0FWMkMsRUFBRSxDQUFDLFNBQVMsR0FVdkQ7a0JBVm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYWxpemVkRnJhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQgXHJcbntcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSkgRU46IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSkgVkk6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBsZXQgc3ByaXRlID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIGxldCBkZWZhdWx0U3ByaXRlRnJhbWUgPSBzcHJpdGUuc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpc1t3aW5kb3cubGFuZ3VhZ2UudG9VcHBlckNhc2UoKV0gfHwgZGVmYXVsdFNwcml0ZUZyYW1lO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/stage/StageLobby.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cd1c1/ESEpLhb7U8uTj4hYv', 'StageLobby');
// Scripts/stage/StageLobby.ts

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
var SoundMgr_1 = require("../common/SoundMgr");
var PeerManager_1 = require("../PeerComponent/PeerManager");
var QRCodeGen_1 = require("../PeerComponent/QRCodeGen");
var Stage_1 = require("./Stage");
var StageMgr_1 = require("./StageMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StageLobby = /** @class */ (function (_super) {
    __extends(StageLobby, _super);
    function StageLobby() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.qrCode = null;
        _this.btnNext = null;
        _this.lblRoomCode = null;
        _this.players = [];
        _this.normalSpine = null;
        _this.graySpine = null;
        _this.msg = null;
        return _this;
    }
    StageLobby_1 = StageLobby;
    // LIFE-CYCLE CALLBACKS:
    StageLobby.prototype.onLoad = function () {
        StageLobby_1.Instance = this;
    };
    StageLobby.prototype.start = function () {
        this.msg.string = "" + window.controllerOrigin;
    };
    StageLobby.prototype.onEnable = function () {
        return;
        for (var i = 0; i < 3; i++) {
            this.setUI(PeerManager_1.default.Instance.clientConnected[i] ? true : false, i);
        }
    };
    // update (dt) {}
    StageLobby.prototype.nextStage = function () {
        SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
        cc.tween(this.btnNext.node)
            .to(0.1, { scale: 0.65 })
            .to(0.1, { scale: 0.5 })
            .call(function () {
            StageMgr_1.default.show(StageMgr_1.Stages.StageInGame);
        })
            .start();
    };
    StageLobby.prototype.setUI = function (isConnected, index) {
        this.players[index].getChildByName("playerReady").active = isConnected;
        this.players[index].getChildByName("playerNotReady").active = !isConnected;
        this.players[index]
            .getChildByName("playerSprite")
            .getComponent(sp.Skeleton)
            .setMaterial(0, isConnected ? this.normalSpine : this.graySpine);
    };
    var StageLobby_1;
    StageLobby.Instance = null;
    __decorate([
        property(QRCodeGen_1.default)
    ], StageLobby.prototype, "qrCode", void 0);
    __decorate([
        property(cc.Button)
    ], StageLobby.prototype, "btnNext", void 0);
    __decorate([
        property(cc.Label)
    ], StageLobby.prototype, "lblRoomCode", void 0);
    __decorate([
        property(cc.Node)
    ], StageLobby.prototype, "players", void 0);
    __decorate([
        property(cc.Material)
    ], StageLobby.prototype, "normalSpine", void 0);
    __decorate([
        property(cc.Material)
    ], StageLobby.prototype, "graySpine", void 0);
    __decorate([
        property(cc.Label)
    ], StageLobby.prototype, "msg", void 0);
    StageLobby = StageLobby_1 = __decorate([
        ccclass
    ], StageLobby);
    return StageLobby;
}(Stage_1.default));
exports.default = StageLobby;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3RhZ2VcXFN0YWdlTG9iYnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsK0NBQTBDO0FBRTFDLDREQUF1RDtBQUN2RCx3REFBbUQ7QUFDbkQsaUNBQTRCO0FBQzVCLHVDQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBSztJQUE3QztRQUFBLHFFQWlEQztRQWhEc0IsWUFBTSxHQUFjLElBQUksQ0FBQztRQUN6QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBQzNCLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBQzlCLGFBQU8sR0FBYyxFQUFFLENBQUM7UUFDcEIsaUJBQVcsR0FBZ0IsSUFBSSxDQUFDO1FBQ2hDLGVBQVMsR0FBZ0IsSUFBSSxDQUFDO1FBQ2pDLFNBQUcsR0FBZ0IsSUFBSSxDQUFDOztJQTBDOUMsQ0FBQzttQkFqRG9CLFVBQVU7SUFXN0Isd0JBQXdCO0lBRXhCLDJCQUFNLEdBQU47UUFDRSxZQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUM3QixDQUFDO0lBRUQsMEJBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEtBQUcsTUFBTSxDQUFDLGdCQUFrQixDQUFDO0lBQ2pELENBQUM7SUFFRCw2QkFBUSxHQUFSO1FBQ0UsT0FBTztRQUNQLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3ZFO0lBQ0gsQ0FBQztJQUVELGlCQUFpQjtJQUVqQiw4QkFBUyxHQUFUO1FBQ0Usa0JBQVEsQ0FBQyxPQUFPLENBQUMsa0JBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzthQUN4QixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO2FBQ3hCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUM7YUFDdkIsSUFBSSxDQUFDO1lBQ0osa0JBQVEsQ0FBQyxJQUFJLENBQUMsaUJBQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFRCwwQkFBSyxHQUFMLFVBQU0sV0FBb0IsRUFBRSxLQUFhO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUM7UUFDdkUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFDM0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7YUFDaEIsY0FBYyxDQUFDLGNBQWMsQ0FBQzthQUM5QixZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzthQUN6QixXQUFXLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7O0lBdkNNLG1CQUFRLEdBQWUsSUFBSSxDQUFDO0lBUmQ7UUFBcEIsUUFBUSxDQUFDLG1CQUFTLENBQUM7OENBQTBCO0lBQ3pCO1FBQXBCLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUEyQjtJQUMzQjtRQUFuQixRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFBOEI7SUFDOUI7UUFBbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQXlCO0lBQ3BCO1FBQXRCLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO21EQUFpQztJQUNoQztRQUF0QixRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztpREFBK0I7SUFDakM7UUFBbkIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQXlCO0lBUHpCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FpRDlCO0lBQUQsaUJBQUM7Q0FqREQsQUFpREMsQ0FqRHVDLGVBQUssR0FpRDVDO2tCQWpEb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBTb3VuZE1nciBmcm9tIFwiLi4vY29tbW9uL1NvdW5kTWdyXCI7XHJcbmltcG9ydCBHYW1lRGVmaW5lIGZyb20gXCIuLi9nYW1lL0dhbWVEZWZpbmVcIjtcclxuaW1wb3J0IFBlZXJNYW5hZ2VyIGZyb20gXCIuLi9QZWVyQ29tcG9uZW50L1BlZXJNYW5hZ2VyXCI7XHJcbmltcG9ydCBRUkNvZGVHZW4gZnJvbSBcIi4uL1BlZXJDb21wb25lbnQvUVJDb2RlR2VuXCI7XHJcbmltcG9ydCBTdGFnZSBmcm9tIFwiLi9TdGFnZVwiO1xyXG5pbXBvcnQgU3RhZ2VNZ3IsIHsgU3RhZ2VzIH0gZnJvbSBcIi4vU3RhZ2VNZ3JcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFnZUxvYmJ5IGV4dGVuZHMgU3RhZ2Uge1xyXG4gIEBwcm9wZXJ0eShRUkNvZGVHZW4pIHFyQ29kZTogUVJDb2RlR2VuID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuQnV0dG9uKSBidG5OZXh0OiBjYy5CdXR0b24gPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5MYWJlbCkgbGJsUm9vbUNvZGU6IGNjLkxhYmVsID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSkgcGxheWVyczogY2MuTm9kZVtdID0gW107XHJcbiAgQHByb3BlcnR5KGNjLk1hdGVyaWFsKSBub3JtYWxTcGluZTogY2MuTWF0ZXJpYWwgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5NYXRlcmlhbCkgZ3JheVNwaW5lOiBjYy5NYXRlcmlhbCA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLkxhYmVsKSBtc2c6IGNjLlJpY2hUZXh0ID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIEluc3RhbmNlOiBTdGFnZUxvYmJ5ID0gbnVsbDtcclxuXHJcbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIFN0YWdlTG9iYnkuSW5zdGFuY2UgPSB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICB0aGlzLm1zZy5zdHJpbmcgPSBgJHt3aW5kb3cuY29udHJvbGxlck9yaWdpbn1gO1xyXG4gIH1cclxuXHJcbiAgb25FbmFibGUoKSB7XHJcbiAgICByZXR1cm47XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICB0aGlzLnNldFVJKFBlZXJNYW5hZ2VyLkluc3RhbmNlLmNsaWVudENvbm5lY3RlZFtpXSA/IHRydWUgOiBmYWxzZSwgaSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyB1cGRhdGUgKGR0KSB7fVxyXG5cclxuICBuZXh0U3RhZ2UoKSB7XHJcbiAgICBTb3VuZE1nci5wbGF5U2Z4KFNvdW5kTWdyLkluc3RhbmNlLlNGWF9CVVRUT04pO1xyXG4gICAgY2MudHdlZW4odGhpcy5idG5OZXh0Lm5vZGUpXHJcbiAgICAgIC50bygwLjEsIHsgc2NhbGU6IDAuNjUgfSlcclxuICAgICAgLnRvKDAuMSwgeyBzY2FsZTogMC41IH0pXHJcbiAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICBTdGFnZU1nci5zaG93KFN0YWdlcy5TdGFnZUluR2FtZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgc2V0VUkoaXNDb25uZWN0ZWQ6IGJvb2xlYW4sIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMucGxheWVyc1tpbmRleF0uZ2V0Q2hpbGRCeU5hbWUoXCJwbGF5ZXJSZWFkeVwiKS5hY3RpdmUgPSBpc0Nvbm5lY3RlZDtcclxuICAgIHRoaXMucGxheWVyc1tpbmRleF0uZ2V0Q2hpbGRCeU5hbWUoXCJwbGF5ZXJOb3RSZWFkeVwiKS5hY3RpdmUgPSAhaXNDb25uZWN0ZWQ7XHJcbiAgICB0aGlzLnBsYXllcnNbaW5kZXhdXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInBsYXllclNwcml0ZVwiKVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAuc2V0TWF0ZXJpYWwoMCwgaXNDb25uZWN0ZWQgPyB0aGlzLm5vcm1hbFNwaW5lIDogdGhpcy5ncmF5U3BpbmUpO1xyXG4gIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/utils/LocalizedText.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd9adbSs7VdIeaPiYGmWgXvR', 'LocalizedText');
// Scripts/utils/LocalizedText.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LocalizedText = /** @class */ (function (_super) {
    __extends(LocalizedText, _super);
    function LocalizedText() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.EN = "";
        _this.VI = "";
        return _this;
    }
    LocalizedText.prototype.start = function () {
        var text = this.node.getComponent(cc.Label);
        var defaultText = text.string;
        text.string = this[window.language.toUpperCase()] || defaultText;
    };
    __decorate([
        property({ type: String, multiline: true, })
    ], LocalizedText.prototype, "EN", void 0);
    __decorate([
        property({ type: String, multiline: true, })
    ], LocalizedText.prototype, "VI", void 0);
    LocalizedText = __decorate([
        ccclass
    ], LocalizedText);
    return LocalizedText;
}(cc.Component));
exports.default = LocalizedText;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcdXRpbHNcXExvY2FsaXplZFRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUFTQztRQVJpRCxRQUFFLEdBQVcsRUFBRSxDQUFDO1FBQ2hCLFFBQUUsR0FBVyxFQUFFLENBQUM7O0lBT2xFLENBQUM7SUFMRyw2QkFBSyxHQUFMO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQztJQUNyRSxDQUFDO0lBUDZDO1FBQTdDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksR0FBRyxDQUFDOzZDQUFpQjtJQUNoQjtRQUE3QyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLEdBQUcsQ0FBQzs2Q0FBaUI7SUFGN0MsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQVNqQztJQUFELG9CQUFDO0NBVEQsQUFTQyxDQVQwQyxFQUFFLENBQUMsU0FBUyxHQVN0RDtrQkFUb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhbGl6ZWRUZXh0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZywgbXVsdGlsaW5lOiB0cnVlLCB9KSBFTjogc3RyaW5nID0gXCJcIjtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZywgbXVsdGlsaW5lOiB0cnVlLCB9KSBWSTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBsZXQgdGV4dCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIGxldCBkZWZhdWx0VGV4dCA9IHRleHQuc3RyaW5nO1xyXG4gICAgICAgIHRleHQuc3RyaW5nID0gdGhpc1t3aW5kb3cubGFuZ3VhZ2UudG9VcHBlckNhc2UoKV0gfHwgZGVmYXVsdFRleHQ7XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/stage/Stage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd1579TpISVNGpuqBRR5e3Kh', 'Stage');
// Scripts/stage/Stage.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Stage = /** @class */ (function (_super) {
    __extends(Stage, _super);
    function Stage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Stage.prototype.init = function () {
    };
    Stage = __decorate([
        ccclass
    ], Stage);
    return Stage;
}(cc.Component));
exports.default = Stage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3RhZ2VcXFN0YWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW1DLHlCQUFZO0lBQS9DOztJQUtBLENBQUM7SUFIVSxvQkFBSSxHQUFYO0lBRUEsQ0FBQztJQUpnQixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBS3pCO0lBQUQsWUFBQztDQUxELEFBS0MsQ0FMa0MsRUFBRSxDQUFDLFNBQVMsR0FLOUM7a0JBTG9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhZ2UgZXh0ZW5kcyBjYy5Db21wb25lbnQgXHJcbntcclxuICAgIHB1YmxpYyBpbml0KCl7XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/stage/StageTestGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0c894rNk45KaZ1YxbpCwkvS', 'StageTestGame');
// Scripts/stage/StageTestGame.ts

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
var Stage_1 = require("./Stage");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StageTestGame = /** @class */ (function (_super) {
    __extends(StageTestGame, _super);
    function StageTestGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ballHolder = null;
        return _this;
        // update (dt) {}
    }
    StageTestGame.prototype.start = function () {
        // this.node.children.forEach((element) => {
        //   element.active = true;
        // });
    };
    __decorate([
        property(cc.Node)
    ], StageTestGame.prototype, "ballHolder", void 0);
    StageTestGame = __decorate([
        ccclass
    ], StageTestGame);
    return StageTestGame;
}(Stage_1.default));
exports.default = StageTestGame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3RhZ2VcXFN0YWdlVGVzdEdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsaUNBQTRCO0FBRXRCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFLO0lBQWhEO1FBQUEscUVBU0M7UUFSb0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7O1FBTzlDLGlCQUFpQjtJQUNuQixDQUFDO0lBUFcsNkJBQUssR0FBZjtRQUNFLDRDQUE0QztRQUM1QywyQkFBMkI7UUFDM0IsTUFBTTtJQUVSLENBQUM7SUFOa0I7UUFBbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQTRCO0lBRDNCLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0FTakM7SUFBRCxvQkFBQztDQVRELEFBU0MsQ0FUMEMsZUFBSyxHQVMvQztrQkFUb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBTdGFnZSBmcm9tIFwiLi9TdGFnZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YWdlVGVzdEdhbWUgZXh0ZW5kcyBTdGFnZSB7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpIGJhbGxIb2xkZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgIC8vIHRoaXMubm9kZS5jaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAvLyAgIGVsZW1lbnQuYWN0aXZlID0gdHJ1ZTtcclxuICAgIC8vIH0pO1xyXG5cclxuICB9XHJcbiAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/utils/ObjectMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dbc77ws+sxPlY9zPANdJYTf', 'ObjectMgr');
// Scripts/utils/ObjectMgr.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ObjectMgr = /** @class */ (function (_super) {
    __extends(ObjectMgr, _super);
    function ObjectMgr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObjectMgr.prototype.load = function (prefab, poolSize) {
        // for (let i = 0; i < poolSize; i++) {
        //     const node = cc.instantiate(prefab);
        //     // node.getComponent(GameObject).load();
        //     node.active = false;
        //     this.node.addChild(node);
        // }
        // this.hide();
    };
    ObjectMgr.prototype.init = function () {
        this.hide();
    };
    ObjectMgr.prototype.hide = function () {
        for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
            var item = _a[_i];
            item.active = false;
        }
    };
    ObjectMgr.prototype.spawn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    ObjectMgr.prototype.getAvailable = function () {
        for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
            var item = _a[_i];
            if (!item.active) {
                return item;
            }
        }
        return null;
    };
    ObjectMgr = __decorate([
        ccclass
    ], ObjectMgr);
    return ObjectMgr;
}(cc.Component));
exports.default = ObjectMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcdXRpbHNcXE9iamVjdE1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQUFuRDs7SUFrQ0EsQ0FBQztJQWpDRyx3QkFBSSxHQUFKLFVBQUssTUFBaUIsRUFBRSxRQUFnQjtRQUNwQyx1Q0FBdUM7UUFDdkMsMkNBQTJDO1FBQzNDLCtDQUErQztRQUMvQywyQkFBMkI7UUFDM0IsZ0NBQWdDO1FBQ2hDLElBQUk7UUFDSixlQUFlO0lBQ25CLENBQUM7SUFFRCx3QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCx3QkFBSSxHQUFKO1FBQ0ksS0FBaUIsVUFBa0IsRUFBbEIsS0FBQSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBbEIsY0FBa0IsRUFBbEIsSUFBa0IsRUFBRTtZQUFoQyxJQUFJLElBQUksU0FBQTtZQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQUVELHlCQUFLLEdBQUw7UUFBTSxjQUFPO2FBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztZQUFQLHlCQUFPOztJQUViLENBQUM7SUFFRCxnQ0FBWSxHQUFaO1FBQ0ksS0FBaUIsVUFBa0IsRUFBbEIsS0FBQSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBbEIsY0FBa0IsRUFBbEIsSUFBa0IsRUFBRTtZQUFoQyxJQUFJLElBQUksU0FBQTtZQUNULElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNkLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7U0FDSjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFqQ2dCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FrQzdCO0lBQUQsZ0JBQUM7Q0FsQ0QsQUFrQ0MsQ0FsQ3NDLEVBQUUsQ0FBQyxTQUFTLEdBa0NsRDtrQkFsQ29CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0TWdyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIGxvYWQocHJlZmFiOiBjYy5QcmVmYWIsIHBvb2xTaXplOiBudW1iZXIpIHtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHBvb2xTaXplOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgY29uc3Qgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgLy8gICAgIC8vIG5vZGUuZ2V0Q29tcG9uZW50KEdhbWVPYmplY3QpLmxvYWQoKTtcclxuICAgICAgICAvLyAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLm5vZGUuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3Bhd24oLi4uYXJncykge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRBdmFpbGFibGUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLm5vZGUuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgaWYgKCFpdGVtLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/utils/GameObject.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ac648lWW65FVL6lqaVqOgIb', 'GameObject');
// Scripts/utils/GameObject.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameObject = /** @class */ (function (_super) {
    __extends(GameObject, _super);
    function GameObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameObject.prototype.load = function () {
    };
    GameObject.prototype.kill = function () {
        this.node.active = false;
    };
    GameObject = __decorate([
        ccclass
    ], GameObject);
    return GameObject;
}(cc.Component));
exports.default = GameObject;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcdXRpbHNcXEdhbWVPYmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7O0lBU0EsQ0FBQztJQVBHLHlCQUFJLEdBQUo7SUFFQSxDQUFDO0lBRUQseUJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBUmdCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FTOUI7SUFBRCxpQkFBQztDQVRELEFBU0MsQ0FUdUMsRUFBRSxDQUFDLFNBQVMsR0FTbkQ7a0JBVG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU9iamVjdCBleHRlbmRzIGNjLkNvbXBvbmVudCBcclxue1xyXG4gICAgbG9hZCgpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGtpbGwoKXtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------
