import React from "react";
// import API from "../utils/API";
// import NavBar from "../comps/nav";
import Body from "../comps/body";
import { Jumbotron, Container } from "reactstrap";

function Page() {
  return (
    // <Router>
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <Body />
        </Container>
      </Jumbotron>
    </div>
    // </Router>
  );
}

export default Page;
