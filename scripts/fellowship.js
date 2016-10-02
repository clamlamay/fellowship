console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];


var body = $('body');
var lands = ['The Shire', 'Rivendell', 'Mordor'];
// var body = document.body;
var section = $('<section>');
var art = '<article>';


function makeMiddleEarth() {
  var lands = ['The Shire', 'Rivendell', 'Mordor'];
  body.append(section);
  section.prop('id', 'middle-earth');
  // var section = '<section id=\'middle-earth\'></section>';
  $.each(lands, function(index, someValue){
    $('#middle-earth').append('<article>' + '<h1>' + someValue + '</h1>' + '</article>')
 });
}

makeMiddleEarth();


function makeHobbits(){

  var firstArticle = $('article:nth-child(1)');
  var firstHeader =$('ul:nth-child(2)');
  var newEl = $('<ul>');
  $(firstArticle).append(newEl);
  $.each(hobbits, function(index, someValue){
    $(newEl).append('<li class="hobbit">' + someValue + '</li>')
  });
}

makeHobbits();

  
function keepItSecretKeepItSafe(){

var Div = $('<div>');
var frodoBaggins = ('li:nth-child(1)');
$(frodoBaggins).append(Div);  
  // not sure what this is asking: add the ring as a child of `Frodo`
var ringDiv = $('#middle-earth > article:nth-child(1) > ul > li:nth-child(1) > div')
    ringDiv.prop('id', 'middle-earth').prop('class', 'magic-imbued-jewelry')

}

keepItSecretKeepItSafe();


function makeBuddies(){

var asideTag = $('<aside>');  
var rivChild = $('#middle-earth > article:nth-child(2)');
var newEl = $('<ul>');
$(rivChild).append(newEl);
$.each(buddies, function(index, someValue){
$(newEl).append('<li>' + someValue + '</li>')
  });

}
makeBuddies();


function beautifulStranger(){
// //   // your answers here
var strider = $('#middle-earth > article:nth-child(2) > ul > li:nth-child(4)');
strider.text("Aragorn");

}
beautifulStranger();

function leaveTheShire(){

var hobbitMove = $('#middle-earth > article:nth-child(1) > ul');
var rivChild = $('#middle-earth > article:nth-child(2)');
hobbitMove.appendTo(rivChild);
}

leaveTheShire();

function forgeTheFellowship() {

var Div = $('<div>');
var rivChild = $('#middle-earth > article:nth-child(2)');

}

forgeTheFellowship();

// function theBalrog(){
//   // your answers here
// }

// theBalrog();

// function hornOfGondor() {
//   // your answers here
// }

// hornOfGondor();

// function itsDangerousToGoAlone() {
//   // your answers here
// }

// itsDangerousToGoAlone();

// function weWantsIt() {
//   // your answers here
// }

// weWantsIt();

// function thereAndBackAgain(){
//   // your answers here
// }

// thereAndBackAgain();


// Extra code for this assignment 

//   // var unOrderedList = $('ul');
//   // var firstHeader = $(firstArticle > h1);
// // //   $.each(hobbits, function(index, shireHome){
// // //   headerOne.append('<ul>' + shireHome + '</ul>');
// // //   });
// // $(art).prepend(hobbits);
// // $(firstArticle).append(unOrderedList)
// var firstArticle = $('article:nth-child(1)');
// $(firstArticle).append('<ul>')
// $.each(hobbits, function(index, someValue){
//   $(firstArticle).append('<ul>' + someValue + '</ul>')
// });
// // // $(art).append("<ul>Name of a hobbit</ul>");
// // }
// //   #middle-earth > article:nth-child(1) > h1
