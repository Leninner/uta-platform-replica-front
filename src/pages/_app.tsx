import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { persistor, store } from '@/store/store'
import { ModalContainer } from '@/containers/ModalContainer'
import '../theme/globals.scss'
import { MainLayout } from '../layouts/MainLayout'

// eslint-disable-next-line
const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MainLayout>
        <Component {...pageProps} />
        <ModalContainer />
      </MainLayout>
    </PersistGate>
  </Provider>
)

export default MyApp
