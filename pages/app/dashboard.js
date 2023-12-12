import CardsInfo from "@/components/in-app/dashboard/CardsInfo";
import Chart from "@/components/in-app/dashboard/Chart"
import PieChart1 from "@/components/in-app/dashboard/PieChart1";
import PerformingAccounts from "@/components/in-app/dashboard/PerformingAccounts";

import {Pie} from "recharts";
export default function Dashboard() {

  return (
    <div>
       <CardsInfo/>
        <Chart/>
        <PieChart1/>
        <PerformingAccounts/>
    </div>
  );
}