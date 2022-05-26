const express = require('express');
const router = express.Router();
const { projects } = require('data.json');

router.get('/', (req, res, next) => {
    res.locals.projects = projects;
    res.render('index');
});

router.get('/about', (req, res, next) => {
    res.render('about');
});

router.get('/projects/:id', (req, res, next) => {
    const { id } = req.params;
    res.render('project', projects[id]);
});

module.exports = router;