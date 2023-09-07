import type { NextPage } from "next";
import Head from "next/head";
import { inazuma_abi } from "../abi/inazuma";
import { useContractReads } from "wagmi";
import Loading from "../components/loading";


//Map
import dynamic from "next/dynamic";
import MapTable from "../components/map_DataTable";
const MapWithNoSSR = dynamic(() => import("../components/map"), {
  ssr: false,
});

const Home: NextPage = () => {
  const provider_list = ["0x192Fe9ee6b82B6a5c2C1bE9A7eE89EAc91D38240", "0x13D8CaF1EaBcCBBD00d1E6D2dbB4dc4FECF2a022", "0xbB83a6e1AAE3C20930CDC695Ad971d632e578FC1", "0xb2D5aaEeB2235fc1B7c31F6acB80826F5c780703", "0xf3419771c2551f88a91Db61cB874347f05640172"];
  const name_list = ["Hsinchu Wind station","Taichung Hydro station","Taipei Solar station","Kaohsiung Wind station","Tainan Solar station"]
  const status_list: any = [];

  for(let i=0;i<provider_list.length;i++){
    const t = {
      address: "0x651Ccd3E07dEda23a573fdD6759b169F3840Fc35",
      abi: inazuma_abi,
      functionName: "provider_given_amount",
      args: [provider_list[i]],
      enabled: Boolean(provider_list[i]),
    }
    status_list.push(t)
  }

  const { data, error, isLoading, isSuccess } = useContractReads({contracts: status_list})

  if(isLoading){
    return <Loading />
  }


  return (
    <>{isLoading?(
      <Loading />):(
        <div>
          <div className="flex justify-center items-center h-screen">
            <div className="w-1/3 mx-4">
              <MapTable result={data}/>
            </div>
            <div className="w-1/4 mx-2">
              <MapWithNoSSR />
            </div>
          </div>
        </div>
      )
    }
    </>
  );
};

export default Home;
