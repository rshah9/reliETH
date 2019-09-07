import React from 'react';
import logo from './logo.png';
import './App.css';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
        <div id="main-wrapper">
            <img src={logo} className="App-logo" alt="logo" />
            <h1> reliETH </h1>
            <h4> Welcome to the ethBoston Hackathon Disaster Relief page</h4>
            <h4> Please login to continue</h4>
            <Button variant="contained" href="/login" color="primary" >
                Login
            </Button>
        </div>
    </div>
  );
}

export default App;
