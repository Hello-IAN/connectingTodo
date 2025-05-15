import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

export default function TodoInputModal({
  onClose,
  onSubmit,
}: {
  onClose: () => void;
  onSubmit: (text: string) => void;
}) {
  const [input, setInput] = useState('');
  
  return (
    <KeyboardAvoidingView
      style={styles.modalContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.modal}>
        <TextInput
          placeholder="할 일을 입력하세요"
          multiline
          value={input}
          onChangeText={setInput}
          style={styles.input}
        />
        <Button title="추가" onPress={() => input && onSubmit(input)} />
        <Button title="취소" onPress={onClose} color="gray" />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00000080',
  },
  modal: {
    margin: 20,
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 10,
    elevation: 5,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 12,
    fontSize: 16,
  },
});