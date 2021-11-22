import { Card, Checkbox, Col, Row, Tag } from 'antd'
import { useState } from 'react'
import { ColorChangeHandler, RGBColor, SketchPicker } from 'react-color'
import styles from './Color.module.scss'
import chroma, { Color } from 'chroma-js'

// const ColorPicker = () => {
// 	return <SketchPicker />
// }

type Props = {
	name: string
}

export const ColorCom = (props: Props) => {
	// const [color, setColor] = useState<RGBColor>({ r: 0, g: 0, b: 0, a: 0 })
	const [color, setColor] = useState<Color>(chroma('black'))
	const [visible, setVisible] = useState(false)

	const changeHandler: ColorChangeHandler = (res) => {
		const { r, g, b, a = 0 } = res.rgb
		// console.log(chroma.rgb(r, g, b).alpha(a))
		setColor(chroma.rgb(r, g, b).alpha(a))
		console.log(chroma.scale(color).domain([1, 0]))
	}

	return (
		<>
			<Row>
				<Col>
					<Checkbox></Checkbox> {props.name}
				</Col>
			</Row>
			<Row className={styles.colorParent}>
				<Tag
					className={styles.tag}
					color={color.css()}
					// style={{color: }}
					onClick={() => setVisible(true)}
				>
					{color.css()}
				</Tag>
				{visible && (
					<SketchPicker
						className={styles.colorPicker}
						color={color.css()}
						onChange={changeHandler}
					/>
				)}
			</Row>
		</>
	)
}
