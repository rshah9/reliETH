import React, {Component} from 'react';
import Header from './header';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import contract from "truffle-contract";
import ReliethABI from "../abis/Relieth";
import DisasterABI from "../abis/Disaster";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disasters: [],
            disasterComponents: [],
            web3: '',
            relieth: '',
            disaster: '',
            imageOne: 'https://9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com/1140x_a10-7_cTC/AP-19248552550369-1567803265.jpg',
            imageTwo: 'https://info.umkc.edu/unews/wp-content/uploads/2019/09/566ee9cf1900002300789c85-620x400.jpg',
        };
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.web3 !== prevProps.web3) {
            this.setState({web3: this.props.web3});
        }
        if (this.state.web3 !== prevState.web3) {
                const Relieth = contract(ReliethABI);
                const Disaster = contract(DisasterABI);
                Relieth.setProvider(this.state.web3.currentProvider);
                Disaster.setProvider(this.state.web3.currentProvider);
                Relieth.deployed().then((value) => {
                    this.setState({relieth: value, disaster: Disaster});
                });
        }
        if (this.state.relieth !== prevState.relieth) {
            const disasters = [];
            const disasterComponents = [];
            this.state.relieth.getDisasters().then((disasterAddresses) => {
                disasterAddresses.forEach(async address => {
                    const disaster = await this.state.disaster.at(address);
                    const disasterName = await disaster.name();
                    const disasterDescription = await disaster.description();
                    const disasterLocation = await disaster.location();
                    disasters.push({
                        name: disasterName,
                        description: disasterDescription,
                        location: disasterLocation,
                    });
                    disasterComponents.push(
                        <Card style={{ marginBottom: '30px' }}>
                        <Grid container spacing={2}>
                            <Grid style={{ marginBottom: '-8px' }} item>
                                <img alt="disaster"
                                     style={{ height: '200px', width: '200px' }}
                                     src={(disasterName === 'Hurricane Dorian') ? (this.state.imageOne) : (this.state.imageTwo) }
                                />
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {disasterName}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {disasterDescription}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button variant="contained" color="primary" style={{ height:'50px', width:'200px', fontWeight:'bold', fontSize: '20px'}}>
                                                <a style={{ textDecoration : "none", color: 'white'}} href="https://app.squarelink.com/tx?client_id=3c6f59c08f0c96290c38&network=ropsten&value=10000000000000000&to=0x824F8C464Fd43EF15aE87DB86ea30Ff91FAb2ac3">DONATE </a>
                                            </Button>
                                        </CardActions>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                    )
                });
                this.setState({disasters, disasterComponents});
            });
        }
    }

    render() {
        const defaultComponents = (
            <>
                <Card style={{ marginBottom: '30px' }}>
                    <Grid container spacing={2}>
                        <Grid style={{ marginBottom: '-8px' }} item>
                            <img alt="disaster"
                                 style={{ height: '230px', width: '230px' }}
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
                                        <Button variant="contained" color="primary" style={{ height:'50px', width:'200px', fontWeight:'bold', fontSize: '20px'}}>
                                            <a style={{ textDecoration : "none", color: 'white'}} href="https://app.squarelink.com/tx?client_id=3c6f59c08f0c96290c38&network=ropsten&value=10000000000000000&to=0x824F8C464Fd43EF15aE87DB86ea30Ff91FAb2ac3">DONATE </a>
                                        </Button>
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
                                 style={{ height: '230px', width: '230px' }}
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
                                        <Button variant="contained" color="primary" style={{ height:'50px', width:'200px', fontWeight:'bold', fontSize: '20px'}}>
                                            <a style={{ textDecoration : "none", color: 'white'}} href="https://app.squarelink.com/tx?client_id=3c6f59c08f0c96290c38&network=ropsten&value=10000000000000000&to=0x824F8C464Fd43EF15aE87DB86ea30Ff91FAb2ac3">DONATE </a>
                                        </Button>
                                    </CardActions>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </>
        );
        const renderComponents = (this.state.disasterComponents.length !== 0) ? this.state.disasterComponents : defaultComponents;
        return (
            <>
                <Header title={'Dashboard'}/>
                <div id="dashboard-wrapper">
                    <main>
                        <Container maxWidth="lg" >
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Typography  variant="h5" component="h3" style={{textAlign: 'center', fontWeight: "bold", paddingBottom: '10px' }}>
                                        Current Disaster Relief Events
                                    </Typography>
                                    {renderComponents}
                                </Grid>
                            </Grid>
                        </Container>
                    </main>
                </div>
            </>
        )
    }
}
export default Dashboard;
