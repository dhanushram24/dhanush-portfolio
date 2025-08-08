// EmailJS Configuration
// To set up EmailJS for real-time email sending:

// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create a new service (Gmail, Outlook, etc.)
// 3. Create an email template with these variables:
//    - {{from_name}} - Sender's name
//    - {{from_email}} - Sender's email
//    - {{subject}} - Email subject
//    - {{message}} - Email message
//    - {{to_email}} - Your email (dhanushramguttula@gmail.com)

// 4. Replace the values in contact/page.tsx:
export const emailJSConfig = {
  serviceId: 'YOUR_SERVICE_ID', // Replace with your service ID
  templateId: 'YOUR_TEMPLATE_ID', // Replace with your template ID
  publicKey: 'YOUR_PUBLIC_KEY', // Replace with your public key
};

// Example template for EmailJS:
/*
Subject: New Message from {{from_name}} - {{subject}}

You have received a new message from your portfolio contact form:

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
*/

// After setup, update the contact form with your actual credentials!
