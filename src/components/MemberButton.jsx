import React, { useContext } from "react";
import styled from "styled-components";
import memberData from "shared/data";
import { FamilyContext } from "context/FamilyContext";

const MemberButton = ({
  setClickedMemberData,
  setSelectedMember,
  selectedMember,
}) => {
  const data = useContext(FamilyContext);

  const passMemberData = (memberData) => {
    data.setClickedMemberData(memberData); // 클릭한 멤버 정보 저장
  };

  const handleButtonClick = (member) => {
    data.setSelectedMember(member);
    passMemberData(member); // 클릭한 멤버 정보 전달
  };

  console.log(data.selectedMember);
  return (
    <ButtonContainer>
      {memberData.map((memberInfo) => (
        <Button
          key={memberInfo.id}
          onClick={() => handleButtonClick(memberInfo.member)}
          selected={data.selectedMember === memberInfo.member}
        >
          <img src={memberInfo.nameImg} alt={memberInfo.member} />
        </Button>
      ))}
    </ButtonContainer>
  );
};

export default MemberButton;

const Button = styled.button`
  width: 220px;
  margin: 5px;
  background-color: ${(props) => (props.selected ? "#fe3228" : "#fe5b52")};
  color: #fff;
  cursor: pointer;

  img {
    width: 200px;
    height: 100px;
    object-fit: contain;
    margin-right: 5px;
  }
`;

const ButtonContainer = styled.div`
  text-align: center;
`;
