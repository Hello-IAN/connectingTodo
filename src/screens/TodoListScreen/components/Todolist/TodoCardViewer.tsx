import React from 'react'
import { useTodolistContext } from '../../hooks/useTodolistContext'
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import TodoCard from './TodoCard';
import useFilterTodolist from '../../hooks/useFilterTodolist';
import TodoFilterButtons from './TodoFilterButtons';
import EmptyCard from './EmptyCard';
import usePagenation from '../../hooks/usePagenation';

export default function TodoCardViewer() {
	const { todolist, handleToggleTodo, handleDeleteTodo, refreshing, onRefresh } = useTodolistContext();
	const { filteredTodolist, setFilterOption } = useFilterTodolist();
	const { onEndReached, curPageTodolist} = usePagenation(filteredTodolist(todolist))
	return (
		<View style={styles.root}>
			{
				todolist?.length == 0 ? 
				<EmptyCard /> :
				<View>
					<FlatList
							data={curPageTodolist}
							keyExtractor={item => item.id}
							renderItem={({ item }) => <TodoCard 
								todo={item}
								onToggle={()=>handleToggleTodo(item)}
								onDelete={()=>handleDeleteTodo(item.id)}
							/>}
							onEndReached={onEndReached}
							onEndReachedThreshold={0.1}
							contentContainerStyle={styles.list}
							refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
						/>
						<TodoFilterButtons setFilter={setFilterOption} />
				</View>
			}
		</View>
	)
}

const styles = StyleSheet.create({
	root: {
		width:'100%',
		flex:1,
		backgroundColor:'#FFeebb',
		alignItems: 'center',
	},
	list: { paddingVertical: 16 },
})