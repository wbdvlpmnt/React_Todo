import { Container, Row, Col, Button } from "bootstrap-4-react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { editTask, deleteTask } from "../handlers/list";

export default function ListItem({
  title,
  description,
  index,
  todo,
  setTodo,
  setIdToEdit,
}) {
  async function handleEdit() {
    editTask(index, setIdToEdit);
  }

  async function handleDelete() {
    deleteTask(index, todo, setTodo);
  }

  return (
    <div className="card">
      <Container>
        <Row>
          <Col>
            <h1 className="title">{title}</h1>
          </Col>
          <Col>
            <div className="d-flex justify-content-end">
              <Button
                secondary
                type="button"
                data-testid="edit"
                id="button"
                mt="2"
                mr="2"
                onClick={handleEdit}
              >
                <FaEdit /> Edit
              </Button>
              <Button
                danger
                type="button"
                data-testid="delete"
                id="button"
                mt="2"
                onClick={handleDelete}
              >
                <FaTrash /> Delete
              </Button>
            </div>
          </Col>
        </Row>
        <hr />
        <p className="description"> {description}</p>
      </Container>
    </div>
  );
}
