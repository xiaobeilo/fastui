import { action, observable, computed, makeAutoObservable, makeObservable, toJS } from 'mobx'
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

class GlobalStore {
  cssPanelViable: boolean = false;
  constructor() {
    makeObservable(this, {
      cssPanelViable: observable,
      setCSSPanelViable: action
    })
  }
  setCSSPanelViable(visible?: boolean) {
    this.cssPanelViable = visible ?? !this.cssPanelViable
  }
}

export const allStore = {
  domModelData,
  currentDOM: new CurrentDOM(),
  globalStore: new GlobalStore(),
  transfer: new Transfer(Role.main, domModelData)
}

export type AllStore = typeof allStore