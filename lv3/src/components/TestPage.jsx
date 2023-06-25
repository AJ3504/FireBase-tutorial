import "./App.css";
import React from "react";
import styled from "styled-components";

function TestPage(props) {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <Contents>{props.contents}</Contents>
    </Wrapper>
  );
}

const Title = styled.h1`
  /* font-family: "Helvetica";
  line-height: 1, 5; */
  font-size: 1.5rem;
  margin: 0;
  margin-bottom: 8px;
`;

const Contents = styled.p`
  font-size: 1.5rem;
  margin: 0;
  margin-bottom: 8px;
`;

const Wrapper = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  padding: 20px;
`;

export default TestPage;
