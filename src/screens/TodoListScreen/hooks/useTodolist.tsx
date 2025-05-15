import React from 'react'
import { TTodo } from '../../../types/todo'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { deleteTodo, fetchTodos, requestAddTodo, requestToggleTodo, toggleTodo, updateTodo } from '../../../store/todoSlice';

function useTodolist() {
	const dispatch = useDispatch();
  const todolist = useSelector((state: RootState) => state.todos.list);
	const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await dispatch(fetchTodos());
    setRefreshing(false);
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(fetchTodos());
  }, []);

	const handleAddTodo = (content:string) => {
		dispatch(requestAddTodo(content))
	}
	const handleUpdateTodo = (old:TTodo) => {
		dispatch(updateTodo(old))
	}

  const handleToggleTodo = (old:TTodo) => {
    dispatch(requestToggleTodo(old));
  };

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

	return (
		{
			todolist,
			handleAddTodo,
			handleToggleTodo,
			handleDeleteTodo,
			handleUpdateTodo,
			refreshing,
			onRefresh
		}
	)
}

export default useTodolist