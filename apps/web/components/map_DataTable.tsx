import SellerTableItem from "./sellerTableItem";
import { BaseError } from "viem";
import { useContractRead } from "wagmi";
import { useAccount, useEnsName } from "wagmi";
import { inazuma_abi } from "../abi/inazuma";

function MapTable(props: any) {
  const provider_list = ["0x192Fe9ee6b82B6a5c2C1bE9A7eE89EAc91D38240", "0x3bcAbD66522534657BB86a18d3E550f3166755Fa", "0x9A54A0804FEBf64162D5eBF771C5355622617437", "0xb2D5aaEeB2235fc1B7c31F6acB80826F5c780703", "0xf3419771c2551f88a91Db61cB874347f05640172"];
  
  //set name for each (assign to Jake by Solo
  const name_list = ["Taichung","","","",""]
  const status_list: any = [];

  provider_list.forEach(address=>{
    console.log(address)
    const { data, error, isLoading, isSuccess } = useContractRead({
      address: "0x78E3930D2e258e5E88eC4a7f052ce8c7508d5B3B",
      abi: inazuma_abi,
      functionName: "provider_given_amount",
      args: [address],
      enabled: Boolean(address),
    });
    status_list.push({data:data, error:error, isLoading:isLoading, isSuccess:isSuccess})
  })


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
          {name_list.map((a, i)=>{
            return (
              <tr>
                <td>{a}</td>
                <td>{provider_list[i]}</td>
                <td>{status_list[i].isSuccess&&status_list[i].data?.toString()}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default MapTable;