// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Block, { successDropState } from "../Block/Block";
import BlockSpawner from "../Block/BlockSpawner";
import GameManager from "../GameManager/GameManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Rope extends cc.Component {
  getHookBlock: cc.Node = null;
  @property(cc.Node) hookPos: cc.Node = null;
  startPos: cc.Vec3 = new cc.Vec3(0, 170, 0);

  private delayTime: number = 1;
  private delayTimerCounter: number = 0;
  protected start(): void {
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyPress, this);
    let tempBlock: cc.Node = BlockSpawner.Instance.SpawnThing(
      new cc.Vec2(this.node.getPosition().x, this.node.getPosition().y),
      BlockSpawner.Instance._prefabsName.Block
    );
    tempBlock.getComponent(Block).currentState = successDropState.perfect;
    this.getHookBlock = tempBlock;
    GameManager.Instance.topBlock = tempBlock;
    GameManager.Instance.AddBlock(tempBlock);
  }
  onKeyPress(event: cc.Event.EventKeyboard) {
    if (GameManager.Instance.isAlive != true) return;
    if (this.delayTimerCounter >= this.delayTime) {
      switch (event.keyCode) {
        case cc.macro.KEY.enter:
          this.getHookBlock.getComponent(cc.PhysicsBoxCollider).enabled = true;
          this.getHookBlock.getComponent(cc.PhysicsBoxCollider).density = 0;
          this.getHookBlock.angle = 0;
          this.getHookBlock.getComponent(cc.RevoluteJoint).enabled = false;
          this.getHookBlock.getComponent(cc.RevoluteJoint).connectedBody = null;
          this.getHookBlock = null;
          this.delayTimerCounter = 0;
          this.scheduleOnce(() => {
            let tempBlock: cc.Node = BlockSpawner.Instance.SpawnThing(
              new cc.Vec2(
                this.node.parent.convertToNodeSpaceAR(
                  this.hookPos.parent.convertToWorldSpaceAR(
                    this.hookPos.getPosition()
                  )
                ).x,
                this.node.parent.convertToNodeSpaceAR(
                  this.hookPos.parent.convertToWorldSpaceAR(
                    this.hookPos.getPosition()
                  )
                ).y
              ),
              BlockSpawner.Instance._prefabsName.Block
            );
            this.getHookBlock = tempBlock;
          }, 1);
      }
    }
  }
  MoveUp() {
    cc.tween(this.node)
      .call(() => {
        this.delayTimerCounter = 0;
      })
      .to(0.5, {
        position: new cc.Vec3(
          this.node.getPosition().x,
          this.node.getPosition().y + 51,
          0
        ),
      })

      .start();
  }
  Reset() {
    let tempBlock: cc.Node = BlockSpawner.Instance.SpawnThing(
      new cc.Vec2(this.node.getPosition().x, this.node.getPosition().y),
      BlockSpawner.Instance._prefabsName.Block
    );
    tempBlock.getComponent(Block).currentState = successDropState.perfect;
    this.getHookBlock = tempBlock;
    GameManager.Instance.topBlock = tempBlock;
    // GameManager.Instance.AddBlock(tempBlock);
    this.node.position = this.startPos;
  }
  MoveDown(BlockDropNum: number) {
    cc.tween(this.node)
      .call(() => {
        this.delayTimerCounter = 0;
      })
      .to(0.3, {
        position: new cc.Vec3(
          this.node.getPosition().x,
          this.node.getPosition().y - Math.abs(51 * BlockDropNum),
          0
        ),
      })
      .start();
  }
  update(dt) {
    this.delayTimerCounter += dt;
    this.node.children.forEach((element) => {
      if (element.getComponent(cc.RigidBody))
        element.getComponent(cc.RigidBody).syncPosition(true);
    });
  }
}
