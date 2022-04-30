import { NextPage } from "next";
import React from "react";
import { Heading, Box, Center, Text } from "@chakra-ui/react";
import BgImg from "../../assets/bg.jpg";
import Image from "next/image";
import Navbar from "../navbar/Navbar";

const Hero: NextPage = () => {
  return (
    <Box
      w="100%"
      height="800"
      bg="brand.900"
      fontFamily="font.body"
      // bgImage="url('../..assets/bg.jpg')"
      // bgPosition="center"
      // bgRepeat="no-repeat"
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

      <Center
        h="200px"
        color="white"
        borderRadius="radii.lg"
        mx="auto"
        my={20}
        position="absolute"
        top="40%"
        left="35%"
      >
        <Heading color="" fontSize="9xl" fontFamily="font.heading">
          Rosbourne
        </Heading>
      </Center>
      {/* 
      <Box w="50%" height="700" mx="auto" textAlign="center" color="white">
        <Text fontSize="2xl">
          Rosbourne is a collection of 3k genesis avatars consist of 3 different
          races, they are human, cyborg, and inu living in the dystopian
          metropolis of Oakalis City.
        </Text>
      </Box>  */}
    </Box>
  );
};

export default Hero;
