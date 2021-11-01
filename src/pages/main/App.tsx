import './App.css'
import 'antd/dist/antd.min.css'
import { Card, Layout } from 'antd'
import { StoreContext } from '../../context/transferContext'
import { Labels } from '../../components/Labels'
import { DOMLayout } from '../../components/DOMLayout'
import { allStore } from '../../store'
import { PropsPanel } from '../../components/PropsPanel'
import { CSSPanel } from '../../components/CSSPanel'
const { Sider, Content, Footer } = Layout

function App() {
	const origin = window.location.origin
	return (
		<StoreContext.Provider value={allStore}>
			<Layout className="App">
				<Sider>
					<Card title="Labels">
						<Labels></Labels>
					</Card>
					<Card title="DOM Layout">
						<DOMLayout></DOMLayout>
					</Card>
				</Sider>
				<Content>
					<Card>
						<iframe
							id="iframe"
							src={`${origin}/pages/render/index.html`}
						></iframe>
					</Card>
				</Content>
				<Sider style={{ background: '#fff' }}>
					<PropsPanel></PropsPanel>
					<CSSPanel></CSSPanel>
				</Sider>
				<Footer>Footer</Footer>
			</Layout>
		</StoreContext.Provider>
	)
}

export default App
