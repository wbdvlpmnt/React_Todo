import { postNewTask } from "../services/service";
import { Todo } from "../types/types";
const baseURL = "http://localhost:3000/todoapi";

export async function submitTask(
  idToEdit: number,
  title: string,
  description: string,
  todo: Todo[],
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>,
  setIdToEdit: React.Dispatch<React.SetStateAction<number>>
) {
  if (title.length > 0 && description.length > 0) {
    if (!idToEdit) {
      // create a new item
      let todoObj = { title, description };
      return await saveItemToDb(todoObj, todo, setTodo);
    }
    // edit existing itemTodo
    let editedItem = {} as Todo;
    const newItems = todo.map((el) => {
      if (el.id === idToEdit) {
        el.title = title;
        el.description = description;
        editedItem = el;
      }
      return el;
    });

    return await editItemInDb(editedItem, newItems, setTodo, setIdToEdit);
  }
}

async function editItemInDb(
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

async function saveItemToDb(
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
