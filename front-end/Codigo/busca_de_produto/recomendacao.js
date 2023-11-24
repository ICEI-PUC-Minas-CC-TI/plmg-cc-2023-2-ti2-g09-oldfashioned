//<script src="ColorSchemeGenerator.java">

function analyzeImage() {
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
        console.log(color.toLowerCase());
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
            }
        });

    });

 // Exibe a imagem carregada
 const uploadedImage = document.getElementById("uploadedImage");
uploadedImage.src = URL.createObjectURL(imageFile);
          
})
.catch(error => console.error("Erro ao analisar imagem: " + error));
}
function encontrarCorEquivalente(cor) {
cor = cor.toUpperCase()
const mapeamentoCores = [
{ range: ['#000000', '#333333'], nome: 'preto' },
{ range: ['#333333', '#666666'], nome: 'preto' },
{ range: ['#666666', '#999999'], nome: 'xadrez' },
{ range: ['#999999', '#CCCCCC'], nome: 'xadrez' },
{ range: ['#CCCCCC', '#FFFFFF'], nome: 'branco' },
{ range: ['#FF0000', '#FF6666'], nome: 'rosa' },
{ range: ['#FF6666', '#FF9999'], nome: 'vinho' },
{ range: ['#00FF00', '#66FF66'], nome: 'verde' },
{ range: ['#66FF66', '#99FF99'], nome: 'verde' },
{ range: ['#0000FF', '#6699FF'], nome: 'azul' },
{ range: ['#6699FF', '#9999FF'], nome: 'azul' },
{ range: ['#FFFF00', '#FFFF66'], nome: 'florido' },
{ range: ['#FF00FF', '#FF66FF'], nome: 'rosa' },
{ range: ['#00FFFF', '#66FFFF'], nome: 'azul' },
{ range: ['#800000', '#CC6666'], nome: 'marrom claro' },
];
// Converte a cor para minúsculas para garantir correspondência insensível a maiúsculas e minúsculas
const corMinuscula = cor.toLowerCase();

// Percorre o array de mapeamento
for (const mapeamento of mapeamentoCores) {
const [inicio, fim] = mapeamento.range.map(c => c.toLowerCase());

// Verifica se a cor fornecida está dentro do intervalo
if (corMinuscula >= inicio && corMinuscula <= fim) {
return mapeamento.nome;
}
}

// Se a cor não se encaixa em nenhum intervalo, retorna um valor padrão ou lança uma exceção, conforme necessário
return 'Cor não encontrada';
}
function converterCorSimples(corHex) {
// Mapeia os ranges de cores para nomes básicos
corHex = corHex.toUpperCase()
const mapeamentoCores = [
{ range: ['#000000', '#333333'], nome: 'preto' },
{ range: ['#333333', '#666666'], nome: 'preto' },
{ range: ['#666666', '#999999'], nome: 'xadrez' },
{ range: ['#999999', '#CCCCCC'], nome: 'xadrez' },
{ range: ['#CCCCCC', '#FFFFFF'], nome: 'branco' },
{ range: ['#FF0000', '#FF6666'], nome: 'rosa' },
{ range: ['#FF6666', '#FF9999'], nome: 'vinho' },
{ range: ['#00FF00', '#66FF66'], nome: 'verde' },
{ range: ['#66FF66', '#99FF99'], nome: 'verde' },
{ range: ['#0000FF', '#6699FF'], nome: 'azul' },
{ range: ['#6699FF', '#9999FF'], nome: 'azul' },
{ range: ['#FFFF00', '#FFFF66'], nome: 'florido' },
{ range: ['#FF00FF', '#FF66FF'], nome: 'rosa' },
{ range: ['#00FFFF', '#66FFFF'], nome: 'azul' },
{ range: ['#800000', '#CC6666'], nome: 'marrom claro' },
];

// Converte a cor hexadecimal para um número decimal
const corDecimal = parseInt(corHex.slice(1), 16);

// Encontra o range correspondente
const corMapeada = mapeamentoCores.find(item => {
const inicio = parseInt(item.range[0].slice(1), 16);
const fim = parseInt(item.range[1].slice(1), 16);
return corDecimal >= inicio && corDecimal < fim;
});

// Retorna o nome básico correspondente ou a cor original
return corMapeada ? corMapeada.nome : corHex;
} 

