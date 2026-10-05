const util = require('../biblioteca/util.js');

class Pessoa {
  #nome;
  #email;

  setEmail(email) {
    if (util.validarEmail(email)) {
      this.#email = email;
      return true;
    } else {
      return false;
    }
  }

  getEmail() {
    return this.#email;
  }

  setNome(nome) {
    if (nome) {
      this.#nome = nome;
      return true;
    } else {
      return false;
    }
  }

  getNome() {
    return this.#nome;
  }

  constructor(nome, email) {
    if (nome) {
      this.setNome(nome);
    }

    if (email) {
      this.setEmail(email);
    }
  }
}

module.exports = Pessoa;
