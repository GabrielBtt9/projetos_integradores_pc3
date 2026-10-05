function mostrarDados(objeto) {
  console.log(objeto.getNome());
  console.log(objeto.getEmail());

  if (objeto instanceof Aluno) {
    console.log(objeto.getMatricula());
  }

  if (objeto instanceof Professor) {
    console.log(objeto.getDisciplina());
  }
}

const Pessoa = require('./pessoas/Pessoa.js');

const p = new Pessoa();

console.log('Pessoas:');
console.log();

p.setNome('filipe');
p.setEmail('fipinho@gmail.com');

console.log(p.getNome());
console.log(p.getEmail());

console.log('-----------------------------');

p.setNome('brito');
p.setEmail('lipe@gmail.com');

console.log(p.getNome());
console.log(p.getEmail());
console.log('-----------------------------');
console.log();

console.log();
console.log('Alunos:');
console.log();

const Aluno = require('./pessoas/Aluno.js');

const a = new Aluno();

a.setNome('gabriel');
a.setEmail('biel@gmail.com');
a.setMatricula('106706720041');

console.log(a.getNome());
console.log(a.getEmail());
console.log(a.getMatricula());
console.log('-----------------------------');

a.setNome('pedro');
a.setEmail('pedrosa@gmail.com');
a.setMatricula('106706720025');

console.log(a.getNome());
console.log(a.getEmail());
console.log(a.getMatricula());
console.log('-----------------------------');
console.log();

const Professor = require('./pessoas/Professor.js');

const pr = new Professor();

console.log('Professores: ');
console.log();

pr.setNome('saad');
pr.setEmail('saad@gmail.edu.br');
pr.setDisciplina('estrutura de dados');

console.log(pr.getNome());
console.log(pr.getEmail());
console.log(pr.getDisciplina());

console.log('-----------------------------');

pr.setNome('henrique');
pr.setEmail('rickzeira@gmail.edu.br');
pr.setDisciplina('paradigmas');

console.log(pr.getNome());
console.log(pr.getEmail());
console.log(pr.getDisciplina());
