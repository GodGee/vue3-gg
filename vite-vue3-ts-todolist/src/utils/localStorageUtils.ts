import { ItemData } from "../model/ItemData";

function saveTodos(todos: ItemData) {
  console.log('todos: ', todos);
  localStorage.setItem("todos_key", JSON.stringify(todos));
}

function readTodos(): ItemData[] {
  return JSON.parse(localStorage.getItem("todos_key") || "[]");
}

export { saveTodos, readTodos };
