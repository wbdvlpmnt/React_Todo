// Imports
import { describe, it, expect, vi } from "vitest";
import * as handler from "../handlers/updateUi";
import * as services from "../services/service";
import { cleanup } from "@testing-library/react";

describe("list item component tests", async () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("should call postTask and update ui on save", async () => {
    const mockSetState = vi.fn();
    const postNewTaskSpy = vi
      .spyOn(services, "postNewTask")
      .mockResolvedValue({ status: 200, data: { id: 1 } });

    await handler.saveItemToDb(
      {
        id: 1,
        title: "test_title",
        description: "test_description",
      },
      [],
      mockSetState
    );

    expect(mockSetState).toBeCalled();
  });

  it("should call postTask and update ui on edit", async () => {
    const mockSetStateTodo = vi.fn();
    const mockSetStateIdToEdit = vi.fn();
    const postNewTaskSpy = vi
      .spyOn(services, "postNewTask")
      .mockResolvedValue({ status: 200 });

    await handler.editItemInDb(
      {
        id: 1,
        title: "test_title",
        description: "test_description",
      },
      [],
      mockSetStateTodo,
      mockSetStateIdToEdit
    );

    expect(mockSetStateTodo).toBeCalled();
    expect(mockSetStateIdToEdit).toBeCalled();
  });
});
