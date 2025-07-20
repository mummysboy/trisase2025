# EmailJS Setup Guide

This guide will help you set up email notifications using EmailJS.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account
5. Copy the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Set up your template with these variables:
   - `{{to_email}}` - Recipient email
   - `{{to_name}}` - Recipient name
   - `{{from_name}}` - Sender name
   - `{{from_email}}` - Sender email
   - `{{company_name}}` - Company name
   - `{{contact_info}}` - Contact info
   - `{{website}}` - Website
   - `{{traffic_types}}` - Traffic types
   - `{{daily_volume}}` - Daily volume
   - `{{submission_date}}` - Submission date
   - `{{message}}` - Full message

4. Copy the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., `user_def456`)

## Step 5: Update Your React App

Replace these lines in `src/components/AffiliateForm.tsx`:
```javascript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
```

With your actual values:
```javascript
const EMAILJS_SERVICE_ID = 'service_abc123';
const EMAILJS_TEMPLATE_ID = 'template_xyz789';
const EMAILJS_PUBLIC_KEY = 'user_def456';
```

## Step 6: Switch to Real Mode

Change this line:
```javascript
const USE_MOCK = true;
```

To:
```javascript
const USE_MOCK = false;
```

## Step 7: Test the Integration

1. Submit your form
2. Check your email at `isaac@tris.com`
3. You should receive a formatted email with all the form data

## Email Template Example

```
Subject: New Affiliate Application from {{from_name}}

Hi {{to_name}},

You have received a new affiliate application:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company_name}}
Contact: {{contact_info}}
Website: {{website}}
Traffic Types: {{traffic_types}}
Daily Volume: {{daily_volume}}

Submitted on: {{submission_date}}

Full Details:
{{message}}

Best regards,
Your Website
```

## Features

✅ **Direct email sending** from your website
✅ **Professional email templates**
✅ **No server setup required**
✅ **Free tier available** (200 emails/month)
✅ **Reliable delivery**
✅ **Spam protection**

## Troubleshooting

- Make sure all IDs are correct
- Check that your email service is connected
- Verify your template variables match the code
- Test with a small template first 