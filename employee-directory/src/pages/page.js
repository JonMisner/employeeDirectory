import React from "react";
// import API from "../utils/API";
// import NavBar from "../comps/nav";
import Body from "../comps/body";
import { Jumbotron, Container } from 'reactstrap';


function Page () {
   
   
   return (
      // <Router>
        <div>
         <Jumbotron fluid>
            <Container fluid>
               <Body/>
            </Container>
         </Jumbotron>
        </div>
      // </Router>
    );

}


// bring in and format API info (set to state)
// 
// all state manipulating functions on here


   // render function
      // nav bar /search
      // header
      // body
         // employees
 export default Page;