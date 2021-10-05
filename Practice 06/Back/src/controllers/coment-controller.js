const Coment = require("../domain/coment");
const ComentService = require("../services/coment-service");
var comentService = new ComentService();

exports.get = async (req, res) => {
  res.json(await comentService.getAll());
};

exports.getById = async (req, res) => {
  res.json(await comentService.getById(req.params.id));
};

exports.post = async (req, res) => {
  res.json(
    await comentService.add(
      req.body.postId,
      new Coment(req.body.post_coment)
    )
  );
};
