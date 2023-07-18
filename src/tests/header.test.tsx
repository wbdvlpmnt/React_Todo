// Imports
import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";

// To Test
import Header from "../components/header";

// Tests
describe("Renders header correctly", async () => {
  afterEach(() => {
    cleanup();
  });

  it("Should render the title correctly", async () => {
    // Setup
    render(<Header />);
    const h1 = await screen.queryByText("Todo App");

    // Expectations
    expect(h1).not.toBeNull();
  });
});
