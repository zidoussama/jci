const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const authRouter = require('./router/authrouter');
const cronJob = require('./router/CroneRouter');

const app = express();

const MONGO_URL = process.env.MONGO_URL;

// Middleware
app.use(cors());
app.use(express.json());
mongoose.set('strictQuery', true);
mongoose.connect(MONGO_URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

app.use('/api', authRouter)
app.use('/api', cronJob)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
