var moveButton = document.querySelector("button:nth-child(2)") ;

var correctlyButton = document.querySelector("button:first-child");

moveButton.addEventListener("click", function () {
  var vertical = Math.floor(Math.random() * 400);
  var horizontal = Math.floor(Math.random() * 400);
  moveButton.style.position = "absolute";
  moveButton.style.left = vertical + "px";
  moveButton.style.top = horizontal + "px";
});

correctlyButton.addEventListener("click", function () {
  var temCerteza = confirm("Tem certeza? Me ama mesmo?");
  if (temCerteza) {
    alert("Resposta correta! Eu te amo meu amor!");

    // Add a cool effect: fade out the buttons
    document.querySelectorAll('button').forEach(button => {
      button.style.transition = 'opacity 1s';
      button.style.opacity = '0';
    });

    // Add a cool effect: change background color
    document.body.style.transition = 'background-color 1s';
    document.body.style.backgroundColor = 'red'; // Red color
    setTimeout(function() {
      alert("Melhor namorado do mundo!");
    }, 2000);
  }
});