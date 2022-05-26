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
import avatar3 from "../../assets/par.jpg";
import avatar4 from "../../assets/gh.jpg";
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
        <Flex justify="space-around">
          <Box p="5">
            <Image
              src={avatar1}
              alt="Avatar one"
              width="200"
              height="200"
              className={Styles.img}
            />
            <Flex
              flexDirection="column"
              py={3}
              color="brand.300"
              textAlign="center"
            >
              <Text textTransform="uppercase">Satoshill</Text>
              <Text fontSize="sm">Founder & Artist</Text>
            </Flex>
          </Box>
          <Box p="5">
            <Image
              src={avatar2}
              alt="Avatar two"
              width="200"
              height="200"
              className={Styles.img}
            />
            <Flex
              flexDirection="column"
              py={3}
              color="brand.300"
              textAlign="center"
            >
              <Text textTransform="uppercase">Mandy Debussy</Text>
              <Text fontSize="sm">Illustrator</Text>
            </Flex>
          </Box>
          <Box p="5">
            <Image
              src={avatar3}
              alt="Avatar three"
              width="200"
              height="200"
              className={Styles.img}
            />
            <Flex
              flexDirection="column"
              py={3}
              color="brand.300"
              textAlign="center"
            >
              <Text textTransform="uppercase">Parzival</Text>
              <Text fontSize="sm">Blockchain Dev</Text>
            </Flex>
          </Box>
          <Box p="5">
            <Image
              src={avatar4}
              alt="Avatar four"
              width="200"
              height="200"
              className={Styles.img}
            />
            <Flex
              flexDirection="column"
              py={3}
              color="brand.300"
              textAlign="center"
            >
              <Text textTransform="uppercase">CyberGhost</Text>
              <Text fontSize="sm">Frontend Dev</Text>
            </Flex>
          </Box>
        </Flex>
      </Center>
    </Box>
  );
};

export default About;
