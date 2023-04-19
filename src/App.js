import { useColorModeValue } from "@chakra-ui/color-mode";
import {
  Flex,
  Heading,
  HStack,
  IconButton,
  Spacer,
  VStack,
  Icon,
  Text,
  Box,
} from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header";

import Profile from "./components/Profile";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

import Githubstat from "./components/Githubstat";
import { useContext, useEffect, useRef } from "react";
import { ScrollContext } from "./Context/ScrollContext";

import Contact from "./components/Contact";
import GithubCal from "./components/GithubCalendar";

import { MdCopyright } from "react-icons/md";
import { SiAndroid, SiApple, SiWindows } from "react-icons/si";
import Toolset from "./components/Toolset";
function App() {
  const { scrollref } = useContext(ScrollContext);

  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    scrollref?.current.scrollIntoView({ behavior: "smooth" });
  }, [scrollref]);

  var browser = navigator.userAgent;
  console.log("Browser: " + browser);
  

  let device;
  let icon;
  if (navigator.userAgent.match(/iPhone/i)) {
    console.log(device = "Iphone");
    icon = SiApple;
  } else if (navigator.userAgent.match(/Android/i)) {
    device = "Android";
    icon = SiAndroid;
  } else if (navigator.userAgent.match(/iPad/i)) {
    device = "Ipad";
    icon = SiApple;
  } else if (navigator.userAgent.match(/Windows Phone/i)) {
    device = "Windows Phone";
    icon = SiWindows;
  } else if (navigator.userAgent.match(/webOS/i)) {
    device = "WebOS";
    icon = SiWindows;
  } else {
    device = "Windows";
    icon = SiWindows;
  }

  if (navigator.userAgent.includes("Macintosh")) {
    device = "MacOS";
    icon = SiApple;
  }

  return (
    <Box>
      <Navbar
        fontFamily={"san-serif"}
        sections={{ aboutRef, projectRef, skillsRef, contactRef }}
      />
      <VStack
        fontFamily={"san-serif"}
        position={"absolute"}
        zIndex="-3"
        bg={useColorModeValue("", "black")}
      >
        <Flex mt={"70px"} w="100%">
          <Heading
            ref={aboutRef}
            id="home"
            name="about"
            ml="8"
            size="md"
            fontWeight="semibold"
            color="cyan.400"
            fontSize={"12px"}
            textAlign="center"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap="5px"
          >
            <Icon as={icon}></Icon> You are viewing on {device}
          </Heading>

          <Spacer></Spacer>

          <IconButton
            position={"inherit"}
            icon={<FaLinkedin />}
            isRound="true"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/faisal-mujtaba-480601244"
              )
            }
          ></IconButton>
          <IconButton
            position={"inherit"}
            ml={2}
            icon={<FaInstagram />}
            isRound="true"
            onClick={() => window.open("https://www.instagram.com/mj_faisal_/")}
          ></IconButton>
          <IconButton
            position={"inherit"}
            ml={2}
            icon={<FaGithub />}
            isRound="true"
            onClick={() => window.open("https://github.com/faisalinfinity")}
          ></IconButton>
        </Flex>

        <Header></Header>
        <Profile></Profile>
        
        <Spacer></Spacer>
        <Skills skillsRef={skillsRef} />
       <br/>
       <br/>
       <br/>
        <Spacer></Spacer>
        <Toolset />
        <Projects projectRef={projectRef} />
        <Githubstat />
        <GithubCal />
        <Contact contactRef={contactRef} />
        <HStack>
          {" "}
          <Icon as={MdCopyright}> </Icon> <Text>2023 Faisal Mujtaba</Text>
        </HStack>
      </VStack>
    </Box>
  );
}

export default App;
