let btn = document.querySelector('.fa-eye')

if (localStorage.getItem('userLogado')) {
  var userValid = JSON.parse(localStorage.getItem('userLogado'));

  // Criar o ícone do perfil
  var novoLink = document.createElement("a");
  novoLink.setAttribute("href", "/../meuperfil/perfil.html");
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

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

function entrar(){
  let usuario = document.querySelector('#usuario')
  let userLabel = document.querySelector('#userLabel')
  
  let senha = document.querySelector('#senha')
  let senhaLabel = document.querySelector('#senhaLabel')
  
  let msgError = document.querySelector('#msgError')
  let listaUser = []
  
  let userValid = {
    nome: '',
    user: '',
    senha: '',
  }
  
  listaUser = JSON.parse(localStorage.getItem('listaUser'))
  
  listaUser.forEach((item) => {
    if(usuario.value == item.userCad && senha.value == item.senhaCad){
       
      userValid = {
         nome: item.nomeCad,
         user: item.userCad,
         senha: item.senhaCad,

       }
      
    }
  })

  if(usuario.value == userValid.user && senha.value == userValid.senha){
    
    window.location.href = '../meuperfil/perfil.html'
    
    let mathRandom = Math.random().toString(16).substr(2)
    let token = mathRandom + mathRandom
    
    localStorage.setItem('token', token)
    localStorage.setItem('userLogado', JSON.stringify(userValid))
  } else {
    userLabel.setAttribute('style', 'color: red')
    usuario.setAttribute('style', 'border-color: red')
    senhaLabel.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuário ou senha incorretos'
    usuario.focus()
  }

}

localStorage.setItem('userValid', JSON.stringify(userValid))

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
      console.log(username);

      // Use uma variável para rastrear se o usuário existe
      let userExists = false;

      array.forEach(element => {
        if (element.username === username && element.senha === senha) {
          console.log("Usuário logado!");
          userExists = true;
        }
      });

      if (!userExists) {
        console.log("Usuário não existe!");
      }
    });
}

