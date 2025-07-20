// Google Apps Script to handle form submissions and write to Google Sheets
// Deploy this as a web app in Google Apps Script

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet (you'll need to replace this with your actual spreadsheet ID)
    const spreadsheetId = '1yb77P9CeIgunAJ9vqEdWlm4dZIdHvBBIKu_1K0OLOyU'; // Replace with your actual spreadsheet ID
    const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
    
    // Prepare the row data
    const rowData = [
      new Date(), // Timestamp
      data.fullName,
      data.email,
      data.companyName,
      data.contact,
      data.website,
      data.trafficTypes.join(', '),
      data.dailyVolume
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Data submitted successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Handle GET requests (for testing)
  return ContentService
    .createTextOutput('Google Apps Script is running!')
    .setMimeType(ContentService.MimeType.TEXT);
}

// Function to set up the spreadsheet headers (run this once manually)
function setupSheet() {
  const spreadsheetId = "1yb77P9CeIgunAJ9vqEdWlm4dZIdHvBBIKu_1K0OLOyU"; // Replace with your actual spreadsheet ID
  const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
  
  // Set up headers
  const headers = [
    'Timestamp',
    'Full Name',
    'Email',
    'Company Name',
    'Contact (Telegram/Skype)',
    'Website',
    'Traffic Types',
    'Daily Volume'
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format headers
  sheet.getRange(1, 1, 1, headers.length)
    .setFontWeight('bold')
    .setBackground('#4285f4')
    .setFontColor('white');
} 