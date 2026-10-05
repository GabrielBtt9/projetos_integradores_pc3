import PJ from './pessoas/PJ.mjs';

import IEclss, { IEfunc, IEjson } from './objetos/IE.mjs';

const pj1 = new PJ();

pj1.setNome('Empresa Alpha');
pj1.setEmail('contato@alpha.com');
pj1.setCNPJ('12345678000199');
pj1.setRazaoSocial('Alpha Tecnologia LTDA');

const ie = new IEclss();

ie.setNumero('123456789');
ie.setEstado('SP');
ie.setDataRegistro(new Date());
ie.setPJ(pj1);

const pj2 = new PJ();

pj2.setNome('Empresa Beta');
pj2.setEmail('contato@beta.com');
pj2.setCNPJ('98765432000188');
pj2.setRazaoSocial('Beta Sistemas LTDA');

const ie1 = new IEclss();

ie1.setNumero('123456789');
ie1.setEstado('MG');
ie1.setDataRegistro(new Date());
ie1.setPJ(pj1);

const ie2 = IEfunc();

ie2.setNumero('987654321');
ie2.setEstado('SP');
ie2.setDataRegistro(new Date());
ie2.setPJ(pj2);

IEjson.setNumero('555555555');
IEjson.setEstado('RJ');
IEjson.setDataRegistro(new Date());
IEjson.setPJ(pj1);

const objetoInvalido = {
  nome: 'Empresa Inválida',
};

console.log(ie1.setPJ(pj1));
console.log(ie2.setPJ(pj2));
console.log(IEjson.setPJ(pj1));

function mostrarIE(ie) {
  console.log('=== Pessoa Jurídica ===');
  console.log();
  console.log('Nome:', ie.getPJ().getNome());
  console.log('E-mail:', ie.getPJ().getEmail());
  console.log('CNPJ:', ie.getPJ().getCNPJ());
  console.log('Razão Social:', ie.getPJ().getRazaoSocial());

  console.log();
  console.log('=== Inscrição Estadual ===');
  console.log();
  console.log('Número:', ie.getNumero());
  console.log('Estado:', ie.getEstado());
  console.log(
    'Data de Registro:',
    ie.getDataRegistro().toLocaleString('pt-BR')
  );
  console.log('Pessoa Jurídica:', ie.getPJ().getRazaoSocial());
}

mostrarIE(ie);
