const postRepo = require("../repositories/post-repo");

class PostService {
  add(post) {
    return postRepo.save(post);
  }

  getAll() {
    return postRepo.findAll();
  }

  getById(id) {
    return postRepo.findOne(id);
  }

  //getByNameAndPrice(name, price) {
  //  return productRepo.findByNameAndPrice(name, price);
  //}

}

module.exports = PostService;
