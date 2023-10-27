const inputEl = document.getElementById('file-input-element');
// Gets input element

if (localStorage.getItem('userLogado')) {
  var userValid = JSON.parse(localStorage.getItem('userLogado'));

  // Criar o ícone do perfil
  var novoLink = document.createElement("a");
  novoLink.setAttribute("href", "../meuperfil/perfil.html");
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

inputEl.addEventListener('change', () => {
  // Listens for new input file

  const file = inputEl.files[0];
  // Gets file from input element

  const fr = new FileReader();
  // Creates new FileReader object

  fr.readAsDataURL(file);
  // Set FileReader to output data as URL string

  fr.addEventListener('load', () => {
    // Waits for file reading to be complete

    const url = fr.result
    // Save result

    const img = new Image();
    img.src = url;


  })

})

inputEl.addEventListener('change', () => {
  const file = inputEl.files[0];
  const fr = new FileReader();
  fr.readAsDataURL(file);

  fr.addEventListener('load', () => {
    const url = fr.result
    localStorage.setItem('image', url);
    // Saves image to localStorage
  })
});

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
    labelNome.setAttribute('style', 'color: red')
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
    labelUsuario.setAttribute('style', 'color: red')
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
    labelSenha.setAttribute('style', 'color: red')
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
    labelConfirmSenha.setAttribute('style', 'color: red')
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

function cadastrar() {
  if (validNome && validUsuario && validSenha && validConfirmSenha) {
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

    listaUser.push(
      {
        nomeCad: nome.value,
        userCad: usuario.value,
        senhaCad: senha.value,
        emailCad: email.value,
        idadeCad: idade.value,
        descCad: descricao.value,
        generoCad: genero.value,
      }
    )

    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    // Obtém o usuário recém-cadastrado
    let novoUsuario = listaUser.find(u => u.userCad === usuario.value);

    // Verifica se o usuário foi encontrado
    if (novoUsuario) {
      novoUsuario.pastas = []; // Cria a propriedade "pastas" para o usuário
    }

    localStorage.setItem('listaUser', JSON.stringify(listaUser));


    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''

    setTimeout(() => {
      //window.location.href = '../login/login.html'
    }, 3000)


  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}

btn.addEventListener('click', () => {
  let inputSenha = document.querySelector('#senha')

  if (inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

btnConfirm.addEventListener('click', () => {
  let inputConfirmSenha = document.querySelector('#confirmSenha')

  if (inputConfirmSenha.getAttribute('type') == 'password') {
    inputConfirmSenha.setAttribute('type', 'text')
  } else {
    inputConfirmSenha.setAttribute('type', 'password')
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
