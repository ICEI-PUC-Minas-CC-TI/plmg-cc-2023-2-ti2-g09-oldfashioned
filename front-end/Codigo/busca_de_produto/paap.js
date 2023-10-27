if (localStorage.getItem('userLogado')) {
  var userValid = JSON.parse(localStorage.getItem('userLogado'));

  // Criar o ícone do perfil
  var novoLink = document.createElement("a");
  novoLink.setAttribute("href", "../../meuperfil/perfil.html");
  var perfilIcon = document.createElement("img");
  const url = localStorage.getItem('image');
  const img = new Image();
  img.classList.add("fotodperfil");
  img.src = url;
  novoLink.appendChild(img);

  // Adicionar o ícone do perfil ao elemento HTML desejado
  var perfilIconContainer = document.getElementById("rightsidemenu");
  perfilIconContainer.appendChild(novoLink);


}

ITEMS = [
  {
      id: 1,
      name: 'Sapato Cano Baixo Bege',
      price: 150.00,
      off: 179.99,
      description:'Tênis bege e branco, justo e confortável. Excelente para sair de dia e em encontros casuais.',
      image1: 'images/image-product-1 - Copia.jpeg',
      type: 'sapato',
      category: ['sapato', 'casual', 'calor', 'colorido', 'branco', 'feminino', 'masculino'],
      color: ['bege', 'branco'],
      gender: 'feminino',
      qty: 1
  },
  {
      id: 2,
      name: 'Calca Preta - Pernas Largas',
      price: 105.00,
      off: 200.99,
      description:'Calça preta para pernas largas, solta e de tecido leve com um cinto minimalista e monocromático. Ótima escolha para encontros formais.',
      image1: 'images/prod-calca-0.png',
      type: 'calca',
      category: ['calca', 'casual', 'frio', 'preto', 'feminino'],
      color: ['preto'],
      gender: 'feminino',
      qty: 1
  },
  {
      id: 3,
      name: 'Vestido Largo Preto com Detalhes',
      price: 65.99,
      off: 100.99,
      description:'Vestido largo preto com detalhes em branco, leve, solto e confortável. Excelente para encontros formais.',
      image1: 'images/prod-vestido-0.png',
      type: 'vestido',
      category: ['vestido', 'formal', 'calor', 'casamento','preto', 'feminino'],
      color: ['preto'],
      gender: 'feminino',
      qty: 1
  },
  {
      id: 4,
      name: 'Macacão Preto Sólido Chique',
      price: 109.99,
      off: 150.99,
      description:'Macacão preto, justo, simples e chique. Excelente para encontros e parques.',
      image1: 'images/prod-macacao2-0.png',
      type: 'macacao',
      category: ['macacao','formal', 'calor', 'casamento', 'preto', 'feminino'],
      color: ['preto'],
      gender: 'feminino',
      qty: 1
  },
  {
      id: 5,
      name: "Macacão Azul Marinho com Bolinhas Casual",
      price: 99.99,
      off: 120.99,
      description:'Macacão azul marinho com bolinhas brancas, leve, solto e confortável. Excelente para sair de dia e em encontros casuais.',
      image1: "images/prod-macacao-0.png",
      type: 'macacao',
      category: ['macacao','casual', 'calor', 'colorido', 'feminino'],
      color: ['azul'],
      gender: 'feminino',
      qty: 1
  },

  {
      id: 6,
      name: "Vestido Vinho com Fenda Casual",
      price: 199.99,
      off: 220.99,
      description:'Vestido vinho com uma pequena fenda na lateral, leve e confortável. Ideal para eventos formais, como casamentos.',
      image1: "images/vvinho.jpeg",
      type: 'vestido',
      category: ['vestido','formal', 'casamento', 'colorido', 'feminino'],
      color: ['vinho'],
      gender: 'feminino',
      qty: 1
  },

{
  id: 7,
  name: "Vestido Florido de Verão",
  price: 50.99,
  off: 70.99,
  description:'Vestido florido, leve e confortável. Ideal para eventos informais, sair no dia a dia, eventos em restaurantes durante o dia, parques.',
  image1: "images/vflorido.jpeg",
  type: 'vestido',
  category: ['vestido','informal', 'calor', 'colorido', 'feminino'],
  color: ['florido'],
  gender: 'feminino',
  qty: 1
},

{
  id: 8,
  name: "Calça Larga Nude",
  price: 100.99,
  off: 110.99,
  description:'Calça pernas largas, leve e confortável. Ideal para eventos informais, sair no dia a dia, eventos em restaurantes durante o dia, parques.',
  image1: "images/calcalarganude.jpeg",
  type: 'calça',
  category: ['calça','informal', 'calor', 'colorido', 'feminino'],
  color: ['nude'],
  gender: 'feminino',
  qty: 1
},

{
  id: 9,
  name: "Calça Estampada Pernas Largas",
  price: 70.99,
  off: 90.99,
  description:'Calça estampada com pernas largas, leve e confortável. Ideal para eventos informais, sair no dia a dia, eventos em restaurantes durante o dia, parques.',
  image1: "images/calcaestampada.jpeg",
  type: 'calça',
  category: ['calça','informal', 'calor', 'colorido', 'feminino'],
  color: ['multicolor'],
  gender: 'feminino',
  qty: 1
},

{
  id: 10,
  name: "Blusa Bordada",
  price: 25.99,
  off: 30.99,
  description:'Blusa bordada, leve e confortável. Ideal para eventos informais, sair no dia a dia, eventos em restaurantes durante o dia, parques.',
  image1: "images/bordada.jpeg",
  type: 'blusa',
  category: ['blusa','informal', 'calor', 'colorido', 'feminino'],
  color: ['rosa'],
  gender: 'feminino',
  qty: 1
},

{
  id: 11,
  name: "Blusa Verde Coração",
  price: 20.99,
  off: 30.99,
  description:'Blusa com estampa de coração, leve e confortável. Ideal para eventos informais, sair no dia a dia, eventos em restaurantes durante o dia, parques.',
  image1: "images/bverdecor.jpeg",
  type: 'blusa',
  category: ['blusa','informal', 'calor', 'colorido', 'feminino'],
  color: ['verde'],
  gender: 'feminino',
  qty: 1
},

{
  id: 12,
  name: "Blusa Três Cores",
  price: 50.99,
  off: 70.99,
  description:'Blusa três cores, leve e confortável. Ideal para eventos informais, sair no dia a dia, eventos em restaurantes durante o dia, parques.',
  image1: "images/b3cor.jpeg",
  type: 'blusa',
  category: ['blusa','informal', 'calor', 'colorido', 'feminino'],
  color: ['multicolor'],
  gender: 'feminino',
  qty: 1
},

{
  id: 13,
  name: "Blusa Preta Casual",
  price: 70.99,
  off: 80.99,
  description:'Blusa preta, leve e confortável. Ideal para eventos formais, como um jantar a noite, uma festa elegante durante a noite.',
  image1: "images/brupecas.jpeg",
  type: 'blusa',
  category: ['blusa','formal', 'casual', 'preto', 'feminino'],
  color: ['preto'],
  gender: 'feminino',
  qty: 1
},

{
  id: 14,
  name: "Blusa Gola V",
  price: 50.99,
  off: 70.99,
  description:'Blusa gola v, leve e confortável. Ideal para qualquer tipo de evento, sair no dia a dia, jantar em um restaurante a noite, parques e festas informais.',
  image1: "images/golav.jpeg",
  type: 'blusa',
  category: ['blusa','informal', 'casual', 'preto', 'feminino'],
  color: ['preto'],
  gender: 'feminino',
  qty: 1
},

{
  id: 15,
  name: "Jaqueta Branca",
  price: 150.99,
  off: 180.99,
  description:'Jaqueta branca com detalhes em preto, confortável. Ideal para qualquer tipo de evento, sair no dia a dia, jantar em um restaurante a noite e festas informais.',
  image1: "images/jaqbranca.jpeg",
  type: 'jaqueta',
  category: ['jaqueta','informal', 'frio', 'colorido', 'feminino'],
  color: ['branco'],
  gender: 'feminino',
  qty: 1
},

{
  id: 16,
  name: "Blazer Branco",
  price: 200.99,
  off: 220.99,
  description:'Blazer branco, leve e confortável. Ideal para eventos formais, sair a noite, eventos em restaurantes e festas formais.',
  image1: "images/blazerbranco.jpeg",
  type: 'blazer',
  category: ['blazer','formal', 'casual', 'branco', 'feminino'],
  color: ['branco'],
  gender: 'feminino',
  qty: 1
},

{
  id: 17,
  name: "Jaqueta Xadrez Peluciada",
  price: 250.99,
  off: 280.99,
  description:'Jaqueta xadrez peluciada, quente e confortável. Ideal para eventos formais, sair a noite para um restaurante, festas e demais eventos noturnos. Ideal para dias muito frios.',
  image1: "images/jaqxadrez.jpeg",
  type: 'jaqueta',
  category: ['jaqueta','formal', 'frio', 'colorido', 'feminino'],
  color: ['xadrez'],
  gender: 'feminino',
  qty: 1
},

{
  id: 18,
  name: "Camisa Social",
  price: 50.99,
  off: 70.99,
  description:'Camisa Social, leve e confortável. Ideal para eventos formais, sair a noite para um restaurante, festas e demais eventos noturnos.',
  image1: "images/camisasocial.jpeg",
  type: 'camisa',
  category: ['camisa','formal', 'casamento', 'colorido', 'masculino'],
  color: ['branco'],
  gender: 'masculino',
  qty: 1
},

{
  id: 19,
  name: "Sueter Verde",
  price: 70.99,
  off: 90.99,
  description:'Sueter verde, quente e confortável. Ideal para qualquer evento, sair a noite para um restaurante, festas e passeios a um parque.',
  image1: "images/sueterverde.jpeg",
  type: 'sueter',
  category: ['sueter','formal', 'frio', 'colorido', 'masculino'],
  color: ['verde'],
  gender: 'masculino',
  qty: 1
},

{
  id: 20,
  name: "Calça Estilo Jeans Formal",
  price: 150.99,
  off: 170.99,
  description:'Calça jeans, leve e confortável. Ideal para eventos formais, sair a noite para um restaurante, festas e demais eventos noturnos.',
  image1: "images/jeansformal.jpeg",
  type: 'calça',
  category: ['calça','formal', 'casamento', 'colorido', 'masculino'],
  color: ['azul'],
  gender: 'masculino',
  qty: 1
},

{
  id: 21,
  name: "Calça Preta Casual",
  price: 120.99,
  off: 150.99,
  description:'Calça social, leve e confortável. Ideal para eventos casuais, sair a noite para um restaurante, festas, almoços de familia e passeios diversos.',
  image1: "images/cpretacasual.jpeg",
  type: 'calça',
  category: ['calça','frio', 'casual', 'preto', 'masculino'],
  color: ['preto'],
  gender: 'masculino',
  qty: 1
},

{
  id: 22,
  name: "Blusa Preta Social",
  price: 50.99,
  off: 70.99,
  description:'Blusa social, leve e confortável. Ideal para eventos formais, sair a noite para um restaurante, festas e demais eventos noturnos.',
  image1: "images/blusapc.jpeg",
  type: 'blusa',
  category: ['blusa','formal', 'preto', 'colorido', 'masculino'],
  color: ['preto'],
  gender: 'masculino',
  qty: 1
},
];


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




