// document.getElementById("editarBtn").addEventListener("click", function() {
//     var campos = ["nome", "username", "email", "idade", "genero"];

//     campos.forEach(function(campo) {
//         var elementoUsuario = document.getElementById(campo);
        
//         var inputElemento = document.createElement("input");
//         inputElemento.value = elementoUsuario.innerHTML;

//         elementoUsuario.innerHTML = "";
//         elementoUsuario.appendChild(inputElemento);
//     });

//     var btnSalvar = document.createElement("button");
//     btnSalvar.innerHTML = "Salvar";
//     btnSalvar.addEventListener("click", function() {
//         campos.forEach(function(campo) {
//             var elementoUsuario = document.getElementById(campo);
//             var inputElemento = elementoUsuario.querySelector("input");

//             elementoUsuario.innerHTML = inputElemento.value;
//         });

//         btnSalvar.remove();
//     });

//     atualizarDadosUsuario(campos);

//     // Adiciona o botão "Salvar" dentro da div "btnSalvarContainer"
//     document.getElementById("btnSalvarContainer").appendChild(btnSalvar);
// });


// // Atualiza os dados do usuário no BD
// function atualizarDadosUsuario(userValid) {
//   axios.post("http://localhost:6789/usuario/update")
// }

//Carrega os dados quando a pagina for carregada
window.onload = function () {
  carregarDados();
};

function carregarDados() {
    var id = localStorage.getItem('idUserLogado');
    
    const userId = { 
        "id": id
    }
    console.log(userId);
    //Obtendo o usuario logado
    axios.get("http://localhost:6789/usuario/get" , userId)
    .then(response => {
        console.log(response.data);
      var array = response.data;
      document.getElementById('nome').value = array.nome;
      document.getElementById('email').value = array.email;
      document.getElementById('username').value = array.username;
      document.getElementById('senha').value = array.senha;
    });
}