import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native';

interface TodoDeleteButtonProps {
	onDelete: ()=>void;
}

function TodoDeleteButton({
	onDelete
}:TodoDeleteButtonProps) {
	return (
		 <Pressable style={styles.deleteButton} onPress={onDelete}>
      <Text style={styles.deleteText}>X</Text>
    </Pressable>
	)
}

const styles = StyleSheet.create({
	 deleteButton: {
    backgroundColor: '#FFEEBB',
    justifyContent: 'center',
    alignItems: 'center',
    width:32,
    height:32,
    padding: 8,
    borderRadius: 8,
    marginVertical: 8,
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
})

export default TodoDeleteButton