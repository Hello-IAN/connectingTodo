import React from 'react'

import { Modal } from 'react-native';
import TodoInputModal from './components/TodoInputModal';
import { useTodolistContext } from '../../hooks/useTodolistContext';

interface TodoModalViewerProps {
	isModalOpen:boolean;
	onClose: () => void;
}
export default function TodoModalViewer({
	isModalOpen,
	onClose,
}:TodoModalViewerProps) {
	const { handleAddTodo } = useTodolistContext();
	return (
		<Modal visible={isModalOpen} animationType="slide" transparent={true}>
			<TodoInputModal 
				onSubmit={
					(content)=>{
						handleAddTodo(content);
						onClose();
					}
				} 
				onClose={onClose}
			/>
		</Modal>
	)
}