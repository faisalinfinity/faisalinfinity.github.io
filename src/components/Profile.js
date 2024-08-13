import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Box, Flex, Heading, Text, Link } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import { DiCodeigniter, DiAndroid, DiWebplatform } from "react-icons/di";

import { SiHackerrank, SiVisualstudiocode } from "react-icons/si";
import { Image } from "@chakra-ui/react";

function Profile() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <>
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        w="100%"
        maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
      >
        <Box alignSelf="center" px="32" py="16">
          <Heading
            bgGradient="linear(to-r, green.400, blue.500, purple.600)"
            bgClip="text"
            fontWeight="extrabold"
            size="4xl"
          >
            1.2+
          </Heading>
          <Text fontSize="2xl" color="gray.400">
            years of focused coding, endless possibilities - my portfolio of
            algorithmic accomplishments and growth.
          </Text>
        </Box>
      </Flex>

      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        w="100%"
        maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
      >
        <Box alignSelf="center" px="32" py="16">
          <Heading
            bgGradient="linear(to-r, green.400, blue.500, yellow.600)"
            bgClip="text"
            fontWeight="extrabold"
            size="4xl"
          >
            900+ DSA <Icon as={SiVisualstudiocode}></Icon>
          </Heading>
          <Text fontSize="2xl" color="gray.400">
            problems solved and still hungry for more - my portfolio of
            algorithmic conquests.
            <br/>
            <Text display={"flex"} alignItems={"center"} gap="10px">
              <Icon color={"green.500"} as={SiHackerrank}></Icon>
              <Link
                fontSize={"18px"}
                _hover={{ color: "teal" }}
                href="https://www.hackerrank.com/mujtabafaisal941?badge=problem-solving&stars=2&level=1&hr_r=1&social=linkedin"
              >
                HackerRank
              </Link>
              <Text  display={"flex"} alignItems={"center"} gap="10px">
                <Image
                  bgColor={"white"}
                  w={"50px"}
                  src="https://students.masaischool.com/static/media/masai-logo.e5c8801d4f26d2da036ec9e4b93cb202.svg"
                ></Image>
                <Link   _hover={{ color: "teal" }}  fontSize={"18px"} href="https://drive.google.com/file/d/1XFXH-AOsaCdeJngyHJz1CXRE6pHSsrgj/view?usp=share_link">OJ</Link>
              </Text>
            </Text>
          </Text>
        </Box>
      </Flex>
    </>
  );
}

export default Profile;
