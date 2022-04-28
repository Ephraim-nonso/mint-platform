import React from "react";
const Faq = require("react-faq-component");
import { Box, Text, Heading, Center, Flex, Spacer } from "@chakra-ui/react";
import { AiOutlineCaretDown } from "react-icons/ai";

const data = {
  title: "FAQ (How it works)",
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
          Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
          Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
          Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: "What is the package version",
      content: <p>current version is 1.2.1</p>,
    },
  ],
};

const FaqComp = () => {
  return (
    // <div>
    //   <Faq styles={styles} config={config} />
    // </div>

    <Box w="100%" height="900" bg="brand.900" p={10}>
      <Center bg="teal" h="100px" color="white" borderRadius="radii.lg" my={20}>
        <Heading color="" fontSize="8xl" fontFamily="font.heading">
          {data.title}
        </Heading>
      </Center>

      {data.rows.map((item) => {
        return (
          <Box key={item.title}>
            <Box
              bg="teal"
              h="100px"
              color="white"
              borderRadius="radii.lg"
              my={5}
              cursor="pointer"
            >
              <Flex justifyItems="space-between" alignItems="center" px={20}>
                <Heading p="4">{item.title}</Heading>
                <Spacer />
                <Text p="4">
                  <AiOutlineCaretDown size={40} />
                </Text>
              </Flex>
            </Box>

            <Text display="none">{item.content}</Text>
          </Box>
        );
      })}
    </Box>
  );
};

export default FaqComp;
