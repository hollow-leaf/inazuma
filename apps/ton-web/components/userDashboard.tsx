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
        <div>
          <h2 className="text-xl font-bold text-black dark:text-white">
            User Dashboard
          </h2>
          
        </div>
        <div className="h-screen">
          <Pie data={pieData} options={options} />
        </div>
    </div>
  );
}
export default UserDashboard;
