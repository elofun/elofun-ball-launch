const { ccclass, property } = cc._decorator;

@ccclass
export default class LocalizedText extends cc.Component {
    @property({ type: String, multiline: true, }) EN: string = "";
    @property({ type: String, multiline: true, }) VI: string = "";

    start() {
        let text = this.node.getComponent(cc.Label);
        let defaultText = text.string;
        text.string = this[window.language.toUpperCase()] || defaultText;
    }
}