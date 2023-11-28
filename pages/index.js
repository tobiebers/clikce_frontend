import React, { useState } from 'react';
import HeroSection from "@/components/landing-page/HeroSection";
import FunctionInfo from "@/components/landing-page/FunctionInfo";
import SocialMediaAccounts from "@/components/landing-page/SocialMediaAccounts";
import Placeholder from "@/components/static-components/Placeholder";
import AuforderungAnmelden from "@/components/landing-page/AccessAccount"
import CarouselComponent from "@/components/landing-page/CarouselComponent";

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
