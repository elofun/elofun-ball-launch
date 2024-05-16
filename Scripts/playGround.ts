import GameDefine from "./game/GameDefine";
import PeerManager from "./PeerComponent/PeerManager";
import StageGameEnd from "./stage/StageGameEnd";
import StageInGame from "./stage/StageInGame";
import * as levelDesign from '../levelDesign.js'
import SoundMgr from "./common/SoundMgr";
import Cuboid from "./cuboid";
import Diamond from "./diamond";

const { ccclass, property } = cc._decorator;

@ccclass
export default class playGround extends cc.Component {

    @property(cc.Node) cuboid: cc.Node = null;
    @property(cc.Node) diamond: cc.Node = null;
    @property(cc.Node) cuboidContainer: cc.Node = null;
    @property(cc.Node) cuboidBase: cc.Node = null;
    @property(cc.Node) playerBall: cc.Node = null;
    @property(cc.Label) lblScore: cc.Label = null;
    @property(cc.Node) bg: cc.Node = null;
    @property(cc.SpriteFrame) dragonSP: cc.SpriteFrame[] = [];
    @property(cc.Node) diamondContainer: cc.Node = null;
    @property(cc.Node) endGamePopup: cc.Node = null;
    @property(cc.Label) bannerLabel: cc.Label = null;
    @property(cc.Label) popupLabel: cc.Label = null;

    public playerIndex: number = 0;
    private previousCuboid: cc.Node = null;
    private distance: cc.Vec2 = cc.v2(100 * Math.cos(45 * Math.PI / 180), 100 * Math.cos(45 * Math.PI / 180));
    private initialDistance: cc.Vec2 = cc.v2(100 * Math.cos(45 * Math.PI / 180), 0 * Math.cos(45 * Math.PI / 180));
    private isMoveLeft: boolean = false;
    public isPlayerDead: boolean = false;
    private score: number = 0;
    public diamondPool: cc.NodePool = new cc.NodePool();
    public extraCuboidPool: cc.NodePool = new cc.NodePool();
    public isReady: boolean = false;
    private isSpawnLeft: boolean = false;
    private currentLevel: number = 0;
    private cubiodCount: number = 0;
    private isChangingDirection: boolean = false;
    private dragonSpine: sp.Skeleton = null;
    private dragonSkin: string[] = ["Char3", "Char2", "Char1"];
    public bgSpriteFrame: cc.SpriteFrame = null;
    public roadSpriteFrame: cc.SpriteFrame = null;
    public objectsSpriteFrame: cc.SpriteFrame[] = null;

    private playerPos = new cc.Vec2(0, 0);

    onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, (event) => {
            if (PeerManager.Instance.isPlayWithRemote && this.playerIndex == 0) {
                if (event.keyCode == 13) {
                    this.changeDirection();
                }
            }
        })

        let initCount = 10;
        for (let i = 0; i < initCount; ++i) {
            let diamond = cc.instantiate(this.diamond);
            this.diamondPool.put(diamond);
        }

        let initExtraCount = 30;
        for (let i = 0; i < initExtraCount; ++i) {
            let extraCuboid = cc.instantiate(this.cuboid);
            this.extraCuboidPool.put(extraCuboid);
        }

        this.dragonSpine = this.playerBall.getChildByName("playerChar").getComponent(sp.Skeleton);
    }

    start() {
        this.playerBall.zIndex = 999;
        this.cuboidBase.zIndex = 0;

        for (let i = 0; i < 15; i++) {
            this.createCuboid();
        }

        this.dragonSpine.setSkin(this.dragonSkin[this.playerIndex]);

        this.bg.getComponent(cc.Sprite).spriteFrame = this.bgSpriteFrame;
        this.cuboidBase.getChildByName("frontFace").getComponent(cc.Sprite).spriteFrame =
            this.roadSpriteFrame;
    }

    changeDirection() {
        if (!this.isPlayerDead && this.isReady && !this.isChangingDirection) {
            this.isMoveLeft = !this.isMoveLeft;
            this.isChangingDirection = true;
            cc.tween(this.playerBall).to(0.15, {
                angle: this.isMoveLeft ? 45 : -45,
            }).call(() => {
                this.isChangingDirection = false;
            }).start();
            this.scoreUpdate();
        }
    }

    createCuboid(newCuboid: cc.Node = cc.instantiate(this.cuboid)) {
        newCuboid.getChildByName("frontFace").getComponent(cc.Sprite).spriteFrame =
            this.roadSpriteFrame;

        const nextLevel = levelDesign[this.currentLevel + 1];
        if (nextLevel) {
            if (++this.cubiodCount >= nextLevel.startIndex) {
                this.currentLevel++;
            }
        }

        const currentLevel = levelDesign[this.currentLevel];

        if (this.previousCuboid) {
            let random = Math.random();
            let splitValue = 0;
            if (random < currentLevel.doubleWay2Rate) {
                splitValue = 2;
                if (this.previousCuboid.x < -105 || this.previousCuboid.x > 105) {
                    splitValue = 0;
                } else if (this.previousCuboid.x < -70 || this.previousCuboid.x > 70) {
                    splitValue = 1;
                }
            } else if (random < currentLevel.doubleWay2Rate + currentLevel.doubleWay1Rate) {
                splitValue = 1;
                if (this.previousCuboid.x < -105 || this.previousCuboid.x > 105) {
                    splitValue = 0;
                }
            } else {
                splitValue = 0;
            }

            switch (splitValue) {
                case 0:
                    if (Math.random() < currentLevel.directionChangeRate) {
                        this.isSpawnLeft = !this.isSpawnLeft;
                    }
                    if (this.previousCuboid.x < -140) {
                        this.isSpawnLeft = false;
                    } else if (this.previousCuboid.x > 140) {
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
                        let objectSprite = newCuboid.getChildByName("objectRandom").getChildByName("objectSprite");
                        newCuboid.getChildByName("objectRandom").active = true;
                        objectSprite.getComponent(cc.Sprite).spriteFrame =
                            this.objectsSpriteFrame[Math.floor(Math.random() * this.objectsSpriteFrame.length)];
                        objectSprite.x = newCuboid.x > 0 ? -400 : 400;
                    } else {
                        newCuboid.getChildByName("objectRandom").active = false;
                    }
                    break;
                case 1:
                    let prevX = this.previousCuboid.x;
                    let prevY = this.previousCuboid.y;
                    setTimeout(() => {
                        this.createExtraCuboid(-this.distance.x + prevX, prevY + this.distance.y, [false, true, false, true]);
                    }, 50)
                    setTimeout(() => {
                        this.createExtraCuboid(this.distance.x + prevX, prevY + this.distance.y, [true, false, true, false]);
                    }, 100)
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
                    let previousX = this.previousCuboid.x;
                    let previousY = this.previousCuboid.y;
                    setTimeout(() => {
                        this.createExtraCuboid(-this.distance.x + previousX, previousY + this.distance.y, [false, true, true, false]);
                    }, 50);
                    setTimeout(() => {
                        this.createExtraCuboid(this.distance.x + previousX, previousY + this.distance.y, [true, false, false, true]);
                    }, 100);
                    setTimeout(() => {
                        this.createExtraCuboid(-this.distance.x * 2 + previousX, previousY + this.distance.y * 2, [false, true, false, true]);
                    }, 150);
                    setTimeout(() => {
                        this.createExtraCuboid(this.distance.x * 2 + previousX, previousY + this.distance.y * 2, [true, false, true, false]);
                    }, 200);
                    setTimeout(() => {
                        this.createExtraCuboid(-this.distance.x + previousX, previousY + this.distance.y * 3, [true, false, false, true]);
                    }, 250);
                    setTimeout(() => {
                        this.createExtraCuboid(this.distance.x + previousX, previousY + this.distance.y * 3, [false, true, true, false]);
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
        } else {
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

        let isDiamondActive = Math.random() < currentLevel.diamondSpawnRate;
        if (isDiamondActive) {
            let newDiamond = this.createDiamond(newCuboid.x, newCuboid.y + 85);
            newCuboid.getComponent(Cuboid).diamond = newDiamond;
        } else {
            newCuboid.getComponent(Cuboid).diamond = null;
        }
    }

    createDiamond(x, y) {
        let newDiamond = null;
        if (this.diamondPool.size() > 0) {
            newDiamond = this.diamondPool.get();
        } else {
            newDiamond = cc.instantiate(this.diamond);
        }
        newDiamond.x = x;
        newDiamond.y = y;
        newDiamond.parent = this.diamondContainer;
        newDiamond.getComponent(Diamond).diamondSprite.node.active = true;
        newDiamond.getComponent(Diamond).diamondParticle.node.active = false;
        newDiamond.getComponent(Diamond).lblScorePlus.node.active = false;

        return newDiamond;
    }

    createExtraCuboid(x, y, isActiveArr: boolean[] = [true, true, true, true]) {
        let cuboid = null;
        if (this.extraCuboidPool.size() > 0) {
            cuboid = this.extraCuboidPool.get();
        } else {
            cuboid = cc.instantiate(this.cuboid);
        }
        cuboid.x = x;
        cuboid.y = y;
        cuboid.getChildByName("frontFace").getComponent(cc.Sprite)
            .spriteFrame = this.roadSpriteFrame;
        cuboid.parent = this.cuboidContainer;
        cuboid.name = "ExtraCuboid";
        cuboid.zIndex = -cuboid.y / 70;

        let isDiamondActive = Math.random() < levelDesign[this.currentLevel].diamondSpawnRate;
        if (isDiamondActive) {
            let newDiamond = this.createDiamond(x, y + 85);
            cuboid.getComponent(Cuboid).diamond = newDiamond;
        } else {
            cuboid.getComponent(Cuboid).diamond = null;
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
    }

    ballMoveScheduler(dt) {
        if (this.isPlayerDead) {
            SoundMgr.playSfx(SoundMgr.Instance.SFX_EXPLODE);
            this.unschedule(this.ballMoveScheduler);
            this.dragonSpine.timeScale = 1;
            this.dragonSpine.setAnimation(0, "Crash_Animation", false);
            this.dragonSpine.setCompleteListener(() => {
                StageInGame.Instance.setGameOver(this.playerIndex, true);
                this.showPopupEndGame();
                this.diamondPool.clear();
                this.extraCuboidPool.clear();
            })
        }

        let vec = new cc.Vec2(0, 0);
        cc.Vec2.lerp(vec, this.playerBall.getPosition(), this.playerBall.getPosition().clone().add(new cc.Vec2((this.isMoveLeft ? -1 : 1) * dt * this.distance.x * 2.5, dt * this.distance.y * 2.5)), 1);
        this.playerBall.setPosition(vec);
        cc.Vec2.lerp(vec, this.bg.parent.getPosition(), this.bg.parent.getPosition().clone().add(new cc.Vec2(0, -(dt * this.distance.y * 2.5))), 1);
        this.bg.parent.setPosition(vec);
        if (this.bg.parent.y <= -1080) {
            this.bg.parent.y += 720;
            this.diamondContainer.y -= 720;
            this.cuboidContainer.y -= 720;
        }
    }

    showPopupEndGame() {
        this.endGamePopup.active = true;
        cc.tween(this.endGamePopup).to(0.3, { scale: 1 }, { easing: 'bounceOut' }).start();
        this.popupLabel.string = `${GameDefine.player} ${this.playerIndex + 1} ${GameDefine.died}`;
        this.bannerLabel.string = GameDefine.gameover;
    }

    showMessagePlayerDisconnect(disconnectMessage: string) {
        if (!disconnectMessage) return;
        this.popupLabel.string = disconnectMessage;
        this.bannerLabel.string = GameDefine.disconnect;
    }

    startMoveBall() {
        this.schedule(this.ballMoveScheduler);
        this.isReady = true;
        this.isPlayerDead = false;
    }

    scoreUpdate(scoreAdd: number = 1) {
        this.score += scoreAdd;
        this.lblScore.string = this.score.toString();
        cc.tween(this.lblScore.node).to(0.1, { scale: 1.2 }).to(0.1, { scale: 1 }).start();
        StageInGame.Instance.playerScore[this.playerIndex] = this.score;
    }
}
