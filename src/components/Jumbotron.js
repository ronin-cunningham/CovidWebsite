import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import "./Jumbotron.css";

export const Jumbotron = () => {
  return (
    <Jumbo fluid className="jumbo">
      <Container align="center">
        <h1>Knowledge is the antidote to fear.</h1>
        <p>Ralph Waldo Emerson</p>
      </Container>
    </Jumbo>
  );
};
