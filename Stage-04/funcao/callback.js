/** callback function -> é uma função passando outro paramentro dentro -> chama ela de volta*/

function sayMayName(name){
  console.log('antes de executar a função callback');
  name()

  console.log('depois de executar a função callback')
}

sayMayName(
  () => {
    console.log("Estou em uma callback");
  }
)