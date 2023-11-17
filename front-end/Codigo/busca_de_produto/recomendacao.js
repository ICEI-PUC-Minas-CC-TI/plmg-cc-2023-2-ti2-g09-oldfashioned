//<script src="ColorSchemeGenerator.java">

function analyzeImage() {
    localStorage.setItem('cores', '');
    const azureEndpoint = "https://detectarspucmg.cognitiveservices.azure.com/";
    const apiKey = "fac583a1a7b24106b3d392f30d40b53b";
    const imageFile = document.getElementById("imageFile").files[0];

    // Verifica se o usuário selecionou um arquivo
    if (!imageFile) {
        alert("Por favor, escolha uma imagem.");
        return;
    }

    // Cria um objeto FormData para enviar a imagem
    const formData = new FormData();
    formData.append("image", imageFile);

    // Configuração da solicitação para o serviço Cognitive da Azure
    const requestOptions = {
        method: "POST",
        headers: {
            "Ocp-Apim-Subscription-Key": apiKey
        },
        body: formData

    
    };

    // Construir a URL completa para a análise
    const apiUrl = azureEndpoint + "/vision/v3.0/analyze?visualFeatures=Description,Color";
    // Cria um objeto que mapeia nomes de cores para hexadecimais
    const colorNameToHex = {
        "white": "#ffffff",
        "silver": "#c0c0c0",
        "grey": "#808080",
        "black": "#000000",
        "red": "#ff0000",
        "maroon": "#800000",
        "yellow": "#ffff00",
        "olive": "#808000",
        "lime": "#00ff00",
        "green": "#008000",
        "aqua": "#00ffff",
        "teal": "#008080",
        "blue": "#0000ff",
        "navy": "#000080",
        "fuchsia": "#ff00ff",
        "purple": "#800080",
        "pink": "#ffc0cb",
        "orange": "#ffa500",
        "gold": "#ffd700",
        "cyan": "#00ffff",
        "magenta": "#ff00ff",
        "indigo": "#4b0082",
        "violet": "#ee82ee",
        "brown": "#a52a2a",
        "beige": "#f5f5dc",
        "turquoise": "#40e0d0",
        "tan": "#d2b48c",
        "skyblue": "#87ceeb",
        "salmon": "#fa8072",
        "plum": "#dda0dd",
        "orchid": "#da70d6",
        "olivedrab": "#6b8e23",
        "lightgreen": "#90ee90",
        "darkgreen": "#006400",
        "darkblue": "#00008b",
        "crimson": "#dc143c",
        "coral": "#ff7f50",
        "chocolate": "#d2691e",
        "chartreuse": "#7fff00",
        "cadetblue": "#5f9ea0"
    };
    const HexToColorName = {
        "#ffffff": "White",
        "#c0c0c0": "Silver",
        "#808080": "Grey",
        "#000000": "Black",
        "#ff0000": "Red",
        "#800000": "Maroon",
        "#ffff00": "Yellow",
        "#808000": "Olive",
        "#00ff00": "Lime",
        "#008000": "Green",
        "#00ffff": "Aqua",
        "#008080": "Teal",
        "#0000ff": "Blue",
        "#000080": "Navy",
        "#ff00ff": "Fuchsia",
        "#800080": "Purple",
        "#ffc0cb": "Pink",
        "#ffa500": "Orange",
        "#ffd700": "Gold",
        "#00ffff": "Cyan",
        "#ff00ff": "Magenta",
        "#4b0082": "Indigo",
        "#ee82ee": "Violet",
        "#a52a2a": "Brown",
        "#f5f5dc": "Beige",
        "#40e0d0": "Turquoise",
        "#d2b48c": "Tan",
        "#87ceeb": "Skyblue",
        "#fa8072": "Salmon",
        "#dda0dd": "Plum",
        "#da70d6": "Orchid",
        "#6b8e23": "Olivedrab",
        "#90ee90": "Lightgreen",
        "#006400": "Darkgreen",
        "#00008b": "Darkblue",
        "#dc143c": "Crimson",
        "#ff7f50": "Coral",
        "#d2691e": "Chocolate",
        "#7fff00": "Chartreuse",
        "#5f9ea0": "Cadetblue",
        "c1490a": "Tomato"
    };
    // Realiza a solicitação de análise
    fetch(apiUrl, requestOptions)
        .then(response => response.json())
        .then(data => {
            // Exibe as cores predominantes
            const colors = data.color.accentColor.split(",");
            const colorDiv = document.getElementById("predominantColors");
            const analogousColorsDiv = document.getElementById("analagousColors");

            // Limpa os resultados anteriores
            colorDiv.innerHTML = '';
            analogousColorsDiv.innerHTML = '';
            colors.forEach(color => {

                const colorHex = colorNameToHex[color.toLowerCase()];
                //console.log(colorHex);
                // console.log(color.toLowerCase());
                //const colorName = HexToColorName[color.toLowerCase()];
                //console.log(colorName);

                const colorBox = document.createElement("div");
                colorBox.className = "colorBox";
                colorBox.style.backgroundColor = "#" + color.toLowerCase();
                //colorBox.innerHTML = color.toString().toLowerCase();
                colorDiv.appendChild(colorBox);
                //exibir o nome da color em hexadecimal no console


                // Exibe as cores análogas
                const analogousColors = calcularCoresAnalogas(color);

                const analogousColorsDiv = document.getElementById("analagousColors");
                analogousColors.forEach(analogousColor => {
                    if (analogousColor) {
                        const analogousColorBox = document.createElement("div");
                        analogousColorBox.className = "colorBox";
                        analogousColorBox.style.backgroundColor = analogousColor;
                        analogousColorsDiv.appendChild(analogousColorBox);

                        converterCorSimples(analogousColor);
                    }
                });

            });

            const uploadedImage = document.getElementById("uploadedImage");
            uploadedImage.src = URL.createObjectURL(imageFile);

        })
        .catch(error => console.error("Erro ao analisar imagem: " + error));
}


