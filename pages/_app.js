import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Layout from '../comps/Layout';

function MyApp({ Component, pageProps }) {
  return (
<>
<Head>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="shortcut icon" href="/favicon.png" />
</Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
</>
  )
}

export default MyApp
