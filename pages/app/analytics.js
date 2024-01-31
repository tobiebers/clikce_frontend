import React from 'react';
import AnalyticHeadLine from "@/components/in-app/analytics/AnalyticHeadLine";
import ButtonGroup from "@/components/in-app/analytics/ButtonGroup";
import LikesLineChart from "@/components/in-app/analytics/LikesLineChart";
import CurrentAccountUsed from "@/components/in-app/analytics/CurrentAccountUsed";
import FlipCard from "@/components/in-app/analytics/TopPerformingPosts";
import IGTEST from "@/components/in-app/analytics/IGTEST";

export default function Analytics() {
  return (
    <div className="analyticsContainer">
        <AnalyticHeadLine />
        <div className="content">
            <div className="moduleWrapper">
                <ButtonGroup />
            </div>
            <div className="moduleWrapper">
                <LikesLineChart />
            </div>
            <div className="rightColumn">
                <div className="moduleWrapper">
                    <FlipCard />
                </div>
                <div className="moduleWrapper">
                    <IGTEST />
                </div>
            </div>
        </div>
        <div className="moduleWrapper">
            <CurrentAccountUsed />
        </div>
    </div>
  );
}
