import "./global.css";
import React from "react";
import getConfig from "./config";
import styled from "styled-components";

const { networkId } = getConfig(process.env.NODE_ENV || "development");

export default function App() {
  <Container>Hello</Container>;
}

const Container = styled.div`
  color: white;
`;
