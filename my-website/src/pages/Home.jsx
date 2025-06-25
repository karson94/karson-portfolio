import { Flex, Box, Heading, Text, Button, Stack } from "@chakra-ui/react";

function Home() {
  return (
    <Flex
      minH="100vh"
      w="100vw"
      align="center"
      justify="center"
      bg="gray.900"
    >
      <Box
        textAlign="center"
        p={8}
        borderRadius="md"
        boxShadow="md"
      >
        <Heading as="h1" size="2xl" mb={4} color="whiteAlpha.800">
          Sam Karson
        </Heading>

        <Text fontSize="xl" mb={8} color="gray.700">
          Welcome to my professional portfolio website!
        </Text>

        <Stack spacing={4} align="center">
          <Button colorScheme="teal" size="lg" bg="" >View My Projects</Button>
          <Button colorScheme="teal" size="lg">Contact Me</Button>
        </Stack>
      </Box>
    </Flex>
  );
}

export default Home;
