
declare global {
    interface Window {
        language: string;
        isRelease: boolean;
        controllerPrefix;
        controllerURL;
        controllerOrigin;
    }
}

const { ccclass, property } = cc._decorator;

@ccclass
export default class Global extends cc.Component
{
    public backAppTime: number = null;
    static Instance: Global = null;

    onLoad() {
        Global.Instance = this;
    }
}