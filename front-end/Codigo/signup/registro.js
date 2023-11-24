//Verifica se o usuario esta logado
var idUserLogado = localStorage.getItem('idUserLogado');
if (idUserLogado != null) {
    //voltar para a pagina de login
    window.location.href = "/front-end/Codigo/index.html"
    alert("Você já está logado!");
}

const inputEl = document.getElementById('file-input-element');
// Gets input element

if (localStorage.getItem('userLogado')) {
  var userValid = JSON.parse(localStorage.getItem('userLogado'));



}


let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')


let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let genero = document.querySelector('#genero')
let email = document.querySelector('#email')
let idade = document.querySelector('#idade')
let descricao = document.querySelector('#descricao')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false
const inputImagem = document.getElementById('#image_input');
let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
  if (nome.value.length <= 2) {
    labelNome.setAttribute('style', 'font-size: 13px')
    labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
    
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validNome = true
  }
})


usuario.addEventListener('keyup', () => {
  if (usuario.value.length <= 4) {
    labelUsuario.setAttribute('style', 'font-size: 13px')
    labelUsuario.innerHTML = 'Usuário *Insira no minimo 5 caracteres'
    usuario.setAttribute('style', 'border-color: red')
    validUsuario = false
  } else {
    labelUsuario.setAttribute('style', 'color: green')
    labelUsuario.innerHTML = 'Usuário'
    usuario.setAttribute('style', 'border-color: green')
    validUsuario = true
  }
})

senha.addEventListener('keyup', () => {
  if (senha.value.length <= 5) {
    labelSenha.setAttribute('style', 'font-size: 13px')
    labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  } else {
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
    validSenha = true
  }
})

confirmSenha.addEventListener('keyup', () => {
  if (senha.value != confirmSenha.value) {
    labelConfirmSenha.setAttribute('style', 'font-size: 13px')
    labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
    confirmSenha.setAttribute('style', 'border-color: red')
    validConfirmSenha = false
  } else {
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    confirmSenha.setAttribute('style', 'border-color: green')
    validConfirmSenha = true
  }
})

function cadastrarBD() {
  var username = document.getElementById('usuario').value;
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;
  var confirmSenha = document.getElementById('confirmSenha').value;
  var idade = document.getElementById('idade').value;
  var genero = document.getElementById('genero').value;

  if (senha != confirmSenha) {
    alert("As senhas não conferem!");
    return;
  }

// Verificando se o usuário já existe
var usernameBD = {
  username: username
};

var array = [];

var usuario = {
  username: username,
  nome: nome,
  email: email,
  senha: senha,
  idade: idade,
  genero: genero
};

axios.get("http://localhost:6789/usuario/list")
  .then(response => {
    array = response.data;
    console.log(username);

    // Use uma variável para rastrear se o usuário existe
    let userExists = false;

    array.forEach(element => {
      if (element.username === username) {
        console.log("Usuário já existe!");
        userExists = true;
      }
    });

    // Verifique se o usuário não existe antes de inseri-lo
    if (!userExists) {
      axios.post("http://localhost:6789/usuario/insert", usuario)
        .then(response => {
          console.log(response.data);
          window.location.href = '../login/login.html'
        })
        .catch(error => {
          console.log(error);
        });
    }

  })
  .catch(error => {
    console.log(error);
  });
}
