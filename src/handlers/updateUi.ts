import { postNewTask } from "../services/service";
import { Todo } from "../types/types";
const baseURL = "http://localhost:3000/todoapi";

export async function editItemInDb(
  editedItem: Todo,
  newItems: Todo[],
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>,
  setIdToEdit: React.Dispatch<React.SetStateAction<number>>
) {
  // send to service / db
  const editItem = await postNewTask(`${baseURL}/item`, editedItem);
  // if successfull update UI
  if (editItem.status === 200) {
    setTodo(newItems);
    return setIdToEdit(NaN);
  }
  return;
}

export async function saveItemToDb(
  todoObj: Todo,
  todo: Todo[],
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>
) {
  // send to service / db
  const saveItem = await postNewTask(`${baseURL}/item`, todoObj);
  // if successfull update UI
  if (saveItem.status === 200) {
    todoObj["id"] = saveItem.data.id;
    return setTodo([...todo, todoObj]);
  }
  return;
}
