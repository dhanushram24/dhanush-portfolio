# Real-Time Contact Form Setup Guide

Your portfolio now has a sophisticated contact form with real-time messaging capabilities! Here's how to set it up:

## 🚀 Current Features

✅ **Real-time form validation**
✅ **Animated success/error messages**
✅ **Loading states with spinners**
✅ **Auto-clearing status messages**
✅ **Responsive design**
✅ **Dark/light theme support**

## 📧 EmailJS Setup (Recommended)

### Step 1: Create EmailJS Account
1. Visit [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

### Step 2: Create Email Service
1. Go to **Services** in your EmailJS dashboard
2. Click **Add Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy your **Service ID**

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template:

```
Subject: New Portfolio Message from {{from_name}}

Hi Dhanush,

You have received a new message from your portfolio:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

Best regards,
Portfolio Contact Form
```

4. Save and copy your **Template ID**

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key**

### Step 5: Update Code
In `src/app/contact/page.tsx`, uncomment and update:

```typescript
// Uncomment the import
import emailjs from '@emailjs/browser';

// Update these values in handleSubmit function
const serviceId = 'your_service_id';
const templateId = 'your_template_id';  
const publicKey = 'your_public_key';

// Uncomment the EmailJS send code
const result = await emailjs.send(serviceId, templateId, {...}, publicKey);
```

## 🔧 Alternative Setup Options

### Option 1: Discord Webhook (Backup)
1. Create a Discord server
2. Go to Server Settings → Integrations → Webhooks
3. Create a webhook and copy the URL
4. Update the webhook URL in the code

### Option 2: Custom API Endpoint
Create your own backend API:

```typescript
// In handleSubmit function
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

### Option 3: Netlify Forms (if deploying to Netlify)
Add `data-netlify="true"` to the form element.

## 🎯 Current Demo Mode

The form currently runs in **demo mode** with:
- Simulated 1.5-second sending delay
- 90% success rate simulation
- Real-time status updates
- Form clearing on success

## 🔄 Testing the Form

1. Fill out all fields
2. Click "Send Message"
3. Watch the real-time status updates:
   - Loading spinner during sending
   - Success message with green styling
   - Error handling with red styling
   - Auto-clearing messages

## 📱 Mobile Responsive

The form is fully responsive and works great on:
- ✅ Desktop computers
- ✅ Tablets
- ✅ Mobile phones
- ✅ All screen sizes

## 🎨 Theme Support

The form automatically adapts to:
- ✅ Light mode
- ✅ Dark mode
- ✅ Smooth transitions
- ✅ Consistent styling

Your contact form is now ready for real-time messaging! 🚀
