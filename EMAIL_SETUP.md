# Email Notification Setup Guide

This guide will help you set up email notifications for your form using Formspree.

## Step 1: Create a Formspree Account

1. Go to [Formspree](https://formspree.io)
2. Sign up for a free account
3. Create a new form

## Step 2: Get Your Formspree Endpoint

1. In your Formspree dashboard, create a new form
2. Copy the endpoint URL (it will look like: `https://formspree.io/f/xaybzwkd`)
3. Replace `YOUR_FORMSPREE_ID` in your React app with the actual endpoint

## Step 3: Update Your React App

Replace this line in `src/components/AffiliateForm.tsx`:
```javascript
const EMAIL_ENDPOINT = 'https://formspree.io/f/YOUR_FORMSPREE_ID';
```

With your actual Formspree endpoint:
```javascript
const EMAIL_ENDPOINT = 'https://formspree.io/f/xaybzwkd'; // Replace with your actual endpoint
```

## Step 4: Configure Email Settings

1. In your Formspree dashboard, go to your form settings
2. Set the "To" email to: `isaac@tris.com`
3. Set the subject to: `New Affiliate Application`
4. Configure any other settings as needed

## Step 5: Test the Integration

1. Submit your form
2. Check your email at `isaac@tris.com`
3. You should receive a formatted email with all the form data

## Alternative: Simple Email Service

If you prefer a simpler setup, you can also use:
- **EmailJS** - Send emails directly from JavaScript
- **SendGrid** - Professional email service
- **Mailgun** - Developer-friendly email API

## Features

✅ **Instant email notifications** to isaac@tris.com
✅ **Formatted email content** with all form data
✅ **Timestamp** for each submission
✅ **No API keys required** (Formspree handles everything)
✅ **Spam protection** built-in
✅ **Free tier available** (100 submissions/month)

## Email Format

Each email will contain:
- Full Name
- Email
- Company Name
- Contact (Telegram/Skype)
- Website (if provided)
- Traffic Types
- Daily Volume
- Submission timestamp 