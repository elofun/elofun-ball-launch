
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