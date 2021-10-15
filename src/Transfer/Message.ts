import EventEmitter from 'eventemitter3'
import { Role } from '.'
import { DNode } from './DomModel'
import { ALlEvents, CSSEvent, DomModelEvent } from './Events'

export default class Message {
  ee: EventEmitter = new EventEmitter()
  role: Role
  constructor(role: Role) {
    this.role = role
    if (this.role === Role.render) {
      window.addEventListener('message', evt => {
        const { event, payload } = evt.data
        const actions = this.ee.listeners(event)
        actions.forEach(actions => actions(...payload))
      })
    }
  }
  get iframeWin(): WindowProxy | null {
    return (document.getElementById('iframe') as HTMLIFrameElement)?.contentWindow
  }
  public send<K extends ALlEvents>(type: K, ...args: SendArgs[K]) {
    if (this.role === Role.render) {
      return
    }
    let data = {
      type,
      payload: args
    }
    this.iframeWin?.postMessage(data)
  }
  receive<K extends keyof ReceiveArgs>(type: K, fun: ReceiveArgs[K]) {
    this.ee.on(type, fun)
  }
}

interface SendArgs {
  [DomModelEvent.TREE_ADD_CHILD]: [ParentNodeId: string, NodeData: DNode, index?: number]
  [DomModelEvent.ADD_CLASS_NAME]: [nodeId: string, className: string]
  [DomModelEvent.REMOVE_CLASS_NAME]: [nodeId: string, className: string]
  [DomModelEvent.SELECT_DOM]: []
  [CSSEvent.ADD_DOM_SELECTOR]: []
  [CSSEvent.SHEET_PROP_MODIFY]: []
  [CSSEvent.SHEET_PROP_REMOVE]: []
  [CSSEvent.SHEET_SYNC]: []
}

interface ReceiveArgs {
  [DomModelEvent.TREE_ADD_CHILD]: (...args: SendArgs[DomModelEvent.TREE_ADD_CHILD]) => void
}