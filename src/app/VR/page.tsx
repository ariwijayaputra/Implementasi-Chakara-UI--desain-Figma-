'use client'
import Image from "next/image";
import { Box, SimpleGrid, Text, Flex } from "@chakra-ui/react";
import Sidebar from "../components/sidebar";
import { useGalleryImages } from "../components/gallery";

const VR = () => {
  const filenames = useGalleryImages();
  // Divide images into three columns
const columnCount = 3;
const columns: string[][] = Array.from(
    { length: columnCount },
    () => [] as string[]
);

filenames.forEach((filename, index) => {
    columns[index % columnCount].push(filename);
});

  return (
    <>
      <Flex direction="row">
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
