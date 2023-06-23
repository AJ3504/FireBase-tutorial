import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteTodo, toggleStatusTodo } from "redux/modules/todos";

//
import { Link } from "react-router-dom";
import Details from "pages/Details";

export const ListsToBeSorted = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const changeStatusHandler = (todoId) => {
    dispatch(toggleStatusTodo(todoId));
  };

  const deleteStatusHandler = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  return (
    <>
      <div className="working">
        <h2>Working🔥</h2>
        <div className="working-container">
          {todos.map(function (todo) {
            return !todo.isDone ? (
              <div key={todo.id}>
                <h5>{todo.title}</h5>
                <p>{todo.content}</p>
                <p>완료여부: {todo.isDone.toString()}</p>
                <button onClick={() => changeStatusHandler(todo.id)}>
                  완료
                </button>
                <button onClick={() => deleteStatusHandler(todo.id)}>
                  삭제
                </button>
                <Link to={`/details/${todo.id}`}>상세보기</Link>
              </div>
            ) : null;
          })}
        </div>
      </div>

      <div className="done">
        <h2>Done🎉</h2>
        <div className="done-container">
          {todos.map(function (todo) {
            return todo.isDone ? (
              <div key={todo.id}>
                <h5>{todo.title}</h5>
                <p>{todo.content}</p>
                <p>완료여부: {todo.isDone.toString()}</p>
                <button onClick={() => changeStatusHandler(todo.id)}>
                  완료취소
                </button>
                <button onClick={() => deleteStatusHandler(todo.id)}>
                  삭제
                </button>
                <Link to={`/details/${todo.id}`}>상세보기</Link>
              </div>
            ) : null;
          })}
        </div>
      </div>
    </>
  );
};

//----------------------------------------------------------------------//
//기존
// export const ListsToBeSorted = ({ todos, setTodos, listIsDone }) => {
//   return (
//     <>
//       <h2>{listIsDone ? "Working🔥" : "Done🎉"}</h2>
//       {todos
//         .filter((todo) => todo.isDone === listIsDone)
//         .map((todo) => {
//           return (
//             <div
//               key={todo.id}
//               style={{
//                 border: "1px solid green",
//                 margin: "10px",
//                 paddingLeft: "10px",
//               }}
//             >
//               <h3>{todo.title}</h3>
//               <p>{todo.content}</p>
//               <p>완료여부: {todo.isDone.toString()}</p>
//               <button
//                 onClick={() => {
//                   const completedTodos = todos.map((item) => {
//                     //상태를 바꿈
//                     if (item.id === todo.id) {
//                       return {
//                         ...item,
//                         isDone: !item.isDone,
//                       };
//                     } else {
//                       return item;
//                     }
//                   });
//                   //
//                   setTodos(completedTodos);
//                 }}
//               >
//                 완료
//               </button>
//               <button
//                 onClick={() => {
//                   //
//                   const deletedTodos = todos.filter(
//                     (item) => item.id !== todo.id
//                   );
//                   //
//                   setTodos(deletedTodos);
//                 }}
//               >
//                 삭제
//               </button>
//             </div>
//           );
//         })}
//     </>
//   );
// };
