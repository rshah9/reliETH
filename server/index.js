import Squarelink from 'squarelink';
const Web3 = require('web3');

//connect to the sqlk

const sqlk = new Squarelink('3c6f59c08f0c96290c38', 'ropsten');

// Use Promise or callback
sqlk.getProvider((provider, err) => {
    window.web3 = new Web3(provider);

    // Use standard Web3 methods as you normally would
    window.web3.eth.getAccounts().then(console.log);
});