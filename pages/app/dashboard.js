import React from 'react';
import CardsInfo from "@/components/in-app/dashboard/CardsInfo";
import Chart from "@/components/in-app/dashboard/Chart";
import PieChart1 from "@/components/in-app/dashboard/PieChart1";
import PerformingAccounts from "@/components/in-app/dashboard/PerformingAccounts";
import RecentInteractions from "@/components/in-app/dashboard/RecentInteractions";

export default function Dashboard() {
  return (
    <div className="dashboardGrid">
      <div className="fullWidth">
        <CardsInfo />
      </div>
      <div>
        <Chart />
      </div>
      <div>
        <PieChart1 />
      </div>
      <div>
        <RecentInteractions />
      </div>
      <div>
        <PerformingAccounts />
      </div>
    </div>
  );
}
