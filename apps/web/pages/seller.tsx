import SellerTable from "../components/sellerTable";
import { useAccount } from "wagmi";
import { getAssets } from "../service/api";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/loading";
import ProvideButton from "../components/provideButton";

function Page() {
  const { address } = useAccount();
  const [assets, setAssets] = useState<any[]>([]);

  const { isLoading, error, data } = useQuery({
    queryKey: ["getAsset"],
    queryFn: () =>
      getAssets(address as string).then((res) => {
        setAssets(res);
        return res
      }),
      retry: 10,
      cacheTime: 1000*60*5
  });

  if (isLoading) return <Loading />;
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-1/2 mx-auto my-10">
          <ProvideButton />
          <SellerTable assets={data} />
        </div>
      )}
    </>
  );
}

export default Page;
