import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native';

interface TodoNaveButtonProps {
	moveTo: ()=>void;
}

function TodoNaveButton({
	moveTo
}:TodoNaveButtonProps) {
	return (
		 <Pressable style={styles.deleteButton} onPress={moveTo}>
      <Text style={styles.deleteText}>자세히</Text>
    </Pressable>
	)
}

const styles = StyleSheet.create({
	 deleteButton: {
    backgroundColor: '#FFAAAA',
    justifyContent: 'center',
    alignItems: 'center',
    width:48,
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

export default TodoNaveButton