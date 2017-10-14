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