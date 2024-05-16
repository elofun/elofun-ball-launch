import GameDefine from "../game/GameDefine";
import StageInGame from "../stage/StageInGame";
import StageLobby from "../stage/StageLobby";
import StageMgr, { Stages } from "../stage/StageMgr";
import StageQRscan from "../stage/StageQRscan";
import PeerDefine, {
  PeerActionConnect,
  PeerActionType,
  PeerPhase,
  PeerStage,
} from "./PeerDefine";

export interface IDataReceived {
  phase: PeerPhase;
  action: PeerActionType | PeerActionConnect;
  customParam: string;
  currentID?: number;
  currentClientID?: number;
  currentMainPlayerID?: number;
  currentStage?: PeerStage;
  rank?: number;
  score?: number;
}
const { ccclass, property } = cc._decorator;

@ccclass
export default class PeerManager extends cc.Component {
  public static Instance: PeerManager = null;

  static EventReceivedMessage = "ReceivedMessage";
  static EventSwitchMainPlayer = "SwitchMainPlayer";
  static registerEvent(name: string, callback: Function) {
    this.Instance.node.on(name, callback);
  }

  static emit(name: string, ...args) {
    this.Instance.node.emit(name, ...args);
  }

  public peer: any = null;
  public sip: number = 0;
  public clientConnected: any = new Array(PeerDefine.MAX_CLIENT);
  public arrDisconnectCB: Array<Function> = new Array(PeerDefine.MAX_CLIENT);
  public arrConnectedCB: Array<Function> = new Array(PeerDefine.MAX_CLIENT);
  public onmessage: Function = null;
  public isPlayWithRemote: boolean = true;

  public isInitalized = false;
  private isScriptLoaded = false;
  private timeoutPingPong: any = [];
  public currentMainPlayer: number = -1;
  private isPlayingGame: boolean = false;

  private veryfiSIPs: number[];

  loadScript(moduleName, cb) {
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
  }
  onLoad() {
    PeerManager.Instance = this;

    return;
    if (!window.isRelease) {
      this.loadScript("https://fpt.eloplay.vn/peer/peerclient.js", () => {
        this.isScriptLoaded = true;
      });
    } else {
      this.isScriptLoaded = true;
    }

    let getPeerInterval = setInterval(() => {
      if (this.isInitalized || !this.isScriptLoaded) return;
      if (!this.peer && (window as any).getPeerClient) {
        this.peer = (window as any).getPeerClient();
        console.log(this.peer);
      } else if (this.peer && !this.sip) {
        this.sip = this.peer.getSIP();
      } else if (this.peer && this.sip && !this.isInitalized) {
        this.init();
        clearInterval(getPeerInterval);
      }
    }, 1000);
  }
  start() {
    return;
    this.clientConnected = new Array(PeerDefine.MAX_CLIENT);
    this.veryfiSIPs = new Array(PeerDefine.MAX_CLIENT);
  }
  getSIP() {
    return this.sip;
  }

