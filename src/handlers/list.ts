import { Todo } from "../types/types";

export async function editTask(
  index: String,
  setIdToEdit: React.Dispatch<React.SetStateAction<String>>
) {
  setIdToEdit(index);
}

export async function deleteTask(
  index: String,
  todo: Todo[],
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>
) {
  var filtered = todo.filter(function (el) {
    return el.id != index;
  });

  setTodo(filtered);
}
