import React, { useState } from 'react';
import carousel from "@/components/landingPage/carousel";
import heroSection from "@/components/landingPage/heroSection";
export default function Home() {

  return (
    <div>
        <carousel/>
        <heroSection/>
    </div>
  );
}
