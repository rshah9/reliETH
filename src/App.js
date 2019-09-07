import React from 'react';
import logo from './logo.png';
import './App.css';
import web3Obj from './helper';

class App extends React.Component {
  state = {
    account: '',
    balance: ''
  }

  componentDidMount() {
    const isTorus = sessionStorage.getItem('pageUsingTorus')

    if (isTorus) {
      web3Obj.initialize().then(() => {
        this.setStateInfo()
      })
    }
  }

  setStateInfo = () => {
    web3Obj.web3.eth.getAccounts().then(([account]) => {
      this.setState({ account });
      web3Obj.web3.eth.getBalance(account).then(balance => {
        this.setState({ balance });
      })
    })
  }

  enableTorus = async () => {
    try {
      await web3Obj.initialize()
      this.setStateInfo()
    } catch (error) {
      console.error(error)
    }
  }

  render() { 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> reliETH </h1>
          <h4> ethBoston Hackathon Disaster Relief</h4>
          <div>
            <button onClick={this.enableTorus}>Start using Torus</button>
          </div>
          <div>
            {/* <button onClick={this.enableTorus}>Enable Torus</button> */}
            <div>Account: {this.state.account}</div>
            <div>Balance: {this.state.balance}</div>
          </div>
        </header>
      </div>
    )
  };
}

export default App;
