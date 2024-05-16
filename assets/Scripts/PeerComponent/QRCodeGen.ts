import Global from "../common/Global";
import StageMgr from "../stage/StageMgr";
import Helper from "../utils/Helper";

const {ccclass, property} = cc._decorator;

@ccclass
export default class QRCodeGen extends cc.Component {

    @property(cc.Node) qrCode: cc.Node = null;
    @property size: number = 100;
    @property(cc.Node) loadingCover: cc.Node = null;

    createQR(){
        try {
            let link = Helper.getControllerURL();
            if(!link) {
                throw console.error("Can't generate QR Code because controller url is "+ link);
            }
            link += `&language=${window.language}`;
            let div = document.createElement("div");
            let qrcode = new QRCode(div,{
                text: link,
                width: this.size,
                height: this.size,
                colorDark : "#000000",
                colorLight : "#ffffff",
                correctLevel : QRCode.CorrectLevel.L
            });
            let img: any = div.children[0];
            setTimeout(() => {
                this.loadingCover.active = false;
                var texture = new cc.Texture2D();
                texture.initWithElement(img);
                texture.handleLoadedTexture();
                var spriteFrame = new cc.SpriteFrame(texture);
                var node = new cc.Node();
                var sprite = node.addComponent(cc.Sprite);
                sprite.spriteFrame = spriteFrame;
                sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
                this.qrCode.removeAllChildren();
                this.qrCode.addChild(node);
                node.width = this.size ;
                node.height = this.size ;
            }, 300);
        } catch (error) {
            if(Global.Instance.backAppTime - Date.now() < 0) {
                StageMgr.Instance.sendMessage("backToApp");
                return;
            }
            setTimeout(()=>{
                this.createQR(); 
            }, 2000)
        }
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
    }
}