renderItems()

  


function renderItems(id) {
    const item = ITEMS.find((item) => item.id === parseInt(id));
    if (!item) {
      console.log('Item não encontrado');
      return;
    }
  
    console.log(ITEMS); // Exibe o conteúdo da variável ITEMS no console
  
    let data1 = `
      <div class="select-image">
        <div class="product_name">
          <h4>Old Fashioned</h4>
          <h1>${item.name}</h1>
        </div>
        <img id="figura" src="${item.image1}" alt="">
      </div>
      <div class="descricao">
        <h1>Descrição do produto:</h1>
        <p>${item.description}</p>
      </div>
      <div class="compra">
        <h1>Compra:</h1>
        <div class="prices">
        <span class="price">R$${item.price}</span>
        <s class="off">R$${item.off}</s>
        </div>
        
      </div>
    `;
    document.getElementById('item').innerHTML = data1;
  }
  
  window.onload = () => {
    let idParameter = new URLSearchParams(window.location.search);
    let identificador = idParameter.get('id');
    renderItems(identificador);
  };
  

//function renderItems(id) {
//    console.log(ITEMS);
//    fetch(ITEMS + id) // Busca os dados do produto
//      .then((data) => {
//        return data.json();
//      }).then((itemData) => {
//        let data1 = `
//          <div class="select-image">
//            <div class="product_name">
//              <h4>Old Fashioned</h4>
//              <h1>${itemData.name}</h1>
 //           </div>
 //           <img id="figura" src="${itemData.image1}" alt="">
 //         </div>
//          <div class="descricao">
 //           <h1>Descrição do produto:</h1>
 //           <p>${itemData.description}</p>
 //         </div>
 //         <div class="compra">
 //           <h1>Compra:</h1>
//            <div class="prices">
 //             <span class="price">R$${itemData.price}</span>
 //             <s class="off">${itemData.off}</s>
 //           </div>
 //         </div>
 //         <div class="line2"></div>
//        `;
//        document.getElementById('item').innerHTML = data1;
//  
//       let idParameter = new URLSearchParams(window.location.search);
        //       let identificador = idParameter.get("id");
        //       detailId(identificador);
        //      });
      //     window.onload = () => {
        //        let idParameter = new URLSearchParams(window.location.search);
        //        let productId = idParameter.get("id");
        //        redirectToProductPage(productId);
        //      };
//  }
  
 
  


 

