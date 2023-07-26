import { Todo } from "../types/types";
import { deleteItem } from "../services/service";
const baseURL = "http://localhost:3000/todoapi";

export async function editTask(
  index: number,
  setIdToEdit: React.Dispatch<React.SetStateAction<number>>
) {
  setIdToEdit(index);
}

export async function deleteTask(
  index: number,
  todo: Todo[],
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>
) {
  const del = await deleteItem(`${baseURL}/delete/${index}`);

  if (del.status === 200) {
    console.log("hello");
    var filtered = todo.filter(function (el) {
      return el.id != index;
    });
    setTodo(filtered);
  }

  return;
}
