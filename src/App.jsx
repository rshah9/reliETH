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
                        <Route path="/" exact component={Dashboard}/>
                        <Route path="/login" render={(props) => <Login {...props}/>}/>
                        <Route path="/transfer" render={(props) => <Transfer {...props}/>} />
                        <Route path="/error" render={(props) => <Error {...props}/>} />
                    </Switch>
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default App;