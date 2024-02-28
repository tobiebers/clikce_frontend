import React, { useState } from 'react';
import HeroSection from "@/components/out-app/landing-page/HeroSection";
import FunctionInfo from "@/components/out-app/landing-page/FunctionInfo";
import SocialMediaAccounts from "@/components/out-app/landing-page/SocialMediaAccounts";
import Placeholder from "@/components/out-app/static-components/Placeholder";
import AccessAccount from "@/components/out-app/landing-page/AccessAccount"
import CarouselComponent from "@/components/out-app/landing-page/CarouselComponent";
import ContactPage from "@/components/out-app/contact/ContactPage";
import Pricing from "@/components/out-app/pricing/Pricing";

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
        <Pricing/>
        <Placeholder/>
        <AccessAccount/>
        <Placeholder/>
        <ContactPage/>
    </div>
  );
}
