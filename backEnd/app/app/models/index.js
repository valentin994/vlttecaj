const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Tablice u bazi
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.userInfo = require("../models/userInfo.model.js")(sequelize, Sequelize);
db.course = require("../models/course.model.js")(sequelize, Sequelize);
db.courseprogress = require("../models/courseprogress.model.js")(sequelize, Sequelize);
db.chapter = require("../models/chapter.model.js")(sequelize, Sequelize); 
db.question = require("../models/question.model.js") (sequelize, Sequelize);
db.answer = require("../models/answer.model.js") (sequelize, Sequelize);

//Veze izmedu tablica
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.courseprogress.belongsTo(db.course);
db.courseprogress.belongsTo(db.userInfo);

db.question.belongsTo(db.chapter);
db.answer.belongsTo(db.question);

db.chapter.belongsTo(db.course);

db.userInfo.belongsTo(db.user);

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
