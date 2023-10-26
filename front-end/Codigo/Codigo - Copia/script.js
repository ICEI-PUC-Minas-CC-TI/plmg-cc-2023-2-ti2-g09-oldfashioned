
if (localStorage.getItem('userLogado')) {
  var userValid = JSON.parse(localStorage.getItem('userLogado'));

  // Criar o ícone do perfil
  var novoLink = document.createElement("a");
  novoLink.setAttribute("href", "meuperfil/perfil.html");
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

const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-list");

    // Array de produtos simulando o JSON com as informações
    ITEMS = [
      {
          id: 1,
          name: 'Sapato Cano Baixo Bege',
          price: 150.00,
          off: 179.99,
          description:'Tênis bege e branco, justo e confortável. Excelente para sair de dia e em encontros casuais.',
          image1: 'busca_de_produto/images/image-product-1 - Copia.jpeg',
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
          image1: 'busca_de_produto/images/prod-calca-0.png',
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
          image1: 'busca_de_produto/images/prod-vestido-0.png',
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
          image1: 'busca_de_produto/images/prod-macacao2-0.png',
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
          image1: "busca_de_produto/images/prod-macacao-0.png",
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
          image1: "busca_de_produto/images/vvinho.jpeg",
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
      image1: "busca_de_produto/images/vflorido.jpeg",
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
      image1: "busca_de_produto/images/calcalarganude.jpeg",
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
      image1: "busca_de_produto/images/calcaestampada.jpeg",
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
      image1: "busca_de_produto/images/bordada.jpeg",
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
      image1: "busca_de_produto/images/bverdecor.jpeg",
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
      image1: "busca_de_produto/images/b3cor.jpeg",
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
      image1: "busca_de_produto/images/brupecas.jpeg",
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
      image1: "busca_de_produto/images/golav.jpeg",
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
      image1: "busca_de_produto/images/jaqbranca.jpeg",
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
      image1: "busca_de_produto/images/blazerbranco.jpeg",
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
      image1: "busca_de_produto/images/jaqxadrez.jpeg",
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
      image1: "busca_de_produto/images/camisasocial.jpeg",
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
      image1: "busca_de_produto/images/sueterverde.jpeg",
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
      image1: "busca_de_produto/images/jeansformal.jpeg",
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
      image1: "busca_de_produto/images/cpretacasual.jpeg",
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
      image1: "busca_de_produto/images/blusapc.jpeg",
      type: 'blusa',
      category: ['blusa','formal', 'preto', 'colorido', 'masculino'],
      color: ['preto'],
      gender: 'masculino',
      qty: 1
    },
    ];
    storeitems.innerHTML = "";

    for (let i = 0; i < ITEMS.length; i++) {
        let productName = ITEMS[i].name;

        if (productName.toUpperCase().indexOf(searchbox) > -1) {
            let productElement = document.createElement("div");
            productElement.className = "product";

            let productImage = document.createElement("img");
            productImage.src = ITEMS[i].image1;
            productImage.alt = "";

            let productDetails = document.createElement("div");
            productDetails.className = "p-details";

            let productNameHeading = document.createElement("h2");
            productNameHeading.textContent = productName;

            let productPriceHeading = document.createElement("h3");
            productPriceHeading.textContent = "R$" + ITEMS[i].price;

            
    
            // Verificar se o ID do produto está presente no localStorage e adicionar a classe "like2" se necessário


            let vejamais = document.createElement("button");
            vejamais.classList.add("button");
            vejamais.classList.add("vejamais");
            vejamais.innerText = "Veja Mais";
            vejamais.setAttribute("onclick", "redirectToProductPage('" + ITEMS[i].id + "')");

            
            

            productDetails.appendChild(productNameHeading);
            productDetails.appendChild(productPriceHeading);

            productDetails.appendChild(vejamais);

            productElement.appendChild(productImage);
            productElement.appendChild(productDetails);
            productDetails.appendChild(vejamais);

            storeitems.appendChild(productElement);

            
        // Adicione um ouvinte de evento para o botão de like dentro do loop
        
          
        }
    }
}
function redirectToProductPage(productId) {
    window.location.href = 'product.html?id=' + productId;

  }

