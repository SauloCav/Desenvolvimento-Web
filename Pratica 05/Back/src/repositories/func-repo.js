const pool = require("../dbs/postgres");

exports.save = async (funcionario) => {
    const result = await pool.query(
        "INSERT INTO func_info(nome, cargo, data_nascimento, data_entrada) VALUES ($1,$2, $3, $4) RETURNING *;",
        [funcionario.nome, funcionario.cargo, funcionario.data_nascimento, funcionario.data_entrada]
    );
    return result.rows[0];
};

exports.findAll = async () => {
    const result = await pool.query("SELECT * FROM func_info;");
    return result.rows;
};

exports.findOne = async (id) => {
    const result = await pool.query("SELECT * FROM func_info WHERE id=$1;", [id]);
    return result.rows[0];
};

exports.findByNum = async (num) => {
    const result = await pool.query("SELECT * FROM func_info;");
    const resul = [];
    if(num > 0){
      for(let i = 0; i < num ; i++){
        resul.push(result.rows[i]);
      }
      return resul;
    }
};
 
exports.findByCargo = async (cargo) => {
  const result = await pool.query("SELECT * FROM func_info WHERE cargo=$1;", [
    cargo]);
  return result.rows;
};
 
exports.update = async (id, funcionario) => {
  const result = await pool.query(
    "UPDATE func_info SET nome=$1, cargo=$2, data_nascimento =$3, data_entrada=$4 WHERE id=$5 RETURNING *;",
    [funcionario.nome, funcionario.cargo, funcionario.data_nascimento, funcionario.data_entrada, id]
  );
  return result.rows[0];
};
 
exports.delete = async (id) => {
  await pool.query("DELETE FROM func_info WHERE id=$1;", [id]);
};
