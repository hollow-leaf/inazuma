import SellerTableItem from "./sellerTableItem";
import { BaseError } from "viem";
import { erc20ABI, useContractRead, useContractReads } from "wagmi";
import { useAccount, useEnsName } from "wagmi";
import { inazuma_abi } from "../abi/inazuma";
import Loading from "./loading";
import Map_item from "./map_item"
import { providerTableItemType } from "../type";

function MapTable(props: any) {
  const provider_list = ["0x192Fe9ee6b82B6a5c2C1bE9A7eE89EAc91D38240", "0x3bcAbD66522534657BB86a18d3E550f3166755Fa", "0x9A54A0804FEBf64162D5eBF771C5355622617437", "0xb2D5aaEeB2235fc1B7c31F6acB80826F5c780703", "0xf3419771c2551f88a91Db61cB874347f05640172"];
  const name_list = ["Taichung","","","",""]

  return (
    <div className="overflow-x-auto mx-auto text-black">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-black text-center text-base">
            <th>Genarator</th>
            <th>Address</th>
            <th>kWh Providing</th>
          </tr>
        </thead>
        <tbody>
         {props.result.map((item: any, index: number)=>{
          return (
            <Map_item
              key={provider_list[index]}
              result = {item.result}
              status= {item.status}
              provider={provider_list[index]}
              name={name_list[index]}
            />
          )
         })}
        </tbody>
      </table>
    </div>
  );
}

export default MapTable;

