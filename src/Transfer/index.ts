import CSS from "./CSS"
import DomModel from "./DomModel"
import Message from "./Message";
import { domModelData } from '../store/index'

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
    this.domModel = new DomModel(this.message, domModelData)
    this.css = new CSS(this.message)
  }
}