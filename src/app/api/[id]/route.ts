import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  console.log("***********************************" + id);

  // Get the directory path of the avatar folder inside the public directory
  const directoryPath = path.join(process.cwd(), 'public', `avater/${id}`);

  try {
    // Read all files inside the avatar folder
    const files = fs.readdirSync(directoryPath);

    // Return the file names as a JSON response
    return NextResponse.json(files);
  } catch (error) {
    return NextResponse.json({ message: 'Error reading files' }, { status: 500 });
  }
}
