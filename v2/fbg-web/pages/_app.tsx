import './_app.css'
import type { AppProps } from 'next/app'

function FbgApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default FbgApp
