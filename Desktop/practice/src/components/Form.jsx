import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export const Form = ({ lists, setLists }) => {
  //
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  //
  return (
    <div>
      <form
        onSubmit={(event) => {
          //
          event.preventDefault();
          //
          const newList = {
            id: uuid(),
            title: "",
            content: "",
            isDone: false,
          };
          //
          setLists([...lists, newList]);
        }}
      >
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
        <button>등록하기</button>
      </form>
    </div>
  );
};

export default Form;
