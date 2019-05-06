/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

window.onload = function() {

    var red = document.querySelector('.red');
    var blue = document.querySelector('.blue');
    var green = document.querySelector('.green');
    var yellow = document.querySelector('.yellow');

    red.onclick = showRed;
    blue.onclick = showBlue;
    green.onclick = showGreen;
    yellow.onclick = showYellow;

}

var rood = document.querySelectorAll(".Rood");
var blauw = document.querySelectorAll(".Blauw");
var groen = document.querySelectorAll(".Groen");
var geel = document.querySelectorAll(".Geel");
var button = document.querySelector(".filter button");
var filter = document.querySelector("#filter");
var filterColor = document.querySelector(".filter h1");
var form = document.querySelector("section > form:nth-of-type(1)");
var background = document.querySelector("body > section");
var logo = document.querySelector("form div > a");
var p = document.querySelector("form p");
var redButton = document.querySelector("form > div > label:nth-of-type(1)");
var blueButton = document.querySelector("form > div > label:nth-of-type(2)");
var greenButton = document.querySelector("form > div > label:nth-of-type(3)");
var yellowButton = document.querySelector("form > div > label:nth-of-type(4)");


function showRed() {

  for (var kleur of blauw) {
    kleur.classList.add("hidden");
  };

  for (var kleur of groen) {
    kleur.classList.add("hidden");
  };

  for (var kleur of geel) {
    kleur.classList.add("hidden");
  };

  for (var kleur of rood) {
    kleur.classList.remove("hidden");
  };

    filter.classList.remove("hidden");
    filterColor.innerHTML = "Rood (5)";

    form.classList.add("moveForm");
    background.classList.add("moveBackground");
    background.classList.add("clickedRbg");
    logo.classList.add("Logosmall");
    p.classList.add("hidden");
    redButton.classList.add("clickedRood");

    blueButton.classList.remove("clickedBlauw");
    greenButton.classList.remove("clickedGroen");
    yellowButton.classList.remove("clickedGeel");

    background.classList.remove("clickedBbg");
    background.classList.remove("clickedGbg");
    background.classList.remove("clickedYbg");
}

function showBlue() {

  for (var kleur of rood) {
    kleur.classList.add("hidden");
  };

  for (var kleur of geel) {
    kleur.classList.add("hidden");
  };

  for (var kleur of groen) {
    kleur.classList.add("hidden");
  };

  for (var kleur of blauw) {
    kleur.classList.remove("hidden");
  };

    filter.classList.remove("hidden");
    filterColor.innerHTML = "Blauw (9)";

    form.classList.add("moveForm");
    background.classList.add("moveBackground");
    background.classList.add("clickedBbg");
    logo.classList.add("Logosmall");
    p.classList.add("hidden");
    blueButton.classList.add("clickedBlauw");

    redButton.classList.remove("clickedRood");
    greenButton.classList.remove("clickedGroen");
    yellowButton.classList.remove("clickedGeel");

    background.classList.remove("clickedRbg");
    background.classList.remove("clickedGbg");
    background.classList.remove("clickedYbg");
}

function showGreen() {

  for (var kleur of rood) {
    kleur.classList.add("hidden");
  };

  for (var kleur of geel) {
    kleur.classList.add("hidden");
  };

  for (var kleur of blauw) {
    kleur.classList.add("hidden");
  };

  for (var kleur of groen) {
    kleur.classList.remove("hidden");
  };

    filter.classList.remove("hidden");
    filterColor.innerHTML = "Groen (5)";

    form.classList.add("moveForm");
    background.classList.add("moveBackground");
    background.classList.add("clickedGbg");
    logo.classList.add("Logosmall");
    p.classList.add("hidden");
    greenButton.classList.add("clickedGroen");

    redButton.classList.remove("clickedRood");
    blueButton.classList.remove("clickedBlauw");
    yellowButton.classList.remove("clickedGeel");

    background.classList.remove("clickedBbg");
    background.classList.remove("clickedRbg");
    background.classList.remove("clickedYbg");
}

function showYellow() {

  for (var kleur of rood) {
    kleur.classList.add("hidden");
  };

  for (var kleur of blauw) {
    kleur.classList.add("hidden");
  };

  for (var kleur of groen) {
    kleur.classList.add("hidden");
  };

  for (var kleur of geel) {
    kleur.classList.remove("hidden");
  };

    filter.classList.remove("hidden");
    filterColor.innerHTML = "Geel (5)";

    form.classList.add("moveForm");
    background.classList.add("moveBackground");
    background.classList.add("clickedYbg");
    logo.classList.add("Logosmall");
    p.classList.add("hidden");
    yellowButton.classList.add("clickedGeel");

    redButton.classList.remove("clickedRood");
    blueButton.classList.remove("clickedBlauw");
    greenButton.classList.remove("clickedGroen");

    background.classList.remove("clickedBbg");
    background.classList.remove("clickedGbg");
    background.classList.remove("clickedRbg");
}

button.onclick = function(){
  for (var kleur of rood) {
    kleur.classList.remove("hidden");
  };

  for (var kleur of blauw) {
    kleur.classList.remove("hidden");
  };

  for (var kleur of groen) {
    kleur.classList.remove("hidden");
  };

  for (var kleur of geel) {
    kleur.classList.remove("hidden");
  };

    filter.classList.add("hidden");

    redButton.classList.remove("clickedRood");
    blueButton.classList.remove("clickedBlauw");
    greenButton.classList.remove("clickedGroen");
    yellowButton.classList.remove("clickedGeel");

    background.classList.remove("clickedRbg");
    background.classList.remove("clickedBbg");
    background.classList.remove("clickedGbg");
    background.classList.remove("clickedYbg");

};

// var foto = document.querySelectorAll(".fotos div");
//
// window.onload = function(event) {
//   event.preventDefault();
//   for (foto2 of foto) {
//     foto2.onclick = showFoto;
// };
//
// function showFoto() {
//     foto2.classList.toggle("clickFoto");
//   };
//
// };








var pictures = document.querySelectorAll('.fotos div');
var foto = document.querySelectorAll(".fotos div img");

pictures.forEach(function(pic){
  pic.addEventListener('click', function(e){
     this.classList.toggle("lightbox");
  });
});




















// $('#button_id').on('click', function(){
//   $('#element_want_to_target').addClass('.animation_class');
//
// });
