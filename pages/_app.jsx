import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
import styles from '../components/global_styles';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { pathname, asPath } = router;
  const isapp = !!asPath.includes('miespacio');
  return (
    <>
      <SessionProvider>
        <Layout
          isapp={isapp}
          pathname={pathname}
          asPath={asPath}
          router={router}
        >
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
      <style jsx global>
        {styles}
      </style>
    </>
  );
}

export default MyApp;
