import SellerTable from "../components/sellerTable";
import { getAssets } from "../service/api";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/loading";
import Alert from "../components/alert";
import {iswallet, connectwallet} from "../service/wallect"
import { ton_address } from "../service/market";

function Page() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["getsale"],
    queryFn: async () =>{
      if(await iswallet()){
        return await ton_address()
      }else{
        return ""
      }
    },
      retry: 10,
      cacheTime: 100*5
  });

  if (isLoading) return <Loading />;
  return (
    <>
      {data==""||data==undefined? (
        <button onClick={connectwallet}>Connect Wallet</button>
      ) : (
        <div className="w-1/2 mx-auto my-10">
          <SellerTable address={data} />
        </div>
      )}
    </>
  );
}

export default Page;
