import React from "react";
import { Box, Heading, Center, Text } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import displayImg1 from "../../assets/23.png";
import displayImg2 from "../../assets/4.png";
import displayImg3 from "../../assets/6.png";
import displayImg4 from "../../assets/66.png";
import displayImg5 from "../../assets/80.png";
import Card from "../../assets/MockUp_3.png";
import Link from "next/link";

const collections = [
  {
    id: 1,
    img: displayImg1,
  },
  { id: 2, img: displayImg2 },
  { id: 3, img: displayImg3 },
  { id: 4, img: displayImg4 },
  { id: 5, img: displayImg5 },
];

const Collect = () => {
  return (
    <div>
      <Box w="100%" height="1100" bg="brand.900" p={10}>
        <Center h="100px" color="white" borderRadius="radii.lg" my={20}>
          <Heading
            fontSize="7xl"
            fontFamily="font.heading"
            color="brand.300"
            letterSpacing="3px"
          >
            NFT Collects
          </Heading>
        </Center>

        <Link href="https://opensea.io/">
          <Center width="80%" m="auto" cursor="pointer">
            <Image src={Card} alt="display-img" />
          </Center>
        </Link>

        {/* <Center m="auto">
            <Carousel autoPlay={true} infiniteLoop={true}>
              {collections.map((item) => {
                return (
                  <Box key={item.id}>
                    <Image
                      src={item.img}
                      alt="display-img"
                      width={400}
                      height={400}
                    />
                    <Text></Text>
                  </Box>
                );
              })}
            </Carousel>
          </Center> */}
      </Box>
    </div>
  );
};

export default Collect;
