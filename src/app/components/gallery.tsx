import { useEffect, useState } from 'react';

export const useGalleryImages = (type: string) => {
    const [filenames, setFilenames] = useState<string[]>([]);

    useEffect(() => {
        fetch(`/api/images?type=${type}`)
            .then((response) => response.json())
            .then((data) => setFilenames(data))
            .catch((error) => console.error('Error fetching images:', error));
    }, [type]);

    return filenames;
};

