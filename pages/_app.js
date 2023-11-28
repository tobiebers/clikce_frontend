import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react';
import Layout from "@/components/static-components/Layout";
import '/styles/navigation.css'
import '/styles/functionInfo.css'
import 'styles/globals.css'
import '@/styles/socialMediaAccounts.css'
import 'styles/heroSection.css'
import 'styles/carouselComponent.css'
import 'styles/login.css'
import '@/styles/contact.css'
import '@/styles/settingProfil.css'


export default function App({ Component, pageProps }) {


  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>

  )

}
