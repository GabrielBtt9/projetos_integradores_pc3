const validarEmail = function (email) {
  if (
    (email.includes('@') && email.endsWith('.com')) ||
    email.endsWith('.edu.br')
  ) {
    return true;
  } else {
    return false;
  }
};

const validarMatricula = function (matricula) {
  if (matricula) {
    return true;
  } else {
    return false;
  }
};

const validarCPF = function (cpf) {
  if (cpf) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  validarEmail,
  validarMatricula,
  validarCPF,
};
