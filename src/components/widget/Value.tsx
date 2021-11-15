import { Row, Col, Checkbox, Select, Input, Slider } from 'antd'
import { useState } from 'react'
import {
	LengthUnit,
	lengthUnits,
	LengthUnits,
	SemanticsValue,
	semanticsValues,
	SemanticsValues,
} from '../../defined/type'
const { Option } = Select

type Props = {
	units: LengthUnits | SemanticsValues
}

export const Value = (props: Props) => {
	const [value, setValue] = useState<string>('')

	const selectUnit = (unit: any) => {
		if (lengthUnits.some((v) => v === unit)) {
			setValue(value + unit)
		} else if (semanticsValues.some((v) => v === unit)) {
			setValue(unit)
		}
	}

	const unitComponent = (
		<Select onChange={selectUnit}>
			{props.units.map((unit) => (
				<Option key={unit} value={unit}>
					{unit}
				</Option>
			))}
		</Select>
	)

	return (
		<>
			<Row>
				<Col>
					<Checkbox></Checkbox>
				</Col>
				<Col>
					<Input
						value={value}
						onChange={(e) => setValue(e.target.value)}
						addonAfter={unitComponent}
					></Input>
				</Col>
			</Row>
			<Slider value={parseFloat(value)}></Slider>
		</>
	)
}

/**
 * width / height
 */
export const Width = () => {
	const units = [
		LengthUnit.PX,
		LengthUnit.REM,
		LengthUnit.PERCENT,
		LengthUnit.VW,
		SemanticsValue.AUTO,
	]

	return <Value units={units} />
}

export const Height = () => {
	const units = [
		LengthUnit.PX,
		LengthUnit.REM,
		LengthUnit.PERCENT,
		LengthUnit.VH,
		SemanticsValue.AUTO,
	]

	return <Value units={units} />
}
