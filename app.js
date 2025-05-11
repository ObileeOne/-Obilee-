const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware for handling file uploads
const upload = multer({ dest: "uploads/" });

// In-memory storage for simplicity; in a real app, use a database
let adminCredentials = { username: "admin", password: "admin123" }; 
let aiSpamProtectionStatus = false; // AI scan initially off

// API to check if the admin is authorized
function isAdmin(req, res, next) {
  const { username, password } = req.headers; // Simulated basic auth via headers

  if (username === adminCredentials.username && password === adminCredentials.password) {
    next();
  } else {
    res.status(401).send({ message: "Unauthorized access" });
  }
}

// Route to upload theme/background image
app.post("/admin/upload-theme", isAdmin, upload.single("theme"), (req, res) => {
  if (req.file) {
    const themePath = path.join(__dirname, "uploads", req.file.filename);
    res.send({ message: "Theme uploaded successfully", themePath });
  } else {
    res.status(400).send({ message: "No file uploaded" });
  }
});

// Route to change admin credentials
app.post("/admin/change-credentials", isAdmin, (req, res) => {
  const { username, password } = req.body;
  
  if (username && password) {
    adminCredentials = { username, password };
    res.send({ message: "Admin credentials updated successfully" });
  } else {
    res.status(400).send({ message: "Invalid input" });
  }
});

// Route to toggle AI spam protection
app.post("/admin/toggle-ai-spam", isAdmin, (req, res) => {
  aiSpamProtectionStatus = !aiSpamProtectionStatus;
  res.send({ message: `AI Spam Protection ${aiSpamProtectionStatus ? "enabled" : "disabled"}` });
});

// Simulate an AI scan to detect spam
function aiSpamScan(content) {
  const spamKeywords = ["spam", "phishing", "malicious"]; // Dummy keywords

  return spamKeywords.some(keyword => content.toLowerCase().includes(keyword));
}

// API to scan and flag a user message
app.post("/admin/scan-message", isAdmin, (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).send({ message: "Message content is required" });
  }

  const isSpam = aiSpamProtectionStatus ? aiSpamScan(message) : false;
  if (isSpam) {
    res.send({ message: "Message flagged as spam" });
  } else {
    res.send({ message: "Message is clean" });
  }
});

// Route for viewing the email verification codes (dummy example)
app.get("/admin/view-verification-codes", isAdmin, (req, res) => {
  // In a real app, fetch these from a database
  const codes = ["CODE123", "CODE456", "CODE789"];
  res.send({ verificationCodes: codes });
});

// Start the server
app.listen(port, () => {
  console.log(`Admin settings server is running on port ${port}`);
});