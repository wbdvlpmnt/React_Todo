import { Container, Row, Col, Button, BDiv } from "bootstrap-4-react";

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
                Edit Task
              </Button>
              <Button primary type="button" id="button" mt="2">
                Delete Task
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <hr />
      <p className="description"> {description}</p>
    </div>
  );
}
