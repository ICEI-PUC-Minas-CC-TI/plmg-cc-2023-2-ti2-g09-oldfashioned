//Verifica se o usuario esta logado
var idUserLogado = localStorage.getItem('idUserLogado');
if (idUserLogado == null) {
    //voltar para a pagina de login
    window.location.href = "/front-end/Codigo/login/login.html"
    alert("Você precisa estar logado para acessar essa página!");
}


//Carrega os dados quando a pagina for carregada
window.onload = function () {
    carregarDados();
};

function carregarDados() {
    var id = localStorage.getItem('idUserLogado');
    console.log(id);

    //Obtendo o usuario logado
    axios.get(`http://localhost:6789/usuario/get/username/${id}`)
        .then(response => {
            console.log(response.data);
            var array = response.data;
            var nome = array.nome;
            var username = array.username;
            var email = array.email;
            var idade = array.idade;
            var genero = array.genero;

            //Preenchendo os dados do usuario
            document.getElementById("nome").innerHTML = nome;
            document.getElementById("username").innerHTML = username;
            document.getElementById("email").innerHTML = email;
            document.getElementById("idade").innerHTML = idade;
            document.getElementById("genero").innerHTML = genero;

        }).catch(error => {
            console.log(error);
        });
}

function editar() {
    //Criando o botao de salvar
    var btnSalvar = document.createElement("button");
    btnSalvar.innerHTML = "Salvar";

    //Criando os inputs
    var inputNome = document.createElement("input");
    inputNome.value = document.getElementById("nome").innerHTML;
    inputNome.style.borderRadius = "5px";
    inputNome.style.border = "1px solid #404040";

    var inputUsername = document.createElement("input");
    inputUsername.value = document.getElementById("username").innerHTML;
    inputUsername.style.borderRadius = "5px";
    inputUsername.style.border = "1px solid #404040";

    var inputEmail = document.createElement("input");
    inputEmail.value = document.getElementById("email").innerHTML;
    inputEmail.style.borderRadius = "5px";
    inputEmail.style.border = "1px solid #404040";

    var inputIdade = document.createElement("input");
    inputIdade.value = document.getElementById("idade").innerHTML;
    inputIdade.style.borderRadius = "5px";
    inputIdade.style.border = "1px solid #404040";

    var inputGenero = document.createElement("input");
    inputGenero.value = document.getElementById("genero").innerHTML;
    inputGenero.style.borderRadius = "5px";
    inputGenero.style.border = "1px solid #404040";

    //Adicionando os inputs na div
    document.getElementById("nome").innerHTML = "";
    document.getElementById("nome").appendChild(inputNome);
    document.getElementById("username").innerHTML = "";
    document.getElementById("username").appendChild(inputUsername);
    document.getElementById("email").innerHTML = "";
    document.getElementById("email").appendChild(inputEmail);
    document.getElementById("idade").innerHTML = "";
    document.getElementById("idade").appendChild(inputIdade);
    document.getElementById("genero").innerHTML = "";
    document.getElementById("genero").appendChild(inputGenero);

    //Adicionando o botao de salvar na div
    document.getElementById("btnSalvarContainer").appendChild(btnSalvar);

    //Adicionando o evento de click no botao salvar
    btnSalvar.addEventListener("click", function () {
        var nome = document.getElementById("nome").querySelector("input").value;
        var username = document.getElementById("username").querySelector("input").value;
        var email = document.getElementById("email").querySelector("input").value;
        var idade = document.getElementById("idade").querySelector("input").value;
        var genero = document.getElementById("genero").querySelector("input").value;

        //Fazendo requisicao para obter o id, senha, foto e produtos curtidos
        var id = localStorage.getItem('idUserLogado');

        axios.get(`http://localhost:6789/usuario/get/username/${id}`)
            .then(response => {
                console.log(response.data);
                var array = response.data;
                var id = array.id;
                var senha = array.senha;
                var foto = array.foto;
                var produtosCurtidos = array.produtosCurtidos;

                //Atualizando os dados do usuario
                atualizarDados(id, nome, username, email, idade, genero, senha, foto, produtosCurtidos);
            });
    });
}

function atualizarDados(id, nome, username, email, idade, genero, senha, foto, produtosCurtidos) {
    //Atualizando os dados do usuario
    axios.post("http://localhost:6789/usuario/update", {
        id: id,
        username: username,
        nome: nome,
        email: email,
        idade: idade,
        genero: genero,
        senha: senha,
        foto: foto,
        produtosCurtidos: produtosCurtidos
    }).then(response => {
        console.log(response.data);
        window.location.reload();
    }).catch(error => {
        console.log(error);
    });
}

function sair() {
    localStorage.removeItem('idUserLogado');
    window.location.href = "/front-end/Codigo/login/login.html"
}