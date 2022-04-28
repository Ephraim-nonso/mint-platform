import { NextPage } from "next";
import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Badge } from "@chakra-ui/react";
import First from "../../assets/6.png";
import Second from "../../assets/4.png";
import Third from "../../assets/23.png";
import Four from "../../assets/80.png";

function Card() {
  const properties = [
    {
      imageUrl: First,
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Modern home",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: Second,
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Los Angeles",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: Third,
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "In city center",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: Four,
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "In the heart of historic",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
  ];

  return properties.map((property) => (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      key={property.title}
      fontSize="2xl"
      fontFamily="font.body"
    >
      <Image
        src={property.imageUrl}
        alt={property.imageAlt}
        width={500}
        height={500}
      />

      <Box p="6">
        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          {property.title}
        </Box>

        <Box>
          <Text color="white">{property.formattedPrice}</Text>
          {/* <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box> */}
        </Box>

        {/* <Box display="flex" mt="2" alignItems="center">
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </Box> */}
      </Box>
    </Box>
  ));
}

export default Card;
