import { Button } from "antd"
import styles from './Image.module.scss'

export const Image = () => {
  const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target
    const url = value.replace(/[\/]/, '/')
    console.log(url)
    console.log(e)
  }
  
  return <div>
    <span>{}</span>
    <div className={styles.inputWrap}>
      <input className={styles.input} type="file" accept="image/*" onChange={onChangeHandler}/>
      <Button> upload</Button>
    </div>
  </div>
}