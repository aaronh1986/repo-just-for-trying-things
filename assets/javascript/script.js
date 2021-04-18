function calculateAnswer() {
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
    
} else {
    alert('NOOOOOOOOOOOOOO, WROOOOOOOOOOOOOOOONG')
   
}
})
}

calculateAnswer();