import React from "react";

export const ListsToBeSorted = ({ todos, setTodos, listIsDone }) => {
  return (
    <>
      <h2>{listIsDone ? "Working🔥" : "Done🎉"}</h2>
      {todos
        .filter((todo) => todo.isDone === listIsDone)
        .map((todo) => {
          return (
            <div
              key={todo.id}
              style={{
                border: "1px solid green",
                margin: "10px",
                paddingLeft: "10px",
              }}
            >
              <h3>{todo.title}</h3>
              <p>{todo.content}</p>
              <p>완료여부: {todo.isDone.toString()}</p>
              <button
                onClick={() => {
                  const completedTodos = todos.map((item) => {
                    //상태를 바꿈
                    if (item.id === todo.id) {
                      return {
                        ...item,
                        isDone: !item.isDone,
                      };
                    } else {
                      return item;
                    }
                  });
                  //
                  setTodos(completedTodos);
                }}
              >
                완료
              </button>
              <button
                onClick={() => {
                  //
                  const deletedTodos = todos.filter(
                    (item) => item.id !== todo.id
                  );
                  //
                  setTodos(deletedTodos);
                }}
              >
                삭제
              </button>
            </div>
          );
        })}
    </>
  );
};
