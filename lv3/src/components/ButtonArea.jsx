import React from "react";
import { css, styled } from "styled-components";

export const ButtonArea = () => {
  return (
    <>
      <h2>01. Button</h2>
      <div>
        <ButtonContainer
          bc="#55efc4"
          color="#000000"
          size="large"
          outlined={true}
          rightIcon="TEST"
        >
          테스트
        </ButtonContainer>
        <ButtonContainer bc="#55efc4" color="#000000" size="medium">
          테스트
        </ButtonContainer>
        <ButtonContainer bc="#55efc4" color="#000000" size="small">
          테스트
        </ButtonContainer>
      </div>

      <div>
        <ButtonContainer
          bc="#fab1a0"
          color="#d63031"
          size="large"
          outlined={true}
        >
          테스트
        </ButtonContainer>
        <ButtonContainer bc="#fab1a0" color="#d63031" size="medium">
          테스트
        </ButtonContainer>
        <ButtonContainer bc="#fab1a0" color="#d63031" size="small">
          테스트
        </ButtonContainer>
      </div>
    </>
  );
};

//버튼 색깔, 사이즈, 선
const StButton = styled.button`
  color: red;
  border: none;
  cursor: pointer;
  border-radius: 8px;

  /* background-color: ${(props) => {
    return props.backgroundColor;
  }}; */
  background-color: ${({ bc }) => bc};
  color: ${({ color }) => color};
  font-weight: 0;

  margin: 5px;

  ${({ size }) => {
    switch (size) {
      case "large":
        return css`
          height: 50px;
          width: 200px;
        `;
      case "medium":
        return css`
          height: 45px;
          width: 130px;
        `;
      case "small":
        return css`
          height: 40px;
          width: 100px;
        `;
    }
  }}

  ${({ outlined, bc }) => {
    if (outlined) {
      return css`
        border: 3px solid ${bc};
        background-color: #fff;
        font-weight: 600;
      `;
    }
  }}
`;

//버튼에 아이콘
//❶rest 안에 bc, color, size가 담겨서 들어옴

//❷버튼에 아이콘을 주려고 함 : ButtonContainer를 통해 rightIcon속성을 주고 싶음 -> rest를 통해 이 속성을 내려받고 싶음 -> rest.rightIcon으로 접근 가능
const ButtonContainer = ({ children, ...rest }) => {
  return (
    <>
      <StButton {...rest}>
        {children}
        {rest.rightIcon}
      </StButton>
      {/* {rest.rightIcon} => 여기보다는, <ButtonContainer
          bc="#55efc4"
          color="#000000"
          size="large"
          outlined={true}
          rightIcon="TEST"
        >를 children 우측에 넣어주어야 함*/}
    </>
  );
};
