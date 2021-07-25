function showTime() {
    currentTime = new Date()
    h = currentTime.getHours();
    m = currentTime.getMinutes();
    s = currentTime.getSeconds();
    message = ""

    h = (h < 10) ? "0" + h:h;
    m = (m < 10) ? "0" + m:m;
    s = (s < 10) ? "0" + s:s;
 
    if (h > 0) {
        message = "On seas with goal of day"
    }

    if(h > 5) {
        message = "Day break and toil on the path"
    }

    if(h > 12) {
        message = "Good Afternoon, a break and back to the field"
    }

    if(h > 18) {
        message = "Land search for night shore"
    }

    if(h > 21) {
        message = "Go with the flow"
    }

    time = h + ":" + m + ":" + s + " " + message;

    document.getElementById("clock").innerText = time;
    setInterval(showTime, 1000);
}

showTime();