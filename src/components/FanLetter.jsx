import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const renderData = (dataArray) => {
  const shortenContent = (content) => {
    if (content.length > 30) {
      return `${content.substring(0, 30)}...`;
    }
    return content;
  };

  return dataArray.map((data) => (
    <StyledLink
      to={`/detail/${data.id}`}
      state={{ fanLetter: data }}
      key={data.id}
    >
      <StyledLetterContainer>
        <LetterContainer>
          <Avatar src={data.avatar} alt="Avatar" />
          <div>
            <WrittenTo>To.: {data.writedTo}</WrittenTo>
            <Nickname>Name: {data.nickname}</Nickname>
            <Content>Letter: {shortenContent(data.content)}</Content>
            <CreatedAt>
              작성일: {new Date(data.createdAt).toLocaleDateString()}{" "}
              {new Date(data.createdAt).toLocaleTimeString()}
            </CreatedAt>
          </div>
        </LetterContainer>
      </StyledLetterContainer>
    </StyledLink>
  ));
};
const FanLetter = ({ fanLetters, fakeData, selectedMember }) => {
  fanLetters.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const filteredLetters = fanLetters.filter(
    (letter) => letter.writedTo === selectedMember
  );

  const filteredFakeData = fakeData.filter(
    (data) => data.writedTo === selectedMember
  );

  return (
    <div>
      {filteredLetters.length === 0 && filteredFakeData.length === 0 ? (
        <NoFanLetterMessage>아직 등록된 팬레터가 없습니다.</NoFanLetterMessage>
      ) : (
        <>
          {renderData(filteredLetters)}
          {renderData(filteredFakeData)}
        </>
      )}
    </div>
  );
};

export default FanLetter;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const StyledLetterContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LetterContainer = styled.div`
  height: 200px;
  margin-bottom: 20px;
  backdrop-filter: blur(5px);
  border: 1px solid #ccc;
  padding: 30px;
  border-radius: 10px;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const WrittenTo = styled.p`
  font-size: 20px;
  margin-top: 5px;
`;

const Nickname = styled.p`
  font-size: 25px;
  font-weight: bold;
  margin-top: 5px;
`;

const Content = styled.p`
  font-size: 25px;
  font-weight: bold;
  margin-top: 5px;
`;

const CreatedAt = styled.p`
  font-size: 0.8em;
  margin-top: 10px;
`;

const NoFanLetterMessage = styled.p`
  font-size: 30px;
  color: #555;
  text-align: center;
  margin-top: 20px;
`;
