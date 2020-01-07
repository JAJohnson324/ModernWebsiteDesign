// Responsive Animated 3D Navigation Bar | HTML and CSS and JavaScript

selector(".menu").addEventListener('click', function() {
	this.classList.toggle('open');
	selector('header').classList.toggle('open');
	selector('.overlay').classList.toggle('open');
});	

function selector(s) {
	return document.querySelector(s)
}