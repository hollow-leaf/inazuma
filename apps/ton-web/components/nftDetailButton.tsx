import { SellerTableItemType } from "../type";
import { formatAddress } from "../utils/stringify";
import { usePrepareContractWrite, useContractWrite } from 'wagmi'
import {buy_nft} from "../service/market.js"
import { useState } from "react";


function NFTDetailButton(props: SellerTableItemType) {
  const powerNameBook = {
    sun: "Solar",
    water: "Hydro",
    wind: "Wind",
    Wind: "Wind",
    Solar: "Solar",
    Hydro: "Hydro",
  };
  

  const handleBuy = () => {
    buy_nft(props.sale, props.Price+1.05)
  }

  return (
    <div>
      <button
        className="saledetail font-medium text-gray-900" style={{textAlign:"center"}}
        // @ts-ignore
        onClick={() => {
          if (document) {
            (
              document.getElementById(
                `my_modal_${props.tokenId}`
              ) as HTMLFormElement
            ).showModal();
          }
        }}
      >
        Detail
      </button>
      <dialog id={`my_modal_${props.tokenId}`} className="modal">
        <form method="dialog" className="modal-box bg-white py-10">
          <h3 className="font-bold text-lg" style={{textAlign:"center"}}>DETAIL</h3>
          <div className="px-16 mt-8 flex flex-col space-y-3">
            <div className="flex">
              <p>Provider</p>
              <p className="ml-auto">{formatAddress(props.provider)}</p>
            </div>
            <div className="flex ">
              <p>Power Type</p>
              <p className="ml-auto">
                {
                  // @ts-ignore
                  powerNameBook[props.powerType]
                }
              </p>
            </div>
            <div className="flex ">
              <p>Generation Capacity</p>
              <p className="ml-auto">{props.kWh}</p>
            </div>
            <div className="flex ">
              <p>Date</p>
              <p className="ml-auto">{props.date}</p>
            </div>
            <div className="flex ">
              <p>location</p>
              <p className="ml-auto">{props.location}</p>
            </div>
            <div className="flex ">
              <p>CO2 CID</p>
              <p className="ml-auto">{formatAddress(props.Co2CID)}</p>
            </div>
            <div className="flex ">
              <p>NFT Address</p>
              <p className="ml-auto">{formatAddress(props.tokenId)}</p>
            </div>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default NFTDetailButton;
