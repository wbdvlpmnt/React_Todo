import { Container, Row, Col, Button } from "bootstrap-4-react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { editTask } from "../handlers/list";

export default function ListItem({ title, description, index, setIdToEdit }) {
  async function handleEdit() {
    editTask(index, setIdToEdit);
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
                id="button"
                mt="2"
                mr="2"
                onClick={handleEdit}
              >
                <FaEdit /> Edit
              </Button>
              <Button danger type="button" id="button" mt="2">
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
