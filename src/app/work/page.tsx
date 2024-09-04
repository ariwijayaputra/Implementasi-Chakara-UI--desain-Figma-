// "use client";
// import Image from "next/image";
// import { Box, Text, Flex } from "@chakra-ui/react";
// import Link from "next/link";
// import { useGalleryImages } from "../components/gallery";

// const Work = () => {
//     const filenames = useGalleryImages('work');

//     // Divide images into columns
//     const columnCount = [1, 2, 3]; // Responsive column count: 1 on small, 2 on medium, 3 on large
//     const columns: string[][] = Array.from(
//         { length: columnCount[columnCount.length - 1] },
//         () => [] as string[]
//     );

//     filenames.forEach((filename, index) => {
//         columns[index % columnCount[columnCount.length - 1]].push(filename);
//     });

//     return (
//         <Flex direction={['column', 'row']} wrap="wrap" justify="center">
//             {/* Foreground content */}
//             <Flex
//                 flex="1"
//                 p={5}
//                 maxW="2000px"
//                 mx="auto"
//                 position="relative"
//                 zIndex="2"
//                 direction={['column', 'row']}
//                 gap="10px"
//                 justify="center"
//                 wrap="wrap"
//             >
//                 {columns.map((column, columnIndex) => (
//                     <Flex
//                         key={columnIndex}
//                         direction="column"
//                         flex="1"
//                         marginLeft={[0, columnIndex !== 0 ? "8px" : "0"]}
//                         gap="10px"
//                         minW="300px" // Minimum width for each column to avoid shrinking too much
//                     >
//                         {column.map((filename) => (
//                             <Box
//                                 key={filename}
//                                 position="relative"
//                                 borderRadius="5px"
//                                 overflow="hidden"
//                                 boxShadow="lg"
//                                 as={Link}
//                                 href={`/work/extend?image=${filename}`}
//                                 width={["100%", "100%", "auto"]}
//                                 minW="300px" // Minimum width for each image box
//                             >
//                                 <Image
//                                     src={`/images/gallery/${filename}`}
//                                     alt={filename}
//                                     width={1200}
//                                     height={1100}
//                                     objectFit="cover"
//                                     style={{ borderRadius: "5px" }}
//                                 />
//                                 <Box
//                                     position="absolute"
//                                     top="10px"
//                                     left="10px"
//                                     bg="rgba(245, 245, 245, 1)"
//                                     color="black"
//                                     p="4px 10px"
//                                     borderRadius="5px"
//                                     boxShadow="sm"
//                                 >
//                                     <Text fontSize="sm">Lorem Ipsum</Text>
//                                 </Box>
//                             </Box>
//                         ))}
//                     </Flex>
//                 ))}
//             </Flex>
//         </Flex>
//     );
// };

// export default Work;

// src/app/work/page.tsx
import { Flex } from "@chakra-ui/react";
import { getImages } from "../api/images/route";
import ImageColumn from "../components/ImageColumn";

// Server component
export default async function Work() {
  const directories = ['gallery']; // Specify which directories you want to fetch images from
  const allFilenames = await getImages(directories);

  // Assuming you're only working with the 'gallery' directory:
  const filenames = allFilenames['gallery'] || [];

  const columnCount = [1, 2, 3];
  const columns: string[][] = Array.from(
    { length: columnCount[columnCount.length - 1] },
    () => [] as string[]
  );

  filenames.forEach((filename, index) => {
    columns[index % columnCount[columnCount.length - 1]].push(filename);
  });

  return (
    <Flex direction={['column', 'row']} wrap="wrap" justify="center">
      <Flex
        flex="1"
        p={5}
        maxW="2000px"
        mx="auto"
        position="relative"
        zIndex="2"
        direction={['column', 'row']}
        gap="10px"
        justify="center"
        wrap="wrap"
      >
        {columns.map((column, columnIndex) => (
          <ImageColumn key={columnIndex} column={column} columnIndex={columnIndex} />
        ))}
      </Flex>
    </Flex>
  );
}
