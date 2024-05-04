import React from 'react'
import { useState } from 'react';
import { ethers } from 'ethers';
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/react";


const Navbar = () => {
  


// 1. Get projectId
const projectId = "dbe843c72438dc8cab711ae11e6876fc";

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: "https://cloudflare-eth.com",
};

// 3. Create a metadata object
const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "https://mywebsite.com", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: "...", // used for the Coinbase SDK
  defaultChainId: 1, // used for the Coinbase SDK
});

// 5. Create a Web3Modal instance
createWeb3Modal({
  ethersConfig,
  chains: [mainnet],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Events</a>
            </li>

            <li>
              <a>Restricted Events</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">zKeveKom</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Events</a>
          </li>
          <li>
            <a>Restricted Events</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <w3m-button />
      </div>
    </div>
  );
}

export default Navbar
