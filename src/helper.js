
import Web3 from 'web3';
import Torus from '@toruslabs/torus-embed';

const web3Obj = {
  web3: new Web3(),
  setWeb3: function(provider) {
    const web3Inst = new Web3(provider);
    web3Obj.web3 = web3Inst;
    sessionStorage.setItem('pageUsingTorus', true);
  },
  initialize: async function() {
    const torus = new Torus();
    await torus.init('development');
    await torus.setProvider({networkUrl: 'localhost:7545', chainId: '5777', networkName: 'ganache'});
    await torus.login();
    web3Obj.setWeb3(torus.provider);
  }
}

export default web3Obj;
