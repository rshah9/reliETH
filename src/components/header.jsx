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
                showMenuIconButton={false}
                title="reliETH"
            >
                <Toolbar>
                    <Typography style={{color: 'white'}} variant="h6">
                        {this.state.title}
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default muiThemeable()(Header);
