
var uri = "https://open.data.amsterdam.nl/Attracties.json";

var header = document.querySelector('header');
var title = document.querySelector('h1');
var section = document.querySelector('section');
var button = document.querySelector("button");
var loaderElement = document.querySelector(".loader");
var buttonUp = document.querySelector("article + p");


var data; //wordt gevuld na het laden van de json
var language = "nl";
var eersteitem = 0;
var laatsteitem = 30;


var img1 = document.querySelector(".slider img:nth-of-type(1)");
var img2 = document.querySelector(".slider img:nth-of-type(2)");
var img3 = document.querySelector(".slider img:nth-of-type(3)");
var img4 = document.querySelector(".slider img:nth-of-type(4)");

var slidertekst = document.querySelector(".slidertekst");
var nextButton = document.querySelector(".next");
var prevButton = document.querySelector(".prev");

var currentPicture = 1;
var carouselDiv = document.querySelector(".slider div");








function showData(jsonObj) {
  data = jsonObj;
  console.log("JsonObj data",data);

  // //data uit de json halen
  for (var i = eersteitem; i < laatsteitem; i++) { //alleen de eerste 30 aanmaken ..

    var attracties = document.createElement('article');

    var titel = document.createElement('h2');
    titel.textContent = data[i].title;

    var imgSection = document.createElement("section");
    var media = data[i].media;
    for (var a = 0; a < media.length; a++) {
      var img = document.createElement("img");
      img.src = media[0].url;
      imgSection.appendChild(img);

      img1.src = data[26].media[0].url;
      img2.src = data[28].media[0].url;
      img3.src = data[15].media[2].url;
      img4.src = data[23].media[0].url;

    var details = document.createElement("p");
    var detaillong = data[i].details[language].longdescription;
    var detailshort = data[i].details[language].shortdescription;
      if (detaillong == "") {
                detaillong = detailshort;
      }
    details.innerHTML = detaillong;

    }

    attracties.appendChild(titel);
    attracties.appendChild(details);
    attracties.appendChild(imgSection);

    section.appendChild(attracties);



  } //end: for loop data.length

  setupLanguage();
  slider();
  scrollToElement();
  lazyloading();

} //end: function showdata
















function setupLanguage() {
  var buttonDE = document.querySelector("nav button:nth-of-type(1)");
  var buttonEN = document.querySelector("nav button:nth-of-type(2)");
  var buttonFR = document.querySelector("nav button:nth-of-type(3)");
  var buttonNL = document.querySelector("nav button:nth-of-type(4)");
  var buttonIT = document.querySelector("nav button:nth-of-type(5)");
  var buttonES = document.querySelector("nav button:nth-of-type(6)");


  buttonDE.addEventListener("click", function(){
    language = "de";

    buttonDE.classList.remove("langSelected");
    buttonEN.classList.remove("langSelected");
    buttonFR.classList.remove("langSelected");
    buttonNL.classList.remove("langSelected");
    buttonIT.classList.remove("langSelected");
    buttonES.classList.remove("langSelected");

    buttonDE.classList.add("langSelected");

    doedetaalwisseltruuk();
  });

  buttonEN.addEventListener("click", function(){
    language = "en";

    buttonDE.classList.remove("langSelected");
    buttonEN.classList.remove("langSelected");
    buttonFR.classList.remove("langSelected");
    buttonNL.classList.remove("langSelected");
    buttonIT.classList.remove("langSelected");
    buttonES.classList.remove("langSelected");

    buttonEN.classList.add("langSelected");
    doedetaalwisseltruuk();
  });

  buttonFR.addEventListener("click", function(){
    language = "fr";

    buttonDE.classList.remove("langSelected");
    buttonEN.classList.remove("langSelected");
    buttonFR.classList.remove("langSelected");
    buttonNL.classList.remove("langSelected");
    buttonIT.classList.remove("langSelected");
    buttonES.classList.remove("langSelected");

    buttonFR.classList.add("langSelected");
    doedetaalwisseltruuk();
  });

  buttonNL.addEventListener("click", function(){
    language = "nl";

    buttonDE.classList.remove("langSelected");
    buttonEN.classList.remove("langSelected");
    buttonFR.classList.remove("langSelected");
    buttonNL.classList.remove("langSelected");
    buttonIT.classList.remove("langSelected");
    buttonES.classList.remove("langSelected");

    buttonNL.classList.add("langSelected");
    doedetaalwisseltruuk();
  });

  buttonIT.addEventListener("click", function(){
    language = "it";

    buttonDE.classList.remove("langSelected");
    buttonEN.classList.remove("langSelected");
    buttonFR.classList.remove("langSelected");
    buttonNL.classList.remove("langSelected");
    buttonIT.classList.remove("langSelected");
    buttonES.classList.remove("langSelected");

    buttonIT.classList.add("langSelected");
    doedetaalwisseltruuk();
  });

  buttonES.addEventListener("click", function(){
    language = "es";

    buttonDE.classList.remove("langSelected");
    buttonEN.classList.remove("langSelected");
    buttonFR.classList.remove("langSelected");
    buttonNL.classList.remove("langSelected");
    buttonIT.classList.remove("langSelected");
    buttonES.classList.remove("langSelected");

    buttonES.classList.add("langSelected");
    doedetaalwisseltruuk();
  });

} //end: setupLanguage()


function doedetaalwisseltruuk() {

  var details = document.querySelectorAll("article > p");
    for (var p = 0; p < details.length; p++) {

      var tekst = data[p].details[language].longdescription;
        if (tekst == "") {
          tekst =  data[p].details[language].shortdescription;
        }
      details[p].innerHTML = tekst;

  }
} //end: doedetaalwisseltruuk()














