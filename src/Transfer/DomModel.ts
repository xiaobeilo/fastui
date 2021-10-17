import TreeModel, { Node } from 'tree-model'
import uniqid from 'uniqid'
import { DomModelEvent } from './Events'
import Message from './Message'
import cx from 'classnames'

export interface DNode {
  id: string;
  tag: 'p' | 'div' | 'span',
  children?: DNode[],
  ref: HTMLElement
  selectors: string[],
  className: string[]
}



export default class DomModel {
  data: DNode
  // data: DNode = {
  //   id: 'root',
  //   tag: 'div',
  //   children: [],
  //   selectors: [],
  //   className: [],
  //   $el: document.createElement('div')
  // }
  treeModel = new TreeModel()
  message: Message
  root
  constructor(message: Message, data: DNode) {
    this.message = message
    this.data = data
    this.root = this.treeModel.parse<DNode>(this.data)
  }
  public listener() {
    this.message.receive(DomModelEvent.TREE_ADD_CHILD, this.addNode)
  }
  private getNode(id: string): Node<DNode> | undefined {
    return this.root.first((n) => n.model.id === id)
  }

  addNode(parentNodeId: string, nodeData: DNode, index?: number) {
    const el = document.createElement(nodeData.tag)
    const id = `node-${uniqid.process()}`
    const node = this.treeModel.parse<DNode>({
      ...nodeData,
      id: nodeData.id || id,
      ref: el
    })
    const parentNode = this.root.first(n => n.model.id === parentNodeId)
    if (index) {
      parentNode?.addChildAtIndex(node, index)
    } else {
      parentNode?.addChild(node)
    }
    this.message.send(DomModelEvent.TREE_ADD_CHILD, parentNodeId, {
      ...nodeData, id
    }, index)
  }

  addClassName(nodeId: string, className: string) {
    const node = this.getNode(nodeId)
    if (!node?.model.className.includes(className)) {
      node?.model.className.push(className)
    }
    (node?.model.$el as HTMLElement).className = cx(node?.model.className)
    this.message.send(DomModelEvent.ADD_CLASS_NAME, nodeId, className)
  }

  removeClassName(nodeId: string, className: string) {
    const node = this.getNode(nodeId)
    if (node) {
      node.model.className = node.model.className.filter((c: string) => c !== className)
      node.model.$el.className = cx(node.model.className)
      this.message.send(DomModelEvent.REMOVE_CLASS_NAME, nodeId, className)
    }
  }

  addSelector(nodeId: string, selector: string) {
    const node = this.getNode(nodeId)
    if (!node?.model.selectors.includes(selector)) {
      node?.model.selectors.push(selector)
    }
  }
}