const urlParams = new URLSearchParams(window.location.search);
window.language = urlParams.get('language') || 'vi';
cc.assetManager.force = true;
cc.assetManager.loadBundle(window.language, null, (err, bundle) => 
{
    console.log(bundle);
})

const { ccclass, property } = cc._decorator;

@ccclass
export default class Loader extends cc.Component {
    @property(cc.Prefab) private SystemPrefabs: Array<cc.Prefab> = [];
    @property(cc.Prefab) private PlaceHolderPrefabs: Array<cc.Prefab> = [];

    onLoad() {
        for (let i = 0; i < this.SystemPrefabs.length; i++) {
            this.node.addChild(cc.instantiate(this.SystemPrefabs[i]));
        }
        for (let i = 0; i < this.PlaceHolderPrefabs.length; i++) {
            this.node.addChild(cc.instantiate(this.PlaceHolderPrefabs[i]));
        }
    }
}