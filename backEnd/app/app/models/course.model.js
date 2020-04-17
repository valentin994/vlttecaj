module.exports = (sequelize, Sequelize) => {
    const Course = sequelize.define("course", {
      title: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.INTEGER
      },
      version: {
        type: Sequelize.FLOAT
      },
      progLang:{
          type: Sequelize.STRING
      },
      description:{
          type: Sequelize.STRING
      },
      published:{
          type: Sequelize.BOOLEAN
      },
      price:{
          type: Sequelize.FLOAT
      }
    });
  
    return Course;
  };