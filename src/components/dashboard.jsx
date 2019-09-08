import React from 'react';
import Header from './header';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContentWrapper from "./snackbar";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";

import web3 from '../web3';
import contract from "truffle-contract";

import ReliethABI from "../abis/Relieth";
import DisasterABI from "../abis/Disaster";

const Relieth = contract(ReliethABI);
const Disaster = contract(DisasterABI);

Relieth.setProvider(web3.currentProvider);
Disaster.setProvider(web3.currentProvider);

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openOne: false,
            openTwo: false,
            showSuccess: false,
            showFailed: false,
            amount: 0,
            disasters: []
        };
        this.handleOpenOne = this.handleOpenOne.bind(this);
        this.handleCloseConfirmOne = this.handleCloseConfirmOne.bind(this);
        this.handleCloseExitOne = this.handleCloseExitOne.bind(this);
        this.handleOpenTwo = this.handleOpenTwo.bind(this);
        this.handleCloseConfirmTwo = this.handleCloseConfirmTwo.bind(this);
        this.handleCloseExitTwo = this.handleCloseExitTwo.bind(this);
        this.handleCloseSnackbarSuccess = this.handleCloseSnackbarSuccess.bind(this);
        this.handleCloseSnackbarFailed = this.handleCloseSnackbarFailed.bind(this);
    }

    async componentDidMount() {
        const relieth = await Relieth.deployed();
        const disasterAddresses = await relieth.getDisasters();
        
        disasterAddresses.forEach(async address => {
            const disaster = await Disaster.at(address);
            this.state.disasters.push({
                name: await disaster.name(),
                description: await disaster.description(),
                location: await disaster.location(),
            });
        });
        console.log(this.state.disasters);
    }

    handleCloseExitOne() {
        this.setState( {
            openOne: false,
            amount: 0,
        });
    }

    handleCloseConfirmOne() {
        this.setState( {openOne: false}, () => {
            this.setState( {showSuccess: true}, () => {
                console.log('CLOSED CONFIRMED.')
            });
        });
    }

    handleOpenOne() {
        this.setState({openOne: true});
    }

    handleCloseExitTwo() {
        this.setState( {
            openTwo: false,
            amount: 0,
        });
    }

    handleCloseConfirmTwo() {
        this.setState( {openTwo: false}, () => {
            this.setState( {showSuccess: true}, () => {
                console.log('CLOSED CONFIRMED.')
            });
        });
    }

    handleOpenTwo() {
        this.setState({openTwo: true});
    }

    handleCloseSnackbarSuccess() {
        this.setState({showSuccess: false})
    }

    handleCloseSnackbarFailed() {
        this.setState({showFailed: false})
    }

    handleAmountChange(amount) {
        this.setState({amount});
    }

    render() {
        return (
            <>
                <Header title={'Dashboard'}/>
                <div id="dashboard-wrapper">
                    <main>
                        <Container maxWidth="lg" >
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Typography  variant="h5" component="h3" style={{ textAlign: 'center', fontWeight: "bold", paddingBottom: '10px' }}>
                                        Current Disaster Relief Events
                                    </Typography>
                                    <Card style={{ marginBottom: '30px' }}>
                                        <Grid container spacing={2}>
                                            <Grid style={{ marginBottom: '-8px' }} item>
                                                <img alt="disaster"
                                                    style={{ height: '200px', width: '200px' }}
                                                    src={"https://9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com/1140x_a10-7_cTC/AP-19248552550369-1567803265.jpg"}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm container>
                                                <Grid item xs container direction="column" spacing={2}>
                                                    <Grid item xs>
                                                        <CardContent>
                                                            <Typography gutterBottom variant="h5" component="h2">
                                                                Hurricane Dorian
                                                            </Typography>
                                                            <Typography variant="body2" color="textSecondary" component="p">
                                                                Hurricane Dorian, the fourth named hurricane of the 2019 season,
                                                                tied the record for the most powerful hurricane to make landfall
                                                                in the Bahamas. Donate to support the cause.
                                                            </Typography>
                                                        </CardContent>
                                                        <CardActions>
                                                            <Button onClick={this.handleOpenOne} size="small" color="primary">
                                                                Donate
                                                            </Button>
                                                            <Dialog
                                                                open={this.state.openOne}
                                                                onClose={this.handleCloseExitOne}
                                                                aria-labelledby="alert-dialog-title"
                                                                aria-describedby="alert-dialog-description"
                                                            >
                                                                <DialogTitle id="alert-dialog-title">{"Donate"}</DialogTitle>
                                                                <FormControl style={{ margin: '0 auto', width: '120px' }}>
                                                                    <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                                                                    <Input
                                                                        id="adornment-amount"
                                                                        type="number"
                                                                        value={this.state.amount}
                                                                        onChange={(event) => this.handleAmountChange(event.target.value)}
                                                                        startAdornment={<InputAdornment position="start">ETH</InputAdornment>}
                                                                    />
                                                                </FormControl>
                                                                <DialogActions>
                                                                    <Button onClick={this.handleCloseExitOne} color="primary">
                                                                        Exit
                                                                    </Button>
                                                                    <Button onClick={this.handleCloseConfirmOne} color="primary" autoFocus>
                                                                        Confirm
                                                                    </Button>
                                                                </DialogActions>
                                                            </Dialog>
                                                        </CardActions>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                    <Card style={{ marginBottom: '30px' }}>
                                        <Grid container spacing={2}>
                                            <Grid style={{ marginBottom: '-8px' }} item>
                                                <img alt="disaster"
                                                    style={{ height: '200px', width: '200px' }}
                                                    src={"https://info.umkc.edu/unews/wp-content/uploads/2019/09/566ee9cf1900002300789c85-620x400.jpg"}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm container>
                                                <Grid item xs container direction="column" spacing={2}>
                                                    <Grid item xs>
                                                        <CardContent>
                                                            <Typography gutterBottom variant="h5" component="h2">
                                                                Amazon Rainforest Fire
                                                            </Typography>
                                                            <Typography variant="body2" color="textSecondary" component="p">
                                                                Brazil’s Amazon rainforest fires have caused global concern.
                                                                And yet it could get even worse as the country’s fire season is
                                                                just getting started. Donate to support the cause.
                                                            </Typography>
                                                        </CardContent>
                                                        <CardActions>
                                                            <Button onClick={this.handleOpenTwo} size="small" color="primary">
                                                                Donate
                                                            </Button>
                                                            <Dialog
                                                                open={this.state.openTwo}
                                                                onClose={this.handleCloseExitTwo}
                                                                aria-labelledby="alert-dialog-title"
                                                                aria-describedby="alert-dialog-description"
                                                            >
                                                                <DialogTitle id="alert-dialog-title">{"Donate"}</DialogTitle>
                                                                <FormControl style={{ margin: '0 auto', width: '120px' }}>
                                                                    <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                                                                    <Input
                                                                        id="adornment-amount"
                                                                        type="number"
                                                                        value={this.state.amount}
                                                                        onChange={(event) => this.handleAmountChange(event.target.value)}
                                                                        startAdornment={<InputAdornment position="start">ETH</InputAdornment>}
                                                                    />
                                                                </FormControl>
                                                                <DialogActions>
                                                                    <Button onClick={this.handleCloseExitTwo} color="primary">
                                                                        Exit
                                                                    </Button>
                                                                    <Button onClick={this.handleCloseConfirmTwo} color="primary" autoFocus>
                                                                        Confirm
                                                                    </Button>
                                                                </DialogActions>
                                                            </Dialog>
                                                        </CardActions>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Container>
                    </main>
                </div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.showSuccess}
                    autoHideDuration={6000}
                    onClose={this.handleCloseSnackbarSuccess}
                >
                    <SnackbarContentWrapper
                        onClose={this.handleCloseSnackbarSuccess}
                        variant="success"
                        message="Payment successful!"
                    />
                </Snackbar>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.showFailed}
                    autoHideDuration={6000}
                    onClose={this.handleCloseSnackbarFailed}
                >
                    <SnackbarContentWrapper
                        onClose={this.handleCloseSnackbarFailed}
                        variant="error"
                        message="Payment failed. Please try again."
                    />
                </Snackbar>
            </>
        )
    }
}
export default Dashboard;
