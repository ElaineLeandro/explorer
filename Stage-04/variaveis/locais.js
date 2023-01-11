/**Const e let são locais e só funciona no escopo onde foi criada. */

let x = 2
{
   x= 1
  console.log("> existe x antes", x)
}

console.log("> existe x depois do bloco?", x)