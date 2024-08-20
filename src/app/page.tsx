'use client'
import { Box, Flex, Text } from "@chakra-ui/react";
import Sidebar from "./components/sidebar";
export default function Home() {
  return (
    <Flex direction="row" height="100vh">
      <Sidebar />
      <Box
        flex="1"
        backgroundImage="url('/images/BackGround.png')"
        backgroundSize="cover" // Ensures the image covers the entire container
        backgroundPosition="center" // Centers the image in the container
        p={4}
      >
        <Text fontSize="2xl" color="white">Welcome to the Home Page</Text>
        {/* Additional content goes here */}
      </Box>
    </Flex>
  );
}
