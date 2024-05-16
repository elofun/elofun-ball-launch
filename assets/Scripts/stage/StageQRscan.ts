// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Global from "../common/Global";
import SoundMgr from "../common/SoundMgr";
import PeerManager from "../PeerComponent/PeerManager";
import QRCodeGen from "../PeerComponent/QRCodeGen";
import Stage from "./Stage";
import StageLobby from "./StageLobby";
import StageMgr, { Stages } from "./StageMgr";

const { ccclass, property } = cc._decorator;

@ccclass
export default class StageQRscan extends Stage {
  @property(QRCodeGen) qrCode: QRCodeGen = null;

  static Instance: StageQRscan = null;
  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    StageQRscan.Instance = this;
  }

  start() {
    SoundMgr.playMusic(SoundMgr.Instance.BGM);

    let urlParams = new URLSearchParams(window.location.search);
    let timerGoBack = Number(urlParams.get("timer_qr")) || 30000;
    Global.Instance.backAppTime = Date.now() + timerGoBack;

    return;
    let interval = setInterval(() => {
      if (PeerManager.Instance.peer && PeerManager.Instance.sip) {
        this.qrCode.createQR();
        StageLobby.Instance.qrCode.createQR();
        StageLobby.Instance.lblRoomCode.string =
          "" + window.controllerPrefix + PeerManager.Instance.sip;
        clearInterval(interval);
        return;
      }
      if (Global.Instance.backAppTime - Date.now() < 0) {
        StageMgr.Instance.sendMessage("backToApp");
        clearInterval(interval);
      }
    }, 1000);
  }

  // update (dt) {}

  nextStage(isRemote: boolean = false) {
    if (isRemote) {
      SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
      StageMgr.show(Stages.StageStartGame);
    } else {
      StageMgr.show(Stages.StageStartGame);
    }
  }
}
