// Imports
import { describe, it, expect, vi } from "vitest";
import * as handler from "../handlers/list";
import * as services from "../services/service";
import ListItem from "../components/listItem";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("list item component tests", async () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  beforeEach(() => {
    render(
      <ListItem
        title={"test_title"}
        description={"test_description"}
        index={"1"}
        todo={[]}
        setTodo={() => {}}
        setIdToEdit={() => {}}
      />
    );
  });

  it("Should call the edit handler on edit", async () => {
    const user = userEvent.setup();
    const editTaskSpy = vi.spyOn(handler, "editTask");
    const editButton = await screen.findByRole("button", {
      name: "Edit",
    });
    await user.click(editButton as HTMLElement);

    expect(editTaskSpy).toBeCalled();
  });

  it("Should call the delete handler on delete", async () => {
    const user = userEvent.setup();
    const deleteTaskSpy = vi.spyOn(handler, "deleteTask");

    const deleteButton = await screen.findByRole("button", {
      name: "Delete",
    });
    await user.click(deleteButton as HTMLElement);
    expect(deleteTaskSpy).toBeCalled();
  });
});

describe("Tests list item handlers", async () => {
  it("Should update state for id to edit", async () => {
    const mockSetState = vi.fn();
    handler.editTask(1, mockSetState);
    expect(mockSetState).toBeCalledWith(1);
  });

  it("Should delete item and update state for deleting an item", async () => {
    const mockSetState = vi.fn();
    const deleteItemSpy = vi
      .spyOn(services, "deleteItem")
      .mockResolvedValue({ status: 200 });
    handler.deleteTask(
      1,
      [
        {
          id: 1,
          title: "test1",
          description: "test1",
        },
        {
          id: 2,
          title: "test2",
          description: "test2",
        },
      ],
      mockSetState
    );
    expect(deleteItemSpy).toBeCalled();
  });
});
