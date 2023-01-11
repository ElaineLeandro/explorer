/**
 * throw
  A declaração throw lança uma exceção definida pelo usuário. A execução da função atual vai parar (as instruções após o throw não serão executadas), e o controle será passado para o primeiro bloco catch na pilha de chamadas. Se nenhum bloco catch existe entre as funções "chamadoras", o programa vai terminar.
 */

  function sayMyName(name = ''){
    if(name === ''){
      throw new Error("Nome é necessaio")
    }

    console.log(name);
  }

/**try...catch
As declarações try...catch marcam um bloco de declarações para testar (try), e especifica uma resposta, caso uma exceção seja lançada. */

try{
  sayMyName('Bento')
}catch(e){
  console.log(e)
}
console.log('após ao try/catch');