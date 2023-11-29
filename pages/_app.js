import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react';
import Layout from "@/components/out-app/static-components/Layout";
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


export default function App({ Component, pageProps }) {


  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>

  )

}
