/*
  Encontre a solução ao problema:
 
 Crie uma lista de pacientes 
 
   Cada paciente dentro da lista, deverá conter
   nome 
   idade
   peso 
   altura

   Escrever uma lista contendo o nome dos pacientes
 */


  let patients = [
    {
      name:"Aquiles",
      age:38,
      Weight: 90,
      height: 188,
    },
    {
      name:"Benicio",
      age:37,
      Weight: 80,
      height: 190,
    },
    {
     name:"Gustavo",
     age:39,
     Weight: 100,
     height: 192,
    },
  ]


  patientsNames=[]
  //Existem o for.of

  for(let patient of patients) {
    patientsNames.push(`Nome do paciente: ${patient.name} a idade em nosso banco: ${patient.age} o peso atual é: ${patient.Weight} e a altura: ${patient.height}`) 
  }
  // for (let index = 0; index < patients.length; index++) {
  //   patientsNames[index] = patients[index].name
  // }

  alert(patientsNames)