import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { Router } from 'next/router'
import NProgress from 'nprogress'
import Head from 'next/head'
import * as gtag from '../lib/gtag'

Router.events.on('routeChangeStart', (url) => {
  /* eslint-disable no-console */
  console.log(url)
  /* eslint-disable no-console */
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (
    <>
      <Head>
        {/* Import CSS for nprogress */}
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
