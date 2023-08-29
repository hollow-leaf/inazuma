import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/router";
import Inazuma from "./inazuma";
import Image from "next/image";
import BalanceOf from "./greenCoinBalance";

export default function Navbar() {
  const router = useRouter();
  // shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]
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
              }}>Buyer</a>
            </li>
            <li>
            </li>
            <li>
              <a onClick={() => {
                router.push("./seller");
              }}>Seller</a>
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
              Buyer
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                router.push("./seller");
              }}
            >
              Seller
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-4">
        <BalanceOf/> 
        <ConnectButton />
      </div>
    </nav>
  );
}
