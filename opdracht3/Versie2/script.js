console.log("huh?",this);
console.log("test");
//var uri = "https://api.data.amsterdam.nl/panorama/recente_opnames/2018/?format=json";
//var uri = "https://open.data.amsterdam.nl/Attracties.json";
//var uri = "https://open.data.amsterdam.nl/Activiteiten.json";
//var uri = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";
// var uri = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

// var uri = "https://open.data.amsterdam.nl/Attracties.json";
var uri = "http://cors-anywhere.herokuapp.com/https://open.data.amsterdam.nl/Attracties.json";

var header = document.querySelector('header');
var title = document.querySelector('h1');
var section = document.querySelector('section');
var button = document.querySelector("button");
var loaderElement = document.querySelector(".loader");
console.log("loader",loaderElement);

var data; //wordt gevuld na het laden van de json
var language = "nl";
var eersteitem = 0;
var laatsteitem = 30;

var img1 = document.querySelector(".slider img:nth-of-type(1)");
var img2 = document.querySelector(".slider img:nth-of-type(2)");
var img3 = document.querySelector(".slider img:nth-of-type(3)");
var img4 = document.querySelector(".slider img:nth-of-type(4)");

// var tit2 = document.querySelector(".slidertekst");
// var tit3 = document.querySelector(".slidertekst");
// var tit4 = document.querySelector(".slidertekst");
// var tit1 = document.querySelector(".slidertekst");


var currentPicture = 1;
var carouselDiv = document.querySelector(".slider div");




var nextButton = document.querySelector(".next");
var prevButton = document.querySelector(".prev");

var slidertekst = document.querySelector(".slidertekst");
// slidertekst.textContent = "hallo";

// if (currentPicture == 1) {
//   slidertekst.textContent = "hallo";
// } else if (currentPicture == 2) {
//   slidertekst.textContent = "doei";
// }
  // slidertekst.textContent = data[i].title[0];


function showData(jsonObj) {
  data = jsonObj;
  console.log("JsonObj data",data);

  // //data uit de json halen
  // for (var i = 0; i < data.length; i++) {

  for (var i = eersteitem; i < laatsteitem; i++) { //alleen de eerste 10 aanmaken ..
    var attracties = document.createElement('article');

    var titel = document.createElement('h2');
    titel.textContent = data[i].title;

    var imgSection = document.createElement("section");
    var media = data[i].media;
    for (var a = 0; a < media.length; a++) {
      // console.log("media", media);
      var img = document.createElement("img");
      img.src = media[a].url;
      imgSection.appendChild(img);

      // console.log("data[1].media[1]", data[1].media[1]);//

      img1.src = data[26].media[0].url;
      img2.src = data[28].media[0].url;
      img3.src = data[15].media[2].url;
      img4.src = data[23].media[0].url;


    }

    //
    // tit2.textContent = data[0].titel;
    // tit3.textContent = data[1].titel;
    // tit4.textContent = data[2].titel;


    var details = document.createElement("p");
    var detaillong = data[i].details[language].longdescription;
    var detailshort = data[i].details[language].shortdescription;
      if (detaillong == "") {
        detaillong = detailshort;
      }
    details.innerHTML = detaillong;

    attracties.appendChild(titel);
    attracties.appendChild(details);
    attracties.appendChild(imgSection);

    section.appendChild(attracties);



  } //end: for loop data.length


  console.log("functie aanroepen");
  setupLanguage();
  slider();

} //end: function showdata


function slider() {
  nextButton.onclick = moveRight;
  prevButton.onclick = moveLeft;

  slidertekst.textContent = "Park Frankendael";


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
          slidertekst.textContent = "Park Frankendael";
        } else if (currentPicture == 2) {
          carouselDiv.classList.add("positionPic2");
          img2.classList.add("fade");
          slidertekst.textContent = "Gaasperplas Park";
        } else if (currentPicture == 3) {
          carouselDiv.classList.add("positionPic3");
          img3.classList.add("fade");
          slidertekst.textContent = "Gemeentemuseum Den Haag";
        } else if (currentPicture == 4) {
          carouselDiv.classList.add("positionPic4");
          img4.classList.add("fade");
          slidertekst.textContent = "De Oostvaardersplassen";
        }
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
          slidertekst.textContent = "Park Frankendael";
        } else if (currentPicture == 2) {
          carouselDiv.classList.add("positionPic2");
          img2.classList.add("fade");
          slidertekst.textContent = "Gaasperplas Park";
        } else if (currentPicture == 3) {
          carouselDiv.classList.add("positionPic3");
          img3.classList.add("fade");
          slidertekst.textContent = "Gemeentemuseum Den Haag";
        } else if (currentPicture == 4) {
          carouselDiv.classList.add("positionPic4");
          img4.classList.add("fade");
          slidertekst.textContent = "De Oostvaardersplassen";
        }
    };

    setInterval(moveRight, 5*1000);
}

