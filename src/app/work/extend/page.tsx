"use client";

import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Box, Text } from "@chakra-ui/react";

const ExtendPage = () => {
    const searchParams = useSearchParams();
    const image = searchParams.get('image');

    return (
        <Box p={5}>
            {image ? (
                <>
                    <Image
                        src={`/images/gallery/${image}`}
                        alt={image}
                        width={1200}
                        height={800}
                        objectFit="cover"
                        style={{ borderRadius: '10px' }}
                    />
                    <Text fontSize="xl" mt={4}>Details about {image}</Text>
                </>
            ) : (
                <Text fontSize="xl">No image specified.</Text>
            )}
        </Box>
    );
};

export default ExtendPage;
