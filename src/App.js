import React from 'react';
import logo from './logo.svg';
import './App.css';

import firebase from "firebase/app";
import "firebase/auth";

import config from './config';

import Home from './views/Home';

function App() {
  console.log(config.firebaseConfig);
  debugger;
  return (
    <>
      <FirebaseAuthProvider firebase={firebase} {...config}>
        <Home />
      </FirebaseAuthProvider> 
    </>
  );
}

export default App;
