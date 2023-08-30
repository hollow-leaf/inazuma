import BuyerSubmit from "../components/buyerSubmitBox";
import BuyerTable from "../components/buyerTable";
import { useAccount } from "wagmi";
import { getCert } from "../service/api";
import { useEffect, useState } from "react";
import Loading from "../components/loading";
import { useQuery } from "@tanstack/react-query";

export default function Page() {
  const [buyList, setBuyList] = useState<any[]>([]);
  const address = useAccount();

  const { isLoading, error, data } = useQuery({
    queryKey: ["getCert"],
    queryFn: () =>
      getCert(address as unknown as string).then((res) => {
        setBuyList(res);
        console.log(buyList);
        return res;
      }),
    retry: 10,
    cacheTime: 1000 * 60 * 5,
  });

  if (isLoading) return <Loading />;

  return (
    <div className="grid grid-cols-2">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="mx-auto mt-14 mb-14">
          <p className="text-3xl text-black">Your NFT</p>
          <div className="divider"></div>
          <BuyerTable buyList={data} />
        </div>
      )}
      <div className="mx-auto mt-14 mb-20 flex flex-col justify-between ml-10">
        <div className="mb-2">
          <BuyerSubmit />
        </div>
      </div>
    </div>
  );
}
