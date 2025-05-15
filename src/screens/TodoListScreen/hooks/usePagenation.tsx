import React from 'react'
import { TTodo } from '../../../types/todo'

function usePagenation(todolist:TTodo[]) {
	const [page, setPage] = React.useState(1);
	
	const curPageTodolist = React.useMemo(
		() => todolist.slice(0, page * 10),
		[todolist, page]
	);
	
	const onEndReached = () => {
		if (page * 10 < todolist.length) setPage((prev) => prev + 1);
	}

	return (
		{
			setPage,
			curPageTodolist,
			onEndReached
		}
	)
}

export default usePagenation