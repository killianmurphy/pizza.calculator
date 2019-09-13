//killian, pol. opdracht: pizza calculator

var aantalSmallPizza = 0
var aantalMediumPizza = 0
var aantalLargePizza = 0

function smallPizza(){
    aantalSmallPizza = prompt("hoeveel pizza's wilt u",'1')
       document.getElementById("aantalSmallPizza").innerHTML = aantalSmallPizza + ' kleine pizzas';
}
//voegt knop toe met de vraag hoeveel small pizza's je wilt, en je kunt invullen hoeveel pizza's je wilt

function mediumPizza(){
	aantalMediumPizza = prompt("hoeveel pizza's wilt u",'1')
       document.getElementById("aantalMediumPizza").innerHTML = aantalMediumPizza + ' medium pizzas';
}
//voegt knop toe met de vraag hoeveel medium pizza's je wilt, en je kunt invullen hoeveel pizza's je wilt

function largePizza(){
  aantalLargePizza = prompt("hoeveel pizza's wilt u",'1')
   document.getElementById("aantalLargePizza").innerHTML = aantalLargePizza + ' large pizzas';
}
//voegt knop toe met de vraag hoeveel large pizza's je wilt, en je kunt invullen hoeveel pizza's je wilt

function bestelling(){
	var prijs = Number(aantalSmallPizza)*5.99 + Number(aantalMediumPizza)*6.99 + Number(aantalLargePizza)*9.99 ;
	document.getElementById("prijs").innerHTML = 'totaal prijs: ' + prijs ;
}
//laat het totaal bedrag zien en telt de prijs van alle pizza's bij elkaar op