function calcularCoresAnalogas(corHex) {
// Converte a cor hexadecimal para RGB
let r = parseInt(corHex.slice(1, 3), 16);
let g = parseInt(corHex.slice(3, 5), 16);
let b = parseInt(corHex.slice(5, 7), 16);

// Calcula as cores análogas
let coresAnalogas = [];
let coresAnalogasNome= [];

for (let i = 3; i <= 8; i++) {
// Calcula o deslocamento na roda de cores
let deslocamento = 30 * i;

// Calcula as novas componentes RGB
let novaR = (r + deslocamento) % 256;
let novaG = (g + deslocamento) % 256;
let novaB = (b + deslocamento) % 256;

// Converte as componentes RGB de volta para hexadecimal
let novaCorHex = `#${novaR.toString(16).padStart(2, '0')}${novaG.toString(16).padStart(2, '0')}${novaB.toString(16).padStart(2, '0')}`;

coresAnalogas.push(novaCorHex);
// Adiciona a nova cor à lista de cores análogas
var n_match = ntc.name(novaCorHex);

//coresAnalogasNome.push(converterCorSimples(novaCorHex));
coresAnalogasNome.push(n_match[1]);
}

console.log('Analogous Colors:', coresAnalogas);
console.log('Analogous Colors:', coresAnalogasNome);

//salvando no local Storage
localStorage.setItem('cores', coresAnalogasNome);
return coresAnalogas;
}

//nesse projeto, a ferramenta "Name That Color" foi alterada e incluida, feita por Chirag Mehta - http://chir.ag/projects/ntc
var ntc = {

init: function() {
var color, rgb, hsl;
for(var i = 0; i < ntc.names.length; i++)
{
color = "#" + ntc.names[i][0];
rgb = ntc.rgb(color);
hsl = ntc.hsl(color);
ntc.names[i].push(rgb[0], rgb[1], rgb[2], hsl[0], hsl[1], hsl[2]);
}
},

name: function(color) {

color = color.toUpperCase();
if(color.length < 3 || color.length > 7)
return ["#000000", "Invalid Color: " + color, false];
if(color.length % 3 == 0)
color = "#" + color;
if(color.length == 4)
color = "#" + color.substr(1, 1) + color.substr(1, 1) + color.substr(2, 1) + color.substr(2, 1) + color.substr(3, 1) + color.substr(3, 1);

var rgb = ntc.rgb(color);
var r = rgb[0], g = rgb[1], b = rgb[2];
var hsl = ntc.hsl(color);
var h = hsl[0], s = hsl[1], l = hsl[2];
var ndf1 = 0; ndf2 = 0; ndf = 0;
var cl = -1, df = -1;

for(var i = 0; i < ntc.names.length; i++)
{
if(color == "#" + ntc.names[i][0])
return ["#" + ntc.names[i][0], ntc.names[i][1], true];

ndf1 = Math.pow(r - ntc.names[i][2], 2) + Math.pow(g - ntc.names[i][3], 2) + Math.pow(b - ntc.names[i][4], 2);
ndf2 = Math.pow(h - ntc.names[i][5], 2) + Math.pow(s - ntc.names[i][6], 2) + Math.pow(l - ntc.names[i][7], 2);
ndf = ndf1 + ndf2 * 2;
if(df < 0 || df > ndf)
{
df = ndf;
cl = i;
}
}

return (cl < 0 ? ["#000000", "Invalid Color: " + color, false] : ["#" + ntc.names[cl][0], ntc.names[cl][1], false]);
},

// adopted from: Farbtastic 1.2
// http://acko.net/dev/farbtastic
hsl: function (color) {

var rgb = [parseInt('0x' + color.substring(1, 3)) / 255, parseInt('0x' + color.substring(3, 5)) / 255, parseInt('0x' + color.substring(5, 7)) / 255];
var min, max, delta, h, s, l;
var r = rgb[0], g = rgb[1], b = rgb[2];

min = Math.min(r, Math.min(g, b));
max = Math.max(r, Math.max(g, b));
delta = max - min;
l = (min + max) / 2;

s = 0;
if(l > 0 && l < 1)
s = delta / (l < 0.5 ? (2 * l) : (2 - 2 * l));

h = 0;
if(delta > 0)
{
if (max == r && max != g) h += (g - b) / delta;
if (max == g && max != b) h += (2 + (b - r) / delta);
if (max == b && max != r) h += (4 + (r - g) / delta);
h /= 6;
}
return [parseInt(h * 255), parseInt(s * 255), parseInt(l * 255)];
},

// adopted from: Farbtastic 1.2
// http://acko.net/dev/farbtastic
rgb: function(color) {
return [parseInt('0x' + color.substring(1, 3)), parseInt('0x' + color.substring(3, 5)),  parseInt('0x' + color.substring(5, 7))];
},


names: [
["000000" || "1B1404", "preto"],
[ "5656F6" || "20208D" || "4EABD1" || "1E9AB0" || "0F2D9E" || "0000FF", "azul"],
["BAEB87" || "1ACA9E" || "33CC99" || "327C14" || "ADDFAD" || "C5E17A" || "CEC7A7" || "D4C4A8",  "verde"],
["ED9121" || "F5DEB3" || "D4CD16" || "FFBF00" || "FFFF00" || "FFB447", "florido"],
["F627C3"||"9966CC" || "E47698" || "FF00FF" || "FF00CC" || "E0B0FF" || "EA88A8" || "FF6FFF" || "EEC1BE" || "DC143C" || "E32636", "rosa"],
["780109" || "B32D29" || "770F05" || "871550", "vinho"],
["FFFFFF", "White"]
]
}
ntc.init();