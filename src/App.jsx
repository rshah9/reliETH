import Web3 from "web3";
import Squarelink from 'squarelink';
import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {muiTheme} from "./themes";
import Dashboard from "./components/dashboard";
import Login from './components/login';
import Transfer from "./components/transfer";
import Error from "./components/error";
import Home from "./components/home";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTheme: muiTheme,
            web3: '',
        };
    }

    componentWillMount() {
        let web3;
        // squarelink SDK
        if (!!(Squarelink)) {
            const sqlk = new Squarelink('3c6f59c08f0c96290c38', 'ropsten');
            sqlk.getProvider((provider) => {
                web3 = new Web3(provider);
                if (web3) {
                    this.setState({web3});
                }
            });
        }
        // modern browsers
        else if (window.ethereum) {
            web3 = new Web3(window.ethereum);
            try {
                this.setState({web3});
                // Request account access if needed
                window.ethereum.enable();
            } catch (error) {
                console.log(error);
            }
        }
        // Legacy dapp browsers...
        else if (window.web3) {
            web3 = new Web3(web3.currentProvider);
            this.setState({web3});
        }
        // Non-dapp browsers...
        else {
            console.log(
                "Non-Ethereum browser detected. You should consider trying MetaMask!"
            );
        }
    }

    render() {
        console.log(this.state.web3);
        return (
            < MuiThemeProvider muiTheme={getMuiTheme(this.state.selectedTheme)}>
                <Router>
                    <Switch>
                        <Route path="/" exact render={(props) => <Home {...props} web3={this.state.web3}/>}/>
                        <Route path="/login" render={(props) => <Login {...props} web3={this.state.web3}/>}/>
                        <Route path="/dashboard" render={(props) => <Dashboard  {...props} web3={this.state.web3}/>}/>
                        <Route path="/transfer" render={(props) => <Transfer {...props} web3={this.state.web3}/>} />
                        <Route path="/error" render={(props) => <Error {...props} web3={this.state.web3}/>} />
                    </Switch>
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default App;
