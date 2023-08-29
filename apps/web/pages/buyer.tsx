import BuyerSubmit from "../components/buyerSubmitBox"
import BuyerTable from "../components/buyerTable"
import { useAccount } from "wagmi";
import { getCert } from "../service/api";
import { useEffect, useState } from "react";

export default function Page(){
    const [buyList, setBuyList] = useState<any[]>([]);
  
    useEffect(() => {
        getCert('').then((res) => {
            setBuyList(res);
      });
    }, []);

    return(
        <div className="grid grid-cols-2">
            <div className="mx-auto mt-14 mb-14">
                <p className="text-3xl text-black">Your NFT</p>
                <div className="divider"></div> 
                <BuyerTable buyList={buyList}/>
            </div>
            <div className="mx-auto mt-14 mb-20 flex flex-col justify-between ml-10">
                <div className="mb-2">
                    <BuyerSubmit/>
                </div>
            </div>
        </div>
    )
}