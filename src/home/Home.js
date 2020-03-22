import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export const Home = () => {
  return (
    <React.Fragment>
      <h1>Latest re-hashed Articles</h1>
      <Container>
        article 1 text ______________________________ article 2 text
      </Container>
      <Button href="/researchrehashed">Click here for more articles!</Button>
    </React.Fragment>
  );
};
