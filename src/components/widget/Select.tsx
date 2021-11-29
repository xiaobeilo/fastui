import { Tag } from "antd"
import { useState } from "react"


const valueMap:Record<string, string[]> = {
  display :['block', 'inline', 'inline-block', 'flex'],
  repeat: ['repeat', 'no-repeat']
}

type Props = {
  name: string
}

export const Select = (props: Props) => {
  const [value, setValue] = useState<string>()
  
  return <div style={{display:"flex"}}>
    <span>{props.name}:</span>
    <div>
      {valueMap[props.name].map(v => <Tag key={v} color={value === v ? '#f50': ''} onClick={() => setValue(v)}>{v}</Tag>)}
    </div>
  </div>
}

export const Display = () => {
  return <Select name="display"></Select>
}

export const Repeat = () => {
  return <Select name="repeat"></Select>
}
