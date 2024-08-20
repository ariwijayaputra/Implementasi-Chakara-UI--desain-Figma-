'use client'
import { Box, Center, Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const Sidebar = () => {
return (
    <Flex
    direction="column"
    justifyContent="space-between"
    width="400px"
    height="100vh"
    position="fixed"
    color="white"
    p={4}
      backgroundImage="url('/images/Image(bg).png')" // Use your image path here
      backgroundSize="cover" // Ensures the image covers the entire sidebar
      backgroundPosition="center" // Center the background image
    >
    <Box>
        <Center mb={10} pt={20}>
        <Text color="white">Kapi Nala</Text>
        </Center>
        <Center mb={10}>
        <NextLink href="/" passHref legacyBehavior>
            <Link color="white">Home</Link>
        </NextLink>
        </Center>
        <Center mb={10}>
        <NextLink href="/about" passHref legacyBehavior>
            <Link color="white">Work</Link>
        </NextLink>
        </Center>
        <Center mb={10}>
        <NextLink href="/services" passHref legacyBehavior>
            <Link color="white" >Vr</Link>
        </NextLink>
        </Center>
        <Center mb={10}>
        <NextLink href="/contact" passHref legacyBehavior>
            <Link color="white">About</Link>
        </NextLink>
        </Center>
        <Center mb={10}>
        <NextLink href="/contact" passHref legacyBehavior>
            <Link color="white">Contact</Link>
        </NextLink>
        </Center>
    </Box>

      {/* Sidebar Footer */}
    <Box mt="auto" pt={4} borderTop="1px solid white">
        <Text fontSize="sm" textAlign="center">
        &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </Text>
    </Box>
    </Flex>
);
};

export default Sidebar;
