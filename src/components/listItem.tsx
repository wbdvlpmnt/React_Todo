import { Container, Row, Col, Button } from "bootstrap-4-react";

export default function ListItem({ title, description, index }) {
  return (
    <div className="card" key={index}>
      <Container>
        <Row>
          <Col>
            <h1 className="title">{title}</h1>
          </Col>
          <Col>
            <Button primary type="button" id="button">
              Edit Task
            </Button>{" "}
            <Button primary type="button" id="button">
              Delete Task
            </Button>
          </Col>
        </Row>
      </Container>

      <hr />
      <p className="description"> {description}</p>
    </div>
  );
}
