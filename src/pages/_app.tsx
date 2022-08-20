// types
import type { AppProps } from "next/app";
// libs
import { useRouter } from "next/router";
// components
import Layout from "../components/Layout";
import ErrorBoundary from "../hoc/ErrorBoundary";

// hooks
// store
// utils & animation
import "../../styles/tailwind.css";
import { useFontScale } from "../hooks/useFontScale";


function MyApp({ Component, pageProps }: AppProps) {
  
  useFontScale();

  return (
    <>
      <ErrorBoundary>
            <Layout>
              <Component {...pageProps} />
            </Layout>
      </ErrorBoundary>
    </>
  );
}

export default MyApp;
