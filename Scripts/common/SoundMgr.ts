import SingletonNode from "../utils/SingletonNode";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SoundMgr extends SingletonNode<SoundMgr>()
{
  @property({ type: cc.AudioClip }) BGM: cc.AudioClip = null;
  @property({ type: cc.AudioClip }) SFX_BUTTON: cc.AudioClip = null;
  @property({ type: cc.AudioClip }) SFX_SELECT: cc.AudioClip = null;
  @property({ type: cc.AudioClip }) SFX_ENDSCREEN: cc.AudioClip = null;
  @property({ type: cc.AudioClip }) SFX_EXPLODE: cc.AudioClip = null;
  @property({ type: cc.AudioClip }) SFX_CRYSTAL: cc.AudioClip = null;

  static get IsMute(){ return cc.audioEngine.getMusicVolume() == 0; }
  static get IsMusicPlaying(){ return cc.audioEngine.isMusicPlaying(); }

  static playMusic(clip: cc.AudioClip, loop: boolean = true) {
    cc.audioEngine.playMusic(clip, loop);
  }

  static playSfx(clip: cc.AudioClip, loop: boolean = false) {
    cc.audioEngine.playEffect(clip, loop);
  }

  static pauseMusic() {
    cc.audioEngine.pauseMusic();
  }

  static pauseAll() {
    cc.audioEngine.pauseAll();
  }

  static stopMusic() {
    cc.audioEngine.stopMusic();
  }

  static stopAll() {
    cc.audioEngine.stopAll();
  }

  static setMute(value: boolean = true) {
    const volume = Number(!value);
    this.setMusicVolume(volume);
    this.setSfxVolume(volume);
  }

  static setMusicVolume(value) {
    cc.audioEngine.setMusicVolume(value);
  }

  static setSfxVolume(value) {
    cc.audioEngine.setEffectsVolume(value);
  }
	
	static toggleSound(){
		this.setMute(!this.IsMute);
	}
}
