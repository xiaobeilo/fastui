import { observer } from 'mobx-react'
import React, { ReactElement } from 'react'
import { useStore } from '../hooks/useContext'
import { DNode } from '../Transfer/DomModel'
import styles from './DOMLayout.module.scss'

export const DOMLayout = observer(function DOMLayout(): ReactElement {
	const { domModelData, transfer } = useStore()
	const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
		const parentId = (event.target as HTMLDivElement).dataset.id
		const res = event.dataTransfer.getData('application/json')
		const node: DNode = JSON.parse(res)
		parentId && transfer.domModel.addNode(parentId, node)
	}

	return (
		<div onDragOver={(e) => e.preventDefault()} onDrop={onDrop}>
			<Tree data={domModelData}></Tree>
		</div>
	)
})

const Tree = observer((props: { data: DNode }): ReactElement => {
	const { tag, children, className, id } = props.data
	const { currentDOM } = useStore()
	return (
		<div
			className={styles.tree}
			data-id={id}
			key={id}
			onClick={(e) => {
				e.stopPropagation()
				currentDOM.setDOMId(id)
			}}
			style={{
				background: currentDOM.id === id ? '#1890ff' : '#fff',
				color: currentDOM.id === id ? '#fff' : '#000',
			}}
		>
			{tag + ' ' + className}
			{children && children.map((t) => <Tree data={t} key={t.id}></Tree>)}
		</div>
	)
})
