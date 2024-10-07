// "use client";
// import { useSearchParams } from "next/navigation";
// import Image from "next/image";
// import { Box, Divider, Flex, Spacer, Text } from "@chakra-ui/react";

// const ExtendPage = () => {
// const searchParams = useSearchParams();
// const image = searchParams.get("image");

// return (
//     <>
//         <Text fontSize="2xl" color="Black" align="left" mb={4}>Welcome to the Home Page</Text>
//         <Flex direction="row" gap="50px">
//         {/* Image container with a fixed size */}
//             <Box w="700px" h="400px"pos="relative"mb={4}>
//                 <Image src={`/images/gallery/${image}`}
//                     layout="fill" // Use fill to cover the entire box
//                     objectFit="cover" // Cover the entire box without stretching
//                     alt={`Details about ${image}`}
//                     style={{ borderRadius: "10px" }}/>
//             </Box>
//             <Flex direction="column">
//                 <Box bg="tomato" w="100px" h="100px">
//                 Box 1
//                 </Box>
//                 <Box w="50px" /> {/* Custom space */}
//                 <Box bg="blue.500" w="100px" h="100px">
//                 Box 2
//                 </Box>
//             </Flex>
//         </Flex>
//         <Spacer  />
//         <Divider orientation='horizontal' borderWidth="1.1px" borderColor="black.400" />
//         <Box
//             p={3}
//             flex="1"
//             mx="auto"
//             position="relative"
//             mt="50px"
//             display="flex"
//             flexDirection="column">
//             <Text fontSize="2xl" color="Black" align="left" mb={4}>hello</Text>
//         </Box>
//     </>
// );
// };

// export default ExtendPage;

import Image from "next/image";
import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { notFound } from "next/navigation";

// Use async function within the component to handle server-side data fetching
export default async function ExtendPage({ searchParams }: { searchParams: { image: string } }) {
  const image = searchParams.image || null; // Retrieve 'image' parameter from URL searchParams

  if (!image) {
    return notFound(); // Handle case where image is not found
  }

  return (
    <>
      <Text fontSize="2xl" color="Black" align="left" mb={4}>
        Welcome to the Home Page
      </Text>
      <Flex direction="row" gap="50px">
        {/* Image container with a fixed size */}
        <Box w="700px" h="400px" pos="relative" mb={4}>
          <Image
            src={`/images/gallery/${image}`}
            layout="fill" // Use fill to cover the entire box
            objectFit="cover" // Cover the entire box without stretching
            alt={`Details about ${image}`}
            style={{ borderRadius: "10px" }}
          />
        </Box>
        <Flex direction="column">
          <Box bg="tomato" w="100px" h="100px">
            Box 1
          </Box>
          <Box w="50px" /> {/* Custom space */}
          <Box bg="blue.500" w="100px" h="100px">
            Box 2
          </Box>
        </Flex>
      </Flex>
      <Divider orientation="horizontal" borderWidth="1.1px" borderColor="black.400" />
      <Box
        p={3}
        flex="1"
        mx="auto"
        position="relative"
        mt="50px"
        display="flex"
        flexDirection="column"
      >
        <Text fontSize="2xl" color="Black" align="left" mb={4}>
          hello
        </Text>
      </Box>
    </>
  );
}
