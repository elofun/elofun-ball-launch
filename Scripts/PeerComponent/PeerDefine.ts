export default new (class PeerDefine
    {
        public MAX_CLIENT = 3;
        public TIMEOUT_DISCONNECT = 3000
        public PING_TIMER = 1000
        public TIMEOUT_RETRY = 5000
    })
    export enum PeerPhase
    {
        NONE = 0,
        CONNECT,
        START_SCREEN,
        WAITING,
        SCAN_QR,
        INGAME,
        GAMEOVER
    }
    export enum PeerStage
    {
        PLAYING,
        WAITING,
    }
    export enum PeerActionConnect
    {
        CONNECTING,
        CONNECTED,
        CONNECT_FAILED,
        CONNECT_RETRY,
        CONNECT_RETRY_SUCCESS,
        SWITCH_MAINPLAYER,
        PING_PONG,
    }
    export enum PeerActionType
    {
        NONE = 0,
        UP,
        DOWN,
        LEFT,
        RIGHT,
        ENTER,
        NEXT,
        BACK,
        CUSTOM,
        JUMP,
        ENDGAME,
        REPLAY,
        HOME,
        HOLD,
        RELEASE,
        ROTATE,
        SHOW
    }
    