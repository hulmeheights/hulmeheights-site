import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'Valid email required' },
        { status: 400 }
      );
    }

    // 1. Save to Supabase
    const { error: dbError } = await supabase
      .from('subscribers')
      .insert([{ email }]);

    if (dbError && dbError.code !== '23505') { // 23505 = unique violation
      console.error('Supabase error:', dbError);
      return NextResponse.json(
        { success: false, error: 'Failed to save subscriber' },
        { status: 500 }
      );
    }

    // 2. Add to Resend audience
    if (process.env.RESEND_AUDIENCE_ID) {
      await resend.contacts.create({
        email,
        audienceId: process.env.RESEND_AUDIENCE_ID,
      });
    }

    // 3. Send welcome email
    await resend.emails.send({
      from: 'Precision <hello@hulmeheights.com>',
      to: email,
      subject: 'Welcome to Precision',
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="color: #0a0a0a; font-size: 24px; margin-bottom: 20px;">You're in.</h1>
          <p style="color: #444; font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
            Weekly frameworks for clear thinking. No fluff.
          </p>
          <p style="color: #444; font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
            First email coming soon.
          </p>
          <p style="color: #666; font-size: 14px; margin-top: 30px;">- H</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json(
      { success: false, error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
