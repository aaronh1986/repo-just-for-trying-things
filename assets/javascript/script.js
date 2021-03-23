function mult(bill, mcguire) {
    return bill + mcguire;
}

let multiplyNum = mult(1, 5);
console.log(multiplyNum);







function buildHelloArray (num) {
    let myArray = [];
    for (let i = 0; i < num; i++) {
        myArray.push("hello")
    } 
     return myArray;
}

let array = buildHelloArray(5);
console.log(array);

console.log(typeof(array));