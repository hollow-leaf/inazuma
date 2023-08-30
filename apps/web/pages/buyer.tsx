import BuyerSubmit from "../components/buyerSubmitBox";
import BuyerTable from "../components/buyerTable";
import { useAccount } from "wagmi";
import { getCert } from "../service/api";
import { useState } from "react";
import Loading from "../components/loading";
import { useQuery } from "@tanstack/react-query";

export default function Page() {
  const [claimToken, setClaimToken] = useState<any[]>([]);
  const { address } = useAccount();

  const { isLoading, error, data } = useQuery({
    queryKey: ["getCert"],
    queryFn: () =>
      getCert(address as unknown as string).then((res) => {
        setClaimToken(res);
        console.log(res);
        return res;
      }),
    retry: 10,
    cacheTime: 1000 * 60 * 5,
  });

  if (isLoading) return <Loading />;

  return (
    <div className="flex mx-auto my-10">
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="mb-5">
            <BuyerSubmit />
          </div>
          <p className="text-3xl text-black">Your NFT</p>
          <div className="divider"></div>
          <BuyerTable claimToken={data.claimTokens} />
        </div>
      )}
    </div>
  );
}
