import React from "react";
import { EditModalContext } from "../components/EditModalContextProvider";

export function useEditModalContext() {
  const value = React.useContext(EditModalContext);
  if (value === undefined) {
    throw new Error('value was undefined, should be used within EditModalContextProvider');
  }
  return value;
}