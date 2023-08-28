import SellerTable from "../components/sellerTable";
import { useAccount } from "wagmi";
import { getAssets } from "../service/api";
import { useEffect, useState } from "react";
import ProvideButton from "../components/provideButton";

function Page() {
  const { address } = useAccount();
  const [assets, setAssets] = useState<any[]>([]);

  useEffect(() => {
    getAssets(address as string).then((res) => {
      setAssets(res);
    });
  }, []);

  return (
    <div className="w-1/2 mx-auto my-10">
      <ProvideButton />
      <SellerTable assets={assets} />
    </div>
  );
}

export default Page;
