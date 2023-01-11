/**

💡 Principais pontos abordados nesse desafio:

- Estrutura de dados com objetos;
- Estrutura de repetição;
- Criação de funções;
- Operadores comparativos;


Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

O resultado final desse desafio deve ser algo em torno de:

*/


const students = [
{
  name: "Asli",
  firstNote: 4 ,
  secondNote: 5
},
{
  name: "Aquiles",
  firstNote: 6,
  secondNote: 7,
},
{
  name: "Benicio",
  firstNote: 8 ,
  secondNote: 9,
},
]

function average (firstNote, secondNote) {
  return (Number(firstNote) + Number(secondNote)/2)
}


for (let mediaForcontest of students) {
    let result = average(mediaForcontest.firstNote, mediaForcontest.secondNote)
    if(result >= 7){
      alert(`A média do(a) aluno(a) ${mediaForcontest.name} é: ${result} \n Parabéns, ${mediaForcontest.name}! Você foi aprovado(a) no concurso!`)
    }else{
      alert(`A média do(a) aluno(a) ${mediaForcontest.name} é: ${result} \n Não foi desta vez, ${mediaForcontest.name}!Tente novamente! `)
    }

 }