import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET() {
    const imagesDirectory = path.join(process.cwd(), 'public/images/gallery');
    const filenames = await fs.readdir(imagesDirectory);

    return NextResponse.json(filenames);
}
