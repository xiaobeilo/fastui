import { CSSProperties } from "react"
import Message from "./Message"

type CSSRecord = Record<string, Styles>

class Styles {
  name: string;
  props: Record<string, string | number> = {}
  propsBak: Record<string, string | number> = {}
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
    this.props[attr] = this.propsBak[attr]
  }

  output(): string {
    let text = ''
    for (let key in this.props) {
      text += `${key}: ${this.props[key]}; \n`
    }
    return `
      ${this.name} {
        ${text}
      }
		`
  }

  renderStyle(): void {
    const el = document.getElementById(this.name) as HTMLStyleElement
    if (el) {
      el.innerHTML = this.output()
    } else {
      const style = document.createElement('style')
      style.id = this.name
      style.type = 'text/css'
      style.innerHTML = this.output()
      document.head.appendChild(style)
    }
  }
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