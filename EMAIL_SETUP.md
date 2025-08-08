# 📧 Email Setup Guide for Portfolio Contact Form

Your contact form is now working! Here's how to enable **real email sending**:

## 🔧 Current Status

✅ **Contact form API is working**
✅ **Messages are logged in terminal** (check your dev server console)
✅ **Real-time status updates work**
❌ **Email sending is disabled** (need to configure)

## 🚀 Quick Setup to Receive Real Emails

### Step 1: Enable Gmail App Password
1. **Go to your Google Account**: https://myaccount.google.com/
2. **Click "Security"** in the left sidebar
3. **Enable 2-Step Verification** (if not already enabled)
4. **Go to App Passwords**: https://myaccount.google.com/apppasswords
5. **Generate app password** for "Mail"
6. **Copy the 16-character password** (like: abcd efgh ijkl mnop)

### Step 2: Update Environment Variables
Open `.env.local` and update these values:

```bash
# Replace with your Gmail and the app password from Step 1
GMAIL_USER=dhanushramguttula@gmail.com
GMAIL_APP_PASSWORD=abcd-efgh-ijkl-mnop

# Set this to 'true' to enable real email sending
ENABLE_EMAIL_SENDING=true
```

### Step 3: Restart Development Server
```bash
npm run dev
```

That's it! 🎉

## 📧 What Happens When Someone Contacts You

1. **User fills the form** and clicks "Send Message"
2. **Form shows loading** with spinner
3. **Email is sent** to dhanushramguttula@gmail.com
4. **User sees success message**
5. **You receive a formatted email** with:
   - Contact person's name & email
   - Subject line
   - Full message
   - Timestamp

## 🔍 Testing the Setup

1. **Fill out your own contact form**
2. **Check the terminal** for log messages
3. **Check your Gmail inbox** for the email
4. **Verify success message** appears in the form

## 🛠️ Troubleshooting

### "Failed to send message" error?
- Check your app password is correct
- Verify `ENABLE_EMAIL_SENDING=true` in `.env.local`
- Restart the development server
- Check terminal for error details

### Gmail says "Less secure app access"?
- Use **App Password** instead of regular password
- Enable 2-Step Verification first

### Still not working?
- Check the terminal logs for detailed error messages
- Verify your `.env.local` file is in the root directory
- Make sure there are no extra spaces in the environment variables

## 🎯 Current Demo Mode

When email sending is **disabled**, the form will:
- ✅ Log messages to terminal console
- ✅ Show "Message received!" success message
- ✅ Clear the form
- ❌ Not send actual emails

## 🔐 Security Notes

- ✅ Never commit `.env.local` to Git (it's in `.gitignore`)
- ✅ App passwords are safer than regular passwords
- ✅ Environment variables are server-side only
- ✅ Contact form has basic validation

Your contact form is ready to receive real messages! 🚀
