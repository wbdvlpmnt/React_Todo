import { Todo } from "../types/types";

export async function submitTask(
  idToEdit: string,
  title: string,
  description: string,
  todo: Todo[],
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>,
  setIdToEdit: React.Dispatch<React.SetStateAction<String>>
) {
  if (title.length > 0 && description.length > 0) {
    if (!idToEdit) {
      // create a new item
      const id = crypto.randomUUID();
      const todoObj = { id, title, description };
      return setTodo([...todo, todoObj]);
    }
    // edit existing item
    const newItems = todo.map((el) => {
      if (el.id === idToEdit) {
        el.title = title;
        el.description = description;
      }
      return el;
    });

    setTodo(newItems);
    return setIdToEdit("");
  }
}
