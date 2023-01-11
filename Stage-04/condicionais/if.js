/**
 * **if...else**

  A condicional **if** é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de **else**.

  ## [Sintaxe](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else#sintaxe)

  `if (condição) afirmação1 [else afirmação2]`
 */
 
  //Exemplo - 01
   //let temperature = 37.4
  // if(temperature >= 37) {
  //   console.log("Febre");

  // }else{
  //     console.log("Saudável")
  // }

  //Exemplo - 02
  // let temperature = 37.4
  // if(temperature >=37.5){
  //   console.log("Febre alta");
  // }else if(temperature < 37.5 && temperature >=37){
  //   console.log('Febre moderada ')
  // }else{
  //   console.log('Saudável')
  // }

  //Exemplo - 03  
  let temperature = 36
  let highTemperature = temperature >=37.5
  let mediumTemperature = temperature < 37.5 && temperature >= 37
  if(highTemperature){
    console.log("Febre alta");
  }else if(mediumTemperature){
    console.log('Febre moderada ')
  }else{
    console.log('Saudável')
  }
  