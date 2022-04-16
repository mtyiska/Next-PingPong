import * as React from "react"
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Layout} from "../components/Layout"
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import {ErrorBoundary, ErrorFallback} from "../components/common/ErrorFallback"
import '../configureAmplify'

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <Provider store={store}>
       <ErrorBoundary FallbackComponent={ErrorFallback}>
        <React.Suspense fallback={<div />}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </React.Suspense>
        </ErrorBoundary>
    </Provider>
  )
  
}

export default MyApp
