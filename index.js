const nav = document.getElementById("nav-bar");
const hamburger = document.getElementById("button-hamburger");
const closeButton = document.getElementById("close-button");
const mobileHeroImage = document.getElementById("mobile-img");

hamburger.addEventListener("click", (e) => {
	nav.classList.toggle("hidden");
	hamburger.classList.toggle("hidden");
	closeButton.classList.toggle("hidden");
	mobileHeroImage.classList.toggle("hidden");
});

closeButton.addEventListener("click", (e) => {
	nav.classList.toggle("hidden");
	hamburger.classList.toggle("hidden");
	closeButton.classList.toggle("hidden");
	mobileHeroImage.classList.toggle("hidden");
});
