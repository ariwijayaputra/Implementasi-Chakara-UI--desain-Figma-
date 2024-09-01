// "use client";
// import Image from "next/image";
// import { Box, Text, Flex } from "@chakra-ui/react";
// import Sidebar from "../components/sidebar";
// import Link from "next/link";
// import { useGalleryImages } from "../components/gallery";

// const Work = () => {
//     const filenames = useGalleryImages();

//     // Divide images into three columns
//     const columnCount = 3;
//     const columns: string[][] = Array.from(
//         { length: columnCount },
//         () => [] as string[]
//     );

//     filenames.forEach((filename, index) => {
//         columns[index % columnCount].push(filename);
//     });

//     return (
//         <Flex>
//             {/* Sidebar with higher zIndex to ensure visibility */}
//             <Box position="relative" zIndex="1">
//                 <Sidebar />
//             </Box>

//             {/* Content container with background image */}
//             <Box
//                 flex="1"
//                 position="relative"
//                 width="100%"
//                 backgroundImage="url('/images/Image(bg).png')"
//                 backgroundSize="cover"
//                 backgroundRepeat="no-repeat"
//                 backgroundPosition="center"
//                 filter="blur(10px)" // Apply blur effect
//                 ml="350px" // Margin to match the sidebar width
//             >
//                 <Flex flex="1" p={5} maxW="2000px" mx="auto">
//                     {columns.map((column, columnIndex) => (
//                         <Flex
//                             key={columnIndex}
//                             direction="column"
//                             flex="1"
//                             marginLeft={columnIndex !== 0 ? "20px" : "0"}
//                             gap="20px"
//                         >
//                             {column.map((filename) => (
//                                 <Box
//                                     key={filename}
//                                     position="relative"
//                                     borderRadius="10px"
//                                     overflow="hidden"
//                                     boxShadow="lg"
//                                     as={Link}
//                                     href={`/work/extend?image=${filename}`}
//                                 >
//                                     <Image
//                                         src={`/images/gallery/${filename}`}
//                                         alt={filename}
//                                         width={1200}
//                                         height={1100}
//                                         objectFit="cover"
//                                         style={{ borderRadius: "5px" }}
//                                     />
//                                     <Box
//                                         position="absolute"
//                                         top="10px"
//                                         left="10px"
//                                         bg="rgba(245, 245, 245, 0.9)"
//                                         color="black"
//                                         p="4px 10px"
//                                         borderRadius="5px"
//                                         boxShadow="sm"
//                                     >
//                                         <Text fontSize="sm">Lorem Ipsum</Text>
//                                     </Box>
//                                 </Box>
//                             ))}
//                         </Flex>
//                     ))}
//                 </Flex>
//             </Box>
//         </Flex>
//     );
// };

// export default Work;

"use client";
import Image from "next/image";
import { Box, Text, Flex } from "@chakra-ui/react";
import Sidebar from "../components/sidebar";
import Link from "next/link";
import { useGalleryImages } from "../components/gallery";

const Work = () => {
    const filenames = useGalleryImages('work');

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
        <Flex>
            {/* Content container with blurred background image */}
                {/* Foreground content */}
                <Flex
                    flex="1"
                    p={5}
                    maxW="2000px"
                    mx="auto"
                    position="relative"
                    zIndex="2"
                >
                    {columns.map((column, columnIndex) => (
                        <Flex
                            key={columnIndex}
                            direction="column"
                            flex="1"
                            marginLeft={columnIndex !== 0 ? "20px" : "0"}
                            gap="20px"
                        >
                            {column.map((filename) => (
                                <Box
                                    key={filename}
                                    position="relative"
                                    borderRadius="10px"
                                    overflow="hidden"
                                    boxShadow="lg"
                                    as={Link}
                                    href={`/work/extend?image=${filename}`}
                                >
                                    <Image
                                        src={`/images/gallery/${filename}`}
                                        alt={filename}
                                        width={1200}
                                        height={1100}
                                        objectFit="cover"
                                        style={{ borderRadius: "5px" }}
                                    />
                                    <Box
                                        position="absolute"
                                        top="10px"
                                        left="10px"
                                        bg="rgba(245, 245, 245, 0.9)"
                                        color="black"
                                        p="4px 10px"
                                        borderRadius="5px"
                                        boxShadow="sm"
                                    >
                                        <Text fontSize="sm">Lorem Ipsum</Text>
                                    </Box>
                                </Box>
                            ))}
                        </Flex>
                    ))}
                </Flex>
        </Flex>
    );
};

export default Work;
