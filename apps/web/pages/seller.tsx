import SellerTable from "../components/sellerTable";
import { useAccount } from "wagmi";
import { addAsset, getAssets } from "../service/api";
import { useEffect, useState } from "react";
import ProvideButton from "../components/provideButton";

function Page() {
  const { address } = useAccount();
  const [assets, setAssets] = useState<any[]>([]);

  const handleProvide = () => {
    addAsset(address as string, 100, 2302, "wind", "Taipei");
  };
  useEffect(() => {
    getAssets(address as string).then((res) => {
      setAssets(res);
    });
  }, []);

  return (
    <div className="w-1/2 mx-auto mt-10">
      <ProvideButton />
      <SellerTable assets={assets} />
    </div>
  );
}

export default Page;
