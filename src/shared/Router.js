import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Home from "../pages/Home";
import Detail from "pages/Detail";
import { FamilyContext } from "context/FamilyContext";
const fakeData = require("../fakeData.json");

const Router = () => {
  const [fanLetters, setFanLetters] = useState([]);
  const [clickedMemberData, setClickedMemberData] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const [fakeDataState, setFakeDataState] = useState(fakeData);

  return (
    <BrowserRouter>
      <FamilyContext.Provider
        value={{
          selectedMember,
          setSelectedMember,
          fakeDataState,
          setFakeDataState,
          fanLetters,
          setFanLetters,
          clickedMemberData,
          setClickedMemberData,
        }}
      >
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail/:id" element={<Detail />} />
        </Routes>
      </FamilyContext.Provider>
    </BrowserRouter>
  );
};

export default Router;
