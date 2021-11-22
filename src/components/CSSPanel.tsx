import { Drawer } from 'antd'
import { observer } from 'mobx-react-lite'
import { useStore } from '../hooks/useContext'
import { ColorCom } from './widget/Color'
import { Height, Width } from './widget/Value'

export const CSSPanel = observer(function CSSPanel() {
	const { globalStore } = useStore()

	return (
		<Drawer
			width={500}
			visible={globalStore.cssPanelViable}
			onClose={() => globalStore.setCSSPanelViable(false)}
		>
			<div style={{ height: '100px' }}></div>
			<Width></Width>
			<Height></Height>
			<ColorCom name="color"></ColorCom>
		</Drawer>
	)
})
