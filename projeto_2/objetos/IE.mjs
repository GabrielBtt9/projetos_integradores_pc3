import PJ from '../pessoas/PJ.mjs';

class IEclss {
  #numero;
  #estado;
  #dataRegistro;
  #pj;

  setNumero(numero) {
    if (numero) {
      this.#numero = numero;
      return true;
    } else {
      return false;
    }
  }

  getNumero() {
    return this.#numero;
  }

  setEstado(estado) {
    if (estado) {
      this.#estado = estado;
      return true;
    } else {
      return false;
    }
  }

  getEstado() {
    return this.#estado;
  }

  setDataRegistro(dataRegistro) {
    if (dataRegistro instanceof Date) {
      this.#dataRegistro = dataRegistro;
      return true;
    }

    return false;
  }

  getDataRegistro() {
    return this.#dataRegistro;
  }

  setPJ(pj) {
    if (pj instanceof PJ) {
      this.#pj = pj;
      return true;
    }

    return false;
  }

  getPJ() {
    return this.#pj;
  }
}

//------------------------------------------------------------

function IEfunc() {
  let numero;
  let estado;
  let dataRegistro;
  let pj;

  function setNumero(valor) {
    if (valor) {
      numero = valor;
      return true;
    } else {
      return false;
    }
  }

  function getNumero() {
    return numero;
  }

  function setEstado(valor) {
    if (valor) {
      estado = valor;
      return true;
    }

    return false;
  }

  function getEstado() {
    return estado;
  }

  function setDataRegistro(valor) {
    if (valor instanceof Date) {
      dataRegistro = valor;
      return true;
    }

    return false;
  }

  function getDataRegistro() {
    return dataRegistro;
  }

  function setPJ(valor) {
    if (valor instanceof PJ) {
      pj = valor;
      return true;
    }

    return false;
  }

  function getPJ() {
    return pj;
  }

  return {
    setNumero,
    getNumero,
    setEstado,
    getEstado,
    setDataRegistro,
    getDataRegistro,
    setPJ,
    getPJ,
  };
}

//-----------------------------------------------------------------

const IEjson = {
  numero: null,
  estado: null,
  dataRegistro: null,
  pj: null,

  setNumero(valor) {
    if (valor) {
      this.numero = valor;
      return true;
    }

    return false;
  },

  getNumero() {
    return this.numero;
  },

  setEstado(valor) {
    if (valor) {
      this.estado = valor;
      return true;
    }

    return false;
  },

  getEstado() {
    return this.estado;
  },

  setDataRegistro(valor) {
    if (valor instanceof Date) {
      this.dataRegistro = valor;
      return true;
    }

    return false;
  },

  getDataRegistro() {
    return this.dataRegistro;
  },

  setPJ(valor) {
    if (valor instanceof PJ) {
      this.pj = valor;
      return true;
    }

    return false;
  },

  getPJ() {
    return this.pj;
  },
};

export default IEclss;
export { IEfunc, IEjson };
