import "./global.css";
import React from "react";
import getConfig from "./config";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NewPoll from "./components/NewPoll";
import PollingStation from "./components/PollingStation";
import Home from "./components/Home";
const { networkId } = getConfig(process.env.NODE_ENV || "development");

export default function App() {
  const changeCandidatesFunction = async (prompt) => {
    console.log(prompt);
    let namePair = await window.contract.getCandidatePair({ prompt: prompt });
    localStorage.setItem("Candidate1", namePair[0]);
    localStorage.setItem("Candidate2", namePair[1]);
    localStorage.setItem("prompt", prompt);
    window.location.replace(window.location.href + "PollingStation");
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home changeCandidates={changeCandidatesFunction} />}
          />
          <Route exact path="/newpoll" element={<NewPoll />} />
          <Route exact path="/pollingstation" element={<PollingStation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