ITEMS = [
  {
      id: 1,
      name: 'Sapato Cano Baixo Bege',
      price: 150.00,
      off: 179.99,
      description:'Tênis bege e branco, justo e confortável. Excelente para sair de dia e em encontros casuais.',
      image1: 'busca_de_produto/images/image-product-1.jpeg',
      thumb1:'busca_de_produto/images/image-product-1.jpg',
      thumb2:'busca_de_produto/images/image-product-2.jpg',
      thumb3:'busca_de_produto/images/image-product-3.jpg',
      thumb4:'busca_de_produto/images/image-product-4.jpg',
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
      image1: 'busca_de_produto/images/prod-calca-0.png',
      thumb1:'busca_de_produto/images/prod-calca-0.png',
      thumb2:'busca_de_produto/images/prod-calca-1.png',
      thumb3:'busca_de_produto/images/prod-calca-2.png',
      thumb4:'busca_de_produto/images/prod-calca-3.png',
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
      image1: 'busca_de_produto/images/prod-vestido-0.png',
      thumb1:'busca_de_produto/images/prod-vestido-0.png',
      thumb2:'busca_de_produto/images/prod-vestido-1.png',
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
      image1: 'busca_de_produto/images/prod-macacao2-0.png',
      thumb1:'busca_de_produto/images/prod-macacao2-0.png',
      thumb2:'busca_de_produto/images/prod-macacao2-1.png',
      thumb3:'busca_de_produto/images/prod-macacao2-2.png',
      thumb4:'busca_de_produto/images/prod-macacao2-3.png',
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
      image1: "busca_de_produto/images/prod-macacao-0.png",
      thumb1:'busca_de_produto/images/prod-macacao-0.png',
      thumb2:'busca_de_produto/images/prod-macacao-1.png',
      thumb3:'busca_de_produto/images/prod-macacao-2.png',
      thumb4:'busca_de_produto/images/prod-macacao-3.png',
      type: 'macacao',
      category: ['macacao','casual', 'calor', 'colorido', 'feminino'],
      color: ['azul'],
      gender: 'feminino',
      qty: 1
  },
  
  

];

for (let i of ITEMS) {
  // Create Card
  
  let card = document.createElement("div");

  // Set classes based on categories
  card.classList.add("card");
  for (let category of i.category) {
      card.classList.add(category.toLowerCase()); 
  }

  // Image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  // Image tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image1);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  // Container
  let container = document.createElement("div");
  container.classList.add("container");

  // Product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.name.toUpperCase();
  container.appendChild(name);

  // Product price
  let price = document.createElement("h6");
  price.innerText = "R$ " + i.price.toFixed(2);
  container.appendChild(price);

  card.appendChild(container);

  let cardbuttons = document.createElement("div");
  cardbuttons.classList.add("card-buttons");

  //Add Veja Mais button
  let button = document.createElement("button");
  button.classList.add("button");
  button.classList.add("vejamais");
  button.innerText = "Veja Mais";

  button.setAttribute("onclick", "redirectToProductPage(" + i.id + ")");
  //button.setAttribute("onclick", "window.location.href='product.html?id=" + i.id + "'"); 
  //button.setAttribute("onclick", "window.location.href='product.html?id=" + ITEMS[index].id + "'");


  function redirectToProductPage(productId) {
    window.location.href = 'busca_de_produto/product.html?id=' + productId;

  }
  
  card.appendChild(button);

  //Add Like button
  let like = document.createElement("button");
  like.classList.add("button");
  like.classList.add("like");
  button.classList.add("blackbtn");
  like.innerHTML = '<i class="fa fa-heart"></i>';
  like.setAttribute("data-item-id", i.id);
  card.appendChild(like);
// Evento de clique no botão "Favoritar"

  document.getElementById("products").appendChild(card);
}




  
  // Função para selecionar a pasta e redirecionar para a página favoritos.html
  function selecionarPasta(idPasta) {
    localStorage.setItem('pastaSelecionada', idPasta);
    window.location.href = 'favoritos/meusfavoritos/favoritos.html?id=' + idPasta;
  }

function redirecionar() {
  // Redirecionar para outra página
  window.location.href = "busca_de_produto/filter.html"; // Substitua pelo URL desejado
}

document.addEventListener('DOMContentLoaded', function() {
    var favoritos = JSON.parse(localStorage.getItem('favorito')) || [];

   

 //Salvar nos favoritos
document.querySelectorAll(".like").forEach((likeButton, index) => {
    const itemId = ITEMS[index].id;
    const favoritos = JSON.parse(localStorage.getItem('favorito')) || [];
    if (favoritos.includes(itemId)) {
      likeButton.classList.add("like2");}
      
      likeButton.onclick = function () {
          
  
          if (favoritos.includes(itemId)) {
              likeButton.classList.add("like2");
              alert('Este item já está nos favoritos!');
          } else {
              favoritos.push(itemId);
              localStorage.setItem('favorito', JSON.stringify(favoritos));
              //Change button color
              likeButton.classList.add("like2");
              alert('Produto salvo nos favoritos!');
              
          }
      };
  });
// Recupera o array de produtos favoritos do localStorage, ou cria um novo array se ele não existir ainda
var favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

// Função para redirecionar o usuário para a página de favoritos
function redirecionarParaPaginaFavoritos() {
  window.location.href = 'favoritos.html';
}

// Função para atualizar a quantidade de itens favoritos na página de favoritos
function atualizarQuantidadeFavoritos() {
  const quantidadeFavoritos = favoritos.length;
  const quantidadeFavoritosElement = document.getElementById('quantidadeFavoritos');
  quantidadeFavoritosElement.innerText = quantidadeFavoritos;
}





// Adiciona evento de clique no botão de visualizar favoritos
document.getElementById("btnFavoritos").addEventListener("click", redirecionarParaPaginaFavoritos);


  });