
(function () {
var scripts = [{"deps":{"./assets/strings":8,"./assets/Scripts/Loader":20,"./assets/Scripts/cuboid":22,"./assets/Scripts/diamond":21,"./assets/Scripts/PeerComponent/PeerDefine":26,"./assets/Scripts/Popups/Popup":10,"./assets/Scripts/common/Global":30,"./assets/Scripts/common/Spinner":33,"./assets/Scripts/game/GameDefine":14,"./assets/Scripts/gameplay/FadeWall":39,"./assets/Scripts/gameplay/Spawn":41,"./assets/Scripts/gameplay/Ball/Trail":43,"./assets/Scripts/gameplay/Level/GameplayLevelDesgin":17,"./assets/Scripts/gameplay/Sound/Sound":15,"./assets/Scripts/gameplay/TrajectoryLine/TrajectoryLine":16,"./assets/Scripts/stage/Stage":52,"./assets/Scripts/utils/LocalizedFrame":49,"./assets/Scripts/utils/LocalizedText":51,"./assets/Scripts/utils/ObjectMgr":54,"./assets/Scripts/utils/Singleton":55,"./assets/Scripts/utils/SingletonNode":56,"./assets/Scripts/utils/Timer":58,"./assets/Scripts/utils/GameObject":57,"./assets/levelDesign":1,"./assets/Scripts/collisionReset":24,"./assets/Scripts/playerBall":28,"./assets/Scripts/playGround":9,"./assets/Scripts/playerBallHitBox":25,"./assets/Scripts/AudioController":27,"./assets/Scripts/PeerComponent/PeerClientManager":2,"./assets/Scripts/PeerComponent/PeerManager":12,"./assets/Scripts/PeerComponent/QRCodeGen":23,"./assets/Scripts/PeerComponent/PeerAction":11,"./assets/Scripts/Popups/PopupManager":29,"./assets/Scripts/common/LoadingCover":13,"./assets/Scripts/common/Localization":31,"./assets/Scripts/common/LoadingIcon":36,"./assets/Scripts/common/SoundMgr":32,"./assets/Scripts/common/Events":37,"./assets/Scripts/game/GameManager":34,"./assets/Scripts/game/FrameMgr":35,"./assets/Scripts/gameplay/GamePlayManager":38,"./assets/Scripts/gameplay/TimeNeedTouch":44,"./assets/Scripts/gameplay/LevelManager":40,"./assets/Scripts/gameplay/Ball":42,"./assets/Scripts/stage/StageGameEnd":46,"./assets/Scripts/stage/StageLobby":50,"./assets/Scripts/stage/StageInGame":3,"./assets/Scripts/stage/StageMgr":7,"./assets/Scripts/stage/StageQRscan":47,"./assets/Scripts/stage/StageStartGame":48,"./assets/Scripts/stage/StageTestGame":53,"./assets/Scripts/ui/UIMgr":4,"./assets/Scripts/utils/Helper":5,"./assets/Scripts/gameplay/Ball/BallPhysics":6,"./assets/Scripts/gameplay/Particle/ParticleManager":18,"./assets/Scripts/gameplay/Wall/WinDetect":19,"./assets/Scripts/gameplay/Wall/ObstaclesWallSpawner":45},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/levelDesign.js"},{"deps":{"./PeerDefine":26,"./PeerManager":12},"path":"preview-scripts/assets/Scripts/PeerComponent/PeerClientManager.js"},{"deps":{"./Stage":52,"../playGround":9,"./StageGameEnd":46,"../PeerComponent/PeerAction":11,"../PeerComponent/PeerManager":12},"path":"preview-scripts/assets/Scripts/stage/StageInGame.js"},{"deps":{"../utils/Helper":5,"../utils/SingletonNode":56},"path":"preview-scripts/assets/Scripts/ui/UIMgr.js"},{"deps":{"../PeerComponent/PeerManager":12},"path":"preview-scripts/assets/Scripts/utils/Helper.js"},{"deps":{"../Particle/ParticleManager":18,"../GamePlayManager":38},"path":"preview-scripts/assets/Scripts/gameplay/Ball/BallPhysics.js"},{"deps":{"./Stage":52,"../utils/Helper":5,"../utils/SingletonNode":56,"../PeerComponent/PeerManager":12,"./StageQRscan":47,"./StageLobby":50,"./StageInGame":3,"./StageGameEnd":46,"../PeerComponent/PeerDefine":26,"./StageStartGame":48},"path":"preview-scripts/assets/Scripts/stage/StageMgr.js"},{"deps":{},"path":"preview-scripts/assets/strings.js"},{"deps":{"../levelDesign.js":1,"./game/GameDefine":14,"./PeerComponent/PeerManager":12,"./stage/StageInGame":3,"./common/SoundMgr":32,"./diamond":21,"./cuboid":22},"path":"preview-scripts/assets/Scripts/playGround.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Popups/Popup.js"},{"deps":{"./PeerClientManager":2,"./PeerDefine":26,"./PeerManager":12},"path":"preview-scripts/assets/Scripts/PeerComponent/PeerAction.js"},{"deps":{"../game/GameDefine":14,"../stage/StageInGame":3,"../stage/StageLobby":50,"../stage/StageMgr":7,"./PeerDefine":26},"path":"preview-scripts/assets/Scripts/PeerComponent/PeerManager.js"},{"deps":{"../utils/SingletonNode":56},"path":"preview-scripts/assets/Scripts/common/LoadingCover.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/game/GameDefine.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/gameplay/Sound/Sound.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/gameplay/TrajectoryLine/TrajectoryLine.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/gameplay/Level/GameplayLevelDesgin.js"},{"deps":{"../Spawn":41},"path":"preview-scripts/assets/Scripts/gameplay/Particle/ParticleManager.js"},{"deps":{"../GamePlayManager":38},"path":"preview-scripts/assets/Scripts/gameplay/Wall/WinDetect.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Loader.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/diamond.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/cuboid.js"},{"deps":{"../common/Global":30,"../stage/StageMgr":7,"../utils/Helper":5},"path":"preview-scripts/assets/Scripts/PeerComponent/QRCodeGen.js"},{"deps":{"./playGround":9,"./cuboid":22},"path":"preview-scripts/assets/Scripts/collisionReset.js"},{"deps":{"./common/SoundMgr":32,"./diamond":21,"./playGround":9,"./game/GameDefine":14},"path":"preview-scripts/assets/Scripts/playerBallHitBox.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/PeerComponent/PeerDefine.js"},{"deps":{"./utils/SingletonNode":56},"path":"preview-scripts/assets/Scripts/AudioController.js"},{"deps":{"./playGround":9},"path":"preview-scripts/assets/Scripts/playerBall.js"},{"deps":{"../utils/Helper":5,"../utils/SingletonNode":56},"path":"preview-scripts/assets/Scripts/Popups/PopupManager.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/common/Global.js"},{"deps":{"../../strings":8,"./Events":37},"path":"preview-scripts/assets/Scripts/common/Localization.js"},{"deps":{"../utils/SingletonNode":56},"path":"preview-scripts/assets/Scripts/common/SoundMgr.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/common/Spinner.js"},{"deps":{"../AudioController":27,"../utils/SingletonNode":56},"path":"preview-scripts/assets/Scripts/game/GameManager.js"},{"deps":{"../utils/SingletonNode":56},"path":"preview-scripts/assets/Scripts/game/FrameMgr.js"},{"deps":{"./Spinner":33},"path":"preview-scripts/assets/Scripts/common/LoadingIcon.js"},{"deps":{"../utils/SingletonNode":56},"path":"preview-scripts/assets/Scripts/common/Events.js"},{"deps":{"./LevelManager.js":40,"../utils/SingletonNode":56,"./FadeWall":39,"./TimeNeedTouch":44},"path":"preview-scripts/assets/Scripts/gameplay/GamePlayManager.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/gameplay/FadeWall.js"},{"deps":{"../gameplay/Level/GameplayLevelDesgin.js":17,"../utils/SingletonNode":56,"./Wall/ObstaclesWallSpawner":45,"./TimeNeedTouch":44,"./GamePlayManager":38,"./Ball":42,"./FadeWall":39},"path":"preview-scripts/assets/Scripts/gameplay/LevelManager.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/gameplay/Spawn.js"},{"deps":{"./TrajectoryLine/TrajectoryLine":16},"path":"preview-scripts/assets/Scripts/gameplay/Ball.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/gameplay/Ball/Trail.js"},{"deps":{"./GamePlayManager":38},"path":"preview-scripts/assets/Scripts/gameplay/TimeNeedTouch.js"},{"deps":{"../Spawn":41},"path":"preview-scripts/assets/Scripts/gameplay/Wall/ObstaclesWallSpawner.js"},{"deps":{"../common/SoundMgr":32,"../game/GameDefine":14,"../PeerComponent/PeerDefine":26,"../PeerComponent/PeerManager":12,"./Stage":52,"./StageMgr":7},"path":"preview-scripts/assets/Scripts/stage/StageGameEnd.js"},{"deps":{"../common/Global":30,"../common/SoundMgr":32,"../PeerComponent/PeerManager":12,"./Stage":52,"../PeerComponent/QRCodeGen":23,"./StageLobby":50,"./StageMgr":7},"path":"preview-scripts/assets/Scripts/stage/StageQRscan.js"},{"deps":{"../common/SoundMgr":32,"./StageMgr":7,"./Stage":52},"path":"preview-scripts/assets/Scripts/stage/StageStartGame.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/utils/LocalizedFrame.js"},{"deps":{"../common/SoundMgr":32,"../PeerComponent/PeerManager":12,"../PeerComponent/QRCodeGen":23,"./Stage":52,"./StageMgr":7},"path":"preview-scripts/assets/Scripts/stage/StageLobby.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/utils/LocalizedText.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/stage/Stage.js"},{"deps":{"./Stage":52},"path":"preview-scripts/assets/Scripts/stage/StageTestGame.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/utils/ObjectMgr.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/utils/Singleton.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/utils/SingletonNode.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/utils/GameObject.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/utils/Timer.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    