import SoundMgr from "../common/SoundMgr";
import GameDefine from "../game/GameDefine";
import { PeerActionType, PeerPhase } from "../PeerComponent/PeerDefine";
import PeerManager, { IDataReceived } from "../PeerComponent/PeerManager";
import Stage from "./Stage";
import StageInGame from "./StageInGame";
import StageMgr, { Stages } from "./StageMgr";


const {ccclass, property} = cc._decorator;

@ccclass
export default class StageGameEnd extends Stage {

    @property(cc.Button) btnPlay: cc.Button = null;
    @property(cc.Button) btnBack: cc.Button = null;
    @property(cc.Node) playerRankBases: cc.Node[] = [];
    @property(cc.Animation) fireWorks: cc.Animation[] = [];
    @property(cc.Node) endGameMulti: cc.Node = null;
    @property(cc.Node) endGameSingle: cc.Node = null;

    static Instance: StageGameEnd = null;

    private dragonSkin: string[] =["Char3", "Char2", "Char1"];

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        StageGameEnd.Instance = this;
    }

    start () {
        this.btnPlay.interactable = true;
        this.btnBack.interactable = false;
    }

    // update (dt) {}

    showResult(rank) {
        if(rank.length > 1) {
            this.endGameMulti.active = true;
            this.endGameSingle.active = false;
            for (let i = 0; i < 3; i++) {
                if(i < rank.length) {
                    let msg: IDataReceived = {
                        phase: PeerPhase.GAMEOVER,
                        action: PeerActionType.ENDGAME,
                        customParam: "",
                        rank: i,
                        score: rank[i].score,
                    }
    
                    PeerManager.Instance.sendMessage(rank[i].playerIndex, msg);
    
                    this.playerRankBases[i].active = true;
                    this.playerRankBases[i].getChildByName("playerSprite").getComponent(sp.Skeleton)
                        .setSkin(this.dragonSkin[rank[i].playerIndex]);
                    this.playerRankBases[i].getChildByName("player").getComponent(cc.Label).string =
                        `${GameDefine.player} ${rank[i].playerIndex + 1}`;
                    this.playerRankBases[i].getChildByName("lblScore").getComponent(cc.Label).string = 
                        rank[i].score.toString();
                } else {
                    this.playerRankBases[i].active = false;
                }
            }
        } else {
            this.endGameMulti.active = false;
            this.endGameSingle.active = true;

            let highScore = localStorage.getItem('highScoreZigZag');
            if(!highScore || highScore < rank[0].score) {
                highScore = rank[0].score;
            }
            localStorage.setItem('highScoreZigZag', highScore);

            this.endGameSingle.getChildByName("player").getComponent(cc.Label).string =
                `${GameDefine.player} ${rank[0].playerIndex + 1}`;
            this.endGameSingle.getChildByName("lblScore").getComponent(cc.Label).string = 
                rank[0].score.toString();
            this.endGameSingle.getChildByName("lblHighScore").getComponent(cc.Label).string = 
                highScore.toString();
            this.endGameSingle.getChildByName("playerSprite").getComponent(sp.Skeleton)
                .setSkin(this.dragonSkin[rank[0].playerIndex]);
        }

        StageMgr.show(Stages.StageGameEnd);
        SoundMgr.playSfx(SoundMgr.Instance.SFX_ENDSCREEN);
        // for(let i = 0; i<this.fireWorks.length; i++) {
        //     setTimeout(()=>{
        //         this.fireWorks[i].play();
        //         this.fireWorks[i].getAnimationState("FireWork").repeatCount = 2;
        //     }, 800 + 600 * i);
        // }
    }

    nextStage() {
        SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
        this.btnPlay.interactable = true;
        this.btnBack.interactable = false;

        cc.tween(this.btnPlay.node).to(0.1, {scale: 0.65}).to(0.1, {scale: 0.5})
        .call(()=>{
            StageMgr.show(Stages.StageLobby);
        }).start();
    }

    previousStage() {
        let msg: IDataReceived = {
            phase: PeerPhase.GAMEOVER,
            action: PeerActionType.BACK,
            customParam: ""
        }
        PeerManager.Instance.sendMessageToAll(msg);
        
        SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
        this.btnPlay.interactable = false;
        this.btnBack.interactable = true;
       
        cc.tween(this.btnBack.node).to(0.1, {scale: 0.65}).to(0.1, {scale: 0.5})
        .call(()=>{
            StageMgr.Instance.sendMessage("goBack"); 
        }).start();
    }

    chooseButton(isBtnNext: boolean) {
        SoundMgr.playSfx(SoundMgr.Instance.SFX_SELECT);
        this.btnBack.interactable = !isBtnNext;
        this.btnPlay.interactable = isBtnNext;
    }
}
