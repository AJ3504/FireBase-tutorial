import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import Form from "./components/Form";

function App() {
  //1.useState 설정
  const [lists, setLists] = useState([
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

  //2. xml 설정
  return (
    <>
      {/* 1. 폼태그 부분 */}
      <h3>폼태그 부분입니다</h3>
      <Form lists={lists} setLists={setLists} />

      {/* 2. 리스트 부분 */}
      {/* 2-1. 할일 목록 */}
      <h3>할일 목록입니다</h3>
      <div>
        {lists
          .filter((list) => list.isDone === false)
          .map((list) => {
            return (
              <div key={list.id}>
                <p>{list.id}</p>
                <p>{list.title}</p>
                <p>{list.content}</p>
                <p>{list.isDone.toString()}</p>
                <button
                  onClick={() => {
                    //
                    const completedLists = lists.map((item) => {
                      if (item.id === list.id) {
                        return {
                          ...item,
                          isDone: !item.isDone,
                        };
                      } else {
                        return item;
                      }
                    });
                    //
                    setLists(completedLists);
                  }}
                >
                  완료
                </button>
                <button
                  onClick={() => {
                    //
                    const deletedLists = lists.filter(
                      (item) => item.id !== list.id
                    );
                    //
                    setLists(deletedLists);
                  }}
                >
                  삭제
                </button>
              </div>
            );
          })}
      </div>

      {/* 2-2. 완료한 목록 */}
      <h3>완료한 목록입니다</h3>
      <div>
        {lists
          .filter((list) => list.isDone === true)
          .map((list) => {
            return (
              <div key={list.id}>
                <p>{list.id}</p>
                <p>{list.title}</p>
                <p>{list.content}</p>
                <p>{list.isDone.toString()}</p>
                <button
                  onClick={() => {
                    //
                    const completedLists = lists.map((item) => {
                      if (item.id === list.id) {
                        return {
                          ...item,
                          isDone: !item.isDone,
                        };
                      } else {
                        return item;
                      }
                    });
                    //
                    setLists(completedLists);
                  }}
                >
                  완료취소
                </button>
                <button
                  onClick={() => {
                    //
                    const deletedLists = lists.filter(
                      (item) => item.id !== list.id
                    );
                    //
                    setLists(deletedLists);
                  }}
                >
                  삭제
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default App;