function converterCorSimples(corHex) {
  // Mapeia os ranges de cores para nomes básicos
  corHex = corHex.toUpperCase()
  const mapeamentoCores = [
    { range: ['#000000', '#333333'] || ['#333333', '#666666'] || ['#666666', '#999999'] || ['#999999', '#CCCCCC'], nome: 'preto' },
    { range: ['#CCCCCC', '#FFFFFF'], nome: 'branco' },
    { range: ['#FF0000', '#FF9999'], nome: 'vinho' },
    { range: ['#00FF00', '#99FF99'], nome: 'verde' },
    { range: ['#0000FF', '#9999FF'], nome: 'azul' },
    { range: ['#FFFF00', '#FFFF99'], nome: 'florido' },
    { range: ['#FF00FF', '#FF99FF'], nome: 'rosa' },
    { range: ['#00FFFF', '#99FFFF'], nome: 'nude' },
    { range: ['#800000', '#CC9999'], nome: 'marrom' },
  ];

  // Converte a cor hexadecimal para um número decimal
  const corDecimal = parseInt(corHex.slice(1), 16);

  // Encontra o range correspondente
  const corMapeada = mapeamentoCores.find(item => {
    const inicio = parseInt(item.range[0].slice(1), 16);
    const fim = parseInt(item.range[1].slice(1), 16);
    return corDecimal >= inicio && corDecimal < fim;
  });

    //Salvando as cores em um array no local storage
    let cores = localStorage.getItem('cores');
    cores = cores ? cores.split(',') : [];
    cores.push(corMapeada ? corMapeada.nome : corHex);
    localStorage.setItem('cores', cores);

    // Retorna o nome básico correspondente ou a cor original
    var cor = localStorage.getItem('cores');
    console.log('cores:', cor);
    console.log('Simple Color:', corMapeada ? corMapeada.nome : corHex);
    return corMapeada ? corMapeada.nome : corHex;
}

function calcularCoresAnalogas(corHex) {
    // Converte a cor hexadecimal para RGB
    let r = parseInt(corHex.slice(1, 3), 16);
    let g = parseInt(corHex.slice(3, 5), 16);
    let b = parseInt(corHex.slice(5, 7), 16);

    // Calcula as cores análogas
    let coresAnalogas = [];

    for (let i = 3; i <= 8; i++) {
        // Calcula o deslocamento na roda de cores
        let deslocamento = 30 * i;

        // Calcula as novas componentes RGB
        let novaR = (r + deslocamento) % 256;
        let novaG = (g + deslocamento) % 256;
        let novaB = (b + deslocamento) % 256;

        // Converte as componentes RGB de volta para hexadecimal
        let novaCorHex = `#${novaR.toString(16).padStart(2, '0')}${novaG.toString(16).padStart(2, '0')}${novaB.toString(16).padStart(2, '0')}`;

        // Adiciona a nova cor à lista de cores análogas
        coresAnalogas.push(novaCorHex);
    }
    // console.log('Analogous Colors:', coresAnalogas);
    return coresAnalogas;
}


