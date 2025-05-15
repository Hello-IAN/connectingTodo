import React from "react";
import { TodolistContext } from "../components/TodolistContextProvider";

export function useTodolistContext() {
  const value = React.useContext(TodolistContext);
  if (value === undefined) {
    throw new Error('value was undefined, should be used within TodolistContextProvider');
  }
  return value;
}