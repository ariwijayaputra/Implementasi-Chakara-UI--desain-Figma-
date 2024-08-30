import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');

    let imagesDirectory;

    // Determine the directory based on the 'type' parameter
    if (type === 'VR') {
        imagesDirectory = path.join(process.cwd(), 'public/images/VR');
    } else {
        // Default to the 'gallery' directory if 'type' is not 'VR'
        imagesDirectory = path.join(process.cwd(), 'public/images/gallery');
    }

    // Read the filenames from the directory
    const filenames = await fs.readdir(imagesDirectory);

    // Return the filenames as a JSON response
    return NextResponse.json(filenames);
}
