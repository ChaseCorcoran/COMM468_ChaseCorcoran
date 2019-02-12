function startTimer() {
    var userTime = document.getElementById("userInput").value * 1000;
    setTimeout(function(){ alert("Timer Complete!"); }, userTime);
}