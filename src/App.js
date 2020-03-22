import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./home/Home";
import { ResearchReHashed } from "./research-re-hashed/ResearchReHashed";
import { Faq } from "./faq/Faq";
import { Contact } from "./contact/Contact";
import { NoMatch } from "./components/NoMatch";
import { NavigationBar } from "./components/NavigationBar";
import { Jumbotron } from "./components/Jumbotron";

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Jumbotron />
      <Container>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/researchrehashed" component={ResearchReHashed} />
            <Route path="/faq" component={Faq} />
            <Route path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Container>
    </React.Fragment>
  );
}

export default App;
