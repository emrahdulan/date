document.getElementById("yesButton").onclick = function() {
    document.getElementById("response").innerText = "Yay!";
    var catImage = document.getElementById("catImage");
    catImage.classList.add("dancing");
  };
  
  document.getElementById("noButton").onclick = function() {
    var minX = 50;
    var maxX = 300;
    var minY = 50;
    var maxY = 300;
  
    var noButton = document.getElementById("noButton");
  
    var randomX = Math.random() * (maxX - minX) + minX;
    var randomY = Math.random() * (maxY - minY) + minY;
  
    noButton.style.position = "absolute";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
  };
  