import { ItemData } from "../model/ItemData";

function saveTodos(todo: ItemData) {
  localStorage.setItem("todos_key", JSON.stringify(todo));
}

function getTodos(): ItemData[] {
  return JSON.parse(localStorage.getItem("todos_key") || "[]");
}


export {saveTodos, getTodos}