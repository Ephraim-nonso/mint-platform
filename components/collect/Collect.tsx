import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import displayImg1 from "../../assets/ABOUT.jpg";
import Link from "next/link";
import styles from "./Collect.module.css";

const Collect = () => {
  return (
    <div>
      <Box bg="brand.900" height="150">
        <Text
          fontSize="lg"
          px="20"
          width="500"
          color="brand.300"
          minWidth={500}
          className={styles.text}
          textAlign="center"
        >
          Rosbourne is a genesis collection of 3 superior races living in the
          dystopian metropolis of Oakalis City set in a post-apocalyptic world.
        </Text>
      </Box>
    </div>
  );
};

export default Collect;
