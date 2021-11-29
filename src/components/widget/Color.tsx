import { Card, Checkbox, Col, Row, Tag } from 'antd'
import { useRef, useState } from 'react'
import { ColorChangeHandler, RGBColor, SketchPicker } from 'react-color'
import styles from './Color.module.scss'
import chroma, { Color } from 'chroma-js'
import { useClickOut } from '../../hooks/useClickout'

type Props = {
	name: string
}

export const ColorCom = (props: Props) => {
	const [color, setColor] = useState<Color>(chroma('black'))
	const [fontColor, setFontColor] = useState<string>(chroma('white').css())
	const colorPickerRef = useRef(null)
	const [visible, setVisible] = useClickOut(colorPickerRef)

	const changeHandler: ColorChangeHandler = (res) => {
		const { r, g, b, a = 0 } = res.rgb
		setColor(chroma.rgb(r, g, b).alpha(a))
		setFontColor(chroma.rgb(255 - r, 255 - g, 255 - b).css())
	}

	return (
			<div className={styles.colorParent}>
			{props.name}:
				<Tag
					className={styles.tag}
					color={color.css()}
					style={{color: fontColor}}
					onClick={() => setVisible(true)}
				>
					{color.css()}
				</Tag>
				{visible && (
					<div
						ref={colorPickerRef}
					>
						<SketchPicker
						className={styles.colorPicker}
						color={color.css()}
						onChange={changeHandler}
					/>
					</div>
				)}
			</div>
	)
}
