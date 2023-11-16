//Verifica se o usuario esta logado
var idUserLogado = localStorage.getItem('idUserLogado');
if (idUserLogado == null) {
  //voltar para a pagina de login
  window.location.href = "/front-end/Codigo/login/login.html"
  alert("Você precisa estar logado para acessar essa página!");
}

//Obtendo os produtos curtidos do user
var id = localStorage.getItem('idUserLogado');
console.log(id);

//Obtendo o usuario logado
axios.get(`http://localhost:6789/usuario/get/username/${id}`)
  .then(response => {
    var array = response.data;
    var produtosCurtidos = array.produtosCurtidos;
    console.log(produtosCurtidos);

    //Obtendo os produtos
    axios.get('http://localhost:6789/produto/list')
      .then(response => {
        var ITEMS = response.data;

        //Criando a lista de produtos curtidos
        let data = "";
        var produtosCurtidosArray = produtosCurtidos.split(" ");

        for (let i = 0; i < ITEMS.length; i++) {
          const item = ITEMS[i];
          for(let j = 0; j < produtosCurtidosArray.length; j++){
            if (produtosCurtidosArray[j] == item.produtoId) {
            data += `
        <div class="item">
          <img src="/front-end/Codigo/${item.imagem}" alt="">
          <div class="produto">
          
            <p>${item.nome}</p>
            <p class="botoes">
            <button class="vejamais" onclick="redirectToProductPage('${item.produtoId}')">Veja Mais</button>
            <img src="/front-end/Codigo/images/heart-saved.svg" class="remover" onclick="removeFavorito('${item.produtoId}')">

            </p>
          </div>
        </div>
      `;
          }
        }
        }

        document.getElementById('items').innerHTML = data;

        
      }).catch(error => {
        console.log(error);
      });


  }).catch(error => {
    console.log(error);
  });

function redirectToProductPage(produtoId) {
    window.location.href = 'http://127.0.0.1:5500/front-end/Codigo/busca_de_produto/product.html?id=' + produtoId;

    //preecher a página com os dados do produto
    const product = ITEMS.find(item => item.id === productId);

}


function removeFavorito(idProduto) {
  //Obtendo o usuario logado
  axios.get(`http://localhost:6789/usuario/get/username/${idUserLogado}`)
  .then(response => {
    var array = response.data;
    var produtosCurtidos = array.produtosCurtidos;

    // Criando um array em que cada elemento é um produto curtido
    var produtosCurtidosArray = produtosCurtidos.split(" ");
    console.log(produtosCurtidosArray);

    // Acessando cada elemento do array e verificando se é o produto que queremos remover
    for (let i = 0; i < produtosCurtidosArray.length; i++) {
      if(produtosCurtidosArray[i] == idProduto){
        //remover o produto do array
        produtosCurtidosArray.splice(i, 1);
        break;
      }
    }

    console.log(produtosCurtidosArray);
      //Atualizando o usuario
      var prods = "";
      prods += produtosCurtidosArray[0];
      for (let i = 1; i < produtosCurtidosArray.length; i++) {
        const element = produtosCurtidosArray[i];
        prods += " " + element;
      }
      console.log(prods);

      axios.get(`http://localhost:6789/usuario/get/username/${id}`)
      .then(response => {
          console.log(response.data);
          var array = response.data;
          var id = array.id;
          var nome = array.nome;
          var username = array.username;
          var email = array.email;
          var idade = array.idade;
          var genero = array.genero;
          var senha = array.senha;

          //Atualizando os dados do usuario
          atualizarDados(id, nome, username, email, idade, genero, senha, prods);
          window.location.reload();
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
            console.log(response.data);
            window.location.reload();
        }).catch(error => {
            console.log(error);
        });
    }


    }).catch(error => {
      console.log(error);
    });
}






