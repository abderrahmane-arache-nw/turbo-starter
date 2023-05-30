import type { AppProps } from "next/app";

// import DebugBarProvider from "debugbar/providers/DebugBarProvider/DebugBarProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
