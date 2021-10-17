import CSS from "./CSS"
import DomModel, { DNode } from "./DomModel"
import Message from "./Message";

export enum Role {
  render,
  main
}

export default class Transfer {
  domModel: DomModel
  css: CSS
  role: Role
  message: Message
  constructor(role: Role, domModelData: DNode) {
    this.role = role
    this.message = new Message(this.role)
    this.domModel = new DomModel(this.message, domModelData)
    this.css = new CSS(this.message)
  }
}