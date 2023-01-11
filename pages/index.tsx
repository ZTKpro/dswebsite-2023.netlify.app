import Head from "next/head";

import Nav from "../components/Nav";
import Header from "../components/Header";
import Bubbles from "../components/Bubbles";
import Tech from "../components/Tech";
import Portfolio from "../components/Porfolio";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>DS website</title>
        <meta
          name="description"
          content="Damian Szmurło - fullstack developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Nav />
        <Header />
        <Bubbles />
        <Tech />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}
