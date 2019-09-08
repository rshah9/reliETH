import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
        };
    }

    render() {
        return (
            <AppBar
                style={{ color: this.props.muiTheme.palette.textColor }}
                title="reliETH"
            >
                <Toolbar style={{ textAlign: 'right' }}>
                    <Typography style={{color: 'white'}} variant="h6">
                        {this.state.title}
                    </Typography>
                    <Typography style={{ color: 'white', marginLeft: '1200px' }} variant="h6">
                        {`Hello, ${this.props.name}`}
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default muiThemeable()(Header);
