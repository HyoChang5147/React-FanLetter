import React, { useContext, useState } from "react";
import RedVelvetLogo from "../assets/Red _Velvet_logo.png";
import styled from "styled-components";
import uuid from "react-uuid";
import memberData from "shared/data";
import { FamilyContext } from "context/FamilyContext";

const Input = ({ setFanLetters, fanLetters }) => {
  const data = useContext(FamilyContext);

  const addFanLetter = (newFanLetter) => {
    data.setFanLetters([...data.fanLetters, newFanLetter]);
  };

  const FanLetterState = {
    id: uuid(),
    nickname: "",
    content: "",
    writedTo: "",
    avatar: RedVelvetLogo,
    createdAt: new Date().toISOString(),
  };

  const [fanLetter, setFanLetter] = useState({ ...FanLetterState });

  const resetFanLetter = () => {
    setFanLetter({ ...FanLetterState });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      fanLetter.nickname.trim() !== "" &&
      fanLetter.content.trim() !== "" &&
      fanLetter.writedTo !== ""
    ) {
      addFanLetter(fanLetter);
      resetFanLetter();
    } else {
      alert("모든 정보를 입력해주세요!");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFanLetter({ ...fanLetter, [name]: value });
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Label>Fan Name</Label>
        <InputField
          type="text"
          name="nickname"
          value={fanLetter.nickname}
          onChange={handleInputChange}
          placeholder="최대 20글자 까지 작성할 수 있습니다"
          maxLength={20}
        />
        <Label>Fan Letter</Label>
        <TextArea
          name="content"
          value={fanLetter.content}
          onChange={handleInputChange}
          placeholder="최대 100자 까지 작성할 수 있습니다"
          maxLength={100}
        />
        <SelectField
          name="writedTo"
          value={fanLetter.writedTo}
          onChange={handleInputChange}
        >
          <option value="" disabled>
            멤버를 선택해주세요.
          </option>
          {memberData.map((member) => (
            <option key={member.id} value={member.member}>
              {member.member}
            </option>
          ))}
        </SelectField>
        <SubmitButton type="submit">등록하기</SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default Input;

const FormContainer = styled.div`
  max-width: 400px;
  margin: 20px auto;
  padding: 30px;
  border-radius: 8px;
  backdrop-filter: blur(5px);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  color: #fff;
  margin-bottom: 8px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 130px;
  padding: 10px;
  margin-bottom: 15px;
`;

const SelectField = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #fe5b52;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #fe3228;
  }
`;
