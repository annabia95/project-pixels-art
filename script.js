const idPaleta = document.getElementById('color-palette');
const idPixel = document.getElementById('pixel-board');

// Minha primeira função irá criar os quadrados de forma dinâmica!
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

// Minha segunda função irá criar os pixels!
function createPixels (number){
  for (let index = 0; index < number; index += 1){
        let pixels = document.createElement ('div');
        pixels.classList = 'pixel';
        idPixel.appendChild(pixels);
        pixels.style.backgroundColor = 'white';
  };
}
createPixels (25);

// Minha terceira função define a cor preta como inicial!
function selectedBlack (){
  let black = document.querySelector ('.color');
  black.classList.add ('selected');
  black.style.backgroundColor = 'black';
}
selectedBlack ();

// Minha quarta função adiciona e remove a classe selected de uma cor!
idPaleta.addEventListener('click', (event) => {
    const elementsColor = document.querySelectorAll('.color');
  // Estou percorrendo toda a minha paleta, checando se a classe selected está presente!
  for (let index = 0; index < elementsColor.length; index += 1) {
      if (elementsColor[index].classList.contains ('selected')) {
         elementsColor[index].classList.remove ('selected');
        }
        event.target.classList.add ('selected');
        }
}); 
