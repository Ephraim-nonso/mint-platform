import type { NextPage } from "next";
import Head from "next/head";
import Card from "../components/cards/Card";
import Navbar from "../components/navbar/Navbar";
import styles from "../styles/Home.module.css";
import {
  Box,
  Flex,
  Spacer,
  Text,
  Center,
  Square,
  Circle,
  Heading,
} from "@chakra-ui/react";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Roadmap from "../components/roadmap/Roadmap";
import Team from "../components/team/Team";
import FaqComp from "../components/faq/Faq";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rosbourne</title>
        <meta name="description" content="Rosbourne NFT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />

      <About />

      <Roadmap />
      <Team />
      <FaqComp />

      <main>
        <h1>Rosbourne</h1>
      </main>
    </div>
  );
};

export default Home;
