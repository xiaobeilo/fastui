import { createContext, CSSProperties } from "react";
import { action, observable } from 'mobx'
import { DNode } from "../Transfer/DomModel";
import Transfer, { Role } from "../Transfer";

// interface Store {
//   curDOM: DNode | null;
//   curDomId: string | undefined;
//   cssPopupVisible: boolean;
//   curSelectorName: string;
//   curSelector: CSSProperties
// }

// export class TransferStore {
//   public transfer: Transfer = new Transfer(Role.main)
//   public curDomId: string = ''
//   // @observable
//   // curDOM: DNode | null;
//   // curDomId: string | undefined;
//   // cssPopupVisible: boolean;
//   // curSelectorName: string;
//   // curSelector: CSSProperties
//   @action
//   public setDomId(id: string) {
//     this.curDomId = id
//   }
// }

export const domModelData = observable<DNode>({
  id: 'root',
  tag: 'div',
  children: [],
  selectors: [],
  className: [],
  $el: document.createElement('div')
})

export const curDOM = observable<{ id: string, ref: HTMLElement | null }>({
  id: '',
  ref: null
})

export const allStore = {
  domModelData,
  curDOM
}

export type AllStore = typeof allStore