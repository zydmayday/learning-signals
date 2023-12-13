import { signal } from "@preact/signals-react";

export interface Todo {
  text: string;
}

type TodoList = Todo[];

const todos = signal<TodoList>([
  { text: "sample todo." },
  { text: "sample todo 2." },
]);
const newTodoText = signal("");

const addTodo = () => {
  todos.value = [...todos.value, { text: newTodoText.value }];
  newTodoText.value = "";
};

const deleteTodo = (todo: Todo) => {
  todos.value = todos.value.filter((t) => t !== todo);
};

export { todos, newTodoText, addTodo, deleteTodo };
