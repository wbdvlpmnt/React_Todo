import { Todo } from "../types/types";
import ListItem from "./listItem";

export default function list({ todo }) {
  const items = todo.map((to: Todo) => {
    const uniqueId = crypto.randomUUID();
    return (
      <ListItem
        title={to.title}
        description={to.description}
        index={uniqueId}
        key={uniqueId}
      />
    );
  });
  return (
    <div data-testid="items" className="items">
      {items}
    </div>
  );
}
