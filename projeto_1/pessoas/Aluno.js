const Pessoa = require('./Pessoa.js');
const util = require('../biblioteca/util.js');

class Aluno extends Pessoa {
  #matricula;

  setMatricula(matricula) {
    if (util.validarMatricula(matricula)) {
      this.#matricula = matricula;
      return true;
    } else {
      return false;
    }
  }

  getMatricula() {
    return this.#matricula;
  }

  constructor(nome, email, matricula) {
    super(nome, email);
    this.setMatricula(matricula);
  }
}

module.exports = Aluno;
