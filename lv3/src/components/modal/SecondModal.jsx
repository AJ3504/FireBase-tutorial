import React, { useState, useRef, useEffect } from "react";
import { styled } from "styled-components";

export const SecondModal = () => {
  //
  const [isOpen, setIsOpen] = useState(false);
  //
  const modalRef = useRef();

  //
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  // clickOutside 메서드의 로직 : 모달 외부 영역(StModalBox)이 존재하고 && e.target(클릭을 눌렀을 때의 그놈)이 StModalBox인 경우, closeModal()을 실행해라
  const clickOutside = (e) => {
    console.log("콘솔1", modalRef.current);
    console.log("콘솔2", e.target);
    if (modalRef.current && modalRef.current === e.target) {
      closeModal();
    }
  };

  //🦑최초에 랜더링이 됐을 때, 이벤트리스너를 부여
  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
    //return부분 : 컴포넌트를 벗어났을 때에는, 이벤트리스너가 없어야 한다!
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, []);

  //
  return (
    <div>
      <StButton onClick={openModal}>
        2: 여는 버튼 (외부영역 누르면 닫히는 버튼)
      </StButton>
      {/* isOpen이 true일 때만 랜더링되도록 분기하고 싶음 */}
      {/* 🦑모달이 열렸을 때, 그 전체 모달을 ref 안에 가둬놓음 */}
      {isOpen && (
        <StModalBox ref={modalRef}>
          <StModalContents>
            <p>
              닫기와 확인버튼 2개가 있고, 외부영역을 누르면 모달창이 닫혀요.
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
