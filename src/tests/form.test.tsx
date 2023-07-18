// Imports
import { describe, it, expect, afterEach, vi } from "vitest";
import {
  render,
  screen,
  cleanup,
  waitFor,
  fireEvent,
} from "@testing-library/react";
import Form from "../components/form";
import userEvent from "@testing-library/user-event";
import * as handler from "../handlers/form";

// To Test

// Tests
describe("Renders form correctly", async () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("Should render the title input", async () => {
    render(<Form todo={[]} setTodo={() => {}} />);

    const label = await screen.findByLabelText("Title");
    const input = await screen.findByPlaceholderText("Enter a todo item");

    expect(label).not.toBeNull();
    expect(input).not.toBeNull();
  });

  it("Should render the description input", async () => {
    render(<Form todo={[]} setTodo={() => {}} />);

    const label = await screen.findByLabelText("Description");
    const input = await screen.findByTestId("description");

    expect(label).not.toBeNull();
    expect(input).not.toBeNull();
  });

  it("Should render the submit button", async () => {
    render(<Form todo={[]} setTodo={() => {}} />);

    const button = await screen.findByRole("button", { name: "Submit Task" });

    expect(button).not.toBeNull();
  });

  it("Should call submitTask with form data on button click", async () => {
    const submitTaskSpy = vi.spyOn(handler, "submitTask");
    const setTodo = () => {};
    render(<Form todo={[]} setTodo={setTodo} />);

    const user = userEvent.setup();
    const titleInput = await screen.findByPlaceholderText("Enter a todo item");
    const descriptionText = await screen.findByTestId("description");
    const button = await screen.findByRole("button", { name: "Submit Task" });

    await user.type(titleInput, "test_input");
    await user.type(descriptionText, "test_text");
    await user.click(button as HTMLElement);

    expect(button).not.toBeNull();
    expect(submitTaskSpy).toHaveBeenCalledWith(
      "test_input",
      "test_text",
      [],
      setTodo
    );
  });

  it("Should update state with title and description in form handler", async () => {
    const title = "test_title";
    const description = "test_description";
    const todo = [];
    const mockSetState = vi.fn();

    vi.mock("react", async () => {
      const actual = (await vi.importActual("react")) as any;
      return {
        ...actual,
        setState: vi.fn(),
      };
    });

    handler.submitTask(title, description, todo, mockSetState);
    expect(mockSetState).toHaveBeenCalledWith([
      ...todo,
      { title, description },
    ]);
  });
});

it("Should disable button if form field is empty", async () => {
  render(<Form todo={[]} setTodo={() => {}} />);

  const button = await screen.findByRole("button", { name: "Submit Task" });
  expect(button.className).toContain("disabled");
});

it("Should enable button if form fields are not empty", async () => {
  render(<Form todo={[]} setTodo={() => {}} />);

  const user = userEvent.setup();
  const titleInput = await screen.findByPlaceholderText("Enter a todo item");
  const descriptionText = await screen.findByTestId("description");
  const button = await screen.findByRole("button", { name: "Submit Task" });

  await user.type(titleInput, "test_input");
  await user.type(descriptionText, "test_text");

  expect(button.className).not.toContain("disabled");
});

it("Should not update state with title and description if fields are blank", async () => {
  const title = "";
  const description = "";
  const todo = [];
  const mockSetState = vi.fn();

  vi.mock("react", async () => {
    const actual = (await vi.importActual("react")) as any;
    return {
      ...actual,
      setState: vi.fn(),
    };
  });

  handler.submitTask(title, description, todo, mockSetState);
  expect(mockSetState).not.toHaveBeenCalled();
});
