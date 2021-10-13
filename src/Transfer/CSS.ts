import { CSSProperties } from "react"
import Message from "./Message"

type CSSRecord = Record<string, Styles>

class Styles {
  name: string;
  props: CSSProperties = {}
  propsBak: any
  constructor(name: string) {
    this.name = name
  }
  addStyle(cssProperties: CSSProperties) {
    this.props = {
      ...this.props,
      ...cssProperties
    }
  }

  hideStyle(attr: keyof CSSProperties) {
    this.propsBak[attr] = this.props[attr]
    Reflect.deleteProperty(this.props, attr)
  }

  showStyle(attr: keyof CSSProperties) {
    // this.props[attr] = this.propsBak[attr]

  }

  // renderStyle () {

  // }

  // styleOutput () {

  // }

  // recover () {

  // }
}

export default class CSS {
  message: Message
  cssRecord: CSSRecord = {}
  constructor(message: Message) {
    this.message = message
  }

  find(selector: string): Styles | undefined {
    return this.cssRecord[selector]
  }

  createStyle(selector: string) {
    this.cssRecord[selector] = new Styles(selector)
    return this.cssRecord[selector]
  }

}