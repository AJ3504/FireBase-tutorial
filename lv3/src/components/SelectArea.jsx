import React from "react";
import { styled } from "styled-components";
import { FirstSelect } from "./select/FirstSelect";
import { SecondSelect } from "./select/SecondSelect";

export const SelectArea = () => {
  return (
    <>
      <h2>04. Select</h2>
      {/* 이렇게 박스 안에 위치시켜줘야, select요소가 빠져나오지 못함 */}
      <StBox>
        <FirstSelect />
        <SecondSelect />
      </StBox>
    </>
  );
};

//
const StBox = styled.div`
  display: flex;
  border: 1px solid black;
  width: 500px;
  height: 150px;
  overflow: hidden; //자식요소가 넘어오면, 막아주는 것
`;
