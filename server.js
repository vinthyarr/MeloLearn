// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve home1.html initially
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home1.html'));
});

// Route to handle POST request from the home page when "Explore Our Music" button is clicked
app.post('/explore-music', (req, res) => {
  // Redirect to the login page
  res.redirect('/login');
});

// Route to serve login.html page
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Route to handle login form submission
app.post('/login', (req, res) => {
  // Handle login logic here
  // For demonstration purposes, let's assume a successful login
  const username = req.body.username; // Assuming input fields have "name" attributes set
  const password = req.body.password;

  // Here you would typically perform authentication (e.g., check credentials against a database)
  // For now, let's assume a successful login for any username and password combination
  // Replace this logic with your actual authentication mechanism

  // Redirect user to choice page after successful login
  res.redirect('/choice');
});

// Route to serve choice.html page after successful login
app.get('/choice', (req, res) => {
  // Serve choice.html page
  res.sendFile(path.join(__dirname, 'public', 'choice.html'));
});

// Route to handle learn button click
app.get('/learn', (req, res) => {
  // Redirect user to lectures page after selecting "learn"
  res.redirect('/lectures');
});

// Route to handle create button click
app.get('/create', (req, res) => {
  // Redirect user to tools page after selecting "create"
  res.redirect('/tools');
});

// Route to serve tools.html page after clicking "Create" button
app.get('/tools', (req, res) => {
  // Serve page containing tools here
  res.sendFile(path.join(__dirname, 'public', 'tools.html'));
});

// Route to serve lectures page after successful login
app.get('/lectures', (req, res) => {
  // Serve page containing lectures here
  res.sendFile(path.join(__dirname, 'public', 'lecture.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});






