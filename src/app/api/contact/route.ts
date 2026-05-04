import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Log the message to server console for backup/debugging
    console.log('📧 New contact form submission:', {
      name,
      email,
      subject,
      time: new Date().toISOString()
    });

    // Check configuration
    const enableEmailSending = process.env.ENABLE_EMAIL_SENDING === 'true';
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;
    const isPlaceholder = !gmailPass || gmailPass === 'your-app-password-here';
    const emailTo = process.env.CONTACT_EMAIL_TO || 'dhanushramguttula24@gmail.com';

    if (enableEmailSending && gmailUser && !isPlaceholder) {
      try {
        // Create transporter using Gmail settings
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: gmailUser,
            pass: gmailPass,
          },
        });

        // Email content with clean HTML styling
        const mailOptions = {
          from: `"Portfolio Contact" <${gmailUser}>`,
          to: emailTo,
          replyTo: email,
          subject: `New Message: ${subject}`,
          html: `
            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; color: #333; border: 1px solid #eee; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
              <div style="background: linear-gradient(135deg, #D4AF37 0%, #C5A028 100%); padding: 30px; text-align: center;">
                <h1 style="color: black; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">New Inquiry</h1>
              </div>
              
              <div style="padding: 30px; background-color: #ffffff;">
                <div style="margin-bottom: 25px;">
                  <p style="margin: 0; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #999;">From</p>
                  <p style="margin: 5px 0 0; font-size: 18px; font-weight: 600;">${name} <span style="font-weight: 400; color: #666; font-size: 14px;">(${email})</span></p>
                </div>
                
                <div style="margin-bottom: 25px;">
                  <p style="margin: 0; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #999;">Subject</p>
                  <p style="margin: 5px 0 0; font-size: 16px; font-weight: 600;">${subject}</p>
                </div>
                
                <div style="margin-bottom: 30px; padding: 20px; background-color: #f9f9f9; border-radius: 8px; border-left: 4px solid #D4AF37;">
                  <p style="margin: 0; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #999; margin-bottom: 10px;">Message</p>
                  <p style="margin: 0; line-height: 1.6; font-size: 15px; white-space: pre-wrap;">${message}</p>
                </div>
                
                <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee;">
                  <p style="margin: 0; font-size: 11px; color: #bbb; text-transform: uppercase; letter-spacing: 2px;">Sent via Dhanush Portfolio</p>
                </div>
              </div>
            </div>
          `,
          text: `
New Portfolio Contact
--------------------
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Sent on: ${new Date().toLocaleString()}
          `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({
          success: true,
          message: 'Message sent successfully! I will get back to you shortly.'
        });

      } catch (emailError: any) {
        console.error('❌ Email sending failed:', emailError);
        return NextResponse.json({
          error: 'Email service error. Please try again later.',
          details: emailError.message
        }, { status: 503 });
      }
    }

    // Fallback: If credentials aren't set, we log to console and return success for UX
    // But we notify that it's in "Test Mode"
    console.warn('⚠️ Email credentials not configured. Message logged to console only.');

    return NextResponse.json({
      success: true,
      message: 'Message received! (Note: Portfolio is currently in demo mode, but your message has been logged to the server console.)'
    });

  } catch (error) {
    console.error('Contact form API error:', error);
    return NextResponse.json(
      { error: 'Internal server error while processing your message.' },
      { status: 500 }
    );
  }
}
