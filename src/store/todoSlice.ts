import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TTodo } from '../types/todo';

interface TodoState {
  list: TTodo[];
}

const initialState: TodoState = {
  list: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    fetchTodos: () => {},

    setTodos: (state, action: PayloadAction<TTodo[]>) => {
      state.list = action.payload;
    },

		requestAddTodo: (state, action: PayloadAction<string>) => {},
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.list.unshift(action.payload);
    },
		
		requestToggleTodo: (state, action: PayloadAction<TTodo>) => {},
    toggleTodo: (state, action: PayloadAction<string>) => {
        const todo = state.list.find((t) => t.id === action.payload);
      if (todo && !todo.completed) {
        todo.completed = true;
      } else if (todo) {
        todo.completed = false;
      }
    },

		updateTodo: (state, action: PayloadAction<TTodo>) => {},
		updateSuccessTodo: (state, action: PayloadAction<TTodo>) => {
			const todo = state.list.find((t) => t.id === String(action.payload?.id));
			if (todo) todo.content = action.payload.content;
		},

    deleteTodo: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((t) => t.id !== action.payload);
    },
  },
});

export const { 
	fetchTodos, 
	setTodos, 
	addTodo, 
	toggleTodo, 
	deleteTodo, 
	updateTodo,
	updateSuccessTodo,
	requestAddTodo,
	requestToggleTodo
} = todoSlice.actions;

export default todoSlice.reducer;
