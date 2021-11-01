import { Drawer } from 'antd'
import { observer } from 'mobx-react-lite'
import { useStore } from '../hooks/useContext'

export const CSSPanel = observer(function CSSPanel() {
	const { globalStore } = useStore()

	return (
		<Drawer
			visible={globalStore.cssPanelViable}
			onClose={() => globalStore.setCSSPanelViable(false)}
		>
			fsfsdfdsfsdfsd
		</Drawer>
	)
})
