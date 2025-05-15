import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface EmptyCardProps {
}

export default function EmptyCard({ 
}: EmptyCardProps ) {
  return (
		<View style={styles.root}>
			<View style={styles.card}>
      	<Text style={styles.text}>{'아직 저장된\n할 일이 없어요'}</Text>
			</View>
		</View>
  );
}

const styles = StyleSheet.create({
	root: {
		flex:1,
		alignItems:'center',
		justifyContent:'center',
	},
  card: {
    backgroundColor: '#f2f2f2',
		width:220,
		height:220,
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
		alignItems:'center',
		justifyContent:'center'
  },
  text: {
		textAlign:'center',
    fontSize: 16,
  },
});
