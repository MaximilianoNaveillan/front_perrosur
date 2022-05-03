import "../styles/globals.css";
import styles from "../components/global_styles";
import { SessionProvider } from "next-auth/react";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SessionProvider>
        <Layout>
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
