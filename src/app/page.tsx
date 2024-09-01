'use client';
import { Box, Flex, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import Sidebar from "./components/sidebar";

export default function Home() {
  return (
    <Flex direction={['column', 'row']} wrap="wrap" justify="center" height="100vh">
      <Box
        flex="1"
        backgroundImage="url('/images/BackGround.png')"
        backgroundSize="cover"
        width="100%"
        height="100vh"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        filter="hue-rotate(-100deg) saturate(40%) brightness(65%)"
        p={4}
      >
        <Text fontSize="2xl" color="Black" align="center">Welcome to the Home Page</Text>
        <Flex justify="center" mt={10} pt={30}>
          <RadioGroup defaultValue="1">
            <Stack direction="row" spacing={10}>
              <Radio value="1"  />
              <Radio value="2"  />
              <Radio value="3"  />
              <Radio value="4"  />
            </Stack>
          </RadioGroup>
        </Flex>
      </Box>
    </Flex>
  );
}
