/*
 Cada card que se encontra do lado direito, quando selecionado, vai mudar de cor e emitir um som diferente. Os sons você pode encontrar, respectivamente, nos links abaixo:
 
 
 */

const tree = document.querySelector('.tree')
const cloud = document.querySelector('.cloud')
const popcorn = document.querySelector('.popcorn')
const fire = document.querySelector('.fire')

tree.addEventListener('click',()=>{
  tree.classList.toggle('hide')
  console.log('teste')
 })

 cloud.addEventListener('click', ()=>{
  cloud.classList.toggle('hide')
 })
 
popcorn.addEventListener("click", () => {
 popcorn.classList.toggle('hide')
 }) 

fire.addEventListener("click", () =>{
  fire.classList.toggle('hide')
})


//  document.querySelectorAll('.card').forEach(card => {
//   card.addEventListener('click', () => {
//       // remover a classe .active de todos os elementos com a classe .card
//       document.querySelectorAll('.card').forEach(card => {
//           card.classList.remove('active')
//       })
//       // adicionar a classe .active no elemento clicado
//       card.classList.add('active')
//   })



