import { NextPage } from "next";
import React, { useEffect } from "react";
import { Heading, Box, Center, Text } from "@chakra-ui/react";
import BgImg from "../../assets/bg.png";
import Image from "next/image";
import Navbar from "../navbar/Navbar";
import { useRouter } from "next/router";

const Hero: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    console.log("router query", router.query.scroll);
    if (router.query.scroll) {
      //@ts-ignore
      let elem = document.getElementById(router.query.scroll);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [router]);
  return (
    <Box
      w="100%"
      height="100vh"
      bg="brand.900"
      fontFamily="font.body"
      position="relative"
    >
      <Navbar />
      <Image
        src={BgImg}
        alt="bg-img"
        layout="responsive"
        objectFit="cover"
        placeholder="blur"
      />
    </Box>
  );
};

export default Hero;
