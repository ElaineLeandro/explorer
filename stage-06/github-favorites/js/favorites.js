//classe que vai conter a logica dos dados
// com os dados serão estruturados
export class Favorites{
  constructor(root){
    this.root = document.querySelector(root); 
    
    this.load()
  }
  load(){
  
    this.entries = [
      {
      login:'ElaineLeandro',
      name: 'Elaine Leandro',
      public_repos: '80',
      followers: '10000'
      },
      {
        login:'Deborah-Borges',
        name: 'Debora Borges',
        public_repos: '80',
        followers: '9000'
      },
      {
        login:'thiagoss1',
        name: 'thiagoss1',
        public_repos: '80',
        followers: '9000'
      },
    ]
    
  }
}
//classes que vai criar a visualização e eventos do HTML
export class FavoritesView extends Favorites{
  constructor(root){
    super(root)

    this.tbody = this.root.querySelector('table tbody')

    this.update()
  }

  update(){
    this.removeAllTr()
    this.entries.forEach(user => {
      const row = this.createRow()
      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt =  `Imagem de ${user.name}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers
     
      this.tbody.append(row)
    })
  }

  createRow(){
    const tr = document.createElement('tr')
    tr.innerHTML = `
      <tr>
      <td class="user">
        <img src="https://github.com/ElaineLeandro.png" alt="">
        <a href="https://github.com/ElaineLeandro" target="_blank">
          <p>Elaine Leandro</p>
          <span>elaineleandro</span>
        </a>
      </td>
      <td class="repositories">
        39
      </td>
      <td class="followers">
        9598
      </td>
      <td>
        <button class="remove">&times;</button>
      </td>
    </tr> 
    `
    return tr
  }
  removeAllTr(){
    this.tbody.querySelectorAll('tr').forEach((tr) =>{
      tr.remove()
    })
  }
}