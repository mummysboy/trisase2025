# Google Sheets Integration Setup Guide

This guide will help you set up your form to submit data directly to a Google Sheet.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Copy the spreadsheet ID from the URL (it's the long string between `/d/` and `/edit`)
   - Example: `https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit`
   - The ID is: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`

## Step 2: Set up Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Replace the default code with the contents of `google-apps-script.js`
4. Replace `YOUR_SPREADSHEET_ID_HERE` with your actual spreadsheet ID
5. Save the project with a name like "Form Submission Handler"

## Step 3: Deploy the Script as a Web App

1. Click "Deploy" → "New deployment"
2. Choose "Web app" as the type
3. Set the following:
   - **Execute as**: "Me" (your Google account)
   - **Who has access**: "Anyone" (for public access)
4. Click "Deploy"
5. Copy the Web App URL that's generated

## Step 4: Update Your React App

1. Open `src/components/AffiliateForm.tsx`
2. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with your actual Web App URL
3. Save the file

## Step 5: Set up the Sheet Headers (One-time setup)

1. In your Google Apps Script editor, run the `setupSheet()` function manually
2. This will create the column headers in your spreadsheet

## Step 6: Test the Integration

1. Start your React app: `npm start`
2. Fill out and submit the form
3. Check your Google Sheet to see if the data appears

## Troubleshooting

### CORS Issues
If you encounter CORS errors, you may need to add this to your Google Apps Script:

```javascript
function doPost(e) {
  // Add CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type'
  };
  
  // ... rest of your code
}
```

### Permission Issues
- Make sure your Google Sheet is shared with your Google account
- Ensure the Apps Script has permission to access the spreadsheet

### Security Note
- The current setup allows anyone to submit data to your sheet
- For production use, consider adding authentication or rate limiting
- You can restrict access by changing "Who has access" to "Anyone with Google Account"

## Alternative: Environment Variables

For better security, you can use environment variables:

1. Create a `.env` file in your project root:
```
REACT_APP_GOOGLE_APPS_SCRIPT_URL=your_web_app_url_here
```

2. Update the form component to use:
```javascript
const GOOGLE_APPS_SCRIPT_URL = process.env.REACT_APP_GOOGLE_APPS_SCRIPT_URL;
```

## Data Structure

Your Google Sheet will have these columns:
- Timestamp
- Full Name
- Email
- Company Name
- Contact (Telegram/Skype)
- Website
- Traffic Types
- Daily Volume

Each form submission will create a new row with this data. 