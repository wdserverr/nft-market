import "../App.css"
import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { useEthers, useEtherBalance } from "@usedapp/core";
import * as nearAPI from "near-api-js";
import Search from "./Search";
import { FaDiscord, FaTwitter } from 'react-icons/fa';

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
    const near = await connect(config.mainnet);
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
        <Link to='/' id='logo'></Link>
        <a className="gotoapp" href="https://twitter.com/KhongFkers" target="_blank"><FaTwitter size={40} />  </a>
        <a className="gotoapp" href="https://twitter.com/KhongFkers" target="_blank"> <FaDiscord size={40}/> </a>
        {/* <Search /> */}
        <div id="link-containers">
          {/* <a href="/market"                     >Market</a>
          <a href="#" onClick={this.handleClick}>Activity</a>
          <a href="/community"                      >Community</a> */}
          <a className="gotoapp" href="/app" target="_blank">GO TO APP</a>
       
       {/* {!accountId ?
          <button id="connect-wallet" onClick={this.nearLogin} > Connect Wallet </button>
          :
          <>
          <button style={{cursor: "default"}} id="connect-wallet">{accountId}</button>
          <a href="" style={{color: "red"}} onClick={() => this.state.wallet.signOut()}>Sign out</a>
          </>
          } */}
          </div>
      </div>
    );
    }
}

export default Header;