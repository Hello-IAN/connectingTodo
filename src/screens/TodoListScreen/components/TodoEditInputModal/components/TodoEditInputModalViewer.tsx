import React from 'react'

import { Modal } from 'react-native';
import { useTodolistContext } from '../../../hooks/useTodolistContext';
import TodoEditInputModal from './TodoEditInputModal';
import { TTodo } from '../../../../../types/todo';

interface TodoEditModalViewerProps {
	isModalOpen:boolean;
	onClose: () => void;
	org?:TTodo;
}
export default function TodoEditModalViewer({
	isModalOpen,
	onClose,
	org,
}:TodoEditModalViewerProps) {
	const { handleUpdateTodo } = useTodolistContext();

	if (!org) return null;
	
	return (
		<Modal visible={isModalOpen} animationType="slide" transparent={true}>
			<TodoEditInputModal 
				onSubmit={
					(content)=>{
						handleUpdateTodo({
							...org, content:content
						});
						onClose();
					}
				} 
				onClose={onClose}
				org={org}
			/>
		</Modal>
	)
}