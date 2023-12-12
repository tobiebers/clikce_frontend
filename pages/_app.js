import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react';
import DefaultLayout from "@/components/out-app/static-components/DefaultLayout";
import LoggedInLayout from "@/components/in-app/static/LoggedInLayout";
import '/styles/navigation.css'
import '/styles/home-page/functionInfo.css'
import 'styles/globals.css'
import '@/styles/home-page/socialMediaAccounts.css'
import '@/styles/home-page/heroSection.css'
import '@/styles/home-page/carouselComponent.css'
import 'styles/login.css'
import '@/styles/contact.css'
import '@/styles/settingProfil.css'
import '@/styles/app/verticalNavigation.css'
import '@/styles/app/questions.css'
import '@/styles/app/cardFunctions.css'
import '@/styles/app/pieChart.css'
import '@/styles/app/chart.css'
import '@/styles/app/performingAccounts.css'

import {AuthProvider} from "@/components/out-app/static-components/AuthContext";
import { useAuth } from "@/components/out-app/static-components/AuthContext";




export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </AuthProvider>
  );
}

// Eine Komponente, die das Layout basierend auf dem Authentifizierungsstatus umschaltet
function LayoutWrapper({ children }) {
  const { isLoggedIn } = useAuth(); // Den Authentifizierungsstatus aus dem Context verwenden
  const Layout = isLoggedIn ? LoggedInLayout : DefaultLayout;

  return <Layout>{children}</Layout>;
}