import React from 'react';
import logo from '../logo.png';

class Home extends React.Component {
    render() {
        return (
            <div className="App">
                <div id="main-wrapper">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1> reliETH </h1>
                    <h4> Welcome to the ethBoston Hackathon Disaster Relief page</h4>
                    <h4> Please login to continue</h4>
                        <a href="https://app.squarelink.com/authorize?client_id=3c6f59c08f0c96290c38&scope=[user:name,user:email,wallets:read]&redirect_uri=https://relieth.rshah9.now.sh/dashboard&response_type=token">
                        <img alt="squarelink-login" src="https://squarelink.com/img/sign-tx.svg" width="400"/></a>
                </div>
            </div>
        )
    }
}
export default Home;
