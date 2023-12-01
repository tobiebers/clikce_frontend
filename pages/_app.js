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
import '@/styles/app/cardsInfo.css'



export default function App({ Component, pageProps }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Event-Handler für benutzerdefiniertes Login-Event
    const handleLoginEvent = () => {
      setIsLoggedIn(sessionStorage.getItem('isLoggedIn') === 'true');
    };

    // EventListener hinzufügen, der auf das Login-Event hört
    window.addEventListener('user-login', handleLoginEvent);

    // Überprüfen Sie den Anmeldestatus beim Laden der Komponente
    setIsLoggedIn(sessionStorage.getItem('isLoggedIn') === 'true');

    // EventListener bereinigen, wenn die Komponente unmountet
    return () => {
      window.removeEventListener('user-login', handleLoginEvent);
    };
  }, []);

  // Entscheiden Sie, welches DefaultLayout verwendet wird
  const Layout = isLoggedIn ? LoggedInLayout : DefaultLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
