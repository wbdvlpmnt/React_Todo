import { postNewTask } from "../services/service";
import { Todo } from "../types/types";
const baseURL = "http://localhost:3000/todoapi";

export async function submitTask(
  idToEdit: number,
  title: string,
  description: string,
  todo: Todo[],
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>,
  setIdToEdit: React.Dispatch<React.SetStateAction<String>>
) {
  if (title.length > 0 && description.length > 0) {
    if (!idToEdit) {
      // create a new item
      let todoObj = { title, description };
      const saveItem = await postNewTask(`${baseURL}/item`, todoObj);
      if (saveItem.status === 200) {
        console.log("hello");
        todoObj["id"] = saveItem.data.id;
        return setTodo([...todo, todoObj]);
      }
      return;
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
    const editItem = await postNewTask(`${baseURL}/item`, editedItem);
    if (editItem.status === 200) {
      return setTodo(newItems);
    }
    return setIdToEdit("");
  }
}
