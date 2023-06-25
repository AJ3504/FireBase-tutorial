import React, { useState } from "react";
import { styled } from "styled-components";

export const InputArea = () => {
  //
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  //
  const changeEnteredNum = (e) => {
    const value = e.target.value;
    const removedCommaValue = Number(value.replaceAll(",", "")); //,를 초기화해서 순수 숫자로 만든 다음
    setPrice(removedCommaValue.toLocaleString()); //toLocale()로 ,가 들어간 값으로 다시 만든다음 -> setPrice()
  };

  return (
    <>
      <h2>02. Input</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          //alert창을 띄우기 전, ,를 다 제거해줌 (요구사항에서, alert창은 ,가 없는 값으로 알림 뜨게 해달라고 했으므로)
          const plainPrice = price.replaceAll(",", "");
          alert(`이름 : ${name}, 가격 : ${plainPrice}`);
        }}
      >
        <div>
          <label>이름</label>
          <StInput
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <label>가격</label>
          <StInput
            type="text"
            value={price}
            onChange={(e) => {
              changeEnteredNum(e);
            }}
          />
        </div>

        <button>저장</button>
      </form>
    </>
  );
};

//
const StInput = styled.input`
  border: 1px solid #333333;
  height: 40px;
  width: 200px;
  outline: none;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
`;
