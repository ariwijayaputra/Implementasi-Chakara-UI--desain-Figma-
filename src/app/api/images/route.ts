import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const imageDirectory = path.join(process.cwd(), 'public/images/gallery');
  const filenames = fs.readdirSync(imageDirectory);
  return NextResponse.json(filenames);
}
