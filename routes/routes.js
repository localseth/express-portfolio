// Use Express and set up router
const express = require('express');
const router = express.Router();

// Deconstruct object data to use projects as a variable
const { projects } = require('../data');

router.get('/', (req, res, next) => {
    console.log('home route called');
    res.locals.projects = projects;
    res.render('index', projects);
});

router.get('/about', (req, res, next) => {
    res.render('about');
});

router.get('/projects')

router.get('/projects/:id', (req, res, next) => {
    console.log(`Project ${req.params.id} has been called`);
    // render project if the id paramater is not 'undefined'
    if (projects[req.params.id]) {
        const { id } = req.params;
        res.render('project', projects[id]);
    } else {
        // throw an error if id paramater is 'undefined'
        const err = new Error();
        err.message = 'There is no project for the requested ID'
        err.status = 404;
        err.title = 'Project not found';
        next(err);
    }
});

module.exports = router;