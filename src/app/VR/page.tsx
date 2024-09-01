'use client';
import Image from "next/image";
import { Box, SimpleGrid, Text, Flex } from "@chakra-ui/react";
import Sidebar from "../components/sidebar";
import { useGalleryImages } from "../components/gallery";

const VR = () => {
    const filenames = useGalleryImages('VR');

    return (
        <Flex>
            <Box
                flex="1"
                p={5}
                maxW="2000px"
                mx="auto"
                position="relative"
            >
                <SimpleGrid columns={[1]} spacing="20px">
                    {filenames.map((filename) => (
                        <Box key={filename} position="relative" width="100%" height="200"> {/* 16:9 Aspect Ratio */}
                            <Image
                                src={`/images/VR/${filename}`}
                                alt={filename}
                                fill
                                style={{ objectFit: "cover", borderRadius: "10px" }}
                            />
                            <Box position="absolute" top="10px" left="10px">
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
    );
};

export default VR;
