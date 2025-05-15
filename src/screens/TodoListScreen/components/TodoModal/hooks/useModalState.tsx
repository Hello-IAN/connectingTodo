import React from 'react'

function useModalState() {
	const [isModalOpen, setIsModalOpen] = React.useState(false);
	
	const modalHandler = (state:boolean) => {
		setIsModalOpen(state)
	}

	return (
		{
			isModalOpen,
			modalHandler
		}
	)
}

export default useModalState