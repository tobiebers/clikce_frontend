import React, { useState } from 'react';
import Carousel from "@/components/landingPage/carouselComponent";
import HeroSection from "@/components/landingPage/heroSection";
import FunctionInfo from "@/components/landingPage/functionInfo";
import SocialmediaAccounts from "@/components/landingPage/socialmediaAccounts";
import CarouselComponent from "@/components/landingPage/carouselComponent";


export default function Home() {

  return (
    <div>
        <HeroSection/>
        <FunctionInfo/>
        <SocialmediaAccounts/>
        <CarouselComponent/>
    </div>
  );
}
