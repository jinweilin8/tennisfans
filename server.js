const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 8888;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
