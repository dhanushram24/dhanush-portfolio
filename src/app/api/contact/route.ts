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

    // Log the message (you can see this in the terminal)
    console.log('📧 New contact form submission:');
    console.log('-----------------------------------');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
    console.log(`Time: ${new Date().toISOString()}`);
    console.log('-----------------------------------');

    // Check if email sending is enabled
    const enableEmailSending = process.env.ENABLE_EMAIL_SENDING === 'true';
    
    if (enableEmailSending && process.env.GMAIL_APP_PASSWORD) {
      try {
        // Create transporter
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
          },
        });

        // Email content
        const mailOptions = {
          from: process.env.CONTACT_EMAIL_FROM,
          to: process.env.CONTACT_EMAIL_TO,
          subject: `Portfolio Contact: ${subject}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #3b82f6;">New Portfolio Contact Message</h2>
              
              <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0;">Contact Details:</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
              </div>
              
              <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
                <h3 style="margin-top: 0;">Message:</h3>
                <p style="line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
              </div>
              
              <div style="margin-top: 20px; padding: 15px; background-color: #eff6ff; border-radius: 8px;">
                <p style="margin: 0; font-size: 14px; color: #6b7280;">
                  This message was sent from your portfolio contact form on ${new Date().toLocaleString()}.
                </p>
              </div>
            </div>
          `,
          text: `
Portfolio Contact Message

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
        console.log('✅ Email sent successfully!');
        
        return NextResponse.json({
          success: true,
          message: 'Message sent successfully! I will get back to you soon.'
        });
        
      } catch (emailError) {
        console.error('❌ Email sending failed:', emailError);
        // Fall back to logging only
      }
    }

    // If email sending is disabled or failed, just log and return success
    console.log('📝 Message logged (email sending disabled)');
    return NextResponse.json({
      success: true,
      message: 'Message received! I will get back to you soon. (Currently in demo mode - check terminal for logged message)'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
