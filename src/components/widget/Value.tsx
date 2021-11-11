import { Row, Col, CheckBox, Select } from 'antd'
import { LengthUnits } from '../../defined/type'
const { Option } = Select

type Props = {
  units: LengthUnits[]
}

export const Value = (props) => {
	const [value, setValue] = useState<number>(0)
	const [unit, setUnit] = useState<LengthUnits>(LengthUnits.PX)
  const formatValue:string = value.toString() + unit;

	const unitComponent = (
		<Select>
      {
        [LengthUnits.PX, LengthUnits.]
      }
			<Option value="px">px</Option>
			<Option value="rem">rem</Option>
			<Option value="%">%</Option>
			<Option value="auto">auto</Option>
		</Select>
	)

	return (
		<>
			<Row>
				<Col>
					<CheckBox></CheckBox>
				</Col>
				<Col>
					<Input
						value={formatValue}
						onChange={(e) => setValue(e.target.value)}
						addonAfter={unitComponent}
					></Input>
				</Col>
			</Row>
			<Slider value={}></Slider>
		</>
	)
}

export const Width = () => {
  const units:Omit<LengthUnits, LengthUnits.VH> = [LengthUnits.PX]

  return <Value units={units}/>
}
