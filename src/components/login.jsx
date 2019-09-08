import  React from 'react';

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

class Login extends React.Component {
    render() {
        return (
            <div id="main-wrapper">

                <main>
                    <Container maxWidth="lg" >
                        <Grid item xs={12}>
                            <h1>Login Page</h1>
                            <a href="https://app.squarelink.com/authorize?client_id=3c6f59c08f0c96290c38&scope=[user:email,wallets:read]&redirect_uri=http://localhost:3000/dashboard&response_type=token"><img alt="squarelink-login" src="https://squarelink.com/img/sign-tx.svg" width="220"/></a>
                            {/*<a href="https://app.squarelink.com/tx?client_id=3c6f59c08f0c96290c38&network=ropsten&value=10000000000000000&to=0x824F8C464Fd43EF15aE87DB86ea30Ff91FAb2ac3"><img src="https://squarelink.com/img/sign-tx.svg" width="220"/></a>*/}
                        </Grid>
                    </Container>
                </main>
            </div>
        )
    }
}
export default Login;
