import { Tag } from 'antd'
import { Label, labelRecord } from './LabelsDefined'

export const Labels = () => {
	const setLabelData = (
		event: React.DragEvent<HTMLSpanElement>,
		label: Label
	) => {
		event.dataTransfer?.setData('application/json', JSON.stringify(label.tag))
	}

	return Object.entries(labelRecord).map(([key, value]) => {
		return (
			<Tag onDragStart={(event) => setLabelData(event, value)}>{value.tag}</Tag>
		)
	})
}