  update(dt) {}
  getClients() {
    return this.clientConnected;
  }
  setRemoteMode(val: boolean = false) {
    if (val) {
      this.clientConnected[0] = { remoteSIP: 0 };
    } else {
      this.clientConnected[0] = null;
    }
    this.isPlayWithRemote = val;
  }
  getClientConneted() {
    let arr = [];
    for (let client of this.clientConnected) {
      if (client || (this.isPlayWithRemote && client == true)) {
        arr.push(client);
      }
    }
    return arr;
  }
  setConnectedCB(
    clientId: number,
    cb: Function // client ID will be from 0
  ) {
    if (clientId < PeerDefine.MAX_CLIENT) {
      this.arrConnectedCB[clientId] = cb;
    }
  }
  setDisConnectCB(clientId: number, cb: Function) {
    if (clientId < PeerDefine.MAX_CLIENT) {
      this.arrDisconnectCB[clientId] = cb;
    }
  }
  PlayGame(value = true) {
    this.isPlayingGame = value;
  }
  init() {
    this.isInitalized = true;
    this.peer.on("message", this.onRecievedMessage.bind(this));
    console.log(this.sip);
  }
  setMessageRecivedCB(cb: Function) {
    this.onmessage = cb;
  }
  connecting(client) {
    let indexAvl = this.getSlotAvailble();
    if (indexAvl < 0) {
      let msgFail: IDataReceived = {
        action: PeerActionConnect.CONNECT_FAILED,
        phase: PeerPhase.CONNECT,
        customParam: "Connection failed - full slot",
      };
      client.send(JSON.stringify(msgFail));
      return;
    }
    if (this.isPlayingGame) {
      let msgFail: IDataReceived = {
        action: PeerActionConnect.CONNECT_FAILED,
        phase: PeerPhase.CONNECT,
        customParam: "game is playing",
      };
      client.send(JSON.stringify(msgFail));
      return;
    }
    if (this.currentMainPlayer == -1) {
      this.currentMainPlayer = indexAvl;
    }
    if (this.isPlayWithRemote) this.currentMainPlayer = 0;
    let msgConnected: IDataReceived = {
      action: PeerActionConnect.CONNECTED,
      phase: PeerPhase.CONNECT,
      customParam:
        indexAvl == this.currentMainPlayer
          ? !this.isPlayWithRemote
            ? "mainPlayer"
            : "Connection success"
          : "Connection success",
      currentID: indexAvl,
      currentMainPlayerID: this.currentMainPlayer,
    };

    if (this.getClientConneted().length == 0) {
      StageMgr.show(Stages.StageStartGame);
      this.setRemoteMode(false);

      let msg: IDataReceived = {
        phase: PeerPhase.START_SCREEN,
        action: PeerActionType.SHOW,
        customParam: "",
      };

      client.send(JSON.stringify(msg));
    }

    this.arrConnectedCB[indexAvl] && this.arrConnectedCB[indexAvl]();
    client.send(JSON.stringify(msgConnected));
    this.clientConnected[indexAvl] = client;
    this.veryfiSIPs[indexAvl] = client.remoteSIP;

    StageLobby.Instance.setUI(true, indexAvl);
  }
  onRecievedMessage(msg, client) {
    //need to verfify client here
    let args = JSON.parse(msg);
    if (args.phase != PeerPhase.CONNECT) {
      console.log(msg);
    }
    if (args.phase == PeerPhase.CONNECT) {
      switch (args.action) {
        case PeerActionConnect.CONNECTING: {
          this.connecting(client);
          return;
        }
        case PeerActionConnect.PING_PONG: {
          this.updatePingPong(client, args);
          return;
        }
        case PeerActionConnect.CONNECT_RETRY: {
          if (this.isPlayingGame) {
            console.log("reconnect :" + client.remoteSIP);
            let veryfiSIP = client.remoteSIP;
            let check = this.veryfiSIPs.includes(veryfiSIP);
            console.log(check, veryfiSIP, this.veryfiSIPs);
            if (check) {
              let indexAvl = this.veryfiSIPs.indexOf(veryfiSIP);

              this.arrConnectedCB[indexAvl] && this.arrConnectedCB[indexAvl]();
              this.clientConnected[indexAvl] = client;
              this.veryfiSIPs[indexAvl] = client.remoteSIP;

              let msgSuccess: IDataReceived = {
                action: PeerActionConnect.CONNECT_RETRY_SUCCESS,
                phase: PeerPhase.CONNECT,
                currentID: indexAvl,
                currentMainPlayerID: this.currentMainPlayer,
                customParam: "reconnect success",
                currentStage: PeerStage.PLAYING,
              };
              client.send(JSON.stringify(msgSuccess));

              StageInGame.Instance.isGameOver[indexAvl] =
                StageInGame.Instance.isDead[indexAvl];
            } else {
              let msgFail: IDataReceived = {
                action: PeerActionConnect.CONNECT_FAILED,
                phase: PeerPhase.CONNECT,
                customParam: "cannot connect, not current player",
              };
              client.send(JSON.stringify(msgFail));
            }
          } else {
            this.connecting(client);
          }
          return;
        }
      }
    }
    PeerManager.emit(PeerManager.EventReceivedMessage, args, client);
    this.onmessage && this.onmessage(msg);
  }
  getSlotAvailble() {
    for (let i = 0; i < this.clientConnected.length; i++) {
      if (!this.clientConnected[i]) return i;
    }
    return -1;
  }
  getRemoteSIPAvailable(remoteSIP: number) {
    for (let i = 0; i < this.clientConnected.length; i++) {
      if (
        this.clientConnected[i] &&
        this.clientConnected[i].remoteSIP == remoteSIP
      )
        return i;
    }
    return -1;
  }
  updatePingPong(client, msg) {
    let id = this.getRemoteSIPAvailable(client.remoteSIP);
    if (id < 0) return;
    if (this.timeoutPingPong[id]) clearTimeout(this.timeoutPingPong[id]);

    this.sendMessage(id, msg);

    this.timeoutPingPong[id] = setTimeout(() => {
      this.arrDisconnectCB[id] && this.arrDisconnectCB[id]();
      clearTimeout(this.timeoutPingPong[id]);
      this.clientConnected[id] = null;

      StageLobby.Instance.setUI(false, id);
      if (StageInGame.Instance.node.active) {
        setTimeout(() => {
          if (!this.clientConnected[id]) {
            let str = `Người chơi ${id + 1} đã mất kết nối`;
            StageInGame.Instance.showConnectMessage(id, str);
          }
        }, PeerDefine.TIMEOUT_RETRY);
        if (id != this.currentMainPlayer) {
        }
      }

      if (this.isPlayWithRemote) return;
      if (id == this.currentMainPlayer) {
        this.currentMainPlayer = -1;
        if (this.getClientConneted().length > 0) {
          //set Main player here
          let e = this.switchMainPlayer(id);
          if (e) {
          } else {
          }
        } else {
          StageMgr.show(Stages.StageQRscan);
          this.isPlayWithRemote = true;
          this.isPlayingGame = false;
        }
      }
    }, PeerDefine.TIMEOUT_DISCONNECT);
  }
  switchMainPlayer(previousMainPlayer) {
    for (let client of this.clientConnected) {
      if (client) {
        this.currentMainPlayer = this.clientConnected.indexOf(client);
        let msgConnected: IDataReceived = {
          action: PeerActionConnect.SWITCH_MAINPLAYER,
          phase: PeerPhase.CONNECT,
          customParam: "mainPlayer",
          currentMainPlayerID: this.currentMainPlayer,
        };
        this.sendMessageToAll(msgConnected);

        let str = `${GameDefine.player} ${previousMainPlayer + 1} ${
          GameDefine.hasdisconnect
        } \n${GameDefine.player} ${this.currentMainPlayer + 1} ${
          GameDefine.hosting
        }`;
        StageInGame.Instance.showConnectMessage(previousMainPlayer, str);

        return true;
      }
    }
    return false;
  }
  sendMessage(clientIndex, msg: IDataReceived) {
    if (!this.peer) return;
    let client = this.clientConnected[clientIndex];
    if (client) {
      this.peer.sendTo(client.remoteSIP, JSON.stringify(msg));
    }
  }
  sendMessageToAll(msg: IDataReceived) {
    if (!this.peer) return;
    for (let client of this.clientConnected) {
      if (client) this.peer.sendTo(client.remoteSIP, JSON.stringify(msg));
    }
  }
}
