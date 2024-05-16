import AudioController from "../AudioController";
import SingletonNode from "../utils/SingletonNode";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameManager extends SingletonNode<GameManager>() {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    private STATE =
    {
        TUTORIAL: 0,
        INGAME: 1,
        GAMEOVER: 2
    }
    private state = 0;
    private isPause : boolean = false;

    start () {

    }
    startGame()
    {
        
    }
    endGame()
    {
        
    }
    setMute()
    {
        AudioController.Instance.setMute()
    }
    onGamePause()
    {
        this.isPause = true;
    }
    onGameResume()
    {
        this.isPause = false;
    }
    IsPause()
    {
        return this.isPause
    }
    // update (dt) {}
}
