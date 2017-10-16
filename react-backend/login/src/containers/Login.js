import React, {Component} from "react"; 
import {Button,FormGroup,FormControl, ControlLabel} from "react-bootstrap"; 
import "./Login.css"; 

export default class Login extends Component {
    constructor(props){
        super(props);
        // Create an object that holds state
        this.state = {
            email: "",
            password: ""
        };
    }
    validateForm() {
        // TODO: Add authorization only for SHA1
        // Links submit button with state
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        }); 
    }
    
    // Triggers callback
    handleSubmit = event => {
        event.preventDefault(); 
    }

    // handleUserRegistered = event => {
    //     return this.state.users.map(user => <div key={user.email}>{user.email} <br/></div>)}
    // }


    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                    autoFocus
                    type="email"
                    value ={this.state.email}  // Connects the state to these fields
                    onChange={this.handleChange}
                    /* onChange={this.handleUserRegistered}  //Attempts to check is a user is registered.  */
                    />
                </FormGroup>



                <FormGroup controlId="password" bsSize="large">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                        value={this.state.password}
                        onChange={this.handleChange}
                        type="password"
                    />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                    Login
                    </Button>
                </form>    
            </div>  
            
        );
    }
  }            


                // 14.10.2017: Solve lookup in database
                // If user exists in Express database, show the following. 

    //             <h1>Users</h1>
    //             {this.state.users.map(user => <div key={user.email}>{user.username}</div>)}
    //             </div>
    //         );
    //     }
//                 <div className="App">
                
//                     <h1>Users</h1>

//                 {this.state.users.map(user => 
//                 <div key={user.email}>
//                 {user.email} <br/>
//                 {user.password}/>
//                 )}</div>
//                 )} 
// }
// }





