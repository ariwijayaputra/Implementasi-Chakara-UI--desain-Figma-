// "use client";

// import { useSearchParams } from 'next/navigation';
// import Image from 'next/image';
// import { Box, Spacer, Text } from "@chakra-ui/react";

// const ExtendPage = () => {
//     const searchParams = useSearchParams();
//     const image = searchParams.get('image');

//     return (
//         <Box p={3}
//         flex="1"
//         maxW="2000px"
//         mx="auto"
//         position="relative"
//         ml="360px" mt="50px">
//                 <>
//                 <Text fontSize="2xl" color="Black" align="left"  ml="200px">Welcome to the Home Page</Text>
//                 <Image
//                 src={`/images/gallery/${image}`}
//                 width={500}
//                 height={320}
//                 objectFit="relative"
//                 alt="Detailed"
//                 style={{ borderRadius: '10px' }}/>

//                     <Text fontSize="xl" mt={4} color="Black" align="center">Details about {image}</Text>
//                     <Spacer>

//                     </Spacer>
//                 </>
//         </Box>
//     );
// };

// export default ExtendPage;

"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";

const ExtendPage = () => {
const searchParams = useSearchParams();
const image = searchParams.get("image");

return (
    <>
    <Text fontSize="2xl" color="Black" align="left" mb={4}>
        Welcome to the Home Page
    </Text>
    <Flex direction="row" gap="50px">
        {/* Image container with a fixed size */}
        <Box
        width="700px"
        height="400px"
        position="relative"
          mb={4} // Add bottom margin to ensure space below the image
        >
        <Image
            src={`/images/gallery/${image}`}
            layout="fill" // Use fill to cover the entire box
            objectFit="cover" // Cover the entire box without stretching
            alt={`Details about ${image}`}
            style={{ borderRadius: "10px" }}
        />
        </Box>
        <Flex direction="column">
          {/* Text placed below the image */}
        <Text fontSize="xl" color="Black" align="left" mt={4}>
            Details about {image}
        </Text>
        <Spacer />
        <Text fontSize="xl" color="Black" align="left" mt={4}>
            Details about {image}
        </Text>
        </Flex>
    </Flex>
    <Spacer />
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
};

export default ExtendPage;
