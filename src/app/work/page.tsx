"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Box, SimpleGrid, Text ,Flex } from "@chakra-ui/react";
import Sidebar from "../components/sidebar";

const Work = () => {
    const [filenames, setFilenames] = useState<string[]>([]);

    useEffect(() => {
        fetch('/api/images')
            .then((response) => response.json())
            .then((data) => setFilenames(data))
            .catch((error) => console.error('Error fetching images:', error));
    }, []);

    return (
        <>
    <Flex direction="row" height="100vh">
  <Sidebar />
  <Box flex="1" p={5} maxW="1200px" mx="auto" position="relative" ml="400px"> {/* Add margin-left equal to sidebar width */}
    <SimpleGrid columns={[1, null, 3]} spacing="20px">
      {filenames.map((filename) => (
        <Box key={filename} position="relative">
          <Image
            src={`/images/gallery/${filename}`}
            alt={filename}
            width={400}  // or any appropriate width
            height={300}  // or any appropriate height
            objectFit="cover"
          />
          <Box position="absolute" top="20px" left="10px">
            <Text bg="rgba(255, 255, 255, 0.8)" p="3px 8px" borderRadius="5px">
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

export default Work;
