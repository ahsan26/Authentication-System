import React, { Component } from "react";
import firebase from "firebase";
import { TextField } from "material-ui";
import { Button } from "react-bootstrap";
import { getVal } from "./../services/service";
import { NavLink } from "react-router-dom";
export default class SignIn extends Component {
    signInDoner() {
        firebase.auth().signInWithEmailAndPassword(getVal("email"), getVal("password")).catch(d => {
            console.log(d.message);
        });
    }
    logOut() {
        firebase.auth().signOut();
    }
    render() {
        return (
            <div>
                <h1>Sign In</h1>
                <form action="JavaScript:void(0)">
                    <TextField floatingLabelText="Email" type="email" id="email" hintText="Email" />
                    <TextField floatingLabelText="Password" type="password" id="password" hintText="Password" />
                    <Button onClick={this.signInDoner.bind(this)} bsStyle="danger">Sign In</Button>
                    <Button onClick={this.logOut.bind(this)}>Log Out</Button>
                    <p>No Account! Create One! </p><NavLink to="/signUp">Sign Up</NavLink>
                </form>
            </div>
        );
    }
}