const db = require("../models");
const Course = db.course
const Op = db.Sequelize.Op;


exports.findOne = (req, res) => {
    const id = req.params.id;

    course.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving course with id=" + id
            });
        });
};


exports.postCourse = (req, res) => {
    const course = {
        title: req.body.title,
        level: req.body.level,
        version: req.body.version,
        progLang: req.body.progLang,
        description: req.body.description,
        published: req.body.published ? req.body.published : false,
        price: req.body.price
    }
    Course.create(course)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the course."
        });
      });
}

exports.updateCourse = (req, res) => {
    const courseId = req.params.id;

    course.update(req.body, {
        where: { id: courseId }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Course information updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Course with id=${id}. Maybe User was not found or req.body is empty!`
            });
        }
    })
        .catch(err => {
            res.status(500).send({
                message: "Error updating User with id=" + id
            });
        });
}