// function test() {
//   if (currentPicture == 1) {
//     slidertekst.textContent = "hallo";
//   } else if (currentPicture == 2) {
//     slidertekst.textContent = "doei";
//   }
// }


function setupLanguage() {
  console.log("setupLanguage");

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

  console.log("doedetaalwisseltruuk 0", language, data[0]);
    console.log("taal",data[0].details[language].shortdescription);

    console.log("doedetaalwisseltruuk 1", language, data[1]);
    console.log("taal",data[1].details[language].shortdescription);

  //language = "es";

  var details = document.querySelectorAll("article > p");

    for (var p = 0; p < details.length; p++) {

      var tekst = data[p].details[language].longdescription;
        if (tekst == "") {
          tekst =  data[p].details[language].shortdescription;
        }
      details[p].innerHTML = tekst;

  }
  // console.log("p",details)


  // var i = 0;
  // var detailtekst = data[i].details[language].longdescription;
  // var detailtekst2 = data[i].details[language].shortdescription;
  //   if (detailtekst == "") {
  //     detailtekst = detailtekst2;
  //   }
  // details.innerHTML = detailtekst;


} //end: doedetaalwisseltruuk()




  // languageButton1.textContent = data[i].details.de.language;
  // languageButton2.textContent = data.details.en.language;
  // languageButton3.textContent = data.details.fr.language;
  // languageButton4.textContent = data.details.nl.language;
  // languageButton5.textContent = data.details.it.language;
  // languageButton6.textContent = data.details.es.language;




    //
    // languageSelection.appendChild(languageButton1);
    // languageSelection.appendChild(languageButton2);
    // languageSelection.appendChild(languageButton3);
    // languageSelection.appendChild(languageButton4);
    // languageSelection.appendChild(languageButton5);
    // languageSelection.appendChild(languageButton6);
    //
    // attracties.appendChild(details);
    //
    // section.appendChild(languageSelection);
    //



//
//   var location1 = document.createElement("p");
//   var locationtekst1 = data[i].location.name;
//   var locationtekst2 = data[i].location.city;
//   var locationtekst3 = data[i].location.adress;
//   var locationtekst4 = data[i].location.zipcode;
//   var locationtekst5 = data[i].location.latitude;
//   var locationtekst6 = data[i].location.longitude;
//
//   location.textContent = locationtekst1;
//   location.textContent = locationtekst2;
//   location.textContent = locationtekst3;
//   location.textContent = locationtekst4;
//   location.textContent = locationtekst5;
//   location.textContent = locationtekst6;
//
//
//
//   // var location = document.createElement('ul');
//   // var locationdetails = data[i].location;
//   // for(var l = 0; l < locationdetails.length; l++){
//   //   var locdetails = document.createElement('li');
//   //   locdetails.textContent = locationdetails[l];
//   //   location.appendChild(locdetails);
//   //   console.log("locdetails", locdetails);
//   // }
//
//
//
//
//
//
// // console.log("details", details);










//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
function loadimagesmetXHR(){
  var request = new XMLHttpRequest();
  request.open('get', uri);
  request.responseType = 'json';
  //request.responseType = 'text'; // now we're getting a string!
  request.send();

  request.addEventListener("load", function(){
    console.log("request is geladen: ",request.response);
    //als de data geladen is, mag de loader weg:
    loaderElement.classList.add('hide');
    //functie aanroepen om van de data html te maken
    showData(request.response);
  });
//  request.onload = function() {
//      console.log("request.onload: ",request.response);
//    }
  request.timeout = 10000; // time in milliseconds
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
