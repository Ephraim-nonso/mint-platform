import { NextPage } from "next";
import React from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Grid,
  GridItem,
  Flex,
} from "@chakra-ui/react";
import avatar from "../../assets/6.png";
import Image from "next/image";
import Styles from "./About.module.css";

const About: NextPage = () => {
  return (
    <Box w="100%" height="600" bg="brand.900" px={60} py={20}>
      <Center py={10}>
        <Heading
          fontSize="6xl"
          fontFamily="font.heading"
          color="brand.300"
          letterSpacing="3px"
        >
          Our Team
        </Heading>
      </Center>
      <Flex justify="space-between">
        <Box>
          <Image src={avatar} width="200" height="200" className={Styles.img} />
          <Center color="brand.300">
            <Text>Rosbourne the second</Text>
          </Center>
        </Box>
        <Box>
          <Image src={avatar} width="200" height="200" className={Styles.img} />
          <Center color="brand.300">
            <Text>Rosbourne the second</Text>
          </Center>
        </Box>
        <Box>
          <Image src={avatar} width="200" height="200" className={Styles.img} />
          <Center color="brand.300">
            <Text>Rosbourne the second</Text>
          </Center>
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
