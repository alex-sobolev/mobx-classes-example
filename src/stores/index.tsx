import React, { FC, createContext, useContext } from 'react';
import { IDogStore, DogStore } from './DogStore';
import { ITodoStore, TodoStore } from "./TodoStore";

export interface IStoreContext {
  dogStore: IDogStore;
  todoStore: ITodoStore;
}

export const StoreContext = createContext<IStoreContext>({} as IStoreContext);

export const StoreProvider: FC = ({ children }) => {
  const store = {
    dogStore: new DogStore(),
    todoStore: new TodoStore(),
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export const useRootStore = () => {
  return useContext(StoreContext);
};
