// initialize app
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.set('view engine', 'pug');

// set routes
const routes = require('./routes/routes');
app.use(routes);

app.use('/static', express.static('public'));

app.listen(3000, () => {
    console.log('The application is running on localhost:3000');
});

