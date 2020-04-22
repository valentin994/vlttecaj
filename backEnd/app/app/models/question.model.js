module.exports = (sequelize, Sequelize) => {
    const Question = sequelize.define("question", {
     courseText:{
         type: Sequelize.STRING
     },
     questionText: {
         type: Sequelize.STRING
     }
    });
  
    return Question;
  };