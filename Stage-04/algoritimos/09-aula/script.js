/*
  Encontre a solução ao problema:
 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  " Paciente x pussui o IMC de: Y"

   Onde X é o nome do paciente e Y é o IMC desse paciente.
   
   Crie uma função para fazer o cálculo de IMC
 */


  let patients = [
    {
      name:"Aquiles",
      age:38,
      weight: 90,
      height: 188,
    },
    {
      name:"Benicio",
      age:37,
      weight: 80,
      height: 190,
    },
    {
     name:"Gustavo",
     age:39,
     weight: 100,
     height: 192,
    },
  ]

  function IMC(weight, height) {
    return weight / ((height/100)**2).toFixed(2)
  }

  function printPatientIMC(patient){
    return`
      Paciente ${patient.name} possui o IMC de ${IMC(patient.weight, patient.height)}
    `
  }
    
  // function printPatientIMC(patient){
  //   return `
  //     Paciente ${patient.name} possui o IMC de ${(patient.weight /((patient.height)/100)**2).toFixed(2)}   `
  // }

  for(let patient of patients){
    let IMCmessage = printPatientIMC(patient)
    alert(IMCmessage)
  }