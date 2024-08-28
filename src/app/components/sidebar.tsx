'use client';

import { Box, Center, Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from 'next/navigation';

const Sidebar = () => {
    const pathname = usePathname(); // Get the current pathname

    return (
        <Flex
            direction="column"
            justifyContent="space-between"
            width="400px"
            height="100vh"
            position="fixed"
            color="white"
            p={4}
            backgroundImage="url('/images/Image(bg).png')"
            backgroundSize="cover"
            backgroundPosition="center"
            filter="saturate(65%) brightness(90%)"
        >
            <Box>
                <Center mb={10} pt={20}>
                    <Text color="brown" fontSize="2xl" fontWeight="bold">Kapi Nala</Text>
                </Center>

                <Center mb={10}>
                    <NextLink href="/" passHref legacyBehavior>
                        <Link
                            color={pathname === "/" ? "brown" : "gray"} // Home page
                            fontSize="lg"
                            fontWeight="medium"
                        >
                            Home
                        </Link>
                    </NextLink>
                </Center>

                <Center mb={10}>
                    <NextLink href="/work" passHref legacyBehavior>
                        <Link
                            color={pathname === "/work" || pathname.startsWith("/work/extend") ? "brown" : "gray"}
                            fontSize="lg"
                            fontWeight="medium"
                        >
                            Work
                        </Link>
                    </NextLink>
                </Center>

                <Center mb={10}>
                    <NextLink href="/VR" passHref legacyBehavior>
                        <Link
                            color={pathname === "/VR" ? "brown" : "gray"}
                            fontSize="lg"
                            fontWeight="medium"
                        >
                            VR
                        </Link>
                    </NextLink>
                </Center>

                <Center mb={10}>
                    <NextLink href="/about" passHref legacyBehavior>
                        <Link
                            color={pathname === "/about" ? "brown" : "gray"}
                            fontSize="lg"
                            fontWeight="medium"
                        >
                            About
                        </Link>
                    </NextLink>
                </Center>

                <Center mb={10}>
                    <NextLink href="/contact" passHref legacyBehavior>
                        <Link
                            color={pathname === "/contact" ? "brown" : "gray"}
                            fontSize="lg"
                            fontWeight="medium"
                        >
                            Contact
                        </Link>
                    </NextLink>
                </Center>
            </Box>

            {/* Sidebar Footer */}
            <Box mt="auto" pt={4} borderTop="1px solid gray">
                <Text fontSize="sm" textAlign="center" color={"black"}>
                    &copy; {new Date().getFullYear()} My Website. All rights reserved.
                </Text>
                <Text fontSize="sm" textAlign="center" color={"black"}>Design By Kotak</Text>
                <Text fontSize="sm" textAlign="center" color={"black"}>www.devkoma.com</Text>
            </Box>
        </Flex>
    );
};

export default Sidebar;
