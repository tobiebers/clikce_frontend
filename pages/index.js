import React, { useState } from 'react';
import Carousel from "@/components/landingPage/carousel";
import HeroSection from "@/components/landingPage/heroSection";
import FunctionInfo from "@/components/landingPage/functionInfo";
import SocialmediaAccounts from "@/components/landingPage/socialmediaAccounts";


export default function Home() {

  return (
    <div>
        <Carousel/>
        <HeroSection/>
        <FunctionInfo/>
        <SocialmediaAccounts/>
    </div>
  );
}
