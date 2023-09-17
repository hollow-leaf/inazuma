"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Image from "next/image";
import hydro from "../public/hydro-power.png";
import solar from "../public/solar-cell.png";
import wind from "../public/wind-power.png";

ChartJS.register(ArcElement, Tooltip, Legend);
function UserDashboard() {
  const pieData: any = {
    labels: ["hydro", "solar", "wind"],
    datasets: [
      {
        label: "kWh",
        data: [100000, 50000, 30000],
        backgroundColor: ["yellow", "blue", "green"],
        borderColor: ["yellow", "blue", "green"],
      },
    ],
  };
  const options: any = {};

  const iconPathBook: any = {
    Solar: "solar-cell.png",
    Hydro: "hydro-power.png",
    Wind: "wind-power.png",
  };

  return (
    <div className="bg-white px-10">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h2 className="text-xl font-bold text-black dark:text-white">
            User Dashboard
          </h2>
          <div className="mx-auto">
            <div className="w-12 h-12">
              <Image
              src={hydro}
              alt="hydro-power"         
            />
            </div>
            <div className="w-12 h-12">
            <Image
              src={solar}
              alt="solar-power"
              // blurDataURL="data:..." automatically provided
              placeholder="blur" // Optional blur-up while loading
            />
            </div>
            <div className="w-12 h-12 ">
            <Image
              src={wind}
              alt="wind-power"
              // blurDataURL="data:..." automatically provided
              placeholder="blur" // Optional blur-up while loading
            />
            </div>
          </div>
        </div>
        <div className="h-screen">
          <Pie data={pieData} options={options} />
        </div>
      </div>
    </div>
  );
}
export default UserDashboard;
