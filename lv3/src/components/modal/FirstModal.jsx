import React, { useState } from "react";
import { styled } from "styled-components";

export const FirstModal = () => {
  //
  const [isOpen, setIsOpen] = useState(false);

  //
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  //
  return (
    <div>
      <StButton onClick={openModal}>1: 여는 버튼</StButton>
      {/* isOpen이 true일 때만 랜더링되도록 분기하고 싶음 */}
      {isOpen && (
        <StModalBox>
          <StModalContents>
            <p>
              닫기와 확인버튼 2개가 있고, 외부영역을 눌러도 모달이 닫히지
              않아요.
            </p>
            <button>확인</button>
            <button onClick={closeModal}>닫기</button>
          </StModalContents>
        </StModalBox>
      )}
    </div>
  );
};

//StC 요소
//바깥쪽 영역 (비)
const StModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%; //전체영역을 다쓰게끔
  height: 100%; //전체영역을 다쓰게끔
  background-color: rgba(0, 0, 0, 0.5);

  //StModalContents가 가운데로 정렬되게 하기 위해
  display: flex;
  align-items: center;
  justify-content: center;
`;

//안쪽 영역 (활)
const StModalContents = styled.div`
  background-color: #fff;
  padding: 20px;
  width: 70%; //위의 영역에서 70% 차지하도록
  height: 50%; //위의 영역에서 50% 차지하도록
  border-radius: 12px;
`;

//'여는버튼' 꾸미기용
const StButton = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: rgb(85, 239, 196);
  color: rgb(0, 0, 0);
  height: 40px;
  width: 100px;
`;
