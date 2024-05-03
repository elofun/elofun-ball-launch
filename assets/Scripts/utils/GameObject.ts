const { ccclass, property } = cc._decorator;

@ccclass
export default class GameObject extends cc.Component 
{
    load(){
        
    }

    kill(){
        this.node.active = false;
    }
}
