import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { SessionProvider } from 'next-auth/react';
import { Navbar } from '@/components/ui/navbar';
export default function App({ Component, pageProps }) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Theme accentColor="violet" grayColor="sand" scaling="100%">
          <Navbar/>
          <Component {...pageProps} />
        </Theme>
      </SessionProvider>
    </>
  )
}
