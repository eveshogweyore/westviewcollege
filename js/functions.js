// jQuery Slider
$('#right-arrow').click(function() {
	var currentSlide = $('.top-row.active');
	var nextSlide = currentSlide.next();
	
	currentSlide.fadeOut(200).removeClass('active');
	nextSlide.fadeIn(200).addClass('active').css({"display": "flex", "flex-wrap": "wrap", "margin-right": "-15px", "margin-left": "-15px"});
	
	if (nextSlide.length == 0) {
		$('.top-row').first().fadeIn(200).addClass('active').css({"display": "flex", "flex-wrap": "wrap", "margin-right": "-15px", "margin-left": "-15px"});
	}
});

$('#left-arrow').click(function() {
	var currentSlide = $('.top-row.active');
	var prevSlide = currentSlide.prev();
	
	currentSlide.fadeOut(200).removeClass('active');
	prevSlide.fadeIn(200).addClass('active').css({"display": "flex", "flex-wrap": "wrap", "margin-right": "-15px", "margin-left": "-15px"});
	
	if (prevSlide.length == 0) {
		$('.top-row').last().fadeIn(200).addClass('active').css({"display": "flex", "flex-wrap": "wrap", "margin-right": "-15px", "margin-left": "-15px"});
	}
});

/*setInterval(function() {
	var currentSlide = $('.top-row.active');
	var nextSlide = currentSlide.next();
	
	currentSlide.fadeOut(200).removeClass('active');
	nextSlide.fadeIn(200).addClass('active').css({"display": "flex", "flex-wrap": "wrap", "margin-right": "-15px", "margin-left": "-15px"});
	
	if (nextSlide.length == 0) {
		$('.top-row').first().fadeIn(200).addClass('active').css({"display": "flex", "flex-wrap": "wrap", "margin-right": "-15px", "margin-left": "-15px"});
	}
}, 5000);*/

//Get all Elements that needs to be changed
const header4 = document.getElementById('h4');
const header1 = document.getElementById('h1');
const prgh = document.getElementById('paragraph');
const button = document.getElementById('link');
const imgFinder = document.getElementById('findImage');

// Default Content - START
const header4Contents = [
    "Welcome to Westview College", 
    "", 
    ""
];
const header1Contents = [
    "Top Approach to Child Education", 
    "Register now for the 2022/2023 session", 
    "A Mission to instill learning and character"
];
const prghContents = [
    "Realizing that we are mandated to groom the leaders of tomorrow, our team of dedicated staff work hand-in-hand to ensure that our students receive nothing but the best learning experience possible.", 
    "We are excited to open our doors for new students into Year 7-8 and 10-11 for the 2022/2023 session. Admission form can be filled online and inperson. To register online, kindly check the link below", 
    "Our teaching staff and support team are trained and qualified to put in the endurance, quality care, enthusiasm, diligent efforts and passion needed to ensure that your kids start today to become the leaders of tomorrow."
];
const buttonContents = [
    "Learn More", 
    "Apply Now", 
    "Learn More"
];
const buttonLinkContents = [
    "about.html", 
    "https://forms.gle/p2JKE474wfk8FUfY7", 
    "academics.html"
];
const imgFinderContents = [
    "img/Westview-Pic1.2.jpg", 
    "img/Westview-Pic6.1.jpg", 
    "img/Westview-Pic7.1.jpg"
];
// Default Content - END

// Start at index 0 content
let i = 0;
// Call the change data function at every 5 second interval
setInterval(changeData, 5000);

//The function that actually changes the content on the Index Page
function changeData() {
    header4.innerText = header4Contents[i];
    header1.innerText = header1Contents[i];
    prgh.innerText = prghContents[i];
    button.innerText = buttonContents[i];
    button.setAttribute('href', buttonLinkContents[i]);
    imgFinder.setAttribute('src', imgFinderContents[i]);
    i++;
    // Restore Index back to 0
    if(i===3) {
        i = 0;
    }
}





