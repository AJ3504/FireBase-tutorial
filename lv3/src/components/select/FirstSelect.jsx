import React from "react";
import { styled } from "styled-components";
import { useState } from "react";

export const FirstSelect = () => {
  //
  const options = ["한식", "중식", "일식", "인도식"];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  //
  const handleOptionClick = (option) => {
    //리스트 중에 하나 클릭됐을 때, 그 옵션이 set되고
    setSelectedOption(option);
    //리스트 영역은 닫혀야 함
    setIsOpen(false);
  };

  //
  return (
    <div>
      <DropdownWrapper>
        {/* selectedOption이 null인 경우, "선택해주세요"가 나올 것 */}
        <DropdownHeader
          onClick={() => {
            // setIsOpen(!isOpen)
            setIsOpen((prev) => !prev);
          }}
        >
          <span> {selectedOption || "선택해주세요!"} </span>
          <span>▼</span>
        </DropdownHeader>

        {isOpen && (
          <DropdownList>
            {
              // option이 중복되지 않는다는 가정하에, key에는 그냥 option을 넣어주면 됨
              options.map((option) => (
                <DropdownItem
                  key={option}
                  onClick={() => {
                    handleOptionClick(option);
                  }}
                >
                  {option}
                </DropdownItem>
              ))
            }
          </DropdownList>
        )}
      </DropdownWrapper>
    </div>
  );
};

//
const DropdownWrapper = styled.div`
  width: 200px;
  border: 1px solid #ccc;
`;

const DropdownHeader = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

//ul태그st
const DropdownList = styled.div`
  border-top: 1px solid #ccc;

  /* 🦑아래 네부분이 없었다면, 드롭다운 리스트가 부모영역(박스)를 벗어나지 못하게 됨 */
  position: absolute;
  width: 200px;
  border: 1px solid #ccc;
  background-color: #ffffff;
`;

//ul태그 속 li 하나하나st
const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;
