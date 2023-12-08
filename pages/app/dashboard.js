import CardsInfo from "@/components/in-app/dashboard/CardsInfo";
import PieChart from "@/components/in-app/dashboard/PieChart";
import Chart from "@/components/in-app/dashboard/Chart"
export default function Dashboard() {

  return (
    <div>
       <CardsInfo/>
        <Chart/>
        <PieChart/>
    </div>
  );
}