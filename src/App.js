import "./global.css";
import React from "react";
// import getConfig from "./config";
import styled from "styled-components";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NewPoll from "./components/NewPoll";
import PollingStation from "./components/PollingStation";
import Home from "./components/Home";
// const { networkId } = getConfig(process.env.NODE_ENV || "development");

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/newpoll" element={<NewPoll />} />
          <Route exact path="/pollingstation" element={<PollingStation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
