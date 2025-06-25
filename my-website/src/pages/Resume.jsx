import { Box, Heading, VStack } from "@chakra-ui/react";

function Resume() {
  return (
    <Box w="100vw" minH="100vh" bg="gray.900" pt="64px">
      <VStack spacing={8}>
        <Heading as="h1" size="lg" textAlign="center" color="white">
          My Resume
        </Heading>
        <Box
          border="1px"
          borderColor="gray.200"
          borderRadius="md"
          overflow="hidden"
          w="90vw"
          maxW="900px"
          bg="white"
          boxShadow="md"
        >
          <object
            data="/Karson_Resume9.pdf"
            type="application/pdf"
            width="100%"
            height="900px"
            style={{ minWidth: "300px" }}
          >
            <p>
              Your browser does not support PDFs.{" "}
              <a
                href="/Karson_Resume9.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download the PDF
              </a>
              .
            </p>
          </object>
        </Box>
      </VStack>
    </Box>
  );
}

export default Resume;
