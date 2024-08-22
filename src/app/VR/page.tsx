"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Box, SimpleGrid, Text, Flex } from "@chakra-ui/react";
import Sidebar from "../components/sidebar";

const VR = () => {
  const [filenames, setFilenames] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/images")
      .then((response) => response.json())
      .then((data) => setFilenames(data))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  return (
    <>
      <Flex direction="row" height="100vh">
        <Sidebar />
        <Box
          flex="1"
          p={5}
          maxW="20000px"
          mx="auto"
          position="relative"
          ml="400px" // Adjust margin-left to the width of the sidebar
        >
          <SimpleGrid columns={[1]} spacing="20px">
            {filenames.map((filename) => (
              <Box key={filename} position="relative" width="100%" height="200">
                <Box
                  width="100%"
                  paddingTop="calc(100% * (25 / 50))" // Aspect ratio container for 250x310 images
                  overflow="hidden"
                >
                  <Image
                    src={`/images/gallery/${filename}`}
                    alt={filename}
                    layout="fill"
                    objectFit="cover"
                  />
                </Box>
                <Box position="absolute" top="20px" left="10px">
                  <Text
                    bg="rgba(255, 255, 255, 0.8)"
                    p="3px 8px"
                    borderRadius="5px"
                  >
                    Lorem Ipsum
                  </Text>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </>
  );
};

export default VR;
