import CSS from "./CSS"
import DomModel from "./DomModal"
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
  constructor(role: Role) {
    this.role = role
    this.message = new Message(this.role)
    this.domModel = new DomModel(this.message)
    this.css = new CSS(this.message)
  }
  init() {
    if (this.role === Role.render) {
      this.domModel.listener()
      // this.css.listener()
    }
  }
}