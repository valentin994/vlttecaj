module.exports = (sequelize, Sequelize) => {
    const Chapter = sequelize.define("chapter", {
     name:{
         type: Sequelize.STRING
     },
    });
  
    return Chapter;
  };