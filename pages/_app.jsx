import '../styles/globals.css';
import { useEffect, useState } from 'react';
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
import styles from '../components/global_styles';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  const [usuario, setUsuario] = useState({
    misrecursos: [],
    mistalleres: [],
  });
  const router = useRouter();
  const { pathname, asPath } = router;
  const isapp = !!asPath.includes('miespacio');
  const { session, usersection } = pageProps;

  useEffect(() => {
    if (!isapp && session) router.push('/miespacio');
  }, []);

  useEffect(() => {
    if (!isapp && session) router.push('/miespacio');
  }, []);

  return (
    <>
      <SessionProvider>
        <Layout
          isapp={isapp}
          pathname={pathname}
          asPath={asPath}
          router={router}
          data={session}
          usersection={usersection}
          usuario={usuario}
          setUsuario={setUsuario}
        >
          <main>
            <Component usuario={usuario} {...pageProps} />
          </main>
        </Layout>
      </SessionProvider>
      <style jsx global>
        {styles}
      </style>
    </>
  );
}

export default MyApp;
