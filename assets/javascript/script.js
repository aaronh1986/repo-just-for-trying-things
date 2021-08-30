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


function testTheCheatsheet() {
    let str = "mgnbrch"
    console.log(str.charAt(1))
    let length = str.length
    console.log(length)
    console.log(str.concat(" Wlfckwmnnxtmnth"))
    console.log(str.endsWith('hello'));
    console.log((str.includes('br')));
    console.log(str.indexOf('c'));
    console.log(str.search('g'));
    console.log(str.slice(0, 7));
    console.log(str.split(""));
    console.log(str.startsWith('hello'));
    console.log(str.substring(0, 4))
    let upper = str.toUpperCase()
    console.log(upper);
    console.log(upper.toLowerCase())
    console.log("       mgnbrch".trim())
}

testTheCheatsheet();
