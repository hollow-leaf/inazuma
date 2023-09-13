import type { NextPage } from "next";
import Head from "next/head";
import Loading from "../components/loading";


//Map
import dynamic from "next/dynamic";
const MapWithNoSSR = dynamic(() => import("../components/map"), {
  ssr: false,
});

const Home: NextPage = () => {


  return (
    <>
      
        <div>
          <div className="flex justify-center items-center h-screen">
            <div className="w-1/3 mx-4">
              
            </div>
            <div className="w-1/4 mx-2">
              <MapWithNoSSR />
            </div>
          </div>
        </div>
      
    
    </>
  );
};

export default Home;
