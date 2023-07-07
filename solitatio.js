function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

counterTime();



function counterTime() {
  var timeGame = 1;
  var l = document.getElementById("timer");
  window.setInterval(function () {
      l.innerHTML = timeGame;
      timeGame++;
  }, 1000);
}

var cards = [
  'images/baraja/1-cir.png',
  'images/baraja/2-cir.png',
  'images/baraja/3-cir.png',
  'images/baraja/4-cir.png',
  'images/baraja/5-cir.png',
  'images/baraja/6-cir.png',
  'images/baraja/7-cir.png',
  'images/baraja/8-cir.png',
  'images/baraja/9-cir.png',
  'images/baraja/10-cir.png',
  'images/baraja/11-cir.png',
  'images/baraja/12-cir.png',
  'images/baraja/1-cua.png',
  'images/baraja/2-cua.png',
  'images/baraja/3-cua.png',
  'images/baraja/4-cua.png',
  'images/baraja/5-cua.png',
  'images/baraja/6-cua.png',
  'images/baraja/7-cua.png',
  'images/baraja/8-cua.png',
  'images/baraja/9-cua.png',
  'images/baraja/10-cua.png',
  'images/baraja/11-cua.png',
  'images/baraja/12-cua.png',
  'images/baraja/1-hex.png',
  'images/baraja/2-hex.png',
  'images/baraja/3-hex.png',
  'images/baraja/4-hex.png',
  'images/baraja/5-hex.png',
  'images/baraja/6-hex.png',
  'images/baraja/7-hex.png',
  'images/baraja/8-hex.png',
  'images/baraja/9-hex.png',
  'images/baraja/10-hex.png',
  'images/baraja/11-hex.png',
  'images/baraja/12-hex.png',
  'images/baraja/1-viu.png',
  'images/baraja/2-viu.png',
  'images/baraja/3-viu.png',
  'images/baraja/4-viu.png',
  'images/baraja/5-viu.png',
  'images/baraja/6-viu.png',
  'images/baraja/7-viu.png',
  'images/baraja/8-viu.png',
  'images/baraja/9-viu.png',
  'images/baraja/10-viu.png',
  'images/baraja/11-viu.png',
  'images/baraja/12-viu.png',
];