function slider() {
  nextButton.onclick = moveRight;
  prevButton.onclick = moveLeft;

  slidertekst.textContent = data[26].title;

  var timer = setInterval(moveRight, 6*1000);

    function moveRight() {

      carouselDiv.classList.remove("positionPic1");
      carouselDiv.classList.remove("positionPic2");
      carouselDiv.classList.remove("positionPic3");
      carouselDiv.classList.remove("positionPic4");
      img1.classList.remove("fade");
      img2.classList.remove("fade");
      img3.classList.remove("fade");
      img4.classList.remove("fade");


      currentPicture += 1;
        if (currentPicture > 4) {
        currentPicture = 1;
        }

        if (currentPicture == 1) {
          carouselDiv.classList.add("positionPic1");
          img1.classList.add("fade");
          slidertekst.textContent = data[26].title;
        } else if (currentPicture == 2) {
          carouselDiv.classList.add("positionPic2");
          img2.classList.add("fade");
          slidertekst.textContent = data[28].title;
        } else if (currentPicture == 3) {
          carouselDiv.classList.add("positionPic3");
          img3.classList.add("fade");
          slidertekst.textContent = data[15].title;
        } else if (currentPicture == 4) {
          carouselDiv.classList.add("positionPic4");
          img4.classList.add("fade");
          slidertekst.textContent = data[23].title;
        }

        clearInterval(timer);
        timer = setInterval(moveRight, 6*1000);
    };

    function moveLeft() {

      carouselDiv.classList.remove("positionPic1");
      carouselDiv.classList.remove("positionPic2");
      carouselDiv.classList.remove("positionPic3");
      carouselDiv.classList.remove("positionPic4");
      img1.classList.remove("fade");
      img2.classList.remove("fade");
      img3.classList.remove("fade");
      img4.classList.remove("fade");

      currentPicture -= 1;
        if (currentPicture < 1) {
        currentPicture = 4;
        }

        if (currentPicture == 1) {
          carouselDiv.classList.add("positionPic1");
          img1.classList.add("fade");
          slidertekst.textContent = data[26].title;
        } else if (currentPicture == 2) {
          carouselDiv.classList.add("positionPic2");
          img2.classList.add("fade");
          slidertekst.textContent = data[28].title;
        } else if (currentPicture == 3) {
          carouselDiv.classList.add("positionPic3");
          img3.classList.add("fade");
          slidertekst.textContent = data[15].title;
        } else if (currentPicture == 4) {
          carouselDiv.classList.add("positionPic4");
          img4.classList.add("fade");
          slidertekst.textContent = data[23].title;
        }

        clearInterval(timer);
        timer = setInterval(moveRight, 6*1000);
    };
}















function scrollToElement() {

  img1.addEventListener("click", function(){
      var el1 = document.querySelector("main > section article:nth-of-type(27)");
      el1.scrollIntoView();
  });

  img2.addEventListener("click", function(){
      var el2 = document.querySelector("main > section article:nth-of-type(29)");
      el2.scrollIntoView();
  });

  img3.addEventListener("click", function(){
      var el3 = document.querySelector("main > section article:nth-of-type(16)");
      el3.scrollIntoView();
  });

  img4.addEventListener("click", function(){
      var el4 = document.querySelector("main > section article:nth-of-type(24)");
      el4.scrollIntoView();
  });

  buttonUp.addEventListener("click", function(){
    window.scrollTo(0, 0);
  });
}



















function lazyloading() {

  window.onscroll = function() {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        eersteitem = laatsteitem;
        laatsteitem +=30;

        showData(data);

    }
  };
}














function loadimagesmetXHR(){
  var request = new XMLHttpRequest();
  request.open('get', uri);
  request.responseType = 'json';
  request.send();

  request.addEventListener("load", function(){
    loaderElement.classList.add('hide');
    showData(request.response);
  });

  request.timeout = 10000;
  request.ontimeout = function(e) {
    // XMLHttpRequest timed out. Do something here.
    console.log("ontimeout: " +request.timeout+", het laden duurt te lang !",e);
  };
  request.onerror = function() {
      console.log('Fetch Error', request.status);
  };
} //end: function loadimagesmetXHR();


//loader feedback eerst onzichtbaar maken
loaderElement.classList.add('hide');
//actie
var laad = document.querySelector("main > button");
// laad.onclick = function(){
window.onload = function(){
  loaderElement.classList.remove('hide'); //loader wordt zichtbaar
  // this.classList.add('hide'); //button mag weg
  section.innerHTML = ""; //main leeghalen. just in case
  loadimagesmetXHR();
}; //end: button.onclick








// $ik laat even de loader zien;







/*
function loadRestApiFetch(){ //Rest Api call met Fetchs
  console.log("function loadRestApiFetch");

  loaderElement.classList.add('show');
  fetch(uri).then(function(response) {
      console.log(response.headers.get('Content-Type'));
      console.log(response.headers.get('Date'));

      console.log(response.status);
      console.log(response.statusText);
      console.log(response.type);
      console.log(response.url);

      return response.json();
    }).then(function(myJson) {
      console.log('Request successful', myJson);
      //eerst de loader weg halen !
      loaderElement.classList.remove('show');
      //dan de html renderen
      //document.querySelector("p").innerHTML="joehoe";
      //console.log(myJson);
    }).catch(function(error) {
      console.log('Request failed', error)
    });
}
//loadRestApiFetch();

*/
