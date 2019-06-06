console.log("huh?",this);
//var uri = "https://api.data.amsterdam.nl/panorama/recente_opnames/2018/?format=json";
//var uri = "https://open.data.amsterdam.nl/Attracties.json";
//var uri = "https://open.data.amsterdam.nl/Activiteiten.json";
//var uri = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";
// var uri = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

var uri = "https://open.data.amsterdam.nl/Attracties.json";

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

      // if (img.src == "") {
      //   img.classList.add("none");
      // }
    }




    var details = document.createElement("p");
    var detaillong = data[i].details[language].longdescription;
    var detailshort = data[i].details[language].shortdescription;
      if (detaillong == "") {
        detaillong = detailshort;
      }
    details.innerHTML = detaillong;

    attracties.appendChild(titel);
    attracties.appendChild(imgSection);

    section.appendChild(attracties);
    attracties.appendChild(details);


  } //end: for loop data.length


  console.log("functie aanroepen");
  setupLanguage();

} //end: function showdata





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
    doedetaalwisseltruuk();
  });

  buttonEN.addEventListener("click", function(){
    language = "en";
    doedetaalwisseltruuk();
  });

  buttonFR.addEventListener("click", function(){
    language = "fr";
    doedetaalwisseltruuk();
  });

  buttonNL.addEventListener("click", function(){
    language = "nl";
    doedetaalwisseltruuk();
  });

  buttonIT.addEventListener("click", function(){
    language = "it";
    doedetaalwisseltruuk();
  });

  buttonES.addEventListener("click", function(){
    language = "es";
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
