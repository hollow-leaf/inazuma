import { useRouter } from "next/router";
import Inazuma from "./inazuma";
import ConnectButton from "./connectButton";
import TonConnect, { toUserFriendlyAddress } from '@tonconnect/sdk';
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import {
  isWalletInfoCurrentlyEmbedded,
  isWalletInfoInjectable,
  isWalletInfoCurrentlyInjected,
  isWalletInfoRemote,
  WalletInfo
} from '@tonconnect/sdk';

export default function Navbar() {
  const [connect, setConnect] = useState(false)
  const [address, setAddress] = useState("")
  let connector: TonConnect

  async function connectwallet() {
    connector = new TonConnect({manifestUrl:"https://gold-xenial-catfish-998.mypinata.cloud/ipfs/QmNQiXeY1si1uVA6KQfUq8nEGAHmmTrk5TjXDY8dCnRhtD"});
    
    if(!connector.connected){
        try{
            connector = new TonConnect({manifestUrl:"https://gold-xenial-catfish-998.mypinata.cloud/ipfs/QmNQiXeY1si1uVA6KQfUq8nEGAHmmTrk5TjXDY8dCnRhtD"});
            connector.restoreConnection();
            const walletConnectionSource = {
              jsBridgeKey: 'tonkeeper'
            }

            await connector.connect(walletConnectionSource)
            connector.onStatusChange((wallet)=>{
              if(wallet!=null){
                const rawAddress = wallet["account"]['address']
                const testnetOnlyBouncableUserFriendlyAddress = toUserFriendlyAddress(rawAddress, true)
                setAddress(testnetOnlyBouncableUserFriendlyAddress)
                setConnect(true)
              }
            })
          }catch(err){
            alert("You have to insatll browser plugin wallet")
          }
    }
  }

  async function disconnect() {
    if (connector.connected) {
      await connector.disconnect();
  }
  }

  const router = useRouter();
  return (
    <nav className="navbar h-[100px] text-black shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={() => {
                router.push("./buyer");
              }}>Market</a>
            </li>
            <li>
            </li>
            <li>
              <a onClick={() => {
                router.push("./seller");
              }}>Profile</a>
            </li>
          </ul>
        </div>
        <img
          src="./favicon.ico"
          className="w-[90px] h-[90px] cursor-pointer"
          alt="apple"
          onClick={() => {
            router.push("/");
          }}
        />
        {/* <a className="btn btn-ghost normal-case text-2xl text-black">Inazuma</a> */}
        <Inazuma />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a
              onClick={() => {
                router.push("./buyer");
              }}
            >
              Market
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                router.push("/");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                router.push("./seller");
              }}
            >
              Profile
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-4">
        <div className="connectbutton">
          {!connect&&<button onClick={connectwallet}>Connect Wallet</button>}
          {connect&&
            <div className="connected">
              <img src="./11419.png" style={{width: "25px"}}/>
              <a>{address}</a>
            </div>}
        </div>
      </div>
    </nav>
  );
}


