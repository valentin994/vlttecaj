module.exports = (sequelize, Sequelize) => {
    const Courseprogress = sequelize.define("courseprogress", {
     finish:{
         type: Sequelize.BOOLEAN
     },
     progress: {
         type: Sequelize.INTEGER
     }
    });
  
    return Courseprogress;
  };