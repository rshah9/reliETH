import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {muiTheme} from "./themes";
import Dashboard from "./components/dashboard";
import Transfer from "./components/transfer";
import Error from "./components/error";
import Home from "./components/home";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTheme: muiTheme
        };
    }

    render() {
        return (
            < MuiThemeProvider muiTheme={getMuiTheme(this.state.selectedTheme)}>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/dashboard" render={(props) => <Dashboard {...props}/>}/>
                        <Route path="/transfer" render={(props) => <Transfer {...props}/>} />
                        <Route path="/error" render={(props) => <Error {...props}/>} />
                    </Switch>
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default App;
