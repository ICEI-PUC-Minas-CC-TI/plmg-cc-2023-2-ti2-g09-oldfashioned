if (localStorage.getItem('userLogado')) {
    var userValid = JSON.parse(localStorage.getItem('userLogado'));
  
    // Criar o ícone do perfil
    var novoLink = document.createElement("a");
    novoLink.setAttribute("href", "/meuperfil/perfil.html");
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