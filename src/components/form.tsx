import { Form, Button } from "bootstrap-4-react";
import { submitTask } from "../handlers/form";
import { useState } from "react";

export default function form({ todo, setTodo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function clearState() {
    setTitle("");
    setDescription("");
  }

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  async function handleSubmit() {
    await submitTask(title, description, todo, setTodo);
    clearState();
  }

  function isButtonDisabled() {
    if (title.length > 0 && description.length > 0) {
      return false;
    }
    return true;
  }

  return (
    <>
      <Form>
        <Form.Group>
          <label htmlFor="title">Title</label>
          <Form.Input
            type="text"
            data-testid="title"
            id="title"
            placeholder="Enter a todo item"
            onChange={handleTitleChange}
            value={title}
          />
        </Form.Group>

        <Form.Group>
          <label htmlFor="title">Description</label>
          <Form.Textarea
            type="text"
            data-testid="description"
            id="description"
            placeholder="Enter a todo description"
            onChange={handleDescriptionChange}
            value={description}
          />
        </Form.Group>

        <Button
          primary
          type="button"
          id="button"
          disabled={isButtonDisabled()}
          onClick={handleSubmit}
        >
          Submit Task
        </Button>
      </Form>
    </>
  );
}
