if (localStorage.getItem('userLogado')) {
  var userValid = JSON.parse(localStorage.getItem('userLogado'));

}

const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-list");

    // Criando o array de produtos com os produtos do banco de dados
    axios.get('http://localhost:6789/produto/list')
      .then(response => {
        ITEMS = response.data;
      }) 

    storeitems.innerHTML = "";

    for (let i = 0; i < ITEMS.length; i++) {
        let productName = ITEMS[i].nome;

        if(productName == null){ //Atribui um nome aleatorio caso o produto não tenha nome
          productName = "p"; 
        }

        if (productName.toUpperCase().indexOf(searchbox) > -1) {
            let productElement = document.createElement("div");
            productElement.className = "product";

            let productImage = document.createElement("img");
            productImage.src = ITEMS[i].imagem;
            productImage.alt = "";

            let productDetails = document.createElement("div");
            productDetails.className = "p-details";

            let productNameHeading = document.createElement("h2");
            productNameHeading.textContent = productName;

            let productId = ITEMS[i].produtoId;

            let productPriceHeading = document.createElement("h3");
            productPriceHeading.textContent = "R$" + ITEMS[i].preco;

            let vejamais = document.createElement("button");
            vejamais.classList.add("button");
            vejamais.classList.add("vejamais");
            vejamais.innerText = "Veja Mais";
            vejamais.setAttribute("onclick", "redirectToProductPage('" + productId + "')");


            productDetails.appendChild(productNameHeading);
            productDetails.appendChild(productPriceHeading);

            productDetails.appendChild(vejamais);

            productElement.appendChild(productImage);
            productElement.appendChild(productDetails);
            productDetails.appendChild(vejamais);

            storeitems.appendChild(productElement);
        }
    }
}

function redirectToProductPage(produtoId) {
    window.location.href = 'http://127.0.0.1:5500/front-end/Codigo/busca_de_produto/product.html?id=' + produtoId;

    //preecher a página com os dados do produto
    const product = ITEMS.find(item => item.id === productId);

}

//Preenchendo os produtos na página

axios.get('http://localhost:6789/produto/list')
.then(response => {
  ITEMS = response.data;
 
  //inserindo os produtos na página (4 produtos)
  
  //numero aleatorio para escolher os produtos (de 1 a 16)
  var numeroAleatorio = Math.floor(Math.random() * 16) + 1;

  for (let j = 0; j < 4; j++) {
    let i = numeroAleatorio + j;
    // console.log(ITEMS[i]);
    let productElement = document.createElement("div");
    productElement.className = "product";

    let productImage = document.createElement("img");
    productImage.src = ITEMS[i].imagem;
    productImage.alt = "";

    let productDetails = document.createElement("div");
    productDetails.className = "p-details";

    let productNameHeading = document.createElement("h2");
    productNameHeading.textContent = ITEMS[i].nome;

    let productPriceHeading = document.createElement("h3");
    productPriceHeading.textContent = "R$" + ITEMS[i].preco;

    let productId = ITEMS[i].produtoId;

    let vejamais = document.createElement("button");
    vejamais.classList.add("button");
    vejamais.classList.add("vejamais");
    vejamais.innerText = "Veja Mais";
    vejamais.setAttribute("onclick", "redirectToProductPage('" + productId + "')");

    productDetails.appendChild(productNameHeading);
    productDetails.appendChild(productPriceHeading);

    productDetails.appendChild(vejamais);

    productElement.appendChild(productImage);
    productElement.appendChild(productDetails);
    productDetails.appendChild(vejamais);

    const storeitems = document.getElementById("products");
    storeitems.appendChild(productElement);
  }
});





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
  });