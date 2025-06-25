import { Box, Flex, HStack, Link, Button, Spacer, Heading } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Navbar() {
  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      w="100%"
      zIndex={10}
      bg="green.900"
      px={4}
      boxShadow="md"
    >
      <Flex h={16} alignItems="center">
        <Heading as="h1" size="sm" color="white">
          Sam Karson
        </Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link as={RouterLink} to="/" color="white" fontWeight="bold" _hover={{color: "yellow.400"}}>
            Home
          </Link>
          <Link as={RouterLink} to="/projects" color="white" fontWeight="bold" _hover={{color: "yellow.400"}}>
            Projects
          </Link>
          <Link as={RouterLink} to="/contact" color="white" fontWeight="bold" _hover={{color: "yellow.400"}}>
            Contact
          </Link>
          <Link as={RouterLink} to="/resume" color="white" fontWeight="bold" _hover={{color: "yellow.400"}}>
            Resume
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Navbar;
