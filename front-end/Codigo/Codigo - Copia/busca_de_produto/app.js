const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-list");

    // Array de produtos simulando o JSON com as informações
    let ITEMS = [
        {
            id: 1,
            name: 'Sapato Cano Baixo Bege',
            price: 150.00,
            off: 179.99,
            description:'Tênis bege e branco, justo e confortável. Excelente para sair de dia e em encontros casuais.',
            image1: 'images/image-product-1-thumbnail.jpg',
            thumb1:'images/image-product-1.jpg',
            thumb2:'images/image-product-2.jpg',
            thumb3:'images/image-product-3.jpg',
            thumb4:'images/image-product-4.jpg',
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
            thumb1:'images/prod-calca-0.png',
            thumb2:'images/prod-calca-1.png',
            thumb3:'images/prod-calca-2.png',
            thumb4:'images/prod-calca-3.png',
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
            thumb1:'images/prod-vestido-0.png',
            thumb2:'images/prod-vestido-1.png',
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
            thumb1:'images/prod-macacao2-0.png',
            thumb2:'images/prod-macacao2-1.png',
            thumb3:'images/prod-macacao2-2.png',
            thumb4:'images/prod-macacao2-3.png',
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
            thumb1:'images/prod-macacao-0.png',
            thumb2:'images/prod-macacao-1.png',
            thumb3:'images/prod-macacao-2.png',
            thumb4:'images/prod-macacao-3.png',
            type: 'macacao',
            category: ['macacao','casual', 'calor', 'colorido', 'feminino'],
            color: ['azul'],
            gender: 'feminino',
            qty: 1
        }
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

            let likeButton = document.createElement("button");
            likeButton.classList.add("button");
            likeButton.classList.add("like");
            likeButton.innerHTML = '<i class="fa fa-heart"></i>';
            likeButton.setAttribute("data-id", ITEMS[i].id); // Adiciona o atributo data-id ao botão
    
            // Verificar se o ID do produto está presente no localStorage e adicionar a classe "like2" se necessário
            const favoritos = JSON.parse(localStorage.getItem('favorito')) || [];
            if (favoritos.includes(ITEMS[i].id)) {
            likeButton.classList.add("like2");
            }

            let vejamais = document.createElement("button");
            vejamais.classList.add("button");
            vejamais.classList.add("vejamais");
            vejamais.innerText = "Veja Mais";
            vejamais.setAttribute("data-id", ITEMS[i].id); // Adiciona o atributo data-id ao botão
            vejamais.onclick = () => {
                //sessionStorage.setItem('selectedItem', JSON.stringify(ITEMS[i].id));
                window.open('product.html', '_blank');
            };
            

            productDetails.appendChild(productNameHeading);
            productDetails.appendChild(productPriceHeading);
            productDetails.appendChild(likeButton);
            productDetails.appendChild(vejamais);

            productElement.appendChild(productImage);
            productElement.appendChild(productDetails);
            productDetails.appendChild(vejamais);

            storeitems.appendChild(productElement);

            
        // Adicione um ouvinte de evento para o botão de like dentro do loop
        likeButton.addEventListener("click", function() {
            saveToFavorites(ITEMS[i].id, likeButton);
        });
            //document.addEventListener('DOMContentLoaded', function() {
            //    const favoritos = JSON.parse(localStorage.getItem('favorito')) || [];
            //    if (favoritos.includes(itemId)) {
            //        likeButton.classList.add("like2");
            //    }
            //});
        }
    }
}

// Função para salvar nos favoritos
const saveToFavorites = (itemId, likeButton) => {
    
    const favoritos = JSON.parse(localStorage.getItem('favorito')) || [];

    if (favoritos.includes(itemId)) {
        likeButton.classList.add("like2");
        alert('Este item já está nos favoritos!');
    } else {
        favoritos.push(itemId);
        localStorage.setItem('favorito', JSON.stringify(favoritos));
        likeButton.classList.add("like2");
        alert('Produto salvo nos favoritos!');
    }
};

// Chame a função de pesquisa para iniciar a busca
search();

// Verificar se os produtos estão nos favoritos ao recarregar a página
document.addEventListener('DOMContentLoaded', function() {
    const favoritos = JSON.parse(localStorage.getItem('favorito')) || [];

    favoritos.forEach(function(itemId) {
        const likeButton = document.querySelector(`button[data-id="${itemId}"]`);
        if (likeButton) {
            likeButton.classList.add("like2");
        }
    });
});

function redirecionar() {
    // Redirecionar para outra página
    window.location.href = "./busca_de_produto/filter.html"; // Substitua pelo URL desejado
  }