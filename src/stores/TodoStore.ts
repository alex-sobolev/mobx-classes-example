import { makeAutoObservable } from 'mobx';

export interface ITodoStore {
  todos: string[];
  addTodo: (todo: string) => void;
  todosCount: number;
}

export class TodoStore implements ITodoStore {
  todos: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: string): void {
    this.todos.push(todo);
  }

  get todosCount(): number {
    return this.todos.length;
  }
}
