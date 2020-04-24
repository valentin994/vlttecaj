const { authJwt } = require("../middleware");
const controller = require("../controllers/course.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/api/course/:id",
        controller.findOne);

    app.get(
        "/api/course",
        controller.findAll);

    app.put(
        "/api/course/:id",
        controller.updateCourse
    );

    app.post(
        "/api/course",
        controller.postCourse
    );


};
