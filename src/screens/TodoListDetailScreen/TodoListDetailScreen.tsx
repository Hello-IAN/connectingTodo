// screens/TodoDetailScreen.tsx
import React, { useState } from 'react';
import { Text, TextInput, View, Button, Alert, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../../store/todoSlice';
import { TodoDetailScreenNavigationProp, TodoDetailScreenRouteProp } from '../../types/stack';


type TodoDetailScreenProps = {
  navigation: TodoDetailScreenNavigationProp;
  route: TodoDetailScreenRouteProp;
};

export default function TodoDetailScreen({ 
	route, 
	navigation 
}:TodoDetailScreenProps) {

  const dispatch = useDispatch();
  const { todo } = route.params;
  const [content, setContent] = useState(todo.content);

  const isComplete = todo.completed;

  const handleSave = () => {
    dispatch(updateTodo({ ...todo, content }));
    navigation.goBack();
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    navigation.goBack();
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>할 일 내용</Text>
      <TextInput
        value={content}
        onChangeText={setContent}
        editable={!isComplete}
        style={styles.container}
        multiline
      />
      <Button title="수정 완료" onPress={handleSave} disabled={isComplete} />
      <Button title="삭제 하기" onPress={handleDelete}/>
    </View>
  );
};

const styles = StyleSheet.create({
	root: {
		 backgroundColor: '#f2f2f2',
    padding: 16,
    borderRadius: 16,
    marginVertical: 8,
		width: '100%',
		height: 520,
		overflow:'scroll',
		justifyContent: 'center',
		alignItems:'center',
		flexDirection:'column',
		position:'relative',
		rowGap:10,
	},
	title: {
		fontSize:24,
		fontWeight:600,
	},
	container: {
		width: '100%',
		flex:1,
		backgroundColor:'#FFeebb',
		alignItems: 'center',
		textAlign: 'center',
		justifyContent: 'center',
		fontSize:16,
		borderRadius:16,
	}
})