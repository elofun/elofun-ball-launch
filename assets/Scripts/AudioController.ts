import SingletonNode from "./utils/SingletonNode";
const { ccclass, property } = cc._decorator;
export enum Audios
{
    Booster = 0,
    BtnClick = 1,
    MCDie = 2,
    EnemiesComing = 3,
    EnemyDie = 4,
    FreezeSkill = 5,
    GameOver = 6,
    GamePlayLoop = 7,
    HomeLoop = 8,
    InvisibleSkill = 9,
    Jump = 10,
    MCHit = 11,
    RageSkill = 12,
    Roarr = 13,
    SlowSkill = 14,
    SwipeOnEnemy = 15,
    WaterComming = 16,
}
@ccclass
export default class AudioController extends SingletonNode<AudioController>() {


    // LIFE-CYCLE CALLBACKS:
    @property(cc.AudioClip) AudioList : Array<cc.AudioClip> = [];

    public volume : number  = 1;
    
    onLoad()
    {
        super.onLoad()
    }
    start()
    {

    }
    playAudioEffect(audioClip : Audios, loop : boolean = false)
    {
        let audio = this.AudioList[audioClip]
        return cc.audioEngine.playEffect(audio, loop)
    }
    stopAudioEffect(id : number)
    {
        cc.audioEngine.stopEffect(id)
    }
    stopAllAudioEffect()
    {
        cc.audioEngine.stopAllEffects()
    }
    playButtonSound()
    {
        this.playAudioEffect(Audios.BtnClick)
    }
    setMute()
    {
        if (this.volume == 1)
        {
            this.volume = 0;
            cc.audioEngine.setEffectsVolume(0)
        } else 
        {
            this.volume = 1;
            cc.audioEngine.setEffectsVolume(1)
        }
    }

}
