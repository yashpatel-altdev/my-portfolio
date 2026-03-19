import { NextRequest, NextResponse } from 'next/server';
import { Client, Databases, ID } from 'appwrite';

const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

function createAppwriteClient() {
  const endpoint = process.env.APPWRITE_ENDPOINT;
  const project = process.env.APPWRITE_PROJECT;

  if (!endpoint || !project) {
    throw new Error('Appwrite environment variables are not configured.');
  }

  const client = new Client().setEndpoint(endpoint).setProject(project);
  return new Databases(client);
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid request body.' }, { status: 400 });
  }

  const email = (body as Record<string, unknown>)?.email;

  if (!email || typeof email !== 'string') {
    return NextResponse.json({ success: false, message: 'Please enter your email.' }, { status: 400 });
  }

  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { success: false, message: 'Please enter a valid email address.' },
      { status: 400 }
    );
  }

  const databaseId = process.env.APPWRITE_DATABASE_ID;
  const collectionId = process.env.APPWRITE_COLLECTION_ID;

  if (!databaseId || !collectionId) {
    return NextResponse.json(
      { success: false, message: 'Server configuration error. Please try again later.' },
      { status: 500 }
    );
  }

  try {
    const databases = createAppwriteClient();
    await databases.createDocument(databaseId, collectionId, ID.unique(), { email_id: email });
    return NextResponse.json({ success: true, message: `Thanks for reaching out, ${email}.` });
  } catch (error: unknown) {
    const appwriteError = error as { code?: number };
    if (appwriteError.code === 409) {
      return NextResponse.json(
        { success: true, message: 'Thank you — I already have your email.' },
        { status: 200 }
      );
    }
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
