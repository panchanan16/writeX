import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { SessionProvider } from 'next-auth/react';
import { Navbar } from '@/components/ui/navbar';
import { store } from '@/redux/store'
import { Provider } from 'react-redux'
export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <SessionProvider session={pageProps.session}>
          <Theme accentColor="violet" grayColor="sand" scaling="100%">
            <Navbar />
            <Component {...pageProps} />
          </Theme>
        </SessionProvider>
      </Provider>
    </>
  )
}
