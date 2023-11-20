import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Detail = ({ fanLetters, setFanLetters, fakeData, setFakeData }) => {
  const location = useLocation();
  const fanLetter = location.state?.fanLetter;
  const navigate = useNavigate();

  const [editing, setEditing] = useState(false);
  const [editedContent, setEditedContent] = useState("");
  const [originalContent, setOriginalContent] = useState("");

  useEffect(() => {
    if (fanLetter) {
      setEditedContent(fanLetter.content);
      setOriginalContent(fanLetter.content);
    }
  }, [fanLetter]);

  const handleSave = () => {
    if (editedContent === originalContent) {
      alert("변경 사항이 없습니다!");
      return;
    }

    if (editedContent.trim() === "") {
      alert("내용을 입력해주세요!");
      return;
    }

    const confirmSave = window.confirm("이대로 변경 사항을 저장하시겠습니까?");
    if (confirmSave) {
      const updatedContent = { ...fanLetter, content: editedContent };
      const updatedLetters = fanLetters.map((letter) =>
        letter.id === fanLetter.id ? updatedContent : letter
      );
      setFanLetters(updatedLetters);

      const updatedFakeData = fakeData.map((data) =>
        data.id === fanLetter.id ? updatedContent : data
      );
      setFakeData(updatedFakeData);

      setEditing(false);
      navigate("/");
    }
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setEditedContent(fanLetter.content);
    setEditing(false);
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "정말로 이 팬레터를 삭제하시겠습니까?"
    );
    if (confirmDelete) {
      const updatedLetters = fanLetters.filter(
        (letter) => letter.id !== fanLetter.id
      );
      setFanLetters(updatedLetters);

      const updatedFakeData = fakeData.filter(
        (data) => data.id !== fanLetter.id
      );
      setFakeData(updatedFakeData);

      navigate("/");
    }
  };

  return (
    <CenteredContainer>
      <DetailWrapper>
        <h2>Fan Letter</h2>
        <img
          src={fanLetter?.avatar}
          alt="Avatar"
          style={{ width: "100px", borderRadius: "50%" }}
        />
        <p>To. {fanLetter?.writedTo}</p>
        <p>Name: {fanLetter?.nickname}</p>
        <p>
          작성일:{" "}
          {fanLetter ? new Date(fanLetter.createdAt).toLocaleString() : ""}
        </p>

        {!editing ? (
          <div>
            <p>내용: {fanLetter?.content}</p>
            <button onClick={handleEdit}>내용 수정</button>
          </div>
        ) : (
          <div>
            <textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              placeholder="최대 100자 까지 작성할 수 있습니다"
              maxLength={100}
            />
            <button onClick={handleSave}>저장</button>
            <button onClick={handleCancel}>취소</button>
          </div>
        )}
        <button className="delete" onClick={handleDelete}>
          삭제
        </button>
        <button className="main" onClick={() => navigate("/")}>
          메인
        </button>
      </DetailWrapper>
    </CenteredContainer>
  );
};

export default Detail;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const DetailWrapper = styled.div`
  text-align: center;
  padding: 20px;
  background-color: rgba(255, 150, 150, 0.8);
  backdrop-filter: blur(8px);
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 500px;
  margin: 0 auto;

  button.main {
    background-color: #fe5b52;
  }

  button.delete {
    background-color: #fe3228;
  }

  h2 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  img {
    width: 100px;
    border-radius: 50%;
  }

  p {
    font-size: 25px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  textarea {
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
    resize: vertical;
  }

  button {
    margin-right: 10px;
    padding: 8px 12px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    background-color: #3498db;
    color: #fff;
    font-size: 14px;
    margin-top: 5px;
  }
`;
