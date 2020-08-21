"use strict";

(function () {
	window.changeReviewsSlide = function () {
		let sourceDesktop = document.querySelector(".reviews__source-desktop");
		let sourceTablet = document.querySelector(".reviews__source-tablet");
		let sourceMobile = document.querySelector(".reviews__author-image");
		let reviewersName = this.dataset.name;
		let targetTitle = document.querySelector(".reviews__author-name");
		let targetDescription = document.querySelector(".reviews__text");

		sourceDesktop.srcset = `img/raster/${reviewersName}-desktop.jpg 1x, img/raster/${reviewersName}-desktop@2x.jpg 2x`;
		sourceTablet.srcset = `img/raster/${reviewersName}-tablet.jpg 1x, img/raster/${reviewersName}-tablet@2x.jpg 2x`;
		sourceMobile.src = `img/raster/${reviewersName}-mobile.jpg`;
		sourceMobile.srcset = `img/raster/${reviewersName}-mobile@2x.jpg 2x`;
		targetTitle.innerHTML = this.dataset.title;
		targetDescription.innerHTML = this.dataset.description;
	};
})();

for (let a of reviewsRadioAll) {
	a.addEventListener("click", changeReviewsSlide);
}
