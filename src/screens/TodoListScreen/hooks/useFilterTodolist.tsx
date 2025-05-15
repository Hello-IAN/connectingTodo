import React from 'react'
import { TFilterTodo, TTodo } from '../../../types/todo'

function useFilterTodolist() {
	const [filterOption, setFilterOption] = React.useState<TFilterTodo>('ALL');
	
	const filteredTodolist = (todolist:TTodo[]) => {
		return (todolist.filter(todo => {
			if (filterOption === 'COMPLETED') return todo.completed;
			if (filterOption === 'INCOMPLETE') return !todo.completed;
  	return true;
	}))};

	return ({
		filteredTodolist, setFilterOption
	})
}

export default useFilterTodolist