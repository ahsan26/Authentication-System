import React, { Component } from "react";
import firebase from "firebase";
import { NavLink } from "react-router-dom";
import { TextField } from "material-ui";
import { Button } from "react-bootstrap";
import { getVal } from "./../services/service";
export default class SignUp extends Component {
    signUpDoner() {
        firebase.auth().createUserWithEmailAndPassword(getVal("email"), getVal("password")).then(d => {
            firebase.database().ref().child("users").child(`${d.uid}`).set({
                "email": getVal("email"),
                "password": getVal("password")
            });
        }).catch(e => {
            console.log(e.message);
        });
    }
    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <form action="JavaScript:void(0)">
                    <TextField type="email" id="email" floatingLabelText="Email" hintText="Your Email" />
                    <TextField type="password" id="password" floatingLabelText="Password" hintText="Your Password" />
                    <button onClick={this.signUpDoner.bind(this)}>Sign Up</button>
                    <p>Already have a account!</p><NavLink to="/">Sign In</NavLink>
                </form>
            </div>
        );
    }
}