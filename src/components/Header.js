import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Stack, Circle, Flex, Box, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import React from "react";
import Styles from "../styles/animatedbtn.module.css"

function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Stack>
      <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"
      />
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Faisal Mujtaba
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>
            Dedicated and efficient full stack developer with 1000+ hours of
            consistent coding experience in application layers, presentation
            layers, and databases. Proficient in building and optimizing
            userfocused websites and applications. Judicious and creative while
            crafting effective websites, apps and platforms to propel
            competitive advantage and revenue growth.
          </Text>
          <Button
            className={Styles.glow}
            mt={8}
            position="inherit"
            colorScheme="blue"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            onClick={()=>window.open("https://github.com/faisalinfinity")}
          >
            Hire Me
          </Button>
        </Box>
        <Image
          alignSelf="center"
          mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="300px"
          src="https://avatars.githubusercontent.com/u/112964959?v=4"
        />
      </Flex>
    </Stack>
  );
}

export default Header;
