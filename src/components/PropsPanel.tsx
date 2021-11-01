import { Breadcrumb, Button, Form, Input, Menu, Space, Tag } from 'antd'
import { ReactElement, useEffect, useState } from 'react'
import { useStore } from '../hooks/useContext'
import { EditOutlined } from '@ant-design/icons'
import { observer } from 'mobx-react'

export const PropsPanel = observer((): ReactElement => {
	const { currentDOM, transfer, globalStore } = useStore()
	const [curSelectors, setCurSelectors] = useState<string[]>([])
	const [className, setClassName] = useState('')
	const [allSelectors, setAllSelectors] = useState<string[][]>([])

	useEffect(() => {
		setAllSelectors(
			currentDOM.dNode?.getPath().map((item) => item.model.className || []) ||
				[]
		)
	}, [currentDOM.id])

	useEffect(() => {
		const reset = true
		if (!allSelectors) return
		setCurSelectors(
			allSelectors?.reduce((result, item, index) => {
				let str = (reset ? '' : curSelectors[index]) || item[0] || ''
				return [...result, str]
			}, [])
		)
	}, [allSelectors])

	const addClassName = () => {
		if (!className) return
		transfer.domModel.addClassName(currentDOM.id, className)
		setClassName('')
	}

	return (
		<div>
			<Form>
				<Form.Item label="当前Node">
					<Breadcrumb>
						{curSelectors.map((item, index) => {
							return (
								<Breadcrumb.Item
									key={index}
									overlay={
										allSelectors[index] && allSelectors[index].length > 1 ? (
											<Menu>
												{allSelectors[index].map((c) => (
													<Menu.Item key={c}>{c}</Menu.Item>
												))}
											</Menu>
										) : (
											<></>
										)
									}
								>
									{item}
								</Breadcrumb.Item>
							)
						})}
					</Breadcrumb>
					<EditOutlined onClick={() => globalStore.setCSSPanelViable()} />
				</Form.Item>

				<Form.Item>
					{currentDOM.dNode?.model.className.map((c: string) => (
						<Tag
							closable
							key={c}
							onClose={() => {
								transfer.domModel.removeClassName(currentDOM.id, c)
							}}
						>
							{c}
						</Tag>
					))}
				</Form.Item>
				<Form.Item>
					<Space>
						<Input
							placeholder="请输入class"
							value={className}
							onChange={(e) => setClassName(e.target.value)}
						></Input>
						<Button onClick={addClassName}>添加</Button>
					</Space>
				</Form.Item>
			</Form>
		</div>
	)
})
