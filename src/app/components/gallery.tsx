"use client";
import { useState, useEffect } from 'react';

export const useGalleryImages = () => {
    const [filenames, setFilenames] = useState<string[]>([]);

    useEffect(() => {
        fetch('/api/images')
            .then((response) => response.json())
            .then((data: string[]) => setFilenames(data))
            .catch((error) => console.error('Error fetching images:', error));
    }, []);

    return filenames;
};
