import type { NextPage } from "next";
import dynamic from "next/dynamic";
import UserDashboard from "../components/userDashboard";

const MapWithNoSSR = dynamic(() => import("../components/map"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="w-1/4 mx-4 flex h-96 p-5">
            <UserDashboard/>
        </div>
        <div className="w-1/4 mx-2">
          <MapWithNoSSR />
        </div>
      </div>
    </div>
  );
};

export default Home;
