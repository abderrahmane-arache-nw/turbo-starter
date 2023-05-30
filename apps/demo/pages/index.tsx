import type { NextPage } from "next";
import Head from "next/head";
import test from "debugbar/utils/tesst";

const Web: NextPage = () => {
  const ss = test()
  return (
    <>
      <Head>
        <title>Turborepo Starter: Web</title>
        <meta name="description" content="Turborepo Starter: Web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Turborepo Starter: Web {ss}</h1>
      </main>
    </>
  );
};

export default Web;
