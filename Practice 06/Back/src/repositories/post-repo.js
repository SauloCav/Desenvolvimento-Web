const db = require("../models");
const Post = db.posts;
const Coment = db.coments;
const { Op } = require("sequelize");

exports.save = async (post) => {
  return await Post.create({
    text: post.text,
    date: post.date,
    time: post.time,
  })
    .then((result) => {
      console.log("Created post: " + JSON.stringify(result));
      return result;
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

exports.findAll = async () => {
  const result = await Post.findAll();
  return result;
};

/*
exports.findOne = async (id) => {
  const result = await Product.findOne({
    where: {
      id: id,
    },
  });
  return result;
};
*/

exports.findOne = async (id) => {
  return await Post.findByPk(id, {
    include: [
      {
        model: Coment,
        attributes: { exclude: ["postId"] },
      },
    ],
  })
    .then((post) => {
      return post;
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

 /*exports.findByNameAndPrice = async (name, price) => {
  const result = await Product.findAll({
    where: {
      name: name,
      price: price,
    },
  });
 
  const result = await Product.findAll({
    where: {
      [Op.and]: [
        { name: name },
        {
          price: {
            [Op.gte]: price,
          },
        },
      ],
    },
  });
  

  return result;
};*/
