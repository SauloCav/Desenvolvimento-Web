const funcionariosRepo = require("../repositories/func-repo");

class FuncionarioService {
  
    add(funcionario) {
      return funcionariosRepo.save(funcionario);
    }
  
    getAll() {
      return funcionariosRepo.findAll();
    }
    
    getById(id) {
      return funcionariosRepo.findOne(id);
    }

    getByNum(num) {
      return funcionariosRepo.findByNum(num);
    }

    getByCargo(cargo) {
      return funcionariosRepo.findByCargo(cargo);
    }
   
    update(id, funcionario) {
      return funcionariosRepo.update(id, funcionario);
    }
   
    delete(id) {
      return funcionariosRepo.delete(id);
    }

}
  
module.exports = FuncionarioService;
 