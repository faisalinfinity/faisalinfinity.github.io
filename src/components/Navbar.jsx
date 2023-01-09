// import { ReactNode } from "react";
// import {
//   Box,
//   Flex,
//   Avatar,
//   Link,
//   Button,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuDivider,
//   useDisclosure,
//   useColorModeValue,
//   Stack,
//   useColorMode,
//   Center,
// } from "@chakra-ui/react";
// import { MoonIcon, SunIcon } from "@chakra-ui/icons";

// const NavLink = () => (
//   <Link
//     px={2}
//     py={1}
//     rounded={"md"}
//     _hover={{
//       textDecoration: "none",
//       bg: useColorModeValue("gray.200", "gray.700"),
//     }}
//     href={"#"}
//   ></Link>
// );

// export default function Navbar() {
//   const { colorMode, toggleColorMode } = useColorMode();

//   return (
//     <>
//       <Box
//         w={"100%"}
//         as="header"
//         position="fixed"
//         bg={useColorModeValue("white", "black")}
//         px={4}
//         bgGradient={useColorModeValue(
//           "linear(to-r, cyan.400, teal.100, purple.600)",
//           "linear(to-r, cyan.400, blue.500, purple.600)"
//         )}
//       >
//         <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
//

//           <Flex alignItems={"center"}>
//             <Stack direction={"row"} spacing={7}>
//               <Button onClick={toggleColorMode}>
//                 {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
//               </Button>

//               <Menu>
//                 <MenuButton
//                   as={Button}
//                   rounded={"full"}
//                   variant={"link"}
//                   cursor={"pointer"}
//                   minW={0}
//                 >
//                   <Avatar
//                     size={"sm"}
//                     src={"https://avatars.dicebear.com/api/male/username.svg"}
//                   />
//                 </MenuButton>
//                 <MenuList alignItems={"center"}>
//                   <br />
//                   <Center>
//                     <Avatar
//                       size={"2xl"}
//                       src={"https://avatars.dicebear.com/api/male/username.svg"}
//                     />
//                   </Center>
//                   <br />
//                   <Center>
//                     <p>Username</p>
//                   </Center>
//                   <br />
//                   <MenuDivider />
//                   <MenuItem>Your Servers</MenuItem>
//                   <MenuItem>Account Settings</MenuItem>
//                   <MenuItem>Logout</MenuItem>
//                 </MenuList>
//               </Menu>
//             </Stack>
//           </Flex>
//         </Flex>
//       </Box>
//     </>
//   );
// }
import { FaSun, FaMoon } from 'react-icons/fa'
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  ButtonGroup,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useColorMode } from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import { ScrollContext } from '../Context/ScrollContext';
export default function Navbar({sections}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const {scrollref,setscroll}=useContext(ScrollContext);
  const handleClick = (ref) => {
    setscroll(ref)
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(()=>{
    scrollref?.current.scrollIntoView({ behavior: 'smooth' });
  },[scrollref])
  return (
    <>
      <Box  w={"100%"} position="fixed"
      zIndex={"4"}
        bgGradient={useColorModeValue(
          "linear(to-r, cyan.400, teal.100, purple.600)",
          "linear(to-r, cyan.400, blue.500, purple.600)"
        )}
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>Home</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Button
               onClick={()=>handleClick(sections.aboutRef)}
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={"#"}
              >
                About Me
              </Button>
              <Button
               onClick={()=>handleClick(sections.skillsRef)}
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={"#"}
              >
                Skills
              </Button>
              <Button
              onClick={()=>handleClick(sections.projectRef)}
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={"#"}
              >
                Projects
              </Button>
              <Button
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={"#"}
              >
                Contact
              </Button>
              <Button
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={"#"}
              >
                Resume
              </Button>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            
           
              
            
               <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>  
           
           
            
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: "gray.200",
                }}
                href={"#"}
              >
                Hello
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>Main Content Here</Box>
    </>
  );
}
