import React from "react";
import Header from "components/Header";
import MemberButton from "components/MemberButton";
import Input from "components/Input";
import FanLetter from "components/FanLetter";

function Home({
  selectedMember,
  setSelectedMember,
  fakeData,
  fanLetters,
  setFanLetters,
  clickedMemberData,
  setClickedMemberData,
}) {
  const addFanLetter = (newFanLetter) => {
    setFanLetters([...fanLetters, newFanLetter]);
  };

  const passMemberData = (memberData) => {
    setClickedMemberData(memberData); // 클릭한 멤버 정보 저장
  };

  return (
    <div>
      <Header />
      <MemberButton
        selectedMember={selectedMember}
        setSelectedMember={setSelectedMember}
        passMemberData={passMemberData}
      />
      <Input addFanLetter={addFanLetter} />
      <FanLetter
        fanLetters={fanLetters}
        fakeData={fakeData}
        selectedMember={clickedMemberData}
      />
    </div>
  );
}

export default Home;
