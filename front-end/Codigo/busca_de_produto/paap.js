if (localStorage.getItem('userLogado')) {
  var userValid = JSON.parse(localStorage.getItem('userLogado'));

}

var idUserLogado = localStorage.getItem('idUserLogado');
if (idUserLogado == null) {
  //voltar para a pagina de login
  window.location.href = "/front-end/Codigo/login/login.html"
  alert("Você precisa estar logado para acessar essa página!");
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



//Salvar nos favoritos
var idUserLogado = localStorage.getItem('idUserLogado');
console.log(idUserLogado);

//Obtendo o usuario logado
axios.get(`http://localhost:6789/usuario/get/username/${idUserLogado}`)
  .then(response => {
    var array = response.data;
    var produtosCurtidos = array.produtosCurtidos;

    let idParameter = new URLSearchParams(window.location.search);
    let itemId = (idParameter.get('id'));

    const button1 = document.querySelector('.heart_button');
    const button2 = document.querySelector('.heart_button2');

    // Criando um array em que cada elemento é um produto curtido
    var produtosCurtidosArray = produtosCurtidos.split(" ");

    // Acessando cada elemento do array e verificando se o produto já está nos favoritos
    var temId = false;
    for (let i = 0; i < produtosCurtidosArray.length; i++) {
      if (produtosCurtidosArray[i] == itemId) {
        temId = true;
      }
    }

    if (temId) {
      button1.style.display = 'none';
      button2.style.display = 'flex';
    } else {
      button1.style.display = 'flex';
      button2.style.display = 'none';
    }


    //Obtendo os dados do usuario
    axios.get(`http://localhost:6789/usuario/get/username/${idUserLogado}`)
    .then(response => {
      var array = response.data;
      var id = array.id;
      var nome = array.nome;
      var username = array.username;
      var email = array.email;
      var idade = array.idade;
      var genero = array.genero;
      var senha = array.senha;

    button1.onclick = function () {
      if (temId) {
        alert('Este item já está nos favoritos!');
      } else {
        produtosCurtidosArray.push(itemId);
        var prods = "";
        prods += produtosCurtidosArray[0];
        for (let i = 1; i < produtosCurtidosArray.length; i++) {
          const element = produtosCurtidosArray[i];
          prods += " " + element;
        }
        button1.style.display = 'none';
        button2.style.display = 'flex';
        atualizarDados(id, nome, username, email, idade, genero, senha, prods);
        alert('Produto salvo nos favoritos!');
      }
    };

    button2.onclick = function () {
      if (temId) {
        //remover o produto do array
        for (let i = 0; i < produtosCurtidosArray.length; i++) {
          if (produtosCurtidosArray[i] == itemId) {
            //remover o produto do array
            produtosCurtidosArray.splice(i, 1);
            break;
          }
        }
        button1.style.display = 'flex';
        button2.style.display = 'none';
        var prods = "";
        prods += produtosCurtidosArray[0];
        for (let i = 1; i < produtosCurtidosArray.length; i++) {
          const element = produtosCurtidosArray[i];
          prods += " " + element;
        }
        atualizarDados(id, nome, username, email, idade, genero, senha, prods);
        alert('Produto removido dos favoritos!');
      } else {
        alert('Este item não está nos favoritos!');
      }
    };

    });

    function atualizarDados(id, nome, username, email, idade, genero, senha, produtosCurtidos) {
      //Atualizando os dados do usuario
      axios.post("http://localhost:6789/usuario/update", {
        id: id,
        username: username,
        nome: nome,
        email: email,
        idade: idade,
        genero: genero,
        senha: senha,
        produtosCurtidos: produtosCurtidos
      }).then(response => {
        window.location.reload();
      }).catch(error => {
        console.log(error);
      });
    }
  });





