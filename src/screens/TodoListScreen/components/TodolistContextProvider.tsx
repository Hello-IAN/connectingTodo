import React, { ReactNode } from "react";
import { TTodo } from "../../../types/todo";

type TodolistContextProviderProps = {
	todolist:TTodo[];
	handleAddTodo: (contents:string) => void;
	handleToggleTodo: (old:TTodo) => void;
	handleDeleteTodo: (id:string) => void;
	handleUpdateTodo: (old:TTodo) => void;
	onRefresh: ()=>Promise<void>;
	refreshing: boolean;
}

export const TodolistContext = React.createContext<TodolistContextProviderProps | undefined>(undefined);

export function TodolistContextProvider({ children, value}: { children: ReactNode; value:TodolistContextProviderProps}) {
  return <TodolistContext.Provider value={value}>{children}</TodolistContext.Provider>;
}
