var quotes = {
	q1: {quote: "Musicians don't retire, they stop when there's no more music in them.", artist: "Louis Armstrong"},
	q2: {quote: "The true beauty of music is that it connects people. It carries a message, and we, the musicians, are the messengers.", artist: "Roy Ayers"},
	q3: {quote: "Lose your dreams and you might lose your mind.", artist: "Mick Jagger"},
	q4: {quote: "The things that come to those that wait may be the things left by those that got there first.", artist: "Steven Tyler"},
	q5: {quote: "Music is about the only thing left that people don't fight over.", artist: "Ray Charles"},
	q6: {quote: "Music is the devine way to tell beautiful, poetic things to the heart.", artist: "Pablo Casais"},
	q7: {quote: "Trust is hard to come by. That's why my circle is small and tight. I'm kind of funny about making new friends.", artist: "Eminem "},
	q8: {quote: "Those who dance are considered insane by those who can't hear the music.", artist: "George Carlin"},
	q9: {quote: "One good thing about music, when it hits you, you feel no pain.", artist: "Bob Marley"},
	q10: {quote: "Life is what happens to you when you're making other plans.", artist: "John Lennon"}
}

var getNewQuote = function () {
	var rNumber = Math.floor(Math.random()*10+1);
	var q = "q" + rNumber;
	newQoute = quotes[q].quote;
	newAritst = quotes[q].artist;

}

// twitter Button
function clickToTweet() {
	// document.getElementById didn't work
	// used jQuery and 'text()' instead;

	var twitterDe = "https://twitter.com/intent/tweet?text=";
	var	text = $("#quote").text()  + $("#artist").text();
	var tweet = twitterDe + text;
	$("a#twitter").attr("href", tweet);
}

// Selector function
function __(selector) {
	return document.getElementById(selector);
}

// generates quote
function dataGene() {
	// animate
	$('#quote').hide('fast');
	$('#artist').hide('fast');

	// load quote
	getNewQuote();

	// insert to DOM and animate
	$('#quote').text(newQoute).show('fast');
	$('#artist').text(' - ' + newAritst).show('fast');
	clickToTweet();
};
// Click to get a new Quote button
var quoteGene = __('newqoute');
quoteGene.addEventListener('click', dataGene, false);