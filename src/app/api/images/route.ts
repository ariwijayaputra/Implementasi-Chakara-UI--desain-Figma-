import path from 'path';
import fs from 'fs/promises';

export async function getImages(directories: string[]): Promise<Record<string, string[]>> {
  try {
    const allFilenames: Record<string, string[]> = {};

    for (const directory of directories) {
      const directoryPath = path.join(process.cwd(), 'public', 'images', directory);
      const filenames = await fs.readdir(directoryPath);
      allFilenames[directory] = filenames;
    }

    return allFilenames;
  } catch (error) {
    console.error('Error reading directory:', error);
    return {};
  }
}

// src/app/api/images/[directory]/route.ts
// import { NextResponse } from 'next/server';
// import path from 'path';
// import fs from 'fs/promises';

// export async function GET(req: Request, { params }: { params: { directory: string } }) {
//   const { directory } = params;
//   const directoryPath = path.join(process.cwd(), 'public', 'images', directory);

//   try {
//     const filenames = await fs.readdir(directoryPath);
//     return NextResponse.json(filenames);
//   } catch (error) {
//     console.error('Error reading directory:', error);
//     return NextResponse.json([]);
//   }
// }
