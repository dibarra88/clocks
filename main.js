function updateClock() {
    var currentTime = new Date();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();

    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
    currentHours = (currentHours == 0) ? 12 : currentHours;
    currentHours = (currentHours < 10 ? "0" : "") + currentHours;

    var currentNormalTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;
    var currentHexTimeString = "#" + currentHours + currentMinutes + currentSeconds;

    document.getElementById("clock").firstChild.nodeValue = currentNormalTimeString;
    document.getElementById("hexClock").firstChild.nodeValue = currentHexTimeString;
    document.getElementById("clockBackground2").style.backgroundColor = currentHexTimeString;
    console.log(currentHexTimeString);
}