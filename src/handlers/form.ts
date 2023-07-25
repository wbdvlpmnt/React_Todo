import { Todo } from "../types/types";
import { editItemInDb, saveItemToDb } from "./updateUi";

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
      await saveItemToDb(todoObj, todo, setTodo);
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

    return await editItemInDb(editedItem, newItems, setTodo, setIdToEdit);
  }
}
