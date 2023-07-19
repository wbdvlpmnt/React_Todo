// Imports
import { describe, it, expect, vi } from "vitest";
import * as handler from "../handlers/list";

describe("Tests list item handlers", async () => {
  it("Should update state for id to edit", async () => {
    const mockSetState = vi.fn();
    handler.editTask("1", mockSetState);
    expect(mockSetState).toBeCalledWith("1");
  });

  it("Should delete item and update state for deleting an item", async () => {
    const mockSetState = vi.fn();
    handler.deleteTask(
      "1",
      [
        {
          id: "1",
          title: "test1",
          description: "test1",
        },
        {
          id: "2",
          title: "test2",
          description: "test2",
        },
      ],
      mockSetState
    );
    expect(mockSetState).toBeCalledWith([
      {
        id: "2",
        title: "test2",
        description: "test2",
      },
    ]);
  });
});
