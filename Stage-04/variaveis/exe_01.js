// /*✍🏻 1. Declare uma variável de nome weigth*/

// const weight

// /*✍🏻 2. Que tipo de dado é a variável acima?*/

// console.log(typeof weight) //undefined

// /*✍🏻 3. Declare uma variável e atribua valores para cada um dos dados

//   name: String
//   age: Number
//   starts: Number (float)
//   isSubscribed: Boo
// */

// const name= "Asli"
// const age= 2
// const starts= 1.5
// const isSubscribed= false

// console.log(`Meu nome ${name} tenho ${age} e começo no berçario ${starts} é ${isSubscribed} `)


/*✍🏻 4. A variavel student abaixo é de que tipo de dados?
      Resposta Objeto

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 mostre no console a seguinte menagem:
    <name> de idade <age> pesa <weight> kg
*/

let student = {
  nameOne: "Miguel",
  age: 15,
  weight: 58.6,
  isSubscribed: true
}

// console.log(`Meu nome é ${student.nameOne} de idade ${student.age} peso ${student.weight}`)

/**✍🏻 5.  Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio.* */

// let students = []

/**✍🏻 6.  Reatribuir valor variável acima, colocando dentro dela objeto student da questão 4.(Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array) */

let students = [
  student 
]

// console.log(students)

/**✍🏻 7. Coloque no console o valor da posição zero do Array acima*/

// console.log(students[0])

/**✍🏻 8. Crie um novo student e coloque na posição 1 do Array students */

const studentTwo = {
  nameTwo: 'Aquiles',
  ageTwo: 12,
  weight: 45.5,
  isSubscribed: false,

}

students = [
  student,
  studentTwo
]

students[1] = studentTwo
console.log(students)