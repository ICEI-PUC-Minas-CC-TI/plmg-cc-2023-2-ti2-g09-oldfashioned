if (localStorage.getItem('userValid')) {
    // Recuperar o objeto do localStorage
    var informacoesArmazenadas = localStorage.getItem("userValid");
    var informacoesRecuperadas = JSON.parse(informacoesArmazenadas);
    var infos = informacoesRecuperadas.nome;
    document.getElementById("usuarionome").innerHTML = infos;
} else {
    // Caso não haja um objeto no localStorage
    document.getElementById('usuarionome').inn = 'Nenhum nome armazenado';
}


