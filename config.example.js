// Configuration template - use this as reference for config.js
// ⚠️ DO NOT commit real secrets to GitHub
// Copy this file to config.js and fill in your real URLs

const CONFIG = {
    // Gallery Config
    // Get this from your Google Apps Script deployment URL
    // Format: https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
    galleryUrl: 'PUT YOUR GOOGLE APPS SCRIPT URL HERE',
    
    // Calendar Config
    // Title for the availability checker
    calendarTitle: "Availability Checker - Shri Krishna Mahal",
    
    // Get this from Google Calendar's "Settings > Integrate calendar > Public URL to this calendar"
    // The ICS format URL (with .ics extension)
    calendarIcsUrl: "PUT YOUR GOOGLE CALENDAR PUBLIC ICS URL HERE"
};
