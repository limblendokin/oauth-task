const express = require('express');
const authRoutes = require('./routes/login'); 
const friendsRoute = require('./routes/friends');
const app = express();
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());

app.use(cookieSession({
    maxAge: 24*60*60*1000,
    keys: [keys.session.cookieKey]
}))

// // Connection to local db 
// const dbURI = 'mongodb://localhost:27017/oauth-task';
// Connection to external db
const dbURI = keys.db.uri;
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
