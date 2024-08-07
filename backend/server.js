// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes'); // Ensure the path is correct
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // For parsing application/json

// Routes
app.use('/api', authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
