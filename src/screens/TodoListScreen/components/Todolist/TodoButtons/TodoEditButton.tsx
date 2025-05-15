import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native';

interface TodoEditButtonProps {
	onEditModalOpen: () => void;
  isComplete: boolean;
}

function TodoEditButton({
	onEditModalOpen,
  isComplete
}:TodoEditButtonProps) {
	return (
		 <Pressable  style={styles.editButton} onPress={(e)=> {
        isComplete ? {} : onEditModalOpen();
    }}>
      <Text style={styles.deleteText}>수정</Text>
    </Pressable>
	)
}

const styles = StyleSheet.create({
	 editButton: {
    backgroundColor: '#AA2233',
    justifyContent: 'center',
    alignItems: 'center',
    width:32,
    height:32,
    padding: 4,
    borderRadius: 8,
    marginVertical: 8,
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize:12,
  },
})

export default TodoEditButton