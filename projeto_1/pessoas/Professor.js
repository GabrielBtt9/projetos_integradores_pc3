const Pessoa = require('./Pessoa.js');

class Professor extends Pessoa {
  #disciplina;

  setDisciplina(disciplina) {
    if (disciplina) {
      this.#disciplina = disciplina;
      return true;
    } else {
      return false;
    }
  }

  getDisciplina() {
    return this.#disciplina;
  }

  setEmail(email) {
    if (email && email.endsWith('.edu.br')) {
      return super.setEmail(email);
    } else {
      console.log("o email do professor deveria terminar com '.edu.br");
      return false;
    }
  }

  constructor(nome, email, disciplina) {
    super(nome, email);
    this.setDisciplina(disciplina);
  }
}

module.exports = Professor;
