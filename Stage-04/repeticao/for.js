/**
 * for
  A instrução for cria um loop que consiste em três expressões opcionais, dentro de parênteses e separadas por ponto e vírgula, seguidas por uma declaração ou uma sequência de declarações executadas em sequência.

  Sintaxe
  for ([inicialização]; [condição]; [expressão final])
   declaração

   break -  para a execução do loop
   continue - pula a execulção do momento
 */

  //  for(let i = 1; i <= 10; i++ ){
  //    console.log(i)
  //  }

   
   for(let n = 10; n >0; n-- ){
    if(n === 5){
      continue;
    }
    console.log(n)
  }