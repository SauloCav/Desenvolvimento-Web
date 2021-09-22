const comentRepo = require("../repositories/coment-repo");

class ComentService {
  add(postId, coment) {
    return comentRepo.save(postId, coment);
  }

  getAll() {
    return comentRepo.findAll();
  }

  getById(id) {
    return comentRepo.findOne(id);
  }

}

module.exports = ComentService;
