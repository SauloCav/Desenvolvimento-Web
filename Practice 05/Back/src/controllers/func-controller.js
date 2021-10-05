const Funcionario = require("../models/func");
const FuncionarioService = require("../services/func-service");
var funcionarioService = new FuncionarioService();

exports.post = async (req, res) => {
  res.json(
    funcionarioService.add(new Funcionario(req.body.nome, req.body.cargo, req.body.data_nascimento, req.body.data_entrada)));
};

exports.get = async (req, res) => {
  res.json(await funcionarioService.getAll());
};
 
exports.getById = async (req, res) => {
  res.json(await funcionarioService.getById(req.params.id));
};

exports.getByNum = async (req, res) => {
  res.json(await funcionarioService.getByNum(req.query.num));
};

exports.getByCargo = async (req, res) => {
  res.json(await funcionarioService.getByCargo(req.query.cargo));
};

exports.put = async (req, res) => {
  res.json(
    await funcionarioService.update(
      req.params.id,
      new Funcionario(req.body.nome, req.body.cargo, req.body.data_nascimento, req.body.data_entrada)
    )
  );
};
 
exports.delete = (req, res) => {
  res.json(funcionarioService.delete(req.params.id));
};


