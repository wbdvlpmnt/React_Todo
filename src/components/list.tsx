import { Todo } from "../types/types";
import ListItem from "./listItem";

export default function list({ todo }) {
  const items = todo.map((to: Todo, index: number) => {
    return (
      <ListItem title={to.title} description={to.description} index={index} />
    );
  });
  return (
    <div data-testid="items" className="items">
      {items}
    </div>
  );
}
