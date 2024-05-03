import Stage from "./Stage";
import StageGameEnd from "./StageGameEnd";
import playGround from "../playGround";
import PeerManager, { IDataReceived } from "../PeerComponent/PeerManager";
import PeerAction from "../PeerComponent/PeerAction";
import { PeerActionType, PeerPhase } from "../PeerComponent/PeerDefine";

const { ccclass, property } = cc._decorator;

@ccclass
export default class StageInGame extends Stage {

    @property(cc.Prefab) playGround: cc.Prefab = null;
    @property(cc.Node) container: cc.Node = null;
    @property(cc.Node) playerAvatar: cc.Node[] = [];
    @property(cc.SpriteFrame) playerRankSpriteFrames: cc.SpriteFrame[] = [];
    @property(cc.Material) normalSprite: cc.Material = null;
    @property(cc.Material) graySprite: cc.Material = null;
    @property(cc.Node) tutorialPopup: cc.Node = null;
    @property(cc.Label) lblTimer: cc.Label = null;
    @property(cc.SpriteFrame) bgSpriteFrames: cc.SpriteFrame[] = [];
    @property(cc.SpriteFrame) roadSpriteFrames: cc.SpriteFrame[] = [];
    @property(cc.SpriteFrame) objectsSpriteFrame1: cc.SpriteFrame[] = [];
    @property(cc.SpriteFrame) objectsSpriteFrame2: cc.SpriteFrame[] = [];
    @property(cc.SpriteFrame) objectsSpriteFrame3: cc.SpriteFrame[] = [];

    static Instance: StageInGame = null;

    public isDead: boolean[] = [];
    public isGameOver: boolean[] = [];
    public playerScore: number[] = [];
    private avatarPositionY: number[] = [50, -125, -300];
    private connectedPlayerIndex: number[] = [];
    private rankUpdateInterval = null;
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        StageInGame.Instance = this;
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    }

    initial() {
        for (let child of this.container.children) {
            if (child.getComponent(PeerAction)) {
                child.getComponent(PeerAction).playerSIP = -1;
            }
        }
        this.container.removeAllChildren();

        this.connectedPlayerIndex = [];

        let bgIndexArr = [0, 1, 2];
        this.shuffleArray(bgIndexArr);

        let count = 0;
        for (let i = 0; i < 3; i++) {
            this.playerAvatar[i].getComponent(cc.Sprite).setMaterial(0, this.normalSprite);
            this.playerAvatar[i].active = PeerManager.Instance.clientConnected[i] ? true : false;
            if (PeerManager.Instance.clientConnected[i]) {
                count++;
                let playground = cc.instantiate(this.playGround);
                playground.getComponent(playGround).playerIndex = i;
                playground.getComponent(PeerAction).playerSIP = PeerManager.Instance.clientConnected[i].remoteSIP;
                playground.getComponent(playGround).bgSpriteFrame = this.bgSpriteFrames[bgIndexArr[i]];
                playground.getComponent(playGround).roadSpriteFrame = this.roadSpriteFrames[bgIndexArr[i]];
                playground.getComponent(playGround).objectsSpriteFrame = bgIndexArr[i] == 0
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

        this.rankUpdateInterval = setInterval(() => {
            this.updateRank();
        }, 2000)

        this.lblTimer.string = "5";
        setTimeout(() => {
            cc.tween(this.tutorialPopup).to(0.3, { scale: 0.5, }, { easing: "quadOut" }).start();
            let time = 5;
            let interval = setInterval(() => {
                this.lblTimer.string = (--time).toString();
                cc.tween(this.lblTimer.node).to(0.1, { scale: 1.5 }).to(0.1, { scale: 1 }).start();
                if (time <= 0) {
                    clearInterval(interval);
                    cc.tween(this.tutorialPopup).to(0.3, { scale: 0, }, { easing: "quadIn" }).call(() => {
                        this.container.children.forEach((e) => {
                            e.getComponent(playGround).startMoveBall();
                        })
                    }).start();
                }
            }, 1000)
        }, 500)
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    showConnectMessage(index: number, disconnectMessage: string = null) {
        if (!this.container.children[index]) return;
        this.container.children[index].getComponent(playGround).showMessagePlayerDisconnect(disconnectMessage);
    }

    setGameOver(index: number, isDead: boolean = true) {
        this.isGameOver[index] = true;
        if (isDead) {
            this.isDead[index] = true;
            this.playerAvatar[index].getComponent(cc.Sprite).setMaterial(0, this.graySprite);
        }

        if (this.isGameOver.every((e) => { return e == true })) {
            clearInterval(this.rankUpdateInterval);

            for (let child of this.container.children) {
                if (child.getComponent(PeerAction)) {
                    child.getComponent(PeerAction).playerSIP = -1;
                }
            }
            this.container.removeAllChildren();

            let rank = this.getPlayerRank();
            if (PeerManager.Instance.getClientConneted().length > 0) {
                StageGameEnd.Instance.showResult(rank);
            }
        }
    }

    updateRank() {
        let rank = this.getPlayerRank();

        for (let i = 0; i < rank.length; i++) {
            cc.tween(this.playerAvatar[rank[i].playerIndex]).to(0.5, { y: this.avatarPositionY[i] }).start();
            this.playerAvatar[rank[i].playerIndex].getChildByName("rank")
                .getComponent(cc.Sprite).spriteFrame = this.playerRankSpriteFrames[i];
        }
    }

    getPlayerRank() {
        let rank = [];
        for (let i = 0; i < this.connectedPlayerIndex.length; i++) {
            rank[i] = {
                score: this.playerScore[this.connectedPlayerIndex[i]],
                playerIndex: this.connectedPlayerIndex[i],
            }
        }

        rank.sort((a, b) => {
            return b.score - a.score;
        })

        return rank;
    }
}
