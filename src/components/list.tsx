import { Todo } from "../types/types";
import ListItem from "./listItem";

export default function list({ todo, setTodo, setIdToEdit }) {
  const items = todo.map((to: Todo) => {
    return (
      <ListItem
        title={to.title}
        description={to.description}
        index={to.id}
        key={to.id}
        todo={todo}
        setTodo={setTodo}
        setIdToEdit={setIdToEdit}
      />
    );
  });
  return (
    <div data-testid="items" className="items">
      {items}
    </div>
  );
}
