export const DOMLayout = () => {
	const onDrop = (event: DragEvent) => {
		const id = event.target?.dataset.id
	}

	return <div onDragOver={(e) => e.preventDefault()} onDrop={onDrop}></div>
}
