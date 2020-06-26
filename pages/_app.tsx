import { AppProps } from 'next/app'
import { Router } from 'next/router'
import NProgress from 'nprogress'
import Head from 'next/head'

Router.events.on('routeChangeStart', (url) => {
  /* eslint-disable no-console */
  console.log(url)
  /* eslint-disable no-console */
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }: AppProps) {
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
