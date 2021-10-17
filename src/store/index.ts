import { action, observable, computed, makeAutoObservable } from 'mobx'
import TreeModel from 'tree-model/types';
import Transfer, { Role } from '../Transfer';
import { DNode } from "../Transfer/DomModel";

const domModelData = observable<DNode>({
  id: 'root',
  tag: 'div',
  children: [],
  selectors: [],
  className: [],
  ref: document.createElement('div')
})

export const curDOM = observable<{ id: string, ref: HTMLElement | null }>({
  id: '',
  ref: null
})

class CurrentDOM {
  id: string = '';
  constructor() {
    makeAutoObservable(this, {
      id: observable,
      ref: computed,
      dNode: computed,
      setDOMId: action
    })
  }
  get dNode(): TreeModel.Node<DNode> | undefined {
    return allStore.transfer.domModel.root.first(n => n.model.id === this.id)
  }
  get ref(): HTMLElement | undefined {
    return this.dNode?.ref
  }
  setDOMId(id: string) {
    this.id = id
  }
}

export const allStore = {
  domModelData,
  currentDOM: new CurrentDOM(),
  transfer: new Transfer(Role.main, domModelData)
}

export type AllStore = typeof allStore