const idPaleta = document.getElementById('color-palette');

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
