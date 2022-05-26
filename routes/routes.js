const express = require('express');
const router = express.Router();
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
    if (projects[req.params.id]) {
        const { id } = req.params;
        res.render('project', projects[id]);
    } else {
        const err = new Error();
        err.message = 'There is no project for the requested ID'
        err.status = 404;
        err.title = 'Project not found';
        next(err);
    }
});

module.exports = router;