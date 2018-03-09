const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Building Express Server
const app = express();

app.use(morgan('combined')); // Morgan logs data endpoints
app.use(bodyParser.json());
app.use(cors());

// Endpoints
app.get('/status', (req, res) => {
    // REQ = request: requested data from visitor. Information about user
    // RES = response: something given to user. (webpage, JSON), In form example
    //       tell user if login/password are correct in response.
    res.send({
        message: 'hello world'
    });
});

app.post('/register', (req, res) => {
    res.send({
        // message: 'Your user was registered! Have Fun!'
        // *** Or ***
        // If we want to throw in the user email for example we could do
        message: `Hello ${req.body.email}! Your user was registered! Have Fun.`
    });
});

// Listen to the server. Running on Port 8081 unless overwritten by environment
// variables with the (proccess.env.PORT) section
app.listen(process.env.PORT || 8081);