import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Footer, Navbar } from '../components'
import { navigation, profile } from '../utils'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>douglasmatosdev</title>
        <meta name="description" content="douglasmatosdev website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar
        navigation={navigation}
        gravatar={profile.gravatar}
        nickName={profile.nickName}
      />
      
      <Component {...pageProps} />

      <Footer displayName={profile.displayName} />
    </>
  )
}

export default MyApp
