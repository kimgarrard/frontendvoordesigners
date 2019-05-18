/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/




var currentPicture = 1;
var carouselDiv = document.querySelector("#carousel div");

var nextButton = document.querySelector(".next");
var prevButton = document.querySelector(".prev");
var body = document.querySelector("body");
var pic1 = document.querySelector("picture:nth-of-type(1)");
var pic2 = document.querySelector("picture:nth-of-type(2)");
var pic3 = document.querySelector("picture:nth-of-type(3)");

var dot1 = document.querySelector(".dot:nth-of-type(1)");
var dot2 = document.querySelector(".dot:nth-of-type(2)");
var dot3 = document.querySelector(".dot:nth-of-type(3)");

body.onkeydown = getKeyAndMove;
nextButton.onclick = moveRight;
prevButton.onclick = moveLeft;

function getKeyAndMove(e){
		var key_code=e.which||e.keyCode;
		switch(key_code){
			case 37: //left arrow kew
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
    move();
    movetoRight()
  }
  function moveLeft() {
    currentPicture -= 1;
    if (currentPicture < 1) {
      currentPicture = 3;
    }
    prevButton.classList.remove("buttonActive");
    move();
    movetoLeft()
  }

  function move(){
    console.log("currentPicture", currentPicture);
    carouselDiv.classList.remove("positionPic1");
    carouselDiv.classList.remove("positionPic2");
    carouselDiv.classList.remove("positionPic3");
    carouselDiv.classList.remove("position1");
    carouselDiv.classList.remove("position2");
    carouselDiv.classList.remove("position3");
    carouselDiv.classList.remove("pos1");
    carouselDiv.classList.remove("pos2");
    carouselDiv.classList.remove("pos3");
    pic1.classList.remove("fade");
    pic2.classList.remove("fade");
    pic3.classList.remove("fade");
    pic1.classList.remove("fade2");
    pic2.classList.remove("fade2");
    pic3.classList.remove("fade2");
    dot1.classList.remove("current");
    dot2.classList.remove("current");
    dot3.classList.remove("current");
    prevButton.classList.remove("buttonActive");

    if (currentPicture == 1) {
        carouselDiv.classList.add("pos1");
        pic1.classList.add("fade2");
        dot1.classList.add("current")
    } else if (currentPicture == 2) {
        carouselDiv.classList.add("pos2");
        pic2.classList.add("fade2");
        dot2.classList.add("current")
    } else if (currentPicture == 3) {
        carouselDiv.classList.add("pos3");
        pic3.classList.add("fade2");
        dot3.classList.add("current")
    }
  };

function movetoRight(){

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

function movetoLeft(){

  if (currentPicture == 1) {
      carouselDiv.classList.add("position1");
      pic1.classList.add("fade");
  } else if (currentPicture == 2) {
      carouselDiv.classList.add("position2");
      pic2.classList.add("fade");
  } else if (currentPicture == 3) {
      carouselDiv.classList.add("position3");
      pic3.classList.add("fade");
  }
}


var tekst = document.querySelector(".assortiment");

window.onscroll = function() {
  tekstAppear()
};

function tekstAppear() {
  if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
    tekst.classList.add("tekst");
  } else {
    tekst.classList.remove("tekst");
  }
}







dot1.onclick = show1;
dot2.onclick = show2;
dot3.onclick = show3;

function show1() {
  // body.classList.add("test");
  currentPicture = 1;
  if (currentPicture == 1) {
    move();
  }
  console.log("currentPicture", currentPicture);
}

function show2() {
  currentPicture = 2;
  if (currentPicture == 2) {
    move();
  console.log("currentPicture", currentPicture);
}
}

function show3() {
  currentPicture = 3;
  if (currentPicture == 3) {
    move();
  console.log("currentPicture", currentPicture);
}
}



// function move(){
//   carouselDiv.classList.remove("pos1");
//   carouselDiv.classList.remove("pos2");
//   carouselDiv.classList.remove("pos3");
//   pic1.classList.remove("fade2");
//   pic2.classList.remove("fade2");
//   pic3.classList.remove("fade2");
//
//   if (currentPicture == 1) {
//       carouselDiv.classList.add("pos1");
//       pic1.classList.add("fade2");
//   } else if (currentPicture == 2) {
//       carouselDiv.classList.add("pos2");
//       pic2.classList.add("fade2");
//   } else if (currentPicture == 3) {
//       carouselDiv.classList.add("pos3");
//       pic3.classList.add("fade2");
//   }
// };
