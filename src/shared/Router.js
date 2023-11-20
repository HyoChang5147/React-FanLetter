import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../GlobalStyle";
import Home from "../pages/Home";
import Detail from "pages/Detail";
const fakeData = require("../fakeData.json");

const Router = () => {
  const [fanLetters, setFanLetters] = useState([]);
  const [clickedMemberData, setClickedMemberData] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const [fakeDataState, setFakeDataState] = useState(fakeData);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                selectedMember={selectedMember}
                setSelectedMember={setSelectedMember}
                fakeData={fakeDataState}
                fanLetters={fanLetters}
                setFanLetters={setFanLetters}
                clickedMemberData={clickedMemberData}
                setClickedMemberData={setClickedMemberData}
              />
            }
          />
          <Route
            path="detail/:id"
            element={
              <Detail
                fanLetters={fanLetters}
                setFanLetters={setFanLetters}
                fakeData={fakeDataState}
                setFakeData={setFakeDataState}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
