function madLib() {

//get the inputs by id
var nounOneInput = document.getElementById('noun-1');
var pluralNounOneInput = document.getElementById('plural-noun-1');
var properNounOneInput = document.getElementById('proper-noun-1');
var adjectiveOneInput = document.getElementById('adjective-1');
var pluralNounTwoInput = document.getElementById('plural-noun-2');
var nounTwoInput = document.getElementById('noun-2');
var nounThreeInput = document.getElementById('noun-3');

//get values of inputs
var nounOne = nounOneInput.value;
var pluralNounOne = pluralNounOneInput.value;
var properNounOne = properNounOneInput.value;
var adjectiveOne = adjectiveOneInput.value;
var pluralNounTwo = pluralNounTwoInput.value;
var nounTwo = nounTwoInput.value;
var nounThree = nounThreeInput.value;

//make the madlib
var makeMadlib = 'Yesterday I went to the' + nounOne + 'because I wanted' + pluralNounOne + '. I walked on' + properNounOne + 'Street and saw' + adjectiveOne + 'dogs. At the store, they ran out of' + pluralNounTwo + ', so I bought' + nounTwo + 'instead. I love my new' + nounThree + '!';

//display madlib

var displayMadLib = document.getElementById('displayMadLib');
displayMadLib.textContent = makeMadLib;


}