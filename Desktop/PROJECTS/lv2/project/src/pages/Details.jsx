import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTodoById } from "redux/modules/todos";

const Details = () => {
  //
  const { id } = useParams();

  //
  const selectedTodo = useSelector((state) => state.todos.todos);
  console.log("콘솔4", selectedTodo);
  // const dispatch = useDispatch();

  // dispatch(getTodoById(id));

  // return (
  //   <div>
  //     <h3>{selectedTodo.title}</h3>
  //     <p>{selectedTodo.content}</p>
  //   </div>
  // );
};

export default Details;
