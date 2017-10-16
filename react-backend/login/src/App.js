import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";
import RouteNavItem from "./components/RouteNavItem";


class App extends Component {
   state = {users:[]}

   componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
    }

    // Creates a fixed-width container. 
    // Adds a NavBar. 
    // Uses Link component for the React-Router to manage the link to the home page
    //Creates collapsible hamburger menu for Mobile screen
    // Creates menu items in Navbar


  render() {
    return (
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
            <RouteNavItem href="/login"> Login</RouteNavItem>
            <RouteNavItem href="/eatCandy"> Eat Candy</RouteNavItem>
          </Nav>  
        </Navbar.Collapse>  
      </Navbar>
      <Routes />

      <h1>Users</h1>
      {this.state.users.map(user => 
        <div key={user.email}>
          {user.email} <br/>
        </div>)}
    </div>
    );
  }
  }
  
export default App;

  // <h1>Users</h1> inserted above ) if used here
//   <h1>Users</h1>
  
//   {this.state.users.map(user => 
//   <div key={user.email}>
//   {user.email} <br/>
//   {user.password}</div>
//   )}
// </div>



