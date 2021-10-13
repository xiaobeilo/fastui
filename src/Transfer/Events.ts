
export enum DomModelEvent {
  TREE_ADD_CHILD = 'TREE_ADD_CHILD',
  SELECT_DOM = 'SELECT_DOM',
  ADD_CLASS_NAME = 'ADD_CLASS_NAME',
  REMOVE_CLASS_NAME = 'REMOVE_CLASS_NAME'
}
export enum CSSEvent {
  SHEET_PROP_MODIFY = 'SHEET_PROP_MODIFY',
  SHEET_PROP_REMOVE = 'SHEET_PROP_REMOVE',
  SHEET_SYNC = 'SHEET_SYNC',
  ADD_DOM_SELECTOR = 'ADD_DOM_SELECTOR',
}

export type ALlEvents = DomModelEvent | CSSEvent