if (localStorage.getItem('userLogado')) {
  var userValid = JSON.parse(localStorage.getItem('userLogado'));

}

window.onload = () => {
  let idParameter = new URLSearchParams(window.location.search);
  let identificador = idParameter.get('id');
  renderItems(identificador);
};

function renderItems(id) {
  // Criando o array de produtos com os produtos do banco de dados
  var ITEMS;
  axios.get('http://localhost:6789/produto/list')
  .then(response => {
    ITEMS = response.data;

    var item = ITEMS.find(item => item.produtoId == id);


    let data1 = `
    <div class="select-image">
      <div class="product_name">
        <h4>Old Fashioned</h4>
        <h1>${item.nome}</h1>
      </div>
      <img id="figura" src="/front-end/Codigo/${item.imagem}" alt="">
    </div>
    <div class="descricao">
      <h1>Descrição do produto:</h1>
      <p>${item.descricao}</p>
    </div>
    <div class="compra">
      <h1>Compra:</h1>
      <div class="prices">
      <span class="price">R$${item.preco}</span>
      </div>
      
    </div>
  `;
  document.getElementById('item').innerHTML = data1;
  });
}

const button1 = document.querySelector('.buttonmulher');
const button2 = document.querySelector('.buttonhomem');
const button3 = document.querySelector('.buttonsapato');
const popup = document.querySelector('.popup-wrapper');
const content1 = document.querySelector('.popup-content1');
const content2 = document.querySelector('.popup-content2');
const content3 = document.querySelector('.popup-content3');
const closeButton = document.querySelector('.popup-close');

button1.addEventListener('click', () => {
    event.preventDefault();
    popup.style.display = 'block';
    content1.style.display = 'block';
})
button2.addEventListener('click', () => {
    event.preventDefault();
    popup.style.display = 'block';
    content2.style.display = 'block';
})
button3.addEventListener('click', () => {
    event.preventDefault();
    popup.style.display = 'block';
    content3.style.display = 'block';
})

closeButton.addEventListener('click', () => {
    event.preventDefault();
    popup.style.display = 'none';
    content1.style.display = 'none';
    content2.style.display = 'none';
    content3.style.display = 'none';
    
})

let itemsEL = document.querySelector('.items');
let cartItems = document.querySelector('.cart_items');
let itemsNumber = document.getElementById('items_num');
let subtotalPrice = document.getElementById('subtotal_price');
let addtocart = document.querySelector('.button');


let favorito = []



//Salvar nos favoritos
document.addEventListener('DOMContentLoaded', () => {
    let idParameter = new URLSearchParams(window.location.search);
    let itemId = parseInt(idParameter.get('id'));
    const favoritos = JSON.parse(localStorage.getItem('favorito')) || [];
    const button1 = document.querySelector('.heart_button');
    const button2 = document.querySelector('.heart_button2');
  
    if (favoritos.includes(itemId)) {
      button1.style.display = 'none';
      button2.style.display = 'flex';
    } else {
      button1.style.display = 'flex';
      button2.style.display = 'none';
    }
  
    button1.onclick = function() {
      if (favoritos.includes(itemId)) {
        alert('Este item já está nos favoritos!');
      } else {
        favoritos.push(itemId);
        localStorage.setItem('favorito', JSON.stringify(favoritos));
        button1.style.display = 'none';
        button2.style.display = 'flex';
        alert('Produto salvo nos favoritos!');
      }
    };
  
    button2.onclick = function() {
      const index = favoritos.indexOf(itemId);
      if (index > -1) {
        favoritos.splice(index, 1);
        localStorage.setItem('favorito', JSON.stringify(favoritos));
        button1.style.display = 'flex';
        button2.style.display = 'none';
        alert('Produto removido dos favoritos!');
      }
    };
  });
  

var favoritos= JSON.parse(localStorage.getItem('favorito')) || [];

  

