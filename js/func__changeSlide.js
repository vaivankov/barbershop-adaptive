"use strict";

(function () {
	window.changeSlide = function () {
		let targetSrcText = this.dataset.targetSrc;
		let targetSrc = document.querySelector(targetSrcText);
		let targetTitleText = this.dataset.targetTitle;
		let targetTitle = document.querySelector(targetTitleText);
		let targetDescriptionText = this.dataset.targetDescription;
		let targetDescription = document.querySelector(targetDescriptionText);

		targetSrc.src = this.dataset.src;
		targetTitle.innerHTML = this.dataset.title;
		targetDescription.innerHTML = this.dataset.description;
	};
})();

for (let a of advantagesRadioAll) {
	a.addEventListener("click", changeSlide);
}
