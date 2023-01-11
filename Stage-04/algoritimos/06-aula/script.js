/**
 * Encontre a solução ao problema:
 * 
 * Jogo de advinhação
 * 
 * Apresente a mensagem ao usuário:
 * "Advinhe o número que estou pensando? Está entre 0 e 10"
 *
 * Crie um lógica para gerar um número aleatório 
 * e verificar se o número digitado é o mesmo que aleatório gerado pelo sistema.
 * 
 * Enquanto o usúario não adivinar o número, mostra a mensagem:
 * "Erro, tente novamente:"
 * 
 * Caso o usúario acerte o número, apresentar a mensagem:
 * "Parabéns! Você advinhou o número em x tentativas"
 * 
 * Substitua o "x" da mensagem, pelo número de tentativas
 * 
 * +
 * 
 */

let result = prompt("Advinhe o número que estou pensando? Está entre 0 e 10")

let xAttempts = 1;

const randomNumber = Math.round(Math.random() * 10)

while(Number(result) != randomNumber) {
  result = prompt("Erro, tente novamente:")
  xAttempts++
}

alert(`Parabéns! O número que eu pensei foi ${randomNumber} e Você advinhou o número em ${xAttempts} tentativa`)