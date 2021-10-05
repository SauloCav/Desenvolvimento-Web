module.exports = (sequelize, DataTypes) => {

  const Post = sequelize.define(
    "posts",
    {
      text: {
        type: DataTypes.TEXT,
      },
      date: {
        type: DataTypes.DATE,
      },
      time: {
        type: DataTypes.TIME,
      },
    },
    { timestamps: false }
  );

  return Post;

};
