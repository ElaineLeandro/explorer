/**
 *  # Scope -> Escopo determina a visibilidade de alguma variável no JS.
 * 
 * Block statement
 * 
 * ```js
 *  vamos iniciar um bloco
 * {
 *   Aqui dentro é um bloco e posso colocar qualquer código 
 * }
 * 
 * O bloco, também criará um novo escopo. Chamamos de `block-scoped`


/**  Var  é global e , também local*/

console.log('> existe x antes do bloco?', x)
{
	var x = 1
}

console.log('> existe x depois do bloco?', x)
