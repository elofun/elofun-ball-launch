import SingletonNode from "../utils/SingletonNode";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Events extends SingletonNode<Events>()
{
    static EventLanguageChanged: string = 'EventLanguageChanged';

    static registerEvent(name: string, callback: Function){
        this.Instance.node.on(name, callback);
    }

    static emit(name: string, ...args){
        this.Instance.node.emit(name, ...args);
    }
}