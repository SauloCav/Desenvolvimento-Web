module.exports = (sequelize, DataTypes) => {

  const Coment = sequelize.define(
    "coments",
    {
      post_coment: {
        type: DataTypes.TEXT,
      },
    },
    { timestamps: false }
  );

  return Coment;
  
};
