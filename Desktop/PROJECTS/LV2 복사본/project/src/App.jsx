import "./App.css";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Form } from "components/Form";
import { ListsToBeSorted } from "components/ListsToBeSorted";
import { useSelector } from "react-redux";

function App() {
  // 1.useState 설정부분

  //
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      title: "YET",
      content: "not yet",
      isDone: false,
    },
    {
      id: uuid(),
      title: "DONE",
      content: "already done",
      isDone: true,
    },
  ]);

  //
  // const todos1 = useSelector((state) => {
  //   console.log("state가 뭘까?", state);
  //   console.log("state.todos가 뭘까?", state.todos);
  //   return state.todos;
  // });

  // 3.xml return부분
  return (
    <div className="App">
      <header
        style={{
          backgroundColor: "lightgray",
          padding: "10px",
        }}
      >
        헤더입니다
      </header>
      <main
        style={{
          padding: "10px",
        }}
      >
        {/* 컴포넌트1 : 폼태그 */}
        <Form todos={todos} setTodos={setTodos} />
        {/* 컴포넌트2  */}
        <div>
          <h1>리스트 보여지는 영역</h1>
          <ListsToBeSorted
            todos={todos}
            setTodos={setTodos}
            listIsDone={false}
          />
          <ListsToBeSorted
            todos={todos}
            setTodos={setTodos}
            listIsDone={true}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
