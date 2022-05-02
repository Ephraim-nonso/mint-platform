import { NextPage } from "next";
import React from "react";
import { Box, Center, Heading, Text, Grid, GridItem } from "@chakra-ui/react";
import brief from "../../assets/gae.png";
import Image from "next/image";
import Styles from "./About.module.css";

const About: NextPage = () => {
  return (
    <Box w="100%" height="900" bg="brand.900" p={20}>
      <Center p={50} fontFamily="font.body" color="white">
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={6}
          templateRows="repeat(1, 1fr)"
        >
          <GridItem w="100%" h="20" my={100}>
            <Image src={brief} alt="Brief" width={400} height={400} />
          </GridItem>
          <GridItem w="100%" h="10" textAlign="justify">
            {/* <Center h="100px" color="white" borderRadius="radii.lg" m={20}> */}
            <Heading
              color="brand.300"
              fontSize="7xl"
              letterSpacing="3px"
              fontFamily="font.heading"
              my={10}
            >
              Who Are Rosbourne?
            </Heading>
            {/* </Center> */}
            <Box className={Styles.details}>
              <Text fontSize="2xl" pb={5}>
                Rosbourne is a collection of 3k genesis avatars consist of 3
                different races, they are human, cyborg, and inu living in the
                dystopian metropolis of Oakalis City.
              </Text>
              <Text fontSize="2xl" pb={5}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus optio itaque magni nesciunt cupiditate aperiam
                recusandae rem praesentium incidunt voluptas!
              </Text>
              <Text fontSize="2xl" pb={5}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus optio itaque magni nesciunt cupiditate aperiam
                recusandae rem praesentium incidunt voluptas!
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Center>
    </Box>
  );
};

export default About;
