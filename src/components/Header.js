import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { useEthers, useEtherBalance } from "@usedapp/core";
import * as nearAPI from "near-api-js";
import Search from "./Search";
const { utils, connect, keyStores, WalletConnection } = nearAPI;

// Connection configuration
const config = {
  mainnet: {
    networkId: "mainnet",
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: "https://rpc.mainnet.near.org",
    walletUrl: "https://wallet.mainnet.near.org",
    helperUrl: "https://helper.mainnet.near.org",
    explorerUrl: "https://explorer.mainnet.near.org",
  },
  testnet: {
    networkId: "testnet",
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
    helperUrl: "https://helper.testnet.near.org",
    explorerUrl: "https://explorer.testnet.near.org",
  },
  
};


class Header extends Component {
  state = {
    wallet: false,
    accountId: null,
  }

  async initNear() {
    const near = await connect(config.testnet);
    const wallet = new WalletConnection(near);

    // If a user is signed in return their account id
    // If a user is not signed in return null
    const accountId = wallet.getAccountId() || null;

    this.setState({
      wallet,
      accountId
    });
  }

  nearLogin = () => {
    const { wallet } = this.state;
    wallet.requestSignIn("");
  }

  handleClick = (e) => {
    e.preventDefault();
    alert('\n \n SOON!');
  }

  componentDidMount() {
    this.initNear();
  }

  render() {
    const {
      accountId
    } = this.state;
    // const {activateBrowserWallet, account} = useEthers();
    // const etherBalance = useEtherBalance(account);

    // const handleWallet = () => {
    //   signIn();

    // }

    return (
        <div id="header">
        <Link to='/app' id='logo'>Khong's Marketplace</Link>
        {/* <Search /> */}
        <div id="link-containers">
          <a href="/market"                     >Market</a>
          <a href="#" onClick={this.handleClick}>Activity</a>
          {/* <a href="/community"                      >Community</a> */}
          <a href="#" onClick={this.handleClick}>Launchpad</a>
       
       {!accountId ?
          <button id="connect-wallet" onClick={this.nearLogin} > Connect Wallet </button>
          :
          <>
          <button style={{cursor: "default"}} id="connect-wallet">{accountId}</button>
          <a href="" style={{color: "red"}} onClick={() => this.state.wallet.signOut()}>Sign out</a>
          </>
          }
          </div>
          <div id="header1">
            
            <h1>This website are still on beta, All feature will be live after Mainnet Launch</h1>
            
          </div>
      </div>
    );
    }
}

export default Header;