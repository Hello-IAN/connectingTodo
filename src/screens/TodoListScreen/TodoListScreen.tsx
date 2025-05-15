import React from 'react'
import { StyleSheet, View } from 'react-native';
import { TodolistContextProvider } from './components/TodolistContextProvider';
import useTodoList from './hooks/useTodolist';
import TodoAddButton from './components/TodoModal/components/TodoAddButton';
import useModalState from './components/TodoModal/hooks/useModalState';
import TodoCardViewer from './components/Todolist/TodoCardViewer';
import TodoEditModalViewer from './components/TodoEditInputModal/components/TodoEditInputModalViewer';
import useEditModalState from './components/TodoModal/hooks/useEditModalState';
import useEditTodolist from './hooks/useEditTodolist';
import { EditModalContextProvider } from './components/EditModalContextProvider';
import TodoModalViewer from './components/TodoModal/TodoModalViewer';

export default function TodoListScreen() {
	const {todolist, handleAddTodo, handleDeleteTodo, handleToggleTodo, handleUpdateTodo, refreshing, onRefresh} = useTodoList();
	const {target, setTarget} = useEditTodolist();
	const {isModalOpen, modalHandler} = useModalState();
	const {isEditModalOpen, editModalHandler} = useEditModalState();
	return (
		<View style={styles.container}>
			<TodolistContextProvider value={{
					todolist, 
					handleAddTodo, 
					handleDeleteTodo, 
					handleToggleTodo, 
					handleUpdateTodo,
					onRefresh,
					refreshing
				}}>
				<TodoAddButton modalHandler={()=>modalHandler(true)} />
				<EditModalContextProvider value={{
					setTarget,
					editModalHandler
				}}>
					<TodoCardViewer />
					<TodoEditModalViewer isModalOpen={isEditModalOpen} onClose={()=>{
						editModalHandler(false)
					}} org={target} />
				</EditModalContextProvider>
				<TodoModalViewer isModalOpen={isModalOpen} onClose={()=>modalHandler(false)} />
			</TodolistContextProvider>
		</View>
	)
}


const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});
