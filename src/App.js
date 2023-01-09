import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, Heading, IconButton, Spacer, VStack } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header";

import Profile from "./components/Profile";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AnimatedCard from "./components/animated";
import Githubstat from "./components/Githubstat";
import { useContext, useEffect, useRef } from "react";
import { ScrollContext } from "./Context/ScrollContext";
function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const {scrollref,setscroll}=useContext(ScrollContext);
  
   const aboutRef=useRef(null)
   const projectRef=useRef(null)
   const contactRef=useRef(null)
   const skillsRef=useRef(null)
   useEffect(()=>{
    scrollref?.current.scrollIntoView({ behavior: 'smooth' });
  },[scrollref])

  return (
    <>
      <Navbar sections={{aboutRef,projectRef,skillsRef,contactRef}} />
      <VStack p={5}>
        <Flex w="100%">
          <Heading ref={aboutRef} name="about" ml="8" size="md" fontWeight="semibold" color="cyan.400">
            imfaisal
          </Heading>

          <Spacer></Spacer>
          <IconButton
            position={"inherit"}
            icon={<FaLinkedin />}
            isRound="true"
            onClick={()=>window.open("https://www.linkedin.com/in/faisal-mujtaba-480601244")}
          ></IconButton>
          <IconButton
            position={"inherit"}
            ml={2}
            icon={<FaInstagram />}
            isRound="true"
            onClick={()=>window.open("https://www.instagram.com/mj_faisal_/")}
          ></IconButton>
          <IconButton
            position={"inherit"}
            ml={2}
            icon={<FaGithub />}
            isRound="true"
            onClick={()=>window.open("https://github.com/faisalinfinity")}
          ></IconButton>
        </Flex>

        <Header></Header>
        <Profile ></Profile>
        <Skills skillsRef={skillsRef} />
        <Projects projectRef={projectRef}/>
      <Githubstat/>
      </VStack>
    </>
  );
}

export default App;
