import React, { useState } from 'react';
import HeroSection from "@/components/LandingPage/HeroSection";
import FunctionInfo from "@/components/LandingPage/FunctionInfo";
import SocialMediaAccounts from "@/components/LandingPage/SocialMediaAccounts";
import Placeholder from "@/components/staticComponents/Placeholder";
import AuforderungAnmelden from "@/components/LandingPage/AccessAccount"
import CarouselComponent from "@/components/LandingPage/myCarouselComponent";

export default function Home() {

  return (
    <div>

        <HeroSection/>
        <Placeholder/>
        <SocialMediaAccounts/>
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
