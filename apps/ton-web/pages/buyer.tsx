import BuyerSubmit from "../components/buyerSubmitBox";
import BuyerTable from "../components/buyerTable";
import { useAccount } from "wagmi";
import { getCert } from "../service/api";
import { useState, useEffect } from "react";
import Loading from "../components/loading";
import { useQuery } from "@tanstack/react-query";
import Alert from "../components/alert";

export default function Page() {
  const [claimToken, setClaimToken] = useState<any[]>([]);
  const { address, isConnected } = useAccount();

  useEffect(() => {
    getCert(address as unknown as string).then((res) => {
      setClaimToken(res);
    });
  }, [isConnected]);

  if (!isConnected) return <Alert />;
  return (
    <div className="flex mx-auto my-10">
      <div>
        <div className="mb-5">
          <BuyerSubmit />
        </div>
        <p className="text-3xl text-black">Your NFT</p>
        <div className="divider"></div>
        <BuyerTable
          claimToken={
            // @ts-ignore
            claimToken.claimTokens
          }
        />
      </div>
    </div>
  );
}
