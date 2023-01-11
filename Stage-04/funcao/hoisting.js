/*Function hoisting
  Quando fazer uma função  de uma maneira de expreção ela não sofre elevação.

  const sayMayName = function(){
  console.log('Ella')
}

*/

//função declaration
sayMayName()

function sayMayName(){
  console.log('Ella')
}

