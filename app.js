const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://root:nmvmc2rj@test-db-mongodb.ns-g6u88dqi.svc:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// 1. User Registration Endpoint
app.post('/api/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        const user = new User({ username, password });
        await user.save();

        res.status(201).json({ message: 'Registration successful', userId: user._id });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// 2. User Login Endpoint
app.post('/api/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const userInfo = {
            id: user._id,
            username: user.username,
            createdAt: user.createdAt
        };

        res.json({ message: 'Login successful', user: userInfo });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// 3. User Info by ID Endpoint
app.get('/api/users/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        
        const user = await User.findById(userId).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ user });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});