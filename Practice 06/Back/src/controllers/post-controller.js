const Post = require("../domain/post");
const PostService = require("../services/post-service");
var postService = new PostService();

exports.get = async (req, res) => {
  res.json(await postService.getAll());
};

exports.getById = async (req, res) => {
  res.json(await postService.getById(req.params.id));
};

//exports.getByNameAndPrice = async (req, res) => {
//  res.json(
//  await productService.getByNameAndPrice(req.query.name, req.query.price)
//  );
//};

exports.post = async (req, res) => {
  if (req.body.text.length < 2) {
    res.status(400).send();
  } else {
    let post = await postService.add(
      new Post(req.body.text, req.body.date, req.body.time)
    );

    if (post != null) {
      res.status(201).json(post);
    } else {
      res.status(409).send();
    }
  }
};
