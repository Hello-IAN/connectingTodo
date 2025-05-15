import React, { ReactNode } from "react";
import { TTodo } from "../../../types/todo";

type EditModalContextProviderProps = {
	setTarget:(val:TTodo) => void;
	editModalHandler:(val:boolean) => void;
}

export const EditModalContext = React.createContext<EditModalContextProviderProps | undefined>(undefined);

export function EditModalContextProvider({ children, value}: { children: ReactNode; value:EditModalContextProviderProps}) {
  return <EditModalContext.Provider value={value}>{children}</EditModalContext.Provider>;
}
