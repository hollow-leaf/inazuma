"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

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

  return (
    <div className="px-10">
        <div className="">
          <Pie data={pieData} options={options} />
        </div>
    </div>
  );
}
export default UserDashboard;
