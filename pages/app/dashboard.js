import React from 'react';
import CardsInfo from "@/components/in-app/dashboard/CardsInfo";
import Chart from "@/components/in-app/dashboard/Chart";
import PerformingAccounts from "@/components/in-app/dashboard/PerformingAccounts";
import RecentInteractions from "@/components/in-app/dashboard/RecentInteractions";

export default function Dashboard() {
  return (
    <div className="dashboardGrid">
      <div className="fullWidth">
        <CardsInfo />
      </div>
      <div className="chart">
        <Chart />
      </div>
      <div className="recentInteractions">
        <RecentInteractions />
      </div>
      <div className="performingAccounts">
        <PerformingAccounts />
      </div>
    </div>
  );
}
