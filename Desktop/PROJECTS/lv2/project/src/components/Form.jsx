import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo } from "redux/modules/todos";

export const Form = () => {
  //
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  //
  const todos = useSelector((state) => state.todos.todos);
  console.log("콘솔2", todos);

  //
  const dispatch = useDispatch();

  //
  const onSubmitHandler = (e) => {
    //
    e.preventDefault();
    //
    if (title === "") return;

    //useState때는 이랬는데
    // const newTodo = {
    //   id: uuid(),
    //   title,
    //   content,
    //   isDone: false,
    // };
    // setTodos([...todos, newTodo]);

    //이런 형태의 action객체를
    // dispatch(
    //   {
    //     type: "ADD_TODO",
    //     payload: "id", "YET", "not yet", "false"
    //   }
    // )
    dispatch(
      addTodo({
        id: uuid(),
        title,
        content,
        isDone: false,
      })
    );

    //(원래는 얘였음)
    // (event) => {
    //   event.preventDefault();
    //   const newTodo = {
    //     id: uuid(),
    //     title: "",
    //     content: "",
    //     isDone: false,
    //   };
    //   //다시 배열로 묶어줘야 -> 뒤에서 filter를 쓸 수 있음
    //   setTodos([...todos, newTodo]);
    // }

    setTitle("");
    setContent("");
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
        <button>추가하기</button>
      </form>
    </div>
  );
};
