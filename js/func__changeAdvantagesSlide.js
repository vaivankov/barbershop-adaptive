"use strict";

(function () {
	window.changeAdvantagesSlide = function () {
		let targetSVG = document.querySelector(".advantages__icon");
		let targetTitle = document.querySelector(".advantages__title");
		let targetDescription = document.querySelector(".advantages__description");

		targetSVG.innerHTML = `<use xlink:href="${this.dataset.svg}"></use>`;
		targetTitle.innerHTML = this.dataset.title;
		targetDescription.innerHTML = this.dataset.description;
	};
})();

for (let a of advantagesRadioAll) {
	a.addEventListener("click", changeAdvantagesSlide);
}
