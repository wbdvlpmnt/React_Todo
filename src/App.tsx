import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import Form from "./components/form";
import List from "./components/list";
import { Todo } from "./types/types";
import { Container, Row } from "bootstrap-4-react";
import axios from "axios";

function App() {
  const [todo, setTodo] = useState([] as Todo[]);
  const [idToEdit, setIdToEdit] = useState();
  const baseURL = "http://localhost:3000/todoapi";

  async function getTasks(url: string) {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setTodo(response.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getTasks(`${baseURL}/getitems`);
  }, []);

  return (
    <>
      <Header />
      <Container>
        <div style={{ marginTop: "1em" }}></div>
        <Row>
          <Form
            todo={todo}
            setTodo={setTodo}
            idToEdit={idToEdit}
            setIdToEdit={setIdToEdit}
          />
        </Row>
        <div style={{ marginTop: "1em" }}></div>
        <Row>
          <List todo={todo} setTodo={setTodo} setIdToEdit={setIdToEdit} />
        </Row>
      </Container>
    </>
  );
}

export default App;
