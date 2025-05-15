import React from 'react'

import { Button } from 'react-native'

interface TodoMdalProps {
	modalHandler:()=>void
}
export default function TodoAddButton({
	modalHandler
}:TodoMdalProps) {
	return (
		<Button title="할 일 추가하기" onPress={modalHandler} />
	)
}