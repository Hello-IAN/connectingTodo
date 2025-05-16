import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import TodoDeleteButton from './TodoButtons/TodoDeleteButton';
import TodoEditButton from './TodoButtons/TodoEditButton';
import { TTodo } from '../../../../types/todo';
import { useEditModalContext } from '../../hooks/useEditModalContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../types/stack';
import TodoNavButton from './TodoButtons/TodoNavButton.tsx';

interface TodoCardProps {
	todo:TTodo
	onToggle:()=>void;
	onDelete: () => void;
}

type Navigation = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function TodoCard({ 
	todo,
	onToggle,
	onDelete,
}: TodoCardProps ) {
	const { content, completed } = todo;
	const { setTarget, editModalHandler} = useEditModalContext()
	const navigation = useNavigation<Navigation>();

  const moveTo = () => {
    navigation.navigate('TodoDetail', { todo }); // todo 객체 그대로 넘김
  };
  return (
    <Pressable style={styles.card} onPress={(e)=>{onToggle()}}>
			<View style={styles.cardContainer}>
				<Text 
					style={[styles.text, completed && styles.completed]}
					numberOfLines={5} ellipsizeMode="tail"
				>
					{content}
				</Text>
			</View>
			<View style={styles.btnSection}>
				<View style={styles.btnContainer}>
					<TodoNavButton moveTo={moveTo}/>
				</View>
				<View style={styles.btnContainer}>
					<TodoEditButton 
						onEditModalOpen={()=> {
							setTarget(todo);
							editModalHandler(true);
						}}
						isComplete={completed} 
					/>
				</View>
				<View style={styles.btnContainer}>
					<TodoDeleteButton onDelete={onDelete} />
				</View>
			</View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    borderRadius: 16,
    marginVertical: 8,
		width: 260,
		height: 220,
		justifyContent: 'center',
		flexDirection:'row',
		position:'relative',
  },
	cardContainer: {
		flex:3,

	},
  text: {
    fontSize: 16,
		lineHeight: 18,
  },
	completed: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
	btnSection: {
		flexDirection:'column'
	},
	btnContainer: {
		flex:1,
		alignItems:'flex-end',
		justifyContent:'flex-start',
		position:'relative',
		right:0,
	}
});
