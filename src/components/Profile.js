import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import { DiCodeigniter, DiAndroid, DiWebplatform } from "react-icons/di";

function Profile() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Flex
      direction={isNotSmallerScreen ? "row" : "column"}
      w="100%"
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
    >
      <Box alignSelf="center" px="32" py="16">
        <Heading
          bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
          bgClip="text"
          fontWeight="extrabold"
          
          size="4xl"
        >
          1000+
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          Hours of Consistent Coding Experience
        </Text>
      </Box>
     
    </Flex>
  );
}

export default Profile;
