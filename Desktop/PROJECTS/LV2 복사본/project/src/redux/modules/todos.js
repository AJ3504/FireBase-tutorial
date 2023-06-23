import React from "react";
import { v4 as uuid } from "uuid";

//action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";
// const GET_TODO_BY_ID = "GET_TODO_BY_ID";

//action creator
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};
export const deleteTodo = (todoId) => {
  return { type: DELETE_TODO, todoId };
};
export const toggleStatusTodo = (todoId) => {
  return { type: TOGGLE_STATUS_TODO, todoId };
};
// export const getTodoById = (payload) => {
//   return { type: GET_TODO_BY_ID, payload };
// };

//초기값
const initialState = {
  todos: [
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
  ],
};

//reducer
const todos = (state = initialState, action) => {
  console.log("콘솔1", state);
  switch (action.type) {
    //
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    //
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.todoId),
      };

    //
    case TOGGLE_STATUS_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.todoId ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };

    //
    // case GET_TODO_BY_ID:
    //   return {};

    //
    default:
      return state;
  }
};

export default todos;
