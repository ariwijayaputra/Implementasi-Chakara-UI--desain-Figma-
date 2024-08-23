"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Box, Text, Flex  } from "@chakra-ui/react";
import Sidebar from "../components/sidebar";
import Link from 'next/link';

const Work = () => {
    const [filenames, setFilenames] = useState<string[]>([]);

    useEffect(() => {
        fetch('/api/images')
            .then((response) => response.json())
            .then((data) => setFilenames(data))
            .catch((error) => console.error('Error fetching images:', error));
    }, []);

    // Divide images into three columns
    const columnCount = 3;
    const columns = Array.from({ length: columnCount }, () => []);

    filenames.forEach((filename, index) => {
        columns[index % columnCount].push(filename);
    });

    return (
        <Flex direction="row" height="100vh">
            <Sidebar />
            <Flex flex="1" p={5} maxW="2000px" mx="auto" ml="400px">
                {columns.map((column, columnIndex) => (
                    <Flex
                        key={columnIndex}
                        direction="column"
                        flex="1"
                        marginLeft={columnIndex !== 0 ? '20px' : '0'}
                        gap="20px">
                        {column.map((filename) => (
                            <Link key={filename} href={`/gallery/${filename}`} passHref>
                                <Box position="relative" borderRadius="10px" overflow="hidden" boxShadow="lg" as="a">
                                    <Image
                                        src={`/images/gallery/${filename}`}
                                        alt={filename}
                                        width={1200}
                                        height={1100}
                                        objectFit="cover"
                                        style={{ borderRadius: '5px' }}
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
                            </Link>
                        ))}
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
};

export default Work;
