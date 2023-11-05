const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();


const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const expressSession = require('express-session');

// Import the User model
const User = require('./user'); // Update the path as needed

// Initialize Passport
app.use(expressSession({ secret: 'your_secret_key', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
// Use Passport with your User model (assuming you have one)
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());






const corsOptions = {
    origin: 'http://localhost:3000', // Allow only this origin
    methods: 'GET, POST', // Allow these methods
    allowedHeaders: 'Content-Type', // Allow these headers
    // ... (other configurations)
};




app.use(cors(corsOptions));
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/registrationDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Create a Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    occupation: String
});

// Create a Model
const User = mongoose.model('User', userSchema);

// POST endpoint for user registration
app.post('/register', async (req, res) => {
    const { name, email, occupation } = req.body;

    // Save the data to MongoDB
    const newUser = new User({ name, email, occupation });

    try {
        await newUser.save();
        res.send('Registration Successful');
    } catch (err) {
        console.error(err);
        res.status(500).send('Registration Failed');
    }
});

// GET endpoint to fetch the list of registered users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find(); // Fetch all users from the database
        res.json(users); // Send the list of users as JSON response
    } catch (err) {
        console.error(err);
        res.status(500).send('Failed to fetch users');
    }
});

// Add this route to your Express app
app.get('/admin/login', (req, res) => {
    res.sendFile(__dirname + '/admin-login.html'); // Provide the path to your HTML file
    res.redirect('/admin-login.html');
});

app.post('/admin/login',
    passport.authenticate('local', {
        successRedirect: '/admin/users',  // Redirect to admin panel on success
        failureRedirect: '/admin/login',  // Redirect back to login page on failure
    })
);

app.get('/admin/users', requireAdmin, async (req, res) => {
    try {
        const users = await User.find();
        res.render('admin-panel', { users }); // Render the admin panel page
    } catch (err) {
        console.error(err);
        res.status(500).send('Failed to fetch users');
    }
});


app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});
