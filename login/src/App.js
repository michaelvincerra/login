import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";
import RouteNavItem from "./components/RouteNavItem";


class App extends Component {
  render() {
    return (

    // Creates a fixed-width container. 
    // Adds a NavBar. 
    // Uses Link component for the React-Router to manage the link to the home page

    <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"> Candy for Coders</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header> 
      <Navbar.Collapse>
          <Nav pullRight>
            // Creates menu items in Navbar
            <RouteNavItem href="/login"> Login</RouteNavItem>
            <RouteNavItem href="/eatCandy"> Eat Candy</RouteNavItem>
          </Nav>  
          // Creates collapsible hamburger menu for Mobile screen
        </Navbar.Collapse>  
      </Navbar>
      <Routes />
    </div>
  );
}
}

export default App;