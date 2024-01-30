import React, { useState } from 'react';
import AnalyticHeadLine from "@/components/in-app/analytics/AnalyticHeadLine";
import ButtonGroup from "@/components/in-app/analytics/ButtonGroup";
import LikesLineChart from "@/components/in-app/analytics/LikesLineChart";
export default function analytics() {

  return (
    <div>
        <AnalyticHeadLine/>
        <ButtonGroup/>
        <LikesLineChart/>
    </div>
  );
}