/** Objetivos
  Crie uma função construtora ou Classe Aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). 

 Passo 2 (1,5 pontos)

  Na função construtora crie o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. Crie alguns alunos para testar a sua função construtora. 

  Passo 3 (1,5 pontos)

  crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 2).

  Passo 4 (1,5 pontos)

	Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.
  Passo 5 (2 pontos)


 Passo 5 (2 pontos)

	Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.
   
  
  Passo 6 (2 pontos)

	Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não. 
   

 */

  
  function Aluno(nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
                                    //0, 1, 2 
    this.calcularMedia = function(){ 
     const soma = this.notas.reduce((notaAnterior, notaAtual) => {
      return notaAnterior + notaAtual
     }, 0);
     const media = soma / this.notas.length
     return media
    },

    this.quantidadeFaltas = function(){
      this.faltas += 1

      return this.faltas
    }
  }

let alunos = new Aluno('Andrea', 1 , [7,8,10])
// alunos.calcularMedia().toFixed(2)
// alunos.quantidadeFaltas()

let aluno = new Aluno("Lays",1 , [9,8,10])

let aluno3 = new Aluno ("Ellen", 15, [10, 10, 10])

let aluno4 = new Aluno ("Eduardo", 10,[6,7,5])

let aluno5 = new Aluno ("Raul", 5, [4,5,6])

const listaDeEstudantes = [
  alunos, aluno, aluno3, aluno4, aluno5
]

 const curso = {
  nome: '',
  notaAp: 6,
  maxFaltas: 15,
  listaDeEstudantes: listaDeEstudantes,

  adicionarAlunos: function (nome, faltas, notas){
    const aluno = new Aluno(nome, faltas, notas)
    this.listaDeEstudantes.push(aluno)
  }, 

  consultaAluno: function (nome){
    const aluno = this.listaDeEstudantes.find((aluno)=>{
      return  aluno.nome === nome
    })
     return aluno
  },

  mediaAluno: function (nome){
    let aluno = this.consultaAluno(nome)
    console.log(aluno)
    let media = aluno.calcularMedia()
    console.log(media);
    let resultado = false
    if( media >= this.notaAp && aluno.quantidadeFaltas < this.maxFaltas ){
      console.log(`O (A) Aluno(a) ${aluno.nome} foi Aprovado(a)!`);
      resultado = true
    }else if(aluno.quantidadeFaltas === this.maxFaltas && media > this.notaAp * 1.1){
      resultado = true
    }
    else{
      console.log(`O (a) ${aluno.nome} foi reprovado(a).`)
    }
    return resultado
  },

  resultado: function (){
    const aprovacao = this.listaDeEstudantes.map((aluno)=> {
      return this.mediaAluno(aluno.nome)
    })
    console.log(aprovacao)
    return aprovacao
  }

};

console.log(curso.resultado())