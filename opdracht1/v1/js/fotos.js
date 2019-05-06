/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

console.log("hello");

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
console.log("rood",rood);
var blauw = document.querySelector(".Blauw");
var groen = document.querySelector(".Groen");
var geel = document.querySelector(".Geel");
// var h1 = document.querySelector("main > h1");
var button = document.querySelector(".filter button");
var filter = document.querySelector("#filter");
var filterColor = document.querySelector(".filter h1");

function showRed() {
    // console.log("check");
    blauw.classList.add("hidden");
    groen.classList.add("hidden");
    geel.classList.add("hidden");

    rood.classList.remove("hidden");

    filter.classList.remove("hidden");
    filterColor.innerHTML = "Rood";

    // h1.classList.remove("hidden");
    // h1.innerHTML = "Rood x";
}

function showBlue() {
    rood.classList.add("hidden");
    groen.classList.add("hidden");
    geel.classList.add("hidden");

    blauw.classList.remove("hidden");

    filter.classList.remove("hidden");
    filterColor.innerHTML = "Blauw";
}

function showGreen() {
    blauw.classList.add("hidden");
    rood.classList.add("hidden");
    geel.classList.add("hidden");

    groen.classList.remove("hidden");

    filter.classList.remove("hidden");
    filterColor.innerHTML = "Groen";
}

function showYellow() {
    blauw.classList.add("hidden");
    groen.classList.add("hidden");
    rood.classList.add("hidden");

    geel.classList.remove("hidden");

    filter.classList.remove("hidden");
    filterColor.innerHTML = "Geel";
}

button.onclick = function(){
    rood.classList.remove("hidden");
    blauw.classList.remove("hidden");
    groen.classList.remove("hidden");
    geel.classList.remove("hidden");

    filter.classList.add("hidden");
};
