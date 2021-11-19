import { Row, Col, Checkbox, Select, Input, Slider, Tag } from 'antd'
import { max } from 'lodash'
import { SliderMarks } from 'antd/lib/slider'
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
	units: (LengthUnit | SemanticsValue)[]
	name: 'width' | 'height'
	defaultValue: SemanticsValue
	defaultUnit: LengthUnit
	sliderMarks: Partial<Record<LengthUnit, SliderMarks>>
}

export const Value = (props: Props) => {
	const [value, setValue] = useState<string>(props.defaultValue)
	const [unit, setUnit] = useState<LengthUnit>(props.defaultUnit)

	const selectUnit = (unit: any) => {
		if (lengthUnits.some((v) => v === unit)) {
			setValue(parseFloat(value) + unit)
			setUnit(unit)
		} else if (semanticsValues.some((v) => v === unit)) {
			setValue(unit)
		}
	}

	const unitComponent = (
		<Select
			onChange={selectUnit}
			value={unit}
			disabled={semanticsValues.includes(value as SemanticsValue)}
		>
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
					<Checkbox></Checkbox> {props.name}
				</Col>
				<Col>
					<Input
						value={value}
						onChange={(e) => {
							const unit = props.units.find((u) => e.target.value.includes(u))
							if (unit) setUnit(unit as LengthUnit)
							setValue(e.target.value)
						}}
						addonAfter={unitComponent}
					></Input>
				</Col>
			</Row>
			<Row>
				<Col>
					{semanticsValues.map((v) => (
						<Tag
							onClick={() => setValue(v)}
							key={v}
							color={v === value ? 'blue' : 'default'}
						>
							{v}
						</Tag>
					))}
				</Col>
			</Row>
			<Slider
				value={parseFloat(value)}
				marks={props.sliderMarks[unit]}
				max={max(Object.keys(props.sliderMarks[unit] || {}).map(Number))}
				onChange={(v: number) => setValue(v.toString() + unit)}
			></Slider>
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
	const marks = {
		[LengthUnit.PX]: {
			0: '0px',
			100: '100px',
			375: '375px',
		},
		[LengthUnit.PERCENT]: {
			0: '0%',
			50: '50%',
			100: '100%',
		},
	}

	return (
		<Value
			name="width"
			units={units}
			defaultValue={SemanticsValue.AUTO}
			defaultUnit={LengthUnit.PX}
			sliderMarks={marks}
		/>
	)
}

export const Height = () => {
	const units = [
		LengthUnit.PX,
		LengthUnit.REM,
		LengthUnit.PERCENT,
		LengthUnit.VH,
		SemanticsValue.AUTO,
	]

	const marks = {
		[LengthUnit.PX]: {
			0: '0px',
			100: '0px',
			375: '375px',
		},
		[LengthUnit.PERCENT]: {
			0: '0%',
			50: '50%',
			100: '100%',
		},
	}
	return (
		<Value
			name="height"
			units={units}
			defaultValue={SemanticsValue.AUTO}
			defaultUnit={LengthUnit.PX}
			sliderMarks={marks}
		/>
	)
}
