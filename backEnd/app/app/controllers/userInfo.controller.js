const db = require("../models");
const userInfo = db.userInfo
const Op = db.Sequelize.Op;


exports.findOne = (req, res) => {
    const id = req.params.id;

    userInfo.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving userInfo with id=" + id
            });
        });
};


exports.updateUserInfo = (req, res) => {
    const userId = req.params.id;

    userInfo.update(req.body, {
        where: { userId: userId }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "User information updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update User info with id=${id}. Maybe User was not found or req.body is empty!`
            });
        }
    })
        .catch(err => {
            res.status(500).send({
                message: "Error updating User with id=" + id
            });
        });
}
