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
import avatar1 from "../../assets/team1.jpg";
import avatar2 from "../../assets/team.jpeg";
import avatar3 from "../../assets/team1.jpg";
import Image from "next/image";
import Styles from "./About.module.css";

const About: NextPage = () => {
  return (
    <Box
      w="100%"
      height="550"
      bg="brand.900"
      px={60}
      py={10}
      className={Styles.text}
    >
      <Center py={10}>
        <Text
          fontSize="5xl"
          color="brand.300"
          letterSpacing="3px"
          textTransform="uppercase"
        >
          Our Team
        </Text>
      </Center>
      <Center>
        <Flex justify="space-evenly" minWidth="800" width="1000">
          <Box>
            <Image
              src={avatar1}
              alt="Avatar one"
              width="200"
              height="200"
              className={Styles.img}
            />
            <Center color="brand.300">
              <Text>Rosbourne the second</Text>
            </Center>
          </Box>
          <Box>
            <Image
              src={avatar2}
              alt="Avatar two"
              width="200"
              height="200"
              className={Styles.img}
            />
            <Center color="brand.300">
              <Text>Rosbourne the second</Text>
            </Center>
          </Box>
          <Box>
            <Image
              src={avatar3}
              alt="Avatar three"
              width="200"
              height="200"
              className={Styles.img}
            />
            <Center color="brand.300">
              <Text>Rosbourne the second</Text>
            </Center>
          </Box>
          <Box>
            <Image
              src={avatar3}
              alt="Avatar four"
              width="200"
              height="200"
              className={Styles.img}
            />
            <Center color="brand.300">
              <Text>Rosbourne the second</Text>
            </Center>
          </Box>
        </Flex>
      </Center>
    </Box>
  );
};

export default About;
