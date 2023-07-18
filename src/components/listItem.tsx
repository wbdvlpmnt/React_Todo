import { Container, Row, Col, Button } from "bootstrap-4-react";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function ListItem({ title, description, index }) {
  return (
    <div className="card" key={index}>
      <Container>
        <Row>
          <Col>
            <h1 className="title">{title}</h1>
          </Col>
          <Col>
            <div className="d-flex justify-content-end">
              <Button primary type="button" id="button" mt="2" mr="2">
                <FaEdit /> Edit
              </Button>
              <Button primary type="button" id="button" mt="2">
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
