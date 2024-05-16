// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import PeerDefine, { PeerActionConnect, PeerActionType, PeerPhase, PeerStage } from "./PeerDefine";
import PeerManager, { IDataReceived } from "./PeerManager";
const { ccclass, property } = cc._decorator;

@ccclass
export default class PeerClientManager extends PeerManager
{
    public static Instance: PeerClientManager = null;

    public masterSIP: number = 0
    public currentID: number = 0
    public currentMainPlayerID: number = 0

    private isMainPlayer: boolean = false;
    private isConnected: boolean = false
    private disconnectCB: Function
    private connectedCB: Function
    private reconnectCB: Function
    private clientTimeoutPingPong: any;
    private clientIntervalPing: any;
    onLoad()
    {
        super.onLoad();
        PeerClientManager.Instance = this
        const urlParams = new URLSearchParams(window.location.search);
        this.masterSIP = parseInt(urlParams.get('sip')) || 0;
        console.log("masterSIP: " + this.masterSIP)

        delete this.setConnectedCB;
        delete this.setDisConnectCB;
        delete this.getClients;
    }

    setClientConnectedCB(cb: Function)
    {
        this.connectedCB = cb
    }
    setClientDisconnectCB(cb: Function)
    {
        this.disconnectCB = cb
    }
    IsConnected()
    {
        return this.isConnected
    }
    IsMainPlayer()
    {
        return this.isMainPlayer
    }
    update(dt)
    {
        super.update(dt);
    }
    init()
    {
        super.init()
        // this.connect()
    }
    connect()
    {
        let interval = setInterval(() =>
        {
            if (this.isInitalized)
            {
                clearInterval(interval)

                let localMasterSIP = cc.sys.localStorage.getItem("masterSIP")
                if (localMasterSIP && localMasterSIP == this.masterSIP && !this.isConnected)
                {
                    this.reconnect((args) =>
                    {
                        cc.sys.localStorage.setItem("localSIP", this.sip)

                        switch (args.currentStage)
                        {
                            case PeerStage.PLAYING:
                                //TO DO
                                break;
                            case PeerStage.WAITING:
                                //TO DO
                                break
                        }

                    })
                    setTimeout(() =>
                    {
                        if (!this.isConnected)
                        {
                            this.disconnectCB && this.disconnectCB()
                            this.clientTimeoutPingPong && clearTimeout(this.clientTimeoutPingPong)
                            this.clientIntervalPing && clearInterval(this.clientIntervalPing)
                            this.isConnected = false
                        }
                    }, PeerDefine.TIMEOUT_RETRY);
                    return;
                }

                cc.sys.localStorage.setItem("localSIP", this.sip)
                cc.sys.localStorage.setItem("masterSIP", this.masterSIP)
                let connectMessage: IDataReceived = {
                    phase: PeerPhase.CONNECT,
                    action: PeerActionConnect.CONNECTING,
                    customParam: ""
                }
                this.sendMessage(connectMessage)
                setTimeout(() =>
                {
                    if (!this.isConnected)
                    {
                        this.disconnectCB && this.disconnectCB()
                        this.clientTimeoutPingPong && clearTimeout(this.clientTimeoutPingPong)
                        this.clientIntervalPing && clearInterval(this.clientIntervalPing)
                        this.isConnected = false
                    }
                }, PeerDefine.TIMEOUT_RETRY);
            }
        }, 1000)
    }
    reconnect(cb: Function = null)
    {
        cc.log("reconnect")
        this.reconnectCB = cb;
        let localSIP = cc.sys.localStorage.getItem("localSIP") | 0
        let connectMessage: IDataReceived = {
            phase: PeerPhase.CONNECT,
            action: PeerActionConnect.CONNECT_RETRY,
            customParam: "" + localSIP
        }
        this.sendMessage(connectMessage)
    }
    sendMessage(msg: IDataReceived)
    {
        if (this.masterSIP)
        {
            this.peer.sendTo(this.masterSIP, JSON.stringify(msg))
        }
    }
    onRecievedMessage(msg, client)
    {
        let args = JSON.parse(msg)
        if (args.phase != PeerPhase.CONNECT)
        {
            console.log(msg)
        }
        if (args.phase == PeerPhase.CONNECT)
        {
            switch (args.action)
            {
                case PeerActionConnect.CONNECTED:
                    {
                        this.isMainPlayer = args.customParam == "mainPlayer"
                        this.isConnected = true
                        this.currentID = args.currentID;
                        this.currentMainPlayerID = args.currentMainPlayerID;
                        this.connectedCB && this.connectedCB()
                        this.setClientPing();
                        PeerManager.emit(PeerManager.EventSwitchMainPlayer, this.isMainPlayer)
                        break
                    }
                case PeerActionConnect.CONNECT_FAILED:
                    {
                        this.isConnected = false
                        this.disconnectCB && this.disconnectCB()
                        break;
                    }
                case PeerActionConnect.SWITCH_MAINPLAYER:
                    {
                        this.isMainPlayer = this.currentID == args.currentMainPlayerID
                        this.currentMainPlayerID = args.currentMainPlayerID;
                        PeerManager.emit(PeerManager.EventSwitchMainPlayer, this.isMainPlayer)
                        break;
                    }
                case PeerActionConnect.PING_PONG:
                    {
                        this.clientUpdatePingPong()
                        break;
                    }
                case PeerActionConnect.CONNECT_RETRY_SUCCESS:
                    {
                        this.isMainPlayer = args.customParam == "mainPlayer"
                        this.isConnected = true
                        this.currentID = args.currentID;
                        this.currentMainPlayerID = args.currentMainPlayerID;

                        this.reconnectCB && this.reconnectCB(args)

                        this.reconnectCB = null
                        this.setClientPing();
                        PeerManager.emit(PeerManager.EventSwitchMainPlayer, this.isMainPlayer)

                        cc.log("reconnect success")
                        break;
                    }
            }
            return;
        }
        PeerManager.emit(PeerManager.EventReceivedMessage, args)
        this.onmessage && this.onmessage(msg);
    }
    setClientPing()
    {
        this.clientIntervalPing = setInterval(() =>
        {
            let pingMsg: IDataReceived = {
                action: PeerActionConnect.PING_PONG,
                phase: PeerPhase.CONNECT,
                customParam: "Ping"
            }
            this.sendMessage(pingMsg)
        }, PeerDefine.PING_TIMER);
    }
    clientUpdatePingPong()
    {
        if (this.clientTimeoutPingPong) clearTimeout(this.clientTimeoutPingPong)
        this.clientTimeoutPingPong = setTimeout(() =>
        {
            this.disconnectCB && this.disconnectCB()
            clearTimeout(this.clientTimeoutPingPong)
            clearInterval(this.clientIntervalPing)
            this.isConnected = false
            console.log("disconnect")
        }, PeerDefine.TIMEOUT_DISCONNECT);
    }
}
