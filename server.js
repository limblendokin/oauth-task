const express = require('express');
const authRoutes = require('./routes/login'); 
const friendsRoute = require('./routes/friends');
const app = express();
//const passportConfig = require('./config/passport-config');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
//const passport = require('passport');
const cors = require('cors');

app.use(cors());

app.use(cookieSession({
    maxAge: 24*60*60*1000,
    keys: [keys.session.cookieKey]
}))

// app.use(passport.initialize());
// app.use(passport.session());

// Connection to local db 
const dbURI = 'mongodb://localhost:27017/oauth-task';
const dbConfig = {
    autoIndex: false,
    useNewUrlParser: true
}
mongoose
    .set('useUnifiedTopology', true)
    .connect(dbURI, dbConfig)
    .then(()=> console.log("MongoDB connected..."))
    .catch(err=>console.log(err));

// Routes to auth
app.use('/oauth', authRoutes);
app.use('/', friendsRoute);

// Start server
var port = 5500 || process.env.PORT;
app.listen(port, () => {
    console.log(`Server started on ${port}`);
})