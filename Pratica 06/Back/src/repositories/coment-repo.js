const db = require("../models");
const Coment = db.coments;

exports.save = async (postId, coment) => {
  return Coment.create({
    post_coment: coment.post_coment,
    postId: postId,
  })
    .then((result) => {
      console.log("Created coment: " + JSON.stringify(result));
      return result;
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

exports.findAll = async () => {
  const result = await Coment.findAll();
  return result;
};

exports.findOne = async (id) => {
  const result = await Coment.findOne({
    where: {
      id: id,
    },
  });
  return result;
};
