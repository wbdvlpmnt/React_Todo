import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Form from "./components/form";
import List from "./components/list";
import { Todo } from "./types/types";
import { Container, Row } from "bootstrap-4-react";

function App() {
  const [todo, setTodo] = useState([] as Todo[]);
  return (
    <>
      <Header />
      <Container>
        <div style={{ marginTop: "1em" }}></div>
        <Row>
          <Form todo={todo} setTodo={setTodo} />
        </Row>
        <div style={{ marginTop: "1em" }}></div>
        <Row>
          <List todo={todo} />
        </Row>
      </Container>
    </>
  );
}

export default App;