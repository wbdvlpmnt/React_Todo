import { Todo } from "../types/types";

export async function submitTask(
  title: string,
  description: string,
  todo: Todo[],
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>
) {
  if (title.length > 0 && description.length > 0) {
    const todoObj = { title, description };
    setTodo([...todo, todoObj]);
  }
}
