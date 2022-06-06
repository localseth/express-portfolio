// initialize app
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
};

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Express middleware for accessing the req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set routes
const routes = require('./routes/routes');
app.use(routes);

app.use('/static', express.static('public'));

/* ERROR HANDLERS */
// custom error
app.get('/error', (req, res, next) => {
    console.log('Custom error route called');
    const err = new Error();
    err.message = `Something went wrong! Please try again later.`
    err.status = 500;
    err.title = 'Server Error'
    throw err;
});
// 404 handler to catch undefined or non-existent route requests 
app.use((req, res, next) => {
    console.log('404 error handler called');
    const err = new Error();
    err.message = "Sorry! We couldn't find the page you were looking for."
    err.status = 404;
    err.title = 'Page Not Found'
    throw err;
});
  
// Global error handler
app.use((err, req, res, next) => {
  
    if (err) {
        console.log('Global error handler called', err);
    }
    if (err.status === 404) {
        res.status(404).render('page-not-found', { err });
    } else {
        err.message = err.message || 'A server error has occured';
        res.status(err.status || 500).render('error', { err });
    }
});

// Set port to view app
app.listen(port, () => {
    console.log(`The application is running on localhost:${port}`);
})