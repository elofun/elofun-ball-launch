// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import PeerClientManager from "./PeerClientManager";
import { PeerActionType, PeerPhase } from "./PeerDefine";
import PeerManager, { IDataReceived } from "./PeerManager";

export enum PeerType {
  NONE,
  SEND,
  RECEIVE,
}

const { ccclass, property } = cc._decorator;
@ccclass("PeerHandler")
class PeerHandler {
  @property({ type: cc.Enum(PeerActionType) }) actionName: PeerActionType =
    PeerActionType.NONE;
  @property(cc.Component.EventHandler)
  eventHandler: Array<cc.Component.EventHandler> = [];
  @property()
  customMessage: string = "";
}
@ccclass
export default class PeerAction extends cc.Component {
  @property({ type: cc.Enum(PeerType) }) type: PeerType = PeerType.NONE;
  @property({ type: cc.Enum(PeerPhase) }) actionPhase: PeerPhase =
    PeerPhase.NONE;
  @property({
    type: PeerHandler,
    visible: function (this: PeerAction) {
      return this.type == PeerType.RECEIVE;
    },
  })
  actionHandler: Array<PeerHandler> = [];
  @property({
    type: cc.Enum(PeerActionType),
    visible: function (this: PeerAction) {
      return this.type == PeerType.SEND;
    },
  })
  actionName: PeerActionType = PeerActionType.NONE;
  @property({
    type: cc.Component.EventHandler,
    visible: function (this: PeerAction) {
      return this.type == PeerType.SEND;
    },
  })
  eventHandler: Array<cc.Component.EventHandler> = [];
  @property({
    visible: function (this: PeerAction) {
      return this.type == PeerType.SEND;
    },
    type: cc.String,
  })
  customMessage: string = "";

  public playerSIP: number = null;

  onLoad() {
    // try
    // {
    switch (this.type) {
      case PeerType.NONE:
        break;
      case PeerType.SEND:
        this.node.on(cc.Node.EventType.TOUCH_END, this.hanleSubmit.bind(this));
        break;
      case PeerType.RECEIVE:
        return;
        PeerManager.registerEvent(
          PeerManager.EventReceivedMessage,
          this.handleMessage.bind(this)
        );
        break;
    }
    // } catch (e) { }
  }
  hanleSubmit() {
    if (!this.node.active) return;
    for (let event of this.eventHandler) {
      event && event.emit([]);
    }
    let msg: IDataReceived = {
      action: this.actionName,
      phase: this.actionPhase,
      customParam: this.customMessage,
    };
    console.log(this.customMessage);
    if (PeerClientManager.Instance) PeerClientManager.Instance.sendMessage(msg);
    else if (PeerManager.Instance) PeerManager.Instance.sendMessageToAll(msg);
  }
  handleMessage(e: IDataReceived, client) {
    if (!this.node.active) return;
    if (this.playerSIP == null || this.playerSIP == client.remoteSIP) {
      console.log(e);
      if (e.phase == this.actionPhase) {
        for (let handler of this.actionHandler) {
          if (handler.actionName == e.action) {
            for (let evt of handler.eventHandler) {
              evt && evt.emit([e]);
            }
          }
        }
      }
    }
  }
}
