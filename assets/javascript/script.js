var test = ["Hello", 0, false
, undefined, null, "to", "", "YOU", "", "YO YO"];
console.log(test.filter(fuck=>fuck!=""));
console.log(test.filter(Boolean));
console.log(test);
console.log(test.filter(fuck=>fuck));

let buzz = document.getElementById('buzz');
let dale = document.getElementById('dale');
let trevor = document.getElementById('trevor');

function bollocks() {
    if (buzz.getAttribute('src') == "assets/images/buzz.jpeg") {
        buzz.src = "assets/images/melvins.jpg";
    } else  {
        buzz.src = "assets/images/buzz.jpeg";
    }
}

