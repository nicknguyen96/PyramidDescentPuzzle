import findPathProduct from './pyramid.js';

// let input = [
//     [2],
//     [4, 3],
//     [3, 2, 6],
//     [2, 9, 5, 2],
//     [10, 5, 2, 15, 5]
// ]

// let target = 720;

const button = document.querySelector("#button");
const inputElement = document.querySelector('#input');
const output = document.querySelector('#output');

console.log(button)

const handleClick = () => {
    const input = inputElement.value.trim();
    const pyramid = [];
    let currentRow = [];
    let currentNumber = '';
    let target = 0;
    for (let i = 0 ; i < input.length; i++){
        if (input[i] === "]"){
            currentNumber = parseInt(currentNumber);
            currentRow.push(currentNumber);
            currentNumber = '';
            pyramid.push(currentRow);
            currentRow = [];
        }
        if (input[i] === ','){
            currentNumber = parseInt(currentNumber);
            currentRow.push(currentNumber);
            currentNumber = '';
        }
        if (input[i] === '\n'){
            target = parseInt(input.substring(i+1, input.length));
            break;
        }
        if (input[i] >= '0' && input[i] <= '9'){
            currentNumber += input[i];
        }
    }
    output.innerText = findPathProduct(pyramid, target);
}

button.addEventListener('click', handleClick);