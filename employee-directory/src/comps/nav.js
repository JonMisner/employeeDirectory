import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import Search from "./search";
// import Body from "./body";
import "../styles/nav.css"

const NavBar = ({handleSearchChange}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div >
      <Navbar className="nav" expand="md" >
        <NavbarBrand href="/">Employee Directory</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          </Nav>
          <NavItem>
            <Search handleSearchChange = {handleSearchChange} />
          </NavItem>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;

