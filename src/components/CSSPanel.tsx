import { Breadcrumb, Form, Menu } from 'antd'

import { ReactElement, useEffect, useState } from 'react'
import { useStore } from '../hooks/useContext'

export const CSSPanel = (): ReactElement => {
	const { currentDOM } = useStore()
	const [curSelectors, setCurSelectors] = useState<string[]>([])
	const allSelectors: string[][] =
		currentDOM.dNode?.getPath().map((item) => item.model.className || []) || []

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

	return (
		<div>
			<Form>
				<Form.Item label="当前Node">
					<Breadcrumb>
						{curSelectors.map((item, index) => {
							return (
								<Breadcrumb.Item
									overlay={
										allSelectors[index].length > 1 ? (
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
				</Form.Item>
			</Form>
		</div>
	)
}
