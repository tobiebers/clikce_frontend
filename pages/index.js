import React, { useState } from 'react';
import HeroSection from "@/components/landingPage/heroSection";
import FunctionInfo from "@/components/landingPage/functionInfo";
import SocialmediaAccounts from "@/components/landingPage/socialmediaAccounts";
import Placeholder from "@/components/staticComponents/Placeholder";
import AuforderungAnmelden from "@/components/landingPage/auforderungAnmelden"
import CarouselComponent from "@/components/landingPage/MyCarouselComponent";
export default function Home() {

  return (
    <div>

        <HeroSection/>
        <Placeholder/>
        <SocialmediaAccounts/>
        <Placeholder/>
        <CarouselComponent/>
        <Placeholder/>
        <FunctionInfo/>
        <Placeholder/>
        <Placeholder/>
        <AuforderungAnmelden/>
        <Placeholder/>
    </div>
  );
}
