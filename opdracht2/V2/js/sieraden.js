/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

// var slideIndex = 1;
// showSlides(slideIndex);
//
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
//
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
//
// function showSlides(n) {
//   var i;
//   var slides = document.querySelectorAll(".mySlides");
//   var dots = document.querySelectorAll(".dot");
//   if (n > slides.length) {slideIndex = 1};
//   if (n < 1) {slideIndex = slides.length};
//
//   for (slidesI of slides) {
//       slidesI.classList.add("hide");
//   }
//   slides[slideIndex-1].classList.replace("hide","show");
//
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   dots[slideIndex-1].className += " active";
// };
//
//
//
//
// window.onload = function() {
//
//     var dot1 = document.querySelector(".dot:nth-of-type(1)");
//     var dot2 = document.querySelector(".dot:nth-of-type(2)");
//     var dot3 = document.querySelector(".dot:nth-of-type(3)");
//     var next = document.querySelector(".next");
//     var prev = document.querySelector(".prev");
//     var body = document.querySelector("body");
//
//     dot1.onclick = show1;
//     dot2.onclick = show2;
//     dot3.onclick = show3;
//     next.onclick = showNext;
//     prev.onclick = showPrev;
//     body.onkeydown = getKeyAndMove;
// };
//
// function show1() {
//   currentSlide(1);
// };
//
// function show2() {
//   currentSlide(2);
// };
//
// function show3() {
//   currentSlide(3);
// };
//
// function showNext() {
//   plusSlides(1);
// };
//
// function showPrev() {
//   plusSlides(-1);
// };
//
// function getKeyAndMove(e){
// 		var key_code=e.which||e.keyCode;
// 		switch(key_code){
// 			case 37: //left arrow key
// 				moveLeft();
// 				break;
// 			case 39: //right arrow key
// 				moveRight();
// 				break;
// 		}
// 	}
//
//   function moveLeft() {
//     plusSlides(-1);
//   };
//
//   function moveRight() {
//     plusSlides(1);
//   };



var currentPicture = 1;
var carouselDiv = document.querySelector("#carousel div");

var nextButton = document.querySelector(".next");
var prevButton = document.querySelector(".prev");
var body = document.querySelector("body");
var pic1 = document.querySelector("picture:nth-of-type(1)");
var pic2 = document.querySelector("picture:nth-of-type(2)");
var pic3 = document.querySelector("picture:nth-of-type(3)");

body.onkeydown = getKeyAndMove;
nextButton.onclick = moveRight;
prevButton.onclick = moveLeft;

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

function moveRight() {
    currentPicture += 1;
    if (currentPicture > 3) {
      currentPicture = 1;
    }
    move()
  }
  function moveLeft() {
    currentPicture -= 1;
    if (currentPicture < 1) {
      currentPicture = 3;
    }
    move()
  }

function move(){
  console.log("currentPicture", currentPicture);
  carouselDiv.classList.remove("positionPic1");
  carouselDiv.classList.remove("positionPic2");
  carouselDiv.classList.remove("positionPic3");
  pic1.classList.remove("fade");
  pic2.classList.remove("fade");
  pic3.classList.remove("fade");

  if (currentPicture == 1) {
      carouselDiv.classList.add("positionPic1");
      pic1.classList.add("fade");
  } else if (currentPicture == 2) {
      carouselDiv.classList.add("positionPic2");
      pic2.classList.add("fade");
  } else if (currentPicture == 3) {
      carouselDiv.classList.add("positionPic3");
      pic3.classList.add("fade");
  }
}
