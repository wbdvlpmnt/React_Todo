// Imports
import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import List from "../components/list";
import { Todo } from "../types/types";
import ListItem from "../components/listItem";

// To Test

// Tests
describe("Renders list correctly", async () => {
  afterEach(() => {
    cleanup();
  });

  it("Should render the list correctly", async () => {
    // Setup
    const todo = [
      {
        title: "test1",
        description: "desc1",
      },
      {
        title: "test2",
        description: "desc2",
      },
      {
        title: "test3",
        description: "desc3",
      },
    ];
    render(<List todo={todo} setIdToEdit={undefined} />);

    const items = (await screen.findByTestId("items")).innerHTML;
    expect(items).not.toBeNull;
  });
});
