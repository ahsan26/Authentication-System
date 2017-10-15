import React, { Component } from 'react';
import './App.css';
import firebase from "firebase";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import { getVal } from "./services/service";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
var config = {
  apiKey: "AIzaSyBf188AEB6bZEbwB7u-R_WWvj1PyjgkoWs",
  authDomain: "testing-e9e51.firebaseapp.com",
  databaseURL: "https://testing-e9e51.firebaseio.com",
  projectId: "testing-e9e51",
  storageBucket: "testing-e9e51.appspot.com",
  messagingSenderId: "1088476938562"
};
firebase.initializeApp(config);
const ref = firebase.database().ref();
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log(user);
  } else {
    console.log("Not loged In");
  }
})
class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div id="main_container">
            <Switch>
              <Route exact path="/" component={SignIn} />
              <Route path="/signUp" component={SignUp} />
              <Route render={_ => <h1>404 Not Found</h1>} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
