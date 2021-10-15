import { Tag } from 'antd'
import { ReactElement } from 'react'
import { Label, labelRecord } from './LabelsDefined'

export const Labels = (): ReactElement => {
	const setLabelData = (
		event: React.DragEvent<HTMLSpanElement>,
		label: Label
	) => {
		event.dataTransfer?.setData('application/json', JSON.stringify(label))
	}

	return (
		<>
			{Object.entries(labelRecord).map(([key, value]) => {
				return (
					<Tag
						key={key}
						draggable={true}
						onDragStart={(event) => setLabelData(event, value)}
					>
						{value.tag}
					</Tag>
				)
			})}
		</>
	)
}
