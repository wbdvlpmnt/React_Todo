// Imports
import { describe, it, expect, afterEach, vi } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import Form from "../components/form";
import userEvent from "@testing-library/user-event";
import * as handler from "../handlers/form";
import crypto from "crypto";

// To Test

// Tests
describe("Renders form correctly", async () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("Should render the title input", async () => {
    render(
      <Form todo={[]} setTodo={() => {}} idToEdit={""} setIdToEdit={() => {}} />
    );

    const label = await screen.findByLabelText("Title");
    const input = await screen.findByPlaceholderText("Enter a todo item");

    expect(label).not.toBeNull();
    expect(input).not.toBeNull();
  });

  it("Should render the description input", async () => {
    render(
      <Form todo={[]} setTodo={() => {}} idToEdit={""} setIdToEdit={() => {}} />
    );

    const label = await screen.findByLabelText("Description");
    const input = await screen.findByTestId("description");

    expect(label).not.toBeNull();
    expect(input).not.toBeNull();
  });

  it("Should render the submit button", async () => {
    render(
      <Form todo={[]} setTodo={() => {}} idToEdit={""} setIdToEdit={() => {}} />
    );

    const button = await screen.findByRole("button", { name: "Save Todo" });

    expect(button).not.toBeNull();
  });

  it("Should call submitTask with form data on button click", async () => {
    const submitTaskSpy = vi.spyOn(handler, "submitTask");
    const setTodo = () => {};
    const setIdToEdit = () => {};
    render(
      <Form todo={[]} setTodo={setTodo} idToEdit={""} setIdToEdit={() => {}} />
    );

    const user = userEvent.setup();
    const titleInput = await screen.findByPlaceholderText("Enter a todo item");
    const descriptionText = await screen.findByTestId("description");
    const button = await screen.findByRole("button", { name: "Save Todo" });

    await user.type(titleInput, "test_input");
    await user.type(descriptionText, "test_text");
    await user.click(button as HTMLElement);

    expect(button).not.toBeNull();
    expect(submitTaskSpy).toHaveBeenCalled();
  });

  it("Should update state with title and description in form handler", async () => {
    const title = "test_title";
    const description = "test_description";
    const todo = [];
    const mockSetState = vi.fn();
    const mockSetIdToEdit = vi.fn();

    vi.mock("react", async () => {
      const actual = (await vi.importActual("react")) as any;
      return {
        ...actual,
        setState: vi.fn(),
      };
    });

    const abc = "123";
    const id = "123-123-123-123-123";
    const createHashMock = vi
      .spyOn(crypto, "randomUUID")
      .mockImplementationOnce(() => {
        return `${abc}-${abc}-${abc}-${abc}-${abc}` as "`${string}-${string}-${string}-${string}-${string}`";
      });

    handler.submitTask(
      "",
      title,
      description,
      todo,
      mockSetState,
      mockSetIdToEdit
    );

    expect(mockSetState).toHaveBeenLastCalledWith([
      ...todo,
      { title, description, id },
    ]);
  });
});

it("Should disable button if form field is empty", async () => {
  render(
    <Form todo={[]} setTodo={() => {}} idToEdit={""} setIdToEdit={() => {}} />
  );

  const button = await screen.findByRole("button", { name: "Save Todo" });
  expect(button.className).toContain("disabled");
});

it("Should enable button if form fields are not empty", async () => {
  render(
    <Form todo={[]} setTodo={() => {}} idToEdit={""} setIdToEdit={() => {}} />
  );

  const user = userEvent.setup();
  const titleInput = await screen.findByPlaceholderText("Enter a todo item");
  const descriptionText = await screen.findByTestId("description");
  const button = await screen.findByRole("button", { name: "Save Todo" });

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
