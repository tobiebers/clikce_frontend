import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react';
import Layout from "@/components/staticComponents/Layout";
import '/styles/navigation.css'



export default function App({ Component, pageProps }) {


  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>

  )

}
