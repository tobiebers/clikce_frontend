import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react';
import Layout from "@/components/staticComponents/Layout";
import '/styles/navigation.css'
import '/styles/FunctionInfo.css'
import 'styles/globals.css'
import 'styles/socialmediaAccounts.css'
import 'styles/heroSection.css'
import 'styles/Register.css'
import 'styles/login.css'
import 'styles/kontakt.css'
import 'styles/carousel.css'
import '@/styles/personalinfo.css'


export default function App({ Component, pageProps }) {


  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>

  )

}
