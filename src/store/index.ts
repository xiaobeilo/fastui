import { createContext, CSSProperties } from "react";
import { observable } from 'mobx'
import DNode from "../Transfer/DomModal";

// interface Store {
//   curDOM: DNode | null;
//   curDomId: string | undefined;
//   cssPopupVisible: boolean;
//   curSelectorName: string;
//   curSelector: CSSProperties
// }

export class Store {
  @observable
  curDOM: DNode | null;
  curDomId: string | undefined;
  cssPopupVisible: boolean;
  curSelectorName: string;
  curSelector: CSSProperties

}