import React, { useState } from 'react';
import HeroSection from "@/components/LandingPage/heroSection";
import FunctionInfo from "@/components/LandingPage/functionInfo";
import SocialmediaAccounts from "@/components/LandingPage/socialmediaAccounts";
import Placeholder from "@/components/staticComponents/Placeholder";
import AuforderungAnmelden from "@/components/LandingPage/accessAccount"
import CarouselComponent from "@/components/LandingPage/myCarouselComponent";

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
