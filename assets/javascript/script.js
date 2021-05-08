/* function calculateAnswer() {
    let numberOne = Math.floor(Math.random() * 25) + 1;
    let numberTwo = Math.floor(Math.random() * 25) + 1;
    let firstValue = document.getElementById('first');
    let secondValue = document.getElementById('second');
    firstValue.innerHTML = numberOne;
    secondValue.innerHTML = numberTwo;  
    let submit = document.getElementById('submit');
    let answer = document.getElementById('answer');
    answer.focus();
    submit.addEventListener('click', function() {
if (answer.value == numberOne + numberTwo) {
    alert('I guess you\'re not a fucking idiot after all.')
    resetGame();
} else {
    alert('NOOOOOOOOOOOOOO, WROOOOOOOOOOOOOOOONG')
   resetGame();
}
})
}

calculateAnswer();

function resetGame() {
    let answer = document.getElementById('answer');
    answer.value="";
    let numberOne = Math.floor(Math.random() * 25) + 1;
    let numberTwo = Math.floor(Math.random() * 25) + 1;
    let firstValue = document.getElementById('first');
    let secondValue = document.getElementById('second');
    firstValue.innerHTML = numberOne;
    secondValue.innerHTML = numberTwo;  
    
}

 */

class Square {

    constructor(_width, _color) {
        this.width = _width;
        this.height = _width;
        this.color = _color;
    }

    getArea() {
        return this.width * this.height;
    }

    printDescription() {
        console.log(`Call me a square, and say that I am ${this.width} mega bits wide and ${this.height} ultra heights high. Then tell me that I am ${this.color}. I'll tell you that you are correct.`)
    }
}

let squareOne = new Square(100, "red");
let squareTwo = new Square(4, "blue");

console.log(squareTwo.getArea());
console.log(squareOne.printDescription());