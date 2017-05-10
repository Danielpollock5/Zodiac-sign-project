// array of objects to store zodiac data
var zodiac = [
	{	
		// objects begin
		sign: "aquarius",
		fortune: "Knowledge, Humanitarian, Serious, Insightful, Duplicitous",
		image: "img/aquarius.jpg",
		positive: "The Positives: friendly, Humanitarian, Intelligent, creative, independent, loyal",
		negative: "test"
	},
	{
		sign: "aries",
		fortune: "Active, Demanding, Determined, Effective, Ambitious",
		image: "img/aries.jpg",
		positive: "The Positives: adventurous, courageous, versatile, lively, positive, passionate",
		negative: "The Negatives: arrogant, stubborn, Impulsive, indiscipline, confrontational"
	},
	{
		sign: "cancer",
		fortune: "Emotion, Diplomatic, Intensity, Impulsive, Selective",
		image: "img/cancer.png",
		positive: "test",
		negative: "test"
	},
	{
		sign: "capricorn",
		fortune: "Determination, Dominance, Perservering, Practical, Willful",
		image: "img/capricorn.jpg",
		positive: "test",
		negative: "test"
	},
	{
		sign: "gemini",
		fortune: "Communication, Indecision, Inquisitive, Intelligent, Changeable",
		image: "img/gemini.jpg",
		positive: "test",
		negative: "test"
	},
	{
		sign: "leo",
		fortune: "Ruling, Warmth, Generosity, Faithful, Initiative",
		image: "img/leo.png",
		positive: "test",
		negative: "test"
	},
	{
		sign: "libra",
		fortune: "Balance, Justice, Truth, Beauty, Perfection",
		image: "img/libra.jpg",
		positive: "test",
		negative: "test"
	},
	{
		sign: "pisces",
		fortune: "Fluctuation, Depth, Imagination, Reactive, Indecisive",
		image: "img/pisces.jpg",
		positive: "test",
		negative: "test"
	},
	{
		sign: "sagittarius",
		fortune: "Philosophical, Motion, Experimentation, Optimism",
		image: "img/sagittarius.gif",
		positive: "test",
		negative: "test"
	},
	{
		sign: "scorpio",
		fortune: "Transient, Self-Willed, Purposeful, Unyielding",
		image: "img/scorpio.gif",
		positive: "test",
		negative: "test"
	},
	{
		sign: "taurus",
		fortune: "	Security, Subtle strength, Appreciation, Instruction, Patience",
		image: "img/taurus.gif",
		positive: "test",
		negative: "test"
	},
	{
		sign: "virgo",
		fortune: "Analyzing, Practical, Reflective, Observation, Thoughtful",
		image: "img/virgo.jpg",
		positive: "test",
		negative: "test"
	}
]
// gets the info from the user and searches the array of objects, it saving whatever i put into the input..

function getInfo() {
	var userInput = document.getElementById("signInput").value
	var userInput = userInput.toLowerCase()
	
	for (var i = 0; i < zodiac.length; i++) {
		if (userInput == zodiac[i].sign) {
			document.getElementById("userSign").innerHTML = userInput
			document.getElementById("horoImg").src = zodiac[i].image
			document.getElementById("info").innerHTML = zodiac[i].fortune
			document.getElementById("info").style.visibility = "visible";
			// document.getElementById("positive").innerHTML = zodiac[i].positive
			// document.getElementById("negative").innerHTML = zodiac[i].negative
			return
		}
		else{
			document.getElementById("signInput").classList.add("showInfo");
			document.getElementById("userSign").innerHTML = userInput.toLowerCase() + " does not exist!";
			document.getElementById("info").style.visibility = "hidden";
			document.getElementById("horoImg").src = "img/unknown.gif";
		}
	}
}
document.getElementById("signInput")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("sign").click();
    }
});






