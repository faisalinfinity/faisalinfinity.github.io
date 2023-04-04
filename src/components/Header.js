import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Stack, Flex, Box, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import faisal from "./Faisal-Mujtaba-Resume.pdf";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  function downloadFile() {
    const driveUrl =
      "https://drive.google.com/file/d/1w6skRez72kCV9W7hv4TTjIqgrYb9NASF/view?usp=share_link";
    const fileId = driveUrl.match(/\/d\/(.+?)\/view/)[1];
    const pdfUrl = `https://drive.google.com/uc?id=1w6skRez72kCV9W7hv4TTjIqgrYb9NASF&export=download`;
    const a = document.createElement("a");
    a.id = "resume-link-2";
    a.href = driveUrl;
    a.target = "_blank";
    a.click();
    setTimeout(() => {
      window.location.href = pdfUrl;
    }, 1000);
  }

  // const resumedown2 = () => {
  //     window.open(
  //       "https://drive.google.com/file/d/1w6skRez72kCV9W7hv4TTjIqgrYb9NASF/view?usp=share_link",
  //       "_blank"
  //     );
  // };

  return (
    <Stack>
      <Flex
        id="about"
        className="about section"
        direction={{ base: "column-reverse", md: "row", lg: "row" }}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold" fontFamily={"san-serif"}>
            Hi, I am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
            id="user-detail-name"
          >
            Faisal Mujtaba
          </Text>
          <Text
            fontFamily={"san-serif"}
            id="user-detail-intro"
            color={isDark ? "gray.200" : "gray.500"}
          >
            About :- Dedicated and efficient full stack developer with over 1000
            hours of hands-on coding experience in tech application and
            presentation layers, as well as tech databases. Proficient in
            building and optimizing user-focused tech websites and applications
            using MERN stack, JavaScript, MongoDB, and No SQL. Expertise in both
            frontend and backend development, with solid knowledge of NodeJS,
            HTML, CSS, and Express framework.
          </Text>
          
          <button
            id="resume-button-2"
            onClick={() =>
              (window.location.href =
                "https://drive.google.com/uc?export=download&id=1w6skRez72kCV9W7hv4TTjIqgrYb9NASF")
            }
            // mt={8}
            // colorScheme="blue"
            // bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
          >
            RESUME
          </button>
        </Box>
        <Image
          className="home-img"
          alignSelf="center"
          mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="250px"
          src="https://avatars.githubusercontent.com/u/112964959?v=4"
        />
      </Flex>
    </Stack>
  );
}

export default Header;
