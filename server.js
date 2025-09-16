const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/department-website', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log('MongoDB Connection Error:', err));

// Routes (to be implemented)
app.use('/api/auth', require('./server/routes/auth'));
app.use('/api/attendance', require('./server/routes/attendance'));
app.use('/api/notices', require('./server/routes/notices'));
app.use('/api/resources', require('./server/routes/resources'));
app.use('/api/faculty', require('./server/routes/faculty'));
app.use('/api/timetable', require('./server/routes/timetable'));
app.use('/api/alumni', require('./server/routes/alumni'));
app.use('/api/placement', require('./server/routes/placement'));

// Serve React app for any other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT} to view the website`);
}); 