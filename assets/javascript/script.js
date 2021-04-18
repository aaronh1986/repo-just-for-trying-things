function gameRules() {
    let numberOne = Math.floor(Math.random() * 25) + 1;
    let numberTwo = Math.floor(Math.random() * 25) + 1;
    let firstValue = document.getElementById('first');
    let secondValue = document.getElementById('second');
    let answer = document.getElementById('answer');
    answer.value = "";
    let submit = document.getElementById('submit');
    answer.focus();
    firstValue.innerHTML = numberOne;
    secondValue.innerHTML = numberTwo;  
     

    return numberOne + numberTwo;
}

gameRules();