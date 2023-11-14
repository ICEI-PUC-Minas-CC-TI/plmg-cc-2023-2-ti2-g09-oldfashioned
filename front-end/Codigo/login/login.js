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
        if (element.username === username && element.senha === senha) {
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