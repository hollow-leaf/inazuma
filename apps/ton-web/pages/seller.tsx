import SellerTable from "../components/sellerTable";
import { useAccount } from "wagmi";
import { getAssets } from "../service/api";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/loading";
import ProvideButton from "../components/provideButton";
import Alert from "../components/alert";

function Page() {


  return (
    <>
      {false ? (
        <Loading />
      ) : (
        <div className="w-1/2 mx-auto my-10">
          <SellerTable />
        </div>
      )}
    </>
  );
}

export default Page;
