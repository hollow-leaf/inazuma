import BuyerSubmit from "../components/buyerSubmitBox";
import BuyerTable from "../components/buyerTable";
import { useAccount } from "wagmi";
import { getCert } from "../service/api";
import { useState, useEffect } from "react";
import Loading from "../components/loading";
import { useQuery } from "@tanstack/react-query";
import Alert from "../components/alert";
import { getsale } from "../service/market.js";
import ProvideButton from "../components/provideButton";

export default function Page() {
  const [sales, setSales] = useState<any[]>([]);

  const { isLoading, error, data } = useQuery({
    queryKey: ["getsale"],
    queryFn: () =>
      getsale("0:cabe5726eb37111205f1492e45a6e88bd7fa649329ca3549e5bd1d70b4a98911").then((res:any) => {
        setSales(res);
        return res
      }),
      retry: 10,
      cacheTime: 1000*60*5
  });
  if (isLoading) return <Loading />;
  return (
    <>
      {isLoading?(
        <Loading />
      ):(
        <div className="flex mx-auto my-10">
          <div>
            <div className="mb-5">
              <ProvideButton />
              <BuyerTable sales={data}/>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
