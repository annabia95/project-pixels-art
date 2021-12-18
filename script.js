const idPaleta = document.getElementById('color-palette');
const idPixel = document.getElementById('pixel-board');

// Requisitos 2 e 3 - Minha primeira função irá criar os quadrados de forma dinâmica!
function createPallete () {
for (let index = 0; index < 4; index += 1){
    if (index === 0){
        let squareBlack = document.createElement ('div');
        squareBlack.classList = 'color';
        idPaleta.appendChild(squareBlack);
        squareBlack.style.backgroundColor = 'black';
    } else if (index === 1){
        let squareRed = document.createElement ('div');
        squareRed.classList = 'color';
        idPaleta.appendChild(squareRed);
        squareRed.style.backgroundColor = 'red';
    } else if (index === 2){
        let squareBlue = document.createElement ('div');
        squareBlue.classList = 'color';
        idPaleta.appendChild(squareBlue);
        squareBlue.style.backgroundColor = 'blue';
    }else if (index === 3){
        let squareGreen = document.createElement ('div');
        squareGreen.classList = 'color';
        idPaleta.appendChild(squareGreen);
        squareGreen.style.backgroundColor = 'green';
    }
}
}
createPallete();

// Requisitos 4 e 5 - Minha segunda função irá criar os pixels! (refatorei o código, ao invés de fazer em forma de div, fiz em forma de tabela!)
function createPixels (number){
for (let index = 0; index < number; index += 1) {
const linha = document.createElement('tr');
  for (let index = 0; index < number; index += 1){
        let pixels = document.createElement ('td');
        pixels.classList = 'pixel';
        linha.appendChild(pixels);
      }
        idPixel.appendChild (linha);
    }
}
createPixels (5);

// Requisitos 6 -  Minha terceira função define a cor preta como inicial!
function selectedBlack (){
  let black = document.querySelector ('.color');
  black.classList.add ('selected');
  black.style.backgroundColor = 'black';
}
selectedBlack ();

// Requisito 7 - Minha quarta função adiciona e remove a classe selected de uma cor!
idPaleta.addEventListener('click', (event) => {
    const elementsColor = document.querySelectorAll('.color');
  // Estou percorrendo toda a minha paleta, checando se a classe selected está presente!
  for (let index = 0; index < elementsColor.length; index += 1) {
      if (elementsColor[index].classList.contains ('selected')) {
         elementsColor[index].classList.remove ('selected');
        }
// Ao clicar, adiciono a classe selected!
        event.target.classList.add ('selected');
        }
}); 


// Requisito 8 - Seleciona uma cor da paleta e preenche o pixel (requisito similar a uma questão do Calendário Tryber)
function pintaPixel() {
    const pixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].addEventListener('click', function() {
        pixel[index].style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
      });
    }
  }
  pintaPixel();

// Requisito 9
let btnClear = document.querySelector ('#clear-board');
function limpaPixel () {
    let pixel = document.querySelectorAll('.pixel');
    btnClear.addEventListener ('click', function () {
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'white';
    }
}
)};
limpaPixel ();