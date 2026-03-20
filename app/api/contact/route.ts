import { NextRequest, NextResponse } from 'next/server';
import { createSupabaseClient } from '@/lib/supabase';

const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

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

  try {
    const supabase = createSupabaseClient();
    const { error } = await supabase
      .from('email_submissions')
      .insert({ email });

    if (error) {
      // Postgres unique constraint violation — duplicate email
      if (error.code === '23505') {
        return NextResponse.json(
          { success: true, message: 'Thank you — I already have your email.' },
          { status: 200 }
        );
      }
      throw error;
    }

    return NextResponse.json({ success: true, message: `Thanks for reaching out, ${email}.` });
  } catch {
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
