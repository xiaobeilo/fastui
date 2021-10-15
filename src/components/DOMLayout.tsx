import { observer } from 'mobx-react'
import React, { ReactElement } from 'react'
import { useStore, useTransfer } from '../hooks/useStore'
import { DNode } from '../Transfer/DomModel'
import styles from './DOMLayout.module.scss'

export const DOMLayout = observer(function DOMLayout(): ReactElement {
	const { domModelData } = useStore()
	const transfer = useTransfer()
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
	const { curDOM } = useStore()
	return (
		<div
			className={styles.tree}
			data-id={id}
			key={id}
			// onClick={() => setDomId(id)}
			// style={{
			// 	background: curDomId === id ? '#1890ff' : '#fff',
			// 	color: curDomId === id ? '#fff' : '#000',
			// }}
		>
			{tag + ' ' + className}
			{children && children.map((t) => <Tree data={t}></Tree>)}
		</div>
	)
})
