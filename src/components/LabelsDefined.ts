export interface Label {
  tag: keyof HTMLElementTagNameMap,
  children?: Label[]
}
type LabelRecord = Record<string, Label>

export const labelRecord: LabelRecord = {
  img: {
    tag: "img",
  },
  div: {
    tag: "div",
    children: [],
  },
  span: {
    tag: "span",
    children: [],
  },
  p: {
    tag: "p",
    children: [],
  },
};
