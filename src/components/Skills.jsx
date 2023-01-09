import React, { useContext, useEffect, useRef } from 'react'
import { Flex,Grid,Heading,Icon,Text, useMediaQuery } from '@chakra-ui/react'
import { DiCodeigniter, DiAndroid,} from "react-icons/di";
import { FaReact } from 'react-icons/fa'
import {SiChakraui, SiJavascript,SiMaterialui,SiMongodb,SiNetlify,SiNodedotjs,SiRedux, SiTypescript } from 'react-icons/si'
import { IoLogoCss3, IoLogoNpm } from 'react-icons/io'
import {TbBrandNextjs, TbBrandVercel } from 'react-icons/tb'
import { ScrollContext } from '../Context/ScrollContext';

const Skills = ({skillsRef}) => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    const {scrollref,setscroll}=useContext(ScrollContext)

  
  return (
   <>
   <Heading ref={skillsRef} name="skills">Skills</Heading>
    <Grid p={"40px"} templateColumns={{base:"repeat(2,1fr)",lg:"repeat(4,1fr)"}} direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="blue.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
          >
            <Icon color="white" p="4" as={FaReact} w="24" h="24" />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              React
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "teal.400" }}
          >
            <Icon color="black" p="4" as={SiRedux} w="24" h="24" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
             Redux
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "green.400" }}
          >
            <Icon as={SiJavascript} p="4" w="24" h="24" color="black" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
             JavaScript
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "green.400" }}
          >
            <Icon as={SiTypescript} p="4" w="24" h="24" color="black" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
             TypeScript
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "green.400" }}
          >
            <Icon as={IoLogoCss3} p="4" w="24" h="24" color="black" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
             CSS3
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "green.400" }}
          >
            <Icon as={IoLogoNpm} p="4" w="24" h="24" color="black" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
          NPM
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "green.400" }}
          >
            <Icon as={SiNodedotjs} p="4" w="24" h="24" color="black" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
             NodeJs
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "green.400" }}
          >
            <Icon as={SiMongodb} p="4" w="24" h="24" color="black" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
           MongoDB
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "green.400" }}
          >
            <Icon as={SiNetlify} p="4" w="24" h="24" color="black" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
            Netlify
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "green.400" }}
          >
            <Icon as={SiMaterialui} p="4" w="24" h="24" color="black" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
            Material UI
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "green.400" }}
          >
            <Icon as={TbBrandNextjs} p="4" w="24" h="24" color="black" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
             NextJS
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "green.400" }}
          >
            <Icon as={SiChakraui} p="4" w="24" h="24" color="black" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
             Chakra UI
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "green.400" }}
          >
            <Icon as={SiChakraui} p="4" w="24" h="24" color="black" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
             Chakra UI
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "green.400" }}
          >
            <Icon as={TbBrandVercel} p="4" w="24" h="24" color="black" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
            Vercel
            </Text>
          </Flex>
        </Grid>
   </>
  )
}

export default Skills