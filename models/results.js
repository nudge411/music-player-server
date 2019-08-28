module.exports = (sequelize, DataTypes) => {
  const Results = sequelize.define(
    "Results",
    {
      problem_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      answer: {
        type: DataTypes.TEXT,
        allowNull: false
      },

      result: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci"
    }
  );
  return Results;
};
