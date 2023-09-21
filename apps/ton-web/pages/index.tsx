import type { NextPage } from "next";
import Home1 from "../components/Home/Home1";
import Motivation from "../components/Home/Home3/Motivation";
import Platform from "../components/Home/Home5/Platform";
import GreenEnergy from "../components/Home/Home4/WhyGreen";
import Introduction from "../components/Home/Home2/Introduction";
import Features from "../components/Home/Home6";

const Home: NextPage = () => {
  return (
    <div>
      <Home1/>
      <Introduction/>
      <Motivation/>
      <GreenEnergy/>
      <Platform/>
      <Features/>
    </div>
  );
};

export default Home;
