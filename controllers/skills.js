const skillDB = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
}

function index(req, res, next) {
    res.render('skills/index', {
        skills: skillDB.getAll()
    })
}

function show(req, res, next) {
    res.render('skills/show', {
        skill: skillDB.getOne(req.params.id)
    })
}

function newSkill(req, res) {
    res.render('skills/new');
}

function create(req, res) {
    skillDB.create(req.body);
    res.redirect('/skills');
}