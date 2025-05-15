import React from 'react'

function useEditModalState() {
	const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
	
	const editModalHandler = (state:boolean) => {
		setIsEditModalOpen(state)
	}

	return (
		{
			isEditModalOpen,
			editModalHandler
		}
	)
}

export default useEditModalState