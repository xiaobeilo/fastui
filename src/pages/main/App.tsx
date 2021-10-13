import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Card, Layout } from 'antd'
const { Sider, Content, Footer } = Layout

function App() {
	const origin = window.location.origin
	return (
		<Layout>
			<Sider>
				<Card>labels</Card>
				<Card>Dom</Card>
			</Sider>
			<Content>
				<Card>
					<iframe
						id="iframe"
						src={`${origin}/pages/render/index.html`}
					></iframe>
				</Card>
			</Content>
			<Sider>props</Sider>
			<Footer>Footer</Footer>
		</Layout>
	)
}

export default App
