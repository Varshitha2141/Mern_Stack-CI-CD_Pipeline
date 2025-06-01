const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection URI from env
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/mindcareDB";

// Connect to MongoDB
mongoose.connect(mongoURI, {
  // these options are no longer necessary in mongoose 6+
  // useNewUrlParser: true,
  // useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Simple API route
app.get('/', (req, res) => {
  res.send('Welcome to MindCare AI Backend!');
});

// Example API for chatbot (you can expand this later)
app.post('/chat', (req, res) => {
  const { message } = req.body;
  // Dummy response for now
  const reply = `You said: ${message}`;
  res.json({ reply });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
