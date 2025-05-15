import React from 'react'
import { TTodo } from '../../../types/todo'

function useEditTodolist() {
	const [target, setTarget] = React.useState<TTodo>()
	return (
		{
			target, setTarget
		}
	)
}

export default useEditTodolist