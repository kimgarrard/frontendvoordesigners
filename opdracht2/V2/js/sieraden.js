/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex-1].className += " active";
};




window.onload = function() {

    var dot1 = document.querySelector(".dot:nth-of-type(1)");
    var dot2 = document.querySelector(".dot:nth-of-type(2)");
    var dot3 = document.querySelector(".dot:nth-of-type(3)");
    var next = document.querySelector(".next");
    var prev = document.querySelector(".prev");
    var body = document.querySelector("body");

    dot1.onclick = show1;
    dot2.onclick = show2;
    dot3.onclick = show3;
    next.onclick = showNext;
    prev.onclick = showPrev;
    body.onkeydown = getKeyAndMove;
};

function show1() {
  currentSlide(1);
};

function show2() {
  currentSlide(2);
};

function show3() {
  currentSlide(3);
};

function showNext() {
  plusSlides(1);
};

function showPrev() {
  plusSlides(-1);
};

function getKeyAndMove(e){
		var key_code=e.which||e.keyCode;
		switch(key_code){
			case 37: //left arrow key
				moveLeft();
				break;
			case 39: //right arrow key
				moveRight();
				break;
		}
	}

  function moveLeft() {
    plusSlides(-1);
  };

  function moveRight() {
    plusSlides(1);
  };






// <input type="text" onkeydown="myFunction()">
//
// <script>
// function myFunction() {
//   alert("You pressed a key inside the input field");
// }


// var xTriggered = 0;
// $( "#target" ).keyup(function( event ) {
//   xTriggered++;
//   var msg = "Handler for .keyup() called " + xTriggered + " time(s).";
//   $.print( msg, "html" );
//   $.print( event );
// }).keydown(function( event ) {
//   if ( event.which == 13 ) {
//     event.preventDefault();
//   }
// });
//
// $( "#other").click(function() {
//   $( "#target" ).keyup();
// });
