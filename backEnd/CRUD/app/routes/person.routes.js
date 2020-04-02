module.exports = app => {
    const persons = require("../controllers/person.controller")
    var router = require("express").Router();

    router.post("/", persons.create);

    router.get("/", persons.findAll);

    app.use('/api/persons', router);
}