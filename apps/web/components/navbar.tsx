import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/router";
import Inazuma from "./inazuma";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="navbar bg-green-100 h-[100px] text-black">
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
              <a>Buyer</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Seller</a>
            </li>
          </ul>
        </div>
        <img
          src="favicon.ico"
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
            <a>Buyer</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
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
      <div className="navbar-end">
        <ConnectButton />
      </div>
    </div>
  );
}
