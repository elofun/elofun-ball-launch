import Helper from "../utils/Helper";
import SingletonNode from "../utils/SingletonNode";

const { ccclass, property } = cc._decorator;
export enum Popups
{
    
}
@ccclass
export default class PopupManager extends SingletonNode<PopupManager>() {

    @property(cc.Node) private PopupBackground: cc.Node = null;
    @property(cc.Node) private PopupContainer: cc.Node = null;
    @property(cc.Node) private ShownPopups: cc.Node = null;
    @property(cc.Prefab) private PopupPrefabs: Array<cc.Prefab> = [];

    private mShowCallback;
    private mHideCallback;
    static push(popupName: Popups, useBg = true)
    {
        const instance = this.Instance;
        const popup = instance.PopupContainer.getChildByName(Popups[popupName]);
        if (popup)
        {
            instance.usePopup(popup);
            instance.animate(true, popup);
            instance.PopupBackground.active = useBg;
        }
    }

    static pop()
    {
        const instance = this.Instance;
        if (instance.ShownPopups.children.length > 0)
        {
            const popup = instance.ShownPopups.children[instance.ShownPopups.children.length - 1];
            instance.PopupBackground.active = instance.ShownPopups.children.length - 1 > 0;
            instance.animate(false, popup);
        }
    }

    static hide(popupName: Popups)
    {
        const instance = this.Instance;
        const popup = instance.ShownPopups.getChildByName(Popups[popupName]);
        if (popup)
        {
            instance.animate(false, popup);
        }
    }

    static getPopup(popupName: Popups)
    {
        const instance = this.Instance;
        let popup = instance.PopupContainer.getChildByName(Popups[popupName]);
        if (popup)
        {
            return popup;
        }
        return instance.ShownPopups.getChildByName(Popups[popupName]);
    }
    private animate(isShow: boolean, popup: cc.Node)
    {
        if (!isShow)
        {
            let randomEasing = ['bounceOut', 'quadOut', 'backOut']
            let easing = randomEasing[Helper.RandInt(0, randomEasing.length - 1)]
            cc.tween(popup)
                .to(0.3, { scale: 0, }, { easing: 'quadIn' })
                .call(() =>
                {
                    this.returnPopup(popup);
                    // this.PopupBackground.active = this.ShownPopups.children.length > 0;
                })
                .start()
        } else 
        {
            let randomEasing = ['bounceOut', 'quadOut', 'backOut']
            let easing = randomEasing[Helper.RandInt(0, randomEasing.length - 1)]
            popup.setScale(0)
            cc.tween(popup)
                .by(0.3, { scale: 1, }, { easing: easing })
                .start()
        }
    }

    private usePopup(popup: cc.Node)
    {
        this.PopupContainer.removeChild(popup, false);
        this.ShownPopups.addChild(popup);
    }

    private returnPopup(popup: cc.Node)
    {
        this.ShownPopups.removeChild(popup, false);
        this.PopupContainer.addChild(popup);
    }

    onLoad()
    {
        super.onLoad();
        for (let i = 0; i < this.PopupPrefabs.length; i++)
        {
            this.PopupContainer.addChild(cc.instantiate(this.PopupPrefabs[i]));
        }
    }
    
    start()
    {
        
    }
    
}
