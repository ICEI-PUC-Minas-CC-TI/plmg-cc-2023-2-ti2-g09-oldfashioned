//Verifica se o usuario esta logado
var idUserLogado = localStorage.getItem('idUserLogado');
if (idUserLogado != null) {
    //voltar para a pagina de login
    window.location.href = "/front-end/Codigo/index.html"
    alert("Você já está logado!");
}

// Função para calcular a hash MD5 de uma senha
function calcularHashMD5(senha) {
    return CryptoJS.MD5(senha).toString();
}

// Função para verificar se a senha inserida é igual à hash armazenada
function verificarSenha(senhaDigitada, hashArmazenada) {
    const hashSenhaDigitada = calcularHashMD5(senhaDigitada);
    return hashSenhaDigitada === hashArmazenada;
}

//Conexão com o banco de dados
function entrarBD() {
  var username = document.querySelector('#usuario').value; 
  var senha = document.querySelector('#senha').value; 

  var usernameBD = {
    username: username,
    senha: senha
  };

  var array = [];

  var usuario = {
    username: username,
    senha: senha
  };


  axios.get("http://localhost:6789/usuario/list")
    .then(response => {
      array = response.data;

      // Use uma variável para rastrear se o usuário existe
      localStorage.setItem('temUsuario', 'false');

      array.forEach(element => {
        if (element.username === username && verificarSenha(senha,element.senha)) {
          localStorage.setItem('temUsuario', 'true');
          //setando o id na variavel userLogado
          localStorage.setItem('idUserLogado', JSON.stringify(element.id));
          console.log(JSON.stringify(element.id));
          window.location.href = '../meuperfil/perfil.html'
        }
      });

      let temUsuario = localStorage.getItem('temUsuario');
      if (temUsuario === 'false') {
        alert("Usuário não existe!");

      }
    });
}