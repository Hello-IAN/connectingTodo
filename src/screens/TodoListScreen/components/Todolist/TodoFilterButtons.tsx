import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { TFilterTodo } from '../../../../types/todo'

interface TodoFilterButtonsProps {
	setFilter: (val:TFilterTodo) => void;
}

function TodoFilterButtons({
	setFilter
}:TodoFilterButtonsProps) {
	return (
		<View style={styles.filterRow}>
			<Button title="전체" onPress={() => setFilter('ALL')} />
			<Button title="완료" onPress={() => setFilter('COMPLETED')} />
			<Button title="미완료" onPress={() => setFilter('INCOMPLETE')} />
		</View>
	)
}

const styles = StyleSheet.create({
	filterRow: {
	position:'static',
	bottom:0,
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginVertical: 12,
},
})

export default TodoFilterButtons