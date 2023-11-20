import React from "react";
import Header from "components/Header";
import MemberButton from "components/MemberButton";
import Input from "components/Input";
import FanLetter from "components/FanLetter";

function Home() {
  return (
    <div>
      <Header />
      <MemberButton />
      <Input />
      <FanLetter />
    </div>
  );
}

export default Home;
